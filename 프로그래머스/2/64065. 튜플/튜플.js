function solution(s) {
    
    // console.log(s);
    const array = s.slice(1, -2).split("},").filter(x => x.length > 0).map(x => {
        const y = x.replace("{", "");
        return y.split(",").map(Number);
    })
    
    array.sort((a, b) => {
         return a.length - b.length
    })
    
    // console.log(array);
    
    let answer = [];
    
    let tupleObj = {};
    
    array.forEach(x => {
        const xObj = {}
        x.forEach(i => {
            if (xObj[i]) {
                xObj[i]++
            } else xObj[i] = 1
        })
        
        const newNumber = Object.keys(xObj).filter(key => tupleObj[key] !== xObj[key]).map(Number);
        
        if (tupleObj[newNumber]) {
            tupleObj[newNumber]++;
        } else tupleObj[newNumber] = 1;
        
        // console.log(tupleObj);
        // console.log(newNumber);
        
        answer.push(newNumber[0])
        
    })

    
    
    
    
    return answer;
}