/**
 * Kth Smallest Element in a BST
 * Given the root of a binary search tree, and an integer k, return the kth (1-indexed) smallest element in the tree.

 

Example 1:


Input: root = [3,1,4,null,2], k = 1
Output: 1
Example 2:


Input: root = [5,3,6,2,4,null,null,1], k = 3
Output: 3
 

Constraints:

The number of nodes in the tree is n.
1 <= k <= n <= 104
0 <= Node.val <= 104
 

Follow up: If the BST is modified often (i.e., we can do insert and delete operations) and you need to find the kth smallest frequently, how would you optimize?
 * */
 
 // Definition for a binary tree node.
 function TreeNode(val, left, right) {
      this.val = (val===undefined ? 0 : val)
      this.left = (left===undefined ? null : left)
      this.right = (right===undefined ? null : right)
  }
 
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
 var count = 0
 var ksmallest = Infinity;
var kthSmallest = function(root, k) {
    count = 0
    ksmallest = Infinity;
    inorder(root,k);
    if(ksmallest < Infinity)
        return ksmallest;
    else return -1;
};

function inorder(root,k){
    if(root === null)
        return;
    
    inorder(root.left,k);
    count++;
    if(count === k){
        ksmallest = root.val;
        return;
    }
    
    inorder(root.right,k);
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
function preOrder(data){
    if(!data[pos]){
        pos++;
        return null;
    }
    var node = new TreeNode(data[pos++]);
    node.left = preOrder(data);
    node.right = preOrder(data);
    return node;
}
var root = deserialize([5,3,6,2,4,null,null,1]);
console.log(kthSmallest(root,3));

