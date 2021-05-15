/**
 * 
 * https://leetcode.com/problems/find-median-from-data-stream/
 * Find Median from Data Stream
 * The median is the middle value in an ordered integer list. If the size of the list is even, there is no middle value and the median is the mean of the two middle values.

For example, for arr = [2,3,4], the median is 3.
For example, for arr = [2,3], the median is (2 + 3) / 2 = 2.5.
Implement the MedianFinder class:

MedianFinder() initializes the MedianFinder object.
void addNum(int num) adds the integer num from the data stream to the data structure.
double findMedian() returns the median of all elements so far. Answers within 10-5 of the actual answer will be accepted.
 

Example 1:

Input
["MedianFinder", "addNum", "addNum", "findMedian", "addNum", "findMedian"]
[[], [1], [2], [], [3], []]
Output
[null, null, null, 1.5, null, 2.0]

Explanation
MedianFinder medianFinder = new MedianFinder();
medianFinder.addNum(1);    // arr = [1]
medianFinder.addNum(2);    // arr = [1, 2]
medianFinder.findMedian(); // return 1.5 (i.e., (1 + 2) / 2)
medianFinder.addNum(3);    // arr[1, 2, 3]
medianFinder.findMedian(); // return 2.0
 

Constraints:

-105 <= num <= 105
There will be at least one element in the data structure before calling findMedian.
At most 5 * 104 calls will be made to addNum and findMedian.
 

Follow up:

If all integer numbers from the stream are in the range [0, 100], how would you optimize your solution?
If 99% of all integer numbers from the stream are in the range [0, 100], how would you optimize your solution?
Accepted
282,059
Submissions
597,604/**
 * initialize your data structure here.
 */
var minheap,maxheap;
var MedianFinder = function() {
    minheap = [];
    maxheap = [];   
    
};

/** 
 * @param {number} num
 * @return {void}
 */

MedianFinder.prototype.addNum = function(num) {
    function sortminheap(a,b){
        return b-a;
    }
    function sortmaxheap(a,b){
        return a-b;
    }
    minheap.push(num);
    minheap.sort(sortminheap)
    maxheap.push(minheap.pop());
    maxheap.sort(sortmaxheap);
    if(maxheap.length>minheap.length)
    {
        minheap.push(maxheap.pop());
        minheap.sort(sortminheap);
    }
    return null;
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function() {
    if((minheap.length+maxheap.length)%2 === 0){
        return (minheap[minheap.length-1] + maxheap[maxheap.length-1])/2
    }else 
        return minheap[minheap.length-1];
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