<section id="statistic-compare">
    <h1 class="anim" data-animtype="from-top" data-animdelay="0s">Compară statisticile</h1>
    <div class="choose-county">
        <div class="input-group">
            <div class="input-wrapper">
                <input type="text" placeholder="Adaugă județ (maxim 5)" class="add-text" id="candidate">
            </div>
            <button onclick="addItem()" class="btn-icon-add"><i class="plus"></i></button>
            <div class="autocom-box"></div>
        </div>
        <ul id="dynamic-list" class="list"></ul>
        <button onclick="goToChart()" class="show-btn">Afișează</button>
    </div>
</section>