from django.db import models


# Create your models here.

class Flashcard(models.Model):
	term = models.CharField(max_length=40, help_text='Enter a term')
	definition = models.CharField(max_length=250, help_text='Enter a definition')

	def __str__(self):
		return self.term 
# class Question(models.model):
# 	