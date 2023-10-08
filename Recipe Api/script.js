
let result = document.getElementById('result-container');
let searchbtn = document.getElementById('search-btn');

const url ="https://www.themealdb.com/api/json/v1/1/search.php?s=";

let userInput = document.getElementById("input").value;

fetch(url+"big mac")
.then(response => response.json())
.then(data => {
    let myMeal = data.meals[0];
    console.log(myMeal);
    console.log(myMeal.strMealThumb);
    console.log(myMeal.strMeal);
    console.log(myMeal.strArea);
    console.log(myMeal.strInstructions);

    let count = 1;
    let ingredients = [];

    for(let i in myMeal){
        let ingredient = "";
        let measure = "";
        if(i.startsWith("strIngredient") && myMeal[i]){
            ingredient = myMeal[i];
            measure = myMeal[`strMeasure`+count];
            count =+1;
            ingredients.push(`${measure} ${ingredient}`)

        }
    }

    console.log(ingredients);
    result.innerHTML = `
    <img src=${myMeal.strMealThumb}>
    <div class="details">
        <h2>${myMeal.strMeal}</h2>
        <h4>${myMeal.strArea}</h4>

    </div>

    <div class="making" id="making">

    </div>
    
    <div class="recipe">
        <button id="hide-menu">X</button>
        <pre id="instructions">${myMeal.strInstructions}</pre>
    </div>
    <button id="show-menu">View Recipe</button>
    `;
    
    let ingredientCon = document.getElementById("making");
    let parent = document.createElement("ul");
    let recipes = document.getElementById("recipe");
    let hideRecipe = document.getElementById("hide-menu");
    let showRecipe = document.getElementById("show-menu");

    ingredients.forEach((i) =>{
        let child = document.createElement("li");
        child.innerHTML = i ;
        parent.appendChild(child);
        ingredientCon.appendChild(parent);
    });

    hideRecipe.addEventListener("click", () =>{
        recipes.style.display = "none";
    });

    showRecipe.addEventListener("click", () =>{
        recipes.style.display = "block";
    });

});

