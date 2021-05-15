/***
 * 
 * https://leetcode.com/problems/my-calendar-i/
 * 
 * 729. My Calendar I
Medium

1048

45

Add to List

Share
Implement a MyCalendar class to store your events. A new event can be added if adding the event will not cause a double booking.

Your class will have the method, book(int start, int end). Formally, this represents a booking on the half open interval [start, end), the range of real numbers x such that start <= x < end.

A double booking happens when two events have some non-empty intersection (ie., there is some time that is common to both events.)

For each call to the method MyCalendar.book, return true if the event can be added to the calendar successfully without causing a double booking. Otherwise, return false and do not add the event to the calendar.

Your class will be called like this: MyCalendar cal = new MyCalendar(); MyCalendar.book(start, end)
Example 1:

MyCalendar();
MyCalendar.book(10, 20); // returns true
MyCalendar.book(15, 25); // returns false
MyCalendar.book(20, 30); // returns true
Explanation: 
The first event can be booked.  The second can't because time 15 is already booked by another event.
The third event can be booked, as the first event takes every time less than 20, but not including 20.
 

Note:

The number of calls to MyCalendar.book per test case will be at most 1000.
In calls to MyCalendar.book(start, end), start and end are integers in the range [0, 10^9].

 * 
 * 
 */

var MyCalendar = function() {
    this.bookings = [];
};

/** 
 * @param {number} start 
 * @param {number} end
 * @return {boolean}
 */
MyCalendar.prototype.book = function(start, end) {
    end = end-1;
    if(this.bookings.length === 0){
        this.bookings.push([start,end]);
        return true;
    }
    function compare(a,b){return a[0] - b[0] }
    var booking = this.bookings[0];
    if(start<booking[0] && end < booking[0]){
        this.bookings.push([start,end]);
        this.bookings.sort(compare);
        return true;
    }
    booking = this.bookings[this.bookings.length-1];
    if(start>booking[0] && start>booking[1]){
        this.bookings.push([start,end]);
        this.bookings.sort(compare);
        return true;
    }
    var success = true;
    for(var i=0;i<this.bookings.length;i++){
        booking = this.bookings[i];
        if(start<=booking[0] && end>=booking[0]||
            start>=booking[0] && start<=booking[1]||
            start<=booking[0] && end >= booking[1]){
                success = false;
                break;
            }
    }
    if(!success)
        return false;
    this.bookings.push([start,end]);
    this.bookings.sort(compare);
    return true;
};

/** 
 * Your MyCalendar object will be instantiated and called as such:
 * var obj = new MyCalendar()
 * var param_1 = obj.book(start,end)
 */
var calendar = new MyCalendar();
console.log(calendar.book(10,20));
console.log(calendar.book(15,25));
console.log(calendar.book(20,30));