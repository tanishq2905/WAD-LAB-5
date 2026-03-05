fetch("students.json")
  .then(response => response.json())
  .then(data => {

    const highCGPA = data.filter(student => student.cgpa > 8.0);

    console.log("Students with CGPA greater than 8.0:");

    highCGPA.forEach(student => {
      console.log(
        "ID:", student.student_id,
        "Name:", student.name,
        "Department:", student.department,
        "CGPA:", student.cgpa
      );
    });

  })
  .catch(error => {
    console.log("Error loading JSON:", error);
  });
