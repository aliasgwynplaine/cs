# Semaphores

## Creation
```c
sem_t sem;
sem_init(&sem, 1, 1);
```

## Waiting
```c
sem_wait(&sem);
```

## Posting
```c
sem_post(&sem);
```