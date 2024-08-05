# a set of useful methods of Array object in JS, use to iterate a collections of data.

In this blog, we will go through some of the methods from Array Object in Javascript. these methods or function are very handy to make you more productive in every day coding.

### list of methods

- .some()
- .every()
- .map()
- .filter()
- .reduce()

### let see the example

so we have the example of an array of `developers`

```js
const developers = [
  {
    name: ""John"",
    age: 20,
    gender: 'male'
  },
  {
    name: ""Doe"",
    age: 32,
    gender: 'male'
  },
  {
    name: ""Dara"",
    age: 19,
    gender: 'male'
  },
  {
    name: ""Json"",
    age: 24,
    gender: 'male'
  }
]
```

[.some()](<#.some()>)

from the collection above, we want to know if some `developers` are age above 22. we can see exactly that there are two `developers` are age above 22. so the result we got is `true`.

```js
// .some() will return `true` if some of the item in the lists meet the condition
const areAgeAbove22 = developers.some(({ age }) => age > 22);
console.log(areAgeAbove22); // true
```

[.every()](<#.every()>)

from the collection above, we want to know if every `developers` are age under 22. we can see exactly that there are two `developers` are age under 22. so the result we got is `false`.

```js
// .every() will return `true` if every item in the lists meet the condition
const areAgeAbove22 = developers.every(({ age }) => age > 22);
console.log(areAgeAbove22); // false
```

[.map()](<#.map()>)

we want to create a new array from the list above by adding a new property to the object is `gender`. assuming that all `developers` are male.

```js
// using .map() to create a new array or manipulate property of each item in the list
const developersWithGender = developers.map((developer) => ({ ...developer, gender: 'male' }))
console.log(developersWithGender)

// result:
[
  {
    name: ""John"",
    age: 20,
  },
  {
    name: ""Doe"",
    age: 32
  },
  {
    name: ""Dara"",
    age: 20
  },
  {
    name: ""Json"",
    age: 24
  }
]
```

[.filter()](<#.filter()>)

we want to get `developers` who age under 22. so we will use filter to do that.

```js
// using .filter() to filter the item we want and it will return a new array of that item
const developersUnder22 = developers.filter(({age}) => age < 22)
console.log(developersUnder22)

// result:
[
  {
    name: ""John"",
    age: 20,
  },
  {
    name: ""Dara"",
    age: 19
  }
]
```

[.reduce()](<#.reduce()>)

we want to sum the age of the `developer`.

```js
// using .reduce() to sum the value or create a new object
const sumAge = developers.reduce((p, c) => p.age + c.age, 0);
console.log(sumAge); // 96
```
