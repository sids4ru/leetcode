/**
 * 
 * 
 * https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/
 * 
 * 236. Lowest Common Ancestor of a Binary Tree
Medium

5539

205

Add to List

Share
Given a binary tree, find the lowest common ancestor (LCA) of two given nodes in the tree.

According to the definition of LCA on Wikipedia: “The lowest common ancestor is defined between two nodes p and q as the lowest node in T that has both p and q as descendants (where we allow a node to be a descendant of itself).”

 

Example 1:


Input: root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 1
Output: 3
Explanation: The LCA of nodes 5 and 1 is 3.
Example 2:


Input: root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 4
Output: 5
Explanation: The LCA of nodes 5 and 4 is 5, since a node can be a descendant of itself according to the LCA definition.
Example 3:

Input: root = [1,2], p = 1, q = 2
Output: 1
 

Constraints:

The number of nodes in the tree is in the range [2, 105].
-109 <= Node.val <= 109
All Node.val are unique.
p != q
p and q will exist in the tree.

 * 
 * 
 * 
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
 function TreeNode(val) {
      this.val = val;
      this.left = this.right = null;
  }
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
 var lowestCommonAncestor = function(root, p, q) {
    return LCA(root,p,q);
};
function LCA(root,p,q){
    if(root === null)
        return null;
    if(root === p){
        return root;
    }
    if(root === q){
        return root;
    }
    //left
    
    var isQLEFT = search(q,root.left);
    
    var ispLEFT = search(p,root.left);
    if(isQLEFT && ispLEFT){
        return LCA(root.left,p,q);
    }
    var isQRIGHT = search(q,root.right);
    var ispRIGHT = search(p,root.right);
    if(ispRIGHT && isQRIGHT){
        return LCA(root.right,p,q)
    }
    
    if(isQLEFT && ispRIGHT || isQRIGHT&&ispLEFT){
        return root;
    }
    console.log("nothing found");
    return null;

}
function search (val, root){
    if(root === null)
        return false;
    if (root === val)
        return true;
    if(search(val,root.left))
        return true;
    if(search(val,root.right))
        return true;
    return false;

}

var pos = 0;
var deserialize = function(data) {
    pos = 0;
    if(data.length === 0)
        return null;
    
    var queue = [];
    var root = new TreeNode(data[pos++]);
    queue.push(root);
    while(queue.length!=0){
        if(pos >= data.length)
            break;
        var top = queue.shift();
        if(top === null)
            continue;
        var node = null;
        if(data[pos]!=null)
            node = new TreeNode(data[pos++]);
        else pos++;
        queue.push(node);
        top.left = node;
        node = null;
        if(data[pos]!=null)
            node = new TreeNode(data[pos++]);
        else 
            pos++;
        queue.push(node);
        top.right = node;
    }

    return root;
};
var root = deserialize(
    [3,5,1,6,2,0,8,null,null,7,4]
);
console.log(lowestCommonAncestor(
    root,5,1
    ));