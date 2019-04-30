const UInewGoalForm = document.getElementById('new-goal-form');
const UInewGoalInput = document.getElementById('new-goal-input');
const UIlengthInput = document.getElementById('length-input');
const UIgoal = document.getElementById('goal');
const UIlength = document.getElementById('length');
const UIgraph = document.getElementById('graph');

class Goal {
    constructor(title, endDate){
        this.title = title;
        this.startDate = new Date();
        this.endDate = endDate;
    }

    static calculateDaysBetween(startDate, endDate){
        var one_day = 1000 * 60 * 60 * 24;
        var startDate_ms = startDate.getTime();
        var endDate_ms = endDate.getTime();
        var difference_ms = endDate_ms - startDate_ms;
        return Math.round(difference_ms/one_day);
    }
}

class UI {
    addGoal(goal){
        UIgoal.textContent = goal.title;
        goal.length = Goal.calculateDaysBetween(goal.startDate, goal.endDate);
        UIlength.innerHTML = `<i class="fas fa-bolt"></i> ${goal.length} days`;
        Graph.loadGraph(goal);
    }
}

document.addEventListener('DOMContentLoaded', Graph.loadGraph);

UInewGoalForm.addEventListener('submit', function(e){
    const title = UInewGoalInput.value;
    const endDate = new Date(UIlengthInput.value);

    const goal = new Goal(title, endDate);
    const ui = new UI();

    if(title === ''){
        console.log('Inputs are invalid');
    }else{
        // goal.startDate = new Date();
        ui.addGoal(goal);
    }

    e.preventDefault();
});