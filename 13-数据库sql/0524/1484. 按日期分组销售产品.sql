


-- 组内拼接 GROUP_CONCAT


select sell_date, count(distinct product) as num_sold, 
GROUP_CONCAT(DISTINCT product 
        ORDER BY product ASC    #按照字典序排列，升序
        SEPARATOR ',')          #用','分隔
        AS 'products'    #组内拼接
from Activities                   
group by sell_date  