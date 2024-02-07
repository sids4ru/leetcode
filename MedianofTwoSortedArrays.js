/**
 * Problem: https://leetcode.com/problems/median-of-two-sorted-arrays/
 * 
 * Solution video: https://www.youtube.com/watch?v=q6IEA26hvXc&t=13s
 * 
 * Median of Two Sorted Arrays:
 * Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.
 * 
 * Examples:
 * Input: nums1 = [1,3], nums2 = [2]
 * Output: 2.00000
 * Explanation: Merged array = [1,2,3], and median is 2.
 * 
 * Constraints:
 * - nums1.length == m
 * - nums2.length == n
 * - 0 <= m <= 1000
 * - 0 <= n <= 1000
 * - 1 <= m + n <= 2000
 * - -10^6 <= nums1[i], nums2[i] <= 10^6
 * - The overall run time complexity should be O(log (m+n)).
 */

/**
 * Function to find the median of two sorted arrays.
 * @param {number[]} nums1 The first sorted array.
 * @param {number[]} nums2 The second sorted array.
 * @return {number} Median of the two sorted arrays.
 */
var findMedianSortedArrays = function(A, B) {
    var m = A.length;
    var n = B.length;
    if (m > n) { // Ensuring m <= n
        [A, B] = [B, A];
        [m, n] = [n, m];
    }
    var iMin = 0, iMax = m, halfLen = Math.trunc((m + n + 1) / 2);
    // Binary search
    while (iMin <= iMax) {
        var i = Math.trunc((iMin + iMax) / 2);
        var j = halfLen - i;
        if (i < iMax && B[j - 1] > A[i]) {
            iMin = i + 1; // i is too small
        } else if (i > iMin && A[i - 1] > B[j]) {
            iMax = i - 1; // i is too big
        } else {
            var maxLeft = 0;
            if (i == 0) {
                maxLeft = B[j - 1];
            } else if (j == 0) {
                maxLeft = A[i - 1];
            } else {
                maxLeft = Math.max(A[i - 1], B[j - 1]);
            }
            if ((m + n) % 2 == 1) {
                return maxLeft;
            }
            var minRight = 0;
            if (i == m) {
                minRight = B[j];
            } else if (j == n) {
                minRight = A[i];
            } else {
                minRight = Math.min(B[j], A[i]);
            }
            return (maxLeft + minRight) / 2.0;
        }
    }
    return 0.0;
};

// Additional test cases
console.log(findMedianSortedArrays([1, 3], [2, 4])); // Expected output: 2.5
console.log(findMedianSortedArrays([0, 0], [0, 0])); // Expected output: 0
console.log(findMedianSortedArrays([], [1])); // Expected output: 1
console.log(findMedianSortedArrays([2], [])); // Expected output: 2
