function solution(n) {
    var answer = [[]];
    return callback(n, 1, 2, 3);
}

function callback(n, from, through, to) {
    if (n===1) {
        return [[from, to]]
    }
    
    let result = [];
    
    result = result.concat(callback(n-1, from, to, through));
    result.push([from, to]);
    result = result.concat(callback(n-1, through, from, to));
    return result
}