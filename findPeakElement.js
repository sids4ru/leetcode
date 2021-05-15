/**
 * @param {number[]} nums
 * @return {number}
 */
 var findPeakElement = function(nums) {
    if(nums.length === 0)
        return 0;
    if(nums.length === 1)
        return 0;
    if(nums.length === 2){
        if(nums[0]> nums[1])
            return 0;
        else return 1;
    }

    for(var i=0; i<nums.length;i++){
        if(i===0)
        {
            if(nums[i] > nums[i+1])
                return i;
        }
        else if(i=== nums.length-1){
            if(nums[i] > nums[i-1])
                return i; 
        }
        else if(nums[i] > nums[i-1] && nums[i] > nums[i+1])
            return i;
    }
    return -1;
};