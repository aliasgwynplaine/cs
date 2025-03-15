# API

## some headers
```c
#include <linux/module.h>
#include <linux/init.h>
#include <linux/kernel.h>
#include <linux/moduleparam.h>
#include <linux/slab.h>
```

### getting arguments from shell at loading
```c
static short int myshort = 1;
static int myint = 420;
static long int mylong = 9999;
static char *mystring = "blah";
static int myintArray[2] = { -1, -1 };
static int arr_argc = 0;

module_param(myshort, short, S_IRUSR | S_IWUSR | S_IRGRP | S_IWGRP);
MODULE_PARM_DESC(myshort, "A short integer");
module_param(myint, int, S_IRUSR | S_IWUSR | S_IRGRP | S_IROTH);
MODULE_PARM_DESC(myint, "An integer");
module_param(mylong, long, S_IRUSR);
MODULE_PARM_DESC(mylong, "A long integer");
module_param(mystring, charp, 0000);
MODULE_PARM_DESC(mystring, "A character string");

```

### putting module information
```c
MODULE_DESCRIPTION("description")
MODULE_AUTHOR("author")
MODULE_LICENCE("licence")
```


## register and unregister char devices

```c

int register_chrdev( unsigned char major, const char *name, 
                     struct file_operations *fops);

void unregister_chrdev( unsigned int major, const char *name);

```


## register and unregister sys modules
[source](https://docs.kernel.org/core-api/kobject.html#initialization-of-kobjects)

```c
struct kobject *kobject_create_and_add(const char *name, struct kobject *parent);


```
