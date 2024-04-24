//For ingredients.html to ensure recipes show up based on what ingredients the user has//
document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll('.ingredientsList button');
    const allCards = document.getElementById('all-cards');
    const selectedIngredientsList = document.getElementById('selectedIngredientsList');
  
    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            button.classList.toggle('active');
            filterCards();
        });
    });
  
    function filterCards() {
        const activeIngredients = document.querySelectorAll('.ingredientsList button.active');
        const activeIngredientsArray = Array.from(activeIngredients).map(button => button.id);
  
        const cards = document.querySelectorAll('.card');
  
        cards.forEach((card) => {
            const cardIngredients = card.getAttribute('data-ingredients').split(" ");
            const show = cardIngredients.every((ingredient) => activeIngredientsArray.includes(ingredient));
            card.style.display = show ? 'block' : 'none';
        });
    }
  
    allCards.style.display = 'block';
  });