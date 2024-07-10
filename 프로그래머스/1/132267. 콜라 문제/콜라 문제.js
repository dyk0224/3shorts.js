function solution(a, b, n) {
    const difference = a - b;
    
    return Math.floor(Math.max(((n - a) / difference + 1), 0)) * b
}