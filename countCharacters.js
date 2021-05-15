/**
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 */
 var countCharacters = function(words, chars) {
    var map;
    var count = 0;
    for(var i=0;i<words.length;i++){
        map = {}
        fillMap(map,chars);
        var word = words[i]
        var success = true;
        for(var j = 0;j<word.length;j++){
            if(map[word[j]] && map[word[j]]>0){
                map[word[j]]--;
                
            }
            else{
                success = false;
                break
            }

        }
        if(success)
            count+=word.length;
    }
    return count;
};
function fillMap(map,chars){
    
    for(var i=0;i<chars.length;i++){
        if(!map[chars[i]]) map[chars[i]] = 0;
        map[chars[i]]++
    }
}
console.log(countCharacters(
    ["cat","bt","hat","tree"],"atach"
))