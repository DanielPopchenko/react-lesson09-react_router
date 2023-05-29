const baseUrl = 'https://api.tvmaze.com';

export const fetchShowDetails = (showId) => {
  return fetch(`${baseUrl}/shows/${showId}`).then((res) => res.json());
};

export const fetchShowWithName = (searchQuery) => {
  return fetch(`${baseUrl}//search/shows?q=:${searchQuery}`)
    .then((res) => res.json())
    .then((entries) => entries.map((entry) => entry.show));
};
