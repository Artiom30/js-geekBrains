function convertFahrenheit(celsius) {
	let convertValue = (9 / 5) * celsius + 32;
	return convertValue;
}

let tempCelsius = 30;
console.log(convertFahrenheit(tempCelsius)); 