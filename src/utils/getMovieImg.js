import placeholder from "../placeholder.jpg";

export function getMovieImg(path, width) {
  return path ? path : placeholder;
}
