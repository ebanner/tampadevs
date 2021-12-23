This site is built off of Eleventy, a Javascript compile runtimme

## How to create a route

Folders are namespaced. So if you want a `/about` route, do the following:

1. Create a layout called `about.njk`
2. Create an `about folder`. It must be one level below `src`
3. Create a `index.njk`. This maps out to the base route. Any additional md files are `/about/name-of-file`

## How to pull data into a route

```
  {% if author %}

    {% for person in people | sort(false, false, 'name') %}

      {% if author == person.name %}
        <div class="td-blog__author">
          <img src="/_assets/img/people/{{ person.img if person.img else "no-avatar.jpg" }}" alt="{{ person.name }}" class="td-blog__author__img">
          <p>{% if person.href %}<a href="{{ person.href }}" target="_blank" rel="noopener">{% endif %}{{ person.name }}{% if person.href %}</a>{% endif %}</p>
          <p>{{ person.bio }}</p>
        </div>
      {% endif %} 

    {% endfor %}
```

author comes from the post.md YML data. You can sort data from here. The `person in people`, `people` is the folder name

You can also do this too:

```
 {% for person in people | sort(false, false, 'name') %}
      {% if person.team.indexOf('Team Core') > -1 %}
      <div class="td-blog__author">
        <img src="/_assets/img/people/{{ person.img if person.img else "no-avatar.jpg" }}" alt="{{ person.name }}" class="td-blog__author__img">
        <p>{% if person.href %}<a href="{{ person.href }}" target="_blank" rel="noopener">{% endif %}{{ person.name }}{% if person.href %}</a>{% endif %}</p>
        <p>{{ person.bio }}</p>
      </div>
      {% endif %} 
    {% endfor %}
```

Inside `people.json`, have a file that specifies the following data:

```
  {
    "name": "Vincent Tang",
    "team": ["Team Core"],
    "bio": "Vincent runs Code Chefs, a podcast for junior to mid level web developers seeking to level up",
    "href": "https://vincentntang.com",
    "img": "vincentntang.jpg"
  },
```

## How to create a list of blogs or talks

1: Copy over the `blogs` folder. 
2: Make sure the json file is called `talks.json`. Note this must be named EXACTLY the same as the folder `talks` for it to work
3: Add a post data pipeline

```js
eleventyConfig.addCollection("talks", function (collection) {
  return collection.getAllSorted().filter(function (item) {
    return item.inputPath.match(/^\.\/src\/talks\/.*\.md$/) !== null;
  });
});
```

Add a template under `talk.njk` and have `talks.json` reference this file