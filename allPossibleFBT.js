/** 
 * https://leetcode.com/problems/all-possible-full-binary-trees/
 * 
 * 894. All Possible Full Binary Trees
Medium

1401

115

Add to List

Share
Given an integer n, return a list of all possible full binary trees with n nodes. Each node of each tree in the answer must have Node.val == 0.

Each element of the answer is the root node of one possible tree. You may return the final list of trees in any order.

A full binary tree is a binary tree where each node has exactly 0 or 2 children.

 

Example 1:


Input: n = 7
Output: [[0,0,0,null,null,0,0,null,null,0,0],[0,0,0,null,null,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,null,null,null,null,0,0],[0,0,0,0,0,null,null,0,0]]
Example 2:

Input: n = 3
Output: [[0,0,0]]
 

Constraints:

1 <= n <= 20
*/




 // Definition for a binary tree node.
  function TreeNode(val, left, right) {
      this.val = (val===undefined ? 0 : val)
      this.left = (left===undefined ? null : left)
      this.right = (right===undefined ? null : right)
  }
/************************************************************************ */
/************************************************************************ */
/************************************************************************ */
/*                  LEET CODE JS SOLUTION                                 */
/************************************************************************ */
/************************************************************************ */
/************************************************************************ */
/************************************************************************ */

/**
 * @param {number} n
 * @return {TreeNode[]}
 */

 var allPossibleFBT = function(n) {
    let dp = {1: [new TreeNode(0)]};
    
    const construct = function(n) {        
        if (n in dp) {
            return dp[n];
        }
        
        if (n % 2 == 0) {
            dp[n] = [];
            return [];
        }
        
        let list = [];
        
        for (let i = 1; i < n-1; i++) {
            let left = construct(i);
            let right = construct(n-1-i);
            
            for (let l of left) {
                for (let r of right) {
                    list.push(new TreeNode(0, l, r));
                }
            }
        }
        
        dp[n] = list;
        return list;
    }
    
    construct(n);
    return dp[n];
};


/************************************************************************ */
/************************************************************************ */
/************************************************************************ */
/*                  MY CODE                                               */
/************************************************************************ */
/************************************************************************ */
/************************************************************************ */
/************************************************************************ */
var allPossibleFBT = function(n) {
    var DP = {};
    return makeFBT(n,DP);
}
function makeFBT(n,DP){
    if(n%2 === 0)
    {
        DP[n] = [];
        return[];
    }
    if(n === 1){
        DP[n] = new TreeNode(0);
        return DP[n]
    }
    var list = [];
    for(var i=1; i<n;i++){
        left = makeFBT(i);
        right = makeFBT(n-i-1)
        for(var l in left){
            for(var r in right){
                list.push(new TreeNode(l,r));
            }
        }
        
    }
    DP[n] = list;
    return DP[n];
}
console.log(allPossibleFBT(9))

