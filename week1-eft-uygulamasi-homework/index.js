import user from "./data/user_information";
import { selectGroupCreator } from "./components/SelectOptions";
import { timerCreator } from "./components/FormTimer";
import {
  getRandomTheme,
  higherAmountTransaction,
  transactionCompleted,
} from "./helper/helper-functions";

import {
  clearInputOnLoad,
  inputEventCreator,
  checkFormValidity,
  setInputMaxAttribute,
  splitInput,
} from "./helper/form-input-functions";

export const formState = {}; //Form iceriginin state verisi.

const highLimit = 500; //Belirlenebilecek kontrol limiti, sonrasinda sifre sormasi gerekir.
const timeLimit = 120; // Belirlenebilecek zaman limiti (saniye), timer icerisinde kullanilir.
const passwordAttemptLimit = 3; // Belirlenebilecek password girme sayisi.

const formElement = document.querySelector("form"); //Form elemaninin secilmesi.

formElement.addEventListener("submit", handleFormSubmit); //Formun gonderilme durumu ve kontroller.

//Eleman-event olusturucu fonksiyonlar
inputEventCreator(formElement, handleInputChange);
timerCreator(formElement, timeLimit);
selectGroupCreator(user.accounts, formState, handleInputChange);

//Form ici elemanlarin tanimlanmasi.
const selectElement = formElement.querySelector("select");
const [inputIBAN, inputAmount] = formElement.querySelectorAll("input");

const userNameHeading = document.getElementById("kullaniciAdi");
userNameHeading.textContent = `${user.name} ${user.surname}`;

function handleFormSubmit(event) {
  event.preventDefault();

  //Gonderilecek miktarin 500 birimden fazla olmasi.
  if (formState[inputAmount.name] >= highLimit) {
    //Sifre girebilme hakkiyla beraber sifre giris alani
    higherAmountTransaction(passwordAttemptLimit);
  } else {
    transactionCompleted();
  }
}

//Input change event , her input girisi veya dropdowndan secimde calisir
function handleInputChange(event) {
  let { name, value, type } = event.target;
  formState[name] = value; //formState verisinin input degerine gore guncellenmesi

  //IBAN inputunun kontrolu ve modifiye edilmesi.
  if (type === "text") {
    event.target.value = value.trim(); //Bos karakter kullaniminin engellenmesi
    event.target.value = splitInput(value); //Karakterlerin 4lu gruplar halinde bolunmesi
  }

  setInputMaxAttribute(inputAmount, formState[selectElement.name]); //Para girisinin dropdown menuya gore guncellenmesi
  checkFormValidity(formElement); //Input ve select elemanlari degistiginde formun kontrol edilmesi
}

//Ilk sayfa yuklenmesi durumunda formun kontrolu
clearInputOnLoad([inputIBAN, inputAmount]);
checkFormValidity(formElement);

//Deneme amacli yapildi.
setTimeout(() => {
  getRandomTheme();
}, 300);
