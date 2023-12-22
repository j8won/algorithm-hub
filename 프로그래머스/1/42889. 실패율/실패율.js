function solution(N, stages) {
    let answer = [];
    
    stages.sort((x, y) => x - y);
    
    for (let i = N; i>=1; i--) {
        const fail = stages.filter(x => x === i).length;
        const success = stages.filter(x => x > i).length;
        
        const failureRate = fail / success;
        answer.push({stageNumber: i, rate: failureRate})
    }
    
    return answer.sort((a,b) => {
        return b.rate - a.rate || a.stageNumber - b.stageNumber
    }).map(x => x.stageNumber);
}