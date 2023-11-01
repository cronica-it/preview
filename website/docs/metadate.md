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

Data evenimentului, un string în format `YYYY-MM-DD`, `YYYY-MM` sau `YYYY`.

Daca ziua lipseste, pentru ordonare data se consideră `YYYY-MM-15` (mijlocul lunii).

Daca luna lipseste, pentru ordonare data se considera `YYYY-06-01` (1 iulie, mijlocul anului).

Exemple:

```yaml
eventDate: '1993'
eventDate: '1993-06'
eventDate: '1993-06-24'
```

## `eventEndDate`

Data până la care a avut loc evenimentul, în același format ca `eventDate`.

Exemplu:

```yaml
eventEndDate: '1998'
```

## `eventSummary`

O linie de text cu o descriere sumară (câteva zeci de caractere)
a evenimentului. Aceasta linie va
apărea in tabela cu evenimente.

Exemple:

```yaml
eventSummary: 'Programul Soros Computere pentru licee'
eventSummary: "Conferința ROSE'93"
```
