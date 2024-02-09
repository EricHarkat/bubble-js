
const counterDisplay = document.querySelector('h3');
let counter= 0;
const chronoDisplay = document.querySelector('h2');
let chrono = 60;

const bubbleMaker = () =>{

    const bubble = document.createElement("span")
    bubble.classList.add('bubble')
    document.body.appendChild(bubble);

    const size = Math.random() * 100 + 100 + "px";
    bubble.style.height = size
    bubble.style.width = size

    bubble.style.top = Math.random() *100 +50 +"%";
    bubble.style.left = Math.random() *100  +"%";

    const plusMinus = Math.random() > 0.5 ? 1 : -1;/*fonction ternere si Math.random est superieur à 0.5 tu retournes 1 sinon tu retournes -1*/
    bubble.style.setProperty("--left", Math.random() * 100 * plusMinus+ "%")

    bubble.addEventListener('click', () => {
        counter++;
        bubble.remove()
    });

    counterDisplay.textContent = counter;
    chronoDisplay.textContent = chrono;

    setTimeout(() => {
        bubble.remove
    }, 8000);/*8000millisecond*/
}


let interval = setInterval(() => {
    bubbleMaker();
    chrono--;
    if(chrono === 0){
        clearInterval(interval);
        chronoDisplay.innerHTML="expired"
    }
}, 1000);





