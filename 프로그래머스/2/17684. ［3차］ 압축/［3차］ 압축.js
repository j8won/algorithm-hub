function solution(msg) {
    var answer = [];
    
    const dictionary = {}
    let index = 1;
    
    for (let i=65; i<= 90; i++) {
        dictionary[String.fromCharCode(i)] = index++;
    }
        
    while(msg !== "") {
            
        for (let i=msg.length; i >= 0; i--) {
            let word = msg.substring(0, i);
            let addingWord = msg.substring(0, i+1);
            
            if (dictionary[word]) {
                answer.push(dictionary[word]);
                dictionary[addingWord] = index++;
                msg = msg.substring(i);
                break;
            }
        }
    }
    
    return answer;
}