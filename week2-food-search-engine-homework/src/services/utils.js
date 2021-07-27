//Yardimci fonksiyonlar vb

//Verilen string ile element olustur.
//Olusturulan document icerisindeki ilk elementi sec. (gruplandigi surece sikinti yok)
const parseHTML = (htmlStr) => {
  const templateDoc = new DOMParser().parseFromString(htmlStr, "text/html");
  return templateDoc.body.firstChild;
};

/**
 * Debounce
 * Search inputunda yazarken arama isteklerini geciktirme(delay)
 * Debonce ile her tusa basma durumunda arama fonksiyonunu erteleme
 * Yazma bittiyse arama fonksiyonunu girilen parametre ile delay suresi sonrasinda cagirma (min=700ms)
 */
const debounce = (searchFunc, delay = 700) => {
  let timeoutID;

  return function executedFunction(...args) {
    //Debounce suresi icerisinde tekrar cagirilmazsa timeout sonunda calisacak fonksiyon
    const timerEnd = () => {
      clearTimeout(timeoutID);
      //Sure sonunda parametre ile gelen callback fonksiyonu cagir
      searchFunc(...args);
    };

    //Onceki timeoutu kaldirma
    clearTimeout(timeoutID);
    //Bekleme suresinin yeninden ayarlanmasi.
    //Input icerisinde tus her tus basimi durumunda onceki timeoutu silip yeniden event fonksiyonunun ertelenmesi.
    timeoutID = setTimeout(timerEnd, delay);
  };
};

export { parseHTML, debounce };
