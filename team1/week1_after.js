function solution(ingredient) {
    let answer = 0;
    let stack = [];
    
    ingredient.map((i) => {
        stack.push(i);
        
        const isHamburger = stack.slice(-4).join('') === "1231";
        if (!isHamburger) return;
        
        answer++;
        stack.splice(-4);
    })
	return answer;
}
