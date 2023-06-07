


select u.name, ifnull(sum(r.distance), 0) as travelled_distance 

from Users u

left join rides  r

on r.user_id   = u.id 

group by user_id  

order by travelled_distance  desc, name asc






select name,IFNULL(sum(distance),0)as travelled_distance from
Users u left join Rides r on u.id=r.user_id
group by user_id
order by travelled_distance desc,name asc