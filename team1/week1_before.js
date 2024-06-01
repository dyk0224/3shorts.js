function solution(ingredient) {
    let answer = 0;
    let stack = [];
    
    for (let i=0; i<ingredient.length; i++) {
        stack.push(ingredient[i]);
        
        if (stack.length >= 4) {
            const leng = stack.length-1;
            let str = "" + stack[leng-3] + stack[leng-2] + stack[leng-1] + stack[leng];
            if (str == "1231") {
                answer++;
                stack.pop();
                stack.pop();
                stack.pop();
                stack.pop();
            }
        }
    }
	return answer;
}
