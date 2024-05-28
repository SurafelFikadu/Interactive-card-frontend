// doms
const firstPhase = document.getElementById("first-phase");
const successPhase = document.getElementById("success-phase");
const btnSubmit = document.getElementById("btn-submit");

const Name = document.getElementById("name");
const cardNum = document.getElementById("card-num");

const month = document.getElementById("month");
const year = document.getElementById("year");
const day = document.getElementById("day");

const holderName = document.getElementById("holder-name");
const cardNumber = document.getElementById("card-number");

const mm = document.getElementById("m-m");
const yy = document.getElementById("y-y");

const num = document.getElementById("num");

btnSubmit.onclick = function () {
    if(
        Name.value !== ""
        && cardNum.value !== ""
        && month.value !== ""
        && year.value !== ""
        && day.value !== ""
    ) {
        firstPhase.classList.toggle("hidden");
        successPhase.classList.toggle("hidden");
        btnSubmit.textContent = "Continue";
        holderName.innerHTML = `${Name.value}`;
        cardNumber.innerHTML = `${cardNum.value}`;
        mm.innerHTML = `${month.value}`;
        yy.innerHTML = `${year.value}`;
        num.innerHTML = `${day.value}`;
        setTimeout(() => {
            Name.value = "";
            cardNum.value = "";
            month.value = "";
            year.value = "";
            day.value = "";
        }, 1);
    } else if (btnSubmit.textContent == "Continue") {
        setTimeout(() => {  
            firstPhase.classList.toggle("hidden");
            successPhase.classList.toggle("hidden");
            btnSubmit.textContent = "Confirm";
        }, 500);
    }
}
