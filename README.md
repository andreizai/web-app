# Gists Search
It is an application that allows the user to display all the Gists made by a github user and details about it.

# Functionalities

## Search after username

Allow the user to see all Gists created by a GitHub user. After the user types a username and clicks on the search button each Gists are displayed in a panel, under the search input.

## Gists details

The user can click on any Gists panel displayed to expand it. After expanding the panel, the following information is displayed:
- Gist files (associated with the programming language type)
- The last 3 forks (the usernames with the profile picture)

## Preview files

The user can view the contents of any file by clicking on its name. The content is open in a dialog.

# Future work / Suggestions

## Stylization of components
- The home page could be much better built. At the moment the main page does not look at all as a stand-alone website but rather as a component that can be used inside a website.

- When the Gists Panels are open they overlap. The panels should keep the same distance form each other.

- The color palette is almost non-existent.

- Rearrange the elements in the panels.

- The dialog for displaying the contents of the files may be set to a standard size (so that it no longer needs to be resized based on the content).

## Loading mask

Each time the user performs a new search, a loading mask could be displayed over the Gists panel list until the new data is loaded and rendered.

The dialog may display a loading mask until the content is loaded.

# Optimization

## Cancel unnecessary requests
Because some requests can take quite a long time, there are cases where the current request is no longer needed:
- When the user performs a search, and then performs a new one before the previous request is completed. In this case, unsubscribing from the previous request is performed.
- When the user wants to view the contents of a file, but closes the dialog before the request is completed.  When closing the dialog, unsubscribing from the request is performed.

## HTTP response parsing
The objects received from `api.github.com` API have the names of the properties written in the style of snake case and for the Angular the camel case style should be used. Thus, an interceptor is implemented that captures all HTTP requests and transforms the response from the `api.github.com` API from the snake case style to camel case style.