/* Задание 7
Напиши скрипт, который реагирует на изменение значения 
input#font-size-control (событие input) и изменяет инлайн-стиль 
span#text обновляя свойство font-size. В результате при перетаскивании 
ползунка будет меняться размер текста.*/

const inputRef = document.querySelector("#font-size-control");
const wordRef = document.querySelector("#text");
const onFontChange = () => {
  wordRef.style.fontSize = `${Number(inputRef.value)}px`;
};

inputRef.addEventListener("input", onFontChange);