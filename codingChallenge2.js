var teamJohnAverage = (89 + 120 + 103)/3;
var teamMikeAverage = (116 + 94 + 123)/3;
var teamMaryAverage = (97, 134, 105)/3;

//  My current solution

// console.log(teamJohnAverage);
// console.log(teamMikeAverage);

// teamJohnAverage > teamMikeAverage? console.log('Team John Wins with' +teamJohnAverage+ 'points') : console.log('Team Mike Wins with ' +teamMikeAverage+ ' points');

// if (teamJohnAverage> teamMikeAverage){
//     console.log('Team John Wins with' +teamJohnAverage+ 'points')
// } else if (teamMikeAverage> teamJohnAverage){
//     console.log('Team Mike Wins with ' +teamMikeAverage+ ' points')
// } else {
//     console.log("It is a tie")
// }

//part 2

 if ( teamJohnAverage > teamMikeAverage && teamJohnAverage > teamMaryAverage){
    console.log('Team John Wins with' +teamJohnAverage+ 'points')
 } else if( teamMikeAverage> teamJohnAverage && teamMikeAverage > teamMaryAverage){
    console.log('Team Mike Wins with ' +teamMikeAverage+ ' points')
 } else if (teamMaryAverage> teamJohnAverage && teamMaryAverage > teamMikeAverage){
    console.log('Team Mary Wins with ' +teamMaryAverage+ ' points')
 } else {
     "There is a draw"
 }
