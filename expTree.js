
//  Definition for a binary tree node.
  function Node(val, left, right) {
      this.val = (val===undefined ? " " : val)
      this.left = (left===undefined ? null : left)
      this.right = (right===undefined ? null : right)
  }
 
/**
 * @param {string} s
 * @return {Node}
 */
 var expTree = function(s) {
    var postfix = toPostfix(s);
    var stack = [];
    while(postfix.length>0){
        var first = postfix.shift();
        if(isFinite(first)){
            stack.push(new Node(first));
        }
        else{
            var right = stack.pop();
            var left = stack.pop();
            stack.push(new Node(first,left,right));
        }
    }
    return stack[0];
};
function precedence(sign){
    if(sign === "+" || sign === "-"){
        return 1;
    }
    if(sign === "*"){
        return 2;
    }
    if(sign === "/"){
        return 3;
    }
    return 0;
}
function toPostfix(infix){
    var op = [];
    var postfix = [];
    for(var i=0; i<infix.length;i++){
        if(isFinite(infix[i])){
            postfix.push(infix[i])
        }
        else if(infix[i] === "("){
            op.push(infix[i]);
        }
        else if(infix[i] === ")"){
            while(op[op.length-1]!="("){
                postfix.push(op.pop());
            }
            op.pop();
        }
        else{
            while(op.length>0 && precedence(op[op.length-1])>=precedence(infix[i])){
                postfix.push(op.pop())
            }
            op.push(infix[i]);
        }
        

    }
    while(op.length>0){
        postfix.push(op.pop());
    }
    return postfix;
}
console.log(expTree(
    "2-3/(5*2)+1"
))

