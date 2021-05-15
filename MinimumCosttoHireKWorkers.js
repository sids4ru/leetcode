/**
 * 
 * 
 * https://leetcode.com/problems/minimum-cost-to-hire-k-workers/
 * Minimum Cost to Hire K Workers
 * There are N workers.  The i-th worker has a quality[i] and a minimum wage expectation wage[i].

Now we want to hire exactly K workers to form a paid group.  When hiring a group of K workers, we must pay them according to the following rules:

Every worker in the paid group should be paid in the ratio of their quality compared to other workers in the paid group.
Every worker in the paid group must be paid at least their minimum wage expectation.
Return the least amount of money needed to form a paid group satisfying the above conditions.

 

Example 1:

Input: quality = [10,20,5], wage = [70,50,30], K = 2
Output: 105.00000
Explanation: We pay 70 to 0-th worker and 35 to 2-th worker.
Example 2:

Input: quality = [3,1,10,10,1], wage = [4,8,2,2,7], K = 3
Output: 30.66667
Explanation: We pay 4 to 0-th worker, 13.33333 to 2-th and 3-th workers seperately. 
 

Note:

1 <= K <= N <= 10000, where N = quality.length = wage.length
1 <= quality[i] <= 10000
1 <= wage[i] <= 10000
Answers within 10^-5 of the correct answer will be considered correct.
 /**
 * @param {number[]} quality
 * @param {number[]} wage
 * @param {number} K
 * @return {number}
 */

var mincostToHireWorkers = function(quality, wage, K) {
    for(var i=0;i<quality.length;i++){
        var ratio = wage[i]/quality[i];
        
    }
};
class minHeap {
    constructor(length) {
        var heap = new Array(length);
        heap.fill(Infinity);
        var size = -1;
        this.push = new function (val) {

            heap[++size] = val;
            heapefi();
            if (size >= length)
                size--;

        };
        function heapefi() {

            while (true) {
                var parent = Math.floor(size / 2);
                if (heap[parent] > heap[size])
                    [heap[parent], heap[size]] = [heap[size], heap[parent]];
                if (parent === 0)
                    break;
            }
        }
        this.pop = function () {
            if (size < 0)
                return Infinity;
            if (size === 0) {
                size--;
                return heap[0];
            }
            var min = heap[0];
            heap[0] = heap[size - 1];
            size--;
            minHeapifi(0);
        };
        this.top = function () {
            if (size < 0)
                return 0;
            return heap[0];
        };
        function minHeapifi(i) {
            if (i >= size)
                return;
            var left = 2 * i + 1;
            var right = 2 * i + 2;
            var smallest = i;

            if (l < size && heap[smallest] > heap[l]) {
                smallest = l;
            }
            if (r < size && heap[smallest] > heap[r]) {
                smallest = r;
            }
            if (smallest === i)
                return;
            [heap[smallest], heap[i]] = [heap[i], heap[smallest]];
            minHeapifi(smallest);
        }
    }
}
