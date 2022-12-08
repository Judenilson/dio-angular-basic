export type PokemonData = {
  name: string;
  id: number;
  sprites: { other: { home: { front_default: string } } };
  types: {
    slot: number;
    type: {
      name: string;
      url: string;
    };
  }[];
};
