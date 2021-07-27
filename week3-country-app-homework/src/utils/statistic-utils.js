//DO NOT TOUCH THIS MONSTROSITY

const statisticsConfig = [
  {
    name: "Most spoken languages",
    statisticProperty: "languages",
    unit: "-countries",
  },
  {
    name: "Largest countries",
    statisticProperty: "area",
    unit: "-km²",
  },
  {
    name: "Countries with highest population",
    statisticProperty: "population",
    unit: "",
  },
  {
    name: "Countries with highest wealth inequality",
    statisticProperty: "gini",
    unit: "",
  },
];

function getStatisticsProperty(data, property) {
  return data.map((item) => ({
    name: item.name,
    [property]: item[property],
  }));
}

function sortAndGetFirstTen(data, sortProperty) {
  return data.sort((a, b) => b[sortProperty] - a[sortProperty]).slice(0, 10);
}

function processLanguages(langData) {
  //Getting spoken languages arrays from countries
  //Returns array of languages array

  const languagesArray = langData.map((country) =>
    country.languages.map(({ name }) => name)
  );

  //Flattening the array
  //Getting all languages as destructured  [English,Arabic,English,Turkish,German......]
  const languagesDestructured = languagesArray.flat();

  //Count languages on array.
  const countedLanguages = languagesDestructured.reduce(
    (prevLangObj, currentLang) => ({
      ...prevLangObj,
      [currentLang]: (prevLangObj[currentLang] || 0) + 1,
    }),
    {}
  );

  //Shaping counted object as array of objects.
  const shapedLanguages = Object.keys(countedLanguages).map((key) => ({
    name: key,
    languages: countedLanguages[key],
  }));

  return shapedLanguages;
}

export {
  getStatisticsProperty,
  processLanguages,
  sortAndGetFirstTen,
  statisticsConfig,
};
