# read 14 

### Components

##### Partials
Partials come in handy when you want to reuse the same HTML across multiple views.

##### usge

first create a ejs file inside a views folder all the ejs files will be inside this folder

in inside it make your html code and some logic in side tha tags of ejs like `<%%>` or for output the resulte you want to use = also `<%=%>`
```html
<div class="header clearfix">
        <nav>
            <ul class="nav nav-pills pull-right">
                <li role="presentation"><a href="/">Home</a></li>
            </ul>
            <h3 class="text-muted">Node.js Blog</h3>
        </nav>
    </div>
```

in outher ejs file you include the header file like this example
 ```html
    <body>
        <div class="container">
            <%- include('partials/navbar') %>
            <div class="jumbotron">
                <h1>All about Node</h1>
                <p class="lead">Check out our articles below!</p>
            </div>
        </div>
    </body>
    </html>
```

>Note: The <%- %> tags allow us to output the unescaped content onto the page (notice the -). This is important when using the include() statement since you don’t want EJS to escape your HTML characters like ‘<’, ‘>’, etc…





