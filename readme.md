# Tampa Devs

![GtuNm3R1yV](https://user-images.githubusercontent.com/10290348/162232393-26045f1f-7f79-466b-9686-47a77b72bd58.gif)

<!-- ## Editing the events

Events are stored in `src/_data/events.json`

Add new events at the top in the format:

```
  {
    "name": "Meetup",
    "date": "2018-10-18",
    "url": "https://eventbrite.com/…",
    "description": "This is an event description"
  },
``` -->

## Global Installation

add this so you can use `eleventy` build and run commands

```
npm install -g @11ty/eleventy
```

build script command is

```
npx @11ty/eleventy
```

if you need to do any debugging for writing files

## Adding people

People are stored in `src/_data/people.json`

Add a new person with the format:

```
  {
    "name": "John Smith",
    "team": ["Team Member"],
    "img": "john.jpg",
    "bio": "John looks after developers in Florida."
  },
```

Avatars should be saved to `src/_assets/img/people`

## Development

To get this up and running on your own computer you need to have Node and NPM installed. [Find out how here](https://www.npmjs.com/get-npm).

Once you have installed NPM in the command line run the following line in this folder:

- `npm install`
- `npm run dev`

You'll now have a local server running at [http://localhost:8080](http://localhost:8080).

This is built on top of [Eleventy](https://www.11ty.io) because it is great. One of the nice things about 11ty is it's [super simple documentation](https://www.11ty.io/docs/).

Behind the scenes Webpack is handling JS (`src/_assets/_js`) and SCSS (`src/_assets/_scss`).

## Deploy

Pushing to `master` will automagically deploy to Netlify, which spits out the site at [tampadevs.com](https://tampadevs.com).

However if you want to test something… `npm run build` is your friend.

## TODO

- Google analytics is using the old UA functionality, needs to be ported to new setup. See how `basics.json` is consuming the tag analytic ID

- Add Netlify CMS

<!-- docker run --rm -v /path/to/your/site:/app --name eleventy -p 8080:8080 femtopixel/eleventy --serve -->
