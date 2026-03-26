alert("The following page may not be suited for those sensitive to flashing lights.");

function validateEmail(input:string):boolean{
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(input);
}

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
    const main2:HTMLDivElement = document.getElementById('main2') as HTMLDivElement;
    const button1:HTMLButtonElement = document.getElementById("1") as HTMLButtonElement;
    const button2:HTMLButtonElement = document.getElementById("2") as HTMLButtonElement;
    const button3:HTMLButtonElement = document.getElementById("3") as HTMLButtonElement;
    const button4:HTMLButtonElement = document.getElementById("4") as HTMLButtonElement;
    const button5:HTMLButtonElement = document.getElementById("5") as HTMLButtonElement;

    function resetSidebarBtns(){
        button1.classList.remove("highlighted");
        button2.classList.remove("highlighted");
        button3.classList.remove("highlighted");
        button4.classList.remove("highlighted");
        button5.classList.remove("highlighted");
    }
    button1.addEventListener("click", ()=>{
        location.reload()
    });

    const icon:HTMLImageElement = document.getElementById("icon") as HTMLImageElement;

    button2.addEventListener("click", ()=>{
        icon.src = "./assets/faq.svg";
        main2.innerHTML = `<h2>What is Frequency?</h2><p>
                    Frequency is an online event by <a href="https://hackclub.com">Hack Club</a> where you build any project using radio technologies, and we'll send you the resources to build it!
                </p>
                    <h2>What counts as radio technology?</h2><p>
                    Anything that emits and receives <a href="https://en.wikipedia.org/wiki/Radio_wave">radio waves</a>, whether it be LoRa, NFC, RFID, 4333MHz, WiFi, or something else.
                </p>
                    <h2>What is Hack Club?</h2>
                    <p>Hack Club is a 501(c)(3) nonprofit organization based in the U.S. aimed at supporting teenagers develop their skills. We have organized events such as <a href="https://highseas.hackclub.com">High Seas</a> and <a href="https://shipwrecked.hackclub.com">Shipwrecked</a> in the past. You can see more of what we do at <a href="https://hackclub.com">hackclub.com</a></p>
                    <h2>Who can participate?</h2>
                    <p>Anyone between ages 13-18 can participate no matter their skill level!</p>
                    <h2>I have more questions!</h2>
                    <p>Join <a href="https://slack.hackclub.com/">Hack Club's Slack</a> and join <a href="https://hackclub.enterprise.slack.com/archives/C0AMZARAJ0H">#frequency</a></p>`;
        resetSidebarBtns();
        button2.classList.add("highlighted");
    });


    button3.addEventListener("click", ()=>{
        icon.src = "./assets/guides.svg";
        main2.innerHTML = `<h1>More to come soon!</h1>`;
        resetSidebarBtns();
        button3.classList.add("highlighted");
    });


    button4.addEventListener("click", ()=>{
        icon.src = "./assets/shop.svg";
        main2.innerHTML = `<h1>More to come soon!</h1>`
        resetSidebarBtns();
        button4.classList.add("highlighted");
    });


    button5.addEventListener("click", ()=>{
        icon.src="./assets/signup.svg";
        main2.innerHTML = `
        
        <div id="signup-container">
            <input id="email" placeholder="Email address">
            <button id="rsvp">RSVP</button>
        </div>
        <p id="emailVal" class="hidden">Please enter a valid email address.</p>
        `

        const rsvpBtn:HTMLButtonElement = document.getElementById("rsvp") as HTMLButtonElement;
        const rsvpEmail:HTMLInputElement = document.getElementById("email") as HTMLInputElement;
        const emailValid:HTMLParagraphElement = document.getElementById("emailVal") as HTMLParagraphElement;

        rsvpEmail.addEventListener("input", ()=>{
            console.log("test");
            if(!validateEmail(rsvpEmail.value)) {
                emailValid.classList.remove("hidden");
            }else{
                emailValid.classList.add("hidden");
            }
        });

        rsvpBtn.addEventListener("click", ()=>{
            const emailIn:string = rsvpEmail.value;
            window.open(`https://forms.fillout.com/t/1afuNL8hfXus?email=${emailIn}`);
        });


        resetSidebarBtns();
        button5.classList.add("highlighted");
    });

    const flickerBtn:HTMLDivElement = document.getElementById("flicker") as HTMLDivElement;
    flickerBtn.addEventListener("click", ()=>{
        if(flickerBtn.classList.contains("selected")){
            flickerBtn.classList.remove("selected");
            screen.classList.add("crt");
        }else{
            flickerBtn.classList.add("selected");
            screen.classList.remove("crt");
        }
    });
});