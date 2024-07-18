function solution(n) {
	let answer = 0;
	let stack = 0;
	
	for (let i=1; i<10000; i++) {
		stack += i;
		if (stack > n) break;
		if (i % 2 == 1 && n % i == 0) answer++;
		if (i % 2 == 0 && (parseInt(n / i) + 0.5) == (n / i)) answer++;
	}	
	
	return answer;
}