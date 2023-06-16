//UC1

{
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
}

//UC2
{
    const Part_Time = 1;
    const Full_Time = 2;
    const Part_Time_Hrs = 4;
    const Full_Time_Hrs = 8;
    const Wage_Per_Hr = 20;

    let empHrs = 0;
    let Daily_Wage;

    var empCheck = Math.floor(Math.random() * 10) % 3;
    switch(empCheck) 
    {
        case Part_Time:
            empHrs = Part_Time_Hrs;
            break;
        case Full_Time:
            empHrs = Full_Time_Hrs;
            break;
        default:
            empHrs = 0;
            break;
    }
    Daily_Wage = empHrs * Wage_Per_Hr;
    console.log("Employee Daily Wage is : " + Daily_Wage);
}

//UC3
{
    const Part_Time = 1;
    const Full_Time = 2;
    const Part_Time_Hrs = 4;
    const Full_Time_Hrs = 8;
    const Wage_Per_Hr = 20;

    let empHrs = 0;
    let Daily_Wage;

    var empCheck = Math.floor(Math.random() * 10) % 3;
    function getWorkingHours(empCheck)
    {
    switch(empCheck) 
    {
        case Part_Time:
            return Part_Time_Hrs;
            break;
        case Full_Time:
            return Full_Time_Hrs;
            break;
        default:
            return 0;
            break;
    }
    }
    empHrs = getWorkingHours(empCheck);
    Daily_Wage = empHrs * Wage_Per_Hr;
    console.log("Employee Daily Wage is : " + Daily_Wage);  
}
