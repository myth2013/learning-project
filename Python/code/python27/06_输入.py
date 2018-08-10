#coding:utf-8

#2.0+ 
#第一种 不兼容3.0+
#raw_input("按下 enter 键退出，其他任意键显示...\n".decode("utf-8").encode("GBK"))

#第二种 不输入，直接输入enter会报错
#input("按下 enter 键后退出。\n".decode("utf-8").encode("GBK"))


#3.0+ 不输入，直接输入enter不会报错
input("按下 enter 键后退出。\n")