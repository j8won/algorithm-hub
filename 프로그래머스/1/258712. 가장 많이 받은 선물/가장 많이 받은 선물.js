function solution(friends, gifts) {
    var answer = 0;
    
    const n = friends.length
    
    // 주고받은 선물 테이블
    let table = Array.from({length: n}, () => Array(n).fill(0))
        
    // 선물 지수
    let scores = Object.fromEntries(friends.map(f => [f, 0]));

    for (const giftInfo of gifts) {
        const [giver, taker] = giftInfo.split(" ");
        const giverIdx = friends.findIndex(x => x === giver);
        const takerIdx = friends.findIndex(x => x === taker);
        
        table[giverIdx][takerIdx]++;
        
        scores[giver]++;
        scores[taker]--;
    }
    
    // console.log(table)
    // console.log(scores)
    // 담달 받을 선물 개수
    const next = Array(n).fill(0)
    
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            const a2b = table[i][j];
            const b2a = table[j][i];

            if (a2b > b2a) {
                next[i] += 1;
            } else if (b2a > a2b) {
                next[j] += 1;
            } else {
                const si = scores[friends[i]];
                const sj = scores[friends[j]];
                if (si > sj) next[i] += 1;
                else if (sj > si) next[j] += 1;
            }
        }
    }

    return Math.max(...next);
}