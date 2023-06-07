


select *,
if(x+y>z and x+z>y and y+z>x,'Yes','No') as triangle
from Triangle




select x,y,z,
(case when x+y>z and x+z>y and z+y>x then 'Yes' else 'No' end) as triangle 
from Triangle;