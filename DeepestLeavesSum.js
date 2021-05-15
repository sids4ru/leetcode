/**
 * 
 * 
 * Given the root of a binary tree, return the sum of values of its deepest leaves.
 

Example 1:


Input: root = [1,2,3,4,5,null,6,7,null,null,null,null,8]
Output: 15
Example 2:

Input: root = [6,7,8,2,7,1,3,9,null,1,4,null,null,null,5]
Output: 19
 

Constraints:

The number of nodes in the tree is in the range [1, 104].
1 <= Node.val <= 100


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
var sum = 0;
var maxlevel = 0;
 var deepestLeavesSum = function(root) {
     maxlevel = 0;
     var map = {};
    if(root === null)
        return 0;
    traverse(root,0,map);
    return map[maxlevel];
};
function traverse(root,level,map){
    if(root === null)
        return 0;
    if(!map[level]) map[level] = 0;
    map[level] += root.val;
    maxlevel = Math.max(level,maxlevel);
    traverse(root.left,level+1,map);
    traverse(root.right,level+1,map);
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
var root = makeTree(
    [1,2,3,4,5,null,6,7,null,null,null,null,8],
    0);

console.log(deepestLeavesSum(
    root
))
