const countries = [
  "ALBANIA",
  "BOLIVIA",
  "CANADA",
  "DENMARK",
  "ETHIOPIA",
  "FINLAND",
  "GERMANY",
  "HUNGARY",
  "IRELAND",
  "JAPAN",
  "KENYA",
];

const createArrayOfArrays = (arr) => {
  let modified_countries = [];

  for (let country of arr) {
    let arr1 = [];
    let capName =
      country[0] + country.substr(1, country.length - 1).toLowerCase();
    arr1.push(capName);
    arr1.push(country.substr(0, 3));
    arr1.push(country.length);

    modified_countries.push(arr1);
  }
  return modified_countries;
};

console.log(createArrayOfArrays(countries));
