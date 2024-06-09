// hyojeong
// sort하고 시작하는 게 오히려 정답이었음

function solution(people, limit) {
  const sorted = people.sort((a, b) => a - b);

  let boats = 0;

  let sPointer = 0;
  let ePointer = people.length - 1;

  while (sPointer <= ePointer) {
    // 새로운 보트 추가
    boats++;

    // 만약 앞뒤 인물들 둘 다 탑승할 수 있으면 앞쪽 포인터 하나 뒤로 이동
    if (sorted[sPointer] + sorted[ePointer] <= limit) {
      sPointer++;
    }

    // 뒤쪽 포인터는 언제나 한 칸씩 이동
    ePointer--;
  }
  return boats;
}
