# proc file system

## dummy operations
```c
int simple_open(struct inode *inode, struct file *file);
loff_t noop_llseek(struct file *file, loff_t offset, int whence);

```