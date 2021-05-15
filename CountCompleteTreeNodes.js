/**
 * Count Complete Tree Nodes
 * https://leetcode.com/problems/count-complete-tree-nodes/
 * Given the root of a complete binary tree, return the number of the nodes in the tree.

According to Wikipedia, every level, except possibly the last, is completely filled in a complete binary tree, and all nodes in the last level are as far left as possible. It can have between 1 and 2h nodes inclusive at the last level h.

 

Example 1:


Input: root = [1,2,3,4,5,6]
Output: 6
Example 2:

Input: root = []
Output: 0
Example 3:

Input: root = [1]
Output: 1
 

Constraints:

The number of nodes in the tree is in the range [0, 5 * 104].
0 <= Node.val <= 5 * 104
The tree is guaranteed to be complete.
 

Follow up: Traversing the tree to count the number of nodes in the tree is an easy solution but with O(n) complexity. Could you find a faster algorithm?
 * 
 * 
 * 
 * @param {*} arr 
 * @param {*} i 
 * @returns 
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

var countNodes = function(root) {
    var depth = getTreeDept(root);
    var baseNodes = Math.pow(2,depth-1);
    var allNodees = Math.pow(2,depth);

    while (true){
        var begin = allNodees - baseNodes;
        var end = allNodees;
        mid = begin + (Math.floor(end-begin)/2);
        if(checkNodeExist(mid,root,1,depth))
        {
            begin = mid;
        }
        else{
            if(checkNodeExist(mid+1,root,1,depth))
                return mid;
            else{
                end = mid;
                mid = begin + (Math.floor(end-begin)/2);
            }
        }
    }

};
function getTreeDept(root){
    if(!root)
        return 0;
    return 1+getTreeDept(root.left);
}
function checkNodeExist(node,root,currentdepth,depth){
    if(!root)
        return false;
    if(currentdepth === depth)
    {
        if(root)
            return true;
        else 
            return false;
    }
    next = node/Math.pow(depth - currentdepth);
    if(next%2 === 0)
        return checkNodeExist(node,root.right,currentdepth+1,depth );
    else
        return checkNodeExist(node,root.left,currentdepth-1,depth );
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
var root = makeTree([1,2,3],0);

console.log(countNodes(root));
