import { formState } from "..";

//Sayfa load durumunda input iceriginin silinmesi.
export function clearInputOnLoad(inputList) {
  inputList.forEach((element) => {
    element.value = "";
  });
}

//Form elemanindaki inputlara on change eventinin eklenmesi
//Inputlara keyup eventi de eklendi: her tus girisinin kontrol edilmesi isteniyor.
export function inputEventCreator(containerForm, eventFunction) {
  containerForm.querySelectorAll("input").forEach((input) => {
    input.addEventListener("input", eventFunction);
  });
}

//HTML5 form kontrolleri yardimiyla Form validity durumunun kontrolu ve butona etkisi
export function checkFormValidity(formElement) {
  const isFormValid = formElement.checkValidity();
  const buttonElement = formElement.querySelector("button");
  toggleButtonAccess(buttonElement, isFormValid);
}

//Form validity durumuna gore buton erisiminin guncellenmesi
function toggleButtonAccess(buttonElement, buttonState) {
  const inputElementState =
    formState[document.querySelector('input[type="number"').name];
  buttonElement.disabled = !buttonState;
  buttonElement.textContent = !buttonState
    ? "Eksik veya Yanlış Bilgi"
    : `${inputElementState}₺ Gönder`;
}

//Dropdown menudeki bakiyenin para miktari inputundaki max girilebilecek sayiyi guncellemesi
export function setInputMaxAttribute(inputAmount, maxAmountValue) {
  inputAmount.setAttribute("max", `${maxAmountValue}`);
}

//IBAN inputunun sekillendirilmesi.
//1111-1111-1111-1111
export function splitInput(text) {
  text = text.split("-").join("");
  let modifiedText = "";

  //Disaridan kopyalama durumunda inputun kontrolu
  if (text.length >= 16) {
    text = text.slice(0, 16);
  }

  //Regex ile yapilabilirdi//
  //Inputa girilen iban degerinin 4 karakterde bir "-" ile bolunmesi
  for (let i = 0; i < text.length; i++) {
    modifiedText += text[i];
    if ((i + 1) % 4 == 0 && i + 1 !== text.length) {
      modifiedText += "-";
    }
  }
  return modifiedText;
}
