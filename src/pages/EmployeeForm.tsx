import { useState, type ChangeEvent, type FormEvent } from 'react';
import { CheckCircle2 } from 'lucide-react';

type FormData = {
  name: string;
  designation: string;
  location: string;
  salary: string;
};

type FormErrors = Partial<Record<keyof FormData, string>>;

const emptyForm: FormData = {
  name: '',
  designation: '',
  location: '',
  salary: '',
};

function EmployeeForm() {
  const [formData, setFormData] = useState<FormData>(emptyForm);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = (data: FormData): FormErrors => {
    const newErrors: FormErrors = {};
    if (!data.name.trim()) newErrors.name = 'Name is required.';
    if (!data.designation.trim()) newErrors.designation = 'Designation is required.';
    if (!data.location.trim()) newErrors.location = 'Location is required.';
    if (!data.salary.trim()) {
      newErrors.salary = 'Salary is required.';
    } else if (isNaN(Number(data.salary)) || Number(data.salary) < 0) {
      newErrors.salary = 'Salary must be a valid positive number.';
    }
    return newErrors;
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validationErrors = validate(formData);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      setSubmitted(true);
      setFormData(emptyForm);
    } else {
      setSubmitted(false);
    }
  };

  const fields: { key: keyof FormData; label: string; type: string; placeholder: string }[] = [
    { key: 'name', label: 'Name', type: 'text', placeholder: 'Enter employee name' },
    { key: 'designation', label: 'Designation', type: 'text', placeholder: 'Enter designation' },
    { key: 'location', label: 'Location', type: 'text', placeholder: 'Enter location' },
    { key: 'salary', label: 'Salary', type: 'number', placeholder: 'Enter salary' },
  ];

  return (
    <div className="row justify-content-center">
      <div className="col-12 col-lg-8">
        <div className="card shadow-sm border-0 rounded-4">
          <div className="card-header bg-dark text-white rounded-top-4">
            <h1 className="h4 mb-0 fw-bold">Add New Employee</h1>
          </div>
          <div className="card-body p-4 p-md-5">
            {submitted && (
              <div className="alert alert-success d-flex align-items-center gap-2" role="alert">
                <CheckCircle2 size={20} />
                Employee added successfully! (Frontend only — no data was sent to a server.)
              </div>
            )}

            <form noValidate onSubmit={handleSubmit}>
              {fields.map(({ key, label, type, placeholder }) => (
                <div className="mb-3" key={key}>
                  <label htmlFor={key} className="form-label fw-semibold">
                    {label}
                  </label>
                  <input
                    type={type}
                    id={key}
                    name={key}
                    className={`form-control ${errors[key] ? 'is-invalid' : ''}`}
                    placeholder={placeholder}
                    value={formData[key]}
                    onChange={handleChange}
                    min={type === 'number' ? 0 : undefined}
                  />
                  {errors[key] && <div className="invalid-feedback d-block">{errors[key]}</div>}
                </div>
              ))}

              <div className="d-grid mt-4">
                <button type="submit" className="btn btn-dark btn-lg fw-semibold">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EmployeeForm;
