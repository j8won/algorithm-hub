function solution(n, k) {
    var answer = -1;
    
    const numbers = n.toString(k)
    console.log(numbers)
    
    const array = numbers.split("0").filter(x => x !== '').map(Number);
    console.log(array)
    
    const isP = (num) => {
        if (num <= 1) {
            return false;
        }
        
        if( num % 2 === 0) { 
            return num === 2 ? true : false;
        }

      const sqrt = parseInt(Math.sqrt(num));

      for( let divider = 3; divider <= sqrt; divider += 2) {
        if(num % divider === 0) {
          return false;
        }
      }

      return true;
    }
    
    return array.filter(isP).length;
}