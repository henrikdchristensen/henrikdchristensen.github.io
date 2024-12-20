---
layout: default
title: Projects
---

# Projects

<div class="row">
  {% for project in site.projects %}
  <div class="col-md-6">
    <h2>{{ project.title }}</h2>
    <p>{{ project.description }}</p>
    <a href="{{ project.url }}" class="btn">View Project</a>
  </div>
  {% endfor %}
</div>
