var Totalmarks = 300;
var Obtainedmarks = prompt("Enter obtained marks")
var Per = (Obtainedmarks / Totalmarks ) * 100;


document.write(`<h1>Mark Sheet</h1> <br><br> Total marks : ${Totalmarks} <br> Marks Obtained : ${Obtainedmarks} <br> Percentage : ${Per}% <br>`)

if (Per >= 80){
    document.write("Grade: A-one <br> Remark : Excellent")
}

else if (Per >= 70){
    document.write("Grade: A <br> Remark : Good")
}
else if (Per >= 60){
    document.write("Grade: B <br> Remark : You need to improve")
}

else if (Per < 60){
    document.write("Grade: Fail <br> Remark : Sorry")
}