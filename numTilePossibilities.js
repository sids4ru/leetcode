/**
 * @param {string} tiles
 * @return {number}
 */
 var cnt =0;
 function sequence(s,i){
     if(i != 0){
         cnt++;
     }
     var arr = {};
     
     for(var j = i; j<s.length; j++){
        if(!arr[s[j]]) {
             arr[s[j]] = 0;
             [s[i], s[j]] = [s[j], s[i]];
             sequence(s,i +1);
             [s[i], s[j]] = [s[j], s[i]];
         }
         if(!arr[s[j]]) arr[s[j]] = 0;
         arr[s[j] - 'A']++;
     }
 }
 var numTilePossibilities = function(tiles) {
     
     var i = 0;
     cnt = 0;
     sequence(tiles, i);
     return cnt;
 }

console.log(numTilePossibilities("AAABBC"));
/**
 * 
 * 
 * A: 1
AA: 0
AAA: 0
AAAB: 22
AAABB: 132
AAABBC: 943
AAABC: 150
AAAC: 22
AAB: 7
AABB: 29
AABBC: 170
AABC: 35
AAC: 7
AB: 3
ABB: 7
ABBC: 35
ABC: 10
AC: 3
B: 1
BB: 0
BBC: 7
BC: 3
C: 1
 */