/*
Binary Tree Maximum Path Sum
https://leetcode.com/problems/binary-tree-maximum-path-sum/
A path in a binary tree is a sequence of nodes where each pair of adjacent nodes in the sequence has an edge connecting them. A node can only appear in the sequence at most once. Note that the path does not need to pass through the root.

The path sum of a path is the sum of the node's values in the path.

Given the root of a binary tree, return the maximum path sum of any path.

 

Example 1:


Input: root = [1,2,3]
Output: 6
Explanation: The optimal path is 2 -> 1 -> 3 with a path sum of 2 + 1 + 3 = 6.
Example 2:


Input: root = [-10,9,20,null,null,15,7]
Output: 42
Explanation: The optimal path is 15 -> 20 -> 7 with a path sum of 15 + 20 + 7 = 42.
 

Constraints:

The number of nodes in the tree is in the range [1, 3 * 104].
-1000 <= Node.val <= 1000
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
 var maxpathsum = -Infinity;
 var maxPathSum = function(root) {
    maxpathsum = -Infinity;
    var sum = pathSum(root,maxpathsum);
    return Math.max(maxpathsum,sum);
};
function pathSum(root){
    if(!root)
        return 0;
    var val = root.val;
    var left = pathSum(root.left);
    var right = pathSum(root.right);
    var sum = root.val + Math.max(left + right, left,right);
    var summax = Math.max(sum,val)
    if(sum > maxpathsum)
    maxpathsum = summax;
    
    return Math.max( root.val + Math.max(left,right),val);
}
    
function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}
function makeTree(arr,i){
    if(i>=arr.length || arr[i] === null)
        return null;
    var node = new TreeNode(arr[i],makeTree(arr,2*i+1),makeTree(arr,2*i+2));
    return node;
}
//var root = makeTree([-10,9,20,null,null,15,7],0);
var root = makeTree([2,-1,-2],0);

console.log(maxPathSum(root));
console.log(root);