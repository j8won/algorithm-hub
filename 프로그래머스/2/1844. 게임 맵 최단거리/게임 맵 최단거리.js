function solution(maps) {
    let n = maps.length;
    let m = maps[0].length;

    const bfs = () => {
        const q = [[0,0,1]];

        let dir = [[1,0], [0,1], [-1,0], [0,-1]];

        while (q.length > 0) {
            const [i, j, cnt] = q.shift();

            if (i === n-1 && j === m-1) return cnt;

            for (const [r, c] of dir) {
                const newI = i + r;
                const newJ = j + c;

                if (newI >= 0 && newI < n && newJ >= 0 && newJ < m && maps[newI][newJ] === 1) {
                    q.push([newI, newJ, cnt+1]);
                    maps[newI][newJ] = 0;
                }
            }
        }
        
        return -1
    }

    return bfs();
}