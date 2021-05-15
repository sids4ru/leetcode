/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {

    var numStack = [];
    var opStack = [];
    var isNum = false;
   	var neg = false;
    for(var i=0; i<s.length;i++){
    	if(s[i] === " "){
    		isNum = false;
    		neg = false;
    		continue;
    	}

    	var char = s[i];
    	if(isFinite(s[i]) === true){
    		if(isNum || neg){
    			var prev,num;
    			if(neg){
    				if(opStack[opStack.length-1] != "-"){
    					prev = 1;
    					neg = false;
    				}
    				else{
    					opStack.pop();
    					prev = -1;
    				}
    				num = prev * parseInt(s[i]);
    				neg = false;
    			}
    			if(isNum)
    			{
    			   prev = numStack.pop();
					num = prev*10+parseInt(s[i]);

    			}
    			numStack.push(num);
    		}
    		else{
    			numStack.push(parseInt(s[i]));
    		}
    		isNum = true;
    	}
    	else if(s[i] === "+" || s[i] === "-" || s[i] === "(")
    	{
    		opStack.push(s[i]);
    		isNum = false;
    		if(s[i] === "-"){
    			if(i-1<0 || s[i-1] === " ")
    			neg = true;
    		}
    		else neg = false;
    		if(s[i] === "+"){
    			if(i-1 < 0 || s[i-1] === "(")
    				opStack.pop();
    		}
    	}
    	else if(s[i] === ")"){
    		numStack.push(unwind(numStack,opStack));
    		isNum = false;
    		neg = false;
    	}
    }
	var res = unwind(numStack,opStack);
	if(opStack.length > 0){
		var op = opStack.pop();
		if(op === "-1");
		res *=-1;
	}
	return res;
};
function unwind(numStack,opStack){
	var numStack2 = [];
	var opStack2 = [];
	numStack2.push(numStack.pop());
	while(opStack.length > 0 && numStack.length>0 && opStack[opStack.length-1]!="(")  {
		numStack2.push(numStack.pop());
		opStack2.push(opStack.pop())
	}
	if(opStack.length>0 && opStack[opStack.length-1]==="(")
		opStack.pop();	
	var sum = numStack2.pop();
	while (numStack2.length > 0 && opStack2.length > 0){
		op = opStack2.pop();
		if(op === "("){		
			break;
		}
		else if(op === "-"){
			sum -= numStack2.pop();
		}
		else if(op === "+"){
			sum += numStack2.pop();
		}
	}
	return sum;
}
console.log(
	calculate(
//" 2-1 + 2 "
//"(1+(4+5+2)-3)+(6+8)"
//"-2+ 1"

"1-(+1+1)"
	)
);
