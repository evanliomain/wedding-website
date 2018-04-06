#!/bin/bash
rm result.txt
touch result.txt
for f in tmp/*; do
  export size=$(identify -format '%G' $f)
  echo $f >> result.txt
  echo $size | sed 's#\([0-9]*\)x\([0-9]*\)#"width": \1,#' >> result.txt
  echo $size | sed 's#\([0-9]*\)x\([0-9]*\)#"height": \2,#' >> result.txt
done
