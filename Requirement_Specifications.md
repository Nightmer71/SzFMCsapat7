# **Szoftver Követelményspecifikáció**

## Rövid leírás:

A tervezett rendszer egy webalapú alkalmazás, amely egyesíti a számológép és a mértékegység-átváltó funkciókat.
Az alkalmazás reszponzív lesz, vagyis mobilon, tableten és asztali számítógépen használható.
Felhasználóbarát, egyszerű kezelőfelülettel rendelkezik.
Nem igényel telepítést, és támogatja a legfontosabb matematikai műveleteket, valamint a gyakran használt mértékegység átváltásokat is.

## Jelenlegi helyzet leírása
A felhasználók jelenleg külön számológépeket és külön online eszközöket használnak a matematikai számításokhoz és a mértékegység-átváltásokhoz. Ezek a megoldások széttagoltak, nem mindig reszponzívak, és sokszor reklámokkal terheltek. A felhasználók igénye egy egyszerű, gyors, reklámmentes, webalapú alkalmazás, amely egyesíti a két funkciót.

## Vágyálom rendszer leírása
A cél egy olyan reszponzív, webalapú alkalmazás kifejlesztése, amely mobilon, tableten és asztali számítógépen egyaránt elérhető. Nem igényel telepítést, felhasználóbarát kezelőfelülettel rendelkezik, és biztosítja a legfontosabb matematikai műveleteket, valamint a gyakran használt mértékegység-átváltásokat. Az alkalmazás többnyelvű és bővíthető új funkciókkal.

## Jelenlegi üzleti folyamatok modellje
- A felhasználók külön alkalmazásokat vagy weboldalakat nyitnak meg számoláshoz és átváltáshoz.  
- A számítási és átváltási eredményeket manuálisan másolják át más alkalmazásokba.  
- A meglévő megoldások gyakran hirdetésekkel vagy bonyolult kezelőfelülettel terheltek.  


## Igényelt üzleti folyamatok modellje
- Egyetlen böngészőalapú alkalmazás biztosítja a számításokat és átváltásokat.  
- A felhasználó választhat a számológép és a mértékegység-átváltó modul között.  
- Az eredmények egy kattintással vágólapra másolhatók.  
- A rendszer több nyelven elérhető. 


----



| Modul                 | ID  | Név                   | V.  | Kifejtés                                                                 |
|------------------------|-----|-----------------------|-----|--------------------------------------------------------------------------|
| Matematikai műveletek  | K1  | Alapműveletek         | 1.0 | Legyen elérhető az összeadás, kivonás, szorzás és osztás.                 |
| Mértékegység-átváltás  | K2  | Hossz átváltás        | 1.0 | Támogassa a centiméter, kilométer átváltást.                              |
| Mértékegység-átváltás  | K3  | Tömeg átváltás        | 1.0 | Támogassa a gramm, kilogramm átváltást.                                   |
| Mértékegység-átváltás  | K4  | Térfogat átváltás     | 1.0 | Támogassa a liter, milliliter, gallon közötti átváltást.                  |
| Mértékegység-átváltás  | K5  | Idő átváltás          | 1.0 | Támogassa a másodperc, perc átváltást.                                    |
| Felhasználói felület   | K6  | Reszponzív UI         | 1.0 | A felület optimalizált legyen mobil, tablet és PC használatra.            |
| Felhasználói élmény    | K7  | Vágólapra másolás     | 1.0 | Az eredmények egy kattintással a vágólapra másolhatóak.                   |
| Rendszer               | K8  | Böngésző alapú működés| 1.0 | Az alkalmazás bármely modern böngészőben telepítés nélkül fusson.         |
| Rendszer               | K9  | Erőforrás-hatékonyság | 1.0 | A rendszer gyorsan fusson régebbi eszközökön is, kevés adatforgalmat igényeljen. |
| Rendszer               | K10 | Bővíthetőség          | 1.0 | A rendszer architektúrája tegye lehetővé új funkciók könnyű hozzáadását.  |
| Rendszer               | K11 | Hibakezelés           | 1.0 | Érvénytelen bemenet esetén a rendszer adjon figyelmeztető üzenetet.       |
