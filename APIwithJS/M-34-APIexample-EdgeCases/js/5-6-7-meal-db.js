const searchFood = () => {
  const searchField = document.getElementById("search-field");
  const searchText = searchField.value;

  //   clear data
  searchField.value = "";
  if (searchText == "") {
    //   please write something to display
    alert("please write something to display");
  } else {
    //   load data
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => displaySearchResult(data.meals));
  }
};

const displaySearchResult = (meals) => {
  const searchResult = document.getElementById("search-result");
  // searchResult.innerHTML = '';
  searchResult.textContent = "";
  // if (meals.length < 1) {
  //   //show no result found
  //   console.log("no result found");
  // } 
    meals.forEach((meal) => {
      const div = document.createElement("div");
      div.classList.add("col");
      div.innerHTML = `
    <div onclick="loadMealDetail(${meal.idMeal})"  class="card">
    <img src="${
      meal.strMealThumb
    }" class="card-img-top" alt="This is ${meal} picture">
    <div class="card-body">
      <h5 class="card-title">${meal.strMeal}</h5>
      <p class="card-text">${meal.strInstructions.slice(0, 200)}</p>
    </div>
  </div>`;
      searchResult.appendChild(div);
    });
  
};

const loadMealDetail = (mealID) => {
  console.log(mealID);
  const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealID}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayMealDetails(data.meals[0]));
};

const displayMealDetails = (details) => {
  console.log(details);
  const mealDetails = document.getElementById("meal-details");
  const div = document.createElement("div");
  div.classList.add("card");
  div.innerHTML = `
  <img src="${
    details.strMealThumb
  }" class="card-img-top" alt="This is ${details} picture">
  <div class="card-body">
      <h5 class="card-title">${details.strMeal}</h5>
      <p class="card-text">${details.strInstructions.slice(0, 150)}</p>
      <a href="${details.strYoutube}" class="btn btn-primary">Go somewhere</a>
  </div>
  `;
  mealDetails.appendChild(div);
};
