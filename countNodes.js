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
var count = 0;
var countNodes = function(root) {
    count = 0;
    traverse(root);
    return count;
};
function traverse(root){
	if(root === null)
		return;
	count++;
	traverse(root.left);
	traverse(root.right);
}
