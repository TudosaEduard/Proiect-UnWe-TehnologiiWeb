<!DOCTYPE html>
<html lang="en">
<head>

    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document2</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="src/styles/styles.css">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.9.4/Chart.js"></script>
    

</head>

<body>

    <section id="county-statistics">

        <h1 class="anim" data-animtype="from-top" data-animdelay="0s">Detalii șomaj pe județ</h1>
    
        <div class="charts">
    
            <div class="bar-chart">
                <div class="text-bar">
                    <h1>Statistici pe grupe de vârstă</h1>
                </div>
                <div class="dropdown-bar">
                    <h1>Alege luna si anul pentru comparare: </h1>
                    <select class="month-bar">
                        <option>Ianuarie</option>
                        <option>Februarie</option>
                        <option>Martie</option>
                        <option>Aprilie</option>
                        <option>Mai</option>
                        <option>Iunie</option>
                        <option>Iulie</option>
                        <option>August</option>
                        <option>Septembrie</option>
                        <option>Octombrie</option>
                        <option>Noiembrie</option>
                        <option>Decembrie</option>
                    </select>
                    <select class="year-bar">
                        <option>2021</option>
                        <option>2020</option>
                        <option>2019</option>
                    </select>
                </div>
                <canvas class="chart-canvas" id="barChart"></canvas>
                <div class="buttons-bar">
                    <button id="download-bar-chart" class="download-button"><i class="fa fa-download"></i> Descarca
                        grafic</button>
                    <button id="download-bar-data" class="download-button"><i class="fa fa-download"></i> Descarca
                        datele</button>
                </div>
            </div>
    
    
            <div class="doughnut-chart">
                <div class="text-doughnut">
                    <h1>Statistici pe gen</h1>
                </div>
                <div class="dropdown-doughnut">
                <h1>Alege luna si anul pentru comparare: </h1>
                    <select class="month-doughnut">
                        <option>Ianuarie</option>
                        <option>Februarie</option>
                        <option>Martie</option>
                        <option>Aprilie</option>
                        <option>Mai</option>
                        <option>Iunie</option>
                        <option>Iulie</option>
                        <option>August</option>
                        <option>Septembrie</option>
                        <option>Octombrie</option>
                        <option>Noiembrie</option>
                        <option>Decembrie</option>
                    </select>
                    <select class="year-doughnut">
                        <option>2021</option>
                        <option>2020</option>
                        <option>2019</option>
                    </select>
                </div>
                <canvas class="chart-canvas" id="doughnutChart"></canvas>
                <div class="buttons-bar">
                    <button id="download-doughnut-chart" class="download-button"><i class="fa fa-download"></i> Descarca
                        grafic</button>
                    <button id="download-doughnut-data" class="download-button"><i class="fa fa-download"></i> Descarca
                        datele</button>
                </div>
            </div>
    
    
            <div class="line-chart">
                <div class="text-line">
                    <h1>Statistica generala</h1>
                </div>
                <div class="dropdown-line">
                    <h1>Alege luna si anul pentru comparare: </h1>
                    <select class="month-line-from">
                        <option>Ianuarie</option>
                        <option>Februarie</option>
                        <option>Martie</option>
                        <option>Aprilie</option>
                        <option>Mai</option>
                        <option>Iunie</option>
                        <option>Iulie</option>
                        <option>August</option>
                        <option>Septembrie</option>
                        <option>Octombrie</option>
                        <option>Noiembrie</option>
                        <option>Decembrie</option>
                    </select>
                    <select class="year-line-from">
                        <option>2021</option>
                        <option>2020</option>
                        <option>2019</option>
                    </select>
                    <select class="month-line-to">
                        <option>Ianuarie</option>
                        <option>Februarie</option>
                        <option>Martie</option>
                        <option>Aprilie</option>
                        <option>Mai</option>
                        <option>Iunie</option>
                        <option>Iulie</option>
                        <option>August</option>
                        <option>Septembrie</option>
                        <option>Octombrie</option>
                        <option>Noiembrie</option>
                        <option>Decembrie</option>
                    </select>
                    <select class="year-line-to">
                        <option>2021</option>
                        <option>2020</option>
                        <option>2019</option>
                    </select>
                </div>
                <canvas class="chart-canvas" id="lineChart"></canvas>
                <div class="buttons-bar">
                    <button id="download-line-chart" class="download-button"><i class="fa fa-download"></i> Descarca
                        grafic</button>
                    <button id="download-line-data" class="download-button"><i class="fa fa-download"></i> Descarca
                        datele</button>
                </div>
            </div>
    
        </div>
    </section>

    <script src="src/script/animations.js"></script>
    <script src="src/script/chart-diagram.js"></script>
    <script src="src/script/counties.js"></script>
    <script src="src/script/parse-url-query-string.js"></script>

</body>

</html>