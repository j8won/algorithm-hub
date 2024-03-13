function parseTime(timeStr) {
    const time = timeStr?.split(":");
    if (time?.length === 2) {
        return Number(time[0]) * 60 + Number(time[1]);
    }
    return NaN;
}

function solution(fees, records) {
    let answer = [];
    
    // 기본 시간(분), 기본 요금, 단위 시간, 단위 요금
    const [basicTime, basicRate, unitTime, unitRate] = fees;
    
    let obj = {};
    
    for (let string of records){
        const [time, car, state] = string.split(" ");
        obj[car] ? obj[car].push(time) : obj[car] = [time]
    }

    
    let timeObj = {};
    

    for (let car of Object.keys(obj)){
        const timeArray = obj[car];
        
        for (let i=0; i<timeArray.length; i++){        
            if (i%2 === 1) continue;
            
            const inTime = parseTime(timeArray[i])
            const outTime = parseTime(timeArray[i+1] ?? "23:59")
            
            let time = outTime - inTime;
            timeObj[car] ? timeObj[car] += time : timeObj[car] = time;
        }
    }
    
    let moneyObj = {};
    for (let key of Object.keys(timeObj)) {
        let money = basicRate;

        if (timeObj[key] > basicTime) {
            money += Math.ceil((+timeObj[key] - basicTime) / unitTime) * unitRate;
        }
        
        moneyObj[key] = money
    }

    return Object.keys(timeObj).sort((a,b) => Number(a) - Number(b)).map(x => moneyObj[x])
}