
-- COUNT DISTINCT是一种SQL聚合函数，用于计算某个列或表达式中不同(distinct)值的数量。

SELECT
    class
FROM
    (SELECT
        class, COUNT(DISTINCT student) AS num
    FROM
        courses
    GROUP BY class) AS temp_table
WHERE
    num >= 5
;





SELECT class FROM Courses
    GROUP BY class
    HAVING COUNT(*) >= 5;