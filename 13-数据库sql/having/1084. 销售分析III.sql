


select s.product_id, p.product_name 
from Product p
join Sales s
on p.product_id = s.product_id 
group by s.product_id 
HAVING  min(sale_date) >= '2019-01-01' and max(sale_date) <= '2019-03-31'

-- WHERE是在GROUP BY分组之前进行条件筛选，后面不可以跟聚合函数。


-- HAVING是在GROUP BY分组之后进行条件筛选，后面可以直接跟聚合函数。


在 SQL 中增加 HAVING 子句原因是，WHERE 关键字无法与聚合函数一起使用。

HAVING 子句可以让我们筛选分组后的各组数据。




select distinct a.product_id, b.product_name
    from sales a, product b
        where a.product_id = b.product_id
            and a.product_id not in (
                select product_id
                    from sales 
                        where sale_date 
                            not between '2019-01-01' and '2019-03-31'
            );







--易犯错 
--这样写会有product里有的产品 但是并没有出售过 也会被select出来 不过题目没有提到这点

select product_id, product_name
from product
where product_id not in (
    select product_id
    from sales
    where sale_date >= '2019-04-01' or sale_date < '2019-01-01')




--易犯错
-- between只能筛出一个销售记录，题目要求是一个产品下在2019-01-01到2019-03-31，必须要保证该产品下的销售记录都在2019-01-01到2019-03-31范围内，取日期最小值和最大值不超过这个时间范围就能保证。
-- and后面是开区间，31号那天的数据查不到，只能查到30号的

SELECT s.product_id, product_name
FROM Sales s
JOIN Product p
ON s.product_id = p.product_id
where sale_date between '2019-01-01' and '2019-03-31' 
GROUP BY s.product_id