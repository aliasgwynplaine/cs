# SSH
## Local port forwarding
```bash
ssh -L $lport:$dhost:$dport $user@$sshserver

```

## Remote port forwarding
```bash
ssh -R $rport:$dhost:$lport $user@$sshserver

```

```
B:1 -> A:2 <- C:3  <---> internet
```

> NOTE: this option can be useless if you have no root access to change the `sshd_config` file in the machine `A`, and restart the ssh service, since you need to set `GatewayPorts yes` in order to let others than the ssh server machine could access to `dhost`. However, there's a workaround: Remote Port Forwarding from `B:port1` to one remote server `A:port2` and then a Local Port Forwarding to the same `A:port2` machine using a local machine `C:port3` to which you have more access. You can know access to the service in `B:port1` using `C:port3`.

## Dynamic port forwarding
```bash
ssh -D $lport $user@$server
```