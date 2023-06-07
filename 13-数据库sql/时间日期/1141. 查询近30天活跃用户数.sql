

-- 在使用GROUP BY语句对数据进行分组后，可以使用聚合函数对每个分组内的数据进行统计分析。如果需要显示除分组字段和聚合函数外的其他字段，
-- 可以将这些字段包含在SELECT语句中，并在GROUP BY子句中也加上这些字段。需要注意的是，非聚合字段必须在GROUP BY子句中列出，否则将会出现错误或者结果不符合预期。



SELECT
	activity_date day,
    count( DISTINCT user_id  ) active_users 
FROM
	activity 
WHERE
	activity_date BETWEEN date( '2019-06-28' )
	AND date( '2019-07-27' ) 
GROUP BY
	activity_date





SELECT activity_date day, COUNT(DISTINCT  user_id) active_users
FROM Activity
WHERE DATEDIFF("2019-07-27", activity_date) < 30 AND DATEDIFF("2019-07-27", activity_date) >= 0
GROUP BY activity_date;