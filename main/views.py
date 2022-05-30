# Django
from typing import List
from django.shortcuts import render, redirect
from django.views.generic import ListView, DetailView

# Utilities
from datetime import datetime

def index(request):

    return render(request, "public/index.html")