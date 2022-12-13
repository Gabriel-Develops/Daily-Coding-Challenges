// 26. Remove Duplicates from Sorted Array

const removeDuplicates = nums => {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === nums[i + 1]) {
            nums.splice(i, 1)
            i -= 1
        }
    }
    return nums.length
}



// 771. Jewels and Stones

const numJewelsInStones = (jewels, stones) => {
    let sum = 0
    for (let stone of stones) {
        if (jewels.includes(stone))
            sum++
    }
    return sum
};



// 217. Contains Duplicate

var containsDuplicate = function(nums) {
    return nums.some(x => nums.indexOf(x) !== nums.lastIndexOf(x))
};



// 169. Majority Element

var majorityElement = function(nums) {
    let numMap = new Map()
    for (let num of nums) {
        numMap.set(num, numMap.get(num) + 1 || 1)
    }
    for (let [num, count] of numMap) {
        if (count > nums.length / 2)
            return num
    }
};

// We can use a reduce method as we simplifying the array into a single element, a Map

var majorityElement = function(nums) {
    const numMap = nums.reduce((numMap, num) => numMap.set(num, numMap.get(num) + 1 || 1), new Map())
    for (const [num, count] of numMap) {
        if (count > nums.length / 2)
            return num
    }
};