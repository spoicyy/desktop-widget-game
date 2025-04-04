const avatarImg = document.getElementById("avatar");
const skinSelect = document.getElementById("skin-select");
const eyeSelect = document.getElementById("eye-select");
const hairSelect = document.getElementById("hair-select");
const clothesSelect = document.getElementById("clothes-select");
const accessorySelect = document.getElementById("accessory-select");
const saveAvatarButton = document.getElementById("save-avatar");

let skin = localStorage.getItem("skin") || "skin1";
let eye = localStorage.getItem("eye") || "eye1";
let hair = localStorage.getItem("hair") || "hair1";
let clothes = localStorage.getItem("clothes") || "clothes1";
let accessory = localStorage.getItem("accessory") || "accessory1";

skinSelect.value = skin;
eyeSelect.value = eye;
hairSelect.value = hair;
clothesSelect.value = clothes;
accessorySelect.value = accessory;

function updateAvatar() {
    avatarImg.src = `assets/avatars/${skin}/${eye}/${hair}/${clothes}/${accessory}.png`;
}

saveAvatarButton.addEventListener("click", () => {
    skin = skinSelect.value;
    eye = eyeSelect.value;
    hair = hairSelect.value;
    clothes = clothesSelect.value;
    accessory = accessorySelect.value;

    localStorage.setItem("skin", skin);
    localStorage.setItem("eye", eye);
    localStorage.setItem("hair", hair);
    localStorage.setItem("clothes", clothes);
    localStorage.setItem("accessory", accessory);

    updateAvatar();
});

updateAvatar();

let timeLeft = 25 * 60;
let timer;
let isRunning = false;

const timerDisplay = document.getElementById("timer-display");
const startButton = document.getElementById("start-button");
const pauseButton = document.getElementById("pause-button");
const resetButton = document.getElementById("reset-button");

function updateDisplay() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    timerDisplay.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

function startTimer() {
    if (!isRunning) {
        isRunning = true;
        timer = setInterval(() => {
            if (timeLeft > 0) {
                timeLeft--;
                updateDisplay();

                if (timeLeft % 60 == 0) {
                    coins++;
                    localStorage.setItem("coins", coins);
                    coinCount.textContent = coins;
                }
            } else {
                clearInterval(timer);
                isRunning = false;
                alert("Time's up! You earned " + (25 - Math.floor(timeLeft / 60)) + " coins!");

            }
        }, 1000);
    }
}
function pauseTimer() {
    clearInterval(timer);
    isRunning = false;
}

function resetTimer() {
    clearInterval(timer);
    timeLeft = 25 * 60;
    updateDisplay();
    isRunning = false;
}

// Event Listeners
startButton.addEventListener("click", startTimer);
pauseButton.addEventListener("click", pauseTimer);
resetButton.addEventListener("click", resetTimer);

// Initial display update
updateDisplay();