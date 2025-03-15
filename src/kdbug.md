# Kernel debugging

## using qemu
The next "qemu script" example was shamelessly plundered from [this course](https://teaching.os.rwth-aachen.de/LKP/02_first-steps.html). Keep an eye in the part that says `-serial ...`

```bash
#! /bin/bash

# Fix the paths if necessary
HDA="-drive file=lkp-arch-old.img,format=raw"
HDB="-drive file=myhome.img,format=raw"
SHARED="./share"
KERNEL=kgdbImage

if [ -z ${KDB} ]; then
    CMDLINE='root=/dev/sda1 rw console=ttyS0 kgdboc=ttyS1'
else
    CMDLINE='root=/dev/sda1 rw console=ttyS0 kgdboc=ttyS1 kgdbwait'
fi

FLAGS="--enable-kvm "
VIRTFS+=" --virtfs local,path=${SHARED},mount_tag=share,security_model=passthrough,id=share "

exec qemu-system-x86_64 ${FLAGS} \
     ${HDA} ${HDB} \
     ${VIRTFS} \
     -net user -net nic \
     -serial mon:stdio -serial tcp::1234,server,nowait \
     -boot c -m 1G \
     -kernel "${KERNEL}" \
     -append "${CMDLINE}" # -nographic
#     -initrd "./myinitramfs.cpio.gz"
```

Once you have your qemu vm running, you need to execute the vmlinux file with gdb. 
In order to "connect" to the serial port, you use `target remote ...`

```bash
target remote udp:host:port
target remote udp:[host]:port
target remote udp4:host:port
target remote udp6:[host]:port
```

After this, you could use [gdb](./gdb.md) as usual