
// Definition for a binary tree node.
 function TreeNode(val, left, right) {
     this.val = (val===undefined ? 0 : val)
     this.left = (left===undefined ? null : left)
     this.right = (right===undefined ? null : right)
 }

/**
 * @param {TreeNode} root
 * @param {number[]} to_delete
 * @return {TreeNode[]}
 */
var delNodes = function(root, to_delete) {
    var map = {};
    for(var i=0; i<to_delete.length;i++){
    	map[to_delete[i]] = true;
    }
    var result = [];
    deleteNodes(root,map,result);
    return result;
};

function deleteNodes(root,map,result,parent){
	if(root === null)
		return;
	
	var left = root.left;
	var right = root.right;
	if(left && map[left.val]){
		root.left = null;
	}
	if(right && map[right.val])
		root.right = null;
	
	if(!map[root.val] && !parent)
		result.push(root);
	if(map[root.val]){
		deleteNodes(left,map,result,false);
		deleteNodes(right,map,result,false);
	}
	else{
		deleteNodes(left,map,result,true);
		deleteNodes(right,map,result,true);
	}
	
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
[1,2,4,null,3]
     );


console.log(delNodes(
root,[3]

))

















