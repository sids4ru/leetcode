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
function MinMax(){
			this.min = Infinity;
			this.max = -Infinity;
		}
var max = -Infinity;
var maxSumBST = function(root) {
	max = -Infinity;
    //max = Math.max(maxsum(root),max);
    maxsum(root);
	if(max < 0)
		max = 0;	
    return max;
};
function maxsum(root){
	if(root === null)
		return 0;
	
	if (checkBST(root, new MinMax())){
		return sum(root)
	}
	else{
		maxsum(root.left);
		maxsum(root.right);
		return 0;
//		return Math.max(maxsum(root.left),maxsum(root.right));
	}
}
function sum(root){
	if(root === null)
		return 0;
	var left = -Infinity;
	var right = -Infinity;
	var s = root.val;
	
	if(root.left){
		left = sum(root.left);
		s+=left;
		}
	if(root.right){
		right = sum(root.right)

		s+=right;
		}
	max = Math.max(s,max);

	return s;
}

function checkBST(root,minmax){
	if(!root){
		return true;
	}
	
	if(root.left && root.left.val >= root.val){
		return false;
	}
	if(root.right && root.right.val <=root.val){
		return false;
	}
		
	var mmL = new MinMax();
	
	var left = checkBST(root.left,mmL)
	if(!left)
		return false;
	if(mmL.max > root.val)
		return false;
	
	var mmR = new MinMax();
	var right = checkBST(root.right,mmR);
	if(!right)
		return false;

	if(mmR.min < root.val)
		return false;
	minmax.min = Math.min(mmL.min,mmR.min,root.val);
	minmax.max = Math.max(mmL.max,mmR.max,root.val);
	return true;

	/*if()
	if(root.left && root.left.val >= root.val){
		return false;
	}
	if(root.right && root.right.val <=root.val){
		return false;
		
	if(!checkBST(root.left) && checkBST(root.right);
	return 	checkBST(root.left) && checkBST(root.right);*/
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
//[-4,-2,-5]
//[1,4,3,2,4,2,5,null,null,null,null,null,null,4,6]

//[4,8,null,6,1,9,null,-5,4,null,null,null,-3,null,10]
//[9,2,3,null,2,null,null,3,null,-5,4,null,1,null,10]
//[1,null,10,-5,20]
[8,9,8,null,9,null,1,null,null,-3,5,null,-2,null,6]
     );
 console.log(maxSumBST(root));




























