function solution(n) {
    var answer = 0;
    if(n === 1) {
        return 1;
    } else if(n === 2) {
        return 2;
    }
    let a = 1;
    let b = 2;
    for (i = 3; i <= n; i++) {
        let current = a+b
        a = b;
        b = current% 1234567;
    }
    answer = b 
    return answer;
}