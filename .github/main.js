const dayNumber = 5; 

if (dayNumber === 1) {
  console.log("Sunday");
} else if (dayNumber === 2) {
  console.log("Monday");
} else if (dayNumber === 3) {
  console.log("Tuesday");
} else if (dayNumber === 4) {
  console.log("Wednesday");
} else if (dayNumber === 5) {
  console.log("Thursday");
} else if (dayNumber === 6) {
  console.log("Friday");
} else if (dayNumber === 7) {
  console.log("Saturday");
} else {
  console.log("Invalid input! Enter a number between 1 and 7.");
}


function getDaySwitch(day) {
    switch (day) {
        case 1: console.log("Sunday"); break;
        case 2: console.log("Monday"); break;
        case 3: console.log("Tuesday"); break;
        case 4: console.log("Wednesday"); break;
        case 5: console.log("Thursday"); break;
        case 6: console.log("Friday"); break;
        case 7: console.log("Saturday"); break;
        default: console.log("Out of bounds exception (1-7)");
    }
}

function getDayTernary(day) {
    console.log(
        day === 1 ? "Sunday" :
        day === 2 ? "Monday" :
        day === 3 ? "Tuesday" :
        day === 4 ? "Wednesday" :
        day === 5 ? "Thursday" :
        day === 6 ? "Friday" :
        day === 7 ? "Saturday" :
        "Out of bounds exception (1-7)"
    );
}