# Tampa Devs

![GtuNm3R1yV](https://user-images.githubusercontent.com/10290348/162232393-26045f1f-7f79-466b-9686-47a77b72bd58.gif)

## Installing the right version of node for this project

This project currently uses node-version 16 as the preferred environment

We suggest using NVM, which manages the node-instance that you are using to run this project

On MacOS, run these commands found here: [https://github.com/nvm-sh/nvm](https://github.com/nvm-sh/nvm)

```
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash
```

Now set the node version in the terminal for the Tampa Devs project

```
nvm install 16
nvm use 16
```

If you use a windows environment follow the commands here instead with NVM [https://github.com/coreybutler/nvm-windows](https://github.com/coreybutler/nvm-windows)

## Global Installation

You'll want to install the CLI (command line interface) for eleventy. It's used to run the project

```
npm install -g @11ty/eleventy
```

Now run these commands while on the project

```
npm install
npm run dev
```

Theoretically everything should work fine, and you can navigate to localhost:8080 and make changes / see them instantly on the site

## FAQ with installation

Here are some common issues we've run into regarding installation problems with this repo

> I'm getting a node-gyp error

It's probably a `sharp` module issue, this is used for image minimization. It runs best in a linux environment since it has a lot of dependencies associated with it. Try modifying the node version with `nvm` to see if you can fix it. There is also the potential to run this project in a docker environment, but have not been able to set it up (you need docker installed)

```
docker run --rm -v /path/to/your/site:/app --name eleventy -p 8080:8080 femtopixel/eleventy --serve 
```

> it says I need sass

Run

```
npm install -g sass
```

if that's the case




