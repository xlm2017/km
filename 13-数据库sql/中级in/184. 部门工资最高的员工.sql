

select d.name as Department,  e.name as Employee, salary 
from  Employee e, Department d 
where 
e.DepartmentId=d.id 
    and
    (e.Salary,e.DepartmentId) in (select max(Salary),DepartmentId from Employee group by DepartmentId);










SELECT
    Department.name AS 'Department',
    Employee.name AS 'Employee',
    Salary
FROM
    Employee
        JOIN
    Department ON Employee.DepartmentId = Department.Id
WHERE
    (Employee.DepartmentId , Salary) IN
    (   SELECT
            DepartmentId, MAX(Salary)
        FROM
            Employee
        GROUP BY DepartmentId
	)
;



在这个查询中，(Employee.DepartmentId , Salary)是一个元组(tuple) ，而不是单独的一个字段或列。这种语法被称为"Row Constructor"（行构造器），它是一种将多个值结合成一个值的方法。

因为IN子句用于比较两个元组，所以可以使用(Employee.DepartmentId , Salary)作为一个整体来匹配子查询中返回的结果集中的每个元组。这样就可以实现根据Department和Salary筛选出此部门中拥有最高工资的员工的需求。






-- 作者：LeetCode
-- 链接：https://leetcode.cn/problems/department-highest-salary/solutions/10245/bu-men-gong-zi-zui-gao-de-yuan-gong-by-leetcode/
-- 来源：力扣（LeetCode）
-- 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。