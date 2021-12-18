const captcha = document.querySelector(".captcha"),
    reloadBtn = document.querySelector(".reload_btn"),
    inputField = document.querySelector("input"),
    checkbtn = document.querySelector(".check_btn"),
    statusTxt = document.querySelector(".status-txt");

let allCharacter = ["A", "Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "S", "D", "F", "G", "H", "J", "K", "L", "Z", "X", "C", "V", "B", "N", "M", "q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "a", "s", "d", "f", "g", "h", "j", "k", "l", "z", "x", "c", "v", "b", "n", "m", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", ];

function getCaptcha() {
    for (let i = 0; i < 6; i++) {
        let randomChar = allCharacter[Math.floor(Math.random() * allCharacter.length)];
        captcha.innerText += `${randomChar}`;
    }
}

reloadBtn.addEventListener("click", () => {
    captcha.innerHTML = "";
    inputField.innerText = "";
    getCaptcha();
});

checkbtn.addEventListener("click", e => {
    e.preventDefault();
    statusTxt.style.display = "block";
    let inputVal = inputField.value.split('').join('');
    if (inputVal == captcha.innerText) {
        statusTxt.style.color = "green";
        statusTxt.innerText = "Nice, captcha matched";
        setTimeout(() => {
            statusTxt.style.display = "";
            inputField.value = "";
            captcha.innerText = "";
            getCaptcha();
        }, 4000);
    } else {
        statusTxt.style.color = "red";
        statusTxt.innerText = "Captcha not matched. Please try again later";
    }
});