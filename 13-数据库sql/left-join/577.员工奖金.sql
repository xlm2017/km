
-- 错误的

-- select name, bonus
-- from Employee
-- left join Bonus on Employee.empId = Bonus.empId
-- and Bonus.bonus < 1000 





-- 正确的

select name, bonus
from Employee left join Bonus
on Employee.EmpId = Bonus.EmpId
where bonus is null or bonus < 1000