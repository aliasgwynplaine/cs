# API

## macros
```c
module_param(param, type, permissions)
```

## register and unregister

```c

int register_chrdev( unsigned char major, const char *name, 
                     struct file_operations *fops);

void unregister_chrdev( unsigned int major, const char *name);

```
