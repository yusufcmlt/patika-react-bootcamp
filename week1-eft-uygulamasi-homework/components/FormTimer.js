export default function FormTimer(time) {
  //Ilk alinan sure
  let firstTime = timerCalculate(time);

  //Timer dakika:saniye hesabi
  //Seconds/60 == kalan dakika
  //Seconds%60  == kalan saniye
  function timerCalculate(seconds) {
    let minutesLeft =
      Math.floor(seconds / 60) < 10
        ? `0${Math.floor(seconds / 60)}`
        : Math.floor(seconds / 60);
    let secondsLeft = seconds % 60 < 10 ? `0${seconds % 60}` : seconds % 60;

    return { minutesLeft, secondsLeft };
  }

  //Saniyede 1 tik
  function timerTick(timerElement) {
    time -= 1;

    //Sure Sonu
    if (time === 0) {
      timerEnd();
    }
    let { minutesLeft, secondsLeft } = timerCalculate(time);
    timerElement.querySelector(
      `#timerKalan`
    ).textContent = `${minutesLeft}:${secondsLeft}`;
  }

  //Olusturulan element
  const timerContainer = document.createElement("div");
  timerContainer.classList.add("form__timer");
  timerContainer.innerHTML = `Kalan Süre <span id="timerKalan">${firstTime.minutesLeft}:${firstTime.secondsLeft}
    </span>`;

  //Timeri calistir
  const timerID = setInterval(() => {
    timerTick(timerContainer);
  }, 1000);

  //Sure sonu
  function timerEnd() {
    clearInterval(timerID);
    swal({
      icon: "info",
      title: "İşlem süresi doldu.",
      text: "Oturumunuz sonlandırıldı.",
    }).then(() => {
      location.reload();
    });
  }

  return timerContainer;
}

//Timerin forma eklenmesi.
//Timer saniye ile cagirilir (dk*60)
//contianerForm parametresi ile gelen container elemanin ilk basina eklenir;
export function timerCreator(containerForm, timeLimit) {
  const timerElement = FormTimer(timeLimit);
  containerForm.prepend(timerElement);
}
