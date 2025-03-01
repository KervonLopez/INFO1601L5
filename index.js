//object literal
let bob = {
  fname: "bob",
  lname: "smith",
  age: 18,
  height: 6,
  transcript:[
    {
      course: 'INFO 1603',
      grades: [ 89, 34, 67 ]
    },
    {
      course: 'INFO 1601',
      grades: [ 89, 34, 67 ]
    }
  ]
};

let sally = {
  fname: "sally",
  lname: "smith",
  age: 18,
  height: 6,
  transcript:[
    {
      course: 'INFO 1601',
      grades: [ 100, 89, 79 ]
    }
  ]
};

let paul = {
  fname: "paul",
  lname: "smith",
  age: 18,
  height: 6,
  transcript:[
    {
      course: 'INFO 1600',
      grades: [ 89, 34, 67 ]
    }
  ]
};


const students = [bob, sally, paul];


function getAverageGrade(student, course) {
  let courseRecord = student.transcript.find(c => c.course === course);
  
  // If the course is not found, return -1
  if (!courseRecord) {
      return -1;
  }

  let sum = courseRecord.grades.reduce((total, grade) => total + grade, 0);
  return sum / courseRecord.grades.length;
}

function getAssignmentMark(student, course, num) {
  let courseRecord = student.transcript.find(c => c.course === course);

  if (!courseRecord || num < 1 || num > courseRecord.grades.length) {
      return -1;
  }

  return courseRecord.grades[num - 1];
}

function averageAssessment(students, courseName, assignment) {
  let totalMarks = 0;
  let count = 0;

  for (let student of students) {
      let mark = getAssignmentMark(student, courseName, assignment);
      if (mark !== -1) {  
          totalMarks += mark;
          count++;
      }
  }

  // If no students had the course, return -1
  return count === 0 ? -1 : totalMarks / count;
}

console.log(getAverageGrade(bob, 'INFO 1603')); // Output: Average of [89, 34, 67]
console.log(getAssignmentMark(sally, 'INFO 1601', 2)); // Output: 89
console.log(averageAssessment(students, 'INFO 1601', 1)); // Output: INFO 1601 first assignment
