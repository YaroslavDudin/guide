## typeof : string

Любые символы записанные в кавычках строка, кавычки могут быть любыми '' ""
Пустая строка - это тоже строка 
```javascript
console.log('') // type: string
```
Когда нам нужно использовать использовать одинарную кавычку внутри чтобы она стала частью строки(а не обозначение , что тип данных принадлежит к строке)
Нужно чтобы строка начиналась с двойной кавычки 
Пример 
```javascript
console.log("Dragon's dauther") // type: string
```
Чтобы экранизировать двойный кавычки в таком коде нужно использовать обратный слэш \

Если мы хотим создаит иакую строку  : Drank's dauther sayd "Nothing"
```javascript
console.log("Dragon's dauther sayd \"Nothing\"") // ==> Drank's dauther sayd "Nothing"
```
чтобы экранировать \ перед ним нужно ставить ещё один \
```javascript
console.log('\\') => \
```
Чтобы отобразить перенос строки 
нужно воспользоваться 
\n
```javascript
console.log("Dragon's dauther sayd \n \"Nothing\"") /* ==> Drank's dauther sayd  
"Nothing" 
*/
```
### Конкатенация - если нам нужно соеденить две строчки используется оператор + 
```javascript
console.log('penis' + 'chlen') // => penischlen

console.log('penis' + ' chlen') // => penis chlen

console.log('penis ' + 'chlen') // => penis chlen

```
