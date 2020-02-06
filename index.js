/*1
 we have the following arrays
 color =["blue","green","red","orange","violet","indigo","Yellow"];
o = ["th","st","nd","rd]
write a Javascript program to display the colors in the following way:
"1st choice is Blue"
"2nd choice is green"
"3rd choice is red."
*/
var color=["Blue", "Green","Red","Orange", "Violet","Indigo","Yellow"];
var o = ["th","st","nd","rd"];
var output="";
for (var i=0;i<color.length; i++){
    switch(i)
    {
        case 0:
           console.log( output+="1"   +o[1] +  "choice is" + color[i]+",\n")
        break;
        case 1:
          console.log(output+= "2" +o[2] + "choice is"+ color[i]+",\n")
        break;
        case 2:
          console.log  (output+= "3" +o[3] + "choice is"+ color[i]+",\n")
        break;

        default:
            console.log(output += i+1 +o[0]+ "Choice is" + color[i]+",\n")
        break;

    }
}
/*
write a simple javascript array to join all element of the following array into a string
sample array: myColor=["Red","Green","White","Black"];
Expected Output:
"Red,Green,White,Black"
"Red+Green+White+Black"
*/
var myColor =["Red","Green","White","Black"];
{
    console.log(myColor.join());
    console.log(myColor.join("+"));
}


//Question 3
let employees =[
    {
    id : 1,
    first_name: 'Nestor',
    email: 'nede0@va.gov',
    gender: 'Male',
    age: 35,
    ip_address: '80.95.217.202',
    Car: 'Chevrolet',
    Country:'Russia',
    company: 'Ozu',
    Job: 'Research Associate',
    Language: 'Kannada',
    phone: '369-416-1791',
    active: 'true',
    salary: 150000
    },
    {id : 2,
        first_name: 'Boony',
        email: 'bconsidine@dailymail.co.uk',
        gender: 'Male',
        age: 30,
        ip_address: '158.108.174.143',
        Car: 'Kia',
        Country:'Indonesia',
        company: 'Flashspan',
        Job: 'Engineeer IV',
        Language: 'Bosnian',
        phone: '878-260-8542',
        active: 'true',
        salary: 150000

    },
    {
        id : 3,
        first_name: 'Humfrid',
        email: 'hmacaree2@craiglist.org',
        gender: 'Male',
        age: 25,
        ip_address: '13.121.145.193',
        Car: 'Dodge',
        Country:'China',
        company: 'Mita',
        Job: 'Web Designer',
        Language: 'Bosnian',
        phone: '721-765-6270',
        active: 'true',
        salary: 550000
    },
    {
        id : 4,
    first_name: 'Hirsh',
    email: 'halbury3@themeforest.net',
    gender: 'Male',
    age: 21,
    ip_address: '154.153.161.16',
    Car: 'Dodge',
    Country:'Russia',
    company: 'Kaymbo',
    Job: 'Software Consultant',
    Language: 'Nothern sotho',
    phone: '515-581-1165',
    active: 'true',
    salary: 250000.08
    },
    {
        id : 5,
    first_name: 'Granny',
    email: 'gmcsharry4@buzfeed.com',
    gender: 'Male',
    age: 23,
    ip_address: '171.48.242.209',
    Car: 'Ford',
    Country:'China',
    company: 'Youtags',
    Job: 'Senior Quality Engineer',
    Language: 'Sweedish',
    phone: '757-973-8706',
    active: 'true',
    salary: 300000.05,
    },
    {
        id : 6,
    first_name: 'Bob',
    email: 'bbortolomei5@stanford.edu',
    gender: 'Male',
    age: 19,
    ip_address: '138.88.133.136',
    Car: 'Honda',
    Country:'Poland',
    company: 'Vipe',
    Job: 'Web Designer',
    Language: 'Aymara',
    phone: '227-946-1788',
    active: 'true',
    salary: 100000
    },
    {
        id : 7,
    first_name: 'Chen',
    email: 'cyurshev6@wikipedia.org',
    gender: 'Male',
    age: 20,
    ip_address: '76.98.240.178',
    Car: 'Audi',
    Country:'Thailand',
    company: 'Midel',
    Job: 'Web Designer',
    Language: 'Malagasy',
    phone: '361-127-0004',
    active: 'false',
    salary: 300000
    },
    {
        id : 8,
    first_name: 'Jacquetta',
    email: 'jtretwell7@macromedia.com',
    gender: 'Female',
    age: 28,
    ip_address: '125.157.172.237',
    Car: 'Ford',
    Country:'Russia',
    company: 'Devpoint',
    Job: 'Web Developer',
    Language: 'Papiamento',
    phone: '572-329-7775',
    active: 'false',
    salary: 130000

    },
    {
        id : 9,
        first_name: 'Marget',
        email: 'msooley@nba.com',
        gender: 'Female',
        age: 30,
        ip_address: '231.239.40.29',
        Car: 'Pontiac',
        Country:'Nigeria',
        company: 'Photobean',
        Job: 'Web Developer',
        Language: 'Hebrew',
        phone: '502-799-5098',
        active: 'false',
        salary: 750000.5
    },
    {
        id : 10,
        first_name: 'Tomkin',
        email: 'tkohtler@howstuffworks.com',
        gender: 'Male',
        age: 17,
        ip_address: '121.234.135.93',
        Car: 'Pontiac',
        Country:'Nigeria',
        company: 'Jaxbean',
        Job: 'Database Administrator',
        Language: 'Filipino',
        phone: '692-372-4141',
        active: 'false',
        salary: 50000

    },
    

]
console.log("Web Developers: ",employees.filter(employee => employee.Job==='Web Developer'))
console.log(" Nigerian Web Developers: ",employees.filter(employee => employee.Job==='Web Developer'&& employee.Country==='Nigeria'))
console.log("Employees below 20: ",employees.filter(employee=>employee.age<20))
console.log("Active Employees:", employees.filter(employee => employee.active == 'true'))
