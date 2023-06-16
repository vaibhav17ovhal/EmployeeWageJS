const IS_Absent = 1;
var empCheck = Math.floor(Math.random() * 10) % 2;
if(empCheck == IS_Absent)
{
    console.log("Enmployee is absent");
    return;
}
else{
    console.log("Employee is present");
}
