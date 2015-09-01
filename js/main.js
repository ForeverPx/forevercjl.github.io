/**
 * Created by panxiao on 15/8/27.
 */
var curMovingSection = 'section-1';
$(function(){
    function onSection2(){
        $('.book-show').slick({
            centerMode: true,
            centerPadding: '60px',
            slidesToShow: 3,
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        arrows: false,
                        centerMode: true,
                        centerPadding: '40px',
                        slidesToShow: 3
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        arrows: false,
                        centerMode: true,
                        centerPadding: '40px',
                        slidesToShow: 1
                    }
                }
            ]
        });
        $(".game-show").masonry();
        setTimeout(function(){
            $("#section-2").niceScroll();
        },450);
    }

    Pace.on('start',function(){
        $("#warning").show();
    });

    Pace.on('done',function(){
        $("#warning").hide();
        $(".left-bar").addClass('left-bar-out');

        setTimeout(function(){
            $("#section-1").addClass('section-show');
            setTimeout(function(){
                $("#section-1").niceScroll();
                curMovingSection = '';
            },1000);
        },500);
    });

    Highcharts.theme = {
        colors:['#00ff00'],
        chart: {
            backgroundColor: {
                linearGradient: { x1: 0, y1: 0, x2: 1, y2: 1 },
                stops: [
                    [0, 'rgb(0, 0, 0)'],
                    [1, 'rgb(0, 0, 0)']
                ]
            },
            style: {
                fontFamily: 'Trebuchet MS, Verdana, sans-serif'
            },
            plotBorderColor: '#606063'
        },
        title: {
            style: {
                color: '#E0E0E3',
                textTransform: 'uppercase',
                fontSize: '20px'
            }
        },
        subtitle: {
            style: {
                color: '#E0E0E3',
                textTransform: 'uppercase'
            }
        },
        xAxis: {
            gridLineColor: '#707073',
            labels: {
                style: {
                    color: '#E0E0E3'
                }
            },
            lineColor: '#707073',
            minorGridLineColor: '#505053',
            tickColor: '#707073',
            title: {
                style: {
                    color: '#A0A0A3'

                }
            }
        },
        yAxis: {
            gridLineColor: '#707073',
            labels: {
                style: {
                    color: '#E0E0E3'
                }
            },
            lineColor: '#707073',
            minorGridLineColor: '#505053',
            tickColor: '#707073',
            tickWidth: 1,
            title: {
                style: {
                    color: '#A0A0A3'
                }
            }
        },
        tooltip: {
            backgroundColor: 'rgba(0, 0, 0, 0.85)',
            style: {
                color: '#F0F0F0'
            }
        },
        plotOptions: {
            series: {
                dataLabels: {
                    color: '#B0B0B3'
                },
                marker: {
                    lineColor: '#333'
                }
            },
            boxplot: {
                fillColor: '#505053'
            },
            candlestick: {
                lineColor: 'white'
            },
            errorbar: {
                color: 'white'
            }
        },
        legend: {
            itemStyle: {
                color: '#E0E0E3'
            },
            itemHoverStyle: {
                color: '#FFF'
            },
            itemHiddenStyle: {
                color: '#606063'
            }
        },
        credits: {
            style: {
                color: '#666'
            }
        },
        labels: {
            style: {
                color: '#707073'
            }
        },

        drilldown: {
            activeAxisLabelStyle: {
                color: '#F0F0F3'
            },
            activeDataLabelStyle: {
                color: '#F0F0F3'
            }
        },

        navigation: {
            buttonOptions: {
                symbolStroke: '#DDDDDD',
                theme: {
                    fill: '#505053'
                }
            }
        },

        // scroll charts
        rangeSelector: {
            buttonTheme: {
                fill: '#505053',
                stroke: '#000000',
                style: {
                    color: '#CCC'
                },
                states: {
                    hover: {
                        fill: '#707073',
                        stroke: '#000000',
                        style: {
                            color: 'white'
                        }
                    },
                    select: {
                        fill: '#000003',
                        stroke: '#000000',
                        style: {
                            color: 'white'
                        }
                    }
                }
            },
            inputBoxBorderColor: '#505053',
            inputStyle: {
                backgroundColor: '#333',
                color: 'silver'
            },
            labelStyle: {
                color: 'silver'
            }
        },

        navigator: {
            handles: {
                backgroundColor: '#666',
                borderColor: '#AAA'
            },
            outlineColor: '#CCC',
            maskFill: 'rgba(255,255,255,0.1)',
            series: {
                color: '#7798BF',
                lineColor: '#A6C7ED'
            },
            xAxis: {
                gridLineColor: '#505053'
            }
        },

        scrollbar: {
            barBackgroundColor: '#808083',
            barBorderColor: '#808083',
            buttonArrowColor: '#CCC',
            buttonBackgroundColor: '#606063',
            buttonBorderColor: '#606063',
            rifleColor: '#FFF',
            trackBackgroundColor: '#404043',
            trackBorderColor: '#404043'
        },

        // special colors for some of the
        legendBackgroundColor: 'rgba(0, 0, 0, 0.5)',
        background2: '#000',
        dataLabelsColor: '#B0B0B3',
        textColor: '#C0C0C0',
        contrastTextColor: '#F0F0F3',
        maskColor: 'rgba(255,255,255,0.3)'
    };

    Highcharts.setOptions(Highcharts.theme);

    $('#skill-chart').highcharts({
        chart: {
            polar: true,
            type: 'line'
        },
        title: {
            text: '',
            x: -80
        },
        pane: {
            size: '80%'
        },
        xAxis: {
            categories: ['Javascript', 'HTML/CSS', 'Java', 'Nodejs',
                'Python', 'HTML5'],
            tickmarkPlacement: 'on',
            lineWidth: 0
        },
        yAxis: {
            gridLineInterpolation: 'polygon',
            lineWidth: 0,
            min: 0
        },
        tooltip: {
            shared: true,
            pointFormat: '<span style="color:{series.color}">{series.name}: <b>${point.y:,.0f}</b><br/>'
        },
        legend: {
            enabled: false,
            align: 'right',
            verticalAlign: 'top',
            y: 70,
            layout: 'vertical'
        },
        exporting:{
            enabled:false
        },
        credits:{
            enabled:false
        },
        series: [{
            name: 'Allocated Budget',
            data: [9, 8, 5, 7, 2, 4],
            pointPlacement: 'on'
        }]
    });

    var nextMovingTimeout = null;

    $(".left-inner a i").click(function(){
        var that = $(this);
        var tag = that.attr('data-tag');
        if(tag == 'section-3'){
            window.location.href = 'https://github.com/ForeverPx';
            return;
        }
        clearTimeout(nextMovingTimeout);
        if(curMovingSection){
            if(curMovingSection != tag){
                $("."+curMovingSection).removeClass('section-show');
                $(".left-inner").find("i[data-tag="+curMovingSection+"]").removeClass('active');
            }else{
                that.parent().parent().find('.active').removeClass('active');
                $("#"+curMovingSection).addClass('section-show');
                $(".left-inner").find("i[data-tag="+curMovingSection+"]").addClass('active');
            }
        }
        that.parent().parent().find('.active').removeClass('active');
        curMovingSection = $(".section-show").attr('id');
        $(".section-show").removeClass('section-show');

        that.addClass('active');
        nextMovingTimeout = setTimeout(function(){
            $("#"+tag).addClass('section-show');
            curMovingSection = tag;

            if(tag == 'section-2'){
                onSection2();
            }else if(tag == 'section-5'){
                $('.flexslider').flexslider({
                    animation: "slide",
                    animationLoop: true,
                    itemWidth: 300,
                    itemMargin: 0,
                    prevText: "<i class='fa fa-angle-left'></i>",
                    nextText: "<i class='fa fa-angle-right'></i>"
                });
            }
        },450);
    });

    $("#weibo .social-btn").click(function(){
        window.location.href = 'http://weibo.com/axdwm/home?wvr=5';
    });

    $("#wechat .social-btn").click(function(){
        $("#qrcode").bPopup();
    });

    $("#qq .social-btn").click(function(){
        $("#qqcode").bPopup();
    });

    $("#renren .social-btn").click(function(){
        window.location.href = 'http://www.renren.com/301724072';
    });
});