export default function SelectOptions(optionsData, { id, onChangeFunction }) {
  //Select elementi icin container olusturulmasi.
  const formGroupElement = document.createElement("div");
  formGroupElement.classList.add("form__group");

  //Select ve ona ait label elementlerinin markupi
  //parametreden gelen id bilgisi giriliyor.
  let selectElement = `<label for="${id}" class="form__label"
    >Gönderen Hesap</label
  ><select id="${id}" name="${id}" class="form__input" required></select>`;

  //Olusturulan markupin container element icine eklenmesi
  formGroupElement.innerHTML = selectElement;
  selectElement = formGroupElement.querySelector("select");

  //Select elementine parametreden gelen change eventine ait fonksiyon
  selectElement.addEventListener("input", onChangeFunction);
  selectElement.required = true;

  //optionsData verisine gore hesap listesini-
  //-select elementi icerisinde option olarak olusturma
  optionsData.forEach((option) => {
    let optionElement = document.createElement("option");
    optionElement.textContent = `${option.iban} - ${option.balance} ₺`;
    optionElement.value = option.balance;
    selectElement.appendChild(optionElement);
  });

  return formGroupElement;
}

//Select eleman grubunun ---timerdan hemen sonra--- forma eklenmesi.
//id ve onChangeFunction argumanlari kullanilarak select grubu olusturuluyor ve event baglaniyor.
//Ilk render durumunda secili secenegin degeri state e ataniyor.
export function selectGroupCreator(formData, initialState, eventFunction) {
  const selectGroup = SelectOptions(formData, {
    id: "gondericiHesapMiktar",
    onChangeFunction: eventFunction,
  });
  const selectElement = selectGroup.querySelector("select");
  initialState[selectElement.name] = selectElement.value;
  document
    .querySelector(".form__timer")
    .insertAdjacentElement("afterend", selectGroup);
}
