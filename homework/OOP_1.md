# Object Oriented Programming (Į objektus orientuotas programavimas)

## 1. Stačiakampio klasė (Rectangle)

### Užduotis

Sukurkite klasę **Stačiakampis** (angl. _Rectangle_), kuri saugos stačiakampio savybes: **plotis**, **aukštis**, **plotas** ir **perimetras**.

### Pradinės klasės savybės

- **plotis** (_width_): gali būti nurodomas pradinis stačiakampio plotis;
- **aukštis** (_height_): gali būti nurodomas pradinis stačiakampio aukštis;
- **plotas** (_area_): skaičiuojamas pagal formulę  
  `S = plotis * aukštis`;
- **perimetras** (_perimeter_): skaičiuojamas pagal formulę  
  `P = (plotis + aukštis) * 2`.

### Keičiami laukeliai

- Keičiant **plotį** arba **aukštį**, turi būti automatiškai atnaujinamas:
  - plotas;
  - perimetras.

### Klasės metodai

#### Plotis ir aukštis

- Sukurkite **setter** ir **getter** metodus:
  - pločiui;
  - aukščiui.
- Keičiant plotį arba aukštį, turi keistis ir:
  - plotas;
  - perimetras.

#### Ploto ir perimetro apskaičiavimas

- Sukurkite **getter** metodus, kurie grąžina:
  - plotą;
  - perimetrą.

---

## 2. Apskritimo klasė (Circle)

### Užduotis

Sukurkite klasę **Apskritimas** (angl. _Circle_), kuri saugos apskritimo savybes: **spindulys** ir **plotas**.

### Pradinės klasės savybės

- **spindulys** (_radius_): gali būti nurodomas pradinis apskritimo spindulys;
- **plotas** (_area_): skaičiuojamas pagal formulę  
  `S = π * r²`.

### Keičiami laukeliai

- Keičiant **spindulį**, automatiškai turi būti atnaujinamas:
  - plotas.

### Klasės metodai

#### Spindulys

- Sukurkite **setter** ir **getter** metodus spinduliui.
- Keičiant spindulį, turi būti perskaičiuotas plotas.

#### Ploto apskaičiavimas

- Sukurkite **getter** metodą, kuris grąžina plotą.

---

## 3. Banko sąskaitos klasė (BankAccount)

### Užduotis

Sukurkite klasę **BankoSąskaita** (angl. _BankAccount_), kuri imituos banko sąskaitos funkcionalumą.

### Pradinės klasės savybės

- **balansas** (_balance_): gali būti nurodytas pradinis sąskaitos balansas  
  (pagal nutylėjimą `0`);
- **operacijų istorija** (_transactionHistory_): saugo įrašus apie visas įvykdytas operacijas su sąskaita.

### Operacijos

- **indėlis** (_deposit_) – į sąskaitą galima pridėti pinigų;
- **išėmimas** (_withdraw_) – iš sąskaitos galima išimti pinigų, jei yra pakankamai lėšų.

### Klasės metodai

#### Indėlis ir išėmimas

- Sukurkite metodus:
  - indėliui;
  - išėmimui.
- Lėšų negalima išimti, jei balansas yra mažesnis už norimą sumą.
- Kiekviena operacija turi būti įrašyta į operacijų istoriją su:
  - operacijos tipu;
  - suma.

#### Balansas

- Sukurkite **getter** metodą balansui, kuris grąžina esamą sąskaitos balansą.

#### Operacijų istorija

- Sukurkite **getter** metodą operacijų istorijai, kuris grąžina visų operacijų sąrašą.

---

## 4. Temperatūros klasė (Temperature)

### Užduotis

Sukurkite klasę **Temperatūra** (angl. _Temperature_), kuri saugos temperatūros reikšmes **Celsijumi** ir **Fahrenheit**.

### Pradinės klasės savybės

- **Celsijus** (_celsius_): gali būti nurodoma pradinė temperatūra Celsijaus skalėje.

### Keičiamos temperatūros skalės

- Keičiant temperatūrą:
  - Celsijumi **arba**
  - Fahrenheit,
- automatiškai turi būti perskaičiuota kita skalė pagal formulę.

### Klasės metodai

#### Temperatūros skalės

- Sukurkite **getter** ir **setter** metodus:
  - temperatūrai Celsijumi;
  - temperatūrai Fahrenheit.

- Keičiant vieną skalę, kita turi būti perskaičiuojama:
  - **Celsijus → Fahrenheit**  
    `F = C * 9/5 + 32`
  - **Fahrenheit → Celsijus**  
    `C = (F - 32) * 5/9`

#### Temperatūros perskaičiavimas

- Užtikrinkite, kad keičiant bet kurią temperatūros skalę, kita būtų:
  - automatiškai perskaičiuojama;
  - atnaujinama klasėje.
