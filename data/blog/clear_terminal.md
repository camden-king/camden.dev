---
title: 'How to clear your terminal on Mac'
description: 'Completely clear your terminal on Mac by doing "command" + "k".'
header_image: null
date: 02-06-2022
priority: 0 # a priority for where to display in ordered lists
reference: ["https://stackoverflow.com/questions/2198377/how-can-i-clear-previous-output-in-terminal-in-mac-os-x"]
---

Normally I clear the terminal by simply typing 
`clear`
but I was recently work on a project where I kept looking through the output with "command" + "f" searching and it was scrolling up to where I had already cleared. The two solutions I found to this are to use either "command" + "k" to fully clear terminal history or 
`printf '\33c\e[3J'`
to clear the scrollback buffer. 