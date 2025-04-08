# patching

## Generating patches
To create patch for single file your command may look like

```bash
diff -Naru file.old file.new > file.patch
```

To create patch for whole directory:
```bash
diff -crB dir_original dir_updated > dfile.patch
```

## Applying patches

```bash
patch -p1 --dry-run < dfile.patch
```