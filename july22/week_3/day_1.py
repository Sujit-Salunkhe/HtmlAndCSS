# veg=["apple","green","red","yellow"]
# for x in veg :
#     print(x)

# veg=["apple","green","red","yellow"]
# for x in range(len(veg)):
# #     print(veg[x]
# )
# veg=["apple","green","red","yellow"]
# i=0
# while i < len(veg):
#     print(veg[i])
# # #     i=i+1veg=["apple","green","red","yellow"]
# veg=["apple","green","red","yellow"]
# v=[]
# for x in veg:
#     if "a" in x :
#         v.append(x)
# print(v)
# print()

# veg=["apple","green","red","yellow"]
# # v=[]
# v=[x for x in veg if x!="apple" ]
# # print(v)

# v=[x.upper() for x in veg]
# print(v)
# v=["newlist" for x in veg]
# # print(v)
# v=[x if x!="apple" else "kuch nahi" for x in veg]
# # print(v)
# veg.sort(reverse=True)
# # print(veg)
# def sujit(n):
#     return abs(n - 200)
# veg=[52,25,265,45,]
# veg.sort(key = sujit)
# print(veg)
import this


# thislist = ["banana", "Orange", "Kiwi", "cherry"]
# thislist.sort(key=str.lower)
# # print(thislist)
# list1 = ["a", "b", "c"]
# list2 = [1, 2, 3]
# # list1.extend(list2)
# for x in list2:
#     list1.append(x)
# print(list1)
# x=1
# y=1
# z=2
# n=3
# l=[]
# for i in range(x+1):
#         for j in range(y+1):
#             for k in range (z+1):
#                 if x+y+z!=0:
#                     l.append([i,j,k])
# print(l)
x = {"apple", "banana", "cherry"}
y = {"google", "microsoft", "apple"}
z=x.intersection(y)
print(z)
