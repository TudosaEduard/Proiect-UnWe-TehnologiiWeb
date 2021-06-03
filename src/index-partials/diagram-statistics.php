<section id="diagram-statistics">
    <div class="chart">
        <div class="chart-menu">

            <div class="dropdown">
                <button id="choose-statistic">Alege Statistica</button>
                <div class="dropdown-content">
                    <a>Link 1</a>
                    <a>Link 2</a>
                    <a>Link 3</a>
                </div>
            </div>

            <div class="dropdown">
                <button id="choose-time">Alege intervalul de timp</button>
                <div class="dropdown-content">
                    <a>Link 1</a>
                    <a>Link 2</a>
                    <a>Link 3</a>
                </div>
            </div>

            <div class="dropdown">
                <button id="choose-chart-type">Tipul graficului</button>
                <div class="dropdown-content">
                    <a id="line-chart">Line</a>
                    <a id="bar-chart">Barplot</a>
                    <a id="donught-chart">Donught</a>
                </div>
            </div>
        </div>

        <canvas class="chart-canvas" id="myChart"></canvas>
    </div>

    <button id="download-chart" class="download-button"><i class="fa fa-download"></i> Descarca grafic</button>
    <button id="download-data" class="download-button"><i class="fa fa-download"></i> Descarca datele</button>
</section>