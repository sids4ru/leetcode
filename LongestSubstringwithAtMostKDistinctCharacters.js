/**
 * Longest Substring with At Most K Distinct Characters
Given a string s and an integer k, return the length of the longest substring of s that contains at most k distinct characters.

 

Example 1:

Input: s = "eceba", k = 2
Output: 3
Explanation: The substring is "ece" with length 3.
Example 2:

Input: s = "aa", k = 1
Output: 2
Explanation: The substring is "aa" with length 2.
 

Constraints:

1 <= s.length <= 5 * 104
0 <= k <= 50
    /**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var lengthOfLongestSubstringKDistinct = function(s, k) {
    if(k===0)
        return 0;
    var maxsize = 0;
    var max_p1 = 0, max_p2=0;
    var p1 = 0;
    var p2 = 0;
    var map = new Map;
    map.set(s[p1],1);
    while(true){
        p2++;
        if(p2>=s.length)
            break;
        if(map.has(s[p2])){
            var val = map.get(s[p2]) + 1;
            map.set(s[p2],val);
            dist = p2-p1;
            if(dist > maxsize)
            {
                maxsize = dist;
                max_p1 = p1;
                max_p2 = p2;//
            }
        }
        else{
            map.set(s[p2],1)
            if(map.size <= k){
                dist = p2-p1;
                if(dist > maxsize)
                {
                    maxsize = dist;
                    max_p1 = p1;
                    max_p2 = p2;//
                }
            }
            while(map.size>k && p1<=p2){
                var val = map.get(s[p1]) - 1;
                map.set(s[p1],val);
                //var val = map.get(s[p1]);
                if(val <= 0)
                    map.delete(s[p1]);
                p1++;
            }
        }
    }
    var res = "";
    for(var i=max_p1; i<=max_p2;i++)
        res+=s[i];
    return res;
    
};
console.log(lengthOfLongestSubstringKDistinct("eceba",2));
