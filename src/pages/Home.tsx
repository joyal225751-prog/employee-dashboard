import { useEffect, useState } from 'react';
import EmployeeTable from '@/components/EmployeeTable';

type Employee = {
  id: number;
  name: string;
  email: string;
};

function Home() {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!response.ok) {
          throw new Error(`Failed to load data (status ${response.status})`);
        }
        const data = await response.json();
        setEmployees(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Something went wrong while fetching data.');
      } finally {
        setLoading(false);
      }
    };

    fetchEmployees();
  }, []);

  return (
    <div>
      <div className="d-flex flex-wrap justify-content-between align-items-center mb-4">
        <div>
          <h1 className="h3 mb-1 fw-bold">Employee List</h1>
          <p className="text-muted mb-0">Fetched live from the JSONPlaceholder API.</p>
        </div>
        {!loading && !error && (
          <span className="badge bg-primary rounded-pill fs-6">
            {employees.length} employees
          </span>
        )}
      </div>

      {loading && (
        <div className="text-center py-5">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading…</span>
          </div>
          <p className="mt-3 text-muted mb-0">Loading employees…</p>
        </div>
      )}

      {error && (
        <div className="alert alert-danger d-flex align-items-center gap-2" role="alert">
          <strong>Error:</strong> <span>{error}</span>
        </div>
      )}

      {!loading && !error && <EmployeeTable employees={employees} />}
    </div>
  );
}

export default Home;
