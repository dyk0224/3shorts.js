function solution(progresses, speeds) {
    let answer = [];
    let complete = 0;
    while(progresses.length !== 0){
        for(let i=0; i<progresses.length; i++){
            progresses[i] += speeds[i];
        }
        if(progresses[0] >= 100){
            while(progresses[0] >= 100){
            progresses.shift();
            speeds.shift();
            complete++;
            }
            answer.push(complete);
            complete = 0;
        }
    }
    return answer;
}
