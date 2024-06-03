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

--------------------------------------------------------------------------------------
	//hanju
function solution(ingredient) {
    var answer = 0;
    for(let i=0; i<(ingredient.length-3); i++){
        if(ingredient[i] === 1 && ingredient[i+1] === 2 && ingredient[i+2] === 3 &&ingredient[i+3] === 1){
						ingredient.splice(i, 4);
					  answer++;
	          i=0;//i=-1
        }
    }
		return answer;
}//실패이유: 시간초과(for문을 너무 많이 돌게 됨). 
//for문 위로 올라갈 때 i++가 적용되어서 0번 인덱스에 접근하지 못함..

function solution(ingredient) {
    var answer = 0;
    let array = ingredient.join('');        
    while(array.includes('1231')){
       array = array.replace('1231', '')
       answer++;
    }
		return answer;
}//실패이유: 시간초과(1231을 찾아내는 과정에서 많은 시간 소비-너무 많은 반복).

function solution(ingredient) {
    var answer = 0;
    let cur = '';
    for (let i = 0; i < ingredient.length; i++) {
        cur += ingredient[i];
        if (cur.length > 3) {
            if (cur[cur.length - 1] === '1' &&
                cur[cur.length - 2] === '3' &&
                cur[cur.length - 3] === '2' &&
                cur[cur.length - 4] === '1') {
                cur = cur.slice(0, -4);
                answer++;
            }
        }
    }
		return answer;
}//실패이유: 시간초과(문자열을 사용한 방식이 오래 걸리는 이유는 문자열은 불변 객체이기 때문에 
//매번 += 연산을 할 때마다 새로운 문자열을 생성하게 됩니다. 이는 성능 저하를 일으킬 수 있습니다. 
//또한, 문자열의 길이가 길어질수록 슬라이스 연산이나 인덱스 접근이 더 많은 메모리와 시간을 소모하게 됩니다. 라고 함).
