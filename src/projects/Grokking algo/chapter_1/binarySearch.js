// Binary search algorithm
function binarySearch(list, item) {
	let guess,
		low = 0,
		high = list.length - 1;

	while (low <= high) {
		mid = Math.round((low + high) / 2);
		guess = list[mid];

		if (guess === item) return mid;
		if (guess > item) high = mid - 1;
		if (guess < item) low = mid + 1;
	}

	return null;
}

const hundredArr = () => {
	let arr = [];
	for (let i = 0; i < 100; i++) {
		arr.push(i + 1);
	}

	return arr;
};

let list = hundredArr();
// console.log(binarySearch(list, 1));
