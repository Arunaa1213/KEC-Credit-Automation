function AboutStaff(state) {
  return (
    
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-pMC ">
          <tbody>
            <tr className="border-b border-pMC">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-pLC whitespace-nowrap bg-pC"
              >
                Name
              </th>
              <td className="px-6 py-4 uppercase">{state.user_name}</td>
            </tr>

            <tr className="border-b border-pMC">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-pLC whitespace-nowrap bg-pC"
              >
                Email
              </th>
              <td className="px-6 py-4">{state.user_email}</td>
            </tr>
            <tr className="border-b border-pMC">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-pLC whitespace-nowrap bg-pC"
              >
                Department
              </th>
              <td className="px-6 py-4 uppercase">{state.user_dept}</td>
            </tr>
            <tr className="border-b border-pMC">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-pLC whitespace-nowrap bg-pC"
              >
                Batch
              </th>
              <td className="px-6 py-4">{state.user_batch}</td>
            </tr>
            <tr className="border-b border-pMC">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-pLC whitespace-nowrap bg-pC"
              >
                Section
              </th>
              <td className="px-6 py-4">{state.user_section}</td>
            </tr>
          </tbody>
        </table>
      </div>
  
  );
}

export default AboutStaff;
