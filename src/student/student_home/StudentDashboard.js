import NPTELTable from "./NptelTable";
import CollegeOfferCoursesTable from "./collegeOfferCoursesTable";

function StudentDashBoard(student) {
  return (
    <div className="text-pC flex flex-col justify-evenly">
      <CollegeOfferCoursesTable user_roll={student.user_roll} />
      {/* <NPTELTable user_roll={student.user_roll} /> */}
    </div>
  );
}

export default StudentDashBoard;
