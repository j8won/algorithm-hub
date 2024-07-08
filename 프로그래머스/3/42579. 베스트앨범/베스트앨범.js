function solution(genres, plays) {    
    let genrePlay = {};
    for (let i=0; i<genres.length; i++){
        genrePlay[genres[i]] = (genrePlay[genres[i]] || 0) + plays[i];
    }
    
    const genreRank = Object.entries(genrePlay).sort((a,b) => b[1] - a[1]).map(x => x[0]);
    
    let answer = [];
    
    for (let i=0; i<genreRank.length; i++) {
        let filterArr = [];
        
        genres.forEach((x, y) => {
            if (x === genreRank[i]) filterArr.push([y, plays[y]])
        });
        
        filterArr = filterArr.sort((a,b) => b[1]-a[1]).slice(0,2);
        filterArr.forEach((x) => answer.push(x[0]));
    }

    
    return answer;
}