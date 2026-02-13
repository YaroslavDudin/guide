# установка  виртуального окружения  + python + django

## windows

команда чтобы работало виртуальное окружение:
``Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass -Force``

``python -m venv venv``

``source venv/script/activate`` или ``venv/Scripts/activate``

``python -m pip install --upgrade pip``

``pip install Django==5.2.6``

``django-admin startproject "имя проекта"``

``cd "имя проекта"``

``python manage.py startapp pages``

``python manage.py migrate``

``python manage.py makemigrations``

``python manage.py runserver``

## linux

``python3 -m venv venv``

``source venv/bin/activate``

``python3 -m pip install --upgrade pip``

``python3 -m pip install Django==5.2.6``

``django-admin startproject "имя проекта"``

``cd "имя проекта"``

``python3 manage.py startapp pages``

``python3 manage.py migrate``

``python3 manage.py makemigrations``

``python3 manage.py runserver``
