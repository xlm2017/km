


# 1. 要想动态地将值设置成列，我们可以在使用 CASE...WHEN... 流程控制语句的同时使用 UPDATE 语句。


update salary
set sex = (
    case sex when 'm' then 'f' else 'm' end
);



# 2.
update salary set sex = if(sex='m','f','m');




# 3. ASCII码求和减原来的值实现交换
update salary set sex = char(ascii('m') + ascii('f') - ascii(sex));