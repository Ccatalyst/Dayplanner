var today = moment();
var hour = moment().hours();

// current day displayed (moment)
var currentDay = today.format("dddd, MMMM Do YYYY, h:mm a");
$("#currentDay").text(currentDay);

// time blocks are coded for if the time has passed or not in the day(moment)
function timeCompare() {
	$(".time-block").each(function () {
		var hourBlock = $(this).attr("id");
	});
}

// clicking into a timeblock allows for entering an event in that block
// hitting save on that timeblock stores the event in local Storage
$(".saveBtn").on("click", function () {
	var timeKey = $(this).parent().attr("id");
	var textValue = $(this).siblings("textarea").val();

	localStorage.setItem(timeKey, textValue);
});
// saved events persist on page refresh
$("#9 textarea").val(localStorage.getItem("9"));
$("#10 textarea").val(localStorage.getItem("10"));
$("#11 textarea").val(localStorage.getItem("11"));
$("#12 textarea").val(localStorage.getItem("12"));
$("#13 textarea").val(localStorage.getItem("13"));
$("#14 textarea").val(localStorage.getItem("14"));
$("#15 textarea").val(localStorage.getItem("15"));
$("#16 textarea").val(localStorage.getItem("16"));
$("#17 textarea").val(localStorage.getItem("17"));
