/* Get the county user clicked on */
const barPlot = (c) => {
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

const mapBig = document.querySelector('.map-bg .map');

mapBig.addEventListener('click', (e) => {
    let selectedCounty = e.target;
    window.open("county-statistics.html");
})

const mapSmall = document.querySelector('#surface1');
mapSmall.addEventListener('click', (e) => {
    let selectedCounty = e.target.parentNode;
})

/* Display info when hovering on a county*/
document.querySelector("#county-details").addEventListener('mousemove', (e) => {
    let infoBox = document.querySelector("#county-details .info-box");
    let pageHeight = document.querySelector("#county-details").offsetHeight;
    let pageWidth = document.querySelector("#county-details").offsetWidth;

    infoBox.style.top = (e.pageY - pageHeight - 30).toString() + "px";
    infoBox.style.left = (e.pageX - infoBox.offsetWidth / 2).toString() + "px";
})

const setInfoBoxInfo = (countyName, countyTotalUnemployedNumber) => {
    let countyNameInfo = document.querySelector("#info-box-county-name");
    let countyTotalUnemployedNumberInfo = document.querySelector("#info-box-county-unemployed-number");

    countyNameInfo.innerHTML = countyName;
    countyTotalUnemployedNumberInfo.innerHTML = countyTotalUnemployedNumber;
}

document.querySelectorAll("#county-details .map-bg .map a").forEach(elem => {
    let infoBox = document.querySelector("#county-details .info-box");
    elem.addEventListener('mouseover', (e) => {
        let countyName = e.target.getAttribute("name");
        let countyTotalUnemployedNumber = 1021;
        setInfoBoxInfo(countyName, countyTotalUnemployedNumber);
        infoBox.style.visibility = "visible";
    })
    elem.addEventListener('mouseleave', (e) => {
        infoBox.style.visibility = "hidden"; 
    })
})