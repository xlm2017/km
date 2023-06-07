


使用USING有两个前提条件：

查询必须是等值连接。
等值连接中的列必须具有相同的名称和数据类型。


SELECT product_name, sum(unit) unit
FROM Products JOIN Orders USING (product_id)
where order_date like "2020-02-%"
group by product_id 
having unit>=100


-- 2020年, 平年  

WHERE子句过滤出2020年二月份的数据
用BETWEEN AND过滤：WHERE order_date BETWEEN '2020-02-01' AND '2020-02-29'
用YEAR()和MONTH()过滤：WHERE YEAR(order_date) = 2020 AND MONTH(order_date) = 2
用通配符%过滤：WHERE order_date LIKE '2020-02-%'
用正则表达式过滤：WHERE order_date REGEXP '^2020-02-[:digit:]{2}$'

作者：爱发呆的义仔
链接：https://leetcode.cn/problems/list-the-products-ordered-in-a-period/solutions/323381/inner-join-where-group-by-having-by-markov015/
来源：力扣（LeetCode）
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。