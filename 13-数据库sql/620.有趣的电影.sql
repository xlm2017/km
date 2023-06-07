

-- DESC 从高到低

select *
from cinema
where mod(id, 2) = 1 and description != 'boring'
order by rating DESC




select *
from cinema
where id & 1 
and description <> 'boring'
order by rating DESC;