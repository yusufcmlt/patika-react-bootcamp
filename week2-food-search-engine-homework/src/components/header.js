import headerImage from "../img/food-bowl-header.png";
import { parseHTML } from "../services/utils";
import createFavoriteButton from "./getFavoritesButton";
import createSearchForm from "./searchForm";

//Gelen bilgiyle olusturulacak header icerigi

/**
 * Icerik:
 *
 * Kullanici heading --->h1
 * Arama formu  ---> searchForm.js --createSearchForm();
 * Favorileri getir butonu --->getFavoritesButton.js --createFavoriteButton()
 *
 */

export default function createHeaderContent(userName) {
  //Header icerisinden karsilama containerini sec.
  const headerContainer = document.getElementById("JSheaderGreet");

  //Gelen kullanici isim bilgisiyle olusturulan markup
  const headerMarkup = `
    <h1 class="header__heading">
      Merhaba <span class="header__heading--username">${userName}!</span>
    </h1>
  `;

  //Olusturulan elemanlar
  const userHeading = parseHTML(headerMarkup); //Markupu cevirir
  const searchForm = createSearchForm();
  const favoriteButton = createFavoriteButton();

  //Olusturulan header icerigini verilen root icerisinde loading yerine yerlestir.
  //BURAYA SIRF LOADING BIRAZ DAHA UZUN SURE GORUNSUN DIYE SETTIMEOUT EKLIYORUM 600ms (datayi hizli cekiyor)
  setTimeout(() => {
    headerContainer.innerHTML = "";
    headerContainer.append(userHeading, searchForm, favoriteButton);
  }, 600);
}
