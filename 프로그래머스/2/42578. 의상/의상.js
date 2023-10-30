function solution(clothes) {    
    let answer = 1;
    let clothNumMap = {};
    
    clothes.forEach(arr => {
        const [name, type] = arr;
        clothNumMap[type] = (clothNumMap[type] || 0) + 1;
    })
    
    for (const key in clothNumMap) {
        answer  *= clothNumMap[key] + 1
    }

    
    return answer - 1;
}