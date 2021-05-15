/**
 * 
 * 
 */
/**
 * @param {string} S
 * @return {string}
 */
 var removeOuterParentheses = function(S) {
    var stack = [];
    var result = "";
    var partial = ""
    for(var i=0; i<S.length;i++){
        if(S[i] === "("){
            stack.push("(");
            partial+=("(");
        }
        else{
            if(stack.length>1){
                stack.pop();
                partial += (")");
            }else if(stack.length === 1){
                partial = partial.substring(1,partial.length);
                result+=partial;
                partial=""
                stack.pop()
            }

        }
    }
    return result;
};
console.log(removeOuterParentheses(
    "(()())(())(()(()))"
))