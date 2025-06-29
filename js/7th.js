function calculateGPA() {
  let courses = [
    {
      title: "Final Year Design Project",
      credit: 1.0,
      number: document.getElementById("fyp_a").value,
    },
    {
      title: "Elective: Major I",
      credit: 3.0,
      number: document.getElementById("elecmaj1").value,
    },
    {
      title: "Elective: Major I Laboratory",
      credit: 1.5,
      number: document.getElementById("elecmaj1lab").value,
    },
    {
      title: "Elective: Major II",
      credit: 3.0,
      number: document.getElementById("elecmaj2").value,
    },
    {
      title: "Elective: Major II Laboratory",
      credit: 1.5,
      number: document.getElementById("elecmaj2lab").value,
    },
    {
      title: "Theory of Computation",
      credit: 2.0,
      number: document.getElementById("toc").value,
    },
    {
      title: "Technical Writing and Presentation",
      credit: 1.5,
      number: document.getElementById("twp").value,
    },
    {
      title: "Society, Engineering Ethics and Environmental Protection",
      credit: 3.0,
      number: document.getElementById("seep").value,
    },
    {
      title: "Elective: Minor I",
      credit: 3.0,
      number: document.getElementById("elecmin1").value,
    },
    {
      title: "Elective: Minor I Laboratory",
      credit: 1.5,
      number: document.getElementById("elecmin1lab").value,
    },
  ];

  let totalCredit = 0;
  let totalGradePoints = 0;

  for (let i = 0; i < courses.length; i++) {
    if (
      courses[i].number === "" ||
      isNaN(parseFloat(courses[i].number)) ||
      parseFloat(courses[i].number) < 0 ||
      parseFloat(courses[i].number) > 100
    ) {
      alert("Please fill in all course numbers correctly (0 - 100)!");
      document.getElementById("result").innerHTML = ""; // Clear previous result if any
      return;
    }

    let marks = parseFloat(courses[i].number);
    let grade = getGrade(marks);
    totalCredit += courses[i].credit;
    totalGradePoints += grade * courses[i].credit;
  }

  if (totalCredit === 0) {
    document.getElementById("result").innerHTML =
      "Please enter marks for at least one course.";
    return;
  }

  let gpa = totalGradePoints / totalCredit;
  document.getElementById("result").innerHTML =
    "Your Obtained GPA Is <span>" + gpa.toFixed(2) + "</span>";
}

function getGrade(number) {
  if (number >= 80) return 4.0;
  else if (number >= 75) return 3.75;
  else if (number >= 70) return 3.5;
  else if (number >= 65) return 3.25;
  else if (number >= 60) return 3.0;
  else if (number >= 55) return 2.75;
  else if (number >= 50) return 2.5;
  else if (number >= 45) return 2.25;
  else if (number >= 40) return 2.0;
  else return 0.0;
}
