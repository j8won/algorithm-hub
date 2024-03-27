function solution(brown, yellow) {
    var answer = [];
    
    
    for (let r=3; r < brown; r++) {
        let c = brown / 2 - r + 2;
        
        if (r*c === brown+yellow) return [c,r]
    }
    
    
    // return answer;
}