//LAB 9-DATA STORAGE: INDEX PAGE
//window.onload

    //check for stored values
        //retrieve stored values

        //change welcome text to stored name

        //change BG colour to stored colour

        //  document.body.style.background = 


    //get the form and set submit listener
        
        //get values from form

        
        //store values
        

        window.onload = function() {
            
            if(localStorage.getItem('name') && localStorage.getItem('color')){
              var storedName = localStorage.getItem('name');
              var storedColor = localStorage.getItem('color');
              
             
              document.body.style.background = storedColor;
              
              
              document.getElementById('newMsgBox').innerHTML = "Welcome, " + storedName;
            }
          
            
            var form = document.querySelector('form[name="infoForm"]');
            form.addEventListener('submit', function(event) {
              event.preventDefault(); // prevent the form from submitting
          
              
              var name = document.getElementById('inName').value;
              var color = document.getElementById('inColor').value;
          
              
              localStorage.setItem('name', name);
              localStorage.setItem('color', color);
          
              
              document.body.style.background = color;
          
              
              document.getElementById('newMsgBox').innerHTML = "Welcome, " + name;
            });
          
            
            var btnDel = document.getElementById('btnDel');
            btnDel.addEventListener('click', function(event) {
              event.preventDefault(); // prevent the button from submitting
          
              
              localStorage.removeItem('name');
              localStorage.removeItem('color');
              document.getElementById('newMsgBox').innerHTML = "Welcome!";
              document.body.style.background = "#c0c0c0";
            });
          };
        
         