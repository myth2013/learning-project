# CMD命令
1. 查看版本号
```
python -v  查看版本号，并打开Python Shell
python --version 查看版本号
python 查看版本号，并打开Python Shell
```

# notepad++ 添加命令行
点击菜单 运行 -> 运行...，输入以下命令：

`cmd /k …… “$(FULL_CURRENT_PATH)” & PAUSE & EXIT `

省略号中换成python.exe的路径，例如:C:\python\python.exe。注意引号一定要是英文的。保存后，用快捷键使用。推荐配置不同版本的Python快捷键。

# print函数
有两种打印方式：
1. `print "Hello,World!"; #支持2.* `
2. `print("Hello,World!"); #支持2.*、3.* `

_推荐使用第二种方式。_

Python中默认的编码格式是 ASCII 格式，在没修改编码格式时无法正确打印汉字，所以在读取中文时会报错。解决方法为只要在文件开头加入 # -*- coding: UTF-8 -*- 或者 #coding=utf-8 就行了

__注意：#coding=utf-8 的 = 号两边不要空格。__

打印中文方式：
```
print(u"你好，世界");

或者

import sys
reload(sys)
sys.setdefaultencoding("utf8")
print("你好，世界".decode());
```
__注意：__ _Python3.X 源码文件默认使用utf-8编码，所以可以正常解析中文，无需指定 UTF-8 编码。如果你使用编辑器，同时需要设置 py 文件存储的格式为 UTF-8，否则会出现错误。_

print 默认输出是换行的，如果要实现不换行需要在变量末尾加上 end=""：
```
x="a"
y="b"
# 换行输出
print( x )
print( y )
 
print('---------')
# 不换行输出
print( x, end=" " )
print( y, end=" " )
print()
```

# 运行Python文件

在文件目录中，CMD中运行：`python 文件名.py`

# 标识符
在 Python 里，标识符由字母、数字、下划线组成。

在 Python 中，所有标识符可以包括英文、数字以及下划线(_)，但不能以数字开头。

Python 中的标识符是区分大小写的。

以下划线开头的标识符是有特殊意义的。以单下划线开头 `_foo `的代表不能直接访问的类属性，需通过类提供的接口进行访问，不能用 `from xxx import *` 而导入；

以双下划线开头的 `__foo `代表类的私有成员；以双下划线开头和结尾的 `__foo__ `代表 Python 里特殊方法专用的标识，如` __init__()` 代表类的构造函数。

# 保留字符
保留字即关键字，这些保留字不能用作常数或变数，或任何其他标识符名称。Python 的标准库提供了一个 keyword 模块，可以输出当前版本的所有关键字：
```
#2.0+
>>> import keyword
>>> keyword.kwlist
['and', 'as', 'assert', 'break', 'class', 'continue', 'def', 'del', 'elif', 'else', 'except', 'exec', 'finally', 'for', 'from', 'global', 'if', 'import', 'in','is', 'lambda', 'not', 'or', 'pass', 'print', 'raise', 'return', 'try', 'while', 'with', 'yield']

#3.0+
>>> import keyword
>>> keyword.kwlist
['False', 'None', 'True', 'and', 'as', 'assert', 'break', 'class', 'continue', 'def', 'del', 'elif', 'else', 'except', 'finally', 'for', 'from', 'global', 'if', 'import', 'in', 'is', 'lambda', 'nonlocal', 'not', 'or', 'pass', 'raise', 'return', 'try', 'while', 'with', 'yield']

```
    
# 行和缩进
学习 Python 与其他语言最大的区别就是，Python 的代码块不使用大括号 {} 来控制类，函数以及其他逻辑判断。python 最具特色的就是用缩进来写模块。

缩进的空白数量是可变的，但是所有代码块语句必须包含相同的缩进空白数量，这个必须严格执行。如下所示：
```
if True:
    print("True")
else:
  print("False")
```
以下代码将会执行错误：
```
if True:
    print("Answer")
    print("True")
else:
    print("Answer")
    #没有严格缩进，在执行时会报错
 print("False")
```
执行上述代码会报IndentationError: unindent does not match any outer indentation level错误。表明，你使用的缩进方式不一致，有的是 tab 键缩进，有的是空格缩进，改为一致即可。

如果是 IndentationError: unexpected indent 错误, 则 python 编译器是在告诉你"Hi，老兄，你的文件里格式不对了，可能是tab和空格没对齐的问题"，所有 python 对格式要求非常严格。

因此，在 Python 的代码块中必须使用相同数目的行首缩进空格数。

建议你在每个缩进层次使用 单个制表符 或 两个空格 或 四个空格 , 切记不能混用

# 多行语句
Python语句中一般以新行作为语句的结束符。

但是我们可以使用斜杠（ \）将一行的语句分为多行显示，如下所示：
```
total = item_one + \
        item_two + \
        item_three
```
语句中包含 [], {} 或 () 括号就不需要使用多行连接符。如下实例：
```
days = ['Monday', 'Tuesday', 'Wednesday',
        'Thursday', 'Friday']
```

# 数字(Number)类型
python中数字有四种类型：整数、布尔型、浮点数和复数。

1. int (整数), 如 1, 只有一种整数类型 int，表示为长整型，没有 python2 中的 Long。
2. bool (布尔), 如 True。
3. float (浮点数), 如 1.23、3E-2
4. complex (复数), 如 1 + 2j、 1.1 + 2.2j

# 字符串(String)
Python 可以使用引号( ' )、双引号( " )、三引号( ''' 或 """ ) 来表示字符串，引号的开始与结束必须的相同类型的。

其中三引号可以由多行组成，编写多行文本的快捷语法，常用于文档字符串，在文件的特定地点，被当做注释。
```
word = 'word'
sentence = "这是一个句子。"
paragraph = """这是一个段落。
包含了多个语句"""
```

* python中单引号和双引号使用完全相同。
* 使用三引号('''或""")可以指定一个多行字符串。
* 转义符 `'\'`
* 反斜杠可以用来转义，使用r可以让反斜杠不发生转义。如 r"this is a line with \n" 则\n会显示，并不是换行。
* 按字面意义级联字符串，如`"this " "is " "string"`会被自动转换为this is string。
* 字符串可以用 + 运算符连接在一起，用 \* 运算符重复。
* Python 中的字符串有两种索引方式，从左往右以 0 开始，从右往左以 -1 开始。
* Python中的字符串不能改变。
* Python 没有单独的字符类型，一个字符就是长度为 1 的字符串。
* 字符串的截取的语法格式如下：变量\[头下标:尾下标\]

```
str='Runoob'
 
print(str)                 # 输出字符串
print(str[0:-1])           # 输出第一个到倒数第二个的所有字符
print(str[0])              # 输出字符串第一个字符
print(str[2:5])            # 输出从第三个开始到第五个的字符
print(str[2:])             # 输出从第三个开始的后的所有字符
print(str * 2)             # 输出字符串两次
print(str + '你好')        # 连接字符串
 
print('------------------------------')
 
print('hello\nrunoob')      # 使用反斜杠(\)+n转义特殊字符
print(r'hello\nrunoob')     # 在字符串前面添加一个 r，表示原始字符串，不会发生转义
```

# 注释
python中单行注释采用 # 开头。
```
# 第一个注释
print "Hello, Python!";  # 第二个注释
```
注释可以在语句或表达式行末：
```
name = "Madisetti" # 这是一个注释
```
python 中多行注释使用三个单引号(''')或三个双引号(""")。
```
'''
这是多行注释，使用单引号。
这是多行注释，使用单引号。
这是多行注释，使用单引号。
'''
"""
这是多行注释，使用双引号。
这是多行注释，使用双引号。
这是多行注释，使用双引号。
"""
```

# 空行
函数之间或类的方法之间用空行分隔，表示一段新的代码的开始。类和函数入口之间也用一行空行分隔，以突出函数入口的开始。

空行与代码缩进不同，空行并不是Python语法的一部分。书写时不插入空行，Python解释器运行也不会出错。但是空行的作用在于分隔两段不同功能或含义的代码，便于日后代码的维护或重构。

记住：空行也是程序代码的一部分。

# 等待用户输入
下面的程序执行后就会等待用户输入，按回车键后就会退出：
```
#coding:utf-8

#2.0+ 
#第一种 不兼容3.0+
raw_input("按下 enter 键退出，其他任意键显示...\n".decode("utf-8").encode("GBK"))

#第二种 不输入，直接输入enter会报错
input("按下 enter 键后退出。\n".decode("utf-8").encode("GBK"))


#3.0+ 不输入，直接输入enter不会报错
input("按下 enter 键后退出。\n")
```

# 同一行显示多条语句
Python可以在同一行中使用多条语句，语句之间使用分号(;)分割，以下是一个简单的实例：
`import sys; x = 'runoob'; sys.stdout.write(x + '\n')`

# 多个语句构成代码组
缩进相同的一组语句构成一个代码块，我们称之代码组。

像if、while、def和class这样的复合语句，首行以关键字开始，以冒号( : )结束，该行之后的一行或多行代码构成代码组。

我们将首行及后面的代码组称为一个子句(clause)。

如下实例：
```
if expression : 
   suite
elif expression : 
   suite 
else : 
   suite
```

# import与from...import
在 python 用 import 或者 from...import 来导入相应的模块。

将整个模块(somemodule)导入，格式为： import somemodule

从某个模块中导入某个函数,格式为： from somemodule import somefunction

从某个模块中导入多个函数,格式为： from somemodule import firstfunc, secondfunc, thirdfunc

将某个模块中的全部函数导入，格式为： from somemodule import \*

导入sys模块
```
import sys
print('================Python import mode==========================');
print ('命令行参数为:')
for i in sys.argv:
    print (i)
print ('\n python 路径为',sys.path)

from sys import argv,path  #  导入特定的成员
 
print('================python from import===================================')
print('path:',path) # 因为已经导入path成员，所以此处引用时不需要加sys.path
```
