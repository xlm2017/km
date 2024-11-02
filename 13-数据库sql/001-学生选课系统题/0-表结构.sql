
DROP TABLE IF EXISTS `student`;
CREATE TABLE `student` (
  `SNO` int(10) NOT NULL AUTO_INCREMENT COMMENT '学号',
  `SNAME` varchar(30) NOT NULL COMMENT '姓名',
  `SEX` char(2) NULL COMMENT '性别',
  `AGE` int(20) NULL COMMENT '年龄',
  PRIMARY KEY (`SNO`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COMMENT='学生表';

INSERT INTO `student` VALUES (1, '张三', '男', 18);
INSERT INTO `student` VALUES (2, '李四', '女', 17);
INSERT INTO `student` VALUES (3, '王二', '男', 20);
INSERT INTO `student` VALUES (4, '麻子', '男', 19);


DROP TABLE IF EXISTS `teacher`;
CREATE TABLE `teacher`  (
  `TNO` int(10) NOT NULL COMMENT '教师编号',
  `TNAME` char(8) CHARACTER SET gbk COLLATE gbk_chinese_ci NOT NULL COMMENT '教师姓名',
  PRIMARY KEY (`TNO`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = gbk COLLATE = gbk_chinese_ci ROW_FORMAT = Dynamic;

INSERT INTO `teacher` VALUES (1, '张卓');
INSERT INTO `teacher` VALUES (2, '范英兵');
INSERT INTO `teacher` VALUES (3, '孙丽男');
INSERT INTO `teacher` VALUES (4, '闫晶');
INSERT INTO `teacher` VALUES (5, '罗晓媛');
INSERT INTO `teacher` VALUES (6, '王静');
INSERT INTO `teacher` VALUES (7, '李红红');


DROP TABLE IF EXISTS `course`;
CREATE TABLE `course`  (
  `CNO` int(10) NOT NULL COMMENT '课程号',
  `CNAME` char(30) CHARACTER SET gbk COLLATE gbk_chinese_ci NOT NULL COMMENT '课程名称',
  `TNO` int(10) NOT NULL COMMENT '授课教师编号',
  `CREDIT` float(10, 1) NOT NULL COMMENT '学分',
  PRIMARY KEY (`CNO`, `TNO`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = gbk COLLATE = gbk_chinese_ci ROW_FORMAT = Dynamic;

INSERT INTO `course` VALUES (1101, 'Java程序设计', 1, 3.0);
INSERT INTO `course` VALUES (1102, '人工智能概述', 1, 3.0);
INSERT INTO `course` VALUES (1103, 'MySQL数据库', 3, 1.0);
INSERT INTO `course` VALUES (2201, '多元统计分析', 3, 3.5);
INSERT INTO `course` VALUES (2202, '经济计量分析', 2, 2.5);
INSERT INTO `course` VALUES (2203, '宏观经济统计分析', 5, 2.0);
INSERT INTO `course` VALUES (3301, '大学语文', 4, 2.0);
INSERT INTO `course` VALUES (3302, '四进四信', 6, 1.0);
INSERT INTO `course` VALUES (3303, '形式与政策', 7, 0.2);



DROP TABLE IF EXISTS `sc`;
CREATE TABLE `sc`  (
  `SNO` int(10) NOT NULL COMMENT '学号',
  `CNO` int(10) NOT NULL COMMENT '课程号',
  `GRADE` int(10) NOT NULL,
  PRIMARY KEY (`SNO`, `CNO`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = gbk COLLATE = gbk_chinese_ci ROW_FORMAT = Dynamic;


INSERT INTO `sc` VALUES (1, 1101, 90);
INSERT INTO `sc` VALUES (2, 1103, 80);
INSERT INTO `sc` VALUES (2, 2201, 60);
INSERT INTO `sc` VALUES (3, 2204, 70);