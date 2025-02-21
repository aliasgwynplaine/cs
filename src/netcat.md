# netcat

## listen
```bash
nc -lvp $port
```

## connect
```bash
nc $host $port -v
```

## connect with proxy
```bash
nc -X connect -x $proxy_host:$proxy_port $host $port -v
```

## forward a local port to another local port
```bash
mkfifo /tmp/f;
nc -lpv $to < /tmp/f | nc localhost $from > /tmp/f
```