
var keyword = "";
for (var i = 1; i <= 100; i++) {
	console.log(i);
	if (!(i % 5) && !(i % 3)) {
		keyword = "fizzbuzz";
		console.log(keyword);
	} else if (!(i % 5)) {
		keyword = "fizz";
		console.log(keyword);
	} else if (!(i % 3)){
		keyword = "buzz";
		console.log(keyword);
	}
}
var odd_strings = "# # # # ";
var even_string = " # # # #";
for (var i = 0; i < 8; i++) {
	if (!(i % 2)) {
		console.log(odd_strings);
	} else {
		console.log(even_string);
	}
}
