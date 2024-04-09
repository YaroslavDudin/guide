```
const showInfo = (content) => {

const lines = content.split('\n');
  const linesClear = lines.slice(1, -1);
  const obj = linesClear.map((line) => line.split(',')).map(([lng, users, origin, diff, countries]) => ({
    lng, users, origin, diff, countries,
  }));
  obj.sort((b, a) => a.users - b.users);

  const diffCounts = obj.reduce((acc, curr) => {
    acc[curr.diff] = (acc[curr.diff] || 0) + 1;
    return acc;
  }, {});

  const languagesWithOneCountryCount = linesClear.map((line) => line.split(',')).filter((line) => line[4] === '1').length;
  const continents = Array.from(new Set((linesClear.map((row) => row.split(',')[2]))));
  const continentsFixed = continents.map((item) => ` ${item}`);
  const lineCount = lines.length;
  console.log(`Count: ${lineCount - 2}`);
  console.log(`Continents:${continentsFixed}`);
  console.log(`Amount of languages with 1 country: ${languagesWithOneCountryCount}`);
  console.log(`The most popular language: ${obj[0].lng}`);
  console.log(`Complexity: Низкая: ${diffCounts['Низкая']}, Средняя: ${diffCounts['Средняя']}, Высокая: ${diffCounts['Высокая']}`);

};
export default showInfo;
```
## вариант решение номер 2
```
import _ from 'lodash';

const showInfo = (content) => {
  const row = content.split('\n').slice(1, -1);

  const rowContinents = _.uniq(row.map((rows) => rows.split(',')[2]));

  const rowContinent = rowContinents.join(', ');

  const native = row.map((rowes1) => rowes1.split(',')[4]).filter((num) => parseInt(num, 10) === 1).reduce((acc) => acc + 1, 0);

  const languages = row.map((lang) => lang.split(',').reduce((acc, el, i) => {
    switch (i) {
      case 0:
        acc.lang = el;
        break;
      case 1:
        acc.nativeSpeakers = el;
        break;
      case 2:
        acc.continent = el;
        break;
      case 3:
        acc.complexity = el;
        break;
      case 4:
        acc.countries = el;
        break;

      default:
        break;
    }
    return acc;
  }, {})).filter((e) => e.lang && e.lang !== 'Язык'); // slice(1, -1) - удаляет первую и последнюю строчки

  const sorted = languages.sort((a, b) => b.nativeSpeakers - a.nativeSpeakers)[0];

  const level = row.map((rowis) => rowis.split(',')[3]).reduce((acc, levels) => {
    acc[levels] = (acc[levels] || 0) + 1;
    return acc;
  }, {});

  const complexityString = Object.entries(level)
    .map(([complexity, count]) => `${complexity}: ${count}`)
    .join(', ');

  console.log(`Count: ${_.size(row)}`);
  console.log(`Continents: ${rowContinent}`);
  console.log(`Amount of languages with 1 country: ${native}`);
  console.log(`The most popular language: ${sorted.lang}`);
  console.log(`Complexity: ${complexityString}`);
};

export default showInfo;
```