/**
 * 
 * 
 * Fraction to Recurring Decimal
 * https://leetcode.com/problems/fraction-to-recurring-decimal/
 * 
 * Given two integers representing the numerator and denominator of a fraction, return the fraction in string format.

If the fractional part is repeating, enclose the repeating part in parentheses.

If multiple answers are possible, return any of them.

It is guaranteed that the length of the answer string is less than 104 for all the given inputs.

 

Example 1:

Input: numerator = 1, denominator = 2
Output: "0.5"
Example 2:

Input: numerator = 2, denominator = 1
Output: "2"
Example 3:

Input: numerator = 2, denominator = 3
Output: "0.(6)"
Example 4:

Input: numerator = 4, denominator = 333
Output: "0.(012)"
Example 5:

Input: numerator = 1, denominator = 5
Output: "0.2"
 

Constraints:

-231 <= numerator, denominator <= 231 - 1
denominator != 0
 */

var fractionToDecimal = function(numerator, denominator) {
    var div = numerator/denominator;
	var string = div.toString();
	string = string.split(".")
	
	var decimal = string[1];
	
	var map = {};
	var repeatstr = "";

	if(decimal){
		for(var i=0; i<decimal.length; i++){
            if(decimal[i] === "0")
                continue;
			if(!map[decimal[i]]) map[decimal[i]] = 0;
			map[decimal[i]]++;
			if(map[decimal[i]] === 2 ){
				repeatstr+=decimal[i];
			}
			else if(map[decimal[i]]>2)
				break;
			
		}
		

		var result = "" + string[0]+".";
		if(repeatstr.length > 0){
			var start = 0;
			for(var a=0; a<decimal.length;a++){
				if(map[decimal[a]] <= 1)
					result+=decimal[a];
				else if (start === 0){
					result+="(" + decimal[i];
					start ++;
				}
				else if (map[decimal[a]] === 2){
					result+=decimal[a];
				}
				else{
					result += ")";
					break;
				}
			}

		}
		else
			result+=decimal;
		
		return result;
	}
	else return string[0];
};

console.log(fractionToDecimal(
    1,333
))