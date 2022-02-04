# Techcreek Group 3 Express Assignment

This is a solution to an assignment to create `Create`, `Read`, `Update`, and `Delete` operations using Express. Below are the endpoints and values to be used:

## IDs

- 61faeb4fee9ee21357d6ee54
- 61faec6cf88bf15e8f42721d
- 61faecc7f88bf15e8f42721f

## Blog post body format

```json
    {
        "title": "Gossip Blog",
        "summary": "lorem 10",
        "author": "Ibinabo"
    }
```

### To get all blog posts

```javascript
    localhost:8000/blogs
```

### To get a single blog post

```javascript
    localhost:8080/blog/:id
```

Replace `:id` with the actual ID indicated above

### To create a new blog post

```javascript
    localhost:8000/create
```

Use the format indicated above

### To delete a single blog post

```javascript
    localhost:8000/delete/:id
```

Replace `:id` with the actual ID indicated above

### To edit a single blog post

```javascript
    localhost:8000/edit/:id
```

Replace `:id` with the actual ID indicated above and use the format indicated above
