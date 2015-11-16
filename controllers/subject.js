var express = require('express');

var router = express.Router();

//Viewmodel réteg

function decorateErrors(errorContainer) {
    return errorContainer.map(function (e) {
        return e;
    });
}



router.get('/list', function (req, res) {
    // user alapján listáz, mindenki a saját maga által felvett dolgokat látja csak
    req.app.models.subject.find({user: req.user.id}).then(function (subjects){
        console.log(subjects);
        //megjelenítés
        res.render('subjects/list', {
            subjects: decorateErrors(subjects),
            messages: req.flash('info'),
        });
    });
    
});
router.get('/new', function (req, res) {
    var validationErrors = (req.flash('validationErrors') || [{}]).pop();
    var data = (req.flash('data') || [{}]).pop();
    
    res.render('subjects/new', {
        validationErrors: validationErrors,
        data: data,
    });
});
router.post('/new', function (req, res) {
    // adatok ellenőrzése
    req.checkBody('targynev', 'Hibás tárgynév').notEmpty().withMessage('Kötelező megadni!');
    req.checkBody('kredit', 'Hibás kreditérték').notEmpty().withMessage('Kötelező megadni!');
    req.checkBody('helyszin', 'Hibás helyszín').notEmpty().withMessage('Kötelező megadni!');
    req.sanitizeBody('leiras').escape();
    req.checkBody('leiras', 'Hibás leírás').notEmpty().withMessage('Kötelező megadni!');
    
    var validationErrors = req.validationErrors(true);
    console.log(validationErrors);
    
    if (validationErrors) {
        // űrlap megjelenítése a hibákkal és a felküldött adatokkal
        req.flash('validationErrors', validationErrors);
        req.flash('data', req.body);
        res.redirect('/subjects/new');
    }
    else {
        // adatok elmentése (ld. később) és a hibalista megjelenítése
        req.app.models.subject.create({
            subjectname: req.body.targynev,
            credit: parseInt(req.body.kredit),
            location: req.body.helyszin,
            description: req.body.leiras,
            user: req.user.id,
            // user beállítás ide kell vszinű
        })
        .then(function (subject) {
            //siker
            req.flash('info', 'Tárgy sikeresen felvéve!');
            res.redirect('/subjects/list');
        })
        .catch(function (err) {
            //hiba
            console.log(err);
        });
      
    }
});

router.get('/delete/:id', function(req, res) {
    var id = req.params.id;
    req.app.models.subject.destroy({id: id})
        .then(function (deletedErrors) {
            res.format({
                'text/html': function(){
                    res.redirect('/subjects/list');
                },
                'application/json': function () {
                    res.json({ success: true });
                }
            });
        });
});

router.get('/edit/:id', function(req, res) {
    var subjectid = req.params.id;
    //var data = (req.flash('data') || [{}]).pop();
    req.app.models.subject.findOne({id:subjectid}).then(function (subject){
            console.log(subject);
            //megjelenítés
            res.render('subjects/edit', {
                subject: subject,

        });
    });
});

router.post('/edit/:id', function(req, res) {
	var subjectid = req.params.id;
	req.app.models.subject.findOne({id:subjectid}).then(function ( subject) {
    	req.checkBody('targynev', 'Hibás tárgynév').notEmpty().withMessage('Kötelező megadni!');
        req.checkBody('kredit', 'Hibás kreditérték').notEmpty().withMessage('Kötelező megadni!');
        req.checkBody('helyszin', 'Hibás helyszín').notEmpty().withMessage('Kötelező megadni!');
        req.sanitizeBody('leiras').escape();
        req.checkBody('leiras', 'Hibás leírás').notEmpty().withMessage('Kötelező megadni!');
        
        var validationErrors = req.validationErrors(true);
        console.log(validationErrors);
        
        if (validationErrors) {
            // űrlap megjelenítése a hibákkal és a felküldött adatokkal
            req.flash('validationErrors', validationErrors);
            req.flash('data', req.body);
            res.redirect('/subjects/new');
        }
        else {
            // adatok elmentése (ld. később) és a hibalista megjelenítése
            req.app.models.subject.update({id:subjectid},{
                subjectname: req.body.targynev,
                credit: parseInt(req.body.kredit),
                location: req.body.helyszin,
                description: req.body.leiras,
                user: req.user.id,
            })
            .then(function (subject) {
                //siker
                req.flash('info', 'Tárgy sikeresen módosítva!');
                res.redirect('/subjects/list');
            })
            .catch(function (err) {
                //hiba
                console.log(err);
            });
          
        }
	});
});

module.exports = router;