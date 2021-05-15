/**
 * @param {string} s
 * @return {string}
 */

var decodeString = function(s) {
    var result = "";
    var stackNum = [];
    var stackChar = []
    for(var i=0; i<s.length;i++){
        if(s[i].charCodeAt() >= "a".charCodeAt() && s[i].charCodeAt() <= "z".charCodeAt()){
            stackChar.push(s[i]);
        }
        else if(isFinite(s[i])){
            stackNum.push(s[i]);
        }
        else if(s[i] === "["){
            stackChar.push("[");
            stackNum.push("[")
        }
        else if(s[i] === "]"){
            var str = "";

            while(stackChar.length>0 && stackChar[stackChar.length-1]!="["){
                str = stackChar.pop() + str;
            }
            if(stackChar.length>0){
                stackChar.pop();
            }
            var num = "";
            stackNum.pop();
            while(stackNum.length>0 && stackNum[stackNum.length-1]!="["){
                num = stackNum.pop()+num;
            }
            num = parseInt(num);
            var res = ""
            while(num>0){
                res += str;
                num--;
            }
            stackChar.push(res);
        }
    }
    stackChar = stackChar.join("")
    return stackChar;
};



console.log(decodeString(
    "3[a2[c]]"
))