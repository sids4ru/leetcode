/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
//  Definition for a binary tree node.
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    var node = LCA(root,p,q);
    if(node === null)
        return null;
    return node.val;
};
function search(val,root){
    if(root === null)
        return false;
    if(root.val === val)
        return true;
    if(search(val,root.left))
        return true;
    if(search(val,root.right))  
        return true;
    return false;
}
function LCA(root,p,q){
    if(root === null)
        return null;
    if(root.val === p){
        if(search(q,root))
            return root;
    }
    if(root.val === q){
        if(search(p,root))
            return root;
    }
    
    var leftp = search(p,root.left);
    var rightp =search(p,root.right);
    var leftq = search(q,root.left);
    var rightq =search(q,root.right);

    if(leftp && leftq){
        return LCA(root.left,p,q);
    }
    else if(rightp && rightq){
        return LCA(root.right,p,q)
    }
    else if (rightp && leftq || leftp && rightq){
        return root;
    }
    return null;
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
    [3,5,1,6,2,0,8,null,null,7,4]
    //[3,5,1,6,2,0,8,null,null,7,4]
    )
console.log(lowestCommonAncestor(
    root,5,1
))