//Verilen sonuclar ile sonuc sayfasi(bolumu) olusturma;
//Gelen array durumuna gore.

import { parseHTML } from "../services/utils";
import createMealCard from "./mealCard";

export default function createSearchResult(mealList) {
  //Elemanlarin secimi (sonuc container)
  const searchResultsSection = document.getElementById("JSsearchResults");
  searchResultsSection.style.display = "block";

  //Sonuc elemanlarini kapsayan container
  const resultContainerMarkup = `<div id="JSresultsContainer" class="search__results__container"></div>`;
  const resultContainerElement = parseHTML(resultContainerMarkup);

  //Sonuc listeleme durumunda ekrani sonuc bolumune kaydir.
  setTimeout(() => {
    searchResultsSection.scrollIntoView();
  }, 400);

  //Sonuc icerisinde loading animasyonunu kaldir
  searchResultsSection.innerHTML = "";

  //Section icerisine sonuc sayisini gosteren basligi ve sonuc containerini ekle.
  searchResultsSection.append(createResultHeading(mealList.length));
  searchResultsSection.append(resultContainerElement);

  //Yemek listesinde eleman varsa sonuc containera ekle
  if (mealList.length) {
    mealList.forEach((meal) => {
      resultContainerElement.appendChild(createMealCard(meal));
    });
  }
}

function createResultHeading(mealCount) {
  //Sonuc sayisina gore baslik durumu
  const headingMarkup = mealCount
    ? `<h2 class="search__results__heading">
  Aramanıza göre ${mealCount} sonuç bulundu.
        </h2>`
    : `<h2 class="search__results__heading">
    Arama sonucu bulunamadı.
        </h2>`;
  const headingElement = parseHTML(headingMarkup);

  return headingElement;
}
