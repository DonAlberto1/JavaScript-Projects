//A Task 1:Calendar Code;
let month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "Desember",
];
let week = [

    "Mo",
    "Tu",
    "We",
    "Th",
    "Fr",
    "Sa",
    "Su"
];
let or = 31;
let ancor = 2;
for (let y = 2020; y <= 2030; y++) {
    document.write(`<h1>${y}</h1>`);
    document.write('<div class="year">');
    for (let j = 0; j < 12; j++) {
        document.write('<div class="month">');
        document.write(`<h2>${month[j]}</h2>`)
        for (let w = 0; w < week.length; w++) {
            document.write('<div class="day">')
            document.write(`<p1>${week[w]}</p1>`);

            document.write("</div>")
        }
        if (j === 3 || j === 5 || j === 8 || j === 10) { or = 30; }
        else if (j === 1) {
            if (y % 4 === 0) { or = 29 }
            else { or = 28 }
        }
        else { or = 31 }
        for (let n = 0; n < ancor; n++) {
            document.write('<div class="day0">')
            document.write('</div>')
        }
        for (let i = 1; i <= or; i++) {
            document.write('<div class="day">');
            document.write(i);
            document.write("</div>");
            if (ancor < 7) { ancor++ } else { ancor = 1; }
        }
        document.write("</div>");
    }
    document.write("</div>");
}