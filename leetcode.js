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