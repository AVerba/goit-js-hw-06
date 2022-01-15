/* Задание 6
Напиши скрипт, который изменяет цвета фона элемента <body> через инлайн стиль при 
клике на button.change-color и выводит значение цвета в span.color.*/


const getRandomHexColor = ()=>{
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const body = document.body,
             changeColorBtn=document.querySelector('.change-color'),
             colorNote=document.querySelector('.color');

 changeColorBtn.addEventListener('click',(e)=>{
   const color=getRandomHexColor();
   body.style.backgroundColor=color;
   colorNote.textContent=color;

 })