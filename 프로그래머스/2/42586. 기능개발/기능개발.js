function solution(progresses, speeds) {
    var answer = [];
    let days = [];

    for (let i=0; i<progresses.length; i++) {
        days.push(Math.ceil((100 - progresses[i]) / speeds[i]));
    }
    
    let max = days[0]
    let maxDays = 1;
    for (let i=1;i<days.length; i++){
        if (max < days[i]) {
            answer.push(maxDays);
            max = days[i];
            maxDays = 1;
        } else {
            maxDays++;
        }
        
        if (i === days.length - 1) answer.push(maxDays)
    }
    
    return answer;
}