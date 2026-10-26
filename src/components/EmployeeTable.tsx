type Employee = {
  id: number;
  name: string;
  email: string;
};

type Props = {
  employees: Employee[];
};

function EmployeeTable({ employees }: Props) {
  return (
    <div className="table-responsive shadow-sm rounded-3">
      <table className="table table-striped table-hover align-middle mb-0">
        <thead className="table-dark">
          <tr>
            <th scope="col" style={{ width: '80px' }}>ID</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id}>
              <td className="fw-semibold">{employee.id}</td>
              <td>{employee.name}</td>
              <td>
                <a href={`mailto:${employee.email}`} className="text-decoration-none">
                  {employee.email}
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default EmployeeTable;
