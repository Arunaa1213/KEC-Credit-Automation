function AboutStudent(state) {
  return (
    <div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-pMC ">
          <tbody>
            <tr className="border-b border-pMC">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-pC whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
              >
                Name
              </th>
              <td className="px-6 py-4 uppercase">{state.user_name}</td>
            </tr>
            <tr className="border-b border-pMC">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-pC whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
              >
                Roll Number
              </th>
              <td className="px-6 py-4 uppercase">{state.user_roll}</td>
            </tr>
            <tr className="border-b border-pMC">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-pC whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
              >
                Email
              </th>
              <td className="px-6 py-4">{state.user_email}</td>
            </tr>
            <tr className="border-b border-pMC">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-pC whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
              >
                Department
              </th>
              <td className="px-6 py-4 uppercase">{state.user_dept}</td>
            </tr>
            <tr className="border-b border-pMC">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-pC whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
              >
                Section
              </th>
              <td className="px-6 py-4 uppercase">{state.user_sec}</td>
            </tr>
            <tr className="border-b border-pMC">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-pC whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
              >
                Entire Credit earned
              </th>
              <td className="px-6 py-4 ">{state.user_entire_credit}</td>
            </tr>
            <tr className="border-b border-pMC">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-pC whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
              >
                Balance Credit
              </th>
              <td className="px-6 py-4 ">{state.user_balance_credit}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AboutStudent;
