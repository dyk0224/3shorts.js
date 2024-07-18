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
---------------------------------------


function solution(progresses, speeds) {
    const goal = 100;
    let answer = [];
    let leftDays = progresses.map((progress, index) => Math.ceil((goal - progress)/speeds[index]));
    let complete = 0;
    let releaseDay = leftDays[0];
    for(const day of leftDays){
        if(day > releaseDay){
            releaseDay = day;
            answer.push(complete);
            complete = 0;
        }
        complete++;
    }
    answer.push(complete);
    return answer;
}
