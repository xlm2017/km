

SELECT
    MAX(num) AS num
FROM
    (SELECT
        num
    FROM
        MyNumbers 
    GROUP BY num
    HAVING COUNT(num) = 1) AS t
;


-- Every derived table must have its own alias

AS t是给子查询定义别名的语法。在这个查询中，子查询的结果集是一个只包含出现一次的数字的列表。但是，由于查询中存在GROUP BY和HAVING子句，所以需要将其作为一个单独的表（或视图）处理，并且需要为其定义一个别名t。

在父查询中，使用MAX(num)获取这个表的最大值，也就是只出现一次的数字中的最大值。

使用AS关键字定义别名有助于简化复杂查询的语法，也能使查询更易读、易理解。





例如SUM, COUNT, MAX, AVG等。这些函数和其它函数的根本区别就是它们一般作用在多条记录上。
having是分组（group by）后的筛选条件，分组后的数据组内再筛选。

三、having和where含义：

having是分组（group by）后的筛选条件，分组后的数据组内再筛选；where则是在分组前筛选。

where子句中不能使用聚集函数，而having子句中可以，所以在集合函数中加上了HAVING来起到测试查询结果是否符合条件的作用。即having子句的适用场景是可以使用聚合函数。

having 子句限制的是组，而不是行。having 子句中的每一个元素也必须出现在select列表中。有些数据库例外，如oracle。