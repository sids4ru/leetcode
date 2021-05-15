
function MinHeap(){
    var heap = [];
    this.size = function(){
        return heap.length;
    }
    function minHeapify(i){
        var n = heap.length;
        if(i >= n)
            return;
        var l = 2*i+1;
        var r = 2*i+2;
        var min = i;
        if(l<n && heap[min] > heap[l])
            min = l;
        if(r<n && heap[min] > heap[r])
            min = r;
        [heap[i],heap[min]] = [heap[min],heap[i]];
        minHeapify(min);
    }
    this.put =function(val){
        heap.push(val);
        var i = heap.length -1;
        while(i>=0){
            var p = Math.floor((i-1)/2);
            if(heap[p]>heap[i]){
                [heap[p],heap[i]] = [heap[i],heap[p]];
                i = p;
            }
            else break;
        }
    }
    this.pop = function(){
        var min = heap[0];
        var n = heap.length-1;
        [heap[0],heap[n]] = [heap[n],heap[0]];
        heap.pop();
        minHeapify(0,heap);
    }
    this.peek = function(){
        return heap[0];
    }
}

function MaxHeap(){
    var heap = [];
    this.size = function(){
        return heap.length;
    }
    function maxHeapify(i){
        var n = heap.length;
        if(i >= n)
            return;
        var l = 2*i+1;
        var r = 2*i+2;
        var max = i;
        if(l<n && heap[max] < heap[l])
            max = l;
        if(r<n && heap[max] < heap[r])
            max = r;
        [heap[i],heap[max]] = [heap[max],heap[i]];
        maxHeapify(max);
    }
    this.put =function(val){
        heap.push(val);
        var i = heap.length -1;
        while(i>=0){
            var p = Math.floor((i-1)/2);
            if(heap[p]<heap[i]){
                [heap[p],heap[i]] = [heap[i],heap[p]];
                i = p;
            }
            else break;
        }
    }
    this.pop = function(){
        var max = heap[0];
        var n = heap.length-1;
        [heap[0],heap[n]] = [heap[n],heap[0]];
        heap.pop();
        minHeapify(0);
        return max;
    }
    this.peek = function(){
        return heap[0];
    }
}
/**
 * initialize your data structure here.
 */
 var MedianFinder = function() {
    this.minheap = new MinHeap();
    this.maxheap = new MaxHeap();
    
};

/** 
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function(num) {
    this.minheap.put(num);
    while(this.minheap.size()>this.maxheap.size()){
        this.maxheap.put(this.minheap.pop())
    }
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function() {
    if((this.minheap.size()+this.maxheap.size())%2 === 0){
        return Math.trunc((this.minheap.peek()+this.maxheap.peek())/2);
    }
    else return Math.max(this.minheap.peek(),this.maxheap.peek());
};

/** 
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */

 function run(commands, values){
    if(commands[0] != "MedianFinder")
        return null;
    finder = new MedianFinder();
    var result = [null]
    for(var i=1;i<commands.length; i++){
        if(commands[i] === "addNum")
            result.push(finder.addNum(values[i][0]));
        if(commands[i] === "findMedian")
            result.push(finder.findMedian(values[i]));
        
     }
     return result;
 }
 console.log(run(
    ["MedianFinder","addNum","findMedian","addNum","findMedian","addNum","findMedian","addNum","findMedian","addNum","findMedian","addNum","findMedian","addNum","findMedian","addNum","findMedian","addNum","findMedian","addNum","findMedian","addNum","findMedian"],
    [[],[6],[],[10],[],[2],[],[6],[],[5],[],[0],[],[6],[],[3],[],[1],[],[0],[],[0],[]]
 ));
 console.log([null,null,6.00000,null,8.00000,null,6.00000,null,6.00000,null,6.00000,null,5.50000,null,6.00000,null,5.50000,null,5.00000,null,4.00000,null,3.00000]);