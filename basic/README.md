# First App

## Goal
It is intended that they can create an application and apply a basic docker configuration to it

<div style="text-align:center;margin:auto">
    <img src="docker_node.png"  style="border-radius: 20px" />
</div>

- Create a basic nodejs application with express (only 1 file)
- Create an endpoint that returns items per site using the public endpoint https://developers.mercadolibre.com.ar/es_ar/items-y-busquedas
- Create a basic dockerfile using node 12 image
- Build image with command `docker build -t mtorre4580/basic .`
- Run with command `docker run -p PORT:PORT -d mtorre4580/basic`
- Test App

## Hints

- Example curl -X GET https://api.mercadolibre.com/sites/{site}/search?q={query}

- FROM xxx:version ...

- Retrieve the images `docker images`

- Kill process `docker kill Id`

- List process `docker ps`
