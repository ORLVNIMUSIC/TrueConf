# easyfigjs

**easyfigjs** is a typesafe little library for initializing and computing characteristics of geometric figures.

## Installation

Initialize a project if you don't have one with any package manager (using NPM for the example):

```bash
npm init
```

After the project's initialization, install the library via your package manager:

```bash
npm i easyfigjs --save
```

And you're good to go.

## Usage

### Round example

In any file of your project write:

```ts
import { Round } from 'easyfigjs';
```

This allows you to create an object, representating a round of known radius.

To create the object write:

```ts
const myRound: Round = new Round(4);
```

After that it is possible to perform different actions with the object, like:

Calculating the area of the round

```ts
myRound.area();
```

Calculating the perimeter of the round

```ts
myRound.perimeter();
```

Checking if the round may be inscribed into the chosen rectangle

```ts
myRound.isInscribable();
```

Checking if the round may circumscribe the chosen rectangle

```ts
myRound.isCircumscribable();
```

Creating new inscribed into the round rectangle with chosen length of one side

```ts
myRound.inscribedRectangle();
```

Creating new inscribed into the round square

```ts
myRound.inscribedSquare();
```

---

### Triangle example

To create a triangle it's necessary to know lengths of it's base and height, and the length between left edge of it's base and low edge of it's height.

If you want to create a right triangle you may just leave the third parameter empty as it's optional.

```ts
import { Triangle } from 'easyfigjs';

const myTriangle = new Triangle(6, 4, 2); // for common triangle
const myRightTriangle = new Triangle(6, 4); // for right triangle
```

All the methods of calculating it's measurements are accessible as well:

Calculating the area of the triangle

```ts
myTriangle.area();
```

Calculating the perimeter of the triangle

```ts
myRightTriangle.perimeter();
```

Checking if the triangle may circumscribe the chosen round

```ts
myTriangle.isCircumscribable();
```

Checking if the triangle may inscribe into the chosen round

```ts
myTriangle.isInscribable();
```

Creating inscribed into the triangle round

```ts
myTriangle.inscribedRound();
```

---

### Rectangle example

To create a rectangle you must know length of it's sides:

```ts
import { Rectangle } from 'easyfigjs';

const myRectangle = new Rectangle(5, 3);
```

It is possible to perform calculations of it's measurements as well:

Calculating the area of the rectangle

```ts
myRectangle.area();
```

Calculating the perimeter of the rectangle

```ts
myRectangle.perimeter();
```

Checking if the rectangle is square

```ts
myRectangle.isSquare();
```

Checking if the rectangle may circumscribe the chosen round

```ts
myRectangle.isCircumscribable();
```

Checking if the rectangle may be inscribed into the chosen round

```ts
myRectangle.isInscribable();
```

Creating a circumscribed around the rectangle round

```ts
myRectangle.circumscribedRound();
```
