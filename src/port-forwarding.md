# Port forwarding

You can "always" use [ssh](./ssh.md).

## forward a local port to another local port
### nc
```bash
mkfifo /tmp/f;
nc -lvp $to < /tmp/f | nc localhost $from > /tmp/f
```
For instance, you can use this to forward the port 22 to the 443.