

-- 正则表达式
-- 需要转义

select * 
from Users
where mail regexp '^[a-zA-Z]+[a-zA-Z0-9_\\.\\/\\-]*@leetcode\\.com$';