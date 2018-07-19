export default function searchInsert(nums, target) {
    if (nums.length === 0) return 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === target) {
            return i;
        }
        if (nums[i] > target && i === 0) {
            return i;
        }
        const nextIndex = i + 1;
        if (nums[i] < target
            && ((nextIndex < nums.length && target < nums[nextIndex])
            || nextIndex === nums.length)) {
            return nextIndex;
        }
    }
    return null;
}
