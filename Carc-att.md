## Вариант решения 1
```
const showInfo = (content) => {
  const rows = content.split('\n');
  const brands = content.split('\n').map((brand) => brand.split(';').reduce((acc, el, i) => {
    switch (i) {
      case 0:
        acc.brand = el;
        break;
      case 1:
        acc.model = el;
        break;
      case 2:
        acc.year = el;
        break;
      case 3:
        acc.price = el;
        break;
      case 4:
        acc.sales_USA = el;
        break;
      case 5:
        acc.sales_Europe = el;
        break;
      case 6:
        acc.sales_Asia = el;
        break;
      case 7:
        acc.sales_Africa = el;
        break;
      case 8:
        acc.sales_Australia = el;
        break;

      default:
        break;
    }
    return acc;
  }, {})).slice(1, -1);

  const govnomamonta = brands.map((brand) => brand.price);

  const maxMap = govnomamonta.map((max) => parseInt(max, 10));

  const bibika = brands.map((brand) => brand.brand).sort().join(', ');

  const maxSale = brands.map((brand) => brand.sales_Europe).sort();

  const sortmaxSale = Math.max(...maxSale);

  const averageSales = brands.map((brand) => {
    const totalSales = Object
      .values(brand)
      .slice(4).reduce((acc, sales) => acc + parseInt(sales, 10), 0);
    return {
      brand: brand.brand,
      model:
      brand.model,
      averageSales: totalSales / 5,
    }; // Assuming 5 regions
  });

  const leastSoldCar = averageSales
    .reduce((min, car) => (min.averageSales < car.averageSales ? min : car));

  console.log(`Count: ${rows.length - 2}`);
  console.log(`Brands: ${bibika}`);
  console.log(`Cars price: Min price: ${Math.min(...maxMap)}, Max price: ${Math.max(...maxMap)}`);
  console.log(`Max Europe sale: ${sortmaxSale}`);
  console.log(`Outsider: ${leastSoldCar.brand} ${leastSoldCar.model}`);
};
export default showInfo;
```
## Вариант решения 2
**На 4**
```
import _ from "lodash";
const showInfo = (content) => {
    const row = content.split('\n').slice(1,-1);
      const rowCar = row.map((row) => row.split(';')[0]);
        const rowPrice = row.map((row) => row.split(';')[3]);
          const rowEUPrice = row.map((row) => row.split(';')[5]);
    console.log(`Count: ${row.length}`);
    console.log(`Brands: ${rowCar.sort().join(', ')}`);
    console.log(`Cars price: Min price: ${Math.min(...rowPrice)}, Max price: ${Math.max(...rowPrice)}`);
    console.log(`Max Europe sale: ${Math.max(...rowEUPrice)}`);
};
export default showInfo;
```
## Вариант который бал на аттестации
```
import _ from 'lodash';

const showInfo = (content) => {
const rows = content.trim().split('\n').slice(1);
const obj = rows.map((row) => row.split(','))
.map(([brand, model, year, kyzov, probeg, korobka, fuel, price, color]) => ({
brand,
model,
year,
kyzov,
probeg,
korobka,
fuel,
price,
color,
}));
const sorted = obj.sort((a, b) => a.year - b.year)[0];
const sumProbeg = obj.reduce((acc, { probeg }) => acc + Number(probeg), 0);
const level = rows.map((rowis) => rowis.split(',')[8]).reduce((acc, levels) => {
acc[levels] = (acc[levels] || 0) + 1;
return acc;
}, {});

const complexityString = Object.entries(level)
.map(([complexity, count]) => `${complexity}: ${count}`)
.join(', ');

console.log(`Количество автомобилей: ${_.size(obj)}`);
console.log(`Средний пробег: ${sumProbeg / rows.length}`);
console.log(`Стоимость самой дорогой машины: ${_.maxBy(obj, 'price').price}`);
console.log(`Самый старый автомобиль: ${sorted.brand} ${sorted.model}`);
console.log(`Все цвета: ${complexityString}`);
};
export default showInfo;
```