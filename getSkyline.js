/**
 * https://leetcode.com/problems/the-skyline-problem/
 * https://www.youtube.com/watch?v=GSBLe8cKu0s
 * 
 * Easier solution
 * https://www.youtube.com/watch?v=mrqLYF362GU
 * 
 * 218. The Skyline Problem
Hard

2838

158

Add to List

Share
A city's skyline is the outer contour of the silhouette formed by all the buildings in that city when viewed from a distance. Given the locations and heights of all the buildings, return the skyline formed by these buildings collectively.

The geometric information of each building is given in the array buildings where buildings[i] = [lefti, righti, heighti]:

lefti is the x coordinate of the left edge of the ith building.
righti is the x coordinate of the right edge of the ith building.
heighti is the height of the ith building.
You may assume all buildings are perfect rectangles grounded on an absolutely flat surface at height 0.

The skyline should be represented as a list of "key points" sorted by their x-coordinate in the form [[x1,y1],[x2,y2],...]. Each key point is the left endpoint of some horizontal segment in the skyline except the last point in the list, which always has a y-coordinate 0 and is used to mark the skyline's termination where the rightmost building ends. Any ground between the leftmost and rightmost buildings should be part of the skyline's contour.

Note: There must be no consecutive horizontal lines of equal height in the output skyline. For instance, [...,[2 3],[4 5],[7 5],[11 5],[12 7],...] is not acceptable; the three lines of height 5 should be merged into one in the final output as such: [...,[2 3],[4 5],[12 7],...]

 

Example 1:


Input: buildings = [[2,9,10],[3,7,15],[5,12,12],[15,20,10],[19,24,8]]
Output: [[2,10],[3,15],[7,12],[12,0],[15,10],[20,8],[24,0]]
Explanation:
Figure A shows the buildings of the input.
Figure B shows the skyline formed by those buildings. The red points in figure B represent the key points in the output list.
Example 2:

Input: buildings = [[0,2,3],[2,5,3]]
Output: [[0,3],[5,0]]
 

Constraints:

1 <= buildings.length <= 104
0 <= lefti < righti <= 231 - 1
1 <= heighti <= 231 - 1
buildings is sorted by lefti in non-decreasing order.
 * 
 */

/**
 * Problem: https://leetcode.com/problems/the-skyline-problem/
 * Author: Dung Nguyen Tien (Chris)
 * Implement following idea of Tushar Roy
 * Reference: https://www.youtube.com/watch?v=GSBLe8cKu0s
 * @param {number[][]} buildings
 * @return {number[][]}
 */
 var getSkyline = function(buildings) {
    //determine the start point and end point of a building, also mark it as start or end. It is sorted by rule 
    var buildingPoints = getBuildingPoints(buildings); 
    console.log(buildingPoints);
    var res = [];
    var queue = [0];
    var max = 0;
    
    for (var point of buildingPoints) {
        // pick each point: if start => push height to queue, end => remove height from queue. the queue is increasing
        if (point.isStart) {
            // start => push height to queue, find the index by binarySearch
            var index = binarySearch(queue, point.height);
            queue.splice(index, 0, point.height);
        }
        else {
            // remove height from queue
            var index = queue.indexOf(point.height);
            queue.splice(index, 1);
        }
        
        // if the push or remove changes the maxHeight, mean it moves to another block, push that point (x, maxCurrentHeight) to res
        var currentMax = queue[queue.length - 1];
        if (max != currentMax) {
            max = currentMax;
            res.push([point.x, max]);
        }
    }
    
    return res;
};

function binarySearch(arr, target) {
    var left = 0;
    var right = arr.length - 1;
    var mid = 0;
    
    while(left < right) {
        mid = Math.floor(left + (right - left) / 2);
        
        if (arr[mid] < target) left = mid + 1;
        else right = mid;
    }
    
    if (arr[left] < target) return ++left;
    return left;
}

function getBuildingPoints(buildings) {
    var buildingPoints = [];
    for (var building of buildings) {
        var start = {};
        start.x = building[0];
        start.height = building[2];
        start.isStart = true;
        buildingPoints.push(start);
        
        var end = {};
        end.x = building[1];
        end.height = building[2];
        buildingPoints.push(end);
        end.isStart = false;
    }
    
    buildingPoints.sort(compPareBuildingPoint);
    
    return buildingPoints;
}

function compPareBuildingPoint(a, b) {
    //first compare by x.
    if (a.x != b.x) return a.x - b.x;
    else {
        //If they are same then use this logic
        //if two starts are compared then higher height building should be picked first
        //if two ends are compared then lower height building should be picked first
        //if one start and end is compared then start should appear before end
        return (a.isStart ? -a.height : a.height) - (b.isStart ? -b.height : b.height);
    }
}


/**
 * 
 * * Easier solution
 * https://www.youtube.com/watch?v=mrqLYF362GU
 */
var getSkyline = function(buildings) {
    // map to get max current height
    let map = new Map();
    let heights = [];
    let res = [];
    
    for(let i=0; i<buildings.length; i++) {
        const cur = buildings[i];
        heights.push([cur[0], -cur[2]]);
        heights.push([cur[1], cur[2]]);
    }
    heights.sort((a,b) => {
        if(a[0] !== b[0])   return a[0]-b[0];
        return a[1]-b[1];
    });
    
    map.set(0, 1);
    let prev = 0; 
    
    for(let i=0; i<heights.length; i++) {
        let h = heights[i];
        if(h[1] < 0) {  // start position
            if(map.has(-h[1]))  map.set(-h[1], map.get(-h[1])+1)
            else    map.set(-h[1], 1);
        } else { // end position
            if(map.get(h[1]) > 1)   map.set(h[1], map.get(h[1])-1);
            else    map.delete(h[1]);
        }
            
        let maxHeight = 0;
        for(const [key, value] of map) {
            maxHeight = Math.max(maxHeight, key);
        }
            
        if(prev !== maxHeight) {
            res.push([h[0], maxHeight]);
            prev = maxHeight;
        }
    }
    
    return res;
};

