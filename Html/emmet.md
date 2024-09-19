## Расширение для текстого редактора - emmet
**Простой Пример**
```
ul>li*3{Привет , это эммет}

```
**в html**
```
<ul>
    <li> Привет, это эммет </li>
    <li> Привет, это эммет </li>
    <li> Привет, это эммет </li>
</ul>
```
**Пример по сложнее**

```
section.cards>article.card>div.card-title{название товара}+img[src="###"][alt="типо картинка 1 товара"]+(.card-price>span.price-sum{24 000}+span.cur-price{рубли})+button{заказать}

```

```
<section class="cards">
    <article class="card">
        <div class="card-title">название товара</div>
        <img src="###" alt="типо картинка 1 товара">
        <div class="card-price">
            <span class="price-sum">24 000</span>
            <span class="cur-price">рубли</span>
        </div>
        <button>заказать</button>
    </article>
</section>

```
**Описание**

 +: Используется для размещения элементов на том же уровне.
 >:  Используется для создания вложенности элементов.
 []: Используется для задания атрибутов элемента.
 {}:  Используется для добавления текста в элемент.