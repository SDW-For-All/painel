FROM python:3.12-alpine
WORKDIR /app
COPY site/ .
EXPOSE 80
CMD ["python", "-m", "http.server", "80"]
