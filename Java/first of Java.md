# вывод в консоль 
```java
        class App {
    public static void main(String[] args) {
        System.out.println("Hello, World!"); // prints "Hello, World!"
    }
}
```
# строгое разделение в ;  между инструкциями 
```java
System.out.println("Mother of Dragons."); System.out.println("Dracarys!");
////////////////////////////////
System.out.println("Mother of Dragons.");
 System.out.println("Dracarys!");

```

# Экранирование 
```java
System.out.println("Dragon's mother said \"No\""); // prints "
System.out.println("- Are you hungry?\n- Aaaarrrgh!"); // перенос строки
System.out.println("Joffrey loves using \\n"); // экранирование  \n
```

# базовые методы 

## .length возвращает число

```java
System.out.println("Hexlet".length()) //6
System.out.println("Yaroslav".length()) //8
```
## charAt

```java
System.out.println("Hexlet".charAt(0)) // H
System.out.println("Hexlet".charAt(2)) // x
// сочетание с ленгтх
System.out.println("Hexlet".charAt("Hexlet".length() -1)) //t
```

## trim()

```java
var name = " How much is the fish?   \n";
// вырезаем концевые пробелы и перенос строки
name = name.trim();
```
## replace()

```java
// Удаляем вопрос
var name = " How much is the fish?   \n";

name = name.replace("?", "");
// Заменяем пробелы на дефис
name = name.replace(" ", "-");
```
# Создание переменных / констант 

## переменная 
```java
var lalala = 'hexlet'
var num = 17
var numberFloat = 12.12
var char = 'n'
var boolean = false
```

## константа

```java
final var lalala = 'hexlet'
final var num = 17
final var numberFloat = 12.12
final var charElements = 'c'
final var boolean = true
```

# Типизация 

## String

```java
String greeting = "Hello Hexlet!";
```

## Byte работает от -128 до 127 byte — занимает в памяти 1 байт, значит может хранить числа от -128 до 127

### short — занимает в памяти 2 байта

### int — занимает в памяти 4 байта

### long — занимает в памяти 8 байт


```java
byte x = 3;
```

## Char в одинарных ковычках

```java
char ch = 'a';
```

# Явное преобразование типов

```java
// станет int
var number = Integer.parseInt("345");
System.out.println(number); // => 345

var result = (int) 5.1;
System.out.println(result); // => 5

// Дополнительные скобки помогают визуально отделить части выражения друг от друга
var result = 10 + ((int) 5.1);
System.out.println(result); // => 15
```

# Не явное преобразование типов 

```java
short a = 5;

// преобразование от short к int
int sum = a + 1;
```
А вот обратное преобразование не будет выполнено автоматически

```java
int a = 5;
// Error: incompatible types: possible lossy conversion from int to short
short sum = a + 2;
```

В этом случае Java автоматически преобразует число в строковое представление и объединяет его с другой строкой

```java
var a = 10;
var result = "Число: " + a; // Число: 10
```

# Создание первого метода
void - метод ничего не возвращает
```java
public static void printMotto() {}
```