var ctx = document.getElementById("myChart").getContext("2d");

var myChart = new Chart(ctx, {
 type:"bar",
 data :{
     labels:[" 17-18","18-19","19-20","20-21","21-22"],
     datasets:[
         {
             data:[86,119,150,205,364],
             label: "No. of offers above 20l",
             backgroundColor:["blue","blue","blue","blue","blue"],

         },
         {
            data:[289,413,473,549,795],
            label: "No. Of offers btw 10l-20l",
            backgroundColor:["red","red","red","red","red"],

        },
        {
            data:[294,325,272,355,300],
            label: "No. of Companies",
            backgroundColor:["blue","blue","blue","blue","red"],

        },
     ],
 },
 options:{
     responsive:false,
     layout:{
         padding:{
             
             left:40,
         },
     },
     tooltips:{

         enabled:true,
         titleFontSize:30,
         titleSpacing: 3,

     },
     title: {
         display: true,
         text: "custom size",
         fontSize: 40,
         position: "bottom",
     },
     animation:{
         duration: 5000,
         easing: "easeInOutBounce",
     },
 },


});

var ctx = document.getElementById("myChart1").getContext("2d");

var myChart1 = new Chart(ctx, {
 type:"doughnut",
 data :{
     labels:[" 17-18","18-19","19-20","20-21","21-22"],
     datasets:[
         {
             data:[1153,1435,1574,1772,2082],
             label: " Total No. of offers",
             backgroundColor:["lime","lime","lime","lime","lime"],

         },
        
         
     ],
 },
 options:{
     responsive:false,
     layout:{
         padding:{
             
             left:40,
         },
     },
     tooltips:{

         enabled:true,
         titleFontSize:30,
         titleSpacing: 3,

     },
     title: {
         display: true,
         text: "custom size",
         fontSize: 40,
         position: "bottom",
     },
     animation:{
         duration: 5000,
         easing: "easeInOutBounce",
     },
 },


});


var ctx = document.getElementById("myChart2").getContext("2d");

var myChart2 = new Chart(ctx, {
 type:"bar",
 data :{
     labels:[" 17-18","18-19","19-20","20-21","21-22"],
     datasets:[
        
         {
            data:[9.42,12.12,12.24,12.37,15.31],
            label: "Average Salary",
            backgroundColor:["blue","blue","blue","blue","red"],

        },
     ],
 },
 options:{
     responsive:false,
     layout:{
         padding:{
             
             left:30,
         },
     },
     tooltips:{

         enabled:true,
         titleFontSize:30,
         titleSpacing: 3,

     },
     title: {
         display: true,
         text: "custom size",
         fontSize: 40,
         position: "bottom",
     },
     animation:{
         duration: 5000,
         easing: "easeInOutBounce",
     },
 },


});