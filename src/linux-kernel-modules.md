# Linux Kernel Modules

## List of modules
```c
lsmod 
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

### `insdev`
Shamelessly plundered from [this course](https://largo.lip6.fr/trac/sesi-peri). 
It's meant to be used for driver modules. 
Inserts a module and creates an associated file in `/dev`
```shell
#!/bin/sh
# insdev <module> [params]
module=$1
shift
/sbin/insmod ./$module.ko $* || exit 1
rm -f /dev/$module
major=$(awk "\$2==\"$module\" {print \$1}" /proc/devices)
mknod /dev/$module c $major 0
chmod 666 /dev/$module
```

## Removing a module
```shell
rmmod
```

```shell
modprobe -r <module> [params]
```

### `rmdev`
Shamelessly plundered from [this course](https://largo.lip6.fr/trac/sesi-peri). 
It's meant to be used for driver modules. 
Removes a module but also deletes the associated file in `/dev`

```shell
#!/bin/sh
# rmdev <module>
module=$1
/sbin/rmmod $module || exit 1
rm -f /dev/$module 
```

## Make a block o char file
```shell
mknod /dev/<name> <type> <major> <minor>
```

## Modules loaded at boot time
You can find the list in `/etc/modules`.
