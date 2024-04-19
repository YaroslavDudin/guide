## Вариант решения
```
const app = (content) => {
  const autTiltle = content.split('\n');

  const arrTitle = autTiltle.map((row) => row)

  const filteredArray = arrTitle.filter((item) => item.trim() !== '').slice(2, -2);

  const text = arrTitle.filter((item) => item.trim() !== '').join(' ').split(' ');

  const strophes = filteredArray.join('\n').split('***');

  const arrUnions = ['и', 'в', 'ли', 'а', 'но', 'да', 'что', 'когда', 'или', 'либо'];

  const arrStrings = ['.', ',', '!', '?', '—', '***', '...', ';'];

  const unions = text
    .reduce((acc, val) => (arrUnions.includes(val.toLowerCase()) ? acc + 1 : acc), 0);

  const signs = text.reduce((acc, val) => (arrStrings.includes(val) ? acc + 1 : acc), 0);

  const words = text
    .reduce((acc, val) => (!arrUnions.includes(val
      .toLowerCase()) && !arrStrings.includes(val) ? acc + 1 : acc), 0);

  const total = text.length;

  const totalUnions = 100 * (unions / total);

  const totalWords = 100 * (words / total);

  const totalSigns = 100 * (signs / total);

  console.log(`Author: ${arrTitle.slice(0, 1).join('')}, Title: ${arrTitle.slice(1, 2).join('')}`);
  console.log(`Strophes: ${strophes.length}, Strings in each strophe: ${strophes[1].split('\n').slice(1, -1).length}`);
  console.log(`Unions: ${unions}`);
  console.log(`Words: ${words}, Signs: ${signs}`);
  console.log(`Words percentage: ${totalWords.toFixed(1)}%, Unions percentage: ${totalUnions.toFixed(1)}%, Signs percentage: ${totalSigns.toFixed(1)}%`);
};
export default app;
```