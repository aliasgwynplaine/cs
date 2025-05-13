# Compressing & estracting

## Extracting 
### .tgz
```bash
tar zxvf file.tgz
```

```bash
gunzip -c file.tgz | tar xvf -
```

### .tg.bz2
```bash
tar xvjf file.tg.bz2
```

### .tar.xz
```bash
tar xf file.tar.xz
```

### .xz
```bash
unxz file.xz
```

```bash
xz --decompress file.xz
```

### .zip
```bash
zip -r filename-zip dirname
```


## Compressing

### .zip
```bash
unzip filezip
```
