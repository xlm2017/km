


-- 表: Teacher

-- +-------------+------+
-- | Column Name | Type |
-- +-------------+------+
-- | teacher_id  | int  |
-- | subject_id  | int  |
-- | dept_id     | int  |
-- +-------------+------+
-- (subject_id, dept_id) 是该表的主键。
-- 该表中的每一行都表示带有 teacher_id 的教师在系 dept_id 中教授科目 subject_id。
 

-- 写一个 SQL 来查询每位老师在大学里教授的科目种类的数量。

-- 以 任意顺序 返回结果表。


示例 1:

输入: 
Teacher 表:
+------------+------------+---------+
| teacher_id | subject_id | dept_id |
+------------+------------+---------+
| 1          | 2          | 3       |
| 1          | 2          | 4       |
| 1          | 3          | 3       |
| 2          | 1          | 1       |
| 2          | 2          | 1       |
| 2          | 3          | 1       |
| 2          | 4          | 1       |
+------------+------------+---------+
输出:  
+------------+-----+
| teacher_id | cnt |
+------------+-----+
| 1          | 2   |
| 2          | 4   |
+------------+-----+
解释: 
教师 1:
  - 他在 3、4 系教科目 2。
  - 他在 3 系教科目 3。
教师 2:
  - 他在 1 系教科目 1。
  - 他在 1 系教科目 2。
  - 他在 1 系教科目 3。
  - 他在 1 系教科目 4。

  

-- select teacher_id, COUNT(subject_id) as cnt 
-- from Teacher
-- GROUP by teacher_id



-- distinct需要将colA中的所有内容都加载到内存中，大致可以理解为一个hash结构，key自然就是colA的所有值。因为是hash结构，那运算速度自然就快。最后计算hash中有多少key就是最终的结果。

COUNT(distinct subject_id) 


select teacher_id, COUNT(distinct subject_id) as cnt 
from Teacher
GROUP by teacher_id


select
    teacher_id,
    count(distinct subject_id) cnt
from Teacher
group by teacher_id

-- 作者：Wave
-- 链接：https://leetcode.cn/problems/number-of-unique-subjects-taught-by-each-teacher/solutions/2042525/by-wwavving-d8lv/
-- 来源：力扣（LeetCode）
-- 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。