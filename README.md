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
 - A felhasználónak lehetősége legyen tárygakat felvenni és törölni, továbbá szerkeszteni a felvett tárgyakat relatíve egyszerűen
 - Minden felhasználónak külön tárolódjanak az adatai egy adatbázisban (a fiók adatok is meg a felvett tárgyak is)
 - Minden gomb ami a webfelületen található az működő képest legyen
2. Nem funkcionális Elvárások
 - Ne legyen bonyolult vagy nehezen érthető új felhasználónak az oldal használata
 - Le legyen ellenőrizve belépésnél/feliratkozásnál az összes mezőnek a nemüressége
 - Ne tartson tovább pár másodpercnél bármilyen funkciója az oldalnak (ez automatikusan teljesül)
3. Használatieset-modell
 - Szerepkörök: Egy user-nek volt admin/user szerepköre még az első verzióban de ez ki lett véve a 2.0ás verzióbol mivel nem lett implementálva. Egy lehető jövő fejlesztési opció az az hogy az "admin" szerepkörű felhasználók legyenek csak képesek órákat felvenni egy listába, és ahelyett hogy "bármilyen" órát vehessenek fel a sima userek, csak olyanokat tudnak majd felvenni ami egy az adminok által csinált listában szerepelnek. Ez vizsont már széleskörűbb átváltoztatását igényelné az egész weboldal működésének hiszen ekkor a tárgyak sem lennének teljesen szerkeszhetőek mint most.

-
##Tervezés
** Architektúra terv
1. Végpontok listája:
 - GET / - főoldal 
 - GET /login - bejelentkező oldal
 - GET /login/signup - regisztriációs oldal
 - GET/subjects/list - Saját tárgyak listája oldal (ha nincs beloggolva user akkor a login végpont jelenik meg)
 - GET /subjects/new - új tárgy felvétele
 - GET /subjects/update/{id} - meglévő tárgy szerkesztése
 - POST /login/signup - bejelentkezési adatok küldése
 - POST /subjects/new - új tárgy felvétel adatainak küldése
 - POST /subjects/update/{id} - meglévő tárgy módositott adatainak küldése
 - POST /subjects/delete/{id} - meglévő tárgy törlése

2.Oldalvázlat
 - ![Felhasználóifelölet modell vázlat](https://github.com/Atg269/alkfejlbead/blob/master/documentation/adatbmodell.png)
 - ![Végső megvalósítás kínézete](https://github.com/Atg269/alkfejlbead/blob/master/documentation/endresult.png)

3. ![Adatmodell és Adatbázisterv](https://github.com/Atg269/alkfejlbead/blob/master/documentation/userhome.jpg)


##Implementáció

1. Fejlesztői környezet bemutatása
2. 




##Tesztelés

- Az oldalon egységteszt van végrehajtva a mocha segitségével

![Teszt eredmények](https://github.com/Atg269/alkfejlbead/blob/master/documentation/indextext.png)


##Felhasználói dokumentáció
Futtatáshoz ajánlott hardver, Windows XP+, minimum 1 GB RAM. 
Emellet a felhasználónak szüksége van egy böngésző programr (Chrome, FireFox,IE) ahol el tudja érni a C9 weboldalt.
A weboldal elérése: https://alkfejlbead1-atg269.c9.io/
