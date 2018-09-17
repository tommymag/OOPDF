from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from OOPDFapp.models import Flashcard
from django.core import serializers

# Create your views here.

def index(request):
    return render(request, 'OOPDFapp/index.html')


def study(request):

    context = {
        'flashcards' : Flashcard.objects.all().order_by('?')
    }
    return render(request, 'OOPDFapp/study.html', context=context)

def intro(request):

    return render(request, 'OOPDFapp/intro.html')

def game(request):

    return render(request, 'OOPDFapp/game.html')

def flashcard_json(request):
    data = serializers.serialize("json", Flashcard.objects.all().order_by('?'))
    return JsonResponse(data, safe=False)

# def game_start(request):
#     pass


