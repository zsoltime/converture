# 🌡 Converture 🌡

Converture is a temperature converter, including functions to convert from/to Celsius, Fahrenheit and Kelvin. The returned value is rounded to two decimal places.

## Install

```bash
npm install converture
```

## Usage

```javascript
// CommonJS
const convert = require('converture').default;

// OR
// ES6 modules
import convert from 'converture';

convert.kelvin(50).toCelsius();
// => -223.15
convert.kelvin(50).toFahrenheit();
// => -369.67
convert.celsius(20).toKelvin();
// => 293.15
convert.celsius(20).toFahrenheit();
// => 68
convert.fahrenheit(44).toKelvin();
// => 279.82
convert.fahrenheit(44).toCelsius();
// => 6.67
```

## License

MIT © Zsolt Meszaros
