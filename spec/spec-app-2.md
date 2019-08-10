# App-2-spec

Context:

This is a full-stack Single page application (SPA) created to demonstrate a working knowledge of React-Redux-MaterialUI front-end + Node-Express-PostgreSQL back-end technology stack.
It will be a small social/professional network app aimed at developers. The app will have user registration/login functionality, the ability to search profiles of others based on selected criteria. User will be able to post/comment on theirs and other people homepages and also have access to trends page where they will see various data visualizations based on user profiles trends.

## Functional spec:

Functionality:

- User register/login/update functionality.
- Personalized home pages for logged in users.
- Protected private pages functionality.
- Post/Comment functionality.
- Profile search functionality.
- Profiles statistics visualization.
- Responsive/Animated front-end design.

Site pages and their functions:

```sh
Home                 # Landing page.
|
|- Register/login    # Register/login functionality
|
|- User info*        # User account info/updates
|
|- User home*         # User home page with posts/comments
|
|- Profile search    # Search results
|
|- Profile           # User public profile page
|
|- Trends            # Profiles statistics visualization
|
|- About/Contacts    # Information about the company/contacts
|

* - These pages are private and require user login.
```

## Design spec:

TDB

## Technical spec:

### Front End

Views:

- Rect

State management:

- Redux

Styling:

- MaterialUI with custom CSS overrides for styling.

### Back End

API:

- REST

Server:

- Node with Express.

Database:

- PostgreSQL with Sequelize.
