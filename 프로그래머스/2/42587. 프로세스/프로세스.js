function solution(priorities, location) {
    let answer = 0;
    let queue = priorities.map((x,i) => ({val: x, idx: i}))

    
    while (queue.length > 0) {
        
        const {val,idx}= queue.shift();
        
        const isNotMax = queue.some(({val: target,_}) => target > val)
        
        
        if (isNotMax) {
            queue.push({val,idx})
        } else {
            answer++;
            
            if (idx === location) {
                return answer
            } 
        }
    }
} 