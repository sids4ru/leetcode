/**
 * 
 * https://leetcode.com/problems/cracking-the-safe/
 * Cracking the Safe
 * Hard

553

808

Add to List

Share
There is a box protected by a password. The password is a sequence of n digits where each digit can be one of the first k digits 0, 1, ..., k-1.

While entering a password, the last n digits entered will automatically be matched against the correct password.

For example, assuming the correct password is "345", if you type "012345", the box will open because the correct password matches the suffix of the entered password.

Return any password of minimum length that is guaranteed to open the box at some point of entering it.

 

Example 1:

Input: n = 1, k = 2
Output: "01"
Note: "10" will be accepted too.
Example 2:

Input: n = 2, k = 2
Output: "00110"
Note: "01100", "10011", "11001" will be accepted too.
 

Note:

n will be in the range [1, 4].
k will be in the range [1, 10].
k^n will be at most 4096.
 

Accepted
35,730
Submissions
68,013
 * 
 */
/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
 var crackSafe = function(n, k) {
    var string = "";
    for(var i=0; i<k;i++){
        string+=i;
    }
    if(n===1)
        return string.split("").reverse().join("");
    var combinations = [];
    getCombinations("", string, n,combinations);
    var DP = {};
    var minpath = makeCombination("",string,combinations,DP,n);
    return minpath;
};
function getCombinations(path, string, n,combinations){
    if(path.length === n){
        combinations.push(path);
        return;
    }
    for(var i=0; i<string.length;i++){
        getCombinations(path+string[i], string, n,combinations)
    }
}
function makeCombination(path,string,combinations,DP,n){
    if(path.length>n)
    {
        var someSuccess = false;
        for(var i=0; i<combinations.length;i++){
            if(path.indexOf(combinations[i])>=0){
                someSuccess = true;;
                break;
            }
                
        }
        if(!someSuccess)
            return "";
    }
    if(path.length>combinations.length*n)
        return "";

    var depth = path.length-1;
    
    var current = ""
    if(depth>=0)
        current = path[depth];

    if (DP[[depth,current]])
        return DP[[depth,current]];
    
    var success = true;
    for(var i=0; i<combinations.length;i++){
        if(path.indexOf(combinations[i])<0){
            success = false;
            break;
        }
            
    }

    if(success){
        DP[[depth,current]] = current;
        //return path;
        return current;
    }
    



    var minpathLength =Infinity;
    var minpath = "";
    for(var i=0; i<string.length;i++){
        var tmpPath = makeCombination(path+string[i],string,combinations,DP,n);
        if(tmpPath === "")
            continue;
        if(tmpPath.length < minpathLength){
            minpathLength = tmpPath.length;
            minpath = tmpPath;
        }
    }
    
    if(minpath != ""){
        var success = true;
        for(var i=0; i<combinations.length;i++){
            if(minpath.indexOf(combinations[i])<0){
                success = false;
                break;
            }
                
        }
        if(success){
            DP[[depth,current]] = minpath;
            //return path;
            return minpath;
        }
        else
            minpath = current+minpath;
    }
    
    DP[[depth,current]] = minpath;
    return minpath;
}

console.log(crackSafe(
    2,
    3
))
