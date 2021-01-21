//This function will take the grades for each section and weights them accordingly, and comes up with a final grade
function Grade() {

    //define variables for grade types and corresponding weights
    var quiz = document.getElementById("Quiz").value
    var quiz_weight = .1
    var exam = document.getElementById("Exam").value
    var exam_weight = .2
    var group = document.getElementById("Group").value
    var group_weight = .1
    var assignment = document.getElementById("Assignment").value
    var assignment_weight = .5
    var intex = document.getElementById("Intex").value
    var intex_weight = .1

    //Calculate final grade and assign it to variable
    var grade = (quiz * quiz_weight) + (exam * exam_weight) + (group * group_weight) + (assignment * assignment_weight) + (intex * intex_weight)


    var lettergrade = ""
    //if statement that assigns letter grade to the weighted grade
    if (grade >= 94) {
        lettergrade = "A";
    }
    else if (grade >= 90) {
        lettergrade = "A-";
    }
    else if (grade >= 87) {
        lettergrade = "B+";
    }
    else if (grade >= 84) {
        lettergrade = "B";
    }
    else if (grade >= 80) {
        lettergrade = "B-";
    }
    else if (grade >= 77) {
        lettergrade = "C+";
    }
    else if (grade >= 74) {
        lettergrade = "C";
    }
    else if (grade >= 70) {
        lettergrade = "C-";
    }
    else if (grade >= 67) {
        lettergrade = "D+";
    }
    else if (grade >= 64) {
        lettergrade = "D";
    }
    else if (grade >= 60) {
        lettergrade = "D-";
    }
    else {
        lettergrade = "E";
    }

    //Alerts user of their final grade (0-100) and the corresponding letter grade
    alert("Your final grade would be: " + grade + " (" + lettergrade + ")")
}