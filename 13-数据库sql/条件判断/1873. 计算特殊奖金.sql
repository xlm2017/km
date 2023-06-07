


-- IF判断 + MOD取余
-- IF第一个参数写条件，第二个参数写条件成立返回的内容，第三个参数写条件不成立返回的内容
-- Mod(a,b) 在sql中的意思是 a / b 的余数 # 基础用法：如果id需要是偶数或者奇数时就可以使用mod。



-- 奇偶判断

-- mod(id,2)=1 是指id是奇数。
-- mod(id,2)=0 是指id是偶数。


select
    employee_id,
    if(
        employee_id&1 and name not like 'M%',
        salary,
        0
    ) as bonus
from employees
order by employee_id;





select employee_id,
(CASE WHEN MOD(employee_id,2) != 0 AND LEFT(name,1) != 'M' THEN salary
      WHEN MOD(employee_id,2) = 0 OR LEFT(name,1) = 'M' THEN 0 END) bonus
from Employees
order by employee_id      