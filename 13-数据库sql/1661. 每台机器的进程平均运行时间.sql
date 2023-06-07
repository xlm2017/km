


select 
machine_id, round(MAX(times) - MIN(times), 3) AS processing_time
from (
  select machine_id, avg(timestamp) as times
from Activity 
group by machine_id, activity_type 
) T
group by machine_id






SELECT a1.machine_id AS 'machine_id',
    ROUND(AVG(a2.timestamp - a1.timestamp) 
        ,3) AS 'processing_time'
FROM Activity AS a1
    INNER JOIN Activity AS a2
    ON a1.machine_id = a2.machine_id
        AND a1.process_id = a2.process_id  
        AND a1.activity_type = 'start' AND a2.activity_type = 'end'
GROUP BY a1.machine_id





SELECT machine_id AS 'machine_id',
    ROUND(
        SUM(IF(activity_type = 'start', -timestamp, timestamp))
        / COUNT(*) 
        * 2
        ,3) AS 'processing_time'
FROM Activity
GROUP BY machine_id

作者：HanXin
链接：https://leetcode.cn/problems/average-time-of-process-per-machine/solutions/865120/mysql-1nei-lian-2ge-biao-yi-qi-21ge-biao-j928/
来源：力扣（LeetCode）
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。