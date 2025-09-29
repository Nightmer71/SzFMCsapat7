# Webes Számológép Tesztlépések

Ez a dokumentum tesztlépéseket tartalmaz egy egyszerű webes számológéphez, amely a következő műveleteket támogatja: összeadás, kivonás, szorzás, osztás.

## Előfeltételek

- A számológép webes felülete elérhető.
- A számológép támogatja a numerikus bevitelek és alapműveletek gombjait (+, -, *, /, =).
- Az eredmény megjelenik a kijelzőn.

---

## 1. Összeadás teszt

**Tesztlépések:**
1. Indítsd el a webes számológépet.
2. Nyomd meg az `2` gombot.
3. Nyomd meg a `+` gombot.
4. Nyomd meg a `3` gombot.
5. Nyomd meg az `=` gombot.
6. Ellenőrizd, hogy a kijelzőn az `5` érték jelenik meg.

---

## 2. Kivonás teszt

**Tesztlépések:**
1. Indítsd el a webes számológépet.
2. Nyomd meg az `7` gombot.
3. Nyomd meg a `-` gombot.
4. Nyomd meg az `4` gombot.
5. Nyomd meg az `=` gombot.
6. Ellenőrizd, hogy a kijelzőn a `3` érték jelenik meg.

---

## 3. Szorzás teszt

**Tesztlépések:**
1. Indítsd el a webes számológépet.
2. Nyomd meg az `6` gombot.
3. Nyomd meg a `*` gombot.
4. Nyomd meg az `5` gombot.
5. Nyomd meg az `=` gombot.
6. Ellenőrizd, hogy a kijelzőn a `30` érték jelenik meg.

---

## 4. Osztás teszt

**Tesztlépések:**
1. Indítsd el a webes számológépet.
2. Nyomd meg a `8` gombot.
3. Nyomd meg a `/` gombot.
4. Nyomd meg a `2` gombot.
5. Nyomd meg az `=` gombot.
6. Ellenőrizd, hogy a kijelzőn a `4` érték jelenik meg.

---

## 5. Osztás nulla esetén (hibakezelés)

**Tesztlépések:**
1. Indítsd el a webes számológépet.
2. Nyomd meg a `9` gombot.
3. Nyomd meg a `/` gombot.
4. Nyomd meg a `0` gombot.
5. Nyomd meg az `=` gombot.
6. Ellenőrizd, hogy a kijelzőn hibajelzés vagy "Hiba" üzenet jelenik meg.

---

## 6. Több művelet egymás után

**Tesztlépések:**
1. Indítsd el a webes számológépet.
2. Nyomd meg az `2` gombot.
3. Nyomd meg a `+` gombot.
4. Nyomd meg a `3` gombot.
5. Nyomd meg a `*` gombot.
6. Nyomd meg az `4` gombot.
7. Nyomd meg az `=` gombot.
8. Ellenőrizd, hogy a kijelzőn a `20` érték jelenik meg (ha a számológép a műveleti sorrendet tartja).

---

## 7. Negatív eredmény teszt

**Tesztlépések:**
1. Indítsd el a webes számológépet.
2. Nyomd meg az `3` gombot.
3. Nyomd meg a `-` gombot.
4. Nyomd meg az `5` gombot.
5. Nyomd meg az `=` gombot.
6. Ellenőrizd, hogy a kijelzőn a `-2` érték jelenik meg.

---

## 8. Tizedesjegyek kezelése

**Tesztlépések:**
1. Indítsd el a webes számológépet.
2. Nyomd meg az `2` gombot.
3. Nyomd meg a `.` (tizedespont) gombot.
4. Nyomd meg az `5` gombot.
5. Nyomd meg a `+` gombot.
6. Nyomd meg az `1` gombot.
7. Nyomd meg a `.` gombot.
8. Nyomd meg az `5` gombot.
9. Nyomd meg az `=` gombot.
10. Ellenőrizd, hogy a kijelzőn a `4` érték jelenik meg.

---

## 9. Törlés (C vagy CE gomb) teszt

**Tesztlépések:**
1. Indítsd el a webes számológépet.
2. Nyomd meg az `7` gombot.
3. Nyomd meg a `C` (vagy `CE`) gombot.
4. Ellenőrizd, hogy a kijelzőn `0` jelenik meg.

---

## 10. Teszt végrehajtása mobilon és asztali böngészőben

**Tesztlépések:**
1. Nyisd meg a számológépet asztali böngészőben.
2. Hajtsd végre az 1-9 tesztlépéseket.
3. Nyisd meg a számológépet mobil böngészőben.
4. Hajtsd végre az 1-9 tesztlépéseket.

---

## 11. Nagy számok kezelése

**Tesztlépések:**
1. Indítsd el a számológépet.
2. Írd be az `999999` számot.
3. Nyomd meg a `+` gombot.
4. Írd be az `999999` számot.
5. Nyomd meg az `=` gombot.
6. Ellenőrizd, hogy a kijelzőn a `1999998` érték jelenik meg.

---

## 12. Negatív számok szorzása

**Tesztlépések:**
1. Indítsd el a számológépet.
2. Nyomd meg a `-` gombot.
3. Írd be az `3` számot.
4. Nyomd meg a `*` gombot.
5. Írd be az `4` számot.
6. Nyomd meg az `=` gombot.
7. Ellenőrizd, hogy a kijelzőn a `-12` érték jelenik meg.

---

## 13. Zárójelek kezelése (ha van ilyen funkció)

**Tesztlépések:**
1. Indítsd el a számológépet.
2. Nyomd meg a `(` gombot.
3. Írd be az `2` számot.
4. Nyomd meg a `+` gombot.
5. Írd be a `3` számot.
6. Nyomd meg a `)` gombot.
7. Nyomd meg a `*` gombot.
8. Írd be az `4` számot.
9. Nyomd meg az `=` gombot.
10. Ellenőrizd, hogy a kijelzőn a `20` érték jelenik meg.

---

## 14. Előző eredmény újrahasználata

**Tesztlépések:**
1. Számítsd ki az `5 + 5` eredményét.
2. Nyomd meg az `*` gombot.
3. Írd be a `2` számot.
4. Nyomd meg az `=` gombot.
5. Ellenőrizd, hogy a kijelzőn a `20` érték jelenik meg.

---

## 15. Tizedestörtek osztása

**Tesztlépések:**
1. Indítsd el a számológépet.
2. Írd be a `7.5` számot.
3. Nyomd meg a `/` gombot.
4. Írd be a `2.5` számot.
5. Nyomd meg az `=` gombot.
6. Ellenőrizd, hogy a kijelzőn a `3` érték jelenik meg.

---

## 16. Eredmény törlése új művelethez

**Tesztlépések:**
1. Számítsd ki az `3 + 4` eredményét.
2. Nyomd meg a `C` gombot.
3. Írd be az `5` számot.
4. Nyomd meg a `-` gombot.
5. Írd be a `2` számot.
6. Nyomd meg az `=` gombot.
7. Ellenőrizd, hogy a kijelzőn a `3` érték jelenik meg.

---

## 17. Hosszú műveletsor teszt

**Tesztlépések:**
1. Indítsd el a számológépet.
2. Írd be: `1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9`
3. Nyomd meg az `=` gombot.
4. Ellenőrizd, hogy a kijelzőn a `45` érték jelenik meg.

---

## 18. Számjegyek törlése visszafelé (Backspace/B törlés)

**Tesztlépések:**
1. Indítsd el a számológépet.
2. Írd be a `1234` számot.
3. Nyomd meg a `←` vagy `B` gombot.
4. Ellenőrizd, hogy a kijelzőn a `123` érték jelenik meg.

---

## 19. Negatív szám beírása

**Tesztlépések:**
1. Indítsd el a számológépet.
2. Nyomd meg a `-` vagy `+/-` gombot.
3. Írd be az `7` számot.
4. Ellenőrizd, hogy a kijelzőn a `-7` érték jelenik meg.

---

## 20. Eredmény formátuma

**Tesztlépések:**
1. Számítsd ki az `2 / 3` eredményét.
2. Ellenőrizd, hogy a kijelzőn a tizedesjegyek helyesen jelennek meg (pl. `0.666...`).

---

## Megjegyzés

A tesztelés során minden eredményt rögzíts és jelezz minden eltérést vagy hibát!
