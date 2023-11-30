function solution(str1, str2) {    
    const NUMBER = 65536;

    // 모두 소문자로 변경
    str1 = str1.toLowerCase();
    str2 = str2.toLowerCase();
    // console.log(str1, str2);
    
    const englishPattern = /^[a-z]+$/;
    
    // 문자열을 두글자로 끊어서 단어: 개수 형식의 객체로 정리
    obj1 = {};
    for (let i=0; i<str1.length - 1; i++) {
        const word = str1.slice(i, i+2);
        // console.log(word);
        if (englishPattern.test(word)) {
            obj1[word] ? obj1[word]++ : obj1[word] = 1
        }
    }
    
    obj2 = {};
    for (let i=0; i<str2.length - 1; i++) {
        const word = str2.slice(i, i+2);
        if (englishPattern.test(word)) {
            obj2[word] ? obj2[word]++ : obj2[word] = 1
        }
    }
    
    console.log(obj1);
    console.log(obj2);
    
    if (Object.keys(obj1).length === 0 && Object.keys(obj2).length === 0) {
        return 1 * NUMBER;
    }
    
    
    // 합집합 구하기
    let union = {};
    const unionKeys = Object.keys(obj1);
    Object.keys(obj2).forEach(x => !unionKeys.includes(x) && unionKeys.push(x));
    // console.log(unionKeys);
    
    for (let i=0; i<unionKeys.length; i++) {
        const key = unionKeys[i];
        
        let a = obj1[key] || 0;
        let b = obj2[key] || 0;
        
        if (a>b) {
            union[key] = a
        } else {
            union[key] = b
        }
    }
    console.log(union);
    
    
    // 교집합 구하기
    let intersection = {};
    const intersectionKeys = unionKeys.filter(x => Object.keys(obj2).includes(x) && Object.keys(obj1).includes(x));
    // console.log(intersectionKeys)
    
    for (let i=0; i<intersectionKeys.length; i++) {
        const key = intersectionKeys[i];
        
        let a = obj1[key] || 0;
        let b = obj2[key] || 0;
        
        
        if (a<b) {
            intersection[key] = a;
        } else {
            intersection[key] = b;
        }
    }
    
    console.log(intersection)
    
    // 자카드 유사도 구하기
 
    const unionCount = Object.values(union).reduce((acc, cur) => acc + cur, 0)
    console.log(unionCount)
    
    const intersectionCount = Object.values(intersection).reduce((acc, cur) => acc + cur, 0);
    console.log(intersectionCount)
    
    let answer = intersectionCount / unionCount * NUMBER;
    
    return Math.floor(answer)

}