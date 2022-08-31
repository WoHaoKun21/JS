

<h1 align="center">JS高级<h1>
<p style="text-align:center;font-size:24px;font-weight: 1000">一、JS执行</p>


1. **代码执行过程**

   （1）预编译阶段：代码在预编译的时候会创建两个对象：全局Object对象上下文（GEO）和函数执行上下文（FEC），都不会立即执行

   （2）执行阶段：依次执行对应的代码；

2. **作用域链**：当我们查找一个变量的时候，真实的查找路径是沿着作用域链来查找

   查找规则：沿着作用域链一层一层地向上查找，没有则报错(name属性是特殊的，在不同浏览器有不同的规则)——就是沿着作用域链查找变量的过程

   注：函数的父级作用域和函数定义的位置有关系，跟调用位置没有关系

   ![image-20220817143532083](C:\Users\60991\AppData\Roaming\Typora\typora-user-images\image-20220817143532083.png)

3. **环境变量和记录**

   （1）早期ECMA的版本规范：每一个执行上下文会被关联到一个环境（variable object，VO），在源代码中的变量和函数声明会被作为属性添加到VO中，对于函数俩说，参数也会被添加到VO中

   （2）最新的ECMA的版本规范中，对于一些词汇进行了修改：每一个执行上下文会被关联到一个环境（VariableEnvironment）中，再执行代码中变量和函数的声明和函数的声明会作为环境记录（Environment Record）添加到变量环境中，对于函数来说，参数也会被作为环境记录添加到变量环境中。

   （3）场景：当函数和全局对象里面都是用var 创建了相同的变量，咋打印的时候为undefined

   ![image-20220817163422169](C:\Users\60991\AppData\Roaming\Typora\typora-user-images\image-20220817163422169.png)

   

   <p style="text-align:center;font-size:24px;font-weight: 1000">二、JS的内存管理<p>


   一、认识内存管理：不管是什么样的编程语言，在代码执行过程中都是需要给他分配内存的，不同的是某些编程语言需要我们自己手动的管理内存，某些编程语言会可以自动帮助我们管理内存；

   二、不管以什么样的方式来管理内存，内存的管理都会有如下的生命周期

   ​		①：分配申请你需要的内存；

   ​		②：使用分配的内存（存放一些东西，比如对象）；

   ​		③：不需要使用时，对齐进行释放；

   三、不同的语言对于第一步和第三步会有不同的实现

   ​		①：手动管理内存：如C、C++，包括早期的OC，都是需要手动来管理内存的申请和释放的；

   ​		②：自动管理内存：如Java、JavaScript、Python、Swift、Dart等，他们有自动帮助我们管理内存；

   四、我们可以知道JavaScript通常情况下不需要手动来管理的；

   **五、JS的内存管理**

   ​		①：JavaScript会在定义变量时为我们分配内存；

   ​		②：但是内存分配的方式是有区别的

   ​			*JS对于<u>基本类型内存的分配会在执行时</u>，直接在栈空间进行分配；

   ​			*JS对于<u>复杂数据类型（引用类型）内存的分配会在堆内存中开辟一块空间</u>，并且将这块空间的指针返回值变量引用；

   **六、JS的垃圾回收**

   ​		①：因为内存的大小是有限的，所以当内存不在需要的时候，我们需要对其进行释放，以便腾出更多内存空间；

   ​		②：在手动管理内存的语言中，我们需要通过一些方式自己来释放不再需要的内存，比如C中的free函数

   ​			*但是这种管理的方式其实非常的低效，影响我们编写逻辑的代码的效率；

   ​			*并且这种方式对开发者的要求也很高，并且一不小心就会产生内存泄漏；

   ​		③：所以大部分代码的编辑语言都是有自己的垃圾回收机制：

   ​			*垃圾回收的英文是<font color="#f00">Garbage Collection</font>，简称<font color="#f00">GC</font>;

   ​			*对于那些<font color="#f00">不再使用的对象</font>，我们都称之为<font color="#f00">垃圾</font>，它需要被<font color="#f00">回收</font>，以释放更多的内存空间；

   ​			*而我们的语言运行环境，如Java的运行环境JVM，JavaScript的运行环境js引擎内存也有<font color="#f00">垃圾回收器</font>；

   ​			*<font color="#f00">垃圾回收器</font>我们也会简称为<font color="#f00">GC</font>，所以在很多时候你看到GC其实指的是垃圾回收器；

   ​		④：但是这里又穿线了另外一个很关键的问题：<font color="#f00">GC</font>怎么么知道那些对象是不再使用的呢？

   ​			*这里就要用到<font color="#f00">GC</font>算法了；

   **七、常见的GC算法 - 引用计数**

   ​		①：引用计数：

   ​			*当一个对象有一个引用指向它时，那么这个对象的引用就+1，当一个对象的引用为0时，这个对象就可以被垃圾回收器销毁掉

   ​			*这个算法有一个很大的弊端，就是会产生循环利用；

   ​		②：标记清除：<font color="#09f">使用最为广泛</font>

   ​			*这个算法是设置一个跟对象（root object），垃圾回收器会定期从这个根开始，找所有从跟开始有引用到的对象，对于那些没有引用到的对象，就认为是不可用的对象；

   ​			*这个苏纳法可以很好地解决循环引用的问题；

   

   <p style="text-align:center;font-size:24px;font-weight: 1000">三、JS的闭包</p>

<p style="font-weight:600">一、JS中函数是一等公民</p>

​		1、在JavaScript中，函数是非常重要的，并且是一等公民

​			优点：

​				（1）函数的使用非常灵活；

​				（2）函数可以作为另外一个函数的参数，也可以作为另外一个函数的返回值来使用；

​		2、如：自己编写的高阶函数、内置的高阶函数；

<p style="font-weight:600">二、JS中闭包的定义：分成两个在计算机科学中和JavaScript中</p>

​		1、在计算机科学中对闭包的定义：

​			（1）闭包（Closure），又称<font color="#f00">词法闭包（Lexical Closure）</font>或<font color="#f00">函数闭包（function closure）</font>；

​			（2）是在支持头等函数的编程语言中，实现语法绑定的一种技术；

​			（3）闭包在实现上是一个结构体，它存储了一个函数和一个关联的环境（相当于一个符号查找表）；

​			（4）<span style="color:#f00">闭包跟函数最大的区别在于，当捕捉闭包的时候，它的<span style="font-weight: 600;text-decoration: underline;">自由变量</span>会在捕捉时被确定，这样即使脱离了捕捉时的上下文，它也能照常运行；</span>

​		2、闭包的概念出现于60年代，最早实现闭包的程序是Scheme，我们就可以理解为什么JavaScript中有闭包

​			*因为JavaScript中有大量的设计是来源于Scheme的；

​		3、MDN对JavaScript闭包的解析：

​			（1）一个函数对其周围状态（Lexical environment，此法环境）的引用捆绑在一起（或者说函数被引用包围），这样的组合就是闭包；

​			（2）闭包让你在一个函数中访问到其外层函数的作用域；

​			（3）在JavaScript中，每当创建一个函数，闭包就会在函数创建的同时被创建出来；

​		4、自身理解和总结

​			（1）一个普通的函数function，如果他可以访问外层作用域的自由变量，那么这个函数就是一个闭包；

​			（2）从广义的角度来讲：JavaScript中的函数都是闭包；

​			（3）从狭义的角度来讲：JavaScript中一个函数，如果访问了外层作用域的变量，那么它就是一个闭包；

<p style="font-weight:600">三、JS中闭包的内存泄露</p>

​		1、如果当前函数访问了外层自由变量，那么这个函数就是闭包；

​		2、闭包函数在使用一次后不再使用的话，会一直存在内存中进行占用，导致内存的浪费和数据泄露

​				*   将不再使用的闭包函数赋值为null即可被垃圾回收器进行销毁处理

​		3、浏览器如何查看内存是否进行了回收或使用![image-20220822143101003](C:\Users\60991\AppData\Roaming\Typora\typora-user-images\image-20220822143101003.png)

​		4、查看闭包函数的父环境（）![image-20220822145242951](C:\Users\60991\AppData\Roaming\Typora\typora-user-images\image-20220822145242951.png)



<p style="text-align:center;font-size:24px;font-weight: 1000">四、JS函数的this</p>

<p style="font-weight:600">一、为什么需要this</p>

​		在常见的编程语言中，几乎都有this这个关键字，但是JavaScript中的this和常见的面向对象语言中的this不太一样：

​			（1）常见面向对象的编程语言中，如Java、C++、Swift、Dart等等一系列语言中，this通常只会出现在类的方法中

​			（2）需要一个类，类中的方法（new 一个实例）中，this代表的是当前调用对象；

​			（3）JavaScript中的this更加灵活，无论是他出现的位置还是他代表的含义。

​			（4）this在全局作用域下：<font color="#f00">浏览器中指向window对象，node环境中指向 {} 对象</font>

<p style="font-weight:600">二、this指向什么呢？</p>

​		1、在全局作用域下this指向：

​			（1）<span style="color:#f00; text-decoration: underline;">在浏览器中this指向window</span>;

​			（2）<span style="color:#f00; text-decoration: underline;">在node环境中this指向空大括号对象</span>;

​		2、开发的时候很少直接在全局作用域下去使用this，通常都是在函数中进行使用

​			注：所用函数在被调用的时候，都会创建一个执行上下文，这个上下文记录着函数的调用栈、AO对象等，this也是其中一条记录；

​		3、定义一个函数采用三种不同的方式进行调用，会产生三种不同的结果

​							<img src="C:\Users\60991\AppData\Roaming\Typora\typora-user-images\image-20220825101617488.png" alt="image-20220825101617488" style="zoom: 80%;" />

​				<font color="#f00">发现：</font>函数在调用时，js会默认给this绑定一个值；this的绑定和函数定义的位置没有关系；this的绑定和						    调用方式及调用位置有关系；this是在运行时被绑定的

<p style="font-weight:600">三、this的绑定规则？</p>

​		1、默认绑定：函数独立调用时——函数没有绑定到某个对象上进行调用

​		2、隐式绑定：他的调用位置中，是通过某个对象发起的函数调用

​		3、显示绑定：

​					前提条件：①必须在调用的对象内部有一个对函数的引用（比如一个属性）；

​									   ②如果没有这样的引用，在进行调用时，会找不到该函数的错误；

​									   ③正是通过这个引用，间接地将this绑定到了这个对象上；

​					如果我们不希望再对象内部包含这个函数的引用，同时又希望在这个对象上强制调用，怎么做？

​										① js所有的函数都可以使用call和apply方法（这个和Prototype有关）-参数：apply为数											组，call和bind为参数列表

​										② 这两个函数的第一个参数都要求是一个对象，的这个对象是为this准备的

​										③ 在调用这个函数时，会将this绑定到这个传入的对象上

​		4、new绑定：js中的函数可以当作一个类的构造函数来使用，也就是使用new关键字

​						使用new关键字调用函数时执行的操作：

​									① 创建一个全新对象；

​									② 这个对象会被执行prototype连接；

​									③ 这个新对象会绑定到函数调用的this上（this的绑定就是在这一步完成）

​									④ 如果函数没有返回其他对象，表达式就会返回这个新对象

<p style="font-weight:600">四、this绑定规则优先级——如果一个函数调用应用了多条规则，会进行优先级选择</p>

​		1、默认规则的优先级最低

​				<font color="#f00">原因：</font>因为存在其他规则时，就会通过其它规则的方式来绑定this

​		2、显示绑定优先级高于隐式绑定

​				<font color="#f00">案例：</font><img src="C:\Users\60991\AppData\Roaming\Typora\typora-user-images\image-20220826111115121.png" alt="image-20220826111115121" style="zoom:50%;" />	

​		3、new绑定优先级高于隐式绑定

​				<font color="#f00">案例：</font><img src="C:\Users\60991\AppData\Roaming\Typora\typora-user-images\image-20220826135048812.png" alt="image-20220826135048812" style="zoom: 67%;" />	

​		4、new绑定规则优先级高于显示绑定规则

​				<font color="#f00">案例：</font><img src="C:\Users\60991\AppData\Roaming\Typora\typora-user-images\image-20220826135854186.png" alt="image-20220826135854186" style="zoom:50%;" />	

​			<font color="#f00" size="4">整理：</font><span style="text-decoration: underline;color:#09f">new绑定 > 显示绑定(apply/call/bind) > 隐式绑定 (obj.foo()) > 默认绑定(函数独立调用)；显示绑定规则中，bind的优先级最高！</span>

<p style="font-weight:600">五、this绑定规则之外——this的绑定规则已经足够开发使用，但是有一些语法超出了规则之外</p>

​		1、忽略显示绑定

​				** 当bind/apply/call传入的参数为undefined/null的时候，它的this指向window对象

​		2、间接函数引用——这种情况使用的实质上是默认绑定规则

​				**<img src="C:\Users\60991\AppData\Roaming\Typora\typora-user-images\image-20220826143932326.png" alt="image-20220826143932326" style="zoom:50%;" />	

​			**提示：**()的意思是，把小括号里面的代码当作一个整体

<p style="font-weight:600">五、this绑定规则之外——箭头函数(arrow function)</p>

​		**特点：**		

​			（1）ES6之后新增的一种编写函数的方法，书写比函数表达式更加简洁；

​			（2）箭头函数不会绑定this、arguments属性

​			（3）箭头函数也不能作为狗函数来使用——不能使用new关键字

​		**编写：**由**() 参数**、**=> 箭头**、**{}函数体**三部分组成，参数只有一个的时候，**小括号可以省略**，当函数体里面**只有一句代码的时候大括号也可以省略**，当函数体返回值是大括号对象时需要使用小括号包裹起来，表示大括号对象时一个整体

​		

<p style="text-align:center;font-size:24px;font-weight: 1000">五、JS实现apply/call/bind和认识arguments</p>

<p style="font-weight:600">一、实现apply/call/bind</p>

​		1、apply：08_apply-call-bind的实现/03_apply函数的实现.js

​					<img src="C:\Users\60991\AppData\Roaming\Typora\typora-user-images\image-20220831135612234.png" alt="image-20220831135612234" style="zoom:50%;" />	

​		2、call：08_apply-call-bind的实现/01_call函数的实现.js

​					<img src="C:\Users\60991\AppData\Roaming\Typora\typora-user-images\image-20220831135653175.png" alt="image-20220831135653175" style="zoom:50%;" />		

​		3、bind：08_apply-call-bind的实现/04_bind函数的实现.js

​					<img src="C:\Users\60991\AppData\Roaming\Typora\typora-user-images\image-20220831135727356.png" alt="image-20220831135727356" style="zoom:50%;" />	

<p style="font-weight:600">二、认识arguments</p>

​		**1、介绍：**是一个对应于**<span style="color:#f00">传递给函数的参数</span>**的**<span style="color:#f00">类数组(array-like)对象</span>**。

​		**2、类数组：**array-like意味着它不是一个数组类型，而是一个对象类型：

​			（1）相同点：拥有数组的一些特征，如：length，使用index索引来进行访问；

​			（2）不同点：没有数组的一些方法，如：forEach、map等

​		**3、arguments转数组的方式**：

​								<img src="C:\Users\60991\AppData\Roaming\Typora\typora-user-images\image-20220831150215032.png" alt="image-20220831150215032" style="zoom:50%;" />			

​		**4、箭头函数中不存在arguments的**

​			（1）替代：使用拓展运算符进行替代

​			（2）在箭头函数中打印arguments，它会向上级去寻找

​					** 在浏览器中全局作用域是没有arguments的，除非箭头函数的上级是function函数

​					** 在node中全局作用域是有arguments的



<p style="text-align:center;font-size:24px;font-weight: 1000">六、纯函数及函数柯里化实现</p>

<p style="font-weight:600">一、认识纯函数</p>

​		1、
