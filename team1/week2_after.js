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
