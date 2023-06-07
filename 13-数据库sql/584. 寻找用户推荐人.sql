

-- 这道题的考察点在于，sql里面的不等于，不包含null。

select name
from customer
where referee_id is null or referee_id != 2