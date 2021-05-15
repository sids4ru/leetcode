
 // Definition for a binary tree node.
  function TreeNode(val, left, right) {
      this.val = (val===undefined ? 0 : val)
      this.left = (left===undefined ? null : left)
      this.right = (right===undefined ? null : right)
  }
 
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
 var balanceBST = function(root) {
    var arr = [];
    traverse(root,arr);
    arr.sort(function(a,b) {
        return a.val - b.val;
    });
    
    return makeBST(0,arr.length-1,arr);
};

function traverse(root,arr){
    if(root === null)
        return;
    arr.push(root);
    traverse(root.left,arr);
    traverse(root.right,arr);

}
function makeBST(left,right, arr){
    if(left>right)
        return null;
    var mid = Math.floor((left+right)/2);
    var root = arr[mid];
    root.left = makeBST(left,mid-1,arr);
    root.right = makeBST(mid+1,right,arr);
    return root;
    /*if(i>=arr.length-1)
        return;
    var left = 2*i+1;
    var right = 2*i+2;
    var root = arr[i];
    if(left<arr.length)
        root.left = arr[left];
    else
        root.left = null;
    if(right<arr.length)
        root.right = arr[right];
    else 
        root.right = null;
    makeBST(left,arr);
    makeBST(right,arr);*/
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
var serialize = function(root) {
    
    var result = [];
    if(root === null)
        return result;
    traverse(root,result);
    return result;
};
/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
 var root = deserialize(
    [1,null,2,null,3,null,4,null,null]
     );
root = balanceBST(root);
 console.log(serialize(root));