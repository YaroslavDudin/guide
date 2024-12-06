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

# Неизменяемость и примитивные типы

## Примитивные типы нельзя изменять
    Примитивный тип данных - данные имеющие определенный формат и значени 
    
    Применяются для хранения простой информации:
    1. Строка (string)
    2. Число (number)
    3. Логическое значение (boolean)
    4. Неопределенное значение (undefined)
    5. Символ (symbol)
    6. Null
    7. Большое целое число (bigint)

```javascript
    let str = 'string';
    str[2] = f
    console.log(str) // => 'string
```

    Если же вы хотите изменить можно использовать переменные

```javascript
    let str = "string"
    str = 'stfing'
    console.log(str) // => 'stfing'
```

## Слабая типизация данных

```javascript
    console.log(1 + "7") // => 17
```
    Консоль преобразует все в формат строчки 
    Поэтому 1 станет строкой и вывод будет с конкатенацией двух строк


# Фунции 

## Функция это кострукция позволяющая в дальшейшем работать с её результатом
функции бывают двух видов

```javascript
// Стрелочная функция
const arrFunc = () => {}
// обычная функция
function func () {}
```
В круглые скобки мы передаём параметры функции , в которые мы будем что-либо передовать из вне и вызывать в дальнейшём саму функцию
Параметры функций можно называть как-угодно , но нужно придерживаться к корректному нейменгу. Параметр должен отображать что в него приходит . 
Имя функции должно тоже соответсоввать неймингу
Функция всегда вызывается скобками ( последние две строчки как пример)
Количество параметров в функции может быть неограниченно, или же их вообще может не быть.
если же в стрелочной функции один параметр мы можем записать его так:
```javascript
const arrFunc = param => param
```
```javascript
// Стрелочная функция
const arrFunc = (param , param1) => param + param1
// обычная функция
function func (param, param1) {
    return param + param1
}
arrFunc(7,8) // => 15
func(2,2) // => 4
```


# Сигнатура фунции

    Сигнатура фунции - количество необходимое для работоспособности функции

## Пример 
```javascript
    Math.pow(3, 3) // => 27
```
    Первый параметр - это основание степени
    Второй параметр - это показатель степени в который мы возводим основание

    Сигнатуру функции можно узнать вычитав в документации

## Параметры по умолчанию

```javascript
    Math.round(3.15) // => 3 (0 параметр функции указанный по умолчанию)
    Math.round(3.15 , 1) // => 3.1
    Math.round(3.151 , 2) // => 3.15
```
    Эта функция округляет первый параметр до количества знаков после запятой указанных вторым параметром

# Детерминированность

    Детерминированность - это неизменяемость результата функции при передаче одинаковых параметров 
    
    Побочный эффект - Действия которые изменяют внешние окружение программы 

    Такие как:
    1. Запись файл 
    2. Отправка сетевых запросов
    3. Изменение состояния объекта
    4. Взаимодействия с базой данных
    5. Изменение DOM дерева
    6. Изменения глобальных перемен 
    7. Вывод на экран