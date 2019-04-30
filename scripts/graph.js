const squares = document.querySelector('.squares');
const months = document.querySelector('.months');

class Graph {
    static loadGraph(goal){
        if(goal !== null){
            console.log(goal);
            months.setAttribute('grid-template-rows', 
                `calc(var(--week-width) * 4) /* Jan */
                calc(var(--week-width) * 4) /* Feb */
                calc(var(--week-width) * 4) /* Mar */
                calc(var(--week-width) * 5) /* Apr */
                calc(var(--week-width) * 4) /* May */
                calc(var(--week-width) * 4) /* Jun */
                calc(var(--week-width) * 5) /* Jul */
                calc(var(--week-width) * 4) /* Aug */
                calc(var(--week-width) * 4) /* Sep */
                calc(var(--week-width) * 5) /* Oct */
                calc(var(--week-width) * 4) /* Nov */
                calc(var(--week-width) * 5) /* Dec */;`);
            for (var i = 1; i <= goal.length; i++) {
              const level = Math.floor(Math.random() * 3);  
              squares.insertAdjacentHTML('beforeend', `<li data-level="1"></li>`);
            }
        }
        
    }
}
