# nftables
```c
nft add table inet filter_table
nft add chain inet filter_table filter_chain '{ type filter hook input priority filter; policy drop; }'
nft add rule inet filter_table filter_chain tcp dport 22 accept
```


# test
```c
nc -lvp
nc -lvp 80
nc -lvp 80
nc -lvp 12345
```