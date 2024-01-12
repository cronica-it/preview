---
sidebar_position: 2
---

# Metadate cronologie

Informațiile suplimentare necesare generării tabelelor de cronologie
sunt adăugate în secțiunea front matter delimitată de o pereche de
linii `---`.

Sintaxa este de [YAML](https://yaml.org/spec/1.2.2/).

In mod normal proprietățile de tip string se vor incadra între apostrofuri.
Dacă string-urile include caracterul apostrof, se vor încadra între
ghilimele.

## `event_date`

Proprietatea `event_date` este un **string** ce definește **data de
început a evenimentului**,
ca un string în format `YYYY-MM-DD`, `YYYY-MM` sau `YYYY`.

Daca ziua lipseste, pentru ordonare data se consideră `YYYY-MM-15`
(ziua 15, mijlocul lunii).

Daca luna lipseste, pentru ordonare data se consideră `YYYY-07-01`
(1 iulie, mijlocul anului).

Exemple:

```yaml
event_date: '1993'
event_date: '1993-06'
event_date: '1993-06-24'
```

## `event_end_date`

Proprietatea `event_end_date` este un **string** care
**definește data de sfârșit a evenimentului**,
în același format ca `event_date`.

Este util pentru evenimente gen conferințe, care au o durată
clară.

Exemplu:

```yaml
event_end_date: '1998'
```
