import { Children } from 'react';
import { GameContext } from './GameContext';
import useGame from '../hooks/FetchGame';
import useCheckScreen from '../hooks/CheckScreen';

const GameProvider = ({ children }) => {
  const { game, loading, error } = useGame(
    'https://api.rawg.io/api/games?key=9874a46cd93e45579499b5f20a848ab9&page_size=40',
  );
  const { isMobile } = useCheckScreen(768);

  return (
    <GameContext.Provider value={{ game, loading, error, isMobile }}>
      {children}
    </GameContext.Provider>
  );
};

export default GameProvider;
