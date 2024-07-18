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
