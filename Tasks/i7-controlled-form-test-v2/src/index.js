export default function app() {
  const container = document.querySelector('.container');

  const form = document.createElement('form');

  const mb3 = document.createElement('div');
  mb3.classList.add('mb-3');
  form.appendChild(mb3);

  const labelForWhere = document.createElement('label');
  labelForWhere.htmlFor = 'where'; 
  labelForWhere.classList.add('form-label');
  labelForWhere.textContent = 'Откуда-Куда';
  mb3.appendChild(labelForWhere);

  const whereInput = document.createElement('input');
  whereInput.autocomplete = 'off';
  whereInput.type = 'text';
  whereInput.id = 'where';
  whereInput.placeholder = 'Введите город';
  whereInput.classList.add('form-control');
  mb3.appendChild(whereInput);

  const whereNotification = document.createElement('p');
  whereNotification.id = 'where-notification';
  mb3.appendChild(whereNotification);

  const mb32 = document.createElement('div');
  mb32.classList.add('mb-3');
  form.appendChild(mb32);

  const labelForWhen = document.createElement('label');
  labelForWhen.htmlFor = 'when'; 
  labelForWhen.classList.add('form-label');
  labelForWhen.textContent = 'Когда';
  mb32.appendChild(labelForWhen);

  const whenInput = document.createElement('input');
  whenInput.autocomplete = 'off';
  whenInput.type = 'text';
  whenInput.id = 'when';
  whenInput.classList.add('form-control');
  whenInput.placeholder = 'Введите число и месяц';
  mb32.appendChild(whenInput);

  const whenNotification = document.createElement('p');
  whenNotification.id = 'when-notification';
  mb32.appendChild(whenNotification);

  const btn = document.createElement('button');
  btn.type = 'submit';
  btn.classList.add('btn', 'btn-primary');
  btn.textContent = 'Найти билеты';
  btn.id = 'submit-btn';
  form.appendChild(btn);

  const h2Element = container.querySelector('h2'); 
h2Element.appendChild(form)


// Добавляем обработчик события 'click' на кнопку btn
btn.addEventListener('click', (event) => {
  // Отменяем стандартное поведение кнопки (например, если это кнопка отправки формы)
  event.preventDefault();

  // Создаем объект FormData, который содержит данные формы
  const formData = new FormData(form);

  // Создаем новый объект XMLHttpRequest для отправки данных на сервер
  const xhr = new XMLHttpRequest();
  
  // Открываем соединение с сервером, указывая метод POST и URL '/tickets'
  xhr.open('POST', '/tickets', true);
  
  // Устанавливаем заголовок Content-Type для указания типа отправляемых данных
  xhr.setRequestHeader('Content-Type', 'application/json');
  
  // Определяем функцию, которая будет вызвана при завершении запроса
  xhr.onload = () => {
    // Проверяем, был ли запрос успешным (статус 200)
    if (xhr.status === 200) {
      // Если успешный ответ, добавляем класс 'bg-success' к элементу body
      document.body.classList.add('bg-success');
      // Выводим ответ сервера в консоль
      console.log(xhr.responseText);
    } else {
      // Если произошла ошибка, выводим сообщение об ошибке в консоль
      console.error('Ошибка отправки данных на сервер');
    }
  };
  
  // Отправляем данные на сервер в формате JSON
  xhr.send(JSON.stringify({
    where: formData.get('where'), // Получаем значение поля 'where' из формы
    when: formData.get('when'),   // Получаем значение поля 'when' из формы
  }));
});

function updateStateWhen() {
  const isWhereValid = whereNotification.classList.contains('text-success');
  const isWhenValid = whenNotification.classList.contains('text-success');

  if (isWhereValid && isWhenValid) {
    btn.classList.remove('btn-danger');
    btn.classList.remove('btn-primary'); 
    btn.classList.add('bg-success'); 
  } else {
    btn.classList.remove('btn-primary'); 
    btn.classList.remove('bg-success');
    btn.classList.add('btn-danger');
  }
}

whereInput.addEventListener('input', () => {
  const value = whereInput.value;
  const wherePattern = /^[^\s-]+(-[^\s-]+)+$/; 
  if (wherePattern.test(value)) {
    whereNotification.classList.remove('text-danger');
    whereNotification.classList.add('text-success');
  } else {
    whereNotification.classList.remove('text-success');
    whereNotification.classList.add('text-danger');
  }
  updateStateWhen();
});

whenInput.addEventListener('input', () => {
  const value = whenInput.value;
  const whenPattern = /^(0[1-9]|[12][0-9]|3[01])\.(0[1-9]|1[0-2])$/; 

  if (whenPattern.test(value)) {
    whenNotification.classList.remove('text-danger');
    whenNotification.classList.add('text-success');
  } else {
    whenNotification.classList.remove('text-success');
    whenNotification.classList.add('text-danger');
  }
  updateStateWhen();
});
}