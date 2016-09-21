var angular = require('angular');

var hello = require('./app/hello');

require('./index.styl');

var app = 'app';
module.exports = app;

angular
  .module('myApp', ['gridster'])
  .component('app', hello);





var app= angular.module('myApp',[]);
var test2;
app.controller('myCtrl',function($scope,$http,$window){
    $http.get("http://query.yahooapis.com/v1/public/yql?q=%20select%20*%20from%20yahoo.finance.historicaldata%20where%20symbol%20=%20%22AAPL%22%20and%20startDate%20=%20%222012-09-11%22%20and%20endDate%20=%20%222014-02-11%22%20&format=json%20&diagnostics=true%20&env=store://datatables.org/alltableswithkeys%20&callback=")
        .then(function(response){

            $scope.test1=response.data.query.results.quote;
            //console.log(applePriceArray);





            $scope.gridsterOpts = {
                columns: 6, // the width of the grid, in columns
                pushing: true, // whether to push other items out of the way on move or resize
                floating: true, // whether to automatically float items up so they stack (you can temporarily disable if you are adding unsorted items with ng-repeat)
                swapping: false, // whether or not to have items of the same size switch places instead of pushing down if they are the same size
                width: 'auto', // can be an integer or 'auto'. 'auto' scales gridster to be the full width of its containing element
                colWidth: 'auto', // can be an integer or 'auto'.  'auto' uses the pixel width of the element divided by 'columns'
                rowHeight: 'match', // can be an integer or 'match'.  Match uses the colWidth, giving you square widgets.
                margins: [10, 10], // the pixel distance between each widget
                outerMargin: true, // whether margins apply to outer edges of the grid
                isMobile: false, // stacks the grid items if true
                mobileBreakPoint: 600, // if the screen is not wider that this, remove the grid layout and stack the items
                mobileModeEnabled: true, // whether or not to toggle mobile mode when screen width is less than mobileBreakPoint
                minColumns: 1, // the minimum columns the grid must have
                minRows: 2, // the minimum height of the grid, in rows
                maxRows: 100,
                defaultSizeX: 2, // the default width of a gridster item, if not specifed
                defaultSizeY: 1, // the default height of a gridster item, if not specified
                minSizeX: 1, // minimum column width of an item
                maxSizeX: null, // maximum column width of an item
                minSizeY: 1, // minumum row height of an item
                maxSizeY: null, // maximum row height of an item
                resizable: {
                   enabled: true,
                   handles: ['n', 'e', 's', 'w', 'ne', 'se', 'sw', 'nw'],
                   start: function(event, $element, widget) {}, // optional callback fired when resize is started,
                   resize: function(event, $element, widget) {}, // optional callback fired when item is resized,
                   stop: function(event, $element, widget) {} // optional callback fired when item is finished resizing
                },
                draggable: {
                   enabled: true, // whether dragging items is supported
                   handle: '.my-class', // optional selector for drag handle
                   start: function(event, $element, widget) {}, // optional callback fired when drag is started,
                   drag: function(event, $element, widget) {}, // optional callback fired when item is moved,
                   stop: function(event, $element, widget) {} // optional callback fired when item is finished dragging
                }
            };




                $scope.standardItems = [
                  { sizeX: 2, sizeY: 1, row: 0, col: 0 },
                  { sizeX: 2, sizeY: 2, row: 0, col: 2 },
                  { sizeX: 1, sizeY: 1, row: 0, col: 4 },
                  { sizeX: 1, sizeY: 1, row: 0, col: 5 },
                  { sizeX: 2, sizeY: 1, row: 1, col: 0 },
                  { sizeX: 1, sizeY: 1, row: 1, col: 4 },
                  { sizeX: 1, sizeY: 2, row: 1, col: 5 },
                  { sizeX: 1, sizeY: 1, row: 2, col: 0 },
                  { sizeX: 2, sizeY: 1, row: 2, col: 1 },
                  { sizeX: 1, sizeY: 1, row: 2, col: 3 },
                  { sizeX: 1, sizeY: 1, row: 2, col: 4 }
                ];










        });


});






$(function () {
    var myurl = 'http://query.yahooapis.com/v1/public/yql?q=%20select%20*%20from%20yahoo.finance.historicaldata%20where%20symbol%20=%20%22AAPL%22%20and%20startDate%20=%20%222012-09-11%22%20and%20endDate%20=%20%222014-02-11%22%20&format=json%20&diagnostics=true%20&env=store://datatables.org/alltableswithkeys%20&callback=';

    var applePriceArray = [];
    var appleDateArray = [];

    var xhr = new XMLHttpRequest();
    xhr.open('GET', myurl, true);
    xhr.send();

    xhr.onreadystatechange = processRequest;

    function processRequest(e) {
        if (xhr.readyState == 4 && xhr.status == 200) {
            var response = JSON.parse(xhr.responseText);
            //console.log(response.query.results.quote);

            for (var i = 0; i < response.query.results.quote.length; i++) {
                var applePrice = parseInt(response.query.results.quote[i].Adj_Close);
                applePriceArray.push(applePrice);

                var appleDate = Date.parse(response.query.results.quote[i].Date);
                appleDateArray.push(appleDate);

            }


        }
    }


    console.log(applePriceArray);

        $('#container').highcharts({
            title: {
                text: 'AAPL historical price',
                x: -20 //center
            },
            xAxis:{
              type:'datetime',
                dateTimeLabelFormats: {
                    day: '%e of %b'
                }
            },

            yAxis: {
                title: {
                    text: 'Adj_Close (USD)'
                },
                plotLines: [{
                    value: 0,
                    width: 1,
                    color: '#808080'
                }]
            },
            series: [{
                data: arr2,
                pointStart:Date.UTC(2012,9,11),
                pointInterval:24*3600*1000 //oneday
            }]
        });

});



































































































































var arr2=[72,71,70,69,69,68,67,67,67,67,68,74,73,75,74,74,73,74,75,73,72,72,72,73,73,73,73,74,75,75,76,76,77,74,73,74,75,75,74,75,75,76,76,75,76,76,76,74,75,73,72,70,70,70,69,70,70,71,71,70,70,70,70,69,70,70,70,69,70,70,69,71,70,71,70,69,70,68,67,67,67,66,66,65,65,64,65,64,65,65,65,64,64,65,64,64,65,65,62,63,62,61,60,62,63,62,66,68,67,66,67,65,65,66,66,65,67,67,67,67,67,68,67,66,67,65,62,61,61,62,62,62,61,61,60,60,59,58,58,58,55,56,56,57,57,57,57,56,57,56,56,55,55,56,55,54,52,52,53,53,53,55,55,56,57,57,57,58,57,58,58,59,58,59,60,60,60,60,59,58,59,59,58,58,59,57,58,57,59,60,60,61,61,60,61,59,59,58,58,57,55,54,53,53,52,51,52,53,56,55,57,57,57,56,56,56,56,57,57,56,58,59,61,61,61,60,59,60,60,58,57,56,56,58,57,57,56,57,55,57,58,59,59,58,59,59,59,61,61,61,61,62,63,63,62,60,60,58,59,60,60,60,59,58,59,67,66,65,66,66,64,66,68,69,68,69,69,69,71,72,70,67,67,67,68,68,68,69,70,68,67,69,71,71,69,70,72,71,75,77,77,77,76,77,77,75,74,74,74,69,69,70,71,71,72,70,73,76,76,75,78,78,79,80,81,80,83,84,85,83,82,82,84,83,83,85,87,88,86,86,87,89,87,88,90,91,91,92,92,91,90,89,87,86];
                

