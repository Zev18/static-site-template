# Zev's website starter kit

This is a starter kit for making a basic HTML + CSS website.

> [!NOTE]
> This is an entirely client-side website. Everything in this entire project will be publicly available. Do not write any sensitive information ANYWHERE in the code you deploy, even as a comment!

## Cheatsheet

### HTML

- `div` for containers, `p` for text, `h1-h3` for headings, `a` for links, `img` for images
- Each element has an opening tag `<div>` and a closing tag `</div>`
- Multiple elements can have the same class, but no 2 elements should have the same id

### CSS

- Use [flexbox](https://flexbox.malven.co/) or [grid](https://grid.malven.co/) to position elements inside a div
- color is for text, background-color is for backgrounds
- Outside to inside: margin > border > padding
- Units:
  - `px`: pixels
  - `%`: percentage of the (width/height) of the parent container
  - `rem`: unit based on the html element's font size (1rem = 16px by default)
  - `vw`/`vh`: percentage of screen width and height respectively
- Media query (set something if screen is bigger than a certain size): `@media screen and (min-width: 480px) {...}`

## More things you can add!

### GIFs

Download a gif and put it in a folder, then link to that path in an `img` tag.

```html
<img src="images/gifs/name-of-gif.gif" alt="this is a gif.">
```

### CSS patterns

If you want to add a pattern, you don't always have to create a new graphic from scratch. Sometimes you can create patterns with just css alone. There are tools like [this one](https://www.magicpattern.design/tools/css-backgrounds) that do all the hard work for you!

### Spotify songs

In spotify, right click on a song, go to "share," and hit "embed track." Then copy that code and paste it into your html file!
Bandcamp has an embeddable widget too.

### Embeddable widgets

You can embed all kinds of other things like social media posts or youtube videos. Just add "embed" at the end of your google search to see if you can embed it! Then follow the instructions and copy paste the code into your HTML page.

Here's some places where you can find cool & easy embeds:

- [404city](https://404city.neocities.org/home)
- [Widget star (account creation & domain registration required)](https://widget.st/)

Take inspiration from other indie web sites! You can look at their code and see how they work. You might find new widgets you can add or resources you can use!

## If you want to learn more

If you want to learn more than what we've covered in this workshop, or if you want more in-depth explinations on anything, then here's some more stuff to check out!

### More beginner-friendly guides/tutorials

These resources are either by or for indie web creators specifically! They should provide more in-depth info about what we covered in the workshop, and some new concepts and tools for styling your pages and going for that early 90's-00's web look.

- [Neocities tutorials](https://neocities.org/tutorials)
- [HTML for people](https://htmlforpeople.com/)
- [sadgrl (collection of tools and guides for building layouts & styles)](https://sadgrl.online/resources/)

### In-depth resources

These resources should help you if you want to learn more about web development in general.

- [Web Dev Simplified (youtube)](https://www.youtube.com/@WebDevSimplified)
- [web.dev (free introductory courses made by google)](https://web.dev/learn/)
- [W3 (plenty of guides on all kinds of coding stuff)](https://www.w3schools.com/)
- Copy paste code & errors into AI to help debug
  - I recommend avoiding using AI to generate code, but AI can be extremely useful as a troubleshooter!

### Frameworks to research & learn

If you really want to go all out and make a truly professional-looking website, I recommend researching these frameworks. They will help you code faster, keep your code everything more organized, and give your website better performance (like faster image loading)

- [Tailwind](https://tailwindcss.com/)
  - A method of stlying elements much faster than constantly writing individual css classes
- [Astro](https://astro.build/)
  - A powerful framework that lets you do things raw html/css/js doesn't, such as automatically loading and optimizing images, breaking down pages into reusable components, and adding more interactivity
