// 고민되는 지점 : 함수를 쪼개는 걸 좋아하는데
// 나중에 너무 쪼개서 전체 코드가 더 가독성이 낮아질 수 있지 않은지 고민이 된다

const getKNumber = (arr, command) => {
  const [start, end, k] = [command[0] - 1, command[1], command[2] - 1];
  const sorted = arr.slice(start, end).sort((a, b) => a - b);
  return sorted[k];
};

function solution(array, commands) {
  const answers = commands.map((command) => getKNumber(array, command));
  return answers;
}

////////////////////////////////////////////////////////////////////////////////////////////////////////

//목적을 알기 힘들었던 변수에 이름을 달아두었다.

function solution(array, commands) {
  var answer = [];
  
  commands.forEach((e)=>{
      const first = e[0] - 1;
      const last = e[1];
      const nth = e[2] - 1;
      const numbers = array.slice(first, last).sort((a, b)=> a - b);
      answer.push(numbers[nth]);
  })
  
  return answer;
}
