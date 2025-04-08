# ioctl

## macros to define the commands
+ `_IO(type, nr)`: request takes no argument;
+ `_IOR(type, nr, datatype)`: request reads data from the kernel;
+ `_IOW(type, nr, datatype)`: request writes data to the kernel;
+ `_IOWR(type, nr, datatype)`: request reads data from and writes data to the kernel.

### some examples

```c
#define TM_MAGIC	'N'
#define TM_GET		_IOR(TM_MAGIC, 20, struct task_sample_usr)
#define TM_STOP		_IO(TM_MAGIC, 21)
#define TM_START	_IO(TM_MAGIC, 22)
#define TM_PID		_IOWR(TM_MAGIC, 23, __s64)
```

