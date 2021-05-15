/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var largestMerge = function (word1, word2) {
    var ans = "";
    var w1 = 0, w2=0;
    while(w1<word1.length && w2<word2.length){
        if(word1[w1] > word2[w2]) ans+=word1[w1++];
        else if(word1[w1] < word2[w2]) ans+= word2[w2++];
        else{
            var rest1 = word1.slice(w1);
            var rest2 = word2.slice(w2);
            if(rest1>rest2) ans+=word1[w1++];
            else ans+=word2[w2++];
        }
    }
    ans+=word1.slice(w1);
    ans+=word2.slice(w2);
    return ans;




    if(word2.length>word1.length)
    [word1,word2] = [word2,word1]
    var merge = "";
    while (word1.length > 0 && word2.length > 0) {
        var pos = 0;
        while(pos<word1.length && pos < word2.length && word1[pos] === word2[pos])
            pos++;
        if (word1[pos] >= word2[pos]) {
            
            var count = 0;
            while(count<=pos){
                if(word1[count]<=word1[count+1])
                    count++;
                else break;
            }
            
            var char = word1.substring(0,count+1);
            word1 = word1.substring(count+1, word1.length)
            merge += char;
        }
        else {
            var count = 0;
            while(count<=pos){
                if(word2[count]<=word2[count+1])
                    count++;
                else break;
            }
            var char = word2.substring(0,count+1);
            word2 = word2.substring(count+1, word2.length);
            merge += char;
        }
    }
    for (var i = 0; i < word1.length; i++) {
        merge += word1[i];
    }
    for (var i = 0; i < word2.length; i++) {
        merge += word2[i];
    }
    return merge;
};
console.log(largestMerge(
    //"uuurruuuruuuuuuuuruuuuu",
    //"urrrurrrrrrrruurrrurrrurrrrruu"
    //"nnnnpnnennenpnnnnneenpnn",
    //"nnnennnnnnpnnennnnennnnee"
    "aaasaaassaaaaaaaakksa",
    "aaaaksaaaasaaaaaaaa"
))
//console.log("uuuurruuuruuuuuuuuruuuuurrrurrrrrrrruurrrurrrurrrrruu");
//console.log("nnnnpnnnnnennnnnnpnnennnnennnnennenpnnnnneenpnnee");
console.log("aaasaaassaaaaksaaaasaaaaaaaakksaaaaaaaaa")