function solution(n, lostArr, reserveArr) {    
    let lost = lostArr.filter(x => !reserveArr.includes(x)).sort((a,b)=>a-b);
    let reserve = reserveArr.filter(x => !lostArr.includes(x)).sort((a,b)=>a-b);
    
  
    var answer = n - lost.length;

    let lIdx = 0;
    let rIdx = 0;
    
    while (rIdx < reserve.length && lIdx < lost.length) {
        if (lost[lIdx] < reserve[rIdx] - 1) {
            lIdx++;
            continue;
        }
        
        if (lost[lIdx] === reserve[rIdx] - 1) {
            answer++;
            lIdx++;
            rIdx++; 
            continue;
        }
        
        if (lost[lIdx] === reserve[rIdx] + 1) {
            answer++;
            lIdx++;
            rIdx++; 
            continue;
        }
        
        rIdx++;
    }
    
    
    return answer;
}