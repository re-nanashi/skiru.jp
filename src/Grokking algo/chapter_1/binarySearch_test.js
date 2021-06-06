function binary_Search(arr, item) {
	let low = 0;
	let high = arr.length - 1;

	while (low <= high) {
		let mid = Math.round((high - low) / 2);
		let guess = arr[mid];

		if (guess === item) return guess;
		if (guess > item) high = mid - 1;
		if (guess < item) low = mid + 1;
	}
	return null;
}
