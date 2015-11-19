# Alkalmazások Fejlesztése 1. Beadandó
- [Követelményanalízis](https://www.github.com/Atg269/alkfejlbead#követelményanalízis)
- [Tervezés](https://www.github.com/Atg269/alkfejlbead#tervezés)
- [Implementáció](https://www.github.com/Atg269/alkfejlbead#implementáció)
- [Tesztelés](https://www.github.com/Atg269/alkfejlbead#tesztelés)
- [Felhasználói dokumentáció](https://www.github.com/Atg269/alkfejlbead#felhasználói dokumentáció)

##Követelményanalízis

1. Funkcionális Elvárások
 - A felhasználónak lehetősége legyen egy felhasználói fiókot csinálnia a neve és egyéb információk megadásával abban az esetben ha használni akarja a weboldalt
 - A felhasználónak lehetősége legyen beloggolni a felhasználói fiókjával hogy fel tudjon venni tárygakat
 - A felhasználónak lehetősége legyen tárygakat felvenni és törölni, továbbá szerkeszteni a felvett tárgyakat 
 - Minden felhasználónak külön tárolódjanak az adatai egy adatbázisban (a fiók adatok is meg a felvett tárgyak is)
 - A neptunos jelszóval csinált fiók az egyedi legyen
 - Minden gomb ami a webfelületen található az működő képest legyen
2. Nem funkcionális Elvárások
 - Ne legyen bonyolult vagy nehezen érthető új felhasználónak az oldal használata
 - Le legyen ellenőrizve belépésnél/feliratkozásnál az összes mezőnek a nemüressége
 - Ne tartson tovább pár másodpercnél bármilyen funkciója az oldalnak (ez automatikusan teljesül)
 - Amikor egy felhasználó új fiók adatokat ad meg akkor a jelszava titkosítódjon
3. Használatieset-modell
 - Szerepkörök: Az oldalon van vendég és user szerepkör, a vendég az gyakorlatilag csak a fogadóoldalt tudja látni. Ahhoz hogy az oldal fő funkcióját használatba vehesse valaki regisztrálni kell user-ként. Ezenkivül egy user-nek volt admin/user szerepköre még az 1.0as verzióban de ez ki lett véve a 2.0as verzióbol mivel nem lett semmilyen konkrét módon implementálva. Egy lehető jövő fejlesztési opció az az hogy az "admin" szerepkörű felhasználók legyenek csak képesek órákat felvenni egy listába, és ahelyett hogy "bármilyen" órát vehessenek fel a sima userek, csak olyanokat tudnak majd felvenni ami egy az adminok által csinált listában szerepelnek. Ez vizsont már széleskörűbb átváltoztatását igényelné az egész weboldal működésének hiszen ekkor a tárgyak sem lennének teljesen szerkeszhetőek mint most.
 - Folyamatok
  ![Teljes oldal folyamat](https://github.com/Atg269/alkfejlbead/blob/master/documentation/folyamat.png)
 - Egy felhasználó az oldalra lépve az index fogadóoldalt látja. Itt bejelentkezhet a jobb felső sarokbeli gombbal, és a bejelentkezés oldalon pedig feliratkozhat ha nincs fiókja. Sikertelen bejelentkezés vagy registráció után imént a bejelentkező oldalra vagyunk vissza utasítva. Ha sikerült belépnünk akkor lehet használni az oldal fő funckióját, a tárgyfelvételt. Ha már bejelentkeztünk a főoldalra is vissza lehet lépni (a főoldalról pedig a tárgyfelvevőre vissza) de a főoldal egyelőre csak egy welcome page, ez is egy jövő beli fejlesztési lehetőség (pl főoldalon valami extrát tudjon az csinálni aki már bejelentkezett). A bejelentkezett felhasználók kijelentkezni is tudnak ha befejezték a dolgukat az oldalon.

##Tervezés
1.Architektúra terv
* Végpontok listája:
1. GET / - főoldal
2. GET /login - bejelentkező oldal
3. GET /login/signup - regisztrációs oldal
4. GET /subjects/list - saját tárgyak listájának megjelenítése
5. GET /delete/:id -tárgynak törlése
6. POST /new - új tárgynak a felvétele
7. POST /edit/:id - meglévő tárgynak a szerkesztése

2.Adatbázis modell
  ![Adatmodell és Adatbázisterv](https://github.com/Atg269/alkfejlbead/blob/master/documentation/adatbmodell.png)

3.Oldalvázlat
  ![Felhasználóifelölet modell vázlat](https://github.com/Atg269/alkfejlbead/blob/master/documentation/userhome.jpg)

4.Végső megvalósítás
  ![Végső megvalósítás kínézete](https://github.com/Atg269/alkfejlbead/blob/master/documentation/endresult.png)
 
 

##Implementáció

1.Fejlesztői környezet bemutatása
A project a C9 fejlesztői környezetben (c9.io) lett megírva nagyrészt, egy Node.js projectet használva. A megjelenítéshez a handlebars (hbs) fájlok vannak felhasználva és a bootswatch darkly téma van kiválasztva. A használt node modulok listája, amik NPM-el vagy bower package manager-rel lettek installálva:
 - bcryptjs
 - body-parser
 - chai
 - connect-flash
 - express
 - express-session
 - express-validator
 - hbs
 - mocha
 - passport
 - passport-local
 - sails-disk
 - sails-memory
 - waterline
 - zombie

##Tesztelés

- Az oldalon egységteszt van végrehajtva a mocha segitségével

![Teszt eredmények](https://github.com/Atg269/alkfejlbead/blob/master/documentation/indextext.png)


##Felhasználói dokumentáció
Futtatáshoz ajánlott hardver, Windows XP+, minimum 1 GB RAM. 
Emellet a felhasználónak szüksége van egy böngésző programr (Chrome, FireFox,IE) ahol el tudja érni a C9 weboldalt.
A weboldal elérése: https://alkfejlbead1-atg269.c9.io/
