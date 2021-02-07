


var  getweather = async(e) =>{
    
    var cityName = $('#search').val(); 
    var city =  document.getElementById('city');
    var w_footer = document.getElementById('w_footer'); 
    var temp  =document.getElementById('temp');
    var icon = document.getElementById('icon');

    if(cityName == "")
    {
        city.innerText = 'Enter the city Name first';
        w_footer.classList.add('hide');
        
    }
   else{
    
       try{
       var url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=844522a9f71e49b2206829d167137684`;
       var data = await fetch(url);
       var objData = await data.json();
       arrData = [objData];
       
       var deg = arrData[0].main.temp;
       var a_city = arrData[0].name; 
       var country = arrData[0].sys.country;
       city.innerText = `${a_city},${country}`;
       temp.innerHTML = `${deg} &degC`; 

       var iconstatus =  arrData[0].weather[0].main;
        
       console.log(iconstatus);
       
       if(iconstatus == "Sunny"){
        icon.innerHTML = "<i  class='fas fa-sun' aria-hidden = 'true' style='color: yellow;'></i>";
      }else if(iconstatus == "Clouds"){

       icon.innerHTML = "<i class='fas fa-cloud' style='color:#fff;'></i>";
      }else if(iconstatus == "Rainy"){

       icon.innerHTML = "<i  class='fas fa-cloud-rain' aria-hidden = 'true' style='color: grey;'></i>";
       }else{
       icon.innerHTML = "<i  class='fas fa-cloud' aria-hidden = 'true' style='color: #fff;'></i>";
        
       }
       
       
        $('#search').val(""); 
        w_footer.classList.remove('hide');

       }catch{
           alert('Please enter city name properly');
       }
   }
   
   
};



// get day 
var h_day = document.getElementById('day'); 
var h_time = document.getElementById('time');

var getDay  = function(){
    let objdate = new Date();
    var dayArr = ["Mon","Tues","Wed","Thrus","Fri","Sat","Sun"];
    
    //  console.log(dayArr[objdate.getDay()]);

    let day = dayArr[objdate.getDay()];
    
    
    let hour = objdate.getHours();
    let min = objdate.getMinutes();

    let periods = "AM";
    if(hour >11)
    {
       periods ="PM";
       if(hour > 12) hour -= 12;
    }
    if(min <10)
    {
      min  = "0" + min;
    }
  
    h_day.innerText = `${day}`;
    h_time.innerText = `${hour}:${min} ${periods}`; 

 }

  

  getDay();
 