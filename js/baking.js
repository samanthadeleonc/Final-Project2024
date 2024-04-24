document.addEventListener("DOMContentLoaded", function() {
  // Redirect from home --> ingredients
  var ingredientsLink = document.querySelector("#ingredients");
  if (ingredientsLink) {
      ingredientsLink.addEventListener("click", function() {
          window.location.href = "ingredients.html";
      });
  }

  // Redirect from home --> random
  var randomLink = document.querySelector("#random");
  if (randomLink) {
      randomLink.addEventListener("click", function() {
          window.location.href = "random.html";
      });
  }

  // Redirect from home --> all
  var allLink = document.querySelector("#all");
  if (allLink) {
      allLink.addEventListener("click", function() {
          window.location.href = "all.html";
      });
  }

  // Alert when an image is clicked
  var allCards = document.getElementById("all-cards");
  if (allCards) {
      allCards.addEventListener("click", function(event) {
          if (event.target && event.target.matches("img")) {
              var link = event.target.parentElement.getAttribute("href");
              window.location.href = link;
          }
      });
  }
});

