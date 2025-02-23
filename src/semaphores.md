# Semaphores

## Creation
```c
sem_t sem;
sem_init(&sem, 1, v);
```

## Waiting
```c
sem_wait(&sem);
```

## Posting
```c
sem_post(&sem);
```

## Closing
```c
sem_close(&sem)
```

## Destroy
```c
sem_destroy(name);
```