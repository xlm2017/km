

-- 1. 将Student 表中的第一条记录的AGE数据修改成比原来大两岁；
update Student set AGE = AGE + 2 where SNO = 1


-- 2. 将学生选课表SC中的成绩 GRADE属性名改为：NEWGRADE；
ALTER TABLE SC rename column GRADE to NEWGRADE



-- 3. 将S表中的SN列加宽到12个字符:
ALTER TABLE S ALTER COLUMN SN VARCHAR(12)

-- 4. 删除S表中的SNO为2的记录:
delete from S where SNO = 2

-- 5. 查询成绩在60-89之间的所有学生选课记录, 查询结果按照成绩的降序排列:
SELECT SNO, CNO AS '课程号', NEWGRADE FROM SC WHERE NEWGRADE BETWEEN 60 AND 89 ORDER BY NEWGRADE DESC;

-- 6. 左连接查询所有学生的选课记录:
SELECT stu.SNAME, stu.SNO, sc.CNO, course.CNAME, sc.GRADE
FROM student stu
LEFT JOIN sc ON sc.SNO = stu.SNO
LEFT JOIN course ON sc.CNO = course.CNO


-- 7. 右连接查询选课的学生的基本信息:
SELECT stu.SNO, stu.SNAME, stu.SEX, stu.AGE, sc.CNO
FROM student stu
RIGHT JOIN sc ON sc.SNO = stu.SNO


SELECT stu.SNO, stu.SNAME, stu.SEX, stu.AGE
FROM student stu
RIGHT JOIN sc ON sc.SNO = stu.SNO
GROUP BY stu.SNO    -- 去重


-- 8. 查询选修课成绩在60分以下的学生信息：
select SNO from sc where GRADE < 60
(1 ,2, 2)

select * 
from student
where SNO in (select SNO from sc where GRADE < 60) 


-- 9. 查询各门课程取得最高成绩的学生姓名及其成绩:
select SNO, CNO, max(GRADE) from sc
-- 错误的, SNO


SELECT s.SNAME,c.CNO,c.GRADE FROM 
(SELECT CNO,max(GRADE) maxg FROM sc GROUP BY CNO) a,
student s, sc c 
WHERE a.CNO=c.CNO AND a.maxg=c.GRADE AND c.SNO=s.SNO;



-- 10. 查询选修了某门课程的学生的基本信息。
SELECT s.SNO,s.SNAME,s.SEX,s.age,c.CNO 
FROM student s,sc c 
WHERE c.CNO IN(SELECT CNO FROM sc WHERE CNO=课程号) 
AND s.SNO=c.SNO;


-- 11. 查询选修了某位老师开设的课程的学生的信息以及相应的成绩。
SELECT s.SNAME,s.SEX,s.age,c.NEWGRADE,e.CNAME 
FROM (SELECT TNO,TNAME FROM newteacher WHERE TNAME='老师' GROUP BY TNO) n,student s,sc c,course e 
WHERE n.TNO=e.TNO AND e.CNO=c.CNO AND c.SNO=s.SNO;


-- 12. 当某一门课程的平均成绩大于85分时，查询选择该门课程学生的基本信息，否则不查询
SELECT s.SNAME,s.SEX,s.age 
FROM 
(SELECT SNO,avg(NEWGRADE) avgg FROM sc GROUP BY SNO) a,
student s,
sc c,
course e 
WHERE a.SNO=c.SNO AND a.avgg=c.NEWGRADE AND c.SNO=s.SNO AND c.CNO=e.CNO;
