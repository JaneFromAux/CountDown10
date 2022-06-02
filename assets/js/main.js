console.log("LEVEL_2_1_!");

let count = document.querySelector("#count");
let div = document.querySelector('div');


const countDown = () => {
    let down = 10;
    let intervally = setInterval(function myFunci() {
        count.innerHTML = down;
        down--;
        if (down === 0) {
            clearInterval(intervally);
            div.style.display = "none";
        }
    }, 1000);
}
countDown();