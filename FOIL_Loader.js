/* 
  _____    ___    ___   _                                     
 |  ___|  / _ \  |_ _| | |                                    
 | |_    | | | |  | |  | |                                    
 |  _|   | |_| |  | |  | |___                                 
 |_|      \___/  |___| |_____|                                
                                                              
  _                           _                       _       
 | |       ___     __ _    __| |   ___   _ __        (_)  ___ 
 | |      / _ \   / _` |  / _` |  / _ \ | '__|       | | / __|
 | |___  | (_) | | (_| | | (_| | |  __/ | |     _    | | \__ \
 |_____|  \___/   \__,_|  \__,_|  \___| |_|    (_)  _/ | |___/
                                                   |__/       
 __   __   __   __   __   __                                  
 \ \  \ \  \ \  \ \  \ \  \ \                                 
  \ \  \ \  \ \  \ \  \ \  \ \                                
  / /  / /  / /  / /  / /  / /                                
 /_/  /_/  /_/  /_/  /_/  /_/  



 Senal Bulumulle 

           .
2018 openFOIL. 
This Script allows you to change the settings of the Splash Loader screen 
ShowPage function feature allows you to change how many milliseconds it takes to "load the page or web application".
It emulates how long it loads a web page as well. Followed by the setTimeout.

The Whole Purpose of this design is to allow minimalistic feel of the FOIL UI Interface when a user launches a FOIL OS Based Web application, a Web Page, and some mobile devices as 
an app as well. 

Standard: 27 December 2018 12:06 pm




*/

    var myVar;

    function myFunction() {
      /* Change the ShowPage */ 
     
        myVar = setTimeout(showPage, 1000);
    }

    function showPage() {
        document.getElementById("loader").style.display = "none";
        document.getElementById("myDiv").style.display = "block";
    }
