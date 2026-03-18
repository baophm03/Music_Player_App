import React, { createContext, useState, ReactNode, Dispatch, SetStateAction } from 'react';

const FavoriteTracksContext = createContext<{
  favoriteTracks: string[];
  setFavoriteTracks: Dispatch<SetStateAction<string[]>>;
}>({
  favoriteTracks: [],
  setFavoriteTracks: () => { },
});

export const FavoriteTracksProvider = ({ children }: { children: ReactNode }) => {
  const [favoriteTracks, setFavoriteTracks] = useState<string[]>([]);

  return (
    <FavoriteTracksContext.Provider value={{ favoriteTracks, setFavoriteTracks }}>
      {children}
    </FavoriteTracksContext.Provider>
  );
};

export default FavoriteTracksContext;
