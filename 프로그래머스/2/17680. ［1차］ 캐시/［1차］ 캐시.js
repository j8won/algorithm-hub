function solution(cacheSize, cities) {
    let answer = 0;
    
    let cache = [];
    
    for (let i =0; i < cities.length; i++) {
        const index = cache.findIndex((city) => city.toLowerCase() === cities[i].toLowerCase());
        
        if (index !== -1) {
            cache.splice(index, 1); 
            answer += 1; 
        } else {
            answer += 5; 

            if (cache.length >= cacheSize) {
                cache.shift(); 
            }
        }
        
        
        if (cacheSize > 0) {
            cache.push(cities[i]);
        }
        
    }
    
    return answer;
}