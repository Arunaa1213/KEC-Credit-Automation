export default function CollegeOfferCoursesTable(student) {
  return (
    <div className="text-pC ">
      <div className="h-1/2 flex flex-col justify-evenly">
        <h1 className="text-xl font-semibold sm:text-2xl md:text-2xl ml-8 md:-ml-12">
          College Offered Courses
        </h1>
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left text-pMC m-4 md:m-0 max-w-1/2 min-w-3/5">
            <thead className="text-xs text-pLC uppercase bg-pC ">
              <tr>
                <th scope="col" className="md:px-6 md:py-3 ">
                  Course name
                </th>
                <th scope="col" className="md:px-6 md:py-3">
                  Total Mark %
                </th>
                <th scope="col" className="md:px-6 md:py-3">
                  Attendence %
                </th>
                <th scope="col" className="md:px-6 md:py-3">
                  Total Credit
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white border-b text-pC">
                <th
                  scope="row"
                  className="md:px-6 py-4 font-medium  whitespace-nowrap  "
                >
                  Go Programming
                </th>
                <td className="md:px-6 py-4">90 %</td>
                <td className="md:px-6 py-4">96 %</td>
                <td className="md:px-6 py-4">2</td>
              </tr>
            </tbody>
            <tbody>
              <tr className="bg-white border-b text-pC">
                <th
                  scope="row"
                  className="md:px-6 py-4  font-medium text-pC whitespace-nowrap  break-words"
                >
                  Git and Version Control System
                </th>
                <td className="md:px-6 py-4">90 %</td>
                <td className="md:px-6 py-4">96 %</td>
                <td className="md:px-6 py-4">2</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
