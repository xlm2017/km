

-- 查询语句中接一个独立语句

SELECT contest_id,ROUND(COUNT(DISTINCT user_id)/(SELECT COUNT(*) FROM Users)*100,2) AS percentage
FROM Register
GROUP BY contest_id
ORDER BY percentage DESC, contest_id





select contest_id,round(count(*)/fenmu*100,2) percentage
from Register a
inner join
(select count(distinct user_id) as fenmu from Users) b on 1=1
group by contest_id
order by percentage desc,contest_id asc;






本题目是一道简单的指标计算的题，并且是比率型指标。

那么要找准分子和分母是什么。

分子： Register表中每个contest对应的user_id个数

分母： 分母就是3，因为user表里一共就3个人，当然准确来说是user表里面的所有人

注意：

100要放在round里面
count(1)和count(*)都差不多，没啥区别
分子的count(user_id)不需要加distinct，因为(contest_id, user_id) 是联合主键，在group by contest_id之后，user_id必然是不会重复的

作者：鲸鲸说数据🐋
链接：https://leetcode.cn/problems/percentage-of-users-attended-a-contest/solutions/1991968/by-zg104-hcod/
来源：力扣（LeetCode）
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。