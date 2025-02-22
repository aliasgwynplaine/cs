# Signals

## C

### Setting signal handlers
`handle_fux` is always of type `void (*) (int)`.

```c
struct sigaction sa;
sa.sa_handler = handle_fux;
sa.sa_flags = 0;
sigemptyset(&sa.sa_mask);
sigaction(SIGINT, &sa, NULL);
```

```c
signal(SIGINT, handler_fux)
```


### Masking signals
```c
/* Prototype for the glibc wrapper function */
int sigprocmask(int how, const sigset_t *set, sigset_t *oldset);
```
about `how`:

**SIG_BLOCK**. The set of blocked signals is the union of the current  set  and the set argument.

**SIG_UNBLOCK**. The  signals  in set are removed from the current set of blockedsignals. It is permissible to attempt to unblock a signal whichis not blocked.

**SIG_SETMASK**. The set of blocked signals is set to the argument set.



```c
sigset_t mask;
sigemptyset(&mask);
sigaddset(&mask, SIGINT);
sigprocmask(SIG_BLOCK, &mask, NULL);
```

### Suspending program until signal
```c
sigset_t negmask;
sigfillset(&negmask);
sigdelset(&negmask, SIGINT);
sigsuspend(&negmask);
```

## Bash

```bash
trap ctrl_c INT

function ctrl_c () {
    echo -e "\n\n[*] Quitting...\n"
    exit
}
```