# Linux Kernel Modules

## List of modules
```c
lsmod 
```

## Getting info
```sh
modinfo <modules>
```


## Inserting a module
```bash
insmod <module> [params]
```

```bash
modprobe -a <module> [params]
```

### `insdev`
Shamelessly plundered from [this course](https://largo.lip6.fr/trac/sesi-peri). 
It's meant to be used for driver modules. 
Inserts a module and creates an associated file in `/dev`
```bash
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
```bash
rmmod
```

```bash
modprobe -r <module> [params]
```

### `rmdev`
Shamelessly plundered from [this course](https://largo.lip6.fr/trac/sesi-peri). 
It's meant to be used for driver modules. 
Removes a module but also deletes the associated file in `/dev`

```bash
#!/bin/sh
# rmdev <module>
module=$1
/sbin/rmmod $module || exit 1
rm -f /dev/$module 
```

## Make a block o char file
```bash
mknod /dev/<name> <type> <major> <minor>
```

## Modules loaded at boot time
You can find the list in `/etc/modules`.
