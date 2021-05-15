
//  Definition for a binary tree node.
  function TreeNode(val, left, right) {
      this.val = (val===undefined ? 0 : val)
      this.left = (left===undefined ? null : left)
      this.right = (right===undefined ? null : right)
 }
 
/**
 * @param {TreeNode} root
 * @return {number}
 */
 var maxLevelSum = function(root) {
    if(root === null)
        return 0;
    var queue = [];
    queue.push([root,1]);
    var levelSum = {};
    while(queue.length != 0){
        var top = queue.shift();
        var node = top[0];
        var level = top[1];
        if(node === null)
            continue;
        if (!levelSum[level]) levelSum[level] = 0;
        levelSum[level] += node.val;
        queue.push([node.left,level+1]);
        queue.push([node.right,level+1]);
    }
    var max = -Infinity;
    var level = 0;
    for(key in levelSum){
        if(levelSum[key] > max){
            max = levelSum[key];
            level = key;
        }
    }
    return level;
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

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
 var root = deserialize(
    [1,7,0,7,-8,null,null]
     );
 console.log(maxLevelSum(root));