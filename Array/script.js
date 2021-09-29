/*ex1

const checkDogs = function (dogsJulia, dogsKate) {
  const dogsJuliaCorrected = dogsJulia.slice();
  dogsJuliaCorrected.splice(0, 1);
  dogsJuliaCorrected.splice(-2);

  const dogs = dogsJuliaCorrected.concat(dogsKate);
  console.log(dogs);

  dogs.forEach(function (dog, i) {
    if (dog >= 3) {
      console.log(`Dog number ${i + 1} is an adult,
            and is ${dog} years old`);
    } else {
      console.log(`Dog number ${i + 1} is still a puppy`);
    }
  });
};
checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
*/
/* ex2
const eurToUsd = 1.1;
//const movementsUSD = movements.map(function (mov) {
//  return mov * eurToUsd;
//});
const movementsUSD = movements.map((mov) => mov * eurToUsd);
console.log(movements);
console.log(movementsUSD);

const movementsUSDfor = [];
for (const mov of movements) movementsUSDfor.push(mov * eurToUsd);
console.log(movementsUSDfor);

const movementsDescription = movements.map((mov, i) => {
  `Movement ${i + 1}: You ${mov > 0 ? "deposited" : "withdrew"} 
  ${Math.abs(mov)}`;
});
*/
/*
ex3
const calcAverageHumanAge2 = function (ages) {
  const humanAges = ages.map((age) => (age <= 2 ? 2 * age : 16 + age * 4));
  const adults = humanAges.filter((age) => age >= 18);
  //console.log(humanAges);
  //console.log(adults);

  // const average = adults.reduce((acc, age) => acc +
  //age, 0) / adults.length;

  const average = adults.reduce(
    (acc, age, i, arr) => acc + age / arr.length,
    0
  );

  return average;
};

const calcAverageHumanAge = (ages) =>
  ages
    .map((age) => (age <= 2 ? 2 * age : 16 + age * 4))
    .filter((age) => age >= 18)
    .reduce((acc, age, i, arr) => acc + age / arr.length, 0);

const avg1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
const avg2 = calcAverageHumanAge([15, 2, 42, 10, 5, 4, 5]);
console.log(avg1, avg2);
*/
//ex4
const dogs = [
  { weight: 22, curFood: 250, owners: ["Alice", "Bob"] },
  { weight: 8, curFood: 200, owners: ["Matilda"] },
  { weight: 13, curFood: 275, owners: ["Sarah", "John"] },
  { weight: 32, curFood: 340, owners: ["Michael"] },
];
//1.
dogs.forEach((dog) => (dog.recFood = Math.trunc(dog.weight ** 0.75 * 28)));
console.log(dogs);

//2.
const dogSarah = dogs.find((dog) => dog.owners.includes("Sarah"));
console.log(dogSarah);
console.log(
  `Sarah's dog is eating too ${
    dogSarah.curFood > dogSarah.recFood ? "much" : "little"
  }`
);

//3.
const ownersEatTooMuch = dogs
  .filter((dog) => dog.curFood < dog.recFood)
  .map((dog) => dog.owners);
//.flat();
console.log(ownersEatTooMuch);

// 4.
console.log(`${ownersEatTooMuch.join(" and ")}'s dogs eat too much!`);

// 5.
console.log(dogs.some((dog) => dog.curFood === dog.recFood));

// 6.
const checkEatingOkay = (dog) =>
  dog.curFood > dog.recFood * 0.9 && dog.curFood < dog.recFood * 1.1;

console.log(dogs.some(checkEatingOkay));

// 7.
console.log(dogs.filter(checkEatingOkay));

// 8.
const dogsSorted = dogs.slice().sort((a, b) => a.recFood - b.recFood);
console.log(dogsSorted);
