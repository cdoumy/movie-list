const moviesData = [
  {
    "id": 1,
    "title": "Le Parrain",
    "year": 1972,
    "rating": 4.8,
    "poster_url": "https://image.tmdb.org/t/p/w500/3bhkrj58Vtu7enYsRolD1fZdja1.jpg"
  },
  {
    "id": 2,
    "title": "Les Évadés",
    "year": 1994,
    "rating": 3.2,
    "poster_url": "https://image.tmdb.org/t/p/w500/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg"
  },
  {
    "id": 3,
    "title": "Forrest Gump",
    "year": 1994,
    "rating": 4.5,
    "poster_url": "https://image.tmdb.org/t/p/w500/h5J4W4veyxMXDMjeNxZI46TsHOb.jpg"
  },
  {
    "id": 4,
    "title": "Le Seigneur des Anneaux : Le Retour du Roi",
    "year": 2003,
    "rating": 4.9,
    "poster_url": "https://image.tmdb.org/t/p/w500/rCzpDGLbOoPwLjy3OAm5NUPOTrC.jpg"
  },
  {
    "id": 5,
    "title": "Interstellar",
    "year": 2014,
    "rating": 2.7,
    "poster_url": "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg"
  },
  {
    "id": 6,
    "title": "Gladiator",
    "year": 2000,
    "rating": 3.9,
    "poster_url": "https://image.tmdb.org/t/p/w500/ty8TGRuvJLPUmAR1H1nRIsgwvim.jpg"
  },
  {
    "id": 7,
    "title": "Avatar",
    "year": 2009,
    "rating": 1.6,
    "poster_url": "https://image.tmdb.org/t/p/w500/6EiRUJpuoeQPghrs3YNktfnqOVh.jpg"
  },
  {
    "id": 9,
    "title": "Fight Club",
    "year": 1999,
    "rating": 3.4,
    "poster_url": "https://image.tmdb.org/t/p/w500/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg"
  },
  {
    "id": 10,
    "title": "Titanic",
    "year": 1997,
    "rating": 4.1,
    "poster_url": "https://image.tmdb.org/t/p/w500/9xjZS2rlVxm8SFx8kPC3aIGCOYQ.jpg"
  },
  {
    "id": 11,
    "title": "Le Roi Lion",
    "year": 1994,
    "rating": 4.8,
    "poster_url": "https://image.tmdb.org/t/p/w500/2CAL2433ZeIihfX1Hb2139CX0pW.jpg"
  },
  {
    "id": 12,
    "title": "Avengers : Endgame",
    "year": 2019,
    "rating": 3.0,
    "poster_url": "https://image.tmdb.org/t/p/w500/or06FN3Dka5tukK1e9sl16pB3iy.jpg"
  },
  {
    "id": 14,
    "title": "Pulp Fiction",
    "year": 1994,
    "rating": 4.6,
    "poster_url": "https://image.tmdb.org/t/p/w500/d5iIlFn5s0ImszYzBPb8JPIfbXD.jpg"
  },
  {
    "id": 15,
    "title": "Joker",
    "year": 2019,
    "rating": 4.3,
    "poster_url": "https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg"
  },
  {
    "id": 16,
    "title": "Star Wars : Un nouvel espoir",
    "year": 1977,
    "rating": 3.8,
    "poster_url": "https://image.tmdb.org/t/p/w500/6FfCtAuVAW8XJjZ7eWeLibRLWTw.jpg"
  },
  {
    "id": 17,
    "title": "Shrek",
    "year": 2001,
    "rating": 2.2,
    "poster_url": "https://image.tmdb.org/t/p/w500/iB64vpL3dIObOtMZgX3RqdVdQDc.jpg"
  },
  {
    "id": 18,
    "title": "La Liste de Schindler",
    "year": 1993,
    "rating": 4.9,
    "poster_url": "https://image.tmdb.org/t/p/w500/c8Ass7acuOe4za6DhSattE359gr.jpg"
  },
  {
    "id": 19,
    "title": "Mad Max : Fury Road",
    "year": 2015,
    "rating": 3.6,
    "poster_url": "https://image.tmdb.org/t/p/w500/8tZYtuWezp8JbcsvHYO0O46tFbo.jpg"
  },
  {
    "id": 20,
    "title": "Les Indestructibles",
    "year": 2004,
    "rating": 3.9,
    "poster_url": "https://image.tmdb.org/t/p/w500/2LqaLgk4Z226KkgPJuiOQ58wvrm.jpg"
  },
  {
    "id": 21,
    "title": "Parasite",
    "year": 2019,
    "rating": 4.7,
    "poster_url": "https://image.tmdb.org/t/p/w500/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg"
  },
  {
    "id": 22,
    "title": "Coco",
    "year": 2017,
    "rating": 4.1,
    "poster_url": "https://image.tmdb.org/t/p/w500/gGEsBPAijhVUFoiNpgZXqRVWJt2.jpg"
  },
  {
    "id": 23,
    "title": "Le Voyage de Chihiro",
    "year": 2001,
    "rating": 4.8,
    "poster_url": "https://image.tmdb.org/t/p/w500/39wmItIWsg5sZMyRUHLkWBcuVCM.jpg"
  },
  {
    "id": 24,
    "title": "Wall-E",
    "year": 2008,
    "rating": 3.3,
    "poster_url": "https://image.tmdb.org/t/p/w500/6VxEvOF7QDovsG6ro9OVyjH07LF.jpg"
  },
  {
    "id": 26,
    "title": "Django Unchained",
    "year": 2012,
    "rating": 4.2,
    "poster_url": "https://image.tmdb.org/t/p/w500/7oWY8VDWW7thTzWh3OKYRkWUlD5.jpg"
  },
  {
    "id": 27,
    "title": "Harry Potter à l'école des sorciers",
    "year": 2001,
    "rating": 4.0,
    "poster_url": "https://image.tmdb.org/t/p/w500/hziiv14OpD73u9gAak4XDDfBKa2.jpg"
  },
  {
    "id": 29,
    "title": "Deadpool",
    "year": 2016,
    "rating": 4.5,
    "poster_url": "https://image.tmdb.org/t/p/w500/yGSxMiF0cYuAiyuve5DA6bnWEOI.jpg"
  },
  {
    "id": 30,
    "title": "Toy Story",
    "year": 1995,
    "rating": 3.7,
    "poster_url": "https://image.tmdb.org/t/p/w500/uXDfjJbdP4ijW5hWSBrPrlKpxab.jpg"
  },
  {
    "id": 32,
    "title": "Les Gardiens de la Galaxie",
    "year": 2014,
    "rating": 3.9,
    "poster_url": "https://image.tmdb.org/t/p/w500/r7vmZjiyZw9rpJMQJdXpjgiCOk9.jpg"
  },
  {
    "id": 34,
    "title": "Le Cinquième Élément",
    "year": 1997,
    "rating": 3.0,
    "poster_url": "https://image.tmdb.org/t/p/w500/fPtlCO1yQtnoLHOwKtWz7db6RGU.jpg"
  },
  {
    "id": 35,
    "title": "American Beauty",
    "year": 1999,
    "rating": 4.3,
    "poster_url": "https://image.tmdb.org/t/p/w500/wby9315QzVKdW9BonAefg8jGTTb.jpg"
  },
  {
    "id": 38,
    "title": "Zootopie",
    "year": 2016,
    "rating": 3.5,
    "poster_url": "https://image.tmdb.org/t/p/w500/hlK0e0wAQ3VLuJcsfIYPvb4JVud.jpg"
  },
  {
    "id": 42,
    "title": "Shutter Island",
    "year": 2010,
    "rating": 4.0,
    "poster_url": "https://image.tmdb.org/t/p/w500/kve20tXwUZpu4GUX8l6X7Z4jmL6.jpg"
  },
  {
    "id": 44,
    "title": "La Planète des Singes : Suprématie",
    "year": 2017,
    "rating": 3.7,
    "poster_url": "https://image.tmdb.org/t/p/w500/3vYhLLxrTtZLysXtIWktmd57Snv.jpg"
  },
  {
    "id": 46,
    "title": "Vice-Versa",
    "year": 2015,
    "rating": 4.0,
    "poster_url": "https://image.tmdb.org/t/p/w500/lRHE0vzf3oYJrhbsHXjIkF4Tl5A.jpg"
  },
  {
    "id": 47,
    "title": "Les Animaux Fantastiques",
    "year": 2016,
    "rating": 3.3,
    "poster_url": "https://image.tmdb.org/t/p/w500/h6NYfVUyM6CDURtZSnBpz647Ldd.jpg"
  },
  {
    "id": 48,
    "title": "Inglourious Basterds",
    "year": 2009,
    "rating": 4.4,
    "poster_url": "https://image.tmdb.org/t/p/w500/7sfbEnaARXDDhKm0CZ7D7uc2sbo.jpg"
  },
  {
    "id": 49,
    "title": "Blade Runner 2049",
    "year": 2017,
    "rating": 3.6,
    "poster_url": "https://image.tmdb.org/t/p/w500/gajva2L0rPYkEWjzgFlBXCAVBE5.jpg"
  }
];

export default moviesData;