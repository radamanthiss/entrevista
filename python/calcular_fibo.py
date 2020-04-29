import json
import boto3
import os

FibArray = [0,1] 
  
def fibonacci(n): 
    if n<0: 
        return -1 
    elif n<=len(FibArray): 
        return FibArray[n-1] 
    else: 
        temp_fib = fibonacci(n-1)+fibonacci(n-2) 
        FibArray.append(temp_fib) 
        return temp_fib 
    
def handler(event, context):
    try:
        d = json.loads(event)
        val = int(d['val'])     
        return fibonacci(val)
    except Exception as e:
        print(e)
        return -1
