# rand-password-generator

This module provides a function to generate random passwords of specified length.

## Installation

To use this function in your project, install the package via npm:

```bash
npm install rand-password-generator
```

Usage

```js

// Import the function
import generatePassword from 'rand-password-generator';

// Generate a password of length 10
const password = generatePassword(10);

console.log(password); // Outputs the randomly generated password
```

API
generatePassword(length: number): string
Generates a random password of specified length.

length - The length of the password (required).
Returns a string - the randomly generated password.

Example

```js

const password = generatePassword(12);
console.log(password); // Outputs, for example, "F4z&m$82xPq!"
```
