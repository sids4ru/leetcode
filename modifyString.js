/**
 * @param {string} s
 * @return {string}
 */
 var modifyString = function(s) {
    s = s.split("");
    for(var i=0; i<s.length;i++){
        if(s[i] != "?")
            continue;
        var prev = i-1;
        var next = i+1;
        var prevChar = "?",nextChar = "?";
        if(prev>=0){
            prevChar = s[prev];
        }
        if(next<s.length){
            nextChar = s[next];
        }
        for(var j="a".charCodeAt();j<="z".charCodeAt();j++){
            var char = String.fromCharCode(j);
            if(char != prevChar && char!=nextChar){
                s[i] = char;
                break;
            }
        }
    }
    return s.join("");

 }
console.log(modifyString(
    //"????????????????????????????????????????????????????????????????????????????????????????????????????"
"j?qg??b"
))