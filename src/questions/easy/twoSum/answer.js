import { hasOwnProperty } from '../../../utils';

export default function twoSum(nums, target) {
    const indexNumsMap = {};
    if (nums.length < 2) {
        return new Error('There are not enough numbers.');
    }

    for (let index = 0; index < nums.length; index++) {
        const compliment = target - nums[index];
        if (!hasOwnProperty(indexNumsMap, compliment)) {
            indexNumsMap[nums[index]] = index;
        } else {
            return [indexNumsMap[compliment], index];
        }
    }
    return new Error('This array is using the same element twice to get the solution');
}
