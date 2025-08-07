function solution(arr)
{
    let answer = [];
    
    let left=0, right=0;
    
    while(left<arr.length){
        if (arr[left] !== arr[right]) {
            answer.push(arr[left])
            left = right;
            right = right;
            continue;
        }
        
        right++
        
    }
    
    return answer
    
}