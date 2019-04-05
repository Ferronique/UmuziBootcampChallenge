// Code goes here

var date = new Date();
  var day = date.getDay();
  var daylist = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  
  console.log("Today is: "+daylist[day]+".")
  
  var time = new Date();
  var hour = time.getHours();
  var minutes = time.getMinutes();
  var seconds = time.getSeconds();
  
  if(hour > 12){
    hour = hour - 12;
  }
  if (hour > 12){
    hour= hour + "PM";
  }else{
    hour = hour + "AM";
  }
  

  
  console.log("Current time is: "+ hour+" : "+minutes+" : "+seconds+".");