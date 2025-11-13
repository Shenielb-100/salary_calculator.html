function calculateSalary() {
    var hourlyWage = document.getElementById("wage").value;
    var hoursPerWeek = document.getElementById("hours").value;

    var wageNum = parseFloat(hourlyWage);
    var hoursNum = parseFloat(hoursPerWeek);

    var annualSalary = wageNum * hoursNum * 52;

    document.getElementById("output").innerHTML = annualSalary;
}
