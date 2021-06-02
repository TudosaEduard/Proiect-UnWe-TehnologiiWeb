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

barPlot();