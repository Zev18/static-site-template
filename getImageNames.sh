#!/bin/bash

# Script to get all the names of the images in the images/art folder

folder="images/art"
shopt -s nullglob nocaseglob

echo "["
for file in "$folder"/*.{jpg,jpeg,png,webp,gif}; do
  echo "  \"$(basename "$file")\","
done
echo "];"
