import { localStorageMeal } from "../services/localData";
import { parseHTML } from "../services/utils";
import createSearchResult from "./searchResults";

//Favorileri getir butonu.
//Arama cubugundan hemen sonra eklenir
export default function createFavoriteButton() {
  const buttonMarkup = `<button id="JSfavoriteLink" class="header__favorite-link">Favori yemeklerim</button>`;
  const buttonElement = parseHTML(buttonMarkup);

  buttonElement.addEventListener("click", handleGetFavorites);

  function handleGetFavorites() {
    const favoriteMeals = localStorageMeal.getLocalFavData();

    createSearchResult(favoriteMeals);
  }

  return buttonElement;
}
