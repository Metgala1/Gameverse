import { useEffect, useState } from 'react';

function useGameDetails(id) {
  const [myGame, setGame] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;

    const fetchGame = async () => {
      try {
        const res = await fetch(`https://api.rawg.io/api/games/${id}?key=9874a46cd93e45579499b5f20a848ab9`);
        if (!res.ok) throw new Error('Failed to fetch game details');
        const data = await res.json();
        setGame(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchGame();
  }, [id]);

  return { myGame, error, loading };
}

export default useGameDetails;
