
 //Definition for a binary tree node.
 function TreeNode(val, left, right) {
     this.val = (val===undefined ? 0 : val)
     this.left = (left===undefined ? null : left)
     this.right = (right===undefined ? null : right)
 }

/**
 * @param {TreeNode} root
 * @return {number}
 */
var findSecondMinimumValue = function(root) {
	var set = new Set();
	recurse(root,set);
	var arr = Array.from(set).sort(function(a,b){return a-b} );
	if(arr.length>=2)
		return arr[1];
	else return -1;
};
function recurse(root,set){
	if(root === null)
		return;
	set.add(root.val);
	recurse(root.left,set);
	recurse(root.right,set);
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
    [1,1,3,1,1,3,4,3,1,1,1,3,8,4,8,3,3,1,6,2,1]
     );
 console.log(findSecondMinimumValue(root));
