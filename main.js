
﻿// Задание 1. Проверка Gmail

const emailInput = document.querySelector("#emailInput");
const checkBtn = document.querySelector("#checkBtn");
const emailResult = document.querySelector("#emailResult");

checkBtn.addEventListener("click", function () {
    const email = emailInput.value.trim();

    const regex = /^[a-z0-9]+(\.[a-z0-9]+)*@gmail\.com$/i;

    if (regex.test(email)) {
        emailResult.innerText = "Почта правильная!";
        emailResult.style.color = "green";
    } else {
        emailResult.innerText = "Неправильная Gmail почта!";
        emailResult.style.color = "red";
    }
});

// Задание 2. Рекурсия

const parent = document.querySelector("#parent");
const small = document.querySelector("#small");
const startBtn = document.querySelector("#startBtn");

let position = 0;
let moving = false;

function moveBlock() {
    const maxPosition = parent.clientWidth - small.offsetWidth;

    if (position >= maxPosition) {
        small.style.left = `${maxPosition}px`;
        moving = false;
        return;
    }

    position += 2;

    small.style.left = `${position}px`;

    setTimeout(function () {
        moveBlock();
    }, 10);
}

startBtn.addEventListener("click", function () {
    if (moving) return;

    position = 0;
    small.style.left = "0px";
    moving = true;

    moveBlock();
});