

-- case when的原理 当一个单元格中有多个数据时，case when只会提取当中的第一个数据。

以CASE WHEN month='Feb' THEN revenue END 为例，当id=1时，它只会提取month对应单元格里的第一个数据，即Jan，它不等于Feb，所以找不到Feb对应的revenue，所以返回NULL。
（可以试试把我上面答案里的sum()统统去掉，执行结果与预期不一样。错就错在当id=1时,Feb_Revenue和Mar_Revenue的值变成了NULL）

那该如何解决单元格内含多个数据的情况呢？答案就是使用聚合函数，聚合函数就用来输入多个数据，输出一个数据的。如SUM()或MAX()，而每个聚合函数的输入就是每一个多数据的单元格。

以SUM(CASE WHEN month='Feb' THEN revenue END) 为例，当id=1时，它提取的Jan、Feb、Mar，从中找到了符合条件的Feb，并最终返回对应的revenue的值，即7000。

作者：不求人
链接：https://leetcode.cn/problems/reformat-department-table/solutions/343480/guan-yu-group-byyu-sumde-pei-he-by-xxiao053/
来源：力扣（LeetCode）
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。


SELECT id, 
SUM(CASE WHEN month='Jan' THEN revenue END) AS Jan_Revenue,
SUM(CASE WHEN month='Feb' THEN revenue END) AS Feb_Revenue,
SUM(CASE WHEN month='Mar' THEN revenue END) AS Mar_Revenue,
SUM(CASE WHEN month='Apr' THEN revenue END) AS Apr_Revenue,
SUM(CASE WHEN month='May' THEN revenue END) AS May_Revenue,
SUM(CASE WHEN month='Jun' THEN revenue END) AS Jun_Revenue,
SUM(CASE WHEN month='Jul' THEN revenue END) AS Jul_Revenue,
SUM(CASE WHEN month='Aug' THEN revenue END) AS Aug_Revenue,
SUM(CASE WHEN month='Sep' THEN revenue END) AS Sep_Revenue,
SUM(CASE WHEN month='Oct' THEN revenue END) AS Oct_Revenue,
SUM(CASE WHEN month='Nov' THEN revenue END) AS Nov_Revenue,
SUM(CASE WHEN month='Dec' THEN revenue END) AS Dec_Revenue
FROM department
GROUP BY id
ORDER BY id;



