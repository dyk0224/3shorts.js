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
