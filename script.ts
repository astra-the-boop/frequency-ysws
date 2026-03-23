document.addEventListener('DOMContentLoaded', () => {
    const tuneInBtn:HTMLButtonElement = document.getElementById("tune-in") as HTMLButtonElement;
    const radioFrame:HTMLImageElement = document.getElementById("radio") as HTMLImageElement;
    const screen:HTMLDivElement = document.getElementById("screen") as HTMLDivElement;
    const screenElements:NodeListOf<HTMLElement> = document.querySelectorAll<HTMLElement>(".startDisplay") as NodeListOf<HTMLElement>;
    const main:HTMLDivElement = document.getElementById("mainContainer") as HTMLDivElement;
    tuneInBtn.addEventListener('click', async () => {
        radioFrame.classList.add("expanded");
        screen.classList.add("animate");

        setTimeout(() => {
            radioFrame.style.display = "none";
        }, 150);
        screenElements.forEach(e => {
            e.style.display = "none";
        });
        screen.style.display = "block";

        main.style.display = "flex";
        main.style.opacity = "1";
    });


    const el:HTMLDivElement = document.getElementById('ys-scroll') as HTMLDivElement;
    const text:string = el.innerHTML;
    el.innerHTML = `<span>${text}${text}</span>`;
    const inner:HTMLSpanElement = el.querySelector('span') as HTMLSpanElement;
    let pos:number = 0;
    const step:number = 4;
    const interval:number = 50;

    const el2:HTMLDivElement = document.getElementById('ws-scroll') as HTMLDivElement;
    const text2:string = el2.innerText;
    el2.innerHTML = `<span>${text2}${text2}</span>`;
    const inner2:HTMLSpanElement = el2.querySelector("span") as HTMLSpanElement;
    let pos2:number = -(inner2.scrollWidth / 2);

    setInterval(() => {
        pos -= step;
        const resetAt = inner.scrollWidth / 2;
        if(Math.abs(pos) >= resetAt) pos = 0;
        inner.style.transform = `translateX(${pos}px)`;

        pos2 += step;
        const resetAt2 = inner2.scrollWidth / 2;
        if(pos2 >= 0) pos2 = -resetAt2;
        inner2.style.transform = `translateX(${pos2}px)`;
    }, interval)
})