# API

## macros
### getting arguments from shell at loading
```c
module_param(param, type, permissions)
```

### putting module information
```c
MODULE_DESCRIPTION("description")
MODULE_AUTHOR("author")
MODULE_LICENCE("licence")
```


## register and unregister

```c

int register_chrdev( unsigned char major, const char *name, 
                     struct file_operations *fops);

void unregister_chrdev( unsigned int major, const char *name);

```


