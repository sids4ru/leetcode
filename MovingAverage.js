/**
 * Initialize your data structure here.
 * @param {number} size
 */
 var MovingAverage = function(size) {
    this.arr = new Array(size);
    this.arr.fill(0);
    this.count = 0;
    this.size = size;
    this.fill = false;
};

/** 
 * @param {number} val
 * @return {number}
 */
MovingAverage.prototype.next = function(val) {
    this.arr[this.count++] = val;
    if(this.count>=this.size){
        this.count = 0;
        this.fill = true;
    }
    var sum = Math.sum(this.arr);
    if(this.fill)
        return sum/this.size;
    else 
        return sum/this.count
};

/** 
 * Your MovingAverage object will be instantiated and called as such:
 * var obj = new MovingAverage(size)
 * var param_1 = obj.next(val)
 */