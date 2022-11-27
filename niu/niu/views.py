from django.http import HttpResponse
from django.shortcuts import render
from django.template import loader, Context

def index(request):
    context = {}
    context["name"] = "pc"
  
    return render(request, 'test.html', context)

def ticket(request):
    return render(request , "info.html")

def Hello(request):
    return HttpResponse("Hello world")