// const calAge2 = function(birthYeah){
// 	return 2073 - birthYeah
// }

// const calcAge3 = (birthYeah) => 2073 - birthYeah
// const age3 = calcAge3(1993)
// console.log(age3)


const yearsUntilRetirement = (birthYeah, firstName) =>{
	const age = 2000- birthYeah
	const retirement = 65 - age
	// return retirement
	return `${firstName} retires in ${retirement} years `
}

console.log(yearsUntilRetirement(3000, 'ken'))
