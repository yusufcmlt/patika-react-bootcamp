///////////////Class kullanarak bir seyler denemece///////////////////////

/**
 * localStorage islemleri - Favori yemekleri tutacak
 * Yemek favoriye ekleyecek - cikaracak - yemek kontrolu
 * Favori yemek listesini getirecek
 * Yemekleri 'favorites' keyi ile bir array icersinde tutuyorum
 */

const favLocalData = window.localStorage;

class localMealFav {
  constructor() {
    this.favMealData = this.getLocalFavData();
    console.log("localStorage'dan datayi cektim", this.favMealData);
  }

  getLocalFavData() {
    const favData = JSON.parse(favLocalData.getItem("favorites"));

    return favData ? favData : [];
  }
  removeMealFav({ idMeal }) {
    this.favMealData = this.favMealData.filter(
      (meal) => meal.idMeal !== idMeal
    );
    favLocalData.setItem("favorites", JSON.stringify(this.favMealData));
  }
  addMealFav(mealData) {
    this.favMealData.push(mealData);
    favLocalData.setItem("favorites", JSON.stringify(this.favMealData));
  }
  checMealFav(mealData) {
    const hasMeal =
      this.favMealData.findIndex((meal) => meal.idMeal === mealData.idMeal) >
      -1;
    return hasMeal;
  }
}

//Secili yemek bilgisinin tutulmasi
//Favoriye ekleme gibi durumlarda kullanmak icin
class SelectedMeal {
  constructor() {
    this.idMeal = "";
    this.strMeal = "";
    this.strMealThumb = "";
  }

  setMealData({ strMeal, strMealThumb, idMeal }) {
    this.idMeal = idMeal;
    this.strMeal = strMeal;
    this.strMealThumb = strMealThumb;
  }

  get mealData() {
    return {
      idMeal: this.idMeal,
      strMeal: this.strMeal,
      strMealThumb: this.strMealThumb,
    };
  }
}

const selectedMealData = new SelectedMeal();
const localStorageMeal = new localMealFav();

export { localStorageMeal, selectedMealData };
