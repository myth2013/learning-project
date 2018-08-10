# 环境变量配置
在“系统变量”中设置3项属性：
```
变量名：JAVA_HOME
变量值：D:\developer\Java\jdk-10.0.1        // 要根据自己的实际路径配置,安装目录最好不要有中文和空格
变量名：Path
变量值：%JAVA_HOME%\bin;%JAVA_HOME%\jre\bin;
变量名：CLASSPATH
变量值：.;%JAVA_HOME%\lib\dt.jar;%JAVA_HOME%\lib\tools.jar;         //记得前面有个"."
```

# 命令
## java -version
查看Java版本号

## javac 文件名.java
编译为二进制文件

## java 类名(一般与文件名相同)
执行编译生成的class文件

# Notepad++ 添加运行快捷键

## 添加编译
在运行窗口中输入 cmd /k javac -encoding utf-8 "$(FULL_CURRENT_PATH)" & echo 编译成功！ & PAUSE & EXIT 
然后点击保存后输入一个名字，并可以创建快捷键。完成后点OK

## 添加运行
在运行窗口中输入 cmd /k java -cp "$(CURRENT_DIRECTORY)" "$(NAME_PART)" & PAUSE & EXIT
然后点击保存后输入一个名字，并可以创建快捷键。完成后点OK

# CMD运行中文乱码问题

当Java源文件格式为utf-8格式时，中文文字会出现乱码。

由于JDK是国际版的，在编译的时候，如果我们没有用-encoding参数指定我们的Java程序的编码格式，则javac.exe首先获得我们操作系统默认采用的编码格式，也即在编译java程序时，若我们不指定源程序文件的编码格式，JDK首先获得操作系统的file.encoding参数(它保存的就是操作系统默认的编码格式，如WIN2k，它的值为GBK)，然后JDK就把我们的java源程序从file.encoding编码格式转化为JAVA内部默认的UNICODE格式放入内存中。然后，javac把转换后的unicode格式的文件进行编译成.class类文件，此时.class文件是UNICODE编码的，它暂放在内存中，紧接着，JDK将此以UNICODE编码的编译后的class文件保存到我们的操作系统中形成我们见到的.class文件。对我们来说，我们最终获得的.class文件是内容以UNICODE编码格式保存的类文件，它内部包含我们源程序中的中文字符串，只不过此时它己经由file.encoding格式转化为UNICODE格式了。当我们不加设置就编译时，相当于使用了参数：javac -encoding gbk XX.java，当然就会出现不兼容的情况。

解决办法是：应该使用-encoding参数指明编码方式：javac -encoding UTF-8 XX.java。或者设定CMD的默认编码为utf-8:chcp 65001。

_注：如果Java源文件是ASCII格式的，中文默认保存的是系统编码，则不存在此问题。_

# 基本语法
编写Java程序时，应注意以下几点：

+ 大小写敏感：Java是大小写敏感的，这就意味着标识符Hello与hello是不同的。
+ 类名：对于所有的类来说，类名的首字母应该大写。如果类名由若干单词组成，那么每个单词的首字母应该大写，例如 MyFirstJavaClass 。
+ 方法名：所有的方法名都应该以小写字母开头。如果方法名含有若干单词，则后面的每个单词首字母大写。
+ 源文件名：源文件名必须和类名相同。当保存文件的时候，你应该使用类名作为文件名保存（切记Java是大小写敏感的），文件名的后缀为.java。（如果文件名和类名不相同则会导致编译错误）。
+ 主方法入口：所有的Java 程序由public static void main(String []args)方法开始执行。

# 标识符
Java所有的组成部分都需要名字。类名、变量名以及方法名都被称为标识符。

关于Java标识符，有以下几点需要注意：

+  所有的标识符都应该以字母（A-Z或者a-z）,美元符（$）、或者下划线（_）开始
+ 首字符之后可以是字母（A-Z或者a-z）,美元符（$）、下划线（_）或数字的任何字符组合
+ 关键字不能用作标识符
+ 标识符是大小写敏感的
+ 合法标识符举例：age、$salary、_value、__1_value
+ 非法标识符举例：123abc、-salary

# 包
## 打包 package
__包声明应该在源文件的第一行，每个源文件只能有一个包声明__，这个文件中的每个类型都应用于它。
```
/* 文件名: Animal.java */
package animals;

interface Animal {
   public void eat();
   public void travel();
}
```
```
javac –d . 文件名.java
```

## 导包 import
为了能够使用某一个包的成员，我们需要在 Java 程序中明确导入该包。使用"import"语句可完成此功能。

在 java 源文件中 import 语句应位于 package 语句之后，所有类的定义之前，可以没有，也可以有多条，其语法格式为：
```
import package1[.package2…].(classname|*);
```
如果在一个包中，一个类想要使用本包中的另一个类，那么该包名可以省略。

# 生成开发文档
```
javadoc -d 保存目录 -author -version 文件名.java
```

# 数据类型

Java语言提供了八种基本类型。六种数字类型（四个整数型，两个浮点型），一种字符类型，还有一种布尔型。

## byte：
+ byte 数据类型是8位、有符号的，以二进制补码表示的整数；
+ 最小值是 -128（-2^7）；
+ 最大值是 127（2^7-1）；
+ 默认值是 0；
+ byte 类型用在大型数组中节约空间，主要代替整数，因为 byte 变量占用的空间只有 int 类型的四分之一；
+ 例子：byte a = 100，byte b = -50。

## short：
+ short 数据类型是 16位、有符号的以二进制补码表示的整数
+ 最小值是 -32768（-2^15）；
+ 最大值是 32767（2^15 - 1）；
+ Short 数据类型也可以像 byte那样节省空间。一个short变量是int型变量所占空间的二分之一；
+ 默认值是 0；
+ 例子：short s = 1000，short r = -20000。

## int：
+ int 数据类型是32位、有符号的以二进制补码表示的整数；
+ 最小值是 -2,147,483,648（-2^31）；
+ 最大值是 2,147,483,647（2^31 - 1）；
+ 一般地整型变量默认为 int 类型；
+ 默认值是 0 ；
+ 例子：int a = 100000, int b = -200000。

## long：
+ long 数据类型是 64 位、有符号的以二进制补码表示的整数；
+ 最小值是 -9,223,372,036,854,775,808（-2^63）；
+ 最大值是 9,223,372,036,854,775,807（2^63 -1）；
+ 这种类型主要使用在需要比较大整数的系统上；
+ 默认值是 0L；
+ 例子： long a = 100000L，Long b = -200000L。
+ "L"理论上不分大小写，但是若写成"l"容易与数字"1"混淆，不容易分辩。所以最好大写。

## float：
+ float 数据类型是单精度、32位、符合IEEE 754标准的浮点数；
+ float 在储存大型浮点数组的时候可节省内存空间；
+ 默认值是 0.0f；
+ 浮点数不能用来表示精确的值，如货币；
+ 例子：float f1 = 234.5f。

## double：
+ double 数据类型是双精度、64 位、符合IEEE 754标准的浮点数；
+ 浮点数的默认类型为double类型；
+ double类型同样不能表示精确的值，如货币；
+ 默认值是 0.0d；
+ 例子：double d1 = 123.4。

## boolean：
+ boolean数据类型表示一位的信息；
+ 只有两个取值：true 和 false；
+ 这种类型只作为一种标志来记录 true/false 情况；
+ 默认值是 false；
+ 例子：boolean one = true。

## char：
+ char类型是一个单一的 16 位 Unicode 字符；
+ 最小值是 \u0000（即为0）；
+ 最大值是 \uffff（即为65,535）；
+ char 数据类型可以储存任何字符；
+ 例子：char letter = 'A';；
+ 字符参与运算时，转换为对应int型的ASCII码表值;
+ 记住几个特殊码值：‘0’=48，‘a'=65, 'A'=97。

对于数值类型的基本类型的取值范围，我们无需强制去记忆，因为它们的值都已经以常量的形式定义在对应的包装类中了。
```
        // byte  
        System.out.println("基本类型：byte 二进制位数：" + Byte.SIZE);  
        System.out.println("包装类：java.lang.Byte");  
        System.out.println("最小值：Byte.MIN_VALUE=" + Byte.MIN_VALUE);  
        System.out.println("最大值：Byte.MAX_VALUE=" + Byte.MAX_VALUE);  
        System.out.println();  
  
        // short  
        System.out.println("基本类型：short 二进制位数：" + Short.SIZE);  
        System.out.println("包装类：java.lang.Short");  
        System.out.println("最小值：Short.MIN_VALUE=" + Short.MIN_VALUE);  
        System.out.println("最大值：Short.MAX_VALUE=" + Short.MAX_VALUE);  
        System.out.println();  
  
        // int  
        System.out.println("基本类型：int 二进制位数：" + Integer.SIZE);  
        System.out.println("包装类：java.lang.Integer");  
        System.out.println("最小值：Integer.MIN_VALUE=" + Integer.MIN_VALUE);  
        System.out.println("最大值：Integer.MAX_VALUE=" + Integer.MAX_VALUE);  
        System.out.println();  
  
        // long  
        System.out.println("基本类型：long 二进制位数：" + Long.SIZE);  
        System.out.println("包装类：java.lang.Long");  
        System.out.println("最小值：Long.MIN_VALUE=" + Long.MIN_VALUE);  
        System.out.println("最大值：Long.MAX_VALUE=" + Long.MAX_VALUE);  
        System.out.println();  
  
        // float  
        System.out.println("基本类型：float 二进制位数：" + Float.SIZE);  
        System.out.println("包装类：java.lang.Float");  
        System.out.println("最小值：Float.MIN_VALUE=" + Float.MIN_VALUE);  
        System.out.println("最大值：Float.MAX_VALUE=" + Float.MAX_VALUE);  
        System.out.println();  
  
        // double  
        System.out.println("基本类型：double 二进制位数：" + Double.SIZE);  
        System.out.println("包装类：java.lang.Double");  
        System.out.println("最小值：Double.MIN_VALUE=" + Double.MIN_VALUE);  
        System.out.println("最大值：Double.MAX_VALUE=" + Double.MAX_VALUE);  
        System.out.println();  
  
        // char  
        System.out.println("基本类型：char 二进制位数：" + Character.SIZE);  
        System.out.println("包装类：java.lang.Character");  
        // 以数值形式而不是字符形式将Character.MIN_VALUE输出到控制台  
        System.out.println("最小值：Character.MIN_VALUE="  
                + (int) Character.MIN_VALUE);  
        // 以数值形式而不是字符形式将Character.MAX_VALUE输出到控制台  
        System.out.println("最大值：Character.MAX_VALUE="  
                + (int) Character.MAX_VALUE);  
```

# 类型转换
## 自动类型转换
整型、实型（常量）、字符型数据可以混合运算。运算中，不同类型的数据先转化为同一类型，然后进行运算。

转换从低级到高级。
```
低  ------------------------------------>  高

byte,short,char—> int —> long—> float —> double 
```
1. 不能对boolean类型进行类型转换。

2. 不能把对象类型转换成不相关类的对象。

3. 在把容量大的类型转换为容量小的类型时必须使用强制类型转换。

4. 转换过程中可能导致溢出或损失精度，例如：
```
int i =128;   
byte b = (byte)i;
```
因为 byte 类型是 8 位，最大值为127，所以当 int 强制转换为 byte 类型时，值 128 时候就会导致溢出。

5. 浮点数到整数的转换是通过舍弃小数得到，而不是四舍五入，例如：
```
(int)23.7 == 23;        
(int)-45.89f == -45
```

6. byte、short、char在参与运算时，会做一个变量提升，先变成int型，再参与运算。所以：
```
byte a=3;
byte b=4;
byte c=a+b;
//编译的时候会报错。a+b运算的结果是int型，不能直接赋值给byte型变量。

byte x=3+4;
//编译没有问题。声明变量时，两个常数相加，编译器就理解为两个常数的相加结果，即7。而7在byte的取值范围内，所以没有问题。
```

# 进制
byte、int、long、和short都可以用十进制、16进制以及8进制的方式来表示。

当使用常量的时候，前缀 0 表示 8 进制，而前缀 0x 代表 16 进制, 例如：
```
int decimal = 100;
int octal = 0144;
int hexa =  0x64;
```

# 运算符
## 算术运算符
+ 加法：+
+ 减法：-
+ 乘法：\*
+ 除法：/
+ 取余：%
+ 自增：++
+ 自减：--

## 关系运算符
+ 是否相等：==
+ 是否不等：!=
+ 是否大于：>
+ 是否小于：<
+ 是否大于等于：>=
+ 是否小于等于：<=

## 位运算符
+ &：与。有0则0，否则为1
+ |：或。有1则1，否则为0
+ ^：异或。相同则0，不同则1
+ ~：取反。按位取反，0变1,1变0
+ <<：左移。左操作数按位左移右操作数指定的位数，如：A=60,A<<2得到240
+ >>：右移。左操作数按位右移右操作数指定的位数，如：A=60，A>>2得到15
+ >>>：右移补零。左操作数的值按右操作数指定的位数右移，移动得到的空位以0填充

## 逻辑运算符
+ &：逻辑与
+ |：逻辑或
+ !：逻辑非

__&与&&的区别：都是逻辑与运算符，但是如果&&前面的操作数为假，后面的操作数不执行。|与||类似。__

## 赋值运算符
+ =
+ +=
+ -=
+ \*=
+ /=
+ %=
+ <<=
+ \>>=
+ &=
+ |=
+ ^=

## 其他运算符
+ 条件运算符（三目运算符）
+ instanceof运算符
```
String name = "James";
boolean result = name instanceof String;
```

# 多态
## 概述
同一个对象(事物)，在不同时刻体现出来的不同状态。

## 前提 
1. 有继承关系
2. 有方法重写
3. 有父类引用指向子类对象
## 语法
```
Father f = new Son();
```
## 成员访问特点
1. 成员变量：编译看左边，运行看左边
2. 构造方法：创建子类对象的时候，访问父类的构造方法，对父类的数据进行初始化
3. 成员方法：编译看左边，运行看右边
4. 静态方法：编译看左边，运行看左边(静态和类相关，算不上重写，所以，访问还是看左边)

# 类与接口关系
1. 类与类：继承关系，只能单继承，可以多层继承
2. 类与接口：实现关系，可以单实现，也可以多实现。并且还可以在继承一个类的同时实现多个接口
3. 接口与接口： 继承关系，可以单继承，也可以多继承

# 抽象类和接口区别
## 成员区别
1. 抽象类
    1. 成员变量：可以变量，也可以常量
    2. 构造方法：有
    3. 成员方法：可以抽象，也可以非抽象
2. 接口
    1. 成员变量：只可以常量
    2. 成员方法：只可以抽象
## 关系区别
1. 类与类：继承，单继承
2. 类与接口：实现，单实现，多实现
3. 接口与接口：继承，单继承，多继承
## 设计理念区别
1. 抽象类：定义的是该继承体系的共性功能
2. 接口：定义的是该继承体系的扩展功能

