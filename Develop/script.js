var today = moment();


var currentDay = today.format("dddd, MMMM Do YYYY, h:mm a");
$("#currentDay").text(currentDay);


// current day displayed (moment)
// time blocks are coded for if the time has passed or not in the day(moment)
// clicking into a timeblock allows for entering an event in that block
// hitting save on that timeblock stores the event in local Storage
// saved events persist on page refresh
