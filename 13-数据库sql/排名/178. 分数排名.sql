
-- 这题使用DENSE_RANK，注意rank是MySQL的关键字要加上``符号

select score,
dense_rank() over (order by score desc) as 'rank'
from Scores 
order by score desc



四大排名函数

、ROW_NUMBER() Row_number() 在排名是序号 连续 不重复，即使遇到表中的两个一样的数值亦是如此


rank() Rank() 函数会把要求排序的值相同的归为一组且每组序号一样，排序不会连续执行


dense_rank() Dense_rank() 排序是连续的，也会把相同的值分为一组且每组排序号一样


ntile() Ntile(group_num) 将所有记录分成group_num个组，每组序号一样