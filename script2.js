fetch("courseAnalytics.json")
  .then(response => response.json())
  .then(data => {

    console.log("Students at Academic Risk:");

    let totalInternal = 0;
    let totalAssignments = 0;
    let assignmentCount = 0;

    data.students.forEach(student => {

      if (student.attendance_percentage < 75 || student.internal_marks < 40) {

        let reason = "";

        if (student.attendance_percentage < 75)
          reason += "Low Attendance ";

        if (student.internal_marks < 40)
          reason += "Low Internal Marks";

        console.log(student.name + " - " + reason);
      }

      totalInternal += student.internal_marks;

      student.assignment_scores.forEach(score => {
        totalAssignments += score;
        assignmentCount++;
      });

    });

    console.log("Class Average Internal Marks:",
      (totalInternal / data.students.length).toFixed(2));

    console.log("Class Average Assignment Score:",
      (totalAssignments / assignmentCount).toFixed(2));

  });
