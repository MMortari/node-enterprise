export default interface EmployeesInterface {
  employee_id: number;
  first_name?: string;
  last_name: string;
  email: string;
  phone_number?: string;
  hire_data: Date;
  job_id: number;
  salary?: number;
  comission_pct?: number | null;
  department_id?: number;
  manager_id?: number;
}