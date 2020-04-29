import json
import boto3
import os

num = [0,1]
def triangulares(n):
    if n<0:
        return -1
    elif n<=len(num): 
        return num[n-1] 
    else:
        trian =  (n * (n+1))/2
        num.append(trian)
        return trian

    return

def handler(event, context):
    try:
        d = json.loads(event)
        val = int(d['val'])     
        return triangulares(val)
    except Exception as e:
        print(e)
        return -1