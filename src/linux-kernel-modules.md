# Linux Kernel Modules

## List of modules
```c
lsmode
```

## Getting info
```shell
modinfo <modules>
```


## Inserting a module
```shell
insmod <module> [params]
```


```shell
modprobe -a <module> [params]
```

## Removing a module
```shell
rmmod
```

```shell
modprobe -r <module> [params]
```

## Make a block o char file
```shell
mknod /dev/<name> <type> <major> <minor>
```

## Modules loaded at boot time
You can find the list in `/etc/modules`.
