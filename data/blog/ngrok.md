---
title: 'Using ngrok for a public testing URL.'
description: 'Use ngrok to map a puclic URL to localhost on Mac or Windows PC.'
header_image: null
date: 02-06-2022
priority: 0 # a priority for where to display in ordered lists
reference: ["https://tharakamd-12.medium.com/get-a-public-url-to-your-localhost-the-easy-way-28d70b1c64fe"]
---

 1. Login to ngrok:
	https://dashboard.ngrok.com/login
 2. Download ngrok for Mac, Linux, Windows, or FreeBSD
 3. Unzip ngrok.zip by double clicking on ngrok.zip or running:
	`unzip <path to ngrok.zip here>/ngrok.zip`
 4. Connect your account to ngrok:
	`./ngrok authtoken <your code here>`
 5. Start a HTTP tunnel forwarding to your localhost port:
	`./ngrok http <port number here>`