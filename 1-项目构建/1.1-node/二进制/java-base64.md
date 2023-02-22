<!--
 * @Description: 
 * @Author: xlm
 * @Date: 2023-02-22 13:56:34
 * @LastEditTime: 2023-02-22 13:56:59
 * @LastEditors: xlm
-->


```java

String originalUrl = "https://www.google.co.nz/?gfe_rd=cr&ei=dzbFV&gws_rd=ssl#q=java";
String encodedUrl = Base64.getUrlEncoder().encodeToString(originalURL.getBytes());


byte[] decodedBytes = Base64.getUrlDecoder().decode(encodedUrl);
String decodedUrl = new String(decodedBytes);

```