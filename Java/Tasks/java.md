
создание рандомного числа от 1 до 10
```java
System.out.println((int) (Math.random() * 10));

Random random = new Random(); // создали новый объект
int randomNumber = random.nextInt(10); // метод объекта 
```