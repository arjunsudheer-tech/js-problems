const getGrade = (marks) => {
  if(marks >= 90 && marks <= 100) {
    return 'A';
  } else if(marks >= 80 && marks <= 89) {
    return 'B';
  } else if(marks >= 70 && marks <= 79) {
    return 'C';
  } else if(marks >= 60 && marks <= 69) {
    return 'D';
  } else if(marks < 60) {
    return 'F';
  } else if(marks < 0 || marks > 100) {
    return 'Invalid Marks';
  }
}

console.log(getGrade(85));