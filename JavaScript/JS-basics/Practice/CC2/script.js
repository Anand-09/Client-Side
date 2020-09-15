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


if (AvgTeamA > AvgTeamB) {
    WinnerTeamAvg = AvgTeamA;
    WinnerTeamName = teamA;
} else if (AvgTeamA < AvgTeamB) {
    WinnerTeamAvg = AvgTeamB;
    WinnerTeamName = teamB;
}
/* 
if (WinnerTeamAvg > AvgTeamC) { 
    WinnerTeamAvg = WinnerTeamAvg;
    WinnerTeamName = WinnerTeamName;
} else */ if (WinnerTeamAvg < AvgTeamC) {
    WinnerTeamAvg = AvgTeamC;
    WinnerTeamName = teamC;
} console.log(WinnerTeamName + ' wins with a score of ' + WinnerTeamAvg);

/*

if (AvgTeamA > AvgTeamB) {
    WinnerTeamAvg = AvgTeamA;
    WinnerTeamName = teamA;
} else if (AvgTeamA < AvgTeamB) {
    WinnerTeamAvg = AvgTeamB;
    WinnerTeamName = teamB;
}
*/