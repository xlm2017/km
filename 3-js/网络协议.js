// CWnd是计算机网络中拥塞窗口（congestion window）的简写。拥塞窗口的大小取决于网络速度的拥塞程度和处理数据量，
// 并且动态地在变化加入新的执行方式。发送方让自己的发送窗口还可能小于拥塞窗口。CWnd是MFC窗口类的基类，提供了微软基础类库中所有窗口类的基本功能。


// SYN：同步序列编号（Synchronize Sequence Numbers）。是TCP/IP建立连接时使用的握手信号。在客户机和服务器之间建立正常的TCP网络连接时，
// 客户机首先发出一个SYN消息，服务器使用SYN+ACK应答表示接收到了这个消息，最后客户机再以ACK消息响应。这样在客户机和服务器之间才能建立起可靠的TCP连接，
// 数据才可以在客户机和服务器之间传递。
// TCP连接的第一个包，非常小的一种数据包。SYN 攻击包括大量此类的包，由于这些包看上去来自实际不存在的站点，因此无法有效进行处理。
// 每个机器的欺骗包都要花几秒钟进行尝试方可放弃提供正常响应。


// ACK (Acknowledge character）即是确认字符，在数据通信中，接收站发给发送站的一种传输类控制字符。表示发来的数据已确认接收无误。
    // 在TCP/IP协议中，如果接收方成功的接收到数据，那么会回复一个ACK数据。通常ACK信号有自己固定的格式,长度大小,由接收方回复给发送方。


// 最大报文段长度（MSS）是TCP协议的一个选项，用于在TCP连接建立时，收发双方协商通信时每一个报文段所能承载的最大数据长度（不包括文段头）。 [1] 

// 开放式系统互联模型（OpenSystemInterconnection Model，简称为OSI模型）是一种互联网概念化模型，由国际标准化组织(InternationalOrganization forStandardization，
//     简称为ISO)提出，定义于ISO/IEC 7498-1。

// OSI模型将互联网分为七层，由最高层（用户端）到最底层（物理层面）排列为：第7层 应用层（Application Layer）;第6层 表达层（Presentation Layer）；
// 第5层 会话层（Session Layer）；第4层 传输层（Transport Layer）；第3层 网络层（Network Layer）；
// 第2层 数据链接层（Data Link Layer）第1层 物理层（Physical Layer）；本词条MSS是第四层传输层中的一种协议（TCP）的选项之一。 [3]