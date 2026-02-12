`CREATE DATABASE databasename;` - Sukuria duomenų bazę;

---

`USE databasename` - Pasirenka šiuo metu aktyvią duomenų bazę, kurioje bus leidžiamos kitos SQL komandos (MySQL);

---

```sql
   CREATE TABLE table_name (
   column1 datatype constraint,
   column2 datatype constraint,
   column3 datatype constraint
   );
```

Sukuria lentelę pagal nurodytą pavadinimą, stulpelius ir jų duomenų tipus

---

```sql
   INSERT INTO table_name (column1, column2, column3, ...)
   VALUES (value1, value2, value3, ...);
```

Įterpimo į lentelę pavyzdys

---

```sql
ALTER TABLE table_name
ADD column_name datatype;
```

Stulpelio pridėjimas

```sql
ALTER TABLE table_name
DROP COLUMN column_name;
```

Stulpelio šalinimas

```sql
ALTER TABLE table_name
RENAME COLUMN old_name to new_name;
```

Stulpelio pervadinimas

```sql
ALTER TABLE table_name
ALTER COLUMN column_name datatype;
```

Stulpelio duomenų tipo modifikavimas

---

Lentelės duomenų pasiekimas

```sql
SELECT name, glass  FROM public.cocktails;
```

Pasirenka stulpelius name ir glass iš lentelės `public.cocktails`

```sql
SELECT * FROM public.cocktails
```

Pasirenka visus stulpelius iš lentelės `public.cocktails`
