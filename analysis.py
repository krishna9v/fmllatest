def diff(x,y):
               if(x>y):
                   p = x-y
               elif (x<y):
                   p= y - x
               else:
                   p = 0
               return p
               
def calculate(arr,org_len,arr_len):
        result = 0
        for o in range (int(org_len)):
            #print ("non inner for loop")
            for i in range (int(arr_len)):
                #print ("inner for loop ",original[o],"and ", arr[i])
                outer = original[o]
                inner = arr[i]
                if(str(outer) == str(inner)):
                   result += 8 - diff(i,o)
                   #print("result up dated :",result)
                

        return result


  
        





names_list = []
result_data=[]



print ("enter no of users in this comp:")
no_user = int(input())
total_data = [[] for _ in range(no_user)]
print (total_data)





original = list()
num = input("Enter how many elements you want in key array:")
print ("Enter numbers in array: ")
for i in range(int(num)):
    print(i,"num")
    od = input()
    original.append(int(od))
print ('ARRAY: ',original)
print (" ok key array is inserted")



for x in range (int(no_user)):
    
    name = input("enter the user name")
    print ("Enter how many elements in user")
    print (name,":")
    len = input("")
    
    for j in range (int(len)) :
        print(j,"num")
        n = input()
        #user1.append(int(n))
        total_data[x].append(n)
    names_list.append(name)
    #result cal
    #ans = calculae(total_data[x])
    print("calculating your result.....")
    #ans = int(input())
    ans = calculate(total_data[x],num,len)
    print ("ok...")
    print (ans)
    result_data.append(ans)


    
    

    
print("array of data:",total_data)
print("names list is :",names_list)
print("original key list: ",original)
print ("and result data is :",result_data)
res = result_data.index(max(result_data))
print ("hay user win id :",res)
output = names_list[res]
print("actual user name is :",output)


#now sortin time name-list and result_data
op_len = 0
op_len = no_user
i = 0
j = 0
for i in range (int(op_len)):
        for j in range(0,op_len-i-1):
            if (result_data[j] < result_data[j+1]):
                result_data[j], result_data[j+1] = result_data[j+1] , result_data[j]
                names_list[j],names_list[j+1] = names_list[j+1],names_list[j]



#disply sorted data
print("after sort result :",result_data)
    
print("after sort result names are :", names_list)

print ("and here's the final rankig system..............")

for i in range(int(op_len)):
    print("The rank ",i+1,"is :",names_list[i])

    
                
                
                






#for(i=0;i<org_lem;i++)
#{
#    
#    for(j=0;j<temp;j++)
#    {
#        if(org[i]== temp[j])
#        {
#                print(yes)
#                result1    + =  ( 8 - diff(i,j)) 
#        }
#    }
#}
#
#diff(int x,int y)
#{
#    if(x>y)
#        p=x-y;
#    else if(x<y)
#         p = y-x;
#    else
#       { p =0;}
#    return(p);
#
#}


#
#print ("Enter numbers in array: ")
#for i in range(int(num)):
#    print(i,"num")
#    n = input()
#    user1.append(int(n))
#print ('ARRAY: ',user1)
#userlist.append(user1)       # total users names..
#print (" ok key array is inserted onto user1 array... :)")
#
##user 2 array input
#user2 = list()
#num = input("Enter how many elements in user2 array:")
#print ("Enter numbers in array: ")
#for i in range(int(num)):
#    print(i,"num")
#    n = input()
#    user2.append(int(n))
#print ('ARRAY: ',user2)
#userlist.append(user2)       # total users names..
#print (" ok key array is inserted onto user2 array... :)")
#
##user 3 array input
#user3 = list()
#num = input("Enter how many elements in user3 array:")
#print ("Enter numbers in array: ")
#for i in range(int(num)):
#    print(i,"num")
#    n = input()
#    user3.append(int(n))
#print ('ARRAY: ',user3)
#userlist.append(user3)       # total users names..
#print (" ok key array is inserted onto user3 array... :)")
#
##user 4 array input
#user4 = list()
#num = input("Enter how many elements in user4 array:")
#print ("Enter numbers in array: ")
#for i in range(int(num)):
#    print(i,"num")
#    n = input()
#    user4.append(int(n))
#print ('ARRAY: ',user4)
#userlist.append(user1)       # total users names..
#print (" ok key array is inserted onto user4 array... :)")
#
## ok done user data is with us now its time to logic implementation
#print ('ARRAY: ',original)
#print ('ARRAY: ',user1)
#print ('ARRAY: ',user2)
#print ('ARRAY: ',user3)
#print ('ARRAY: ',user4)
#print ('ARRAY NAMES',userlist)
#
#org_len = len(original)
#u1_len = len(user1)
#u2_len = len(user2)
#u3_len = len(user3)
#u4_len = len(user4)
#
#pritn( userlist[2,3])
#
#n = int(input("numb"))
#lists = [[] for _ in range(n)]
#print (lists)

#
#
#for(i=0;i<org_lem;i++)
#{
#    
#    for(j=0;j<temp;j++)
#    {
#        if(org[i]== temp[j])
#        {
#                print(yes)
#                result1    + =  ( 8 - diff(i,j)) 
#        }
#    }
#}
#
#diff(int x,int y)
#{
#    if(x>y)
#        p=x-y;
#    else if(x<y)
#         p = y-x;
#    else
#       { p =0;}
#    return(p);
#
#}











