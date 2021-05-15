/**
 * We can represent a sentence as an array of words, for example, the sentence "I am happy with leetcode" can be represented as arr = ["I","am",happy","with","leetcode"].

Given two sentences sentence1 and sentence2 each represented as a string array and given an array of string pairs similarPairs where similarPairs[i] = [xi, yi] indicates that the two words xi and yi are similar.

Return true if sentence1 and sentence2 are similar, or false if they are not similar.

Two sentences are similar if:

They have the same length (i.e. the same number of words)
sentence1[i] and sentence2[i] are similar.
Notice that a word is always similar to itself, also notice that the similarity relation is not transitive. For example, if the words a and b are similar and the words b and c are similar, a and c are not necessarily similar.

 

Example 1:

Input: sentence1 = ["great","acting","skills"], sentence2 = ["fine","drama","talent"], similarPairs = [["great","fine"],["drama","acting"],["skills","talent"]]
Output: true
Explanation: The two sentences have the same length and each word i of sentence1 is also similar to the corresponding word in sentence2.
Example 2:

Input: sentence1 = ["great"], sentence2 = ["great"], similarPairs = []
Output: true
Explanation: A word is similar to itself.
Example 3:

Input: sentence1 = ["great"], sentence2 = ["doubleplus","good"], similarPairs = [["great","doubleplus"]]
Output: false
Explanation: As they don't have the same length, we return false.
 

Constraints:

1 <= sentence1.length, sentence2.length <= 1000
1 <= sentence1[i].length, sentence2[i].length <= 20
sentence1[i] and sentence2[i] consist of lower-case and upper-case English letters.
0 <= similarPairs.length <= 1000
similarPairs[i].length == 2
1 <= xi.length, yi.length <= 20
xi and yi consist of lower-case and upper-case English letters.
All the pairs (xi, yi) are distinct.
 * 
 * 
 * 
 */

/**
 * @param {string[]} sentence1
 * @param {string[]} sentence2
 * @param {string[][]} similarPairs
 * @return {boolean}
 */
var map1 = new Map;
//  var map2 = new Map;
function addsimilar(word1,word2){
    if(map1.has(word1)){
        var obj = [];
        obj.push(word2);
        var t2 = map1.get(word1);
        var t3 = obj.concat(t2);
        map1.set(word1,t3);
        return;
    }
    map1.set(word1,[word2]);
}
function makeTrans(word1,word2){

    if(!map1.has(word2))
        return;
    var arr = map1.get(word2);
    for(var i=0;i<arr.length;i++){
        addsimilar(arr[i],word1);
        
        //addsimilar(word,arr[i]);
    }
}


var hash = new Map;
function setinHash(word1,word2){
    var id;
    if(word1 === word2)
        return;
    if(hash.has(word1) && hash.has(word2)){
        var id1 = hash.get(word1);
        var id2 = hash.get(word2);
        hash.forEach(function(val,key){
            if(val === id1 || val === id2)
                hash.set(key,id1);
        })
        return;
    }
        
    if(hash.has(word1)){
        id = hash.get(word1);
        hash.set(word2,id);
    }else if(hash.has(word2)){
        id = hash.get(word2);
        hash.set(word1,id);
    }else{
        id = Math.floor(Math.random()*100000);
        hash.set(word1,id);
        hash.set(word2,id);
    }
}

var areSentencesSimilarTwo = function(sentence1, sentence2, similarPairs) {
    if(sentence1.length != sentence2.length)
        return false; 
    var length = sentence1.length;
    
    for(var i=0;i<similarPairs.length;i++){
        setinHash(similarPairs[i][0],similarPairs[i][1])
     }
    for(var i=0;i<length;i++){
        var word1 = sentence1[i];
        var word2 = sentence2[i];
        if(word1 === word2)
            continue;
        if(hash.get(word1) === hash.get(word2))
            continue;

        return false;
    }
    return true;
        
};
//console.log(areSentencesSimilar(["great","acting","skills"],["fine","drama","talent"],[["great","fine"],["drama","acting"],["skills","talent"]]))
console.log(areSentencesSimilarTwo(
    ["jrocadcojmybpxmuj","livgsrfvgtovcurzq","mnrdscqkycodx","wgcjlntupylayse","tglnshmqlmkqqfbpf","uzlxmaoro","narvuaqmmkqhd","xozoyaqxtbustrymo","jrocadcojmybpxmuj","ainlwrwabqcwq","qnjidlmwmxxjgntez","bbchthovla","vaufbmwdrupcxpg","zwwgloilddclufwze","tyxrlpmcy","wtjtdrlm","edurtetzseifez","yzxogkunvohdmro","livgsrfvgtovcurzq","wmpvjvzljhnaxvp","rqbswlkw","umlzibkkpsyvpdol","jkcmceinlyhi","wlvmfxbleuot","aeloeauxmc","ooyllkxg","wlvmfxbleuot","cuewcvuy","vaufbmwdrupcxpg","bbchthovla","arigdtezmyz","yzxogkunvohdmro","wrszraxxdum","dhmiuqhqlsprxy","xpmxtfyvjrnujyxjh","bfxbncez","cjjkmybleu","mnrdscqkycodx","mzfpofjn","livgsrfvgtovcurzq","shfzcyboj","xozoyaqxtbustrymo","xozoyaqxtbustrymo","orlzzpytpzazxr","filnwifbukdqijgr","fllqjtnxwmfoou","mkmawbogphdttd","rthpxoxyyiy","dkhfozltuckwog","wmpvjvzljhnaxvp","dhmiuqhqlsprxy","yltljjairlkrmdq","cuewcvuy","subzoyxjkfiwmfb","mzvbgcizeeth","narvuaqmmkqhd","tglnshmqlmkqqfbpf","rpesfkhfjucj","xrgfejybbkezgor","vaufbmwdrupcxpg","czlgbqzffodsoxng","suvvqdiceuogcmv","fllqjtnxwmfoou","yltljjairlkrmdq","bubwouozgs","mnrdscqkycodx","rqbswlkw","ooyllkxg","livgsrfvgtovcurzq","rthpxoxyyiy","pyzcbpjhntpefbq","wtjtdrlm","rztcppnmud","inuzvkgolupxelcal","pdxsxjop","wmpvjvzljhnaxvp","xydwvemqvtgvzl","hqpnoczciajvkbdy","rvihrzzkt","jzquemjzpvfbka","gkqrglav","qyaxqaqxiwr","mzvbgcizeeth","umlzibkkpsyvpdol","vaufbmwdrupcxpg","ooyllkxg","arigdtezmyz","bubwouozgs","wtjtdrlm","xozoyaqxtbustrymo","jrocadcojmybpxmuj","rnlryins","fllqjtnxwmfoou","livgsrfvgtovcurzq","czlgbqzffodsoxng","hlcsiukaroscfg","bfxbncez","ainlwrwabqcwq","vaufbmwdrupcxpg","vaufbmwdrupcxpg"],
    ["jrocadcojmybpxmuj","livgsrfvgtovcurzq","mnrdscqkycodx","wgcjlntupylayse","bbchthovla","bfxbncez","ztisufueqzequ","yutahdply","suvvqdiceuogcmv","ainlwrwabqcwq","fquzrlhdsnuwhhu","tglnshmqlmkqqfbpf","vaufbmwdrupcxpg","zwwgloilddclufwze","livgsrfvgtovcurzq","wtjtdrlm","edurtetzseifez","ecqfdkebnamkfglk","livgsrfvgtovcurzq","wmpvjvzljhnaxvp","ryubcgbzmxc","pzlmeboecybxmetz","hqpnoczciajvkbdy","xpmxtfyvjrnujyxjh","zwwgloilddclufwze","khcyhttaaxp","wlvmfxbleuot","jzquemjzpvfbka","vaufbmwdrupcxpg","tglnshmqlmkqqfbpf","mzvbgcizeeth","cjjkmybleu","orlzzpytpzazxr","dhmiuqhqlsprxy","mzfpofjn","bfxbncez","inuzvkgolupxelcal","inhzsspqltvl","wlvmfxbleuot","livgsrfvgtovcurzq","orlzzpytpzazxr","yutahdply","yutahdply","orlzzpytpzazxr","gdziaihbagl","yltljjairlkrmdq","mkmawbogphdttd","aotjpvanljxe","aeloeauxmc","wmpvjvzljhnaxvp","dhmiuqhqlsprxy","yltljjairlkrmdq","dnaaehrekqms","khcyhttaaxp","mzvbgcizeeth","narvuaqmmkqhd","rvihrzzkt","bfufqsusp","xrgfejybbkezgor","vaufbmwdrupcxpg","czlgbqzffodsoxng","jrocadcojmybpxmuj","yltljjairlkrmdq","yltljjairlkrmdq","bubwouozgs","inhzsspqltvl","bsybvehdny","subzoyxjkfiwmfb","livgsrfvgtovcurzq","stkglpqdjzxmnlito","evepphnzuw","xrgfejybbkezgor","rztcppnmud","cjjkmybleu","qyaxqaqxiwr","ibwfxvxswjbecab","xydwvemqvtgvzl","hqpnoczciajvkbdy","tglnshmqlmkqqfbpf","dnaaehrekqms","gkqrglav","bfxbncez","qvwvgzxqihvk","umlzibkkpsyvpdol","vaufbmwdrupcxpg","khcyhttaaxp","arigdtezmyz","bubwouozgs","fllqjtnxwmfoou","xozoyaqxtbustrymo","jrocadcojmybpxmuj","rnlryins","wtjtdrlm","livgsrfvgtovcurzq","gkqrglav","orileazg","uzlxmaoro","ainlwrwabqcwq","vaufbmwdrupcxpg","vaufbmwdrupcxpg"],
    [["yutahdply","yutahdply"],["xozoyaqxtbustrymo","xozoyaqxtbustrymo"],["xozoyaqxtbustrymo","xozoyaqxtbustrymo"],["yutahdply","yutahdply"],["bsybvehdny","bsybvehdny"],["pzlmeboecybxmetz","pzlmeboecybxmetz"],["rqbswlkw","rqbswlkw"],["ryubcgbzmxc","ryubcgbzmxc"],["umlzibkkpsyvpdol","umlzibkkpsyvpdol"],["bsybvehdny","bsybvehdny"],["rqbswlkw","bsybvehdny"],["pzlmeboecybxmetz","bsybvehdny"],["ryubcgbzmxc","ryubcgbzmxc"],["umlzibkkpsyvpdol","ryubcgbzmxc"],["hqpnoczciajvkbdy","hqpnoczciajvkbdy"],["vdjccijgqk","vdjccijgqk"],["rztcppnmud","rztcppnmud"],["jkcmceinlyhi","hqpnoczciajvkbdy"],["vdjccijgqk","vdjccijgqk"],["rztcppnmud","vdjccijgqk"],["hqpnoczciajvkbdy","hqpnoczciajvkbdy"],["jkcmceinlyhi","hqpnoczciajvkbdy"],["suvvqdiceuogcmv","llrzqdnoxbscnkqy"],["jrocadcojmybpxmuj","jrocadcojmybpxmuj"],["suvvqdiceuogcmv","suvvqdiceuogcmv"],["llrzqdnoxbscnkqy","suvvqdiceuogcmv"],["jrocadcojmybpxmuj","jrocadcojmybpxmuj"],["dnaaehrekqms","dnaaehrekqms"],["jzquemjzpvfbka","muaskefecskjghzn"],["muaskefecskjghzn","iziepzqne"],["cuewcvuy","dnaaehrekqms"],["iziepzqne","iziepzqne"],["muaskefecskjghzn","iziepzqne"],["jzquemjzpvfbka","iziepzqne"],["dnaaehrekqms","dnaaehrekqms"],["cuewcvuy","dnaaehrekqms"],["rpesfkhfjucj","xpmxtfyvjrnujyxjh"],["wlvmfxbleuot","bfufqsusp"],["xpmxtfyvjrnujyxjh","mzfpofjn"],["rpesfkhfjucj","rpesfkhfjucj"],["mzfpofjn","rpesfkhfjucj"],["xpmxtfyvjrnujyxjh","rpesfkhfjucj"],["bfufqsusp","bfufqsusp"],["wlvmfxbleuot","bfufqsusp"],["lkopigreodypvude","lkopigreodypvude"],["hjogoueazw","hjogoueazw"],["qvwvgzxqihvk","qvwvgzxqihvk"],["mzvbgcizeeth","mzvbgcizeeth"],["mzvbgcizeeth","arigdtezmyz"],["arigdtezmyz","arigdtezmyz"],["qvwvgzxqihvk","arigdtezmyz"],["mzvbgcizeeth","arigdtezmyz"],["lkopigreodypvude","lkopigreodypvude"],["hjogoueazw","lkopigreodypvude"],["tglnshmqlmkqqfbpf","tglnshmqlmkqqfbpf"],["bbchthovla","bbchthovla"],["rvihrzzkt","tglnshmqlmkqqfbpf"],["tglnshmqlmkqqfbpf","tglnshmqlmkqqfbpf"],["rvihrzzkt","tglnshmqlmkqqfbpf"],["bbchthovla","bbchthovla"],["filnwifbukdqijgr","pkirimjwvyxs"],["gdziaihbagl","gdziaihbagl"],["hlcsiukaroscfg","hlcsiukaroscfg"],["gdziaihbagl","orileazg"],["orileazg","orileazg"],["gdziaihbagl","orileazg"],["hlcsiukaroscfg","orileazg"],["pkirimjwvyxs","pkirimjwvyxs"],["filnwifbukdqijgr","pkirimjwvyxs"],["xrgfejybbkezgor","wtjtdrlm"],["yltljjairlkrmdq","fllqjtnxwmfoou"],["wtjtdrlm","wtjtdrlm"],["xrgfejybbkezgor","wtjtdrlm"],["fllqjtnxwmfoou","fllqjtnxwmfoou"],["yltljjairlkrmdq","fllqjtnxwmfoou"],["ecqfdkebnamkfglk","gwkkpxuvgp"],["inuzvkgolupxelcal","inuzvkgolupxelcal"],["hgxrhkanzvzmsjpzl","gwkkpxuvgp"],["cjjkmybleu","cjjkmybleu"],["yzxogkunvohdmro","yzxogkunvohdmro"],["inuzvkgolupxelcal","yzxogkunvohdmro"],["yzxogkunvohdmro","yzxogkunvohdmro"],["cjjkmybleu","yzxogkunvohdmro"],["ecqfdkebnamkfglk","ecqfdkebnamkfglk"],["gwkkpxuvgp","ecqfdkebnamkfglk"],["hgxrhkanzvzmsjpzl","ecqfdkebnamkfglk"],["qnjidlmwmxxjgntez","hhrllhedyy"],["vyrvelteblnqaabc","qnjidlmwmxxjgntez"],["wzflhbbgtc","wzflhbbgtc"],["rnlryins","rnlryins"],["fquzrlhdsnuwhhu","zzdvolqtndzfjvqqr"],["zzdvolqtndzfjvqqr","bvxiilsnsarhsyl"],["qnjidlmwmxxjgntez","vyrvelteblnqaabc"],["vyrvelteblnqaabc","vyrvelteblnqaabc"],["hhrllhedyy","vyrvelteblnqaabc"],["rnlryins","vyrvelteblnqaabc"],["fquzrlhdsnuwhhu","zzdvolqtndzfjvqqr"],["zzdvolqtndzfjvqqr","zzdvolqtndzfjvqqr"],["bvxiilsnsarhsyl","zzdvolqtndzfjvqqr"],["wzflhbbgtc","zzdvolqtndzfjvqqr"],["wgcjlntupylayse","wgcjlntupylayse"],["hgtyntdmrgjh","hgtyntdmrgjh"],["cemnayjhlnj","cemnayjhlnj"],["wgcjlntupylayse","wgcjlntupylayse"],["hgtyntdmrgjh","wgcjlntupylayse"],["cemnayjhlnj","cemnayjhlnj"],["aeloeauxmc","aeloeauxmc"],["zwwgloilddclufwze","aeloeauxmc"],["dkhfozltuckwog","dwojnswr"],["dkhfozltuckwog","dkhfozltuckwog"],["dwojnswr","dkhfozltuckwog"],["aeloeauxmc","aeloeauxmc"],["zwwgloilddclufwze","aeloeauxmc"],["aotjpvanljxe","aotjpvanljxe"],["stkglpqdjzxmnlito","aotjpvanljxe"],["zfmpxgrevxp","aotjpvanljxe"],["evepphnzuw","evepphnzuw"],["rthpxoxyyiy","pyzcbpjhntpefbq"],["aotjpvanljxe","stkglpqdjzxmnlito"],["stkglpqdjzxmnlito","stkglpqdjzxmnlito"],["zfmpxgrevxp","stkglpqdjzxmnlito"],["rthpxoxyyiy","rthpxoxyyiy"],["evepphnzuw","rthpxoxyyiy"],["pyzcbpjhntpefbq","rthpxoxyyiy"],["czlgbqzffodsoxng","czlgbqzffodsoxng"],["gkqrglav","gkqrglav"],["gkqrglav","gkqrglav"],["czlgbqzffodsoxng","czlgbqzffodsoxng"],["tyxrlpmcy","tyxrlpmcy"],["livgsrfvgtovcurzq","livgsrfvgtovcurzq"],["tyxrlpmcy","tyxrlpmcy"],["livgsrfvgtovcurzq","livgsrfvgtovcurzq"],["cufxsgbpjgqvk","cufxsgbpjgqvk"],["cufxsgbpjgqvk","inhzsspqltvl"],["shsgrqol","shsgrqol"],["mnrdscqkycodx","mnrdscqkycodx"],["inhzsspqltvl","inhzsspqltvl"],["cufxsgbpjgqvk","inhzsspqltvl"],["shsgrqol","shsgrqol"],["mnrdscqkycodx","shsgrqol"],["rphnhtvnihyfkrgv","rphnhtvnihyfkrgv"],["edurtetzseifez","edurtetzseifez"],["yykdqtkkdacpbwtbq","yykdqtkkdacpbwtbq"],["rphnhtvnihyfkrgv","rphnhtvnihyfkrgv"],["edurtetzseifez","rphnhtvnihyfkrgv"],["yykdqtkkdacpbwtbq","yykdqtkkdacpbwtbq"],["dhmiuqhqlsprxy","dhmiuqhqlsprxy"],["ztisufueqzequ","ztisufueqzequ"],["narvuaqmmkqhd","narvuaqmmkqhd"],["narvuaqmmkqhd","narvuaqmmkqhd"],["ztisufueqzequ","narvuaqmmkqhd"],["dhmiuqhqlsprxy","dhmiuqhqlsprxy"],["wmpvjvzljhnaxvp","wmpvjvzljhnaxvp"],["ibwfxvxswjbecab","ibwfxvxswjbecab"],["xydwvemqvtgvzl","wmpvjvzljhnaxvp"],["wmpvjvzljhnaxvp","wmpvjvzljhnaxvp"],["xydwvemqvtgvzl","wmpvjvzljhnaxvp"],["ibwfxvxswjbecab","ibwfxvxswjbecab"],["mkmawbogphdttd","mkmawbogphdttd"],["bubwouozgs","mkmawbogphdttd"],["ainlwrwabqcwq","ainlwrwabqcwq"],["mkmawbogphdttd","mkmawbogphdttd"],["bubwouozgs","mkmawbogphdttd"],["ainlwrwabqcwq","ainlwrwabqcwq"],["uzlxmaoro","bfxbncez"],["qyaxqaqxiwr","qyaxqaqxiwr"],["pdxsxjop","pdxsxjop"],["pdxsxjop","pdxsxjop"],["qyaxqaqxiwr","pdxsxjop"],["bfxbncez","bfxbncez"],["uzlxmaoro","bfxbncez"],["subzoyxjkfiwmfb","subzoyxjkfiwmfb"],["ooyllkxg","ooyllkxg"],["subzoyxjkfiwmfb","khcyhttaaxp"],["subzoyxjkfiwmfb","subzoyxjkfiwmfb"],["khcyhttaaxp","subzoyxjkfiwmfb"],["ooyllkxg","ooyllkxg"],["orlzzpytpzazxr","orlzzpytpzazxr"],["oufzmjgplt","oufzmjgplt"],["wrszraxxdum","wrszraxxdum"],["shfzcyboj","shfzcyboj"],["oufzmjgplt","oufzmjgplt"],["orlzzpytpzazxr","oufzmjgplt"],["wrszraxxdum","wrszraxxdum"],["shfzcyboj","wrszraxxdum"],["yutahdply","xozoyaqxtbustrymo"],["umlzibkkpsyvpdol","pzlmeboecybxmetz"],["hqpnoczciajvkbdy","rztcppnmud"],["llrzqdnoxbscnkqy","jrocadcojmybpxmuj"],["cuewcvuy","jzquemjzpvfbka"],["rpesfkhfjucj","wlvmfxbleuot"],["lkopigreodypvude","mzvbgcizeeth"],["tglnshmqlmkqqfbpf","bbchthovla"],["orileazg","filnwifbukdqijgr"],["yltljjairlkrmdq","xrgfejybbkezgor"],["inuzvkgolupxelcal","hgxrhkanzvzmsjpzl"],["hhrllhedyy","wzflhbbgtc"],["cemnayjhlnj","hgtyntdmrgjh"],["dkhfozltuckwog","zwwgloilddclufwze"],["zfmpxgrevxp","pyzcbpjhntpefbq"],["gkqrglav","czlgbqzffodsoxng"],["tyxrlpmcy","livgsrfvgtovcurzq"],["shsgrqol","cufxsgbpjgqvk"],["rphnhtvnihyfkrgv","yykdqtkkdacpbwtbq"],["dhmiuqhqlsprxy","ztisufueqzequ"],["ibwfxvxswjbecab","xydwvemqvtgvzl"],["mkmawbogphdttd","ainlwrwabqcwq"],["pdxsxjop","uzlxmaoro"],["ooyllkxg","khcyhttaaxp"],["shfzcyboj","orlzzpytpzazxr"]]
    ));

/*

    hash: Map(99)

    29: {"tglnshmqlmkqqfbpf" => 5130}


[[Entries]]
0: {"yutahdply" => 8060}
1: {"xozoyaqxtbustrymo" => 2}
2: {"bsybvehdny" => 8867}
3: {"pzlmeboecybxmetz" => 8038}
4: {"rqbswlkw" => 3368}
5: {"ryubcgbzmxc" => 7649}
6: {"umlzibkkpsyvpdol" => 657}
7: {"hqpnoczciajvkbdy" => 8884}
8: {"vdjccijgqk" => 8326}
key: "vdjccijgqk"
value: 8326
9: {"rztcppnmud" => 4004}
10: {"jkcmceinlyhi" => 8884}
11: {"suvvqdiceuogcmv" => 8193}
12: {"llrzqdnoxbscnkqy" => 8193}
13: {"jrocadcojmybpxmuj" => 9220}
14: {"dnaaehrekqms" => 6722}
15: {"jzquemjzpvfbka" => 3797}
16: {"muaskefecskjghzn" => 3797}
17: {"iziepzqne" => 3797}
18: {"cuewcvuy" => 6722}
19: {"rpesfkhfjucj" => 6391}
20: {"xpmxtfyvjrnujyxjh" => 6391}
21: {"wlvmfxbleuot" => 8166}
22: {"bfufqsusp" => 8166}
23: {"mzfpofjn" => 6391}
24: {"lkopigreodypvude" => 3169}
25: {"hjogoueazw" => 4151}
26: {"qvwvgzxqihvk" => 3428}
27: {"mzvbgcizeeth" => 4444}
28: {"arigdtezmyz" => 4444}
29: {"tglnshmqlmkqqfbpf" => 5130}
30: {"bbchthovla" => 3810}
31: {"rvihrzzkt" => 5130}
32: {"filnwifbukdqijgr" => 4359}
33: {"pkirimjwvyxs" => 4359}
34: {"gdziaihbagl" => 9769}
35: {"hlcsiukaroscfg" => 7345}
36: {"orileazg" => 9769}
37: {"xrgfejybbkezgor" => 9123}
38: {"wtjtdrlm" => 9123}
39: {"yltljjairlkrmdq" => 7953}
40: {"fllqjtnxwmfoou" => 7953}
41: {"ecqfdkebnamkfglk" => 9084}
42: {"gwkkpxuvgp" => 9084}
43: {"inuzvkgolupxelcal" => 6656}
44: {"hgxrhkanzvzmsjpzl" => 9084}
45: {"cjjkmybleu" => 7878}
46: {"yzxogkunvohdmro" => 2888}
47                                                      {"qnjidlmwmxxjgntez" => 2577}
48: {"hhrllhedyy" => 2577}
49: {"vyrvelteblnqaabc" => 2577}
50: {"wzflhbbgtc" => 9783}
51: {"rnlryins" => 5030}
                                                        52: {"fquzrlhdsnuwhhu" => 5374}
53: {"zzdvolqtndzfjvqqr" => 5374}
54: {"bvxiilsnsarhsyl" => 5374}
55: {"wgcjlntupylayse" => 8942}
56: {"hgtyntdmrgjh" => 5034}
57: {"cemnayjhlnj" => 9369}
58: {"aeloeauxmc" => 5770}
59: {"zwwgloilddclufwze" => 5770}
60: {"dkhfozltuckwog" => 7306}
61: {"dwojnswr" => 7306}
62: {"aotjpvanljxe" => 6205}
63: {"stkglpqdjzxmnlito" => 6205}
64: {"zfmpxgrevxp" => 6205}
65: {"evepphnzuw" => 9329}
66: {"rthpxoxyyiy" => 260}
67: {"pyzcbpjhntpefbq" => 260}
68: {"czlgbqzffodsoxng" => 2956}
69: {"gkqrglav" => 269}
70: {"tyxrlpmcy" => 8164}
71: {"livgsrfvgtovcurzq" => 6922}
72: {"cufxsgbpjgqvk" => 2593}
73: {"inhzsspqltvl" => 2593}
74: {"shsgrqol" => 8360}
75: {"mnrdscqkycodx" => 2872}
76: {"rphnhtvnihyfkrgv" => 4268}
77: {"edurtetzseifez" => 5796}
78: {"yykdqtkkdacpbwtbq" => 524}
79: {"dhmiuqhqlsprxy" => 1212}
80: {"ztisufueqzequ" => 1043}
81: {"narvuaqmmkqhd" => 247}
82: {"wmpvjvzljhnaxvp" => 4387}
83: {"ibwfxvxswjbecab" => 3755}
84: {"xydwvemqvtgvzl" => 4387}
85: {"mkmawbogphdttd" => 6360}
86: {"bubwouozgs" => 6360}
87: {"ainlwrwabqcwq" => 3894}
88: {"uzlxmaoro" => 5351}
89: {"bfxbncez" => 5351}
90: {"qyaxqaqxiwr" => 7038}
91: {"pdxsxjop" => 8340}
92: {"subzoyxjkfiwmfb" => 5363}
93: {"ooyllkxg" => 793}
94: {"khcyhttaaxp" => 5363}
95: {"orlzzpytpzazxr" => 1489}
96: {"oufzmjgplt" => 259}
97: {"wrszraxxdum" => 3610}
98: {"shfzcyboj" => 1351}
size: (...)
__proto__: Map
*/