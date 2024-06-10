// doyong
function solution(skill, skill_trees) {
    let answer = 0;
    
    const skillLevels = [...skill].reduce((acc, s, index) => {
        acc[s] = index;
        return acc;
    }, {});
    
    skill_trees.map((skillTree) => {
        let currentLevel = 0;
        
        const isPossible = [...skillTree].every((tree) => {
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

-------------------------

//hanju
function solution(skill, skill_trees) {
    let answer = 0;
    let skillArray = [...skill];
    for(skill_tree of skill_trees){
        let possible = 1;
        let skillTree = [...skill_tree];
        let steps = skillTree.filter(step => skillArray.includes(step));
        console.log(steps);
        for(let i=0; i<steps.length; i++){
            if(steps[i] !== skillArray[i]) {
                possible = 0;
                break;
            }
        }
        if(possible) answer++;
    }
    return answer;
}
    
