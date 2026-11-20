class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const numbers  = new Set();

        nums.forEach((num)=>{
            numbers.add(num);
        })
        if(nums.length==numbers.size)
            return false;
        else
            return true;
    }
}
