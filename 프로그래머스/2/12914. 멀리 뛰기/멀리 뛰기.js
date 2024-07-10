function solution(n) {
    if (n === 1) return 1;
    
    // let prev;
    // let prevprev;
    
    let pibonachi = [1, 1];
    let answer;
    for (let i=2; i<=n; i++) {
        const length = pibonachi.length;
        pibonachi.push((pibonachi[length-1] + pibonachi[length-2]) % 1234567);
    }
    return pibonachi[pibonachi.length-1];
}