let averageMarksStud = 0;
const getAverage = students => {
  return students.map(student => {
    return Math.round(
      (student.marks.Maths + student.marks.Science + student.marks.English) / 3
    );
  });
};
export default getAverage;
