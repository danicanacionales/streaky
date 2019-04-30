const UInewGoalForm = document.getElementById('new-goal-form');
const UInewGoalInput = document.getElementById('new-goal-input');
const UIlengthInput = document.getElementById('length-input');
const UIgoal = document.getElementById('goal');
const UIlength = document.getElementById('length');

class Goal {
    constructor(title, length){
        this.title = title;
        this.length = length;
    }
}

class UI {
    addGoal(goal){
        UIgoal.textContent = goal.title;
        UIlength.innerHTML = `<i class="fas fa-bolt"></i> ${goal.length} days`;
    }
}

UInewGoalForm.addEventListener('submit', function(e){
    const title = UInewGoalInput.value;
    const length = parseInt(UIlengthInput.value);

    const goal = new Goal(title, length);
    const ui = new UI();

    if(title === '' || length <= 0){
        console.log('Inputs are invalid');
    }else{
        ui.addGoal(goal);
    }

    e.preventDefault();
});