var today = moment();
var hour = moment().hours();

// current day displayed (moment)
var currentDay = today.format("dddd, MMMM Do YYYY, h:mm a");
$("#currentDay").text(currentDay);

// time blocks are coded for if the time has passed or not in the day(moment)
function timeCompare() {
	//each of these time blocks is identified and the following function runs for each of them
	$(".time-block").each(function () {
		//the id of the time block is used as a variable...
		var hourBlock = $(this).attr("id");
		//and when the variable is smaller than the current hour rounded down...
		if (hourBlock < hour) {
			//the "past" class is assigned
			$(this).addClass("past");
		}
		//if the current hour is the same as the variable rounded down...
		if (hourBlock == hour) {
			//the "present" class is given
			$(this).addClass("present");
			//if the hour is "larger" than the variable...
		} else if (hourBlock > hour) {
			//the "future" class is given
			$(this).addClass("future");
		}
	});
}

timeCompare();

// clicking into a timeblock allows for entering an event in that block
// hitting save on that timeblock stores the event in local Storage

//when the button of a row is clicked...
$(".saveBtn").on("click", function () {
	//a variable is created that is the parent's id
	var timeKey = $(this).parent().attr("id");
	//as well as a variable with the button's sibling text area content
	var textValue = $(this).siblings("textarea").val();
	//this saves the id and content of the text area in local storage
	localStorage.setItem(timeKey, textValue);
});
// saved events persist on page refresh
//this uses the id on the parent div to identify the target and load the text area content from the local storage
$("#9 textarea").val(localStorage.getItem("9"));
$("#10 textarea").val(localStorage.getItem("10"));
$("#11 textarea").val(localStorage.getItem("11"));
$("#12 textarea").val(localStorage.getItem("12"));
$("#13 textarea").val(localStorage.getItem("13"));
$("#14 textarea").val(localStorage.getItem("14"));
$("#15 textarea").val(localStorage.getItem("15"));
$("#16 textarea").val(localStorage.getItem("16"));
$("#17 textarea").val(localStorage.getItem("17"));
