
/*Задание № 2

Напиши скрипт, который для каждого элемента массива ingredients:

Создаст отдельный элемент <li>. Обзательно используй метод document.createElement().
Добавит название ингредиента как его текстовое содержимое.
Добавит элементу класс item.
После чего вставит все <li> за одну операцию в список ul.ingredients. */

const ingredients = [
    'Potatoes',
    'Mushrooms',
    'Garlic',
    'Tomatos',
    'Herbs',
    'Condiments',
  ],
allIngredients=document.querySelector('#ingredients');

  const createListItem=(item)=>{
    const element =document.createElement('li');
    element.textContent=item;
    return element;
  }
  const ingredientsList=ingredients.map((item)=>createListItem(item));
  console.log(ingredientsList);
allIngredients.append(...ingredientsList);