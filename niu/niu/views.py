from django.http import HttpResponse
from django.shortcuts import render

def index(request):
    context = {}
    context["name"] = "pc"
    return render(request, "test.html", context)

def ticket(request):
    context = {}
    context["name"] = "pc"
    return render(request , "index.html")

def Hello(request):
    return HttpResponse("Hello world")