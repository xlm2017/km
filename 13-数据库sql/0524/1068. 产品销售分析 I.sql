

-- 这个是老版本的语法，等值内连接
-- 内连接是最常见的一种连接，只连接匹配的行。
-- INNER JOIN
-- INNER JOIN与JOIN是相同

select product_name,year,price
from Sales s , Product p
where p.product_id = s.product_id;





-- 三种外连接
-- 外联结才会有null值吧 内联结直接忽略null
-- LEFT JOIN返回左表的全部行和右表满足ON条件的行，如果左表的行在右表中没有匹配，那么这一行右表中对应数据用NULL代替。
-- RIGHT JOIN返回右表的全部行和左表满足ON条件的行，如果右表的行在左表中没有匹配，那么这一行左表中对应数据用NULL代替。
-- FULL JOIN 会从左表 和右表 那里返回所有的行。如果其中一个表的数据行在另一个表中没有匹配的行，那么对面的数据用NULL代替

select p.product_name,s.year,s.price
from Sales s left join Product p
on s.product_id=p.product_id







join
https://www.cnblogs.com/reaptomorrow-flydream/p/8145610.html


笛卡尔积 cross join
https://zhuanlan.zhihu.com/p/536880775