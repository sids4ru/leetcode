/**
 * https://leetcode.com/problems/median-of-two-sorted-arrays/
 * 
 * Solution video !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
 * https://www.youtube.com/watch?v=q6IEA26hvXc&t=13s
 * 
 * 
 * 
 * Median of Two Sorted Arrays
 * Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.

 

Example 1:

Input: nums1 = [1,3], nums2 = [2]
Output: 2.00000
Explanation: merged array = [1,2,3] and median is 2.
Example 2:

Input: nums1 = [1,2], nums2 = [3,4]
Output: 2.50000
Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.
Example 3:

Input: nums1 = [0,0], nums2 = [0,0]
Output: 0.00000
Example 4:

Input: nums1 = [], nums2 = [1]
Output: 1.00000
Example 5:

Input: nums1 = [2], nums2 = []
Output: 2.00000
 

Constraints:

nums1.length == m
nums2.length == n
0 <= m <= 1000
0 <= n <= 1000
1 <= m + n <= 2000
-106 <= nums1[i], nums2[i] <= 106
 
Solution video 
Follow up: The overall run time complexity should be O(log (m+n)).
*/
/* 
 
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
/**
 * ===================================================================================
 * * ===================================================================================
 * * ===================================================================================
 * * ===================== LEETCODE JAVA SOLN TRANSLATED TO JS !!!! ===============================
 * * ===================================================================================
 * * ===================================================================================
 * * ===================================================================================
 */



 var findMedianSortedArrays = function(A, B) {
    
    var m = A.length;
    var n = B.length;
    if (m > n) { // to ensure m<=n
        [A,B] = [B,A];
        [m,n] = [n,m];
    }
    //  left      right                          +1 to get good division result
    var iMin = 0, iMax = m, halfLen = Math.trunc ((m + n + 1) / 2);
    //Binary search
    //     end condition
    while (iMin <= iMax) {
        //i = mid
        var i = Math.trunc((iMin + iMax) / 2);
        //J = count in B array
        var j = halfLen - i;
        //Go right
        if (i < iMax && B[j-1] > A[i]){
            iMin = i + 1; // i is too small
        }
        //go left
        else if (i > iMin && A[i-1] > B[j]) {
            iMax = i - 1; // i is too big
        }
        
        else { // i is perfect
            var maxLeft = 0;
            //if B is completely to left of A eg B={1,2} and A={100, 200}
            if (i == 0) { 
                maxLeft = B[j-1]; 
            }
            //if B is completely to right of A eg A={1,2} and B={100, 200}
            else if (j == 0) { 
                maxLeft = A[i-1]; 
            }
            //If B and A intersect then take max value
            // so that everything will be to left of it
            else { 
                maxLeft = Math.max(A[i-1], B[j-1]); 
            }
            //if total length is odd
            if ( (m + n) % 2 == 1 ) { 
                return maxLeft; 
            }

            // if length is even take minimum value in tight array + max value 
            // in left array and divide this by 2
            var minRight = 0;
            //if B is completely to right of A eg A={1,2} and B={100, 200}
            if (i == m) { 
                minRight = B[j]; 
            }
            //if B is completely to left of A eg B={1,2} and A={100, 200}
            else if (j == n) { 
                minRight = A[i]; 
            }
            // if A and B intersect
            else { 
                minRight = Math.min(B[j], A[i]); 
            }

            return (maxLeft + minRight) / 2.0;
        }
    }
    return 0.0;
};


    /**
 * =====================================================================================
 * * ===================================================================================
 * * ===================================================================================
 * * ===================== MY SOLUTION  !!!! ===========================================
 * * ===================================================================================
 * * ===================================================================================
 * * ===================================================================================
 */


console.log(findMedianSortedArrays(
    [1,3],
    [10,20]

));
