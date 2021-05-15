/**
 * @param {string[]} words
 * @return {string}
 */
 var longestWord = function(words) {
    var map = {};
    for(var i=0; i<words.length;i++){
        map[words[i]] = true;
    }
    words.sort(function(a,b) {return b.length - a.length})
    var maxWord = ""
    for(var i=0; i<words.length;i++){
        var word = words[i];
        if(words[i].length > maxWord.length){
            if(check(word,map))
                maxWord = word
        }
        else if(word.length === maxWord.length){
            var n = word.localeCompare(maxWord);
            if(n<0 && check(word,map)){
                maxWord = word;
            }
        }
    }
    return maxWord;
};
function check(word,map){
    for(i=1; i<=word.length;i++){
        var sub = word.substring(0,i)
        if(!map[sub])
            return false;
    }
    return true;
}
console.log(longestWord(
    //["b","br","bre","brea","break","breakf","breakfa","breakfas","breakfast","l","lu","lun","lunc","lunch","d","di","din","dinn","dinne","dinner"]
    ["m","mo","moc","moch","mocha","l","la","lat","latt","latte","c","ca","cat"]
))