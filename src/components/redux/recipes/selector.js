export const selectSearch = state => state.search.query;

export const selectSearchMovie = state => state.search.movie;

export const selectPage = state => state.movie.page;

export const selectFilterByName = state => state.filter;

export const selectMovie = state => state.movie.items;

export const selectMovieID = state => state.movie.itemsID;

export const selectMovieCredits = state => state.movie.credits;

export const selectMovieReviews = state => state.movie.reviews;

export const selectMovieTrailer = state => state.movie.trailer;

export const selectFavorite = state => state.movie.favorite;

export const selectIsLoading = state => state.movie.isLoading;

export const selectError = state => state.movie.error;

export const selectModal = state => state.movie.modalItem;
