export const getMePokemonId = (url: string): string => {
  const parsedUrl = url.split('/').filter(Boolean);
  const id = parsedUrl[parsedUrl.length - 1];
  return id;
};
