        var myName = ["Iyanu", "Adewumi", "Olamide","Stella", "Olaide"]
        var Numbers = "ABCDEFGHIJK"


        // join() returns an array as a string
        function join(){
            myName.join()
            alert(myName)
        }

        // The Array.from() method returns an array from any iterable object.
           function from(){
            var myNumbers = Array.from(Numbers)
            alert(myNumbers)
         }

        //  The concat() method concatenates (joins) two or more arrays
         function concat(){
            var myNumbers = myName.concat(Numbers)
            alert(myNumbers)
         }

         
         function filter(age) {
         var ages = [32, 33, 16, 40]
         document.getElementById("ages").innerHTML = ages.filter(filter);
         return age >= 18;
        //    alert (age >= 18)
         }
        
         