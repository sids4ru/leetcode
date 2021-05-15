/*
Count of Smaller Numbers After Self
https://leetcode.com/problems/count-of-smaller-numbers-after-self/
You are given an integer array nums and you have to return a new counts array. The counts array has the property where counts[i] is the number of smaller elements to the right of nums[i].

 

Example 1:

Input: nums = [5,2,6,1]
Output: [2,1,1,0]
Explanation:
To the right of 5 there are 2 smaller elements (2 and 1).
To the right of 2 there is only 1 smaller element (1).
To the right of 6 there is 1 smaller element (1).
To the right of 1 there is 0 smaller element.
Example 2:

Input: nums = [-1]
Output: [0]
Example 3:

Input: nums = [-1,-1]
Output: [0,0]
 

Constraints:

1 <= nums.length <= 105
*/
/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var countSmaller = function(nums) {
    var sorted = [];
    
    sorted = nums.slice();
    sorted.sort(function(a,b){
        return b-a;
    });

    var result = [];
    for(var i=0; i<nums.length;i++){
        var curr_no = nums[i];
        var pos_in_sorted = sorted.indexOf(curr_no);
        var counter = 1;
        while(true){
            if(counter + pos_in_sorted >= nums.length){
                result[i] = 0;
                break;
            }
            var next_no = sorted[pos_in_sorted+counter];
            var index_of_next_in_num = nums.indexOf(next_no);
            if(index_of_next_in_num>i){
                //var insorted = sorted.indexOf(nums[index_of_next_in_num]);
                result[i] = nums.length - index_of_next_in_num;
                if(nums[index_of_next_in_num] === 0)
                    result[i]-=1;
                if(result[i] <=0)
                    result[i] = 1;
                break;
                
            } else counter++;
        }
    }
    return result;  
};
console.log(countSmaller([0,2,1]));
//console.log(countSmaller([5,2,6,1]));