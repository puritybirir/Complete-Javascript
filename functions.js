/****
 * functions
 */

 function calculateAge(birthYear) {
     return 2019 - birthYear;
 }

 var ageJohn = calculateAge(1990);
 var ageBirir = calculateAge(1996)
 console.log(ageJohn);
 console.log(ageBirir);

 function yearsUntliRetirement (year, firstName){
     var age = calculateAge(year)
     var retirement = 65 - age;
     if (retirement > 0){
        console.log(firstName + ' retires in ' + retirement + 'years.');
     } else {
         console.log(firstName + ' is already reetired')
     }
     
 }

 yearsUntliRetirement(1990, 'John');
 yearsUntliRetirement(1996, 'Birir')