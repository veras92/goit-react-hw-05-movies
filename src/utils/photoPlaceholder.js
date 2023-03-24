export default function photoPathPlace(path) {
  if (path == null) {
    return 'https://static.vecteezy.com/system/resources/previews/005/903/347/original/gold-abstract-letter-s-logo-for-negative-video-recording-film-production-free-vector.jpg';
  }

  return `https://image.tmdb.org/t/p/w500${path}`;
}
