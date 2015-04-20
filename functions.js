//function A
var isArmstrong = function(strong){
"use strict"
var strong = String(strong);
var number;
var sum = 0;
//while loop 
for(var i=0; i<strong.length; ++i){
	number = Number(strong[i]);
	var result = Math.pow(number, strong.length);
	sum = sum + result;
}
//sorting
if (Number(strong) == sum) {
	return true;}
	else return false;
}

//function B 
var allArmstrongs=function() { 
"use strict"
var result = "";
for(var i=0; i <= 99999; ++i) {
	if (isArmstrong(i)) {
		result = result + i + ' ';}
	}
	return result;
}

//function C
var allSubstrings1 = function (str) {
"use strict"
var result = "";
for (var i=0; i<=str.length; ++i){
for (var k=i+1; k<=str.length; ++k)
	result = result + str.substring(i,k) + ", ";
}
return result;
}

//function D 
var allSubstrings2 = function (str) {
"use strict"
var result = [];
for (var i=0; i<=str.length; ++i){
for (var k=i+1; k<=str.length; ++k)
	result.push(str.substring(i,k));
}
return result;
}

//function E 
var maxWord = function (word) {
"use strict" 
var i; 
var resultArray = word.split(" ");
var max = 0;
var maxstring = " ";
for (i=0; i<resultArray.length; ++i) {
	if (resultArray[i].length > max) {
		max = resultArray[i].length;
		maxstring = resultArray[i];
	}
}
return maxstring
}
