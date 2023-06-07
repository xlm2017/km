

select Users.name, sum(Transactions.amount) as balance    
from Users left join Transactions 
on Users.account = Transactions.account
group by Transactions.account
having balance > 10000




select Users.name, sum(Transactions.amount) as balance    
from Users left join Transactions 
on Users.account = Transactions.account
group by Users.account
having balance > 10000



select Users.name name , sum(Transactions.amount) balance 
from Users inner join Transactions on Users.account = Transactions.account
group by Transactions.account having sum(Transactions.amount)>10000