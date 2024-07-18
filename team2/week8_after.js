/**
 * 1. 문제를 잘못 이해하고 길이가 다르면 제외했는데, 해당 부분 삭제
 * 2. isMatch변수
 * 3. 다 맞는 경우를 체크하기 위해 length를 체크했었는데, 반대로 아닌 경우만 체크하도록 변경
 */

function solution(spell, dic) {
  let answer = 2;

  // 이중for문으로 각각의 글자 비교
  for (let i = 0; i < dic.length; i++) {
    let isMatch = true;
    const word = dic[i];

    // 단어 내부에 해당 알파벳이 있는지 확인
    for (j = 0; j < spell.length; j++) {
      if (!word.includes(spell[j])) {
        isMatch = false;
        break;
      }
    }

    // isMatch라면 answer값 변경 후 break
    if (isMatch) {
      answer = 1;
      break;
    }
  }
  return answer;
}
