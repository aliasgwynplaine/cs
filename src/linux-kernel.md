# Linux Kernel

## Getting the sources
https://cdn.kernel.org
1. Télécharger
2. Vérifier la signature avec `gpg --verify`

## Configuring the kernel
`.config` dans `/boot/`
`/boot/config-$(uname -r).config`

## Building the kernel
```bash
make -j $(nproc)
```
la compilation produce les programmes suivants:
+ `vmlinux` : raw image
+ `System.map` : symbol table. used for debugging.
+ `arch/<arch>/boot/bzImage` : compressed image

## Linux init process
sequence de démarrage de linux: initramfs

## Printing
printk-formats.txt

`printk()` -> kernel ring buffer that can be read with `dmesg`

+ `pr_debug()`
+ `pr_info()`
+ `pr_err()`