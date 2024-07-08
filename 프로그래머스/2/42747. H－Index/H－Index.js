function solution(citations) {
    var answer = 0;
    
    citations = citations.sort((a,b) => b-a);
    console.log(citations);
    
    const n = citations.length;
    
    for (let i=0; i<n; i++) {
        if (i < citations[i]) {
            answer++;
        }
    }
    
    return answer;
}