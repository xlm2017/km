

select product_id, 'store1' as store, store1 as price from Products where store1 is not null 
union all 
select product_id, 'store2' as store, store2 as price from Products where store2 is not null 
union all 
select product_id, 'store3' as store, store3 as price from Products where store3 is not null;









UNION ALL语句是SQL联合查询（UNION）的一种变体，它将所有结果集合并在一起，包括重复行。与UNION不同，UNION ALL不会自动去重。基本语法如下：

SELECT column1, column2, ... FROM table1 WHERE condition1
UNION ALL
SELECT column1, column2, ... FROM table2 WHERE condition2;
注意：使用UNION ALL可能导致结果集中出现重复行，需要根据实际情况决定是否使用。同时，由于不需要进行去重操作，所以UNION ALL的执行速度通常比UNION快