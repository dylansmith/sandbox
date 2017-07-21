build:
	docker build -t simple-nginx .

run:
	docker run -it --rm -p 8080:8080 -v $(dir):/opt/www simple-nginx
