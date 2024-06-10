//doyong
function solution(skill, skill_trees) {
    let answer = 0;
    
    const skillLevels = skill.split("").reduce((acc, s, index) => {
        acc[s] = index;
        return acc;
    }, {});
    
    skill_trees.map((skillTree) => {
        let currentLevel = 0;
        
        const isPossible = skillTree.split("").every((tree) => {
            if (skillLevels[tree] === currentLevel) {
                currentLevel++;
            }
            
            const requiredLevel = skillLevels[tree] || 0;
            return requiredLevel <= currentLevel;
        });
        
        isPossible ? answer++ : null;
    })
    
    return answer;
}

--------------------------------------------

    //한주
    
    for(skillTree of skill_trees){
        let step = 0;
        let impossible = 0;
        for(let i=0; i<skillTree.length; i++){
            impossible = 0;
            if(skillTree[i] === skill[step]) step++;
            else{
                for(let j=0; j<skill.length; j++){
                    if(skillTree[i] === skill[j] && step !== j) {
                        impossible = 1; 
                        break;
                    }
                }
                if(i===skillTree.length-1) answer++;
            }
        }
    }
//미완 : 첫 접근. 계속 for문을 중첩해서 쓰게 되면서 뭔가 이상함을 직감.

function solution(skill, skill_trees) {
    let answer = 0;
    for(skill_tree of skill_trees){
        let skillTree = [...skill_tree];
        let skillArray = [...skill];
        let steps = skillTree.filter(step => skillArray.includes(step));
        for(let i=0; i<steps.length; i++){
            if(steps[i] !== skillArray[i]) break;
            if(i === steps.length -1) answer++;
        }
    }
    return answer;
}
//실패이유: skill에 없는 문자들로만 이루어진 skill_tree를 받을 경우 answer를 다루는 if문에 접근이 불가능.
