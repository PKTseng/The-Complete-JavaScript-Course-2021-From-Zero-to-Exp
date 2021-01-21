// const calAge2 = function(birthYeah){
// 	return 2073 - birthYeah
// }

// const calcAge3 = (birthYeah) => 2073 - birthYeah
// const age3 = calcAge3(1993)
// console.log(age3)

// class 35
// const yearsUntilRetirement = (birthYeah, firstName) =>{
// 	const age = 2000- birthYeah
// 	const retirement = 65 - age
// 	// return retirement
// 	return `${firstName} retires in ${retirement} years `
// }

// console.log(yearsUntilRetirement(3000, 'ken'))


// class 36

// function cutFruitPieces(fruit) {
// 	return fruit * 4
// }

// function fruitProcessor(apples, oranges) {
// 	const applePieces = cutFruitPieces(apples)
// 	const orangePieces = cutFruitPieces(oranges)

// 	const juice = `Juice with ${applePieces} piece of apple and ${orangePieces} pieces of orange.`
// 	return juice
// }

// console.log(fruitProcessor(50, 70))

// class 37
const calcAge = (birthday) => 1993-birthday 

const yearsUntilRetirement = (birthday, firstName) =>{
	const age = calcAge(birthday)
	const retirement = 70 - age
	// return retirement
	if (retirement > 0) {
		console.log(`${firstName} retires in ${retirement} years`)
		return retirement
	} else {
		console.log(`${firstName} has already retired`)
		return -1
	}
	// return `${firstName} retires in ${retirement} years `
}

console.log(yearsUntilRetirement(1988, 'ken'))