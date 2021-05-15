
//  Definition for a binary tree node.
  function TreeNode(val, left, right) {
      this.val = (val===undefined ? 0 : val)
      this.left = (left===undefined ? null : left)
      this.right = (right===undefined ? null : right)
 }
 
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
 var isSymmetric = function(root) {
    return check(root.left,root.right)
};
function check(root1,root2){
    if(root1===null && root2 === null)
        return true;
    if(root1===null || root2 === null)
        return false;
    if(root1.val!=root2.val)
        return false;
    if(!check(root1.left,root2.right))
        return false;
    if(!check(root1.right,root2.left))
        return false;
    return true;
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
    [1,2,2,3,4,4,3]
     );
 console.log(isSymmetric(root));