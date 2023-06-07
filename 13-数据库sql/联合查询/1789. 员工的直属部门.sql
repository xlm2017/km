


SELECT employee_id, department_id 
FROM Employee 
WHERE primary_flag = 'Y'
-- #联合查询，自动去重
UNION               
SELECT employee_id, department_id
FROM Employee

GROUP BY employee_id
HAVING COUNT(department_id) = 1
