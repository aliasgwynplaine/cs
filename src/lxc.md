# Linux Containers

## Listing the container
```c
lxc-ls -f
```

## Creating a container
```c
lxc-create -n $name -t $template
```

## starting a container
```c
lxc-start -n $name
```

## Clonning a container
```c
lxc-copy -n $name -N $newname
```

## destroying a container
```c
lxc-destroy -n $name
```

