$(document).ready(function(){

var date = moment().format('dddd, MMMM Do YYYY');
document.getElementById("currentDay").innerText = date;

$(".saveBtn").on("click", function(){
    let textValue = $(this).siblings(".description").val();
    console.log("textValue", textValue)
    let timeBlock = $(this).parent().attr("id")
    console.log("timeBlock", timeBlock)

    localStorage.setItem(timeBlock, textValue)
})

function keepTime(){
    var rightNow = moment().hours()

    $('.time-block').each(function(){
        let timeBlockHour = parseInt($(this).attr("id"))
       // console.log("timeBlockHour", timeBlockHour)
       // console.log("rightNow", rightNow)

        if(timeBlockHour < rightNow){
            $(this).addClass("past");
        } else if(timeBlockHour === rightNow){
            $(this).removeClass("past");
            $(this).addClass("present");
        } else {
            $(this).removeClass("past");
            $(this).removeClass("present");
            $(this).addClass("future")
        };
    });
};

keepTime()

for(let i = 9; i <17; i++){
$(`#${i} .description`).val(localStorage.getItem(`${i}`))
};




});