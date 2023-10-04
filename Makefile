# Define variables
IMAGE_NAME := verivox_proj
PORT := 3000

start:
	npm run dev

# Build Docker image
build:
	docker build --tag $(IMAGE_NAME) ./

# Run Docker container
run:
	docker run -p $(PORT):$(PORT) $(IMAGE_NAME)

# Stop and remove Docker container
stop:
	docker stop $(IMAGE_NAME) || true
	docker rm $(IMAGE_NAME) || true

# Clean up Docker images and containers
clean: stop
	docker rmi $(IMAGE_NAME) || true

.PHONY: build run stop clean
