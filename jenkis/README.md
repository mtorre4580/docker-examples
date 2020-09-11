## Jenkis

Basic example of raising a jenkis with docker and creating a pipeline with nodejs

- Download the jenkis image from the docker hub `docker pull jenkins/jenkins:lts`
- To run a jenkis locally we can run the command `docker run -p 8080:8080 -p 50000:50000 jenkins/jenkins:lts` 
- We enter `http://localhost:8080` where we are going to see the jenkis admin
- To get the startup password, it is obtained from the logs when starting the container
- We put the password and follow the basic installation
- In order to persist the configuration data, it must be raised with a volume `docker run -d -v jenkins_home:/var/jenkins_home -p 8080:8080 -p 50000:50000 jenkins/jenkins:lts`

## Example Pass
<div style="text-align:center;margin:auto">
    <img src="https://raw.githubusercontent.com/mtorre4580/docker-examples/master/jenkis/jenkis_default_pass.png"  style="border-radius: 20px" />
</div>

## Example Default

<div style="text-align:center;margin:auto">
    <img src="https://raw.githubusercontent.com/mtorre4580/docker-examples/master/jenkis/jenkis_default.png"  style="border-radius: 20px" />
</div>

## Basic Pipeline

1. We select the option "New Task"
2. We define a name for our task "example pipeline"
3. We select the option pipeline
4. We install the nodejs plugin, Admin Jenkis "Manage Jenkis" [node.js plugin](https://plugins.jenkins.io/nodejs/)
5. We leave the node plugin configured for all pipelines "Global Tool Configuration"  Nodejs
6. Inside the created pipeline, copy the content of `Jenkisfile`

## Example Pipeline Creation

<div style="text-align:center;margin:auto">
    <img src="https://raw.githubusercontent.com/mtorre4580/docker-examples/master/jenkis/jenkis_example_pipeline.png"  style="border-radius: 20px" />
</div>

## Example Config
<div style="text-align:center;margin:auto">
    <img src="https://raw.githubusercontent.com/mtorre4580/docker-examples/master/jenkis/nodejs.png"  style="border-radius: 20px" />
</div>

### Docs

1. https://hub.docker.com/r/jenkins/jenkins

2. https://github.com/jenkinsci/docker/blob/master/README.md
