function solution(progresses, speeds) {
	let answer = [];
	let now = 0;
	
	while (true) {
		let clear = 0;		
		for (let i=now; i<speeds.length; i++) {
			progresses[i] += speeds[i];
		}		
		while (progresses[now] >= 100) {
			now++; clear++;
		}
		
		if (clear > 0) answer.push(clear);		
		if (now == speeds.length) return answer;
	}
}