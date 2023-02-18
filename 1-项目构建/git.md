# git

## 提交文件流程

### 提交文件到暂存区

- git add (文件名或者目录)

	- . 将当前目录下修改的所有代码从工作区添加到暂存区 . 代表当前目录
	- -u .
-u 表示将已跟踪文件中的修改和删除的文件添加到暂存区，不包括新增加的文件，注意这些被删除的文件被加入到暂存区再被提交并推送到服务器的版本库之后这个文件就会从git系统中消失了。
	- -A .
-A 表示将所有的已跟踪的文件的修改与删除和新增的未跟踪的文件都添加到暂存区。

### 提交文件到本地库

- git commit

	- 将暂存区里的改动给提交到本地的版本库。每次使用git commit 命令我们都会在本地版本库生成一个40位的哈希值，这个哈希值也叫commit-id
	- -m 参数表示可以直接输入后面的“message”，如果不加 -m参数，那么是不能直接输入message的，而是会调用一个编辑器一般是vim来让你输入这个message，
message即是我们用来简要说明这次提交的语句。
	- -am ‘message’ -am等同于-a -m
-a参数可以将所有已跟踪文件中的执行修改或删除操作的文件都提交到本地仓库，即使它们没有经过git add添加到暂存区，
注意: 新加的文件（即没有被git系统管理的文件）是不能被提交到本地仓库的。

### 提交文件到远程库

- git push <远程主机名> <本地分支名> <远程分支名> 

	- git push origin master
如果远程分支被省略，如上则表示将本地分支推送到与之存在追踪关系的远程分支（通常两者同名），如果该远程分支不存在，则会被新建
	- git push origin ：refs/for/master
如果省略本地分支名，则表示删除指定的远程分支，因为这等同于推送一个空的本地分支到远程分支，等同于 git push origin –delete master
	- git push origin
如果当前分支与远程分支存在追踪关系，则本地分支和远程分支都可以省略，将当前分支推送到origin主机的对应分支
	- git push
如果当前分支只有一个远程分支，那么主机名都可以省略，形如 git push，可以使用git branch -r ，查看远程的分支名
	- 关于 refs/for：
refs/for 的意义在于我们提交代码到服务器之后是需要经过code review 之后才能进行merge的，而refs/heads 不需要  (girrit工具)

## 解决代码冲突

### git merge

- git pull = git fetch + git merge

	- git pull和git pull --rebase区别：git pull做了两个操作分别是‘获取’和合并。所以加了rebase就是以rebase的方式进行合并分支，默认为merge。

- 使用merge命令合并分支，解决完冲突，执行git add .和git commit -m'fix conflict'。这个时候会产生一个commit。(无冲突则不会产生新的commit)

	- 果想在没有冲突的情况下也自动生成一个commit，记录此次合并就可以用：git merge --no-ff命令，

- 用于从指定的commit(s)合并到当前分支的操作。
- 采用merge和rebase后，git log的区别，merge命令不会保留merge的分支的commit：

### git rebase

- 使用rebase命令合并分支，解决完冲突，执行git add .和git rebase --continue，不会产生额外的commit。这样的好处是，‘干净’，分支上不会有无意义的解决分支的commit；坏处，如果合并的分支中存在多个commit，需要重复处理多次冲突。
- git checkout mywork
$ git rebase origin

	- 这些命令会把你的"mywork"分支里的每个提交(commit)取消掉，并且把它们临时 保存为补丁(patch)(这些补丁放到".git/rebase"目录中),然后把"mywork"分支更新 到最新的"origin"分支，最后把保存的这些补丁应用到"mywork"分支上。

### 其他

- git log
- git reset

	- git reset --soft HEAD^

		- 仅仅是撤回commit操作，您写的代码仍然保留。

	- 子主题 4

- git restore

	- git restore命令是撤销的意思，也就是把文件从缓存区撤销，回到未被追踪的状态。

该命令有git restore <file>和git restore --staged <file>两种常用的用法。

### git stash

- 将工作区内容暂存起来。为了fix 一个bug,  先stash, 使返回到自己上一个commit, 改完bug之后再stash pop, 继续原来的工作。
- git stash pop

	- 二、但是git stash pop取出备份的时候也会出现冲突
比如，有个文件login.java，，你修改了一段代码，git stash保存以后，你从服务器上继续git pull了别人的代码，
如果此时，别人的代码也修改了login.java。
此时当我们使用git stash pop 的时候，就会发生冲突，因为我们的修改不是基于最新的pull下来的文件的基础上。。所以git很难判断，
    备份我们修改后的文件，，删除程序文件中我们所做的修改，重新pull，，然后在用我们备份好的文件替换掉，，再push上去即可。

## 代码审查

## 切换分支

### git checkout  dev

### git switch 代替checkout, 便于理解记忆

### git checkout -b dev   -b参数表示创建并切换

- git branch dev
- git checkout dev

## 配置

### git config user.name "xxx"
git config user.email "xxx"
项目目录下

### git config --global user.name "xxx"
git config --global user.email "xxx"

## 查询状态

### git status

- 查看工作区代码相对于暂存区的差别
- 也可以告诉我们冲突的文件

## 查看分支

### git branch

- 当前分支前面会标一个*号。

## 删除分支

### git branch -d dev

## 核心概念

### 仓库

- 本地仓库
- 远程仓库 origin

### 区域

- 工作区
- 暂存区

### 分支

- master 

	- 主分支，主要用来版本发布。

- develop

	- 日常开发分支，该分支正常保存了开发的最新代码。

- feature

	- 具体的功能开发分支，只与 develop 分支交互。

- release

	- release 分支可以认为是 master 分支的未测试版。比如说某一期的功能全部开发完成，那么就将 develop 分支合并到 release 分支，测试没有问题并且到了发布日期就合并到 master 分支，进行发布。

- hotfix

	- 线上 bug 修复分支。

		- 这个分支用来修复主线master的BUG，但是要注意的是，在旧版本的BUG，新版本也是存在的，因此develop分支也存在该BUG，具体来说就是V3R2和V3R3都有该BUG，因此，修复的时候必须要提交两个分支master和develo否则，后面需要rebase就麻烦了。

### 充分理解核心概念, 所有命令行或者可视化工具都是为以上三个概念服务的

## 实践

### 代码回滚gitlab

- 1. git reset --hard 21d4799f75ae11b94461c97d5378522a2f4ef2d8
强制退回到指定提交的commit
- 2. git push origin 1.1 --force     
强制推送到gitlab

*XMind - Trial Version*