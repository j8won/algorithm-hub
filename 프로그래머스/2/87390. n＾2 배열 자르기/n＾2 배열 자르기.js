function solution(n, left, right) {
    let answer = [];
    
    for (let i = left; i <= right; i++) {
        const left = i % n;
        const right = Math.floor(i / n);
        
        answer.push(Math.max(left, right) + 1);
    }

    return answer;
}