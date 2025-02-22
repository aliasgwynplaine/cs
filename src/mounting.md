# Mounting

## .img
```bash
mount -o loop $fileimg $mntpoint
```

## /dev/*
You can use `fdisk -l` to check the partition type
```bash
mount -t $type /dev/$sd  $targetfolder
```

## umouting
```bash
umount $mntpoint
```
