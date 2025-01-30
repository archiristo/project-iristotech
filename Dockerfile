FROM python:3.9-slim

# Çalışma dizinini ayarla
WORKDIR /app

# Gereksinim dosyalarını kopyala
COPY requirements.txt /app/

# Gereksinimleri yükle
RUN pip install --no-cache-dir -r requirements.txt

# Projeyi kopyala
COPY . /app/

RUN python manage.py collectstatic --noinput

# Port ayarlarını yap
EXPOSE 8000

# Django uygulamasını çalıştır
CMD ["gunicorn", "mywebsite.wsgi:application", "--bind", "0.0.0.0:8000"]
