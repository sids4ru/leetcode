/***
 * 
 * 
 * 
 * 
 * Binary Tree Level Order Traversal
 * Given the root of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).

 

Example 1:


Input: root = [3,9,20,null,null,15,7]
Output: [[3],[9,20],[15,7]]
Example 2:

Input: root = [1]
Output: [[1]]
Example 3:

Input: root = []
Output: []
 

Constraints:

The number of nodes in the tree is in the range [0, 2000].
-1000 <= Node.val <= 1000
*/
 
 // Definition for a binary tree node.
  function TreeNode(val, left, right) {
      this.val = (val===undefined ? 0 : val)
      this.left = (left===undefined ? null : left)
      this.right = (right===undefined ? null : right)
  }
 
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if(root === null)
        return [];
    var node = root;
    var queue = [];
    queue.push([node,0])
    var result = [];
    
    result.push([]);
    while(queue.length>0){
        var top = queue.shift();
        result[top[1]].push(top[0].val);
        if(top[0].left!=null)
            queue.push([top[0].left,top[1]+1]);
        if(top[0].right!=null)
            queue.push([top[0].right,top[1]+1]);
        if(result.length < top[1]+2){    
            result.push([]);
        }
    }
    result.pop();
    return result;
};

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

var root = deserialize([3,9,20,null,null,15,7]);
console.log(levelOrder(root));