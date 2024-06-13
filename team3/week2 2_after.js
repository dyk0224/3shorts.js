/* 
replace 메소드를 활용해 지정된 문자열을 변수로 전달된 문자로 변환하는 방법을 사용.
더욱 직관적이고 이해하기 쉬워졌다.
그러나 문자열 s가 "one4seveneight"와 같이 중복되는 문자열이 없는 경우, 모두 숫자로 변환돼 출력이 되지만,
"one4seven8seven6five"와 같이 중복되는 문자열이 있는 경우 첫번째 문자열만 변환이 되는 오류가 있음.
*/


function solution(s) {
    
    let number = {
  '0': 'zero',
  '1': 'one',
  '2': 'two',
  '3': 'three',
  '4': 'four',
  '5': 'five',
  '6': 'six',
  '7': 'seven',
  '8': 'eight',
  '9': 'nine'
};

      for (let key in number) {
        s = s.replace(number[key], key);
    }
    
    return Number(s);
}


   

————————————————

//replaceAll 사용. 

function solution(s) {
    
    let number = {
  '0': 'zero',
  '1': 'one',
  '2': 'two',
  '3': 'three',
  '4': 'four',
  '5': 'five',
  '6': 'six',
  '7': 'seven',
  '8': 'eight',
  '9': 'nine'
};

      for (let key in number) {
        s = s.replaceAll(number[key], key);
    }
    
    return Number(s);
}

// 중복되는 문자열이 있어도 모두 변환되어 출력이 된다.

/*
처음 before에 작성한 코드를 비교해 봤을 때 더욱 직관적이고 
복잡도가 감소한 부분을 볼 수 있다.
*/
