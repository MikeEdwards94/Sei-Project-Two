import React, { useEffect, useState } from 'react'
import axios from 'axios'
import CocktailCard from './cocktails/CocktailCard'
import { useHistory } from 'react-router-dom'


const Home = () => {

  const history = useHistory()

  const [cocktailName1, setCocktailName] = useState(null)


  const [ingredientName1, setIngredientName] = useState(null)


  const handleChange = event => {
    setCocktailName(event.target.value)
  }
  const handleIngredientChange = event => {
    setIngredientName(event.target.value)
  }

  const handleSubmit = event => {
    console.log(event)
    history.push({ pathname: '/cocktail', state: { cocktailName1, ingredientName1 } })
  }


  const [randomCocktail, setRandomCocktail] = useState([])
  useEffect(() => {
    const getData = async() => {
      const { data } = await axios.get('https://www.thecocktaildb.com/api/json/v1/1/random.php')
      setRandomCocktail(data.drinks)
    }
    getData()
  }, [])

  const [randomCocktail1, setRandomCocktail1] = useState([])
  useEffect(() => {
    const getData = async() => {
      const { data } = await axios.get('https://www.thecocktaildb.com/api/json/v1/1/random.php')
      setRandomCocktail1(data.drinks)
    }
    getData()
  }, [])

  const [randomCocktail2, setRandomCocktail2] = useState([])
  useEffect(() => {
    const getData = async() => {
      const { data } = await axios.get('https://www.thecocktaildb.com/api/json/v1/1/random.php')
      setRandomCocktail2(data.drinks)
    }
    getData()
  }, [])

  
  const [randomCocktail3, setRandomCOcktail3] = useState([])

  const handleClick = async event => {
    console.log(event)
    const { data } = await axios.get('https://www.thecocktaildb.com/api/json/v1/1/random.php')
    setRandomCOcktail3(data.drinks)
  }









  
  return (
    <>
      <section className="hero is-medium is-link">
        <div className="hero-body">
          <div className="hero-text">
            <p className="title">
  Fancy a tipple?
            </p>
            <p className="subtitle">
  If so shake the cocktail shaker to see, or just search below...
            </p>
          </div>
          <img src="/images/shaker.png" alt="shaker" className="shaker" onClick={handleClick}/>
          { randomCocktail3.map(cocktail => (
            <CocktailCard key={cocktail.idDrink} {...cocktail}
            />
          ))}
        </div>
      </section>
      <section className="section">
        <div className="container">
          <form className="is-inline">
            <div className="field has-addons">
              <div className="control">
                <input className="input" type="text" placeholder="Search by cocktail..." onChange={handleChange}/>
              </div>
              <div className="control">
                <a className="button is-info" onClick={handleSubmit}>
                Search
                </a>
              </div>
            </div>
            <div className="field has-addons">
              <div className="control">
                <input className="input" type="text" placeholder="Search by ingredient..." onChange={handleIngredientChange}/>
              </div>
              <div className="control">
                <a className="button is-info" onClick={handleSubmit}>
                Search
                </a>
              </div>
            </div>
          </form>
        </div>
      </section>

      <section className="section is-medium centerThis">
        <h1 className="popular">Popular Cocktails</h1>
        <div className="flex">
          { randomCocktail.map(cocktail => (
            <CocktailCard key={cocktail.idDrink} {...cocktail}
            />
          ))}
          { randomCocktail1.map(cocktail => (
            <CocktailCard key={cocktail.idDrink} {...cocktail}
            />
          ))}
          { randomCocktail2.map(cocktail => (
            <CocktailCard key={cocktail.idDrink} {...cocktail}
            />
          ))}
        </div>
      </section>


      <footer className="footer">
        <div className="content has-text-centered">
          <p>
            <strong>Tipple your Fancy by Mike and Karen</strong>
          </p>
        </div>
      </footer>
    </>
  )
}

export default Home






// <div className="columns">
// <div className="column">
//   <div className="columns is-mobile">
//     <div className="column">
//       <form className="box column is-half is-offset-one-quarter">
//         <div className="column">
//           <div className="field">
//             <input className="input bd-notification is-info" type="text" placeholder="Search by cocktail" />
//           </div>
//         </div>
//         <div className="column">
//           <div className="field">
//             <button type="submit" className="button is-fullwidth is-warning bd-notification is-info">Search!</button>
//           </div>
//         </div>            
//       </form>
//       <div className="column">
//         <p className="bd-notification is-info">Second nested column</p>
//       </div>
//     </div>
//   </div>
// </div>
// </div>