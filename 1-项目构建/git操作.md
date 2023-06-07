<!--
 * @Description: 
 * @Author: xlm
 * @Date: 2023-05-04 17:14:51
 * @LastEditTime: 2023-05-04 17:16:11
 * @LastEditors: xlm
-->
git pull origin master

git branch 查看本地分支
git branch -a 查看远端分支


git log

回滚
 git reset --hard c503cffa099332911d4fce2fc1399cb4bc3ba9d6


 .这时，本地已经回滚到这个提交id的当前状态。如果要远程分支也变成这次的状态，需要继续回滚，输入一下的命令。
强制提交

git push -f origin master


强制提交报错, 修改gitlab配置