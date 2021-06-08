/* Add and remove items for diagram */

countiesList = [];     

idCountiesList = [
    "ALBA",
    "ARAD",
    "ARGEȘ",
    "BACĂU",
    "BIHOR",
    "BISTRIȚA-NĂSĂUD",
    "BOTOȘANI",
    "BRĂILA",
    "BRAȘOV",
    "BUZĂU",
    "CĂLĂRAȘI",
    "CARAȘ-SEVERIN",
    "CLUJ",
    "CONSTANȚA",
    "COVASNA",
    "DÂMBOVIȚA",
    "DOLJ",
    "GALAȚI",
    "GIURGIU",
    "GORJ",
    "HARGHITA",
    "HUNEDOARA",
    "IALOMIȚA",
    "IAȘI",
    "ILFOV",
    "MARAMUREȘ",
    "MEHEDINȚI",
    "BUCUREȘTI",
    "MUREȘ",
    "NEAMȚ",
    "OLT",
    "PRAHOVA",
    "SĂLAJ",
    "SATU-MARE",
    "SIBIU",
    "SUCEAVA",
    "TELEORMAN",
    "TIMIȘ",
    "TULCEA",
    "VÂLCEA",
    "VASLUI",
     "VRANCEA"
    ]

function addItem() {
    var ul = document.getElementById("dynamic-list");
    var candidate = document.getElementById("candidate");
    var li = document.createElement("li");

    if(countiesList.length < 3){

        if(countyContainer.includes(candidate.value) != false){
        
            if(countiesList.includes(candidate.value) == false){
            
                li.setAttribute('id', candidate.value);
                li.appendChild(document.createTextNode(candidate.value));
                li.style.animation = 'from-left 0.5s forwards ease-out';

                var button = document.createElement("button");
                var i = document.createElement("i");

                button.classList.add("btn-icon-remove");

                i.classList.add("plus");
                
                button.setAttribute("id" , candidate.value);
                button.appendChild(i);

                li.appendChild(button);
                ul.appendChild(li);
                
                countiesList.push(candidate.value);

                button.addEventListener("click" , () => {
                    countiesList.splice(countiesList.indexOf(button.getAttribute("id")) , 1);
                    li.removeChild(button);
                    ul.removeChild(li);
                })

            }
        }
    }
}

/* Autocomplete */

const searchWrapper = document.querySelector(".input-group");
const inputBox = searchWrapper.querySelector("input");
const suggBox = searchWrapper.querySelector(".autocom-box");

inputBox.onkeyup = (e)=>{
    let userData = e.target.value; 
    let emptyArray = [];
    if(userData){
        
        emptyArray = countyContainer.filter((data)=>{
            return data.toLocaleLowerCase().startsWith(userData.toLocaleLowerCase()); 
        });

        emptyArray = emptyArray.map((data)=>{
            return data = '<li>'+ data +'</li>';
        });
       
        searchWrapper.classList.add("active");
        showSuggestion(emptyArray);

        let allList = suggBox.querySelectorAll("li");
        for(let i = 0 ; i < allList.length ; i ++)
            allList[i].setAttribute("onclick" , "select(this)");

    } else {
        searchWrapper.classList.remove("active");
    }
}

function select(elem){
    let selectUserData = elem.textContent;
    inputBox.value = selectUserData;
    searchWrapper.classList.remove("active");
}

function showSuggestion(list){
    let listData;
    if(!list.length){
        userValue = inputBox.value;
        listData = '<li>'+ userData + '</li>';
    } else {
        listData = list.join('');
    }
    suggBox.innerHTML = listData;
}

/*Charts diagrams*/

/*Get Api age data from database*/

const getApiAge = async () => {

    const countiesListData = [];

    for (var countie in countiesList){

        url_api = "https://unemployment-rate-web-api.herokuapp.com/history/age/?county-id=";

        var id = idCountiesList.indexOf(countiesList[countie].toUpperCase());
        id = id + 1;

        url_api = url_api.concat(id.toString());
        url_api = url_api.concat("&month=");
        url_api = url_api.concat("1");
        url_api = url_api.concat("&year=");
        url_api = url_api.concat("2021");

        const postPromise = await fetch(url_api);
        const response = await postPromise.json();

        const dataList = [];

        for (var key in response)
                if(key.toString() != 'month' && key.toString() != 'year'){
                    dataList.push(response[key]);
                }   

        countiesListData.push(dataList);      
    }

    barPlot(countiesListData);

}

/*BarPlot chart*/

let barChart;

const barPlot = (dataValue) => {

    var xValues = ["under_25 age", "25_to_29 age", "30_to_39 age", "40_to_49 age", "50_to_55 age", "greater_55 age"];

    var ctx = document.getElementById('barChart').getContext('2d');

    if(countiesList.length == 1) {
        
        if(barChart)
            barChart.destroy();

        barChart = new Chart(ctx, {
            type: "bar",
            data: {
              labels: xValues,
              datasets: [{
                label: countiesList[0],
                backgroundColor: 'rgba(240,160,102,255)',
                data: dataValue[0],
              }]
            },
            options: {
                legend:{
                      display: true,
                      position: 'top',
                },
                tooltips:{
                    mode: 'index',
                },
                scales:{
                    xAxes: [{
                        stacked: true,
                    }],
                    yAxes: [{
                        stacked: true,
                    }]
                }
            }
          }
          );

    }
    else if(countiesList.length == 2) {

        if(barChart)
            barChart.destroy();

        barChart = new Chart(ctx, {
            type: "bar",
            data: {
              labels: xValues,
              datasets: [{
                label: countiesList[0],
                backgroundColor: 'rgba(240,160,102,255)',
                data: dataValue[0],
              } , {
                  label: countiesList[1],
                  backgroundColor: 'rgba(109,176,234,255)',
                  data: dataValue[1],
              }]
            },
            options: {
                legend:{
                      display: true,
                      position: 'top',
                },
                tooltips:{
                    mode: 'index',
                },
                scales:{
                    xAxes: [{
                        stacked: true,
                    }],
                    yAxes: [{
                        stacked: true,
                    }]
                }
            }
          }
          );
        
    } else {

        if(barChart)
            barChart.destroy();

        barChart = new Chart(ctx, {
            type: "bar",
            data: {
              labels: xValues,
              datasets: [{
                label: countiesList[0],
                backgroundColor: 'rgba(240,160,102,255)',
                data: dataValue[0],
              } , {
                  label: countiesList[1],
                  backgroundColor: 'rgba(109,176,234,255)',
                  data: dataValue[1],
              } , {
                  label: countiesList[2],
                  backgroundColor: 'rgba(140,208,202,255)',
                  data: dataValue[2],
              }]
            },
            options: {
                legend:{
                      display: true,
                      position: 'top',
                },
                tooltips:{
                    mode: 'index',
                },
                scales:{
                    xAxes: [{
                        stacked: true,
                    }],
                    yAxes: [{
                        stacked: true,
                    }]
                }
            }
          }
          );
    }
    return barChart;

}

/*Get Api sex data from database*/

const getApiSex = async () => {

    const maleListData = [];
    const femaleListData = [];

    for (var countie in countiesList){

        url_api = "https://unemployment-rate-web-api.herokuapp.com/history/sex/?county-id=";

        var id = idCountiesList.indexOf(countiesList[countie].toUpperCase());
        id = id + 1;

        url_api = url_api.concat(id.toString());
        url_api = url_api.concat("&month=");
        url_api = url_api.concat("1");
        url_api = url_api.concat("&year=");
        url_api = url_api.concat("2021");

        const postPromise = await fetch(url_api);
        const response = await postPromise.json();

        const dataList = [];

        for (var key in response)
                if(key.toString() != 'month' && key.toString() != 'year'){
                    dataList.push(response[key]);
                }   

        maleListData.push(dataList[0]);
        femaleListData.push(dataList[1]);      
    }

    console.log(maleListData);
    console.log(femaleListData);

    maleDoughnut(maleListData);
    femaleDoughnut(femaleListData);

}

/*Doughnut charts*/

let maleChart;

const maleDoughnut = (dataValue) => {
    var barColors = ['rgba(254,218,109,255)','rgba(178,215,255,255)','rgba(250,178,213,255)'];

    var ctx = document.getElementById('maleChart').getContext('2d');

    if(maleChart)
        maleChart.destroy();

    maleChart = new Chart(ctx, {
        type: "doughnut",
        data: {
        labels: countiesList,
        datasets: [{
            backgroundColor: barColors,
            data: dataValue,
            }]
        },
        options: {
            title: {
                display: true,
                text: "Bărbați",
                position: 'bottom',
              }
        }
    });

    return maleChart;
}

let femaleChart;

const femaleDoughnut = (dataValue) => {
    var barColors = ['rgba(254,218,109,255)','rgba(178,215,255,255)','rgba(250,178,213,255)'];

    var ctx = document.getElementById('femaleChart').getContext('2d');

    if(femaleChart)
        femaleChart.destroy();

    femaleChart = new Chart(ctx, {
        type: "doughnut",
        data: {
        labels: countiesList,
        datasets: [{
            backgroundColor: barColors,
            data: dataValue,
            }]
        },
        options: {
            title: {
                display: true,
                text: "Femei",
                position: 'bottom',
              }
        }
    });

    return femaleChart;
}

/*Line chart*/

const lineChart = () => {
    var xValues = ["Ianuarie" , "Februarie" , "Martie" , "Aprilie" , "Mai", "Iunie" , "Iulie" , "August" , "Septembrie" , "Octombrie" , "Noiembrie" , "Decembrie"];
    var ctx = document.getElementById('lineChart').getContext('2d');

    new Chart(ctx, {
        type: "line",
        data: {  
        labels: xValues,
        datasets: [{
            label: "Arad",
            data: [860,1140,1060,1060,1070,1110,1330,2210,7830,2478 , 100 , 500],
            borderColor: 'rgba(239,107,107,255)',
            fill: false
        },{
            label: "Alba",
            data: [1600,1700,1700,1900,2000,2700,4000,5000,6000,7000 , 8000 , 55],
            borderColor: 'rgba(159,103,184,255)',
            fill: false
        },{
            label: "Suceava",
            data: [300,700,2000,5000,6000,4000,2000,1000,200,100 , 200 , 500],
            borderColor: 'rgba(117,193,222,255)',
            fill: false
        }]
    },
        options: {
            tooltips:{
                mode: 'index',
            },
            legend: {display: true},
        }
    });
}

/*Download PDF buttons*/

document.getElementById('download-chart-bar').addEventListener("click" , downloadPDF1);

function downloadPDF1() {
	var newCanvas = document.querySelector('#barChart');

    //create image from dummy canvas
	var newCanvasImg = newCanvas.toDataURL("image/jpeg", 1.0);
  
  	//creates PDF from img
	var doc = new jsPDF('landscape');
	doc.setFontSize(20);
    doc.setFillColor('#FFFFFF');
	doc.text(15, 15, "Super Cool Chart");
	doc.addImage(newCanvasImg, 'JPEG', 10, 10, 280, 150 );
	doc.save('new-barChart.pdf');
 }

 document.getElementById('download-chart-male').addEventListener("click" , downloadPDF2);

function downloadPDF2() {
	var newCanvas = document.querySelector('#maleChart');

    //create image from dummy canvas
	var newCanvasImg = newCanvas.toDataURL("image/jpeg", 1.0);
  
  	//creates PDF from img
	var doc = new jsPDF('landscape');
	doc.setFontSize(20);
    doc.setFillColor('#FFFFFF');
	doc.text(15, 15, "Super Cool Chart");
	doc.addImage(newCanvasImg, 'JPEG', 10, 10, 280, 150 );
	doc.save('new-doughnutMaleChart.pdf');
 }

 document.getElementById('download-chart-female').addEventListener("click" , downloadPDF3);

function downloadPDF3() {
	var newCanvas = document.querySelector('#femaleChart');

    //create image from dummy canvas
	var newCanvasImg = newCanvas.toDataURL("image/jpeg", 1.0);
  
  	//creates PDF from img
	var doc = new jsPDF('landscape');
	doc.setFontSize(20);
    doc.setFillColor('#FFFFFF');
	doc.text(15, 15, "Super Cool Chart");
	doc.addImage(newCanvasImg, 'JPEG', 10, 10, 280, 150 );
	doc.save('new-doughnutFemaleChart.pdf');
 }

 document.getElementById('download-chart-line').addEventListener("click" , downloadPDF4);

function downloadPDF4() {
	var newCanvas = document.querySelector('#lineChart');

    //create image from dummy canvas
	var newCanvasImg = newCanvas.toDataURL("image/jpeg", 1.0);
  
  	//creates PDF from img
	var doc = new jsPDF('landscape');
	doc.setFontSize(20);
    doc.setFillColor('#FFFFFF');
	doc.text(15, 15, "Super Cool Chart");
	doc.addImage(newCanvasImg, 'JPEG', 10, 10, 280, 150 );
	doc.save('new-lineChart.pdf');
 }

 /* Display chart function */

const goToChart = () => {
    let chartSection = document.getElementById("diagram-statistics");
    if(countiesList.length > 0){
        chartSection.style.display = "block";

        getApiAge();
        getApiSex();
        lineChart();

        setTimeout(function () {
            window.location.href='#diagram-statistics';
        } , 800);
    }
}

/*Download CSV buttons*/

/*document.getElementById("download-data-bar").addEventListener("click", function(){
    downloadCSV1({ filename: "chart-dataBar.csv", chart: barPlot()})
  });
  
  function convertChartDataToCSV1(args) {  
    var result, ctr, keys, columnDelimiter, lineDelimiter, data;
  
    data = args.data || null;
    if (data == null || !data.length) {
      return null;
    }
  
    columnDelimiter = args.columnDelimiter || ',';
    lineDelimiter = args.lineDelimiter || '\n';
  
    keys = Object.keys(data[0]);
  
    result = '';
    result += keys.join(columnDelimiter);
    result += lineDelimiter;
  
    data.forEach(function(item) {
      ctr = 0;
      keys.forEach(function(key) {
        if (ctr > 0) result += columnDelimiter;
        result += item[key];
        ctr++;
      });
      result += lineDelimiter;
    });
    return result;
  }
  
  function downloadCSV1(args) {
    var data, filename, link;
    var csv = "";
    for(var i = 0; i < args.chart.options.data.length; i++){
      csv += convertChartDataToCSV1({
        data: args.chart.options.data[i].dataPoints
      });
    }
    if (csv == null) return;
  
    filename = args.filename || 'chart-dataBar.csv';
  
    if (!csv.match(/^data:text\/csv/i)) {
      csv = 'data:text/csv;charset=utf-8,' + csv;
    }
    
    data = encodeURI(csv);
    link = document.createElement('a');
    link.setAttribute('href', data);
    link.setAttribute('download', filename);
    document.body.appendChild(link); // Required for FF
      link.click(); 
      document.body.removeChild(link);   
  }*/