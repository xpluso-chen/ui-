$(document).ready(function() {
    var data=[5,10,15,20,25];//模拟数据
    
    var chart = $('<div class="bar-chart"></div>'); // 创建柱状图容器
    $('#chart').append(chart);
    
    //遍历数据,生成每一个柱子
    for (var i = 0; i < data.length; i++) {
    var bar = $('<div class="bar"></div>').css('height', data[i] + 'px');
    chart.append(bar);
    
    }
    });