# Rendszerterv: Webes számológép és mértékegység átváltó diákok számára

## 1. Mit? (A rendszer leírása)

A fejlesztendő rendszer egy weboldal, amely két fő funkcióval rendelkezik:

- **Számológép oldal:**  
  Ez az oldal négy alapműveletet képes elvégezni: összeadás, kivonás, szorzás, osztás. A felhasználó egyszerű, letisztult felületen adhatja meg a műveletek bemeneti értékeit, majd a rendszer kiszámolja és megjeleníti az eredményt.

- **Mértékegység átváltó oldal:**  
  Ez az oldal különböző mértékegységek (pl. hosszúság, tömeg, idő, hőmérséklet) között kínál átváltási lehetőséget. A felhasználó kiválaszthatja a forrás és cél mértékegységet, majd megadja az átváltandó értéket, amit a rendszer automatikusan átszámít és megjelenít.

A rendszer célcsoportja diákok, akiknek mindennapi tanulásuk során szükségük lehet egyszerű számolási feladatokra vagy mértékegység átváltásokra.  
A weboldal elérése bármilyen modern böngészőből lehetséges (asztali gép, laptop, tablet, mobil).

A rendszer felépítése:

- **Felhasználói felület:**  
  Két elkülönített oldal (számológép, átváltó), navigációs menüvel.  
  Letisztult, diákbarát design.

- **Technológiák:**  
  Fejlesztés JavaScript, HTML, CSS felhasználásával, keretrendszer nélkül.

## 2. Miért? (A rendszer célja)

A rendszer fő célja, hogy megkönnyítse a diákok mindennapi számolással és mértékegység-átváltással kapcsolatos feladatait.  
A webes eszköz előnyei:

- **Gyors és egyszerű használat:**  
  A diákok gyakran szembesülnek olyan feladatokkal, amelyekhez számológépet vagy mértékegység átváltót használnak. Egy könnyen elérhető webes alkalmazás segíti őket abban, hogy ne kelljen külön alkalmazást telepíteniük, vagy más online forrásokat keresniük.

- **Tanulási folyamat támogatása:**  
  A rendszer nemcsak a végeredményt mutatja, hanem igény esetén (bővítésnél) lépésenként is bemutathatja a számítások menetét, ezzel fejlesztve a diákok matematikai gondolkodását.

- **Mobilitás és platformfüggetlenség:**  
  A webes megoldás bármilyen eszközről elérhető, így a diákok akár otthon, iskolában, vagy útközben is használhatják.

- **Egyszerűség:**  
  Nem igényel regisztrációt, adatmegadást vagy extra jogosultságokat, így a használat akadálymentes.

## 3. Hogyan? (A fejlesztési terv)

### Fejlesztési módszertan

- **Kanban:**  
  A fejlesztés Kanban módszertannal zajlik, amely folyamatos fejlesztést és átlátható munkamenetet biztosít.  
  A fejlesztési folyamat főbb lépései:  
    - Feladatok felvétele és priorizálása (pl. alapműveletek, UI design, átváltó funkció).
    - Folyamatos fejlesztés, tesztelés és kiadás.
    - Visszacsatolás alapján módosítások.

### Technológiai megvalósítás

- **Frontend:**  
  - HTML: Oldal szerkezete, űrlapok, gombok, navigáció.
  - CSS: Stílusok, elrendezés, reszponzivitás.
  - JavaScript: Interaktivitás, számítások, átváltási logika.

- **Oldalszerkezet:**  
  - Főoldal: Navigáció a két funkció között.
  - Számológép oldal: Két mező a számoknak, művelet kiválasztása, eredmény megjelenítése.
  - Átváltó oldal: Mértékegység választás (pl. cm → m, kg → g), érték megadása, átváltott érték megjelenítése.

- **Felhasználói élmény:**  
  - Egyszerű, letisztult UI.
  - Hibakezelés: Ha a felhasználó érvénytelen adatot ad meg, figyelmeztetés jelenik meg.
  - Reszponzív design: Minden eszközön jól használható.

### Tesztelés

- **Funkcionális tesztek:**  
  - Alapműveletek helyes működése különböző értékekkel.
  - Mértékegység átváltások ellenőrzése.
  - Hibás adatok kezelése, felhasználói visszajelzések.

- **Felhasználói tesztek:**  
  - Diákok véleményének begyűjtése, UI fejlesztése visszajelzések alapján.

### Dokumentáció és fenntartás

- Készül rövid felhasználói útmutató (pl. weboldalon elérhető "Segítség" menüpont).
- A rendszer nyílt forráskódú lehet, így további fejlesztésekre is lehetőséget ad.
- Hibák javítása, új funkciók beépítése Kanban elvek szerint.

---

**Összefoglalás:**  
A tervezett weboldal egyszerű, jól használható eszközt kínál diákok számára számolási és mértékegység átváltási feladatokhoz. A fejlesztés Kanban módszertannal, modern webes technológiák alkalmazásával történik. A rendszer célja a tanulók mindennapi munkájának megkönnyítése, gyors és akadálymentes elérés biztosítása.
