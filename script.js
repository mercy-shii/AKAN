function AkanName() {
    var year = document.getElementById("Year").value;
    var CC = parseInt(year.slice(0,2));
    var YY =parseInt(year.slice(2,4));
    var MM = parseInt(document.getElementById("Month").value);
    var DD = parseInt(document.getElementById("Day").value);
    if (DD <= 0 || DD>31 ||MM>12 || MM<=0){
        alert("Date or month are invalid,\nDates must be between 1 and 31,\nmonths must be between 1 and 12");
        return;

    }
    
    var male = document.getElementById("male").value;
    var female = document.getElementById("female").value;
    var weekdays = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Sturday"];
    var maleNames = ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];
    var femaleNames = ["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];
    var Dayoftheweek =parseInt( ( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) % 7);
    if (female === "female" ){
       document.getElementById("name").innerHTML=femaleNames[Dayoftheweek];
       document.getElementById("day").innerHTML=weekdays[Dayoftheweek];
       
    }
    
    else if (male === "male"){
        document.getElementById("name").innerHTML=maleNames[Dayoftheweek];
        document.getElementById("day").innerHTML=weekdays[Dayoftheweek];

    }
    
       
}