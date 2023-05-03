const volume = document.getElementById("volume");
const gtts = document.getElementById("gtts");
const time = document.getElementById("time");
let result = document.getElementById("result");
let reduced = document.getElementById("reduced");
const submit = document.getElementById("submit");

submit.addEventListener("click", (e) => {
    e.preventDefault();
    let dripRate =
        (parseInt(volume.value) * parseInt(gtts.value)) / parseInt(time.value);
    let reducedRate = dripRate / 10 / 2;
    if (dripRate.valueOf() === NaN) {
        result.innerText = "Please fill out form";
    } else if (dripRate > 0) {
        result.innerText = `Titrate to ${Math.floor(dripRate)} drops per min`;
        reduced.innerText = `(Roughly ${Math.floor(
      reducedRate
    )} drops per 5 seconds)`;
        reduced.style.color = "#ff2e2e";
    }
});

// submit.addEventListener("click", (e) => {
//     e.preventDefault();
//     let dripRate =
//         (parseInt(volume.value) * parseInt(gtts.value)) / parseInt(time.value);
//     switch (dripRate) {
//         case dripRate.valueOf() === NaN:
//             result.innerText = "Please fill out form.";
//             break;
//         default:
//             result.innerText = Math.floor(dripRate) + " drops per minute";
//     }
//     console.log(dripRate.valueOf());
// });

document.querySelectorAll(".link-nav").forEach((link) => {
    console.log(link.href);
});

console.log("hello");