/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 var isIsomorphic = function(s, t) {
     
    var map = {};
    if(s.length != t.length)
        return false;
    var str = new Array(s.length);
    for(var i=0; i<s.length;i++){
        if(!map[s[i]]) map[s[i]] = [];
        map[s[i]].push(i);
    }
    var visited = {};
    for(var i=0; i<s.length;i++){
        if(visited[t[i]])
            continue;
        var pos = map[s[i]];
        while (pos.length>0){
            var p = pos.pop()
        //for(var j=0; j<pos.length;j++){
            str[p] = t[i];
        }
        map[s[i]] = [];
        visited[t[i]] = true;
    }
    str = str.join("");
    if(str!=t)
        return false;
    return true;
};
console.log(isIsomorphic(
 //   "badc",
//"baba"
"egg",
"add"
))