import { Children } from 'react';
import { GameContext } from './GameContext';
import useGame from '../hooks/FetchGame';
import useCheckScreen from '../hooks/CheckScreen';
import { useState } from 'react';

const GameProvider = ({ children }) => {
  const { game, loading, error } = useGame(
    'https://api.rawg.io/api/games?key=9874a46cd93e45579499b5f20a848ab9&page_size=40',
  );
  const { isMobile } = useCheckScreen(768);
  const [selectedGenre, setSelectedGenre] = useState('action');
  const [cart, setCart] = useState([]);

  function addToCart(gameItem) {
    setCart((prevCart) => {
      const exists = prevCart.find((item) => item.id === gameItem.id);
      if (exists) return prevCart;
      return [...prevCart, gameItem];
    });
  }

  function removeFromCart(gameItem) {
    setCart((prevCart) => {
      const exists = prevCart.find((item) => item.id === gameItem.id);
      if (exists) {
        return prevCart.filter((prev) => prev !== exists);
      }
      return prevCart;
    });
  }

  return (
    <GameContext.Provider
      value={{
        game,
        loading,
        error,
        isMobile,
        selectedGenre,
        setSelectedGenre,
        cart,
        addToCart,
        removeFromCart,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export default GameProvider;
