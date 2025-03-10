# podman
The commands used in podman can also be used in docker. In fact, you could 
make an `alias docker=podman` and you won't have big problems.

## Listing
List all containers
```bash
podman ps -a 
```

List images
```bash
podman image list
```

## getting an image
```bash
podman pull $imagename
```

## Creating an interactive container
```bash
podman create -ti --name $name $image
```

## Starting the container
```bash
podman start $containerid
```

Attaching and setting interactive mode on start
```bash
podman start $containerid -ai
```

## Attaching a container
```bash
podman attach $containername
```

detaching can be made with the sequence `<Ctrl-p> <Ctrl-q>`

## Stopping the container
```bash
podman stop $containername
```
This could take a while. You can set a timeout with `-t`


## Getting information of the image/container
```bash
podman inspect $name
```
