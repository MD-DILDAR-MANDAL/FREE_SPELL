

# Create File Script

## Description

This shell script is designed to take a file path as input and perform the following actions:

- If the file exists in the given path, it will be copied to the current directory.
- If the file does not exist, it will be created as an empty file in the current directory.
- If the intermediate directories in the provided path do not exist, they will be created before creating the file.

## Prerequisites

- Bash shell environment

## Usage

1. Make the script executable by running the command:
   
   ```bash
   chmod +x create_file.sh
   ```

2. Run the script with a file path as a parameter. For example:
   
   ```bash
   ./create_file.sh /path/to/some/file.txt
   ```

## Example

Suppose you have a file named `document.txt` located at `/home/user/documents/`. You can use the script to copy this file to the current directory by running:

```bash
./create_file.sh /home/user/documents/document.txt
```

## Code

```bash
#!/bin/bash

# Check if the script is called with exactly one parameter
if [ $# -ne 1 ]; then
    echo "Usage: $0 <path>"
    exit 1
fi

# Assign the parameter to a variable
path=$1

# Display the path
echo "Input path: $path"

# Extract directory and filename from the path
directory=$(dirname -- "$path")
filename=$(basename -- "$path")

# Check if the file exists in the given path
if [ -f "$path" ]; then
    echo "File '$filename' exists in the given path."

    # Create the file in the current directory
    cp "$path" "./$filename"
    echo "File '$filename' copied to the current directory."
else
    echo "File '$filename' does not exist in the given path."

    # Check if the directory exists, if not, create it
    if [ ! -d "$directory" ]; then
        echo "Creating directory: $directory"
        mkdir -p "$directory"
    fi

    # Create an empty file in the current directory
    touch "$directory/$filename"
    echo "Empty file '$filename' created in the current directory."
fi
```


