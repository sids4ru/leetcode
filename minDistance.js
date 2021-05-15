/**  
 * https://leetcode.com/problems/allocate-mailboxes/
 * 
 * 
 * 
 * GOOD EXPLAINATION ON YOUTUBE
 * https://www.youtube.com/watch?v=ECcJUqdumIo
 * 
 * 
 * 
 * 
 * 1478. Allocate Mailboxes
Hard

435

8

Add to List

Share
Given the array houses and an integer k. where houses[i] is the location of the ith house along a street, your task is to allocate k mailboxes in the street.

Return the minimum total distance between each house and its nearest mailbox.

The answer is guaranteed to fit in a 32-bit signed integer.

 

Example 1:



Input: houses = [1,4,8,10,20], k = 3
Output: 5
Explanation: Allocate mailboxes in position 3, 9 and 20.
Minimum total distance from each houses to nearest mailboxes is |3-1| + |4-3| + |9-8| + |10-9| + |20-20| = 5 
Example 2:



Input: houses = [2,3,5,12,18], k = 2
Output: 9
Explanation: Allocate mailboxes in position 3 and 14.
Minimum total distance from each houses to nearest mailboxes is |2-3| + |3-3| + |5-3| + |12-14| + |18-14| = 9.
Example 3:

Input: houses = [7,4,6,1], k = 1
Output: 8
Example 4:

Input: houses = [3,6,14,10], k = 4
Output: 0
 

Constraints:

n == houses.length
1 <= n <= 100
1 <= houses[i] <= 10^4
1 <= k <= n
Array houses contain unique integers.
 * 
 * 
 * 
 * 
 * 
 */



/**
 * @param {number[]} houses
 * @param {number} k
 * @return {number}
 */
 var minDistance = function(houses, k) {
    houses.sort(function(a,b){return a-b})
    var n = houses.length;
    var cost = new Array(n);
    for(var i=0; i<n;i++){
        var cols = new Array(n);
        cols.fill(0);
        cost[i] = cols;

    }
    for(var i=0; i<n;i++){
        for(var j=i; j<n;j++){
            var c = 0;
            var median = Math.floor((i+j)/2);
            for(var x=i; x<=j;x++){
                c += Math.abs(houses[median] - houses[x]);
            }
            cost[i][j] = c;
        }
    }
    var DP = new Array(n);
    for(var i=0; i<n;i++){
        var cols = new Array(k+1);
        cols.fill(-1);
        DP[i] = cols;
    }
    return solve(0,k,houses,cost,DP);
};
function solve(start,k,houses,cost,DP){
    if(k===0 && start===houses.length)
        return 0;
    if(k===0 || start===houses.length)  //MADE MISTAKE HERE 
        return Infinity;
    if(DP[start][k]>=0)
        return DP[start][k];
    var min = Infinity;
    for(var i=start;i<houses.length;i++){
        min = Math.min(cost[start][i]+solve(i+1,k-1,houses,cost,DP),min);
    }
    DP[start][k] = min;
    return min;
}

console.log(minDistance(
    [3,6,14,10],4
))