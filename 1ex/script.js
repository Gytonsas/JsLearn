/*let js = "amazing";
console.log(40 + 8 + 23 - 10);

console.log("Jonas");
console.log(23);

let firstName = "Jonasss";

let javascriptIsFun = true;
console.log(javascriptIsFun);
//console.log(firstName);
console.log(typeof true);
console.log(typeof javascriptIsFun);
console.log(typeof 23);
console.log(typeof 'Jonas');
*/
/* First */

const massGytis = 73;
const heightGytis = 1.74;
const massJulius = 65;
const heightJulius = 1.78;

const BMIGytis = massGytis / heightGytis ** 2;
const BMIJulius = massJulius / (heightJulius * heightJulius);
const markHigherBMI = BMIGytis > BMIJulius;

console.log(BMIGytis, BMIJulius, markHigherBMI)

if ( BMIGytis > BMIJulius){
console.log(`Gytis's BMI (${BMIGytis}) is higher than Julius's (${BMIJulius})!`);
}
else {
console.log(`Julius's BMI (${BMIJulius}) is higher than Gytis's (${BMIGytis})!`); 
}

/* Second */

const scoreA = (96 + 140 + 89) / 3;
const scoreB = (88 + 110 + 91) / 3;

if (scoreA > scoreB && scoreA >= 100){
    console.log('A win the trophy');
} else if (scoreB > scoreA) {
    console.log('B win the trophy');
} else if (scoreA === scoreB) {
    console.log('Both win the trophy');

}else {
    console.log("No one wins the trophy");
}