// - 불필요한 변수가 많은 것 같다. 바로 리턴을 해도 되는데, 중괄호도 없어도 될 거 같다.
// - command 관련 변수 이름이 없어서 뭐가뭔지 잘 모르겠다.
// - 디스트럭쳐링으로 이름을 지어주는 게 좋을 것 같음.

function solution(array, commands) {
  const getKNumber = (arr, command) => {
    const sorted = arr.slice(command[0] - 1, command[1]).sort((a, b) => a - b);
    return sorted[command[2] - 1];
  };

  const answer = commands.map((command) => {
    return getKNumber(array, command);
  });
  return answer;
}
