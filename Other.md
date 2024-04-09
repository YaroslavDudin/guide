
## деструктуризация + rest 
```
const fruits = ['apple', 'orange', 'banana', 'pineapple'];
... – rest
const [first, ...rest] = fruits;
console.log(first); // 'apple'
console.log(rest); // ['orange', 'banana', 'pineapple']
```
## Важно
**необязательно писать rest  можно дать любое имя.**
**ты переносишь все оставшиеся элементы в рест**
**рест пишеться ИСКЛЮЧИТЕЛЬНО В КОНЦЕ МАССИВА** 
## В ситуациях, когда нас интересует только часть массива, но не важны первые элементы, лучше воспользоваться методом массива slice():

**// slice возвращает новый массив, а не изменяет старый**
```
const rest = fruits.slice(1);
console.log(rest); // ['orange', 'banana', 'pineapple'];
```
## Синтаксис rest можно применять также и при деструктуризации строк.
```
const [first, second, ...rest] = 'some string';
console.log(first); // => 's'
console.log(second); // => 'o'
console.log(rest); // => [ 'm', 'e', ' ', 's', 't', 'r', 'i', 'n', 'g' ]
```
## деструктуризация и spread 
```
const frenchCities = ['paris', 'marseille'];
const cities = ['milan', 'rome', ...frenchCities];
// ['milan', 'rome', 'paris', 'marseille']
```
**Массив frenchCities при этом никак не меняется**

**То же самое без spread**
```
const cities = ['milan', 'rome'].concat(frenchCities);
```


**можно ставить в любое место , хоть в начало, хоть в центр, хоть в конец.**
**растягивает массив. объеденяет два массива в 1.**

## копирование массива с помощью spread
```
const frenchCities = ['paris', 'marseille'];
const copy = [...frenchCities];
copy.push('lyon');
console.log(copy); // => [ 'paris', 'marseille', 'lyon' ]
console.log(frenchCities); // => [ 'paris', 'marseille' ]
```

//добавить примеры
//добавить альтернативы функций, которые не изменяют оригинальный массив