/**
 * @param {number[]} nums
 */
function Treenode (lb,up){
    this.left= null,this.right = null, this.sum = Infinity;
    this.ub = up, this.lb = lb;
}
function makeTree(arr,lb,ub){
    var node = new Treenode(lb,ub);
    
    if(lb === ub){
        node.sum = arr[lb];
        return node;
    }
    var sum = 0
    for(var i=lb;i<=ub;i++){
        sum+=arr[i];
    }
    node.sum = sum;

    var mid = Math.floor((lb+ub)/2);
    node.left = makeTree(arr,lb,mid);
    node.right = makeTree(arr,mid+1,ub);
    return node;
}
function getSum(root,lb,ub){
    if(root.lb === root.ub)
        return root.sum

    if(lb === root.lb && ub === root.ub)
        return root.sum;

    else if(root.left && ub<=root.left.ub){
        return getSum(root.left,lb,ub);
    }
    else if(root.right && lb>=root.right.lb){
        return getSum(root.right,lb,ub);
    }
    sum = getSum(root.left,lb,root.left.ub) + getSum(root.right,root.right.lb,ub)
    return sum;
}
function update(root,val,index){
    
    if(root.lb === root.ub && root.lb === index){
        root.sum = val;
        return val;
    }
    
    var sum = 0;
    if(index<=root.left.ub){
        sum = update(root.left,val,index)
        root.sum = sum + root.right.sum;
    }
    else {
        sum = update(root.right,val,index)
        root.sum = sum + root.left.sum;
    }
    return root.sum;

}
 var NumArray = function(nums) {
    this.arr = nums;
    this.root = makeTree(nums,0,nums.length-1);
    return null;
};

/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
NumArray.prototype.update = function(index, val) {
    update(this.root,val,index);
    return null;
};

/** 
 * @param {number} left 
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function(left, right) {
    /*var sum = 0;
    for(var i=left;i<=right;i++){
        sum+=this.arr[i];
    }*/
    var sum = getSum(this.root,left,right);
    return sum;
};
var a = new NumArray([9,-8]);
//a.sumRange(0, 2);
a.update(0,3);
console.log(a.sumRange(1, 1))
console.log(a.sumRange(0, 1))
a.update(0,-3);
console.log(a.sumRange(0, 1))

/** 
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * obj.update(index,val)
 * var param_2 = obj.sumRange(left,right)
 */