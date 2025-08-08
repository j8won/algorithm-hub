function solution(answers) {
    var answer = [];
    
    const players = [
        [1, 2, 3, 4, 5],
        [2, 1, 2, 3, 2, 4, 2, 5],
        [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]
    ]
    
    
    let score = [0,0,0];
    
    for (let i=0; i<answers.length; i++) {
        for (let j=0; j<players.length; j++) {
            const n = i % players[j].length 
            if (answers[i] === players[j][n]) {
                score[j]++
            }
            
        }
    }
    
    
    const maxScore = Math.max(...score)
    
    return score.map((s, i) => {
        if (s === maxScore) return i+1
    }).filter(Boolean);
}