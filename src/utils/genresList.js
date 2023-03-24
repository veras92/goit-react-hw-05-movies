export default function genresList(genres) {
  const genreList = genres.map(({ name }) => name);

  if (!genreList.length) {
    genreList.push('Other');
  }

  return genreList.join(' ');
}
