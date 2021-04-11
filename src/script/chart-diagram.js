
var color = ["red" , "green" , "blue" , "yellow" , "orange"];
var value = [55, 49, 44, 24, 15];

var backColor = [];
var listValue = [];

for(var i = 0 ; i < myList.length ; i ++){
    backColor.push(color[i]);
    listValue.push(value[i]);
}

const line = document.querySelector(".line-chart");
const bar = document.querySelector(".bar-chart");
const doughnut = document.querySelector(".doughnut-chart");

bar.addEventListener("click" , () => {
    var xValues = myList;
    var yValues = listValue;
    var barColors = backColor;

new Chart("myChart", {
  type: "bar",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },
  options: {
    legend: {display: false},
    title: {
      display: true,
      text: "Bar-chart"
    }
  }
});
})
