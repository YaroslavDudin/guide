1. ## chunk: Разбивает массив на массивы указанного размера.
   ```javascript
   const numbers = [1, 2, 3, 4, 5, 6];
   const chunks = _.chunk(numbers, 2);
   // chunks: [[1, 2], [3, 4], [5, 6]]
   ```

2. ## zip: Создает массив групп элементов из нескольких массивов.
   ```javascript
   const names = ['Alice', 'Bob'];
   const ages = [30, 25];
   const zipped = _.zip(names, ages);
   // zipped: [['Alice', 30], ['Bob', 25]]
   ```

3. ## difference: Создает массив значений, отсутствующих во втором массиве.
   ```javascript
   const arr1 = [1, 2, 3, 4, 5];
   const arr2 = [3, 4];
   const diff = _.difference(arr1, arr2);
   // diff: [1, 2, 5]
   ```

4. ## intersection: Создает массив значений, присутствующих во всех заданных массивах.
   ```javascript
   const arr1 = [1, 2, 3];
   const arr2 = [2, 3, 4];
   const arr3 = [3, 4, 5];
   const commonValues = _.intersection(arr1, arr2, arr3);
   // commonValues: [3]
   ```

5. ## find: Находит первый элемент в массиве, который соответствует заданному условию.
   ```javascript
   const users = [{ name: 'Alice' }, { name: 'Bob' }];
   const user = _.find(users, { name: 'Bob' });
   // user: { name: 'Bob' }
   ```

6. ## sortBy: Сортирует массив по заданному критерию.
   ```javascript
   const users = [{ name: 'Alice', age: 30 }, { name: 'Bob', age: 25 }];
   const sortedUsers = _.sortBy(users, 'age');
   // sortedUsers: [{ name: 'Bob', age: 25 }, { name: 'Alice', age: 30 }]
   ```

7. ## some: Проверяет, удовлетворяет ли хотя бы один элемент массива заданному условию.
   ```javascript
   const numbers = [1, 2, 3, 4, 5];
   const hasEven = _.some(numbers, num => num % 2 === 0);
   // hasEven: true
   ```

8. ## every: Проверяет, удовлетворяют ли все элементы массива заданному условию.
   ```javascript
   const numbers = [2, 4, 6, 8];
   const allEven = _.every(numbers, num => num % 2 === 0);
   // allEven: true
   ```

9. ## uniq: Создает новый массив, содержащий только уникальные значения.
   ```javascript
   const numbers = [1, 2, 2, 3, 4];
   const uniqueNumbers = _.uniq(numbers);
   // uniqueNumbers: [1, 2, 3, 4]
   ```

10. ## concat: Объединяет два или более массивов.
   ```javascript
   const arr1 = [1, 2];
   const arr2 = [3, 4];
   const combined = _.concat(arr1, arr2);
   // combined: [1, 2, 3, 4]
   ```
11. ## flatten: Выравнивает вложенные массивы в один плоский массив.
   ```javascript
   const nestedArray = [1, [2, [3, [4]]]];
   const flattened = _.flatten(nestedArray);
   // flattened: [1, 2, 3, 4]
   ```

12. ## uniqBy: Создает новый массив, содержащий только уникальные элементы на основе заданного критерия.
   ```javascript
   const users = [{ id: 1, name: 'Alice' }, { id: 2, name: 'Bob' }, { id: 1, name: 'Charlie' }];
   const uniqueUsers = _.uniqBy(users, 'id');
   // uniqueUsers: [{ id: 1, name: 'Alice' }, { id: 2, name: 'Bob' }]
   ```

13. ## _.maxBy: возвращаем максимальное значение 
   ```javascript
   const numbers =  [{ 'n': 4 }, { 'n': 2 }, { 'n': 6 }];
   const maxBy = _.mazBy(numbers, 'n');
   // Maxby: 6
   ```

14. ## sortByOrder: Сортирует массив по указанному порядку сортировки.
   ```javascript
   const users = [{ name: 'Alice' }, { name: 'Bob' }, { name: 'Charlie' }];
   const sortedUsers = _.sortByOrder(users, ['Charlie', 'Bob', 'Alice'], 'name');
   // sortedUsers: [{ name: 'Charlie' }, { name: 'Bob' }, { name: 'Alice' }]
   ```

15. ## take: Возвращает указанное количество элементов из начала массива.
   ```javascript
   const numbers = [1, 2, 3, 4, 5];
   const firstTwo = _.take(numbers, 2);
   // firstTwo: [1, 2]
   ```