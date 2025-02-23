# Shared memory

## Creation
```c
struct s sh;

int fd = shm_open(name, O_CREAT|O_RDWR|O_TRUNC, mode);

if (fd == -1) {
    perror("shm_open");
    exit(errno);
}

int f = ftruncate(fd, sizeof(*sh));

if (f < 0) {
    perror("ftruncate");
    close(fd);
    exit(errno);
}

sh = mmap(0, sizeof(*sh), PROT_WRITE|PROT_READ, MAP_SHARED, fd, 0);
close(fd);

if (r == MAP_FAILED) {
    perror("mmap");
    exit(errno);
}

```

## Open
```c
int fd = shm_open(name, O_RDWR, 0666);

if (fd < -1) {
    perror("shm_open");
    return NULL;
}

struct s * shm = mmap(0, sizeof(*shm), PROT_READ|PROT_WRITE, MAP_SHARED, fd, 0);

if (shm == MAP_FAILED) {
    perror("mmap");

    return NULL;
}

close(fd);
```

## Close
```c
int r = munmap(p, sizeof(*p));

if (r == -1) {
    perror("munmap");
    exit(errno);
}
```

## Destroy
```c
shm_unlink(name);
```