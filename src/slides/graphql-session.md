---
theme : "black"
highlightTheme: "monokai"
slideNumber: true
backgroundTransition: 'zoom'
logoImg: 'images/logo.png'
title: 'GraphQL'
---

<!-- .slide: data-background-image="images/graph-wash.png" -->

# Restful

---

<!-- .slide: data-background-image="images/graph-wash.png" -->

## Api & Methods

```js
POST      /api/user/create
GET       /api/user/detail/{id}
PUT       /api/user/update/{id}
DELETE    /api/user/delete/{id}
```

---

<!-- .slide: data-background-image="images/graph-wash.png" -->

## Pain Points?

- Many api entries
- Api changes frequently
- Old document
- ......

---

<!-- .slide: data-background-image="images/graph-wash.png" -->

# [What's GraphQL?](https://graphql.org/)

GraphQL is a query language for APIs and a runtime for fulfilling those queries with your existing data. GraphQL provides a complete and understandable description of the data in your API, gives clients the power to ask for exactly what they need and nothing more, makes it easier to evolve APIs over time, and enables powerful developer tools.

---

<!-- .slide: data-background-image="images/graph-wash.png" -->

## Describe your data

```typescript
type Project {
  name: String
  tagline: String
  contributors: [User]
}
type User{
    name: String
    level: Number
}
```

---

<!-- .slide: data-background-image="images/graph-wash.png" -->

## Ask for what you want

```typescript
{
  project(name: "GraphQL") {
    tagline
    contributors: [{
        name
    }]
  }
}
```

---

<!-- .slide: data-background-image="images/graph-wash.png" -->

## Get predictable results

```json
{
  "project": {
    "tagline": "A query language for APIs",
    "contributors": [{
        "name": "GraphQL"
    }]
  }
}
```

---

<!-- .slide: data-background-image="images/graph-wash.png" -->

## [With restful api](https://www.apollographql.com/docs/link/links/rest)

```typescript
query Person {
    person @rest(type: "Person", path: "people/1") {
      name
      height
      mass,
      hair_color
    }
  }
```

---

<!-- .slide: data-background-image="images/graph-wash.png" -->

## Who use it

- [Github](https://developer.github.com/v4/)
- ......

---

<!-- .slide: data-background-image="images/graph-wash.png" -->

## Some tools

- [Appollo GraphQL](https://www.apollographql.com/docs/apollo-server/)
- [TypeGraphQL](https://typegraphql.ml/)
- [TypeORM](https://typeorm.io)
- [React Apollo](https://github.com/apollographql/react-apollo)
- [graphql-voyager](https://github.com/APIs-guru/graphql-voyager)
- [graphql-crunch](https://github.com/banterfm/graphql-crunch)
- ...
