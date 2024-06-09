// hyojeong
// 전체 배열을 sort하고 시작하는 게 오래 걸릴 것 같아서 다른 꼼수를 써 봤지만 답이 나오지 않았다
// 아래 코드에서는 limit의 절반이 되는 사람들만 보트에 같이 태우게 되므로
// 리미트가 10일 때 4:4, 5:4는 가능하지만 8:2 이런 경우는 계산 불가능으로 오답 처리됨

function solution(people, limit) {
  const halfArr = people.filter((person) => person <= limit / 2);
  const answer =
    Math.ceil(halfArr.length / 2) + (people.length - halfArr.length);

  return answer;
}
