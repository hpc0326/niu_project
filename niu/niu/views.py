from django.http import HttpResponse
from django.shortcuts import render
from django.template import loader, Context

def result(request):
    return render(request, 'test.html')

def ticket(request):
    return render(request , "cart.html")

def result(request):
    return render(request, 'person.html')

def Hello(request):
    return HttpResponse("Hello world")