import axios from "axios";
import Fuse from "fuse.js";

import mealsList from "./mealsmin.js";

const USER_API_URL = "https://jsonplaceholder.typicode.com/users/";
//const MEAL_API_URL = "www.themealdb.com/api/json/v1/1/search.php?s="; --->KULLANILMIYOR

//Verilen user id ile kullanici ismi getir.
const getUser = async (userID) => {
  const userData = await axios.get(`${USER_API_URL}${userID}`);
  return userData.data;
};

//Fuse.js ile fuzzy arama yapma
//mealsmin.js icerisinde yemek isimlerinden arama yapma

const fuse = new Fuse(mealsList, {
  keys: ["strMeal"],
  threshold: 0.45,
});
const fuzzySearch = (searchTerm, resultLimit) => {
  let fuzzyResult = fuse.search(searchTerm, { limit: resultLimit });
  //Gelen sonuclar item: isminde key icerisinde geliyor onu duzeltiyorum
  fuzzyResult = fuzzyResult.reduce((resultArr, { item }) => {
    return [
      ...resultArr,
      {
        idMeal: item.idMeal,
        strMeal: item.strMeal,
        strMealThumb: item.strMealThumb,
      },
    ];
  }, []);

  return fuzzyResult;
};

export { getUser, fuzzySearch };
