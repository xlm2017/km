

select Project.project_id, round(avg(Employee.experience_years), 2) average_years 
from Project left join Employee 
on Project.employee_id = Employee.employee_id
group by Project.project_id  



select p.project_id, round(avg(e.experience_years),2) as average_years
from Project p 
left join Employee e 
on p.employee_id = e.employee_id
group by project_id;