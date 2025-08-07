function solution(N, number) {    
    const arr = Array.from({length: 8}, () => new Set())
    
    if (number === N) {
        return 1;
    }
    
    arr[0] = new Set([N])
    
    for (let i=1; i<8; i++) {
        arr[i].add(Number(String(N).repeat(i+1)))
        
        for (let j=0; j<i; j++) {
            for (const a of arr[j]) {
                for (const b of arr[i - j - 1]) {
                    arr[i].add(a + b);
                    arr[i].add(a - b);
                    arr[i].add(a * b);
                    arr[i].add(Math.floor(a / b));
                }
            }
        }
        
        if (arr[i].has(number)) return i+1
        
    }

    return -1;
}

/**
1: 1 (5)
2: 1 * 4 + 1 (10, 0, 1, 25, 55)
3: 4 * (1*4+1) + 1?? (15,)


*/