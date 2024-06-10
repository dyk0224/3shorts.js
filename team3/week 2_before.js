//아영
function solution(s) {

    const numbers = {
        "zero": "0",
        "one": "1",
        "two": "2",
        "three": "3",
        "four": "4",
        "five": "5",
        "six": "6",
        "seven": "7",
        "eight": "8",
        "nine": "9"
    };


    let answer = "";
    let word = "";

    for (let i = 0; i < s.length; i++) {

        if (!isNaN(s[i])) {
            answer += s[i];
        } else {
            word += s[i];
            if (numbers[word] !== undefined) {
             
                answer += numbers[word];
        
                word = "";
            }
        }
    }

    return Number(answer);
}

//너무 기네요 ..


-----------------------------------------

    네오와 프로도가 숫자놀이를 하고 있습니다. 네오가 프로도에게 숫자를 건넬 때 일부 자릿수를 영단어로 바꾼 카드를 건네주면 프로도는 원래 숫자를 찾는 게임입니다.
다음은 숫자의 일부 자릿수를 영단어로 바꾸는 예시입니다.


1478 → "one4seveneight"
234567 → "23four5six7"
10203 → "1zerotwozero3"


이렇게 숫자의 일부 자릿수가 영단어로 바뀌어졌거나, 혹은 바뀌지 않고 그대로인 문자열 s 가 매개변수로 주어집니다. s 가 의미하는 원래 숫자를 return 하도록 solution 함수를 완성해주세요.

    function solution(s) {
    var answer = s;
    const numbers = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
    for (i = 0; i < numbers.length; i++) {
       answer = answer.split(numbers[i]).join(i);
    }

    return Number(answer);
}

//도저히 모르겠어서 검색의 도움을 조금 받았습니다..
