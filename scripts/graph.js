const squares = document.querySelector('.squares');
const months = document.querySelector('.months');

class Graph {
    static loadGraph(goal){
        if(goal !== null){
            console.log(goal);
            months.setAttribute('grid-template-rows', 
                `calc(var(--week-width) * 4) /* May */
                ;`);
            for (var i = 1; i <= goal.length; i++) {
              const level = Math.floor(Math.random() * 3);  
              squares.insertAdjacentHTML('beforeend', `<li data-level="1"></li>`);
            }
        }
        
    }
}
