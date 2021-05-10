<h1>Project 2 - Cocktail API</h1>

<h3>Project Overview:</h3>

For the second project at GA we were tasked with pair-coding a React application that consumed any public API in a 2 day hackathon. 

This had to include several components, a router, a clear plan with wireframes and be deployed online.

<h3>Deployment</h3>

https://tipple-your-fancy-mikeedwards.netlify.app


<h3>Demo of Homepage</h3>

![fancy-a-tipple-home](https://user-images.githubusercontent.com/77836499/117703744-e8f35e00-b1c1-11eb-9a34-56852ddebc03.gif)



<h3>Technologies Used</h3>

* React.js
* JavaScript (ES6)
* HTML5
* SASS
* Public cocktail API - https://www.thecocktaildb.com/api.php
* Axios
* Insomnia REST Client
* Yarn
* React-router-dom
* Bulma CSS Framework
* Git/ GitHub
* Netlify (deployment)


<h3>Planning Phase</h3>

For this 48h hackathon, we were required to plan for the first 12 hours. My partner Karen and I spent the first few hours looking at public API’s looking for not only inspiration, but also the endpoints using Insomnia, to check that the data looked clean enough that we could manipulate it well for our application. 

We quickly settled on a free cocktail API and spent the rest of the time researching the various endpoints provided and building a basic wireframe. Looking at the endpoints we felt we could create a search for cocktails, at which point you could click on a cocktail to provide more details. An example of one of our original GET requests using Insomnia is below:

<img width="700" alt="Screenshot 2021-05-05 at 13 17 55" src="https://user-images.githubusercontent.com/77836499/117699944-53ee6600-b1bd-11eb-91eb-2eb4ed30a1e4.png">


From here we settled on initially using the search by name and search by cocktail endpoints to bring back results for the user and built a basic wireframe below consisting of:

**Homepage:**

<img width="500" alt="Screenshot 2021-05-05 at 13 12 08" src="https://user-images.githubusercontent.com/77836499/117699371-af6c2400-b1bc-11eb-9e81-21d082ef3efa.png">

**Search return page:**

<img width="500" alt="Screenshot 2021-05-05 at 13 12 21" src="https://user-images.githubusercontent.com/77836499/117699389-b5620500-b1bc-11eb-8b47-a7bb04dea77a.png">

**Individual Cocktail page:**

<img width="500" alt="Screenshot 2021-05-05 at 13 12 32" src="https://user-images.githubusercontent.com/77836499/117699410-bdba4000-b1bc-11eb-93a7-9481d0544ff0.png">







<h3>Getting Started</h3>

To begin we started by creating our react application, connecting it to our GitHub repo and then using yarn to start the server. At this point we decided to install Bulma as a framework, we both liked it from previous experience and thought given the time restraint it could be very helpful here. From there we built out a very basic homepage so we could see something on the page and have an easy win to get going with.


<h3>Components</h3>

**Homepage**
 
Following our wireframe we decided to start with a basic NavBar. To do this we first installed the react-router-dom and built out a basic router inside the App.js, followed by the creation of a Navbar.js with some basic buttons for navigation. For this we imported most of the layout from Bulma and then placed Links to the relevant pages, meaning we could now navigate across our app. From here we added a hero, a search bar for cocktails and a search bar ingredients. Both search bars would use useHistory from the react-router-dom to push the user to a new page.

**Cocktail Search**

The Cocktail Search component was built using a combination of axios and useState and useEffect. Firstly we created a useEffect utilizing an await axios GET from the relevant API endpoint to pull in the data and then set that to state using useState. From here we mapped through the data and applied it in the JSX. This resulted in two potential requests; one for searching by cocktail and one for searching by ingredient.

```
//GET request for cocktail by name
  const [cocktails, setCocktails] = useState([])

  const handleSubmit = async event => {
    event.preventDefault()
    const { data } = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${cocktailName}`)
    setCocktails(data.drinks)
  }
```

**Cocktail Card**

Once we were able to display some data on the page we decided to form these returned items in card form. Therefore we mapped through the array of cocktails, returning a CocktailCard component with a key of the cocktail id, spreading in the data of that cocktail. This was a fairly basic component consisting of the name and the picture of the individual cocktail. The card was wrapped in a Link to that specific cocktail id so if the user clicked anywhere on that card it would take them to the Cocktail Show page. To add a bit of interactivity we added a feature on top of the card to change the opacity to make it stand out on hover.

**Cocktail Show**

To create the CocktailShow page we firstly used a GET request to grab the data from the individual cocktail but used Params in order to grab the specific cocktail from the id. From here we could set the cocktail to state and then pass in the data we wanted to display into the JSX.

Demo of search and show components:

![tipple-search](https://user-images.githubusercontent.com/77836499/117704010-3ff93300-b1c2-11eb-9737-7fc221d66cc9.gif)


**Cocktails by A-Z**

To create the A-Z cocktail page we first created a GET request to grab the data for a test letter to make sure the data would be pulled through. From here we set the data to state and mapped through the cocktails re-using the Cocktail Card component we created earlier to display them. Next we created an array of the alphabet, and mapped through these in the JSX to return a button for each letter. Lastly we created a function that would set the a new piece of state to be equal to whatever button was clicked and edited the url of the endpoint to contain that same value.

```
  const alpha = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
  const [cocktails, setCocktails] = useState([])

  const [letter, setLetter] = useState('A')

  useEffect(() => {

    const getData = async () => {
      const { data } = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${letter}`)
      console.log('data', data.drinks)
      setCocktails(data.drinks)
    }
    getData()
  }, [letter])
  
  const handleLetter = (event) => {
    setLetter(event.target.innerHTML)
  }
  
//JSX
          {alpha.map(letter => {
            return (
              <button key={letter} value={letter} onClick={handleLetter} className="bigLetters">
                {letter}
              </button>
```


<h3>Post MVP Polishing Touches</h3>

At this point Karen and I felt we had reached our basic MVP but were keen to add some finesse to our app to make it stand out. 

Firstly we added a logo that we created via a free logo website that we were both very happy with. This then led us to using a similar colour theme and font style for the rest of the app to sit nicely together.

We added a popular cocktails section at the bottom of the homepage, which would grab three cocktails from a random cocktail end point and display them in 3 side by side boxes. We also added an interactable cocktail shaker on the hero image, which upon clicking would provide a cocktail card of another random cocktail. This also shakes when the user hovers over it by use of CSS animations. Both of these utilised the cocktail card we made earlier, thus being clickable and would send the user to the cocktail show page.

```
//Function to grab random cocktail from endpoint
  const [randomCocktail, setRandomCocktail] = useState([])
  useEffect(() => {
    const getData = async() => {
      const { data } = await axios.get('https://www.thecocktaildb.com/api/json/v1/1/random.php')
      setRandomCocktail(data.drinks)
    }
    getData()
  }, [])
```


<h3>Challenges</h3>

The main challenge we encountered was getting the search bars to work by pushing the user to a new page, while keeping their value autofilled in this new page. This was something both Karen and I were keen to do, but was slightly different than what had been taught in class and proved to be a larger problem than anticipated. After some help from our course tutors we ended up using useLocation. This allowed us to use the search input value on the home page as the value for the GET request on the search page, which would then render all the results. This also resulted in a lot of refactoring of code to allow this to work.

```
  const location = useLocation()

  const [cocktailHome] = useState(location.state?.cocktailName1 || '')
  
  useEffect(() => {
    const getData = async() => {
      const { data } = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${cocktailHome}`)
      setCocktails(data.drinks)
    }
    getData()
  }, [])
```

<h3>Wins</h3>

**Pair-coding** - This was my first proper experience of pair-coding with someone, something that previously sat uncomfortably with me. However it was a resounding success, as we pair coded almost the entire project together. We both worked well together and found bouncing ideas off each other both creatively as well as problem-solving led to a much better end-product and ultimately learnt a lot from each other.

**End-product** - I was very happy with how our application turned out. Given the short time constraint, I was surprised at how much we were able to accomplish together, both stylistically and functionality wise on something we had only been learning for a short amount of time.

<h3>Future Enhancements</h3>

* Add some more styling features like pagination to index pages
* Refine styling to make it look more professional
* Make the application more responsive
* Fix outstanding bugs
* Add more interactivity to cocktail show page ie. clickable ingredients, images of ingredients

<h3>Key Learnings</h3>

Manipulating data from an API - From the beginnings of investigating endpoints on Insomnia to the mapping through of data on the front-end, by the end I felt comfortable  extracting information to display.

Two brains are better than one - Prior to this I felt having two beginner coders could potentially lead to more confusion but was pleased to be proved wrong. I found even though  we were both new to coding we were able to consistently correct any gaps in each other’s knowledge.

Use of React.js - This was the first time I developed a full application using React.js and not only made me comfortable using it but made me realise the major pros of doing so compared to vanilla JavaScript.
