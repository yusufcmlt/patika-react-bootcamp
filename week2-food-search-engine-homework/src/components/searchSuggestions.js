import { fuzzySearch } from "../services/api-service";
import { parseHTML } from "../services/utils";
import createSearchResult from "./searchResults";

/**
 * Aramaya icerigine gore getirilen onerilerin gorsellestirilmesi:
 *
 * createSuggestionList gelen listeye gore ul olusturur ve -
 * createSuggestionElement gelen liste elemanina gore olusturulan elemanlar-
 * ul icerisine eklenir.
 *
 */

export default function createSuggestionList(searchResultList) {
  //Eski listeyi (eger varsa) sil
  removeSuggestionList();
  //Liste container olusturulmasi
  const suggestionListMarkup = ` <ul id="JSsuggestionsList" class="search__suggestions"></ul>`;
  const suggestionListElement = parseHTML(suggestionListMarkup);

  //Gelen listeye gore bir liste elemani olustur
  searchResultList.forEach((meal) => {
    suggestionListElement.appendChild(createSuggestionElement(meal.strMeal));
  });

  return suggestionListElement;
}

//Gelen oneri ismine gore liste elemani olustur
function createSuggestionElement(suggestionName) {
  //Gereken elemanlarin olusturulmasi/secimi.
  const suggestionMarkup = `<li class="suggestion">${suggestionName}</li>`;
  const suggestionElement = parseHTML(suggestionMarkup);
  const searchInput = document.querySelector("input");

  //Onerilen yemeklerden birisine tiklanma durumu.
  //Sadece tek yemek listelenmesi beklenir.
  suggestionElement.addEventListener("click", handleGetSuggestedMeal);

  function handleGetSuggestedMeal(event) {
    //Onerilen yemek ismini al
    const searchTerm = event.target.textContent;
    //Sadece onerilen yemegi gosterecek sekilde arama yap
    createSearchResult(fuzzySearch(searchTerm, 1));
    searchInput.value = "";
    removeSuggestionList();
  }

  return suggestionElement;
}

//Eger oneri listesi (eger varsa) sil.
//Arama durumlarinda kaldirmak veya oneri durumunda ust uste ayni listeden DOM uzerinde yer kaplamamasi icin.
export function removeSuggestionList() {
  const suggestionsList = document.getElementById("JSsuggestionsList");
  if (suggestionsList) {
    suggestionsList.remove();
  }
}
