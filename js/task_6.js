/* Задание 6
Напиши скрипт, который при потере фокуса на инпуте (событие blur), 
проверяет его содержимое на правильное количество введённых символов.*/

const inputRef = document.querySelector("#validation-input");

const onCheckinputLength = () => {
  inputRef.value.length === Number(inputRef.dataset.length)
    ? inputRef.classList.add("valid")
    : inputRef.classList.add("invalid");
};

const onInputFocus = () => {
  inputRef.classList.remove("valid", "invalid");
};

inputRef.addEventListener("blur", onCheckinputLength);
inputRef.addEventListener("focus", onInputFocus);