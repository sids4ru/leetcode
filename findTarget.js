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
 * @param {number} k
 * @return {boolean}
 */
 function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

 var findTarget = function(root, k) {
    if(root === null)
        return false;
    return searchSum(root,k,root);
};
function searchSum(node,k,root){
    if(node === null)
        return false;
    var next = k-root.val;
    if(search(next,root, node))
        return true;
    if(searchSum(node.left,k,root))
        return true;
    if(searchSum(node.right,k,root))
        return true;
    return false;
}
function search(val, root, curr){
    if(root === null)
        return false;
    if(root.val === val && root!=curr)
        return true;
    if(search(val, root.left,curr))
        return true;
    if (search(val, root.right,curr))
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
var root = deserialize([2,0,3,-4,1]);
console.log(findTarget(
    root,-1
))