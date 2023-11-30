function solution(nums) {
    var answer = 0;

   const isPrimeNumber = (num) => {
    for (let i=2; i < num; i++) {
        if (num % i === 0) return false
    }
    return num > 1;
    }
    
    
    // [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.
    nums.sort((a,b) => a-b);
    // console.log(nums);
    
    for (let i=0; i<nums.length - 2; i++) {
        for (let j=i+1; j<nums.length - 1; j++) {
            for (let k=j+1; k<nums.length; k++) {
                const sum = nums[i] + nums[j] + nums[k];
                if (isPrimeNumber(sum)) answer++;
            }
        }
    }

    return answer;
}