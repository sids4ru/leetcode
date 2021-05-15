/**
 * 
 * 
You have a keyboard layout as shown above in the XY plane, where each English uppercase letter is located at some coordinate, for example, the letter A is located at coordinate (0,0), the letter B is located at coordinate (0,1), the letter P is located at coordinate (2,3) and the letter Z is located at coordinate (4,1).

Given the string word, return the minimum total distance to type such string using only two fingers. The distance between coordinates (x1,y1) and (x2,y2) is |x1 - x2| + |y1 - y2|. 

Note that the initial positions of your two fingers are considered free so don't count towards your total distance, also your two fingers do not have to start at the first letter or the first two letters.

 

Example 1:

Input: word = "CAKE"
Output: 3
Explanation: 
Using two fingers, one optimal way to type "CAKE" is: 
Finger 1 on letter 'C' -> cost = 0 
Finger 1 on letter 'A' -> cost = Distance from letter 'C' to letter 'A' = 2 
Finger 2 on letter 'K' -> cost = 0 
Finger 2 on letter 'E' -> cost = Distance from letter 'K' to letter 'E' = 1 
Total distance = 3
Example 2:

Input: word = "HAPPY"
Output: 6
Explanation: 
Using two fingers, one optimal way to type "HAPPY" is:
Finger 1 on letter 'H' -> cost = 0
Finger 1 on letter 'A' -> cost = Distance from letter 'H' to letter 'A' = 2
Finger 2 on letter 'P' -> cost = 0
Finger 2 on letter 'P' -> cost = Distance from letter 'P' to letter 'P' = 0
Finger 1 on letter 'Y' -> cost = Distance from letter 'A' to letter 'Y' = 4
Total distance = 6
Example 3:

Input: word = "NEW"
Output: 3
Example 4:

Input: word = "YEAR"
Output: 7
 

Constraints:

2 <= word.length <= 300
Each word[i] is an English uppercase letter.
 * 
 */

/**
 * @param {string} word
 * @return {number}
 */
var words = new Map;
function makeWordsMap(){
    var letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var pos = 0;
    for(var i=0;i<5;i++){
        for(j=0;j<6;j++){
            obj = [i,j];
            words.set(letters[pos],obj);
            pos++;
            if(pos>=26)
                return;
        }
    }
}
function calcJump(a,b){
    var dist = Math.abs (a[0] - b[0]) + Math.abs(a[1]-b[1]);
    return dist;
}
makeWordsMap();
var fingers = [[-1,-1], [-1,-1]];
var dp = [];
var minDist = Infinity;
var minimumDistance = function(word) {
    
    fingers = [[-1,-1], [-1,-1]];
    minDist = Infinity;
    findMin(0,0,word);
    return minDist;
};

function findMin(dist, depth, word){
    if(depth === word.length){
        minDist = Math.min(minDist,dist);
        return;
    }
    
    var pos = words.get(word[depth]);
    var jump = 0;
    for(var i=0; i<2; i++){
        var back = [...fingers[i]];
        if(fingers[i][0] < 0){
            fingers[i][0] = pos[0];
            fingers[i][1] = pos[1];
        }else{
            fingers[i] = [...pos];
            jump = calcJump(back,fingers[i]);
        }
        
        findMin(jump+dist,depth+1,word);
        fingers[i] = [...back];
        
    }
}
console.log(minimumDistance("CAKE"));