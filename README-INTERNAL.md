# Internal notices

## Bug reports

### blc rate limit

- <https://github.com/stevenvachon/broken-link-checker/discussions/262>

## `date:``

Calcularea datei din timestamp-ul folder-ului:

```sh
ls -l -D %s | sed -e 's|.* \([0-9][0-9]*\) \([0-9].*\)$|echo \2 "      date:" $(date -r \1 -u "+%Y-%m-%dT%H:%M:%S")|' | bash | sort
```

## Ghilimele 99-99 „”

Din ce recomandă Academia Română, ghilimelele folosite în limba română au codurile Unicode:

- U+201E (pentru caracterul „)
- U+201D (pentru caracterul ”).

De asemenea se pot obține cu Alt+0132 („) și Alt+0148 (”).

## Local link

```
 (arhivat [local](https://cronica-it.github.io/arhiva/))
```

## Prevent autolink

- https://gist.github.com/alexpeattie/4729247

```
www<scan></scan>.some.thing
```

## Imagini

Pentru a nu îngreuna update-urile, imaginile sunt într-un site separat,
grupate pe ani si articole, de exemplu

```
https://cronica-it.github.io/imagini/2010/lix-interviu-qsl-ro/DSCN0001.JPG
```
