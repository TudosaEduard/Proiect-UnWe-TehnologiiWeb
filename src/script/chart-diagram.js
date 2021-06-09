const barPlot = () => {
    var xValues = ["under_25 age", "25_to_29 age", "30_to_39 age", "40_to_49 age", "50_to_55 age", "greater_55 age"];

    var ctx = document.getElementById('barChart').getContext('2d');

    var yValues = [1000, 2000, 5000, 10000, 20000, 50000];

    var barColors = ["green", "purple", "blue", "rgb(253, 106, 0)", "rgb(254, 194, 11)", "rgb(64, 176, 166)"];
  
    new Chart(ctx, {
      type: "bar",
      data: {
        labels: xValues,
        datasets: [{
          label: "Arad", 
          backgroundColor: barColors,
          data: yValues
        }]
      },
      options: {
        /*title: {
            display: true,
            text: "Statistica pe varsta"
        },
          legend:{
                display: false,
                position: 'top',
          }*/
        }
      });
  }


const doughnutPlot = () => {

    var xValues = ["male", "female"];

    var ctx = document.getElementById('doughnutChart').getContext('2d');

    var yValues = [50, 50];

    var doughnutColors = ["red", "blue"];
  
    new Chart(ctx, {
      type: "doughnut",
      data: {
        labels: xValues,
        datasets: [{
          label: "asda", 
          backgroundColor: doughnutColors,
          data: yValues
        }]
      },
      options: {
        /*title: {
            display: true,
            text: "Statistica pe varsta"
        },
          legend:{
                display: false,
                position: 'top',
          }*/
      }
    });
}

const linePlot = () => {
    var xValues = ["ianuarie", "februarie", "marite"];

    var ctx = document.getElementById('lineChart').getContext('2d');

    var yValues = [1000, 2000, 5000, 10000, 20000, 50000];

    var lineColors = ["green", "purple", "blue", "red", "black", "white"];
  
    new Chart(ctx, {
      type: "line",
      data: {
        labels: xValues,
        datasets: [{
          data: [1, 2, 3, 4, 5, 6],
          fill:false
        }]
      },
      options: {
      }
    });
}

barPlot();
doughnutPlot();
linePlot(); 