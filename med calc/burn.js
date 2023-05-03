const weight = document.getElementById("weight");
const head = document.getElementById("head");
const torso = document.getElementById("torso");
// var torsoOption = torso.options[torso.selcetedIndex].value;
const leg = document.getElementById("leg");
const arm = document.getElementById("arm");
const groin = document.getElementById("groin");
const burn = document.getElementById("burn-percent");
const select = document.querySelectorAll("select");
let burnSubmit = document.getElementById("burnSubmit");
const trimed = document.getElementById("trim");

const selectArr = [...select];
tbsaArr = [];

selectArr.map((sel) => {
    sel.addEventListener("change", () => {
        let optionVal = parseFloat(sel.options[sel.selectedIndex].value);
        tbsaArr.push(optionVal);
        const tbsaFilt = tbsaArr.filter((n) => n > 0);

        let tbsaFiltSum = [...tbsaFilt];
        if (optionVal === 0) {
            const tbsaFiltSum2 = tbsaFiltSum.pop();
            console.log(tbsaFiltSum2);
        }
        let tbsaSum = tbsaFiltSum.reduce((a, b, array) => {
            return a + b;
        }, 0);

        if (tbsaSum === 0) {
            burn.innerText = 0 + "%";
        }

        burn.innerText = tbsaSum + "%";

        // console.log(tbsaFiltSum);
        // console.log(tbsaSum);
    });
});