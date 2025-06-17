import Home from './components/Home';
import useGame from './components/FetchGame';

function App() {
   const {game, loading, error} = useGame('https://api.rawg.io/api/games?key=9874a46cd93e45579499b5f20a848ab9&page_size=40')
  
  return (
    <>
    <div>
      <Home />

    </div>
    
    </>
  )
}

export default App
