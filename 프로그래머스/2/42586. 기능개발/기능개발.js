function solution(progresses, speeds) {
    var answer = [];

    let days = [];
    
    days = progresses.map((x, i) => Math.ceil((100 - x) / speeds[i]))
    
    console.log(days)
    
    
    let left = 0;
    let right = 1;
    
    while (right < days.length) {
        if (days[left] >= days[right]) {
            right++;
            continue;
        }
        
        answer.push(right - left)
        left = right;
        right = right + 1;
    }
    
    if (left < right) {
        answer.push(right-left)
    }
    
    return answer;
}