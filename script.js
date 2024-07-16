const searchBox = document.querySelector('.searchBox');
const searchButton = document.querySelector('.searchButton');
const recipebox = document.querySelector('.recipe-box');
const recipeDetailContent = document.querySelector('.recipe-details-content');
const recipeCloseBtn = document.querySelector('.recipe-close-btn');

const fetchRecipes=async(query)=>{
    recipebox.innerHTML = "<h2>Searching for Recipes...</h2>";
    try{
        const data =await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);
        const response =await data.json();

        recipebox.innerHTML = "";
        response.meals.forEach(meal => {
        const recipeDiv = document.createElement('div');
        recipeDiv.classList.add('recipe');
        recipeDiv.innerHTML = `
            <img src="${meal.strMealThumb}">
            <h3>${meal.strMeal}</h3>
            <p><span>${meal.strArea}</span> Dish</p>
            <p>Belongs to <span>${meal.strCategory}</span> Category</p>
        `

        const button = document.createElement('button');
        button.textContent = "View Recipe";
        recipeDiv.appendChild(button);

        //Adding EventListener to recipe button
        button.addEventListener('click',()=>{
            openRecipePopup(meal);
        });

        recipebox.appendChild(recipeDiv);
        });
    }
    catch(error){
        recipebox.innerHTML = `<h2>Error in Fetching Recipes...</h2>`;
    }
}

const fetchIngredients = (meal) =>{
    let ingredientsList = "";
    for (let i=1;i<21;i++){
        const ingredient = meal[`strIngredient${i}`];
        if (ingredient){
            const measure = meal[`strMeasure${i}`];
            ingredientsList += `<li>${measure} ${ingredient}</li>`
        }
        else{
            break;
        }
    }
    return ingredientsList;
}

const openRecipePopup = (meal) =>{
    recipeDetailContent.innerHTML = `
    <h2 class="recipeName">${meal.strMeal}</h2>
    <h3>Ingredients:</h3>
    <ul class="ingredientList">${fetchIngredients(meal)}</ul>
    <div class="recipeInstructions">
        <h3>Instructions:</h3>
        <p>${meal.strInstructions}</p>
    </div>
    `
    recipeDetailContent.parentElement.style.display = "block";
}

recipeCloseBtn.addEventListener('click',() =>{
    recipeDetailContent.parentElement.style.display = "none";
});
searchButton.addEventListener('click', (e)=>{
    e.preventDefault();
    const searchInput = searchBox.value.trim();
    if(!searchInput){
        recipebox.innerHTML = `<h2>Type the meal in the search box.</h2>`;
        return;
    }
    fetchRecipes(searchInput);
});


