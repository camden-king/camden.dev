---
title: 'How to create and activate a Python virtual environment on Mac'
description: 'Create and activate a Python3 virtual enviroment (venv) on Mac.'
header_image: null
date: 02-06-2022
priority: 0 # a priority for where to display in ordered lists
reference: ["https://mnzel.medium.com/how-to-activate-python-venv-on-a-mac-a8fa1c3cb511"]
---

 1. Create virtual environment:
	`python3 -m venv venv`
 2. Activate virtual environment:
	`source venv/bin/activate`
 3. (Optional) Install dependancies from requirements.txt:
	`pip install -r requerments.txt`
 4. (Optional) Run your application:
	`python3 app.py`