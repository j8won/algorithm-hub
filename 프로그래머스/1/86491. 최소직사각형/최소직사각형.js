function solution(sizes) {
    var answer = 0;
    
    sizes = sizes.map(([w, h]) => {
        if (w > h) return [w, h]
        return [h, w]
    })
    
    console.log(sizes)
    
    let maxW = 0;
    let maxH = 0;
    
    for (const [w, h] of sizes) {
        if (w > maxW) maxW = w
        if (h > maxH) maxH = h
    }
    return maxW * maxH;
}