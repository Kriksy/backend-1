// Adapted from:
// https://github.com/benoitvallon/100-best-books/blob/master/books.json

const BOOKS = [
    {
      "id": 1,
      "author": "Chinua Achebe",
      "country": "Nigeria",
      "language": "English",
      "link": "https://en.wikipedia.org/wiki/Things_Fall_Apart",
      "pages": 209,
      "title": "Things Fall Apart",
      "year": 1958
    },
    {
      "id": 2,
      "author": "Hans Christian Andersen",
      "country": "Denmark",
      "language": "Danish",
      "link": "https://en.wikipedia.org/wiki/Fairy_Tales_Told_for_Children._First_Collection.",
      "pages": 784,
      "title": "Fairy tales",
      "year": 1836
    },
    {
      "id": 3,
      "author": "Dante Alighieri",
      "country": "Italy",
      "language": "Italian",
      "link": "https://en.wikipedia.org/wiki/Divine_Comedy",
      "pages": 928,
      "title": "The Divine Comedy",
      "year": 1315
    },
    {
      "id": 4,
      "author": "Unknown",
      "country": "Sumer and Akkadian Empire",
      "language": "Akkadian",
      "link": "https://en.wikipedia.org/wiki/Epic_of_Gilgamesh",
      "pages": 160,
      "title": "The Epic Of Gilgamesh",
      "year": -1700
    },
    {
      "id": 5,
      "author": "Unknown",
      "country": "Achaemenid Empire",
      "language": "Hebrew",
      "link": "https://en.wikipedia.org/wiki/Book_of_Job",
      "pages": 176,
      "title": "The Book Of Job",
      "year": -600
    },
    {
      "id": 6,
      "author": "Unknown",
      "country": "India/Iran/Iraq/Egypt/Tajikistan",
      "language": "Arabic",
      "link": "https://en.wikipedia.org/wiki/One_Thousand_and_One_Nights",
      "pages": 288,
      "title": "One Thousand and One Nights",
      "year": 1200
    },
    {
      "id": 7,
      "author": "Unknown",
      "country": "Iceland",
      "language": "Old Norse",
      "link": "https://en.wikipedia.org/wiki/Nj%C3%A1ls_saga",
      "pages": 384,
      "title": "Njal's Saga",
      "year": 1350
    },
    {
      "id": 8,
      "author": "Jane Austen",
      "country": "United Kingdom",
      "language": "English",
      "link": "https://en.wikipedia.org/wiki/Pride_and_Prejudice",
      "pages": 226,
      "title": "Pride and Prejudice",
      "year": 1813
    },
    {
      "id": 9,
      "author": "Honoré de Balzac",
      "country": "France",
      "language": "French",
      "link": "https://en.wikipedia.org/wiki/Le_P%C3%A8re_Goriot",
      "pages": 443,
      "title": "Le Père Goriot",
      "year": 1835
    },
    {
      "id": 10,
      "author": "Samuel Beckett",
      "country": "Republic of Ireland",
      "language": "French, English",
      "link": "https://en.wikipedia.org/wiki/Molloy_(novel)",
      "pages": 256,
      "title": "Molloy, Malone Dies, The Unnamable, the trilogy",
      "year": 1952
    },
    {
      "id": 11,
      "author": "Giovanni Boccaccio",
      "country": "Italy",
      "language": "Italian",
      "link": "https://en.wikipedia.org/wiki/The_Decameron",
      "pages": 1024,
      "title": "The Decameron",
      "year": 1351
    },
    {
      "id": 12,
      "author": "Jorge Luis Borges",
      "country": "Argentina",
      "language": "Spanish",
      "link": "https://en.wikipedia.org/wiki/Ficciones",
      "pages": 224,
      "title": "Ficciones",
      "year": 1965
    },
    {
      "id": 13,
      "author": "Emily Bronté",
      "country": "United Kingdom",
      "language": "English",
      "link": "https://en.wikipedia.org/wiki/Wuthering_Heights",
      "pages": 342,
      "title": "Wuthering Heights",
      "year": 1847
    },
    {
      "id": 14,
      "author": "Albert Camus",
      "country": "Algeria, French Empire",
      "language": "French",
      "link": "https://en.wikipedia.org/wiki/The_Stranger_(novel)",
      "pages": 185,
      "title": "The Stranger",
      "year": 1942
    },
    {
      "id": 15,
      "author": "Paul Celan",
      "country": "Romania, France",
      "language": "German",
      "link": "",
      "pages": 320,
      "title": "Poems",
      "year": 1952
    },
    {
      "id": 16,
      "author": "Louis-Ferdinand Celine",
      "country": "France",
      "language": "French",
      "link": "https://en.wikipedia.org/wiki/Journey_to_the_End_of_the_Night",
      "pages": 505,
      "title": "Journey to the End of the Night",
      "year": 1932
    },
    {
      "id": 17,
      "author": "Miguel de Cervantes",
      "country": "Spain",
      "language": "Spanish",
      "link": "https://en.wikipedia.org/wiki/Don_Quixote",
      "pages": 1056,
      "title": "Don Quijote De La Mancha",
      "year": 1610
    },
    {
      "id": 18,
      "author": "Geoffrey Chaucer",
      "country": "England",
      "language": "English",
      "link": "https://en.wikipedia.org/wiki/The_Canterbury_Tales",
      "pages": 544,
      "title": "The Canterbury Tales",
      "year": 1450
    },
    {
      "id": 19,
      "author": "Anton Chekhov",
      "country": "Russia",
      "language": "Russian",
      "link": "https://en.wikipedia.org/wiki/List_of_short_stories_by_Anton_Chekhov",
      "pages": 194,
      "title": "Stories",
      "year": 1886
    },
    {
      "id": 20,
      "author": "Joseph Conrad",
      "country": "United Kingdom",
      "language": "English",
      "link": "https://en.wikipedia.org/wiki/Nostromo",
      "pages": 320,
      "title": "Nostromo",
      "year": 1904
    },
    {
      "id": 21,
      "author": "Charles Dickens",
      "country": "United Kingdom",
      "language": "English",
      "link": "https://en.wikipedia.org/wiki/Great_Expectations",
      "pages": 194,
      "title": "Great Expectations",
      "year": 1861
    },
    {
      "id": 22,
      "author": "Denis Diderot",
      "country": "France",
      "language": "French",
      "link": "https://en.wikipedia.org/wiki/Jacques_the_Fatalist",
      "pages": 596,
      "title": "Jacques the Fatalist",
      "year": 1796
    },
    {
      "id": 23,
      "author": "Alfred Döblin",
      "country": "Germany",
      "language": "German",
      "link": "https://en.wikipedia.org/wiki/Berlin_Alexanderplatz",
      "pages": 600,
      "title": "Berlin Alexanderplatz",
      "year": 1929
    },
    {
      "id": 24,
      "author": "Fyodor Dostoevsky",
      "country": "Russia",
      "language": "Russian",
      "link": "https://en.wikipedia.org/wiki/Crime_and_Punishment",
      "pages": 551,
      "title": "Crime and Punishment",
      "year": 1866
    },
    {
      "id": 25,
      "author": "Fyodor Dostoevsky",
      "country": "Russia",
      "language": "Russian",
      "link": "https://en.wikipedia.org/wiki/The_Idiot",
      "pages": 656,
      "title": "The Idiot",
      "year": 1869
    },
    {
      "id": 26,
      "author": "Fyodor Dostoevsky",
      "country": "Russia",
      "language": "Russian",
      "link": "https://en.wikipedia.org/wiki/Demons_(Dostoyevsky_novel)",
      "pages": 768,
      "title": "The Possessed",
      "year": 1872
    },
    {
      "id": 27,
      "author": "Fyodor Dostoevsky",
      "country": "Russia",
      "language": "Russian",
      "link": "https://en.wikipedia.org/wiki/The_Brothers_Karamazov",
      "pages": 824,
      "title": "The Brothers Karamazov",
      "year": 1880
    },
    {
      "id": 28,
      "author": "George Eliot",
      "country": "United Kingdom",
      "language": "English",
      "link": "https://en.wikipedia.org/wiki/Middlemarch",
      "pages": 800,
      "title": "Middlemarch",
      "year": 1871
    },
    {
      "id": 29,
      "author": "Ralph Ellison",
      "country": "United States",
      "language": "English",
      "link": "https://en.wikipedia.org/wiki/Invisible_Man",
      "pages": 581,
      "title": "Invisible Man",
      "year": 1952
    },
    {
      "id": 30,
      "author": "Euripides",
      "country": "Greece",
      "language": "Greek",
      "link": "https://en.wikipedia.org/wiki/Medea_(play)",
      "pages": 104,
      "title": "Medea",
      "year": -431
    },
    {
      "id": 31,
      "author": "William Faulkner",
      "country": "United States",
      "language": "English",
      "link": "https://en.wikipedia.org/wiki/Absalom,_Absalom!",
      "pages": 313,
      "title": "Absalom, Absalom!",
      "year": 1936
    },
    {
      "id": 32,
      "author": "William Faulkner",
      "country": "United States",
      "language": "English",
      "link": "https://en.wikipedia.org/wiki/The_Sound_and_the_Fury",
      "pages": 326,
      "title": "The Sound and the Fury",
      "year": 1929
    },
    {
      "id": 33,
      "author": "Gustave Flaubert",
      "country": "France",
      "language": "French",
      "link": "https://en.wikipedia.org/wiki/Madame_Bovary",
      "pages": 528,
      "title": "Madame Bovary",
      "year": 1857
    },
    {
      "id": 34,
      "author": "Gustave Flaubert",
      "country": "France",
      "language": "French",
      "link": "https://en.wikipedia.org/wiki/Sentimental_Education",
      "pages": 606,
      "title": "Sentimental Education",
      "year": 1869
    },
    {
      "id": 35,
      "author": "Federico Garcia Lorca",
      "country": "Spain",
      "language": "Spanish",
      "link": "https://en.wikipedia.org/wiki/Gypsy_Ballads",
      "pages": 218,
      "title": "Gypsy Ballads",
      "year": 1928
    },
    {
      "id": 36,
      "author": "Gabriel Garcia Marquez",
      "country": "Colombia",
      "language": "Spanish",
      "link": "https://en.wikipedia.org/wiki/One_Hundred_Years_of_Solitude",
      "pages": 417,
      "title": "One Hundred Years of Solitude",
      "year": 1967
    },
    {
      "id": 37,
      "author": "Gabriel Garcia Marquez",
      "country": "Colombia",
      "language": "Spanish",
      "link": "https://en.wikipedia.org/wiki/Love_in_the_Time_of_Cholera",
      "pages": 368,
      "title": "Love in the Time of Cholera",
      "year": 1985
    },
    {
      "id": 38,
      "author": "Johann Wolfgang von Goethe",
      "country": "Saxe-Weimar",
      "language": "German",
      "link": "https://en.wikipedia.org/wiki/Goethe%27s_Faust",
      "pages": 158,
      "title": "Faust",
      "year": 1832
    },
    {
      "id": 39,
      "author": "Nikolai Gogol",
      "country": "Russia",
      "language": "Russian",
      "link": "https://en.wikipedia.org/wiki/Dead_Souls",
      "pages": 432,
      "title": "Dead Souls",
      "year": 1842
    },
    {
      "id": 40,
      "author": "Günter Grass",
      "country": "Germany",
      "language": "German",
      "link": "https://en.wikipedia.org/wiki/The_Tin_Drum",
      "pages": 600,
      "title": "The Tin Drum",
      "year": 1959
    },
    {
      "id": 41,
      "author": "João Guimarães Rosa",
      "country": "Brazil",
      "language": "Portuguese",
      "link": "https://en.wikipedia.org/wiki/The_Devil_to_Pay_in_the_Backlands",
      "pages": 494,
      "title": "The Devil to Pay in the Backlands",
      "year": 1956
    },
    {
      "id": 42,
      "author": "Knut Hamsun",
      "country": "Norway",
      "language": "Norwegian",
      "link": "https://en.wikipedia.org/wiki/Hunger_(Hamsun_novel)",
      "pages": 176,
      "title": "Hunger",
      "year": 1890
    },
    {
      "id": 43,
      "author": "Ernest Hemingway",
      "country": "United States",
      "language": "English",
      "link": "https://en.wikipedia.org/wiki/The_Old_Man_and_the_Sea",
      "pages": 128,
      "title": "The Old Man and the Sea",
      "year": 1952
    },
    {
      "id": 44,
      "author": "Homer",
      "country": "Greece",
      "language": "Greek",
      "link": "https://en.wikipedia.org/wiki/Iliad",
      "pages": 608,
      "title": "Iliad",
      "year": -735
    },
    {
      "id": 45,
      "author": "Homer",
      "country": "Greece",
      "language": "Greek",
      "link": "https://en.wikipedia.org/wiki/Odyssey",
      "pages": 374,
      "title": "Odyssey",
      "year": -800
    },
    {
      "id": 46,
      "author": "Henrik Ibsen",
      "country": "Norway",
      "language": "Norwegian",
      "link": "https://en.wikipedia.org/wiki/A_Doll%27s_House",
      "pages": 68,
      "title": "A Doll's House",
      "year": 1879
    },
    {
      "id": 47,
      "author": "James Joyce",
      "country": "Irish Free State",
      "language": "English",
      "link": "https://en.wikipedia.org/wiki/Ulysses_(novel)",
      "pages": 228,
      "title": "Ulysses",
      "year": 1922
    },
    {
      "id": 48,
      "author": "Franz Kafka",
      "country": "Czechoslovakia",
      "language": "German",
      "link": "https://en.wikipedia.org/wiki/Franz_Kafka_bibliography#Short_stories",
      "pages": 488,
      "title": "Stories",
      "year": 1924
    },
    {
      "id": 49,
      "author": "Franz Kafka",
      "country": "Czechoslovakia",
      "language": "German",
      "link": "https://en.wikipedia.org/wiki/The_Trial",
      "pages": 160,
      "title": "The Trial",
      "year": 1925
    },
    {
      "id": 50,
      "author": "Franz Kafka",
      "country": "Czechoslovakia",
      "language": "German",
      "link": "https://en.wikipedia.org/wiki/The_Castle_(novel)",
      "pages": 352,
      "title": "The Castle",
      "year": 1926
    },
    {
      "id": 51,
      "author": "Kälidäsa",
      "country": "India",
      "language": "Sanskrit",
      "link": "https://en.wikipedia.org/wiki/Abhij%C3%B1%C4%81na%C5%9B%C4%81kuntalam",
      "pages": 147,
      "title": "The recognition of Shakuntala",
      "year": 150
    },
    {
      "id": 52,
      "author": "Yasunari Kawabata",
      "country": "Japan",
      "language": "Japanese",
      "link": "https://en.wikipedia.org/wiki/The_Sound_of_the_Mountain",
      "pages": 288,
      "title": "The Sound of the Mountain",
      "year": 1954
    },
    {
      "id": 53,
      "author": "Nikos Kazantzakis",
      "country": "Greece",
      "language": "Greek",
      "link": "https://en.wikipedia.org/wiki/Zorba_the_Greek",
      "pages": 368,
      "title": "Zorba the Greek",
      "year": 1946
    },
    {
      "id": 54,
      "author": "D. H. Lawrence",
      "country": "United Kingdom",
      "language": "English",
      "link": "https://en.wikipedia.org/wiki/Sons_and_Lovers",
      "pages": 432,
      "title": "Sons and Lovers",
      "year": 1913
    },
    {
      "id": 55,
      "author": "Halldór Laxness",
      "country": "Iceland",
      "language": "Icelandic",
      "link": "https://en.wikipedia.org/wiki/Independent_People",
      "pages": 470,
      "title": "Independent People",
      "year": 1934
    },
    {
      "id": 56,
      "author": "Giacomo Leopardi",
      "country": "Italy",
      "language": "Italian",
      "link": "",
      "pages": 184,
      "title": "Poems",
      "year": 1818
    },
    {
      "id": 57,
      "author": "Doris Lessing",
      "country": "United Kingdom",
      "language": "English",
      "link": "https://en.wikipedia.org/wiki/The_Golden_Notebook",
      "pages": 688,
      "title": "The Golden Notebook",
      "year": 1962
    },
    {
      "id": 58,
      "author": "Astrid Lindgren",
      "country": "Sweden",
      "language": "Swedish",
      "link": "https://en.wikipedia.org/wiki/Pippi_Longstocking",
      "pages": 160,
      "title": "Pippi Longstocking",
      "year": 1945
    },
    {
      "id": 59,
      "author": "Lu Xun",
      "country": "China",
      "language": "Chinese",
      "link": "https://en.wikipedia.org/wiki/A_Madman%27s_Diary",
      "pages": 389,
      "title": "Diary of a Madman",
      "year": 1918
    },
    {
      "id": 60,
      "author": "Naguib Mahfouz",
      "country": "Egypt",
      "language": "Arabic",
      "link": "https://en.wikipedia.org/wiki/Children_of_Gebelawi",
      "pages": 355,
      "title": "Children of Gebelawi",
      "year": 1959
    },
    {
      "id": 61,
      "author": "Thomas Mann",
      "country": "Germany",
      "language": "German",
      "link": "https://en.wikipedia.org/wiki/Buddenbrooks",
      "pages": 736,
      "title": "Buddenbrooks",
      "year": 1901
    },
    {
      "id": 62,
      "author": "Thomas Mann",
      "country": "Germany",
      "language": "German",
      "link": "https://en.wikipedia.org/wiki/The_Magic_Mountain",
      "pages": 720,
      "title": "The Magic Mountain",
      "year": 1924
    },
    {
      "id": 63,
      "author": "Herman Melville",
      "country": "United States",
      "language": "English",
      "link": "https://en.wikipedia.org/wiki/Moby-Dick",
      "pages": 378,
      "title": "Moby Dick",
      "year": 1851
    },
    {
      "id": 64,
      "author": "Michel de Montaigne",
      "country": "France",
      "language": "French",
      "link": "https://en.wikipedia.org/wiki/Essays_(Montaigne)",
      "pages": 404,
      "title": "Essays",
      "year": 1595
    },
    {
      "id": 65,
      "author": "Elsa Morante",
      "country": "Italy",
      "language": "Italian",
      "link": "https://en.wikipedia.org/wiki/History_(novel)",
      "pages": 600,
      "title": "History",
      "year": 1974
    },
    {
      "id": 66,
      "author": "Toni Morrison",
      "country": "United States",
      "language": "English",
      "link": "https://en.wikipedia.org/wiki/Beloved_(novel)",
      "pages": 321,
      "title": "Beloved",
      "year": 1987
    },
    {
      "id": 67,
      "author": "Murasaki Shikibu",
      "country": "Japan",
      "language": "Japanese",
      "link": "https://en.wikipedia.org/wiki/The_Tale_of_Genji",
      "pages": 1360,
      "title": "The Tale of Genji",
      "year": 1006
    },
    {
      "id": 68,
      "author": "Robert Musil",
      "country": "Austria",
      "language": "German",
      "link": "https://en.wikipedia.org/wiki/The_Man_Without_Qualities",
      "pages": 365,
      "title": "The Man Without Qualities",
      "year": 1931
    },
    {
      "id": 69,
      "author": "Vladimir Nabokov",
      "country": "Russia/United States",
      "language": "English",
      "link": "https://en.wikipedia.org/wiki/Lolita",
      "pages": 317,
      "title": "Lolita",
      "year": 1955
    },
    {
      "id": 70,
      "author": "George Orwell",
      "country": "United Kingdom",
      "language": "English",
      "link": "https://en.wikipedia.org/wiki/Nineteen_Eighty-Four",
      "pages": 272,
      "title": "Nineteen Eighty-Four",
      "year": 1949
    },
    {
      "id": 71,
      "author": "Ovid",
      "country": "Roman Empire",
      "language": "Classical Latin",
      "link": "https://en.wikipedia.org/wiki/Metamorphoses",
      "pages": 576,
      "title": "Metamorphoses",
      "year": 100
    },
    {
      "id": 72,
      "author": "Fernando Pessoa",
      "country": "Portugal",
      "language": "Portuguese",
      "link": "https://en.wikipedia.org/wiki/The_Book_of_Disquiet",
      "pages": 272,
      "title": "The Book of Disquiet",
      "year": 1928
    },
    {
      "id": 73,
      "author": "Edgar Allan Poe",
      "country": "United States",
      "language": "English",
      "link": "https://en.wikipedia.org/wiki/Edgar_Allan_Poe_bibliography#Tales",
      "pages": 842,
      "title": "Tales",
      "year": 1950
    },
    {
      "id": 74,
      "author": "Marcel Proust",
      "country": "France",
      "language": "French",
      "link": "https://en.wikipedia.org/wiki/In_Search_of_Lost_Time",
      "pages": 2408,
      "title": "In Search of Lost Time",
      "year": 1920
    },
    {
      "id": 75,
      "author": "Francois Rabelais",
      "country": "France",
      "language": "French",
      "link": "https://en.wikipedia.org/wiki/Gargantua_and_Pantagruel",
      "pages": 623,
      "title": "Gargantua and Pantagruel",
      "year": 1533
    },
    {
      "id": 76,
      "author": "Juan Rulfo",
      "country": "Mexico",
      "language": "Spanish",
      "link": "https://en.wikipedia.org/wiki/Pedro_P%C3%A1ramo",
      "pages": 124,
      "title": "Pedro Paramo",
      "year": 1955
    },
    {
      "id": 77,
      "author": "Rumi",
      "country": "Sultanate of Rum",
      "language": "Persian",
      "link": "https://en.wikipedia.org/wiki/Masnavi",
      "pages": 438,
      "title": "The Masnavi",
      "year": 1236
    },
    {
      "id": 78,
      "author": "Salman Rushdie",
      "country": "United Kingdom, India",
      "language": "English",
      "link": "https://en.wikipedia.org/wiki/Midnight%27s_Children",
      "pages": 536,
      "title": "Midnight's Children",
      "year": 1981
    },
    {
      "id": 79,
      "author": "Saadi",
      "country": "Persia, Persian Empire",
      "language": "Persian",
      "link": "https://en.wikipedia.org/wiki/Bustan_(book)",
      "pages": 298,
      "title": "Bostan",
      "year": 1257
    },
    {
      "id": 80,
      "author": "Tayeb Salih",
      "country": "Sudan",
      "language": "Arabic",
      "link": "https://en.wikipedia.org/wiki/Season_of_Migration_to_the_North",
      "pages": 139,
      "title": "Season of Migration to the North",
      "year": 1966
    },
    {
      "id": 81,
      "author": "José Saramago",
      "country": "Portugal",
      "language": "Portuguese",
      "link": "https://en.wikipedia.org/wiki/Blindness_(novel)",
      "pages": 352,
      "title": "Blindness",
      "year": 1995
    },
    {
      "id": 82,
      "author": "William Shakespeare",
      "country": "England",
      "language": "English",
      "link": "https://en.wikipedia.org/wiki/Hamlet",
      "pages": 432,
      "title": "Hamlet",
      "year": 1603
    },
    {
      "id": 83,
      "author": "William Shakespeare",
      "country": "England",
      "language": "English",
      "link": "https://en.wikipedia.org/wiki/King_Lear",
      "pages": 384,
      "title": "King Lear",
      "year": 1608
    },
    {
      "id": 84,
      "author": "William Shakespeare",
      "country": "England",
      "language": "English",
      "link": "https://en.wikipedia.org/wiki/Othello",
      "pages": 314,
      "title": "Othello",
      "year": 1609
    },
    {
      "id": 85,
      "author": "Sophocles",
      "country": "Greece",
      "language": "Greek",
      "link": "https://en.wikipedia.org/wiki/Oedipus_the_King",
      "pages": 88,
      "title": "Oedipus the King",
      "year": -430
    },
    {
      "id": 86,
      "author": "Stendhal",
      "country": "France",
      "language": "French",
      "link": "https://en.wikipedia.org/wiki/The_Red_and_the_Black",
      "pages": 576,
      "title": "The Red and the Black",
      "year": 1830
    },
    {
      "id": 87,
      "author": "Laurence Sterne",
      "country": "England",
      "language": "English",
      "link": "https://en.wikipedia.org/wiki/The_Life_and_Opinions_of_Tristram_Shandy,_Gentleman",
      "pages": 640,
      "title": "The Life And Opinions of Tristram Shandy",
      "year": 1760
    },
    {
      "id": 88,
      "author": "Italo Svevo",
      "country": "Italy",
      "language": "Italian",
      "link": "https://en.wikipedia.org/wiki/Zeno%27s_Conscience",
      "pages": 412,
      "title": "Confessions of Zeno",
      "year": 1923
    },
    {
      "id": 89,
      "author": "Jonathan Swift",
      "country": "Ireland",
      "language": "English",
      "link": "https://en.wikipedia.org/wiki/Gulliver%27s_Travels",
      "pages": 178,
      "title": "Gulliver's Travels",
      "year": 1726
    },
    {
      "id": 90,
      "author": "Leo Tolstoy",
      "country": "Russia",
      "language": "Russian",
      "link": "https://en.wikipedia.org/wiki/War_and_Peace",
      "pages": 1296,
      "title": "War and Peace",
      "year": 1867
    },
    {
      "id": 91,
      "author": "Leo Tolstoy",
      "country": "Russia",
      "language": "Russian",
      "link": "https://en.wikipedia.org/wiki/Anna_Karenina",
      "pages": 864,
      "title": "Anna Karenina",
      "year": 1877
    },
    {
      "id": 92,
      "author": "Leo Tolstoy",
      "country": "Russia",
      "language": "Russian",
      "link": "https://en.wikipedia.org/wiki/The_Death_of_Ivan_Ilyich",
      "pages": 92,
      "title": "The Death of Ivan Ilyich",
      "year": 1886
    },
    {
      "id": 93,
      "author": "Mark Twain",
      "country": "United States",
      "language": "English",
      "link": "https://en.wikipedia.org/wiki/Adventures_of_Huckleberry_Finn",
      "pages": 224,
      "title": "The Adventures of Huckleberry Finn",
      "year": 1884
    },
    {
      "id": 94,
      "author": "Valmiki",
      "country": "India",
      "language": "Sanskrit",
      "link": "https://en.wikipedia.org/wiki/Ramayana",
      "pages": 152,
      "title": "Ramayana",
      "year": -450
    },
    {
      "id": 95,
      "author": "Virgil",
      "country": "Roman Empire",
      "language": "Classical Latin",
      "link": "https://en.wikipedia.org/wiki/Aeneid",
      "pages": 442,
      "title": "The Aeneid",
      "year": -23
    },
    {
      "id": 96,
      "author": "Vyasa",
      "country": "India",
      "language": "Sanskrit",
      "link": "https://en.wikipedia.org/wiki/Mahabharata",
      "pages": 276,
      "title": "Mahabharata",
      "year": -700
    },
    {
      "id": 97,
      "author": "Walt Whitman",
      "country": "United States",
      "language": "English",
      "link": "https://en.wikipedia.org/wiki/Leaves_of_Grass",
      "pages": 152,
      "title": "Leaves of Grass",
      "year": 1855
    },
    {
      "id": 98,
      "author": "Virginia Woolf",
      "country": "United Kingdom",
      "language": "English",
      "link": "https://en.wikipedia.org/wiki/Mrs_Dalloway",
      "pages": 216,
      "title": "Mrs Dalloway",
      "year": 1925
    },
    {
      "id": 99,
      "author": "Virginia Woolf",
      "country": "United Kingdom",
      "language": "English",
      "link": "https://en.wikipedia.org/wiki/To_the_Lighthouse",
      "pages": 209,
      "title": "To the Lighthouse",
      "year": 1927
    },
    {
      "id": 100,
      "author": "Marguerite Yourcenar",
      "country": "France/Belgium",
      "language": "French",
      "link": "https://en.wikipedia.org/wiki/Memoirs_of_Hadrian",
      "pages": 408,
      "title": "Memoirs of Hadrian",
      "year": 1951
    }
  ];
  
  exports.BOOKS = BOOKS;