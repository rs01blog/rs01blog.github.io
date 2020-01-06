---
layout: post
title:  "Welcome to Jekyll!"
date:   2019-11-08
author: RS
categories: jekyll update
---
You’ll find this post in your `_posts` directory. Go ahead and edit it and re-build the site to see your changes. You can rebuild the site in many different ways, but the most common way is to run `jekyll serve`, which launches a web server and auto-regenerates your site when a file is updated.

Jekyll requires blog post files to be named according to the following format:

`YEAR-MONTH-DAY-title.MARKUP`

Where `YEAR` is a four-digit number, `MONTH` and `DAY` are both two-digit numbers, and `MARKUP` is the file extension representing the format used in the file. After that, include the necessary front matter. Take a look at the source for this post to get an idea about how it works.

Jekyll also offers powerful support for code snippets:


{% capture ruby_example %}def print_hi(name)
  puts "Hi, #{name}"
end
print_hi('Tom')
#=> prints 'Hi, Tom' to STDOUT.
{% endcapture %}

{% include code-snippet.html language="ruby" code=ruby_example %}

Check out the [Jekyll docs][jekyll-docs] for more info on how to get the most out of Jekyll. File all bugs/feature requests at [Jekyll’s GitHub repo][jekyll-gh]. If you have questions, you can ask them on [Jekyll Talk][jekyll-talk].


Another highlight test : 

{% capture js_example %}/*
 * Fonctions pour gérer la géométrie 3D
 */

function vect (x,y,z) {
    return {"x" : x , "y" : y , "z" : z } ;
}

function scalProd(v1,v2) {
    return v1.x * v2.x + v1.y * v2.y + v1.z * v2.z ;
}

function vectProd(v1,v2) {
    return vect ( v1.y * v2.z - v1.z * v2.y , v1.z * v2.x - v1.x * v2.z , v1.x * v2.y - v1.y * v2.x ) ;
}

function vLength(v) {
    return Math.sqrt( scalProd(v,v) ) ;
}

function scale(coef,v) {
    return vect ( coef*v.x , coef * v.y , coef * v.z ) ;
}

function normalize( v) {
    var coef = 1.0 / vLength (v) ;
    return scale ( coef , v) ;
}

{% endcapture %}
{% include code-snippet.html language="javascript" code=js_example caption="A JS example..." %}

[jekyll-docs]: https://jekyllrb.com/docs/home
[jekyll-gh]:   https://github.com/jekyll/jekyll
[jekyll-talk]: https://talk.jekyllrb.com/
