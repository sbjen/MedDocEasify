FROM python:3.11.1
WORKDIR /app
RUN pip intall -r requirements.txt
COPY ./ /app
EXPOSE 3000
CMD ["python", "app.py"]