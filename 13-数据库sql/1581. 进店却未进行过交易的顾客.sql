

-- is null

select v.customer_id as customer_id, count(*) as count_no_trans
from Visits as v left join Transactions as t
on v.visit_id=t.visit_id
where t.visit_id is null
group by v.customer_id






select V.customer_id, count(distinct V.visit_id) as count_no_trans 
from Visits V left join Transactions T
on V.visit_id = T.visit_id where T.transaction_id is null
group by(V.customer_id)
order by count_no_trans desc