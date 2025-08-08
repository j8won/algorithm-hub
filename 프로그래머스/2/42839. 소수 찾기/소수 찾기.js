function solution(numbers) {
    
    let answer = new Set()
    
    const numStrArr = numbers.split("")
    
    function helper2(arr, fixed) {
        if (helper(Number(fixed))) {
                answer.add(Number(fixed))
            }
        
        if (arr.length === 0) {
            return;
        }
        
        
        
        for (let i=0; i<arr.length; i++) {
            const newFixed = fixed + arr[i];
            const newArr = [...arr];
            newArr.splice(i, 1)
            
            helper2(newArr, newFixed)
            
        }
    }

    helper2(numStrArr, "")
    
    // console.log(answer)
    
    return answer.size;
}

function helper(num) {
    if (num <= 1) return false
    if (num === 2) return true
    for (let i=2; i<=Math.sqrt(num); i++){
        if (num % i === 0) return false
    }
    return true
}

