/* Задание 10
Создай функцию createBoxes(amount), которая принимает один параметр - число. 
Функция создает столько <div>, сколько указано в amount и добавляет их в div#boxes.

Размеры самого первого <div> - 30px на 30px.
Каждый элемент после первого, должен быть шире и выше предыдущего на 10px.
Все элементы должены иметь случайный цвет фона в формате HEX. Используй готовую функцию 
getRandomHexColor для получения цвета.*/


const enteredQuantity=document.querySelector('#controls').firstElementChild,//('#controls input');
      createElenetsBtn = document.querySelector('[data-create]'),
      deleteElenetsBtn = document.querySelector('[data-destroy]'),
      tumbFoeElements=document.querySelector('#boxes');

let elementWidth=30,
    elementHight=30;



const getRandomHexColor = ()=>{
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;}

const createElements=(getColor,wigth,hight)=>{
  const commonColor=getColor();
  const element=document.createElement('div');
  element.style.backgroundColor=commonColor;
  element.style.width=`${wigth}px`;
  element.style.height=`${hight}px`;
  return element;
}

const onCreateElenets=()=>{
  const numbersOfElements=Number(enteredQuantity.value);
  for(let i=0;i<numbersOfElements;i++){
    const divElement=createElements(getRandomHexColor,elementWidth,elementHight);
    tumbFoeElements.append(divElement);
    elementWidth+=10;
    elementHight+=10;
  }
}

const onDeleteElenets=()=>{
  tumbFoeElements.innerHTML='';
}

createElenetsBtn.addEventListener('click', onCreateElenets)
deleteElenetsBtn.addEventListener('click', onDeleteElenets)


