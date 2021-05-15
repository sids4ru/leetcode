/**
 * @param {string} digits
 * @return {string[]}
 */

 var letterCombinations = function(digits) {
    var result = [];
    makeCombos(0,digits,[],result);
    return result;
};

function makeCombos(pos, digits, path,result){
    if(pos >= digits.length){
        if(path.length>0)
            result.push(path.join(""));
        return;
    }
    
    var letters = combos[parseInt(digits[pos])-2];
    for (var i=0; i<letters.length;i++){
        path.push(letters[i]);
        makeCombos(pos+1,digits,path,result);
        path.pop();
    }
}
var combos = [
    ["a","b","c"],
    ["d","e","f"],
    ["g","h","i"],
    ["j","k","l"],
    ["m","n","o"],
    ["p","q","r","s"],
    ["t","u","v"],
    ["w","x","y","z"],
];
console.log(letterCombinations(
    "2"
    ))