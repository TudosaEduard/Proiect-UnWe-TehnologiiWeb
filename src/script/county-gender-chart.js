const doughnutPlot = () => {
    var xValues = ["masculin", "feminin"];

    var ctx = document.getElementById('doughnutChart').getContext('2d');

    var yValues = [50000, 50000];

    var doughnutColors = ["rgb(126, 188, 255)", "rgb(247, 126, 185)"];

    new Chart(ctx, {
      type: "doughnut",
      data: {
          labels: xValues,
          datasets: [{
          backgroundColor: doughnutColors,
          data: yValues
        }]
      },
      options: {
              title:
              {
                position: 'top',
                display: true,
                text: "Arad"
            },
          legend:{
                display: true,
                position: 'bottom',
          }
      }
    });
}

doughnutPlot();