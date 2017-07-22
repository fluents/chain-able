 https://github.com/facebook/react/tree/master/scripts/rollup
https://github.com/ramda/ramda/blob/master/scripts/build

# two options:
1. copy same folder structure
2. custom copy, folders do not matter

## copy same
... .copy ha

## custom copy
1. find
2. store metadata
3. transform -
  if function, use that,
  if string,
    if relative & isFilename, resolve filename
    else if relative
    else if absolute, use instead
