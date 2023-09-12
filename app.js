const workDay = 6;
const weekdayshour = 8;
const weekdays = 5;
const saturdayhour = 6;
const hoursPerweek = 168;
const weeksWork = weekdayshour * weekdays + saturdayhour;
const timeInworkpercent = weeksWork * 100 / hoursPerweek ;
if ( weeksWork> 40) {
    console.log('то напевно працюєш не зубним техніком і відсоток на роботі в тиждень получається ' + timeInworkpercent);
} else if ( weeksWork < 40) { 
    console.log('тоді певно займаєшся криптою');
}
console.log('як тобі')