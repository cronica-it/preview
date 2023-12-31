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

## `eventDate`

Proprietatea `eventDate` este un string ce definește data de
început a evenimentului,
ca un string în format `YYYY-MM-DD`, `YYYY-MM` sau `YYYY`.

Daca ziua lipseste, pentru ordonare data se consideră `YYYY-MM-15`
(mijlocul lunii).

Daca luna lipseste, pentru ordonare data se considera `YYYY-06-01`
(1 iulie, mijlocul anului).

Exemple:

```yaml
eventDate: '1993'
eventDate: '1993-06'
eventDate: '1993-06-24'
```

## `eventEndDate`

Proprietatea `eventEndDate` definește data de sfârșit a evenimentului,
în același format ca `eventDate`.

Exemplu:

```yaml
eventEndDate: '1998'
```
