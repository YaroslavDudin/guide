# Извлечение символов из строки
Если нужно получить конкретный символ из строки, то это делается с помощью индекса, которые записываются в []

## Основные принципы

1. Индекс начинается с 0 (первый символ)
2. Всегда индекс указывается в скобочках массива []
3. Если же вписанный индекс превышает размер строки => underfiend

## Примеры

```javascript
    const myName = "Polina"
    console.log(myName[0]) // => "P"
```
Так же индекс можно записывать в константу:
```javascript
    const myName = "Nastya"
    const index = 1
    console.log(myName[index]) // => "a"
```

# Типы данных
Есть несколько видов типов данных:
1. Строка (string)
2. Число (number)
3. Логическое значение (boolean)
4. Неопределенное значение (undefined)
5. Символ (symbol)
6. Null
7. Большое целое число (bigint)
8. Объект (object)

JS позволяет узнать тип данных с помощью оператора `typeof`:

```javascript
// 1. String
console.log(typeof "Hello"); // => "string"

// 2. Number
console.log(typeof 42); // => "number"

// 3. Boolean
console.log(typeof true); // => "boolean"

// 4. Undefined
console.log(typeof undefined); // => "undefined"

// 5. Symbol
console.log(typeof Symbol('foo')); // => "symbol"

// 6. Null
console.log(typeof null); // => "object" (это известная ошибка в JavaScript)

// 7. BigInt
console.log(typeof 1234567890123456789012345678901234567890n); // => "bigint"

// 8. Object
console.log(typeof {}); // => "object"
console.log(typeof []); // => "object" (массивы тоже являются объектами)
console.log(typeof function() {}); // => "function" (функции - особый вид объектов)
```
## Преобразовние типов данных
parseInt() - эта функция в которое передаётся значение чтобы его преобразовать  // работает только с целыми числами (округляет итоговое дробное значение)
parseFloat() - тоже самое что и parseInt только работает с любым числом

```javascript
console.log(parseInt('10')); // => 10 typeoff Number
const value = '10'
console.log(parseInt(value)) // => 10 typeoff Number
```