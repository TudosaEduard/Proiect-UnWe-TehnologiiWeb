/* Add and remove items for diagram */  

countiesList = [];

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

        var selectedMonth = document.getElementById('monthBar').value;
        var selectedYear = document.getElementById('yearBar').value;

        url_api = url_api.concat(id.toString());
        url_api = url_api.concat("&month=");
        url_api = url_api.concat(selectedMonth.toString());
        url_api = url_api.concat("&year=");
        url_api = url_api.concat(selectedYear.toString());

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

let csvBar;

const barPlot = (dataValue) => {

    var xValues = ["under_25 age", "25_to_29 age", "30_to_39 age", "40_to_49 age", "50_to_55 age", "greater_55 age"];

    var ctx = document.getElementById('barChart').getContext('2d');

    var csvValue = [];
    for(var index in countiesList)
        {
            var value = [];
            value.push(countiesList[index]);
            value.push(dataValue[index]);
            csvValue.push(value);
        }    

    csvBar = "data:text/csv;charset=utf-8," + csvValue.map(e => e.join(",")).join("\n");

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

document.getElementById("download-data-bar").addEventListener("click", function(){
    downloadBarCSV();
  });

function downloadBarCSV(){
    var encodedUri = encodeURI(csvBar);
    var link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "my_data_bar.csv");
    document.body.appendChild(link); // Required for FF
    link.click();   
}

/*Get Api sex data from database*/

const getApiSex = async () => {

    const maleListData = [];
    const femaleListData = [];

    for (var countie in countiesList){

        url_api = "https://unemployment-rate-web-api.herokuapp.com/history/sex/?county-id=";

        var id = idCountiesList.indexOf(countiesList[countie].toUpperCase());
        id = id + 1;

        var selectedMonth = document.getElementById('monthDoughnut').value;
        var selectedYear = document.getElementById('yearDoughnut').value;

        url_api = url_api.concat(id.toString());
        url_api = url_api.concat("&month=");
        url_api = url_api.concat(selectedMonth.toString());
        url_api = url_api.concat("&year=");
        url_api = url_api.concat(selectedYear.toString());

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

/*Get Api sex data from database*/

const getApiAll = async () => {

    const countiesTotal = [];

    for (var countie in countiesList){

        url_api = "https://unemployment-rate-web-api.herokuapp.com/history/?county-id=";

        var id = idCountiesList.indexOf(countiesList[countie].toUpperCase());
        id = id + 1;

        var selectedMonthFrom = document.getElementById('monthFrom').value;
        var selectedYearFrom = document.getElementById('yearFrom').value;
        var selectedMonthTo = document.getElementById('monthTo').value;
        var selectedYearTo = document.getElementById('yearTo').value;

        url_api = url_api.concat(id.toString());
        url_api = url_api.concat("&from-month=");
        url_api = url_api.concat(selectedMonthFrom.toString());
        url_api = url_api.concat("&from-year=");
        url_api = url_api.concat(selectedYearFrom.toString());
        url_api = url_api.concat("&to-month=");
        url_api = url_api.concat(selectedMonthTo.toString());
        url_api = url_api.concat("&to-year=");
        url_api = url_api.concat(selectedYearTo.toString());

        const postPromise = await fetch(url_api);
        const response = await postPromise.json();

        const dataList = [];

        for (var key in response)
            dataList.push(response[key]); 

        countiesTotal.push(dataList);     
    }

   lineChart(countiesTotal);

}


/*Line chart*/

let chartLine;

const lineChart = (dataValue) => {

    var xValues = [];

    for(var key in dataValue[0])
        {
            var value;
            for(var index in dataValue[0][key])
            {
                if(index.toString() == 'month')
                    {
                        value = dataValue[0][key][index].toString();
                        value = value.concat("_");
                    }
                if(index.toString() == 'year')
                        value = value.concat(dataValue[0][key][index].toString());    
            }
            xValues.push(value);
        }

    var dataList = [];

    for(var arr in dataValue)
        {
            var value = [];
            for(var key in dataValue[arr])
            {
                for(var index in dataValue[arr][key])
                {
                    if(index.toString() != 'month' && index.toString() != 'year')
                        value.push(dataValue[arr][key][index]);  
                }
            }
            dataList.push(value);
        }    

    var ctx = document.getElementById('lineChart').getContext('2d');

    if(chartLine)
        chartLine.destroy();

    if(countiesList.length == 1){

        chartLine = new Chart(ctx, {
            type: "line",
            data: {  
            labels: xValues,
            datasets: [{
                label: countiesList[0],
                data: dataList[0],
                borderColor: 'rgba(239,107,107,255)',
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

    } else if(countiesList.length == 2) {

        chartLine = new Chart(ctx, {
            type: "line",
            data: {  
            labels: xValues,
            datasets: [{
                label: countiesList[0],
                data: dataList[0],
                borderColor: 'rgba(239,107,107,255)',
                fill: false
            } , {
                label: countiesList[1],
                data: dataList[1],
                borderColor: 'rgba(109,176,234,255)',
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

    } else {

        chartLine = new Chart(ctx, {
            type: "line",
            data: {  
            labels: xValues,
            datasets: [{
                label: countiesList[0],
                data: dataList[0],
                borderColor: 'rgba(239,107,107,255)',
                fill: false
            } , {
                label: countiesList[1],
                data: dataList[1],
                borderColor: 'rgba(109,176,234,255)',
                fill: false
            } , {
                label: countiesList[2],
                data: dataList[2],
                borderColor: 'rgba(140,208,202,255)',
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

    return chartLine;
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

 /*Charts display*/

function barChartDisplay(){

    document.getElementById('monthBar').addEventListener('change' , getApiAge);

    document.getElementById('yearBar').addEventListener('change', getApiAge);

}

 function doughnutChartDisplay(){

    document.getElementById('monthDoughnut').addEventListener('change' , getApiSex);

    document.getElementById('yearDoughnut').addEventListener('change' , getApiSex);

 }

 function lineChartDisplay(){

    document.getElementById('monthFrom').addEventListener('change' , getApiAll);

    document.getElementById('yearFrom').addEventListener('change' , getApiAll);

    document.getElementById('monthTo').addEventListener('change' , getApiAll);

    document.getElementById('yearTo').addEventListener('change' , getApiAll);

 }

 /* Display chart function */

const goToChart = () => {
    let chartSection = document.getElementById("diagram-statistics");
    if(countiesList.length > 0){
        chartSection.style.display = "block";

        getApiAge();
        getApiSex();
        getApiAll();

        barChartDisplay();
        doughnutChartDisplay();
        lineChartDisplay();

        setTimeout(function () {
            window.location.href='#diagram-statistics';
        } , 2500);
    }
}