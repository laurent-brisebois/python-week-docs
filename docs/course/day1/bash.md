## Bash for Newbies

### Part one: yeah but why?

**tldr;** learn it.

**The short:** Almost all computers on this planet speak a common language: bash. It's easy. you only need the first 10 commands to be pretty good at it. If you learn the next 20 you're pretty much a beast of the command line.

**The long:** Mouse+clicks is the equivalent of going to a restaurant in a foreign country where you don't speak the language and telling the waiter your order by pointing at images on the menu; it works... but it's weak sauce. Speaking bash to your computer is like having learned the language perfectly and being able to ask the waiter exactly what you want, whether the pretty images are on the menu or not. Bash allows for much more granular, predictable, and reproducible conversations between you and your computer.

<br />

### Part two: 3 concepts

1. The whole file architecture is one big tree that spawns from the root directory, "/". You are always somewhere on that tree. "/ -> Users -> Desktop -> mydog.png" would be written like this: /Users/Desktop/mydog.png. You're always inside a directory, and you move around the tree however you want; up, down, sideways. You can also jump to any specific location on the tree if you know its address.

2. Commands come with options, called flags ("ls -a" for example is the ls command with the a flag activated). Some flags will require more input from you, and those inputs will come directly after the flag. Some commands will also require arguments. For example when you create a file, you also need to give it a name: "touch newfile.txt". In this case we would say that newfile.txt was the first argument of the touch command.

3. Some files and directories are "hidden". Their names start with a "." and they will not show up with a simple list command; if you don't see what you're looking for, make sure you "list all" (ls -a). There is nothing special about hidden files or directories, you can access them like any other.

<br />

### Part three: 10 commands

```shell
# see what's up
pwd                    # >>> print your current directory (location) to console
ls                     # >>> list the contents of the current directory
ls -a                  # >>> list but include hidden files

# moving around
cd ~/user/somedirectory # >>> go to specific location (here the ~/user/somedirectory)
cd /                    # >>> go to root directory
cd ..                   # >>> go back one directory

# god giveth, and god taketh
touch newfile.txt      # >>> create a new file (called newfile.txt in this case)
cat newfile.txt        # >>> print contents of a file to console
rm newfile.txt         # >>> delete a file
mkdir newdir           # >>> make a new directory (called newdir in this case)

# other stuff
source ./coolscript.sh # >>> run the coolscript.sh file
clear                  # >>> clear your console
sudo [command]         # >>> run the following command as admin (sudo)
[arrows]               # >>> go back and forth in your command history

# git (I lied about the 10 commands... here is an 11th)
git clone <https://repo.git>  # >>> clone a git repository in your current directory
```
