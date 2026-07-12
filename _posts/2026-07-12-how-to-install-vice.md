---
layout: post
title: How to install Vice
subtitle: Vice is Medal alternative.
tags: [gaming, linux, software]
comments: true
mathjax: true
author: ernugraha
cover-img: /assets/img/os/medal.png
---

# Introduction
Hi gamers! You know [Medal.tv](https://medal.tv/) right? An application for recording unexpected clips. But unfortunately, for Linux content creators this application is not available (just look at the download which goes straight to Windows), so the Linux community created an application called Vice, 99% similar to Medal.

## Table of Content
- [Introduction](#introduction)
- [Set up the dependencies](#set-up-the-dependencies)
- [Installing](#installing)

## Set up the dependencies

### 1. Install git
```bash
sudo apt install git
```

### 2. Clone the repo

Debian:
```bash
git clone https://github.com/eklonofficial/Vice
```

Arch / Manjaro / CachyOS / any Arch-based distro:
```bash
yay -S vice-clipper
```


## Installing

1. Go to vice directory
```bash
cd Vice
```

2. Run install script
```bash
chmod +x ./install.sh && ./install.sh
```
If you get asked password like this:
```
[sudo] password for ernugraha: 
```
Type your password.

3. After finished, type
```bash
vice
```
or open from your main menu.

### And well done

<img src="/assets/img/os/medal2.png" alt="drawing" width="320"/>

<details markdown="1">
<summary>Credits:</summary>
[eklonofficial](https://github.com/eklonofficial/Vice)
</details>
