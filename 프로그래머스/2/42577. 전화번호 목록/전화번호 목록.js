function solution(array) {
    array.sort();
    
    for (let i = 0; i < array.length; i++) {
        if (array[i] === array[i+1]?.slice(0, array[i].length)) {
            return false
        }
    }
    
    return true;
}