function solution(dartResult) {
    let answer = 0;
    
    // 숫자로 분리
    dartResult = dartResult.split(/(\d+|\D)/g).filter(x => x.length > 0);
    
    let number = 0;
    let points = [];
    
    for (let i=0; i<dartResult.length; i++) {
        
        if (dartResult[i] === 'S'){
            continue;
        }
        
        if (dartResult[i] === 'D') {
            number = number * number;
            continue;
        }
         if (dartResult[i] === 'T') {
            number = number * number * number;
            continue;
        }
        
        if (dartResult[i] === '*') {
            let lastPoint = points.pop();
            points.push(lastPoint * 2);
            number = number * 2;
            continue;
        }
        
        if (dartResult[i] === '#') {
            number = -number;
            continue;
        }
        
        points.push(number);
        number = +dartResult[i];
    }
    
    points.push(number);
    
    return points.reduce((a,b) => a+b);
}