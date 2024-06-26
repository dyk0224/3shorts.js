function solution(genres, plays) {
    let albumPlays = [];
    let result = [];
    
    let genreBundle = {};
    let genreAmount = {};
    
    genres.map((genre, index) => {
        if (!genreBundle[genre]) {
            genreBundle[genre] = [];
            genreAmount[genre] = 0;
        }
        genreBundle[genre].push(plays[index]);
        genreAmount[genre] += plays[index];
    });
    
    const genreKeys = Object.keys(genreBundle);
    genreKeys.map((key) => {
        genreBundle[key].sort((a, b) => b-a);
    })
    
    const playAmount = Object.keys(genreAmount)
    playAmount.sort((a, b) => genreAmount[b]-genreAmount[a]);
    
    playAmount.map((key) => {
        albumPlays.push(genreBundle[key][0])
        if (genreBundle[key][1]) {
            albumPlays.push(genreBundle[key][1])
        }
    })
    
    let objPlays = {}
    
    plays.map((play, index) => {
        if (!objPlays[play]) {
            objPlays[play] = []
        }
        objPlays[play].push(index);
    })
    
    const objPlaysKeys = Object.keys(objPlays);
    objPlaysKeys.map((key) => {
        objPlays[key].sort((a, b) => a - b);
    })
    
    albumPlays.map((play) => {
        result.push(objPlays[play].shift())
    })
    
    return result;
}