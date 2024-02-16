/*    JavaScript 7th Edition
      Chapter 2
      Project 02-02

      Application to test for completed form
      Author: Madison Jenkins
      Date:   02/14/2024

      Filename: project02-02.js
 */
 
      function verifyForm()
      {
            let name = document.getElementById("name").value;
            let email = document.getElementById("email").value;
            let phone = document.getElementById("phone").value;
      
            if (name && email && phone)
            {
                  window.alert("Thank you!");
            }
            else
            {
                  window.alert("Please fill in all fields");
            }
      }
      
      document.getElementById("submit").addEventListener("click", verifyForm)