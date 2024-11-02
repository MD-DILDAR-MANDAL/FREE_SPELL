# Vim

Vim is a highly configurable text editor built to enable efficient text editing. It is an improved version of the older `vi` editor distributed with most UNIX systems.

## Getting Started

- **Installation**:
  
  - **Linux**: Usually pre-installed. If not, install via package manager:
    
    ```bash
    sudo apt-get install vim
    ```
  
  - **macOS**:
    
    ```bash
    brew install vim
    ```
  
  - **Windows**: Download from [Vim's official website](https://www.vim.org/download.php) or use package managers like `chocolatey`.

- **Opening Vim**:

  Type in terminal for linux and windows and mac :
  ```bash
  vim filename
  ```
  In windows you can use gvim also and start using it .   
## Navigation, Saving, and Quitting

h - Move cursor left

j - Move cursor down

k - Move cursor up

l - Move cursor right

i - Switch to insert mode

ESC - Switch to command mode

:q - Quit vim

:q! - Quit vim (ignoring unsaved edits)

:w - Save document

:wq - Save document and quit vim

:e name.txt - open name.txt file

## Advanced Insertion Modes

i - Switch to INSERT mode before current position

I - Switch to INSERT mode at the beginning of the current line

a - Switch to INSERT mode after current position

A - Switch to INSERT mode at the end of the current line

o - Switch to INSERT mode after opening a new line after the current line

O - Switch to INSERT mode after opening a new line before the current line

## Replacing, Changing, and Word Movement

w - Skip to next word

W - Skipe to next WORD (WORDs are only delineated by spaces)

e - Move to end of word

E - Move to end of WORD

r - Replace a single character

R - Replace all following characters

c - Change (Delete and enter insert mode) whatever we specify

C - Change until the end of a line

## Deletion

x - Delete the character at the cursor's position

X - Delete the character before the cursor (like backspace)

d - Delete what we specify

D - Delete to end of current line

## Yanking, Cutting, and Pasting

y - Yank what we specify

Y - Yank the current line

p - Paste after the cursor's position

P - Paste before the cursor's position

d - Delete what we specify (But also copy it - 'Cut')

D - Delete to the end of current line (But also copy it - 'Cut')

# Copy pasting vim to other app

(use "+ before y and p)

"+ yy - copy one line to global

"+ p - paste into vim from global

## Count Modifiers and Skipping Lines

gg - skip to the beginning of a document

G - skip to the end of a document 

number + G - skip to that line number 

## Searching and Replacing

/ - Search forward

? - Search backward

n - Advance to next search result

N - Advance to previous search result

:nohlsearch - Remove search highlights


:beg,ends/query/replace/flags - Search and replace where % is the entire document and g is a flag indicating the replacing of all instances throughout the document.

:%s/old/new/g – Replace all occurrences of "old" with "new" in the entire file

:s/old/new/g – Replace all occurrences in the current line

:n,m s/old/new/g – Replace in lines n to m

## Using Windows and Tabs

:split (CTRL-W + S) - Split the window horizontally

:vsplit (CTRL-W + V) - Split the window vertically

:tabnew - Create a new tab

:tabclose - Close the current tab

:tabn - Navigate to the next tab

:tabp - Navigate to the previous tab

## Marking Files

m + [letter] - Mark a line

' + [letter] - Move cursor to a mark

## Keeping Coding Syntax

% - Jump to matching bracket

less-than - Indent

greater-than - De-indent

= - Properly Indent

~ - Change case of character

## Colon Settings

:set nu - Line Numbers

:set rnu - Relative Line numbers

:set autoindent - Automatically indent

:set noerrorbells - Disable error bells

:set showmode - Show the working mode

:set colorcolumn=X - Draw a column at specified character

:set ruler - Show position info

:set nohlsearch - Disable search highlighting

:set bg=dark/light - Change foreground to match dark/light background

:set tabstop=X - Set tab to be X spaces

:colors [theme] - Set a theme

## Saving Settings here

:e $MYVIMRC - It opens the vimrc file
 
## Thank you

```

       _.---._    /\\
    ./'       "--`\//
  ./              o \
 /./\  )______   \__ \
./  / /\ \   | \ \  \ \
   / /  \ \  | |\ \  \7
    "     "    "  "   
```