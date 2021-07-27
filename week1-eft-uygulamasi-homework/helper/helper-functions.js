import swal from "sweetalert";
import backgroundData from "../data/background-data";

//Gonderilecek miktarin 500 birimden fazla olmasinin kontrolu
//Sifre girebilme hakkiyla beraber yanlis sifre durumunda tekrar cagirilma.
//Alert ve promptlar icin Sweetalert (swal) eklendi.
export function higherAmountTransaction(
  passwordAttemptsLeft,
  passwordSent = "1234"
) {
  if (passwordAttemptsLeft === 0) {
    return transactionFailed();
  }
  //Sweetalert ile prompt yonetimi
  swal({
    title: "Güvenlik Kontrolü",
    text: `Telefonunuza gelen şifreyi giriniz. ${passwordAttemptsLeft} hakkınız kaldı.`,
    content: "input",
    button: "Gönder",
    icon: "info",
  }).then((password) => {
    //Sifre parametresinin kontrolu
    if (password === passwordSent) {
      return transactionCompleted();
    } else {
      swal({
        icon: "error",
        title: "Şifre yanlış",
      }).then(() => {
        //Yanlis sifre durumunda tekrar cagirilma
        return higherAmountTransaction(passwordAttemptsLeft - 1, passwordSent);
      });
    }
  });
}

//Gonderim isleminin basarisiz olmasi durumu
export function transactionFailed() {
  swal({ icon: "error", title: "Hesabiniz bloke oldu." }).then(() => {
    location.reload();
  });
}

//Gonderim isleminin basarili olmasi durumu
export function transactionCompleted() {
  swal({ icon: "success", title: "İşlem başarılı" }).then(() => {
    location.reload();
  });
}

//Gereksiz kisim
//Deneme amacli yapildi.
//Rastgele tema her load durumunda
export function getRandomTheme() {
  const randomIndex = Math.floor(Math.random() * 4);
  const randomTheme = backgroundData[randomIndex];
  let logoContainer = document.querySelector(".logo");

  document.body.style.backgroundImage = randomTheme.backgroundColor;
  logoContainer.querySelector("img").setAttribute("src", `${randomTheme.img}`);
  logoContainer.querySelector("h2").textContent = `${randomTheme.text}Bank`;

  document.querySelectorAll(".form__input").forEach((element) => {
    element.style.backgroundColor = randomTheme.inputColor;
  });

  document.querySelector("button").style.backgroundColor = randomTheme.btnColor;
  document.title = `${randomTheme.text}Bank EFT`;
}
