//UC1
/*
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
*/
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
            
        case Full_Time:
            return Full_Time_Hrs;
            
        default:
            return 0;
            
    }
    }
    empHrs = getWorkingHours(empCheck);
    Daily_Wage = empHrs * Wage_Per_Hr;
    console.log("Employee Daily Wage is : " + Daily_Wage);  
}

//UC4
{
    const Part_Time = 1;
    const Full_Time = 2;
    const Part_Time_Hrs = 4;
    const Full_Time_Hrs = 8;
    const Wage_Per_Hr = 20;
    const Total_Working_Days = 20;
    

    
    function getWorkingHours(empCheck)
    {
    switch(empCheck) 
        {
        case Part_Time:
            return Part_Time_Hrs;
            
        case Full_Time:
            return Full_Time_Hrs;
            
        default:
            return 0;
        }
    }
    let total_emp_Hrs = 0;
    for(let day = 0 ; day < Total_Working_Days ; day++)
    {
        let empCheck = Math.floor(Math.random() * 10) % 3;
        total_emp_Hrs += getWorkingHours(empCheck); 
    }
    let empWage = total_emp_Hrs * Wage_Per_Hr;
    console.log("Hours: " + total_emp_Hrs + ", Emp Wage: " + empWage);
}

//UC5
{
    const Part_Time = 1;
    const Full_Time = 2;
    const Part_Time_Hrs = 4;
    const Full_Time_Hrs = 8;
    const Wage_Per_Hr = 20;
    const Max_Working_Days = 20;
    const Max_Hours = 160;

    
    function getWorkingHours(empCheck)
    {
    switch(empCheck) 
        {
        case Part_Time:
            return Part_Time_Hrs;
            
        case Full_Time:
            return Full_Time_Hrs;
            
        default:
            return 0;
        }
    }
    let total_emp_Hrs = 0;
    let total_working_Days = 0;
    while(total_emp_Hrs <= Max_Hours && total_working_Days < Max_Working_Days)
    {
        total_working_Days++;
        let empCheck = Math.floor(Math.random() * 10) % 3;
        total_emp_Hrs += getWorkingHours(empCheck); 
    }
    let empWage = total_emp_Hrs * Wage_Per_Hr;
    console.log("Total Hours: " + total_emp_Hrs + ", Emp Wage: " + empWage + ", Total Days: " + total_working_Days);
}

//UC6
{
    const Part_Time = 1;
    const Full_Time = 2;
    const Part_Time_Hrs = 4;
    const Full_Time_Hrs = 8;
    const Wage_Per_Hr = 20;
    const Max_Working_Days = 20;
    const Max_Hours = 160;
    
    let total_emp_Hrs = 0;
    let total_working_Days = 0;
    let Emp_Wage_Array = new Array(); 
    
    function getWorkingHours(empCheck)
    {
    switch(empCheck) 
        {
        case Part_Time:
            return Part_Time_Hrs;
            
        case Full_Time:
            return Full_Time_Hrs;
            
        default:
            return 0;
            
        }
    }
    
    function calculateWages(empHrs)
    {
        return empHrs * Wage_Per_Hr
    }

    while(total_emp_Hrs <= Max_Hours && total_working_Days < Max_Working_Days)
    {
        total_working_Days++;
        let empCheck = Math.floor(Math.random() * 10) % 3;
        empHrs = getWorkingHours(empCheck);
        total_emp_Hrs += getWorkingHours(empCheck); 
        Emp_Wage_Array.push(calculateWages(empHrs));
    }
    
    let empWage = calculateWages(total_emp_Hrs);
    console.log("Total Hours: " + total_emp_Hrs + ", Emp Wage: " + empWage + ", Total Days: " + total_working_Days);
    console.log(Emp_Wage_Array);
}

//UC7
{
    const Part_Time = 1;
    const Full_Time = 2;
    const Part_Time_Hrs = 4;
    const Full_Time_Hrs = 8;
    const Wage_Per_Hr = 20;
    const Max_Working_Days = 20;
    const Max_Hours = 160;
    
    let total_emp_Hrs = 0;
    let total_working_Days = 0;
    let Emp_Wage_Array = new Array(); 
    
    function getWorkingHours(empCheck)
    {
    switch(empCheck) 
        {
        case Part_Time:
            return Part_Time_Hrs;
            
        case Full_Time:
            return Full_Time_Hrs;
            
        default:
            return 0;
            
        }
    }
    
    function calculateWages(empHrs)
    {
        return empHrs * Wage_Per_Hr
    }

    while(total_emp_Hrs <= Max_Hours && total_working_Days < Max_Working_Days)
    {
        total_working_Days++;
        let empCheck = Math.floor(Math.random() * 10) % 3;
        empHrs = getWorkingHours(empCheck);
        total_emp_Hrs += getWorkingHours(empCheck); 
        Emp_Wage_Array.push(calculateWages(empHrs));
    }
    
    let empWage = calculateWages(total_emp_Hrs);
    console.log("Total Hours: " + total_emp_Hrs + ", Emp Wage: " + empWage + ", Total Days: " + total_working_Days);
    console.log(Emp_Wage_Array);

//UC7(A)
const result1 = Emp_Wage_Array.reduce((total , current) => total + current);
console.log(result1);

//UC7(B)

let dailycount = 0;
function mapDayWithWages(dailyWage)
{
	dailycount++;
	return dailycount + " = " + dailyWage;
}
let mapDayWithWageArr = Emp_Wage_Array.map(mapDayWithWages);
console.log("Daily Wage Map: ");
console.log(mapDayWithWageArr);

//UC7(C)
const result2 = Emp_Wage_Array.filter(wage => wage == 160);
console.log(result2);

//UC7(D)
/*
function findFull(dailyWage1){
    return dailyWage1.inclueds("160");
}
const result3 = Emp_Wage_Array.find(findFull);
console.log("First time full time wage earned on day: " + result3);
*/

//UC7(E)
const result4 = Emp_Wage_Array.includes(element => element == 160);
console.log(result4);

//UC7(F)
const result5 = Emp_Wage_Array.some(value => value == 80);
console.log(result5);

//UC7(G)
function totalDaysWorked(numOfDays, dailyWage){
    if(dailyWage > 0) 
    return numOfDays + 1;
    return numOfDays;
}
const result6 = Emp_Wage_Array.reduce(totalDaysWorked , 0);
console.log(result6);

}

//UC8
{
    const Part_Time = 1;
    const Full_Time = 2;
    const Part_Time_Hrs = 4;
    const Full_Time_Hrs = 8;
    const Wage_Per_Hr = 20;
    const Max_Working_Days = 20;
    const Max_Hours = 160;
    
    let total_emp_Hrs = 0;
    let total_working_Days = 0;

    let Emp_Wage_Array = new Array(); 
    let Emp_Wage_Map = new Map();
    let Emp_Hrs_Map = new Map();

    function getWorkingHours(empCheck)
    {
    switch(empCheck) 
        {
        case Part_Time:
            return Part_Time_Hrs;
            
        case Full_Time:
            return Full_Time_Hrs;
            
        default:
            return 0;
            
        }
    }
    
    function calculateWages(empHrs)
    {
        return empHrs * Wage_Per_Hr
    }

    while(total_emp_Hrs <= Max_Hours && total_working_Days < Max_Working_Days)
    {
        total_working_Days++;
        let empCheck = Math.floor(Math.random() * 10) % 3;
        let empHrs = getWorkingHours(empCheck);
        total_emp_Hrs += empHrs; 
        Emp_Wage_Array.push(calculateWages(empHrs));
        Emp_Hrs_Map.set(total_working_Days , empHrs);
        Emp_Wage_Map.set(total_working_Days, calculateWages(empHrs));
    }
    
    let empWage = calculateWages(total_emp_Hrs);

    console.log("======= Emp Daily Wage Array =======");
    console.log(Emp_Wage_Array);

    console.log("\n======= Emp Wage Map =======");
    console.log(Emp_Wage_Map);

    console.log("\n======= Emp Hour Map =======");
    console.log(Emp_Hrs_Map);

    console.log("Total Hours: " + total_emp_Hrs + ", Emp Wage: " + empWage + ", Total Days: " + total_working_Days);
    //console.log(Emp_Wage_Array);

    function totalWages(totalwage , dailywage)
    {
        return totalwage + dailywage
    }

    console.log("\n======= Total emp wage using map =======\n");
    console.log("Emp wage map total wages: " + Array.from(Emp_Wage_Map.values()).reduce(totalWages , 0) + "\n");

}

//UC9
{
    const Part_Time = 1;
    const Full_Time = 2;
    const Part_Time_Hrs = 4;
    const Full_Time_Hrs = 8;
    const Wage_Per_Hr = 20;
    const Max_Working_Days = 20;
    const Max_Hours = 160;
    
    let total_emp_Hrs = 0;
    let total_working_Days = 0;

    let Emp_Wage_Array = new Array(); 
    let Emp_Wage_Map = new Map();
    let Emp_Hrs_Map = new Map();

    function getWorkingHours(empCheck)
    {
    switch(empCheck) 
        {
        case Part_Time:
            return Part_Time_Hrs;
            
        case Full_Time:
            return Full_Time_Hrs;
            
        default:
            return 0;
            
        }
    }
    
    function calculateWages(empHrs)
    {
        return empHrs * Wage_Per_Hr
    }

    while(total_emp_Hrs <= Max_Hours && total_working_Days < Max_Working_Days)
    {
        total_working_Days++;
        let empCheck = Math.floor(Math.random() * 10) % 3;
        let empHrs = getWorkingHours(empCheck);
        total_emp_Hrs += empHrs; 
        Emp_Wage_Array.push(calculateWages(empHrs));
        Emp_Hrs_Map.set(total_working_Days , empHrs);
        Emp_Wage_Map.set(total_working_Days, calculateWages(empHrs));
    }
    
    let empWage = calculateWages(total_emp_Hrs);

    //console.log("======= Emp Daily Wage Array =======");
    //console.log(Emp_Wage_Array);

    //console.log("\n======= Emp Wage Map =======");
    //console.log(Emp_Wage_Map);

    //console.log("\n======= Emp Hour Map =======");
    //console.log(Emp_Hrs_Map);

    //console.log("Total Hours: " + total_emp_Hrs + ", Emp Wage: " + empWage + ", Total Days: " + total_working_Days);
    //console.log(Emp_Wage_Array);

    function totalWages(totalwage , dailywage)
    {
        return totalwage + dailywage
    }
    //console.log("\n======= Total emp wage using map =======");
    //console.log("Emp wagemap total wages: " + Array.from(Emp_Wage_Map.values()).reduce(totalWages , 0));
    
//(A)
    const findTotal = (totalVal , dailyVal) => totalVal + dailyVal;

    let count = 0;
    let totalHours = Array.from(Emp_Hrs_Map.values()).reduce(findTotal , 0);
    let totalSalary = Emp_Wage_Array.filter(dailyWage => dailyWage > 0).reduce(findTotal , 0);
    console.log("\n======= Emp Total Wage and Total Hrs calculation using Arrow Function =======\n");
    console.log("Total Hours: " + totalHours + ",   Total Wage: " + totalSalary + "\n");

//(B)
    let nonWorkingDays = new Array();
    let fullWorkingDays = new Array();
    let halfWorkingDays = new Array();

    Emp_Hrs_Map.forEach((values, key) => {
        if(values == 8) fullWorkingDays.push(key);
        else if(values == 4) halfWorkingDays.push(key);
        else nonWorkingDays.push(key);
    });

    console.log("\n======= Full Working Days Array =======\n");
    console.log(fullWorkingDays);

    console.log("\n======= Half Working Days Array =======\n");
    console.log(halfWorkingDays);

    console.log("\n======= No Working Days Array =======\n");
    console.log(nonWorkingDays);

}


