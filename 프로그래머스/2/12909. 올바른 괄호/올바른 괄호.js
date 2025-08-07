function solution(str){
    
    let cnt = 0;
    for (let s of str) {
        if (s === "(") {
            cnt++
        } else {
            cnt--
        }
        
        if (cnt < 0) return false
    }
    
    return cnt === 0
}