from http.client import responses
from urllib import response
from django.test import TestCase
from django.urls import reverse
from rest_framework import status
from rest_framework.test import APITestCase
from blog.models import Post, Category
from django.contrib.auth.models import User

class PostTests(APITestCase):
    def test_view_posts(self):
        url = reverse('blog_api:listcreate')
        response = self.client.get(url, format='json')
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        
    def create_post(self):
        test_category = Category.objects.create(name='django')
        test_user1 = User.objects.create_user(username='test_user1', password = '12345678')
        
        data = {
            'title': 'now', 'author': 1, 'excerpt': 'new', 'content': 'new'
        }
        url = reverse('blog_api:listcreate')
        response = self.client.post(url, data, format='json')
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        