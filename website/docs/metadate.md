---
sidebar_position: 2
---

# Metadate cronologie

Informațiile suplimentare necesare generării tabelelor de cronologie
sunt adăugate în secțiunea front matter delimitată de o pereche de
linii `---`.

Sintaxa este de YML.

## `eventDate`

Data evenimentului, în format `YYYY-MM-DD`, `YYYY-MM` sau `YYYY`.

Daca ziua lipseste, pentru ordonare data se consideră `YYYY-MM-15` (mijlocul lunii).

Daca luna lipseste, pentru ordonare data se considera `YYYY-06-01` (1 iulie, mijlocul anului).

Exemplu:

```
eventDate: '1993'
```

## `eventEndDate`

Data până la care a avut loc evenimentul, în același format ca `eventDate`.

Exemplu:

```
eventEndDate: '1998'
```

## `eventSummary`

O linie de text cu o descriere sumară a evenimentului.

Exemplu:

```
eventSummary: 'Programul Soros _Computere pentru licee_'
```
