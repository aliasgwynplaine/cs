# qemu


## qemu-img
```bash
qemu-img create -f vmdk $superdiskimg $size
```

## qemu with NAT
```bash
qemu-system-x86_64 -net tap -net nic -boot d -m 2G -cdrom $isopath $diskimg
```

