let marks = 98;

if (typeof (marks) === "number") {
    if (marks < 40) {
        console.log("Your Marks:" + marks + " & you Failed! You need Minimum 40 Marks to pass in the Exam");
    } else if (marks <= 40 && marks >= 60) {
        console.log("Your Marks:"  + marks + " & Congratulation you have Passed the exam!");
    } else if (marks > 60 && marks <= 70) {
        console.log("Your Marks:"  + marks + " & you got 'B' Grade");
    } else if (marks > 70 && marks <= 90) {
        console.log("Your Marks:"  + marks + " & you got 'A' Grade");
    } else if (marks > 90 && marks <= 100) {
        console.log("Your Marks:"  + marks + " & you got 'A+' Grade");
    } else {
        console.log("Please enter marks between 0 to 100");
    }
}
else {
    console.log("Please enter number value only");
}