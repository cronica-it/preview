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

Exemplu:

```
eventDate: '1993'
```

## `eventUntil`

Data până la care a avut loc evenimentul, în același format ca `eventDate`.

Exemplu:

```
eventUntil: '1998'
```

## `eventSummary`

O linie de text cu o descriere sumară a evenimentului.

Exemplu:

```
eventSummary: 'Programul Soros _Computere pentru licee_'
```

## `citationOf`

Un link la o pagină cu informații de referință despre eveniment.
