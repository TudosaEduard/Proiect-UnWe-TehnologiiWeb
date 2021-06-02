const linePlot = () => {
    var xValues = ["ianuarie", "februarie", "martie", "aprilie", "mai", "iunie"];

    var ctx = document.getElementById('lineChart').getContext('2d');

    var yValues = [46000, 54000];

    var lineColors = ["red", "green", "blue", "yellow"];


    new Chart(ctx, {
      type: "line",
      data: {
          labels: xValues,
          datasets: [{
          backgroundColor: lineColors,
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

linePlot();