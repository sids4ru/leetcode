/*

https://leetcode.com/problems/my-calendar-ii/

731. My Calendar II
Medium

814

105

Add to List

Share
Implement a MyCalendarTwo class to store your events. A new event can be added if adding the event will not cause a triple booking.

Your class will have one method, book(int start, int end). Formally, this represents a booking on the half open interval [start, end), the range of real numbers x such that start <= x < end.

A triple booking happens when three events have some non-empty intersection (ie., there is some time that is common to all 3 events.)

For each call to the method MyCalendar.book, return true if the event can be added to the calendar successfully without causing a triple booking. Otherwise, return false and do not add the event to the calendar.

Your class will be called like this: MyCalendar cal = new MyCalendar(); MyCalendar.book(start, end)
Example 1:

MyCalendar();
MyCalendar.book(10, 20); // returns true
MyCalendar.book(50, 60); // returns true
MyCalendar.book(10, 40); // returns true
MyCalendar.book(5, 15); // returns false
MyCalendar.book(5, 10); // returns true
MyCalendar.book(25, 55); // returns true
Explanation: 
The first two events can be booked.  The third event can be double booked.
The fourth event (5, 15) can't be booked, because it would result in a triple booking.
The fifth event (5, 10) can be booked, as it does not use time 10 which is already double booked.
The sixth event (25, 55) can be booked, as the time in [25, 40) will be double booked with the third event;
the time [40, 50) will be single booked, and the time [50, 55) will be double booked with the second event.
 

Note:

The number of calls to MyCalendar.book per test case will be at most 1000.
In calls to MyCalendar.book(start, end), start and end are integers in the range [0, 10^9].

*/



var MyCalendarTwo = function() {
    this.arr = [];
};

/** 
 * @param {number} start 
 * @param {number} end
 * @return {boolean}
 */
MyCalendarTwo.prototype.book = function(start, end) {
	var count = 1;
	var end = end -1;
	var arr = this.arr;
	var result = [];
	if(arr.length === 0)
	{
		this.arr.push([start,end,1]);
		return true;
	}
	var added = false;
	/*if(start < arr[0][0] && end < arr[0][0]){
		result.push([start,end,1]);
		added = true;
	}*/
	
	for(var i=0; i<arr.length; i++){
		var curr = arr[i];
		if(start <= curr[0] && end >= curr[0] || 
			start >= curr[0] && start <= curr[1]){
			if(curr[2]<2){
				if(start<curr[0]){
					result.push([start,curr[0]-1,1]);
					start = curr[0];
				}
				else if(start > curr[0]){
					result.push([curr[0],start-1,1]);
				}
				if(end === curr[1]){
					result.push([start,end,curr[2]+1]);
					added = true;
				}
				else if(end < curr[1]){
					result.push([start,end,curr[2]+1]);
					result.push([end+1,curr[1],1]);
					added = true;
				}
				else if(end>curr[1]){
					result.push([start,curr[1],curr[2]+1]);
					start = curr[1]+1;
					//count = curr[2]+1;
				}
				else added = true;
			}
			else return false;
		}
		/*else if(start >= curr[0] && start <= curr[1]){			
			if(curr[2]<2){
				result.push([curr[0],curr[1],curr[2]+1]);
				if(end>curr[1]){
					start = curr[1]+1;
					//count = curr[2]+1;
				} else added = true;
			}
			else return false;
		}*/
		else if(start < curr[0] && end<curr[1]){
			if(!added){
				result.push([start,end,count]);
				added = true;
			}
			result.push([curr[0],curr[1],curr[2]]);
		}
		else if(start > curr[0] && start > curr[1]){
			result.push([curr[0],curr[1],curr[2]]);
		}
	}
	var curr = arr[arr.length-1];
	if(start>curr[0] && end>curr[0]){
		result.push([start,end,1]);
	}
	this.arr = [];
	this.arr = [...result];
	return true;
};

/** 
 * Your MyCalendarTwo object will be instantiated and called as such:
 * var obj = new MyCalendarTwo()
 * var param_1 = obj.book(start,end)
 */
 
var MyCalendar = new MyCalendarTwo();
/*
console.log(MyCalendar.book(10, 20)); // returns true
console.log(MyCalendar.book(50, 60)); // returns true
console.log(MyCalendar.book(10, 40)); // returns true
console.log(MyCalendar.book(5, 15)); // returns false
console.log(MyCalendar.book(5, 10)); // returns true
console.log(MyCalendar.book(25, 55)); // returns true = new MyCalendarTwo();
*/
function run(arr,val){
	var MyCalendar = null;
	var result = [];
	for(var i=0; i<arr.length;i++){
		if(arr[i] === "MyCalendarTwo"){
			MyCalendar = new MyCalendarTwo();
			result.push(null);
		}
		else if(arr[i] === "book"){
			result.push(MyCalendar.book(val[i][0],val[i][1]));
		}
	}
	return result;
}
console.log(run(
//["MyCalendarTwo","book","book","book","book","book","book","book","book","book","book"]
//,[[],[24,40],[43,50],[27,43],[5,21],[30,40],[14,29],[3,19],[3,14],[25,39],[6,19]]

//["MyCalendarTwo","book","book","book","book","book","book"]
//,[[],[10,20],[50,60],[10,40],[5,15],[5,10],[25,55]]
//["MyCalendarTwo","book","book","book","book","book","book","book","book","book","book","book","book","book","book","book","book","book","book","book","book","book","book","book","book","book","book","book","book","book","book"]
//,[[],[47,50],[1,10],[27,36],[40,47],[20,27],[15,23],[10,18],[27,36],[17,25],[8,17],[24,33],[23,28],[21,27],[47,50],[14,21],[26,32],[16,21],[2,7],[24,33],[6,13],[44,50],[33,39],[30,36],[6,15],[21,27],[49,50],[38,45],[4,12],[46,50],[13,21]]
["MyCalendarTwo","book","book","book","book","book","book","book","book","book","book","book","book","book","book","book","book","book","book","book","book","book","book","book","book","book","book","book","book","book","book"]
,[[],[5,12],[42,50],[4,9],[33,41],[2,7],[16,25],[7,16],[6,11],[13,18],[38,43],[49,50],[6,15],[5,13],[35,42],[19,24],[46,50],[39,44],[28,36],[28,37],[20,29],[41,49],[11,19],[41,46],[28,37],[17,23],[22,31],[4,10],[31,40],[4,12],[19,26]]
));
//console.log(
//[null,true,true,true,true,false,false,true,false,false,false]);
//console.log([null,true,true,true,true,true,true,true,true,false,false,false,false,false,true,false,false,false,true,false,false,false,false,false,false,false,false,true,false,false,false])
console.log([null,true,true,true,true,false,true,false,false,true,true,true,false,false,false,true,false,false,true,false,false,false,false,false,false,false,false,false,false,false,false])
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
