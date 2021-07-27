import { localStorageMeal, selectedMealData } from "../services/localData";
import { parseHTML } from "../services/utils";

//Bunun mealCard disinda yapilmasi zorunlu oldu.
//Kartlarin olusmasi durumunda sayfa icerine keydown ekleme
//Secili kart durumunda F tusunu beklemekte
document.addEventListener("keydown", handleKeyDown);

/*
 * Yemek karti olusturucu.
 * Gelen cardData verisiyle kart olusturur (yemek adi, yemek id,yemek resim)
 * localStorage'daki favori listesini kontrol ederek yemegin favori olup olmadigini ayarlar
 * Kartin secilmesi durumunda global secili kart classina karti ekler
 * Secili kart olmasi durumunda kart F tusu ile eklenip cikarilabilir.
 */

export default function createMealCard(cardData) {
  const { strMeal, idMeal, strMealThumb } = cardData;

  const cardMarkup = `<div id="meal-${idMeal}" class="result__card">
      <div class="card__fav-icon"></div>
      <img
        src="${strMealThumb}"
        alt="result 1"
        class="card__image"
      />
      <h2 class="card__heading">${strMeal}</h2>
    </div>`;

  //Elemanlarin secimi
  const cardElement = parseHTML(cardMarkup);
  const cardsContainer = document.getElementById("JSresultsContainer");
  const favIcon = cardElement.querySelector(".card__fav-icon");

  //Olusturulan kart localStorage favori liste icerisinde bulunuyor mu
  //-bulunuyorsa gereken css stili ile fav icon gorselini degistir.
  if (localStorageMeal.checMealFav(cardData)) {
    favIcon.classList.add("card__fav-icon--selected");
  }

  //Yemek kartinin secilme durumu
  cardElement.addEventListener("click", handleSelectCard);

  function handleSelectCard(event) {
    //Secili kart bilgisine secilen karti ekle,(data)
    selectedMealData.setMealData(cardData, this);

    //Tiklanan yemek kartini sec.Baska secili varsa kaldir.
    //Burada 'event.target' tiklanan yere gore degistiginden this tum karti kapsiyor.
    this.classList.toggle("result__card--selected");
    //tiklanan noktanin fav icon olma durumu;
    if (event.target === favIcon) {
      toggleMealFavorite(favIcon);
    }
    removeOtherSelected(this, cardsContainer);
  }

  return cardElement;
}

//Herhangi bir kartin secili olmasi durumunda F tusuna basilmasi.
//Kartin favorilere eklenmesi
function handleKeyDown({ code }) {
  const selectedCard = document.querySelector(".result__card--selected");

  //Secili bir kart var ve F tusuna basildi ise favoriye ekleme/cikarma durumu
  if (selectedCard && code === "KeyF") {
    const favIcon = selectedCard.querySelector(".card__fav-icon");
    toggleMealFavorite(favIcon);
  }
}

//Karti favorilere ekle cikar islemi
//Favori ikonunu degistir
//Karti localStorage da favorilere ekle veya cikar
function toggleMealFavorite(favIcon) {
  const selectedMealCardData = selectedMealData.mealData;

  favIcon.classList.toggle("card__fav-icon--selected");
  if (localStorageMeal.checMealFav(selectedMealCardData)) {
    localStorageMeal.removeMealFav(selectedMealCardData);
  } else {
    localStorageMeal.addMealFav(selectedMealCardData);
  }
}

//Tiklanan kart haric diger secimleri kaldir.
function removeOtherSelected(selectedCard, cardsContainer) {
  const selectedElements = cardsContainer.querySelectorAll(
    ".result__card--selected"
  );
  selectedElements.forEach((element) => {
    if (element !== selectedCard) {
      element.classList.remove("result__card--selected");
    }
  });
}
