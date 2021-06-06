function findSmallest(arr) {
	//We are going to define at arr[0] as the smallest
	let smallest = arr[0],
		smallestIndex = 0;

	//As we loop through we compare the current iteration
	//to the smallest
	for (let i = 1; i < arr.length; i++) {
		//if current iteration is smaller than the current smallest, swap
		if (arr[i] < smallest) {
			smallest = arr[i];
			smallestIndex = i;
		}
	}
	//At the end we can get the smallest Index
	return smallestIndex;
}

function selectionSort(arr) {
	let sortedArray = [];
	let length = arr.length;

	for (let i = 0; i < length; i++) {
		let smallest = findSmallest(arr);

		//Splice remove the smallest
		//Then using splice this becomes an array then get element at index 0
		sortedArray.push(arr.splice(smallest, 1)[0]);
	}

	return sortedArray;
}

console.log(selectionSort([5, 3, 6, 2, 10]));
