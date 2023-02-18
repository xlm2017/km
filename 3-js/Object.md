 - +0等于-0。
 - NaN不等于自身。
 - +0 === -0;	         //TRUE
 - NaN === NaN;         //FALSE
	

-  +0不等于-0。
-	NaN等于自身。
-	Object.is(+0,-0);    //FALSE
-	Object.is(NaN,NaN);  //TRUE