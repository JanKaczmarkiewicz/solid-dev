---
date: '2021-05-13'
title: 'Referencje w javascript'
featuredImage: '../../assets/bg2.jpeg'
tags: ['javascript']
---

Zachęcam do wykonania następującego ćwiczenia: podaj kolejne wyniki console.log'a:

```js
console.log('Hello world!' === 'Hello world!') // true

console.log(3.14 === 3.14) // true

console.log(true === true) // true

console.log(null === null) // true

console.log(undefined === undefined) // true

console.log({ name: 'John' } === { name: 'John' }) // false?

console.log(function () {} === function () {}) // false?

// typ primitywny symbol został celowo pominięty
```

Jezeli na dwa ostatnie odpowiedziałeś `false` to gratulacje! Masz racje!
Tylko dlaczego tak jest? Dlaczego pusty obiekt nie równa się pustemu obiektowi?

```js
{} === {}; // false
```

A to dlatego ze przy sprawdzeniu równości funkcji czy obieków javascript porównuje tak naprawdę ich referencje
Czym są w takim razie referencje?

Mozna je sobie wyobrazić jako unikalne id dołączone do obieku przy jego tworzeniu:

```js
const someObject = {} // reference: ghast6tr1261as
const otherObject = {} // reference: hgajd5123ejasd

someObject === otherObject // ghast6tr1261as nie równa się hgajd5123ejasd
```

tak samo z funkcjami

```js
const someFunction = () => {} // reference: asdajg123y
const otherFunction = () => {} // reference: vdgadhsh123

someFunction === someFunction // asdajg123y nie równa się vdgadhsh123
```

ok mając juz tę wiedzę postaraj się odpowiedzieć na to zadanie

```js
const someObject = {}
const otherObject = someObject
otherObject.color = 'blue'

console.log(someObject === otherObject) // true
```

Wynikem tego kodu jest `true`. Zauwazmy ze jest tworzony tylko jeden obiekt: `someObject`
