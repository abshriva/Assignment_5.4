function getEmployeedetailsbyArrayObj()
{
    var firstDate =  new Date(1993,07,21);
    var secondDate =  new Date(1992,08,25);
    var thirdDate =  new Date(1995,09,01);
    var fourthDate =  new Date(1998,10,14);
    var fifthDate =  new Date(1999,10,18);

    var EmpDet =
    [
       { 
        name:"Abhishek",
        Age:24,
        DateOfBirth:firstDate,
        PlaceOfBirth:"Gwalior",
        city:"Gwalior",
        state:"Madhya Pradesh",
        Pincode:411057
       },
       { 
        name:"Arun",
        Age:25,
        DateOfBirth:secondDate,
        PlaceOfBirth:"Ahemdabad",
        city:"Ahemdabad",
        state:"Gujarat",
        Pincode:411056
       },
       { 
        name:"Snehal",
        Age:22,
        DateOfBirth:thirdDate,
        PlaceOfBirth:"Nasik",
        city:"Nasik",
        state:"Maharashtra",
        Pincode:411058
       },
        { 
        name:"Mangesh",
        Age:19,
        DateOfBirth:fourthDate,
        PlaceOfBirth:"Nasik",
        city:"Nasik",
        state:"Maharashtra",
        Pincode:411059
       },
        { 
        name:"Ankit",
        Age:17,
        DateOfBirth:fifthDate,
        PlaceOfBirth:"Dabra",
        city:"Dabra",
        state:"Madhya Pradesh",
        Pincode:474001
       }
    ];

    for(var i=0;i<5;i++)
    {
        console.log('Employee Details');
        console.log('Name: '+EmpDet[i].name);
        console.log('Age: '+EmpDet[i].Age);
        console.log('DateOfBirth: '+EmpDet[i].DateOfBirth);
        console.log('PlaceOfBirth: '+EmpDet[i].PlaceOfBirth);
        console.log('City: '+EmpDet[i].city);
        console.log('State: '+EmpDet[i].state);
        console.log('Pincode'+EmpDet[i].Pincode);
        console.log('--------------------------------------');
        console.log('--------------------------------------');

    }
}