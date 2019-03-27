Xceed Assignment

This project was initiated by using Create React App and a little cleanup

To run the project

### `npm start`

Runs the app in the development mode and access it on [http://localhost:3000] to view it in the browser.

## Notes

1. App is missing trend and is marked by x, this is because the API provided does not provide standings on a weekly basis, just the latest one. I verified this by emails the API provider directly. Happy to implement it if an API is provided.

2. Some team crest/icons were missing (Sevilla and Athletic Club) on the API url, so a default icon of LaLiga was placed instead.

3. There was no reason to use Redux for this assignment, instead have used the latest React.ContextProvider which is what the React team are promoting.

4. The font used on the official La Liga website is 'Core Sans C 45 Regular' which is a paid font, I have instead gone for the default font setup.

5. The back arrow next to Matchday in the top header is a bold type of the Font Awesome icons due to the regular icon being part of a PRO version.

6. All columns can be sorted alphabetically or numerically.

7. A very simple version of React.Context was setup to create a responsive app. Any window width less than 850px would trigger a mobile table.

8. Implemented using a responsive CSS grid setup for the table.
