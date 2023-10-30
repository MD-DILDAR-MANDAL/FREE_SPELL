# This are some bash tips and tricks that you may find usefull

## Create Bash Alias That Accepts Parameters

<p>While working with Bash scripts or Linux commands, we often end up writing the same commands again and again. Many times, these commands are long and need to be executed repeatedly – for example, logging on to a remote machine every day, copying a local file to the remote machine, or looking for hidden files or links in a directory.</p>

```cmd
<function_name> {
<commands>
}
```

example:

```cmd
~ mcommit() { mkdir "git commit -m "$1"; } 
~ mcommit "feat: add file.txt"
```
 using alias

 ```cmd
alias alias_name="PREFIX $1 $2 SUFIX"
```
example:
```cmd
~ alias com="git add $1"
~ com file.txt
```
>Note: function my not work sometimes with function name starting with letter other than "m"(as in my case)

[Further read](https://www.baeldung.com/linux/bash-alias-with-parameters)

