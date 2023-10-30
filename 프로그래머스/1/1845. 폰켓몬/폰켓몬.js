function solution(nums) {
    const userSelectNum = Math.floor(nums.length / 2);
    const pocketSet = new Set(nums);

    
    if (pocketSet.size > userSelectNum) {
        return userSelectNum
    }
    return pocketSet.size
}