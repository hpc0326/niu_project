from django.shortcuts import render
from django.http import JsonResponse , HttpResponse#剛剛的JsonResponse套件
from niu_db.models import DBTest #從models.py import DBTest 物件
from niu_db.models import Ticket
import json


# Create your views here.
def testing(request):

    first = DBTest()
    first.test = 'tryingg'
    first.save()

    all_obj = DBTest.objects.all().values_list('test')
    tmp = ''
    for i in list(all_obj):
        for j in i:
            tmp = tmp + j + ' '
    return JsonResponse(data={'msg' : list(all_obj)}, status = 200)

def clear_table(request):

    #save all the data
    all_obj = DBTest.objects.all()
    
    #delete the data
    all_obj.delete()


    #save all the data
    all_obj = Ticket.objects.all()
    
    #delete the data
    all_obj.delete()

    #use dict format and send success status code
    return JsonResponse(data={'msg':'clear table success.'}, status=200)

#when init rendering, the check the unallow seat
def get_all(request):
    output = list()
    for i in list(Ticket.objects.all().values_list('seat')):
            output.append(i[0])
    return JsonResponse(data={'msg' : output}, status = 200)

#send the ticket booking request
def booking(request):
    item = Ticket()
    
    if request.method == 'POST' : 
        #get the ordered seat list
        output = list()
        for i in list(Ticket.objects.all().values_list('seat')):
            output.append(i[0])
        tmp = json.loads(request.body.decode('utf-8'))
    
        #prevent the seat from get ordered by other
        if tmp.get('seat') in output : return JsonResponse(data={'msg' : 'unavailable'}, status = 200)

        #save to table
        item.seat = tmp.get('seat')
        item.studentID = tmp.get('studentID')
        item.name = tmp.get('name')
        item.save()

        return JsonResponse(data={'msg' : 'success'}, status = 200)
    else:
        return JsonResponse(data={'msg' : 'wrong method'}, status = 200)

#check the condition of specific seat
def checking(request):

    output = list()
    for i in list(Ticket.objects.all().values_list('seat')):
        output.append(i[0])
    tmp = json.loads(request.body.decode('utf-8'))
    
    #prevent the seat from get ordered by other
    if tmp.get('seat') in output : 
        return JsonResponse(data={'msg' : {"status" : "unavailable", "seat" : tmp.get('seat')}}, status = 200)
    else : return JsonResponse(data={'msg' : {"status" : "available", "seat" : tmp.get('seat')}} , status = 200)

def search(request):
    if request.method == 'POST':
        tmp = json.loads(request.body.decode('utf-8'))
        output = list()
        for i in list(Ticket.objects.filter(studentID = tmp.get('studentID')).values_list('seat')) :
            output.append(i[0])

        return JsonResponse(data={'msg' : output}, status = 200)
    else : 
        return JsonResponse(data={'msg' : 'wrong method'}, status = 200)