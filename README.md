## Docker-Examples

This repository has 5 docker usage examples, from basic to advanced cases

- [app with nodejs](https://github.com/mtorre4580/docker-examples/blob/master/basic)
- [app with nodejs and mongoDB](https://github.com/mtorre4580/docker-examples/blob/master/intermedium)
- [reverse proxy](https://github.com/mtorre4580/docker-examples/blob/master/advanced)
- [react app](https://github.com/mtorre4580/docker-examples/tree/master/extras)
- [jenkis](https://github.com/mtorre4580/docker-examples/tree/master/extras)

### Docker

Is a tool designed to make it easier to create, deploy, and run applications by using containers. Containers allow a developer to package up an application with all of the parts it needs, such as libraries and other dependencies, and deploy it as one package. 

### Image
Read-only template that contains a set of instructions for creating a container that can run on the Docker platform. It provides a convenient way to package up applications and preconfigured server environments, which you can use for your own private use or share publicly with other Docker users.

### Dockerfile
Is a text document that contains all the commands a user could call on the command line to assemble an image

- FROM: To specify the parent image, example `FROM node:12`

- WORKDIR: To set the working directory for any commands that follow in the Dockerfile, example `WORKDIR /usr/src/app`

- RUN: To install any applications and packages required for your container.

- COPY: To copy over files or directories from a specific location.

- ADD: As COPY, but also able to handle remote URLs and unpack compressed files.

- ENTRYPOINT: Command that will always be executed when the container starts. If not specified, the default is /bin/sh -c

- CMD: Arguments passed to the entrypoint. If ENTRYPOINT is not set (defaults to /bin/sh -c), the CMD will be the commands the container executes.

- EXPOSE: To define which port through which to access your container application.

- LABEL: To add metadata to the image.

### Docker-Compose
Compose is a tool for defining and running multi-container Docker applications. With Compose, you use a Compose file to 
configure your application's services. Then, using a single command, you create and start all the services from your configuration

### Commands

- Build image: `docker build -t mtorre4580/my-app .`
- Show images: `docker images`
- Show process docker: `docker ps`
- Show logs inside container: `docker logs idContainer`
- In the container: `docker exec -t idContainer /bin/bash`
- Run image: `docker run -p PORT:PORT -d mtorre4580/my-app`
- Kill container: `docker kill idContainer`
- Remove image: `docker image rm -f idContainer`
- Run app with docker-compose: `docker-compose up`
- In a mongo: `docker exec -it idDelContainer bash`
- Down app: `docker-compose down`

### Networking

By default is bridge, to change pass --network option

- `docker run image --network=none`
- `docker run image --network=host`

- Show networks: `docker network ls`
- Connect to network: `docker network nameNetwork idContainer`

- none: No network only localhost
- host: Binding port to host
- bridge: Default network containers
- overlay: Virtual network, multiples containers see the network

To run docker run --network=host  mtorre4580/basic

### Iptables
Is a command-line firewall utility that uses policy chains to allow or block traffic. 
When a connection tries to establish itself on your system, iptables looks for a rule in its list to match it to.
If it doesn’t find one, it resorts to the default action.

### Extras
- 127.0.0.1 vs 0.0.0.0
- IPv4 addresses can be represented in any notation that expresses a 32-bit integer value

https://docs.docker.com/network/

### Install

https://docs.docker.com/get-docker/

### Example

- Run mongo `docker run mongo`
- Run redis `docker run redis`

<div style="text-align:center;margin:auto">
    <img src="docker-vs-vm.jpg"  style="border-radius: 20px" />
</div>
