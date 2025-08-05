function solution(participant, completion) {
    let map = {};
    
    for (const p of participant) {
        if (!map[p]) {
            map[p] = 1
        } else {
            map[p] += 1
        }
    }

    
    for (const p of completion) {
        map[p] -= 1
    }
    

    
    const leftOver = Object.entries(map).filter(([key, value]) => {
        if (value >= 1) {
            return true
        }
        
        return false
    })
    

    
    return leftOver[0][0]
}