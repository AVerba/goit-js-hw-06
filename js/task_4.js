/* Задание 4
Счетчик состоит из спана и кнопок, которые, при клике, должны увеличивать и уменьшать его значение на единицу.

<div id="counter">
  <button type="button" data-action="decrement">-1</button>
  <span id="value">0</span>
  <button type="button" data-action="increment">+1</button>
</div>
Создай переменную counterValue в которой будет храниться текущее значение счетчика и инициализируй её значением 0.
Добавь слушатели кликов на кнопки, внутри которых увеличивай или уменьшай значение счтетчика.
Обновляй интерфейс новым значением переменной counterValue. */

const btnDecrement=document.querySelector('[data-action="decrement"]'),
      btnIncrement=document.querySelector('[data-action="increment"]'),
      results=document.querySelector("#value");
let counter=0;      

btnIncrement.addEventListener('click',()=>{
  counter += 1;
  results.textContent = counter;
})
btnDecrement.addEventListener('click',()=>{
  counter -= 1;
  results.textContent = counter;
})