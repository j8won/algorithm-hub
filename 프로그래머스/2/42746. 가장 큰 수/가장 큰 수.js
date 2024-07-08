function solution(numbers) {
    var answer = '';
    
    numbers = numbers.map(n => n.toString());
    numbers.sort((a,b) => (b+a) - (a+b));
    
    return numbers[0] === "0" ? "0" : numbers.join('');
}