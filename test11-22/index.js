const data = require('./data.json');

const task11Result = (animals) => {
	const result = {};
	let dogCount = 0;
	let catCount = 0;
	let avgAge = 0;

	for (const animal of animals) {
		animal.type === "cat" ? catCount++ : animal.type === "dog" ? dogCount++ : null;
		avgAge += animal.age;
	}

	avgAge = Math.round(avgAge / animals.length);

	result["dogs"] = dogCount;
	result["cats"] = catCount;
	result["avgage"] = avgAge;

	return result;
};

console.log(task11Result(data));

const task12Result = (animals) => {
	let result = 0;
	for (const animal of animals) {
		animal.breed ? result++ : null;
	}
	return result;
};

console.log(task12Result(data));

const task13Result = (animals) => {
	const result = [];
	for (const item of animals) {
		if (item.type === "cat" && item.features.includes("black")) {
			result.push(item)
		} else if (item.type === "dog" && item.features.includes("white")) {
			result.push(item);
		}
	}
	return result;
};

console.log(task13Result(data));

const task14Result = (animals) => {
	const result = animals.sort((a, b) => {
		if (a.type === 'cat' && b.type === 'cat') {
			return b.age - a.age;
		} else if (a.type === 'dog' && b.type === 'dog') {
			return a.age - b.age;
		} else if (a.type === 'cat') {
			return -1;
		} else {
			return 1;
		}
	});

	return result;
};

console.log(task14Result(data));

const myPowFunc = (number, n) => {
	//If dont use Math.pow() and recursion
	const result = (() => {
		let sum = 1;
		if (n === 0) {
			return 1;
		} else if (n < 0) {
			number = 1 / number;
			n = -n;
			for (let i = 0; i < n; i++) {
				sum *= number;
			}
			return sum;
		} else {
			for (let i = 0; i < n; i++) {
				sum *= number;
			}
			return sum;
		}
	})();


	if (n === 0) {
		result = 1;
	}

	return result;
};

console.log(myPowFunc(4, 3));

const myFlatFunc = (inputArray) => {
	const result = [];
	function flat(arr) {
		arr.forEach(function (elem){
			if (Array.isArray(elem)) flat(elem);
			else result.push(elem);
		})
	}

	flat(inputArray);
	return result;
};

console.log(myFlatFunc([1, 3, 5, [1, [4, 5], 'asdf', [76, [56, [66, 59]]]]]));
// result 1, 3, 5, 1, 4, 5, 'asdf', 76, 56, 66, 59
