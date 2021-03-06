# Kubernetes Cluster Demo

This is a demo displaying a Kubernetes cluster made up of a reverse proxy (nginx), an API (Express API) and a client (Sapper App).

This project is intended to show how easy it is to setup your own Kubernetes cluster, monitor and debug it, extend it with plugins and manage it.

Not much focus will go into the specific services themselves since that's not the main purpose of the project.

## Dependencies

- Docker & Docker Compose
- Kubectl & minikube

## Startup

```bash

$ docker-compose up -d
# start the cluster using docker-compose daemon

$ minikube start
# start the minikube cluster

$ kubectl apply -f k8s/app-pod.yml
# apply (run) main pod config

$ kubectl apply -f k8s/app-node-port.yml
# apply (run) networking config for main pod 

```
