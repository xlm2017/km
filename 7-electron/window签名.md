
 After EKU filter, 0 certs were left.     After expiry filter, 0 certs were left.     After Private 


 错误解释：

"After EKU filter" 表示在应用扩展密钥用法（Extended Key Usage, EKU）过滤后，没有发现任何有效的证书。

"After expiry filter" 表示在过期证书过滤后，仍然没有发现有效的证书。

可能的原因：

服务器提供的SSL/TLS证书不符合客户端的EKU要求，比如客户端期望的是服务器认证（OID 1.3.6.1.5.5.7.3.1），但服务器提供的是客户端认证（OID 1.3.6.1.5.5.7.3.2）。

服务器提供的证书已经过期。

解决方法：

确保服务器的SSL/TLS证书包含正确的扩展密钥用法OID，并且是当前有效的。

检查服务器上的SSL/TLS证书是否过期，如果过期，需要更新证书。

如果是自签名证书，确保它被客户端信任，或者被客户端所在的环境正确地配置为可被信任的根证书。




New-SelfSignedCertificate -Subject "CN=MyCodeSignCert" -CertStoreLocation "Cert:\CurrentUser\My" -KeyUsage DigitalSignature -FriendlyName "My Code Sign Cert"


（代码签名）
makecert -r -pe -n "CN=101SCRM CA" -$ commercial -a sha1 -b 01/01/2020 -e 01/01/2100 -cy authority -ss root -sr currentuser





# New-SelfSignedCertificate
新方式
New-SelfSignedCertificate -Subject "CN=101SCRM" -CertStoreLocation "Cert:\CurrentUser\My" -KeyUsage DigitalSignature -FriendlyName "101SCRM" -NotAfter (Get-Date).AddYears(100)

老
makecert -r -pe -n "CN=LION CA" -$ commercial -a sha1 -b 01/01/2020 -e 01/01/2100 -cy authority -ss root -sr currentuser


运行
certmgr 

打开证书


EV 签名

代码 签名  两种


timeStampServer 

rfc3161TimeStampServer

http://timestamp.comodoca.com/authenticode



Error: allowToChangeInstallationDirectory makes sense only for assisted installer (please set oneClick to false)

