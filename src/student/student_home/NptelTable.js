export default function NPTELTable (student) {
  return (
    <div className="text-pC ">
      
        <div className="text-xl font-semibold sm:text-2xl md:text-2xl ml-8 mb-4 md:-ml-12">
          NPTEL Courses
        </div>
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left text-pMC ">
            <thead className="text-xs text-pLC uppercase bg-pC ">
              <tr >
                <th scope="col" className="md:px-6 md:py-3">
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
              <tr className="bg-white border-b dark:bg-pC dark:border-pC">
                <th
                  scope="row"
                  className="md:px-6 py-4 font-medium text-pC whitespace-nowrap dark:text-white"
                >
                  Descriptive Statistics with R Software
                </th>
                <td className="md:px-6 py-4">90%</td>
                <td className="md:px-6 py-4">90%</td>
                <td className="md:px-6 py-4">3</td>
              </tr>
            </tbody>
          </table>
        </div>
    </div>
  )
};
