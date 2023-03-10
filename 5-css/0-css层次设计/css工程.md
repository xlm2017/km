# EBM
BEM的命名规矩很容易记：block-name__element-name--modifier-name，也就是模块名 + 元素名 + 修饰器名。
比如分页组件：

/app/components/page-btn/

那么该组件模块就名为page-btn，组件内部的元素命名都必须加上模块名，比如：

<div class="page-btn"> <button type="button" class="page-btn__prev">上一页</button> <!-- ... --> <button type="button" class="page-btn__next">下一页</button> </div> 
上面我们用双下划线来明确区分模块名和元素名，当然也可以用单下划线，比如page-btn_prev和page-btn_next。我们只需保留BEM的思想，其命名规范可以任意变通。