

select a.id
from Weather as a, Weather as b
where datediff(a.recordDate, b.recordDate) = 1
and a.Temperature > b.Temperature 