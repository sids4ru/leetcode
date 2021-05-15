/*
https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/

105. Construct Binary Tree from Preorder and Inorder Traversal
Medium

5175

131

Add to List

Share
Given two integer arrays preorder and inorder where preorder is the preorder traversal of a binary tree and inorder is the inorder traversal of the same tree, construct and return the binary tree.

 

Example 1:


Input: preorder = [3,9,20,15,7], inorder = [9,3,15,20,7]
Output: [3,9,20,null,null,15,7]
Example 2:

Input: preorder = [-1], inorder = [-1]
Output: [-1]
 

Constraints:

1 <= preorder.length <= 3000
inorder.length == preorder.length
-3000 <= preorder[i], inorder[i] <= 3000
preorder and inorder consist of unique values.
Each value of inorder also appears in preorder.
preorder is guaranteed to be the preorder traversal of the tree.
inorder is guaranteed to be the inorder traversal of the tree.	


*/




// Definition for a binary tree node.
 function TreeNode(val, left, right) {
     this.val = (val===undefined ? 0 : val)
     this.left = (left===undefined ? null : left)
     this.right = (right===undefined ? null : right)
}
 
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var pos = 0;
var map;
var buildTree = function(preorder, inorder) {
map = {};
pos = 0;
for(var i=0; i<inorder.length;i++){
		map[inorder[i]] = i;
	}
	var root = makeTree(0,inorder.length,preorder,inorder);
	return root;
	
}
function makeTree(left,right,preorder,inorder){
	if(left>right)
		return null;
	if(pos === preorder.length)
		return null;
	var node = new TreeNode(preorder[pos++]);
	var i = map[node.val];
	var l = makeTree(left,i-1,preorder,inorder);
	var r = makeTree(i+1,right,preorder,inorder);
	node.left = l;
	node.right = r;
	return node;
}

console.log(buildTree(
//[1,2,3],
//[3,2,1]
//[1,2,3],
//[2,3,1]
//[3,9,20,15,7],
//[9,3,15,20,7]

[-1],
[-1]

))
