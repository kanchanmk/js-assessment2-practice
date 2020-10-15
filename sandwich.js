"use strict";

const countDown = () => {
	for (let i = 5; i > 0; i--) {
		console.log(i);
	}
};

//countDown();

const countUp = (start, end) => {
	for (let i = start; i <= end; i++) {
		console.log(i);
	}
};
//countUp(5, 10);

const isLong = (word) => {
	return word.length > 10;
};

//console.log(isLong("dafda"));
//

const whatWaterState = (temperature) => {
	if (temperature <= 32) {
		console.log("solid");
	} else if (temperature < 212) {
		console.log("liquid");
	} else {
		console.log("gas");
	}
};

whatWaterState(28);
whatWaterState(32);
whatWaterState(33);
whatWaterState(211);
whatWaterState(212);

const sandwiches = [
	{
		type: "italian",
		calories: 1000,
		cost: 7.69,
		isVegetarian: false,
	},
	{
		type: "veggie",
		calories: 500,
		cost: 5.5,
		isVegetarian: true,
	},
	{
		type: "meatball",
		calories: 900,
		cost: 8.25,
		isVegetarian: false,
	},
	{
		type: "jackfruit",
		calories: 650,
		cost: 8.5,
		isVegetarian: true,
	},
];

const makeSandwich = (sandwichArray, type, calories, cost, isVegetarian) => {
	sandwichArray.push({
		type: type,
		calories: calories,
		cost: cost,
		isVegetarian: isVegetarian,
	});
};

makeSandwich(sandwiches, "Cheese", 1200, 4.5, true);
console.log(`#1 `, sandwiches);
const findVegetarianSandwich = (sandwichArray) => {
	return sandwichArray.find((item) => item.isVegetarian === true);
};

//console.log(`#2 `, findVegetarianSandwich(sandwiches));

const findCheapestSandwich = (sandwichArray) => {
	let cheapest = sandwichArray[0];
	sandwichArray.forEach((element) => {
		if (element.cost < cheapest.cost) {
			cheapest = element;
		}
	});

	console.log(`cheapest sandwich is `, cheapest);
};
findCheapestSandwich(sandwiches);
