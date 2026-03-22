"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
document.addEventListener('DOMContentLoaded', () => {
    const tuneInBtn = document.getElementById("tune-in");
    const radioFrame = document.getElementById("radio");
    const screen = document.getElementById("screen");
    const screenElements = document.querySelectorAll(".startDisplay");
    tuneInBtn.addEventListener('click', () => __awaiter(void 0, void 0, void 0, function* () {
        radioFrame.classList.add("expanded");
        screen.classList.add("animate");
        setTimeout(() => {
            radioFrame.style.display = "none";
        }, 150);
        screenElements.forEach(e => {
            e.style.display = "none";
        });
        screen.style.display = "block";
    }));
    const el = document.getElementById('ys-scroll');
    const text = el.innerHTML;
    el.innerHTML = `<span>${text}${text}</span>`;
    const inner = el.querySelector('span');
    let pos = 0;
    const step = 4;
    const interval = 50;
    const el2 = document.getElementById('ws-scroll');
    const text2 = el2.innerText;
    el2.innerHTML = `<span>${text2}${text2}</span>`;
    const inner2 = el2.querySelector("span");
    let pos2 = -(inner2.scrollWidth / 2);
    setInterval(() => {
        pos -= step;
        const resetAt = inner.scrollWidth / 2;
        if (Math.abs(pos) >= resetAt)
            pos = 0;
        inner.style.transform = `translateX(${pos}px)`;
        pos2 += step;
        const resetAt2 = inner2.scrollWidth / 2;
        if (pos2 >= 0)
            pos2 = -resetAt2;
        inner2.style.transform = `translateX(${pos2}px)`;
    }, interval);
});
