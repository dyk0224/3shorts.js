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

-------------------------------------------------------------
	//hanju
function solution(ingredient) {
    var answer = 0;
    let stack = [];
    for (let i = 0; i < ingredient.length; i++) {
        stack.push(ingredient[i]);
        if (stack.length >= 4) {
            if (stack[stack.length - 4] === 1 &&
                stack[stack.length - 3] === 2 &&
                stack[stack.length - 2] === 3 &&
                stack[stack.length - 1] === 1) {
                stack.splice(stack.length - 4, 4);
                answer++;
            }
        }
    }   
		return answer;
}//배열은 가변적이기 때문에 요소를 추가하거나 제거할 때, 다시 선언하지 않고 기존배열을 변경하기 때문에 성능개선.
