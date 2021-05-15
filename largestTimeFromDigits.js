/**
 * https://leetcode.com/problems/largest-time-for-given-digits/
 * 
 * 949. Largest Time for Given Digits
Medium

446

823

Add to List

Share
Given an array arr of 4 digits, find the latest 24-hour time that can be made using each digit exactly once.

24-hour times are formatted as "HH:MM", where HH is between 00 and 23, and MM is between 00 and 59. The earliest 24-hour time is 00:00, and the latest is 23:59.

Return the latest 24-hour time in "HH:MM" format.  If no valid time can be made, return an empty string.

 

Example 1:

Input: A = [1,2,3,4]
Output: "23:41"
Explanation: The valid 24-hour times are "12:34", "12:43", "13:24", "13:42", "14:23", "14:32", "21:34", "21:43", "23:14", and "23:41". Of these times, "23:41" is the latest.
Example 2:

Input: A = [5,5,5,5]
Output: ""
Explanation: There are no valid 24-hour times as "55:55" is not valid.
Example 3:

Input: A = [0,0,0,0]
Output: "00:00"
Example 4:

Input: A = [0,0,1,0]
Output: "10:00"
 

Constraints:

arr.length == 4
0 <= arr[i] <= 9
 * 
 * 
 * 
 */
/**
 * @param {number[]} arr
 * @return {string}
 */

 var largestTimeFromDigits = function(arr) {
    var time = "";
    var path = [];
    var result = [];
    
    var visited = new Array(arr.length);
    visited.fill(false);
    arr.sort(function(a,b) {return b-a})
    for(var i=0; i<arr.length;i++){
        permute(i, arr,path,visited,result)
    }
    //find max hour
    for(var i = 0; i<result.length;i++){
        if(isValidTime(result[i])){
            var time = result[i]
            return ""+time[0]+time[1] + ":" + time[2] + time[3];
        }
    }
    return time;
};
function isValidTime(time){
    if(time[0] === 2 && time[1] <= 3 && time[2] <=5)
        return true;
    else if (time[0] < 2 && time[2] <= 5)
        return true;
}
function permute(pos, arr,path,visited,result)
{
    path.push(arr[pos])
    visited[pos] = true;
    var success = true;
    for(var i=0; i<arr.length;i++){
        if(visited[i])
            continue;
        permute(i,arr,path,visited,result);
        success = false;
    }
    if(success)
    {
        result.push([...path]);
    }
    visited[pos] = false;
    path.pop();
}
console.log(largestTimeFromDigits(
    [1,2,3,4]
))