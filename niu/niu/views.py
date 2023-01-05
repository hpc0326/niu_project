from django.http import HttpResponse
from django.shortcuts import render
from django.template import loader, Context

def ticket(request):
    return render(request , "./ticket/cart.html")

def info(request):
    return render(request, './info/person.html')

def Hello(request):
    return HttpResponse("Hello world")

def result(request):
    return render(request, './result/content.html')

def search(request):
    return render(request, './search/person.html')

def BookingError(request):
    return render(request, './BookingError/BookingError.html')

def adminLogin(request):
    return render(request, './admin/Login/person.html')

def adminDashboard(request):
    return render(request, './admin/DashBoard/main.html')