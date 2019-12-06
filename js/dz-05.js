function double () {
	var array = [];
	var proceed = true;
	while( proceed ) { 
		array.push(prompt ("Enter a array element"));
		proceed = confirm("Want do add more?");
	}
	return array;
}

console.log(double())
