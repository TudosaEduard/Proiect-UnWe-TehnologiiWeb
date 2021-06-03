<section id="county-statistics">

    <h1 class="anim" data-animtype="from-top" data-animdelay="0s">Detalii șomaj pe județ</h1>

    <div class="charts">

        <div class="bar-chart">
            <div class="text-bar">
                <h1>Statistici pe grupe de vârstă</h1>
            </div>
            <div class="dropdown-bar">
                <h1>Alege luna pentru comparare: </h1>
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
            <div class="text-bar">
                <h1>Statistici pe gen</h1>
            </div>
            <div class="dropdown-bar">
                <h1>Alege luna pentru comparare: </h1>
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
            <div class="text-bar">
                <h1>Statistica generala in ultimul an</h1>
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