function skillsMember() {
    var skills = [
        { name: 'HTML', level: 5 },
        { name: 'CSS', level: 4 },
        { name: 'JS', level: 3 },
        { name: 'PHP', level: 2 },
        { name: 'SQL', level: 1 }
    ];

    return {
        getSkills: function () {
            return skills;
        },
        getSkill: function (index) {
            return skills[index];
        },
        addSkill: function (skill) {
            skills.push(skill);
        },
        removeSkill: function (index) {
            skills.splice(index, 1);
        }
    };
}