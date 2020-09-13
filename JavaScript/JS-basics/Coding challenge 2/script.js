/*** Coding Challenge 2 

1. Defining Variables of teams.

2. Compare to decide the Average winner & print winner to console.

Also include the average score in the output.

*/

var teamA = 'Team John';
var G1teamA = 89;
var G2teamA = 120;
var G3teamA = 600;

var teamB = 'Team Mike';
var G1teamB = 116;
var G2teamB = 94;
var G3teamB = 10000;

var teamC = 'Team Mary';
var G1teamC = 97;
var G2teamC = 134;
var G3teamC = 5000000;

var teamD = 'Jha';
var G1teamD = 5000;
var G2teamD = 50000;
var G3teamD = 1;

var AvgTeamA = (G1teamA+G2teamA+G3teamA)/3;
var AvgTeamB = (G1teamB+G2teamB+G3teamB)/3;
var AvgTeamC = (G1teamC+G2teamC+G3teamC)/3;
var AvgTeamD = (G1teamD+G2teamD+G3teamD)/3;

var WinnerTeamAvg = null;
var WinnerTeamName =  null;
debugger
if (AvgTeamA > AvgTeamB) { // if is independant
     WinnerTeamAvg = AvgTeamA;
     WinnerTeamName = teamA;
} else   {     //if (AvgTeamA < AvgTeamB) else if (AvgTeamA < AvgTeamB) or (WinnerTeamAvg == null) else id dependant on previous if 
     WinnerTeamAvg = AvgTeamB;
     WinnerTeamName = teamB;
} if (WinnerTeamAvg < AvgTeamC) { // second if is independent
     WinnerTeamAvg = AvgTeamC;
     WinnerTeamName = teamC ;
} if (WinnerTeamAvg < AvgTeamD) {
     WinnerTeamAvg = AvgTeamD;
     WinnerTeamName = teamD;
}
console.log(WinnerTeamName + ' has averaged more' +  ' than ' + 'everyone' + ' with score of ' + WinnerTeamAvg);

/*console.log(teamA + ' has averaged more' +  ' than ' + teamB + ' with score of ' + AvgTeamA); 
} else if (AvgTeamA < AvgTeamB) {
    console.log(AvgTeamB);
} 

(WinnerTeamAvg == null)
*/