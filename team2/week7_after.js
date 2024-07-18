/**
 * 저번에 공개했는데, 틀려버려서...
 * 기존 아이디어에서 나온 로직 그대로 맞는 버전 올립니다
 */
function solution(a, b, n) {
  let initialCokes = Math.floor(n / a) * b;

  // 현재 남은 콜라의 수 : 처음 받은 콜라 + 나머지
  let currentCokes = initialCokes + (n % a);
  let answer = initialCokes;

  while (currentCokes >= a) {
    // while문을 돌면서 새로 받는 콜라와 나머지를 업데이트
    const newCokes = Math.floor(currentCokes / a) * b;
    const namuji = currentCokes % a;

    answer += newCokes;
    currentCokes = newCokes + namuji;
  }

  return answer;
}
