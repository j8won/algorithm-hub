function solution(s) {
    let arr = s.split(" ").map(Number);
    
    return Math.min(...arr) + " " + Math.max(...arr);
}