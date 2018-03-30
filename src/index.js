export const round = (num, precision = 2) =>
  Number(`${Math.round(`${num}e+${precision}`)}e-${precision}`);

export default {
  kelvin(k) {
    return {
      toCelsius() {
        return round(k - 273.15);
      },
      toFahrenheit() {
        return round(k * 1.8 - 459.67);
      },
    };
  },
  celsius(c) {
    return {
      toKelvin() {
        return round(c + 273.15);
      },
      toFahrenheit() {
        return round(c * 1.8 + 32);
      },
    };
  },
  fahrenheit(f) {
    return {
      toKelvin() {
        return round((f + 459.67) * (5 / 9));
      },
      toCelsius() {
        return round((f - 32) * (5 / 9));
      },
    };
  },
};
