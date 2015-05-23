---
title: "Tutorial: Create an interactive keyboard with HTML and CSS"
date: 2015-05-25 20:15 PDT
tags: design, development
---

<div class="work-image-nav"></div>
<img src="/images/blog/keyboard-responsive.gif" alt="keyboard tutorial" class="post-image image-outline" />

For the landing page of this website, I thought it would be fun to create some of my illustrations in HTML and CSS so they could be more dynamic. Today, I wanted to share a brief tutorial about how to create the keyboard that runs across the bottom of the hero section.

I recreated the effect below - note that the code in this post is slightly different than the landing page, since I write blog posts in Markdown files and the layout of the blog has different styles.

<section class="keyboard-container">
  <p>
    Interactive Keyboard: Hover over the keys
  </p>
  <ul class="keyboard">
    <li class="keyboard-key"></li>
    <li class="keyboard-key"></li>
    <li class="keyboard-key"></li>
    <li class="keyboard-key"></li>
    <li class="keyboard-key"></li>
    <li class="keyboard-key"></li>
    <li class="keyboard-key"></li>
    <li class="keyboard-key"></li>
    <li class="keyboard-key"></li>
    <li class="keyboard-key"></li>
    <li class="keyboard-key"></li>
    <li class="keyboard-key"></li>
    <li class="keyboard-key"></li>
    <li class="keyboard-key"></li>
  </ul>
</section>

```
    <ul class="hero-keyboard">
      <% 14.times do %>
        <li class="hero-keyboard-key">
        </li>
      <% end %>
    </ul>
```



```
  .hero-keyboard {
    cursor: default;
    background-color: $light-gray;
    border-radius: $base-border-radius*2 $base-border-radius*2 0 0;
    bottom: 0;
    display: block;
    height: 34px;
    left: 25%;
    padding-top: 18px;
    position: absolute;
    width: 50%;
  }
```

```
  .hero-keyboard-key {
    background-color: $white;
    border-radius: $base-border-radius $base-border-radius 0 0;
    display: inline-block;
    height: 19px;
    margin: 0 1.5px;
    width: 5.8%;

    &:hover {
      box-shadow: inset 0px 3px 0px -1px rgba(0, 0, 0, 0.11);
    }
  }
```
