# MyMusicBox (FluffyLlama919.github.io)

React Development Assignment

#### Describe the goal of the application and value to a user

The goal of the MyMusicBox application is to allow users to browse the top music charts and to create a playlist of their favorite songs. The top 50 songs on Last.fm are displayed, and the user can add and remove songs from their playlist.

#### Link to your deployed web application running online

https://fluffyllama919.github.io/

#### Explain the organization of your Components, and the props and state related to them

Components:

- App
  - Contains the state of the songs in the charts, filtered songs in the charts, the songs in the playlist, the filtered songs in the playlist, the two filter terms, and the one sort term.
- Navbar
- FilterControls
  - Contains the state of the two filter terms and the one sort term, along with the set functions to update each.
- Charts
  - Takes in props of the filtered songs in the charts, the songs in the playlist, and the setPlaylist function to add songs to the playlist.
- Playlist
  - Takes in props of the filtered songs in the playlist and the setPlaylist function to remove songs from the playlist.
- SongCard
  - Takes in props of the song, a function for the onClick handler, and the label for the button.
- AggregatedData
  - Takes in props of the songs in the filtered playlist.

#### Note the usability principles considered for layout and hierarchy

Regardless of the form factor, I ensured that the filter and sort options were at the top of the page, so the user did not need to scroll to use them. I chose to not use any sticky elements so that valuable screen space would not be wasted on mobile.

I used Bootstrap Rows and Columns to control the layout of the charts and playlist. On the xs and sm sizes (mobile devices), the charts and playlist are stacked vertically. On the md and larger sizes (tablets and desktops), the charts and playlist are side-by-side. As the screen size increases, more cards of songs are displayed in each row.

I used cards to distinctly separate the songs from one another. The title of the song is clickable to get more info about the song on Last.fm. The buttons are colored to indicate their function. Headers are used to identify each section.

#### Libraries used

- React-Bootstrap
