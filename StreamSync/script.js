        // --- 1. DUMMY DATA & STATE MANAGEMENT ---
        const DB_KEY = 'streamsync_db';
        let db = JSON.parse(localStorage.getItem(DB_KEY));

        const dummyMovies = [
            { id: 1, title: 'Inception', genre: 'Sci-Fi', thumb: 'https://picsum.photos/seed/inc/300/450', desc: 'A thief who steals corporate secrets through the use of dream-sharing technology.', year: 2010, rating: 8.8, video: 'https://www.youtube.com/embed/YoHD9XEInc0' },
            { id: 2, title: 'The Dark Knight', genre: 'Action', thumb: 'https://picsum.photos/seed/dk/300/450', desc: 'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham.', year: 2008, rating: 9.0, video: 'https://www.youtube.com/embed/EXeTwQWrcwY' },
            { id: 3, title: 'Interstellar', genre: 'Sci-Fi', thumb: 'https://picsum.photos/seed/int/300/450', desc: 'A team of explorers travel through a wormhole in space in an attempt to ensure humanity\'s survival.', year: 2014, rating: 8.6, video: 'https://www.youtube.com/embed/zSWdZVtXT7E' },
            { id: 4, title: 'Stranger Things', genre: 'Horror', thumb: 'https://picsum.photos/seed/st/300/450', desc: 'When a young boy disappears, his mother, a police chief and his friends must confront terrifying supernatural forces.', year: 2016, rating: 8.7, video: 'https://www.youtube.com/embed/b9EkMc79ZSU' },
            { id: 5, title: 'Avengers: Endgame', genre: 'Action', thumb: 'https://picsum.photos/seed/avg/300/450', desc: 'After the devastating events of Infinity War, the universe is in ruins.', year: 2019, rating: 8.4, video: 'https://www.youtube.com/embed/TcMBFSGVi1c' },
            { id: 6, title: 'The Matrix', genre: 'Sci-Fi', thumb: 'https://picsum.photos/seed/mtx/300/450', desc: 'A computer hacker learns from mysterious rebels about the true nature of his reality.', year: 1999, rating: 8.7, video: 'https://www.youtube.com/embed/vKQi3bBA1y8' },
            { id: 7, title: 'Parasite', genre: 'Thriller', thumb: 'https://picsum.photos/seed/par/300/450', desc: 'Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan.', year: 2019, rating: 8.5, video: 'https://www.youtube.com/embed/5xH0HfJHxYI' },
            { id: 8, title: 'Joker', genre: 'Drama', thumb: 'https://picsum.photos/seed/jok/300/450', desc: 'In Gotham City, mentally troubled comedian Arthur Fleck is disregarded and mistreated by society.', year: 2019, rating: 8.4, video: 'https://www.youtube.com/embed/zAGVQLHvwOY' },
            { id: 9, title: 'Money Heist', genre: 'Action', thumb: 'https://picsum.photos/seed/mh/300/450', desc: 'An unusual group of robbers attempt to carry out the most perfect robbery in Spanish history.', year: 2017, rating: 8.2, video: 'https://www.youtube.com/embed/hMANIarjT50' },
            { id: 10, title: 'Breaking Bad', genre: 'Drama', thumb: 'https://picsum.photos/seed/bb/300/450', desc: 'A chemistry teacher diagnosed with inoperable lung cancer turns to manufacturing and selling methamphetamine.', year: 2008, rating: 9.5, video: 'https://www.youtube.com/embed/HhesaQXLuRY' },
            { id: 11, title: 'The Witcher', genre: 'Fantasy', thumb: 'https://picsum.photos/seed/wit/300/450', desc: 'Geralt of Rivia, a solitary monster hunter, struggles to find his place in a world where people often prove more wicked than beasts.', year: 2019, rating: 8.1, video: 'https://www.youtube.com/embed/ndl1W4ltcmg' },
            { id: 12, title: 'Spider-Man: No Way Home', genre: 'Action', thumb: 'https://picsum.photos/seed/sm/300/450', desc: 'With Spider-Man\'s identity now revealed, Peter asks Doctor Strange for help.', year: 2021, rating: 8.2, video: 'https://www.youtube.com/embed/JfVOs4VSpmA' },
            { id: 13, title: 'Squid Game', genre: 'Drama', thumb: 'https://picsum.photos/seed/squid/300/450', desc: 'Hundreds of cash-strapped players accept a strange invitation to compete in children\'s games.', year: 2021, rating: 8.0, video: 'https://www.youtube.com/embed/oqxAJKy0ii4' },
            { id: 14, title: 'Oppenheimer', genre: 'Drama', thumb: 'https://picsum.photos/seed/opp/300/450', desc: 'The story of American scientist J. Robert Oppenheimer and his role in the development of the atomic bomb.', year: 2023, rating: 8.6, video: 'https://www.youtube.com/embed/uYPbbksJxIg' },
            { id: 15, title: 'John Wick', genre: 'Action', thumb: 'https://picsum.photos/seed/jw/300/450', desc: 'An ex-hit-man comes out of retirement to track down the gangsters that killed his dog.', year: 2014, rating: 7.4, video: 'https://www.youtube.com/embed/C0BMx-qxsP4' },
            { id: 16, title: 'The Mandalorian', genre: 'Sci-Fi', thumb: 'https://picsum.photos/seed/mando/300/450', desc: 'The travels of a lone bounty hunter in the outer reaches of the galaxy.', year: 2019, rating: 8.7, video: 'https://www.youtube.com/embed/aOC8E8z_ifw' },
            { id: 17, title: 'Black Mirror', genre: 'Sci-Fi', thumb: 'https://picsum.photos/seed/bm/300/450', desc: 'An anthology series exploring a twisted, high-tech multiverse.', year: 2011, rating: 8.8, video: 'https://www.youtube.com/embed/V0XOApF5nLU' },
            { id: 18, title: 'Peaky Blinders', genre: 'Drama', thumb: 'https://picsum.photos/seed/pb/300/450', desc: 'A gangster family epic set in 1900s England.', year: 2013, rating: 8.8, video: 'https://www.youtube.com/embed/oVzVdvGIC7U' },
            { id: 19, title: 'The Boys', genre: 'Action', thumb: 'https://picsum.photos/seed/boys/300/450', desc: 'A group of vigilantes set out to take down corrupt superheroes.', year: 2019, rating: 8.7, video: 'https://www.youtube.com/embed/M1bhOaLV4FU' },
            { id: 20, title: 'Dune', genre: 'Sci-Fi', thumb: 'https://picsum.photos/seed/dune/300/450', desc: 'A noble family becomes embroiled in a war for control over the galaxy\'s most valuable asset.', year: 2021, rating: 8.0, video: 'https://www.youtube.com/embed/n9xhKvTKcGs' },
            { id: 21, title: 'Get Out', genre: 'Horror', thumb: 'https://picsum.photos/seed/go/300/450', desc: 'A young African-American visits his white girlfriend\'s parents for the weekend.', year: 2017, rating: 7.7, video: 'https://www.youtube.com/embed/DzfpyUB60YY' },
            { id: 22, title: 'It', genre: 'Horror', thumb: 'https://picsum.photos/seed/it/300/450', desc: 'A group of bullied kids band together to destroy a shape-shifting monster.', year: 2017, rating: 7.3, video: 'https://www.youtube.com/embed/xKJmEC5ieOk' },
            { id: 23, title: 'Doctor Strange', genre: 'Fantasy', thumb: 'https://picsum.photos/seed/ds/300/450', desc: 'A brilliant neurosurgeon is drawn into the world of the mystic arts.', year: 2016, rating: 7.5, video: 'https://www.youtube.com/embed/HSzx-zryEgM' },
            { id: 24, title: 'Game of Thrones', genre: 'Fantasy', thumb: 'https://picsum.photos/seed/got/300/450', desc: 'Nine noble families fight for control over the lands of Westeros.', year: 2011, rating: 9.2, video: 'https://www.youtube.com/embed/KPLWWIOCOOQ' },
            { id: 25, title: 'Sherlock', genre: 'Thriller', thumb: 'https://picsum.photos/seed/sher/300/450', desc: 'A modern update finds the famous sleuth and his doctor partner solving crime in London.', year: 2010, rating: 9.1, video: 'https://www.youtube.com/embed/xK7S9mrFWL4' },
            { id: 26, title: 'Mindhunter', genre: 'Thriller', thumb: 'https://picsum.photos/seed/mind/300/450', desc: 'Two FBI agents are tasked with interviewing serial killers to solve open cases.', year: 2017, rating: 8.6, video: 'https://www.youtube.com/embed/edaigXKEoO4' },
            { id: 27, title: 'The Conjuring', genre: 'Horror', thumb: 'https://picsum.photos/seed/conj/300/450', desc: 'Paranormal investigators work to help a family terrorized by a dark presence.', year: 2013, rating: 7.5, video: 'https://www.youtube.com/embed/k10ETZ41q5o' },
            { id: 28, title: 'Avatar', genre: 'Sci-Fi', thumb: 'https://picsum.photos/seed/ava/300/450', desc: 'A paraplegic Marine becomes torn between following orders and protecting an alien world.', year: 2009, rating: 7.8, video: 'https://www.youtube.com/embed/5PSNL1qE6VY' },
            { id: 29, title: 'Top Gun: Maverick', genre: 'Action', thumb: 'https://picsum.photos/seed/tgm/300/450', desc: 'After thirty years, Maverick is still pushing the envelope as a top naval aviator.', year: 2022, rating: 8.3, video: 'https://www.youtube.com/embed/giXcoVnwV19' },
            { id: 30, title: 'Everything Everywhere', genre: 'Sci-Fi', thumb: 'https://picsum.photos/seed/eea/300/450', desc: 'An aging Chinese immigrant is swept up in an insane adventure across universes.', year: 2022, rating: 7.8, video: 'https://www.youtube.com/embed/wxN1T1uxQ2g' },
            { id: 31, title: 'Wednesday', genre: 'Horror', thumb: 'https://picsum.photos/seed/wed/300/450', desc: 'Follows Wednesday Addams\' years as a student mastering her emerging psychic ability.', year: 2022, rating: 8.1, video: 'https://www.youtube.com/embed/Di310WS8zLk' },
            { id: 32, title: 'Loki', genre: 'Fantasy', thumb: 'https://picsum.photos/seed/loki/300/450', desc: 'The mercurial villain Loki resumes his role as the God of Mischief.', year: 2021, rating: 8.2, video: 'https://www.youtube.com/embed/nW948Va-l10' }
,
            { id: 33, title: 'Mad Max Fury Road', genre: 'Action', thumb: 'https://picsum.photos/seed/madmax/300/450', desc: 'In a post-apocalyptic wasteland, a woman rebels against a tyrannical ruler.', year: 2015, rating: 8.1, video: 'https://www.youtube.com/embed/dhflJDFiIXV' },
            { id: 34, title: 'Mission Impossible', genre: 'Action', thumb: 'https://picsum.photos/seed/missio/300/450', desc: 'An American agent, under false suspicion of disloyalty, must discover and expose the real spy.', year: 1996, rating: 7.1, video: 'https://www.youtube.com/embed/Sd4FyQCjOt4' },
            { id: 35, title: 'Fast Furious', genre: 'Action', thumb: 'https://picsum.photos/seed/fastfu/300/450', desc: 'Los Angeles police officer Brian O\'Conner must decide where his loyalty really lies.', year: 2001, rating: 6.8, video: 'https://www.youtube.com/embed/9hBfrApF6KB' },
            { id: 36, title: 'John Wick 4', genre: 'Action', thumb: 'https://picsum.photos/seed/johnwi/300/450', desc: 'John Wick uncovers a path to defeating The High Table.', year: 2023, rating: 7.7, video: 'https://www.youtube.com/embed/wtlqct9hPAN' },
            { id: 37, title: 'Black Panther', genre: 'Action', thumb: 'https://picsum.photos/seed/blackp/300/450', desc: 'T\'Challa, heir to the hidden but advanced kingdom of Wakanda, must step forward to lead his people.', year: 2018, rating: 7.3, video: 'https://www.youtube.com/embed/04qpYd7fIVT' },
            { id: 38, title: 'Thor Ragnarok', genre: 'Action', thumb: 'https://picsum.photos/seed/thorra/300/450', desc: 'Imprisoned on the planet Sakaar, Thor must race against time to return to Asgard.', year: 2017, rating: 7.9, video: 'https://www.youtube.com/embed/oRviP4rKCHr' },
            { id: 39, title: 'Captain America', genre: 'Action', thumb: 'https://picsum.photos/seed/captai/300/450', desc: 'Steve Rogers, a rejected military soldier, transforms into Captain America.', year: 2011, rating: 6.9, video: 'https://www.youtube.com/embed/5ifiGNHJKFE' },
            { id: 40, title: 'Transformers', genre: 'Action', thumb: 'https://picsum.photos/seed/transf/300/450', desc: 'An ancient struggle between two Cybertronian races comes to Earth.', year: 2007, rating: 7.0, video: 'https://www.youtube.com/embed/dfNjyrSYUdQ' },
            { id: 41, title: 'Die Hard', genre: 'Action', thumb: 'https://picsum.photos/seed/diehar/300/450', desc: 'An NYPD officer tries to save his wife and several others taken hostage by German terrorists.', year: 1988, rating: 8.2, video: 'https://www.youtube.com/embed/GrfiqJBGZ56' },
            { id: 42, title: 'Gladiator', genre: 'Action', thumb: 'https://picsum.photos/seed/gladia/300/450', desc: 'A former Roman General sets out to exact vengeance against the corrupt emperor.', year: 2000, rating: 8.5, video: 'https://www.youtube.com/embed/7V0SEiNw1pg' },
            { id: 43, title: 'The Raid', genre: 'Action', thumb: 'https://picsum.photos/seed/therai/300/450', desc: 'A S.W.A.T. team becomes trapped in a tenement run by a ruthless mobster.', year: 2011, rating: 7.6, video: 'https://www.youtube.com/embed/hvOt8XcAAYs' },
            { id: 44, title: 'Extraction', genre: 'Action', thumb: 'https://picsum.photos/seed/extrac/300/450', desc: 'Tyler Rake, a fearless black market mercenary, embarks on the most deadly extraction of his career.', year: 2020, rating: 6.7, video: 'https://www.youtube.com/embed/B6ag7WRGEza' },
            { id: 45, title: 'Nobody', genre: 'Action', thumb: 'https://picsum.photos/seed/nobody/300/450', desc: 'A bystander who intervenes to help a woman being harassed by a group of men becomes the target of a vengeful drug lord.', year: 2021, rating: 7.4, video: 'https://www.youtube.com/embed/TdP1Ozo2CuR' },
            { id: 46, title: 'Army of Darkness', genre: 'Action', thumb: 'https://picsum.photos/seed/armyof/300/450', desc: 'A man is accidentally transported to 1300 A.D., where he must battle an army of the dead.', year: 1992, rating: 7.4, video: 'https://www.youtube.com/embed/fJ1XljPe8sh' },
            { id: 47, title: 'Arrival', genre: 'Sci-Fi', thumb: 'https://picsum.photos/seed/arriva/300/450', desc: 'A linguist works with the military to communicate with alien lifeforms.', year: 2016, rating: 7.9, video: 'https://www.youtube.com/embed/hU7d48x7uzr' },
            { id: 48, title: 'Ex Machina', genre: 'Sci-Fi', thumb: 'https://picsum.photos/seed/exmach/300/450', desc: 'A young programmer is selected to participate in a ground-breaking experiment in synthetic intelligence.', year: 2014, rating: 7.7, video: 'https://www.youtube.com/embed/kZmQ9qUwoj5' },
            { id: 49, title: 'Blade Runner 2049', genre: 'Sci-Fi', thumb: 'https://picsum.photos/seed/blader/300/450', desc: 'Young Blade Runner K\'s discovery of a long-buried secret leads him to track down former Blade Runner Rick Deckard.', year: 2017, rating: 8.0, video: 'https://www.youtube.com/embed/hlGnHGP4ipk' },
            { id: 50, title: 'Tenet', genre: 'Sci-Fi', thumb: 'https://picsum.photos/seed/tenet/300/450', desc: 'Armed with only one word, Tenet, and fighting for the survival of the entire world.', year: 2020, rating: 7.3, video: 'https://www.youtube.com/embed/uDdsFWb1CbT' },
            { id: 51, title: 'Gravity', genre: 'Sci-Fi', thumb: 'https://picsum.photos/seed/gravit/300/450', desc: 'Two astronauts work together to survive after an accident leaves them stranded in space.', year: 2013, rating: 7.7, video: 'https://www.youtube.com/embed/TJzFDexjwZv' },
            { id: 52, title: 'The Martian', genre: 'Sci-Fi', thumb: 'https://picsum.photos/seed/themar/300/450', desc: 'An astronaut becomes stranded on Mars after his team assume him dead.', year: 2015, rating: 8.0, video: 'https://www.youtube.com/embed/SbrivHeAXfu' },
            { id: 53, title: 'Ready Player One', genre: 'Sci-Fi', thumb: 'https://picsum.photos/seed/readyp/300/450', desc: 'When the creator of a virtual reality called the OASIS dies, he makes a posthumous challenge.', year: 2018, rating: 7.4, video: 'https://www.youtube.com/embed/fBT3nKNMQyI' },
            { id: 54, title: 'Altered Carbon', genre: 'Sci-Fi', thumb: 'https://picsum.photos/seed/altere/300/450', desc: 'Set in a future where consciousness is digitized and stored.', year: 2018, rating: 7.9, video: 'https://www.youtube.com/embed/3Tn38jrtjyH' },
            { id: 55, title: 'Dark', genre: 'Sci-Fi', thumb: 'https://picsum.photos/seed/dark/300/450', desc: 'A family saga with a supernatural twist, set in a German town.', year: 2017, rating: 8.7, video: 'https://www.youtube.com/embed/ZUUfHX4Alvw' },
            { id: 56, title: 'Severance', genre: 'Sci-Fi', thumb: 'https://picsum.photos/seed/severa/300/450', desc: 'Mark leads a team of office workers whose memories have been surgically divided between their work and personal lives.', year: 2022, rating: 8.7, video: 'https://www.youtube.com/embed/O7HRFP8CJll' },
            { id: 57, title: 'Hereditary', genre: 'Horror', thumb: 'https://picsum.photos/seed/heredi/300/450', desc: 'A grieving family is haunted by tragic and disturbing occurrences.', year: 2018, rating: 7.3, video: 'https://www.youtube.com/embed/vXB9tfvEPfC' },
            { id: 58, title: 'Midsommar', genre: 'Horror', thumb: 'https://picsum.photos/seed/midsom/300/450', desc: 'A couple travels to Sweden to visit a rural hometown\'s fabled mid-summer festival.', year: 2019, rating: 7.1, video: 'https://www.youtube.com/embed/cM2cpt8H0ap' },
            { id: 59, title: 'A Quiet Place', genre: 'Horror', thumb: 'https://picsum.photos/seed/aquiet/300/450', desc: 'A family struggles for survival in a world where most humans have been killed by blind but noise-sensitive creatures.', year: 2018, rating: 7.5, video: 'https://www.youtube.com/embed/CND0N97ZD5x' },
            { id: 60, title: 'Us', genre: 'Horror', thumb: 'https://picsum.photos/seed/us/300/450', desc: 'A family\'s serene beach vacation turns to chaos when their doppelgängers appear and begin to terrorize them.', year: 2019, rating: 6.8, video: 'https://www.youtube.com/embed/onwPiXvIvQX' },
            { id: 61, title: 'Nope', genre: 'Horror', thumb: 'https://picsum.photos/seed/nope/300/450', desc: 'The residents of a lonely gulch in inland California bear witness to an uncanny and chilling discovery.', year: 2022, rating: 6.8, video: 'https://www.youtube.com/embed/wmzbHNivS8B' },
            { id: 62, title: 'The Haunting of Hill House', genre: 'Horror', thumb: 'https://picsum.photos/seed/thehau/300/450', desc: 'Flashing between past and present, a fractured family confronts haunting memories of their old home.', year: 2018, rating: 8.6, video: 'https://www.youtube.com/embed/4nAsX414diI' },
            { id: 63, title: 'Annihilation', genre: 'Horror', thumb: 'https://picsum.photos/seed/annihi/300/450', desc: 'A biologist signs up for a dangerous, secret expedition into a mysterious zone where the laws of nature don\'t apply.', year: 2018, rating: 6.8, video: 'https://www.youtube.com/embed/vITHxu14TyN' },
            { id: 64, title: 'The Babadook', genre: 'Horror', thumb: 'https://picsum.photos/seed/thebab/300/450', desc: 'A single mother and her child fall into a deep well of paranoia when an eerie children\'s book manifests in their home.', year: 2014, rating: 6.8, video: 'https://www.youtube.com/embed/qlTqvY3QZH8' },
            { id: 65, title: 'Sinister', genre: 'Horror', thumb: 'https://picsum.photos/seed/sinist/300/450', desc: 'Washed-up true crime writer Ellison Oswalt finds a box of super 8 home movies in his new home.', year: 2012, rating: 6.8, video: 'https://www.youtube.com/embed/skJYNqX3sDp' },
            { id: 66, title: 'Malignant', genre: 'Horror', thumb: 'https://picsum.photos/seed/malign/300/450', desc: 'Madison is paralyzed by shocking visions of grisly murders, and her torment worsens as she discovers that these waking dreams are in fact terrifying realities.', year: 2021, rating: 6.2, video: 'https://www.youtube.com/embed/RFpMqCToG2L' },
            { id: 67, title: 'Succession', genre: 'Drama', thumb: 'https://picsum.photos/seed/succes/300/450', desc: 'The Roy family is known for controlling the biggest media and entertainment company in the world.', year: 2018, rating: 8.8, video: 'https://www.youtube.com/embed/1lYecE0qIcw' },
            { id: 68, title: 'Euphoria', genre: 'Drama', thumb: 'https://picsum.photos/seed/euphor/300/450', desc: 'A look at life for a group of high school students as they grapple with issues of drugs, sex, and violence.', year: 2019, rating: 8.3, video: 'https://www.youtube.com/embed/BJ5cY3Xk0Dy' },
            { id: 69, title: 'The Crown', genre: 'Drama', thumb: 'https://picsum.photos/seed/thecro/300/450', desc: 'Follows the political rivalries and romance of Queen Elizabeth II\'s reign and the events that shaped the second half of the twentieth century.', year: 2016, rating: 8.6, video: 'https://www.youtube.com/embed/lVZAVQPQE7y' },
            { id: 70, title: 'Ozark', genre: 'Drama', thumb: 'https://picsum.photos/seed/ozark/300/450', desc: 'A financial advisor drags his family from Chicago to the Missouri Ozarks, where he must launder money to appease a drug boss.', year: 2017, rating: 8.5, video: 'https://www.youtube.com/embed/aD4oZu8V0uf' },
            { id: 71, title: 'Better Call Saul', genre: 'Drama', thumb: 'https://picsum.photos/seed/better/300/450', desc: 'The trials and tribulations of criminal lawyer Jimmy McGill in the time leading up to establishing his strip-mall law office in Albuquerque, New Mexico.', year: 2015, rating: 8.9, video: 'https://www.youtube.com/embed/l5ohX5InNQD' },
            { id: 72, title: 'The Last of Us', genre: 'Drama', thumb: 'https://picsum.photos/seed/thelas/300/450', desc: 'After a global pandemic destroys civilization, a hardened survivor takes charge of a 14-year-old girl who may be humanity\'s last hope.', year: 2023, rating: 8.8, video: 'https://www.youtube.com/embed/CPDVZZLWg4d' },
            { id: 73, title: 'House of Cards', genre: 'Drama', thumb: 'https://picsum.photos/seed/houseo/300/450', desc: 'A Congressman works with his equally conniving wife to exact revenge on the people who betrayed him.', year: 2013, rating: 8.7, video: 'https://www.youtube.com/embed/hMVpzK2kP5m' },
            { id: 74, title: 'Yellowstone', genre: 'Drama', thumb: 'https://picsum.photos/seed/yellow/300/450', desc: 'A ranching family in Montana faces off against others encroaching on their land.', year: 2018, rating: 8.7, video: 'https://www.youtube.com/embed/SnZoBSnX8qV' },
            { id: 75, title: 'Dahmer', genre: 'Drama', thumb: 'https://picsum.photos/seed/dahmer/300/450', desc: 'Story of the Milwaukee Monster told from the perspective of the victims and police incompetency.', year: 2022, rating: 7.9, video: 'https://www.youtube.com/embed/GEwnSvS08DP' },
            { id: 76, title: 'Narcos', genre: 'Drama', thumb: 'https://picsum.photos/seed/narcos/300/450', desc: 'A chronicled look at the criminal exploits of Colombian drug lord Pablo Escobar.', year: 2015, rating: 8.8, video: 'https://www.youtube.com/embed/Zfl2syVTfGw' },
            { id: 77, title: 'House of Dragon', genre: 'Fantasy', thumb: 'https://picsum.photos/seed/houseo/300/450', desc: 'An internal succession war within House Targaryen at the height of its power.', year: 2022, rating: 8.4, video: 'https://www.youtube.com/embed/us5XxPXGelE' },
            { id: 78, title: 'The Rings of Power', genre: 'Fantasy', thumb: 'https://picsum.photos/seed/therin/300/450', desc: 'Epic drama set thousands of years before the events of The Lord of the Rings.', year: 2022, rating: 6.9, video: 'https://www.youtube.com/embed/NUUrXrFi1hg' },
            { id: 79, title: 'Carnival Row', genre: 'Fantasy', thumb: 'https://picsum.photos/seed/carniv/300/450', desc: 'A human detective and a fairy rekindle a dangerous affair in a Victorian fantasy world.', year: 2019, rating: 7.7, video: 'https://www.youtube.com/embed/2a7l8if9LTs' },
            { id: 80, title: 'Shadow and Bone', genre: 'Fantasy', thumb: 'https://picsum.photos/seed/shadow/300/450', desc: 'Dark forces conspire against orphan mapmaker Alina Starkov when she unleashes an extraordinary power.', year: 2021, rating: 7.5, video: 'https://www.youtube.com/embed/KqyTGRiOSFs' },
            { id: 81, title: 'The Sandman', genre: 'Fantasy', thumb: 'https://picsum.photos/seed/thesan/300/450', desc: 'Dream, the personification of dreams, sets about to reclaim his lost equipment.', year: 2022, rating: 7.7, video: 'https://www.youtube.com/embed/e8uRPd9dxDq' },
            { id: 82, title: 'Willow', genre: 'Fantasy', thumb: 'https://picsum.photos/seed/willow/300/450', desc: 'A group of mismatched heroes set off on a dangerous quest to places far beyond their home.', year: 2022, rating: 5.6, video: 'https://www.youtube.com/embed/sA7frj8Jurq' },
            { id: 83, title: 'Wheel of Time', genre: 'Fantasy', thumb: 'https://picsum.photos/seed/wheelo/300/450', desc: 'A woman named Moiraine crosses paths with five young men and women in a magical world.', year: 2021, rating: 7.1, video: 'https://www.youtube.com/embed/n1iQUZ0nuFz' },
            { id: 84, title: 'Lupin', genre: 'Thriller', thumb: 'https://picsum.photos/seed/lupin/300/450', desc: 'Gentleman thief Assane Diop sets out to avenge his father for an injustice inflicted by a wealthy family.', year: 2021, rating: 7.5, video: 'https://www.youtube.com/embed/dkeDNAlKgY1' },
            { id: 85, title: 'Dark Knight Rises', genre: 'Thriller', thumb: 'https://picsum.photos/seed/darkkn/300/450', desc: 'Batman is forced from his exile to save Gotham City from the brutal guerrilla terrorist Bane.', year: 2012, rating: 8.4, video: 'https://www.youtube.com/embed/xq1annHfHTq' },
            { id: 86, title: 'Se7en', genre: 'Thriller', thumb: 'https://picsum.photos/seed/seen/300/450', desc: 'Two detectives hunt a serial killer who uses the seven deadly sins as his motives.', year: 1995, rating: 8.6, video: 'https://www.youtube.com/embed/ySjOZT9q7mm' },
            { id: 87, title: 'Gone Girl', genre: 'Thriller', thumb: 'https://picsum.photos/seed/gonegi/300/450', desc: 'A man sees the spotlight turned on him when it\'s suspected that he may not be innocent in his wife\'s disappearance.', year: 2014, rating: 8.1, video: 'https://www.youtube.com/embed/OCfIGakiE3j' },
            { id: 88, title: 'Knives Out', genre: 'Thriller', thumb: 'https://picsum.photos/seed/knives/300/450', desc: 'A detective investigates the death of a patriarch of an eccentric, combative family.', year: 2019, rating: 7.9, video: 'https://www.youtube.com/embed/NZq21ypyBJA' },
            { id: 89, title: 'Glass Onion', genre: 'Thriller', thumb: 'https://picsum.photos/seed/glasso/300/450', desc: 'Famed Southern detective Benoit Blanc travels to Greece for his latest case.', year: 2022, rating: 7.1, video: 'https://www.youtube.com/embed/shGBH7eYnZO' },
            { id: 90, title: 'The Recruit', genre: 'Thriller', thumb: 'https://picsum.photos/seed/therec/300/450', desc: 'A CIA lawyer becomes enmeshed in dangerous international power politics.', year: 2022, rating: 7.4, video: 'https://www.youtube.com/embed/BWFuit4jAJs' },
            { id: 91, title: 'Ripley', genre: 'Thriller', thumb: 'https://picsum.photos/seed/ripley/300/450', desc: 'A grifter named Ripley is hired to begin a complex life of deceit, fraud and murder.', year: 2024, rating: 8.1, video: 'https://www.youtube.com/embed/9yowzub6LPh' }
        ];

        // Initial DB structure
        if (!db) {
            db = {
                users: [
                    { name: 'Admin', email: 'admin@streamsync.com', password: 'admin', role: 'admin', genre: 'Action' },
                    { name: 'User Biasa', email: 'user@streamsync.com', password: 'user', role: 'user', genre: 'Sci-Fi' }
                ],
                currentUser: null,
                movies: [...dummyMovies],
                comments: {}, // Format: { movieId: [{name, text, date}] }
                polls: { "Spider-Man 4": 25, "Squid Game S2": 40, "Attack on Titan": 15 },
                aiMode: 'genre' // 'genre' or 'rating'
            };
            saveDb();
        } else {
            // Auto-sync new dummy movies to existing DB
            if (db.movies.length < dummyMovies.length) {
                const existingIds = db.movies.map(m => m.id);
                const newMovies = dummyMovies.filter(m => !existingIds.includes(m.id));
                db.movies = [...db.movies, ...newMovies];
                saveDb();
            }
        }

        function saveDb() {
            localStorage.setItem(DB_KEY, JSON.stringify(db));
        }

        // Global variables
        let activeMovieId = null;

        // --- 2. VIEW CONTROLLER ---
        function switchView(viewId) {
            document.querySelectorAll('.view-section').forEach(sec => sec.classList.add('hidden'));
            document.getElementById(viewId).classList.remove('hidden');
            window.scrollTo(0, 0);

            // Update Nav Active State
            document.querySelectorAll('.nav-link').forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('data-target') === viewId) {
                    link.classList.add('active');
                }
            });

            // Call specific render logic based on view
                        if (viewId === 'view-home') renderHome();
            if (viewId === 'view-tvshows') renderTvShows();
            if (viewId === 'view-search') doSearch();
            if (viewId === 'view-polling') renderPolling();
            if (viewId === 'view-admin') renderAdmin();
        }

        // --- 3. UI RENDERING & LOGIC ---

        // Generate Movie Card HTML
        function createMovieCard(movie, index = 0) {
            let badge = '';
            if (index < 3) badge = `<div class="badge-top10">TOP 10</div>`;
            else if (Math.random() > 0.7) badge = `<div class="badge-new">Recently Added</div>`;

            return `
                <div class="movie-card" onclick="goToDetail(${movie.id})">
                    ${badge}
                    <img src="${movie.thumb.replace('300/450', '400/225')}" alt="${movie.title}" class="movie-thumb" loading="lazy">
                    <div class="movie-info">
                        ${movie.title}
                    </div>
                </div>
            `;
        }


        
        let heroInterval;
        
        function rotateHero() {
            const heroContent = document.querySelector('.hero-content');
            const heroVideo = document.getElementById('hero-video');
            const heroBanner = document.getElementById('hero-banner');
            
            // Fade out
            if(heroContent) heroContent.style.opacity = '0';
            if(heroVideo) heroVideo.style.opacity = '0';
            
            setTimeout(() => {
                const movies = db.movies;
                if(!movies || movies.length === 0) return;
                const heroMovie = movies[Math.floor(Math.random() * movies.length)];
                
                if (heroMovie.video) {
                    const videoId = heroMovie.video.split('/').pop();
                    const iframeSrc = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&start=30&loop=1&playlist=${videoId}&controls=0&enablejsapi=1&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1`;
                    if(heroVideo) heroVideo.src = iframeSrc;
                }
                
                if(heroBanner) heroBanner.style.backgroundImage = `url(${heroMovie.thumb.replace('300/450', '1200/600')})`;
                
                document.getElementById('hero-title').innerText = heroMovie.title;
                document.getElementById('hero-desc').innerText = heroMovie.desc;
                document.getElementById('hero-year').innerText = heroMovie.year;
                document.getElementById('hero-genre').innerText = heroMovie.genre;
                document.getElementById('hero-rating').innerText = heroMovie.rating;
                document.getElementById('hero-play-btn').onclick = () => goToDetail(heroMovie.id);
                
                // Fade in
                if(heroContent) heroContent.style.opacity = '1';
                if(heroVideo) heroVideo.style.opacity = '1';
            }, 500); // Wait for fade out
        }

        // Home View
        function renderHome() {
            const movies = db.movies;
            if (movies.length === 0) return;

                        // Random Hero Movie
            const heroMovie = movies[Math.floor(Math.random() * movies.length)];
            
            // Set Hero Video
            if (heroMovie.video) {
                const videoId = heroMovie.video.split('/').pop();
                const iframeSrc = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&start=30&loop=1&playlist=${videoId}&controls=0&enablejsapi=1&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1`;
                document.getElementById('hero-video').src = iframeSrc;
            }
            
            document.getElementById('hero-banner').style.backgroundImage = `url(${heroMovie.thumb.replace('300/450', '1200/600')})`;
            
            if (heroInterval) clearInterval(heroInterval);
            heroInterval = setInterval(rotateHero, 7000);
            document.getElementById('hero-title').innerText = heroMovie.title;
            document.getElementById('hero-desc').innerText = heroMovie.desc;
            document.getElementById('hero-year').innerText = heroMovie.year;
            document.getElementById('hero-genre').innerText = heroMovie.genre;
            document.getElementById('hero-rating').innerText = heroMovie.rating;
            document.getElementById('hero-play-btn').onclick = () => goToDetail(heroMovie.id);

            // Trending (Sort by rating)
            const trending = [...movies].sort((a, b) => b.rating - a.rating).slice(0, 6);
            document.getElementById('grid-trending').innerHTML = trending.map((m, i) => createMovieCard(m, i)).join('');

            // AI Recommendation
            let aiMovies = [];
            const userGenre = db.currentUser ? db.currentUser.genre : 'Action';

            if (db.aiMode === 'genre') {
                document.getElementById('ai-genre-label').innerText = `(Berdasarkan genre favoritmu: ${userGenre})`;
                aiMovies = movies.filter(m => m.genre === userGenre);
                // Fallback if not enough movies
                if (aiMovies.length < 4) {
                    aiMovies = [...aiMovies, ...movies.filter(m => m.genre !== userGenre)].slice(0, 6);
                }
            } else {
                document.getElementById('ai-genre-label').innerText = `(Berdasarkan Rating Tertinggi Global)`;
                aiMovies = [...movies].sort((a, b) => b.rating - a.rating).slice(0, 6);
            }
            document.getElementById('grid-ai').innerHTML = aiMovies.slice(0, 6).map((m, i) => createMovieCard(m, i + 3)).join('');
        }

        
        function renderTvShows() {
            const movies = db.movies;
            if(!movies || movies.length === 0) return;
            
            // Set Hero Banner
            const tvHero = document.getElementById('tvshows-hero');
            const dramaSciFiMovies = movies.filter(m => m.genre === 'Drama' || m.genre === 'Sci-Fi');
            const heroMovie = dramaSciFiMovies.length > 0 ? dramaSciFiMovies[Math.floor(Math.random() * dramaSciFiMovies.length)] : movies[0];
            
            if (tvHero) {
                tvHero.style.backgroundImage = `url(${heroMovie.thumb.replace('300/450', '1200/600')})`;
                document.getElementById('tvshows-hero-title').innerText = heroMovie.title;
                document.getElementById('tvshows-hero-desc').innerText = heroMovie.desc;
            }
            
            // Populate Rows
            const popular = [...movies].sort((a,b) => b.rating - a.rating).slice(0, 15);
            const drama = movies.filter(m => m.genre === 'Drama');
            const scifi = movies.filter(m => m.genre === 'Sci-Fi');
            const horror = movies.filter(m => m.genre === 'Horror' || m.genre === 'Thriller');
            
            const renderGrid = (id, data) => {
                const el = document.getElementById(id);
                if(el) {
                    el.innerHTML = data.map((m, i) => createMovieCard(m, 4)).join('');
                }
            };
            
            renderGrid('grid-tvshows-popular', popular);
            renderGrid('grid-tvshows-drama', drama);
            renderGrid('grid-tvshows-scifi', scifi);
            renderGrid('grid-tvshows-horror', horror);
        }

        // Search View
        function doSearch() {
            const query = document.getElementById('search-input').value.toLowerCase();
            const genre = document.getElementById('search-genre').value;

            let filtered = db.movies.filter(m => {
                const matchQuery = m.title.toLowerCase().includes(query) || m.desc.toLowerCase().includes(query);
                const matchGenre = genre === "" || m.genre === genre;
                return matchQuery && matchGenre;
            });

            const grid = document.getElementById('grid-search-results');
            const emptyState = document.getElementById('search-empty');

            if (filtered.length > 0) {
                grid.innerHTML = filtered.map((m, i) => createMovieCard(m, i + 3)).join('');
                grid.classList.remove('hidden');
                emptyState.classList.add('hidden');
            } else {
                grid.innerHTML = '';
                grid.classList.add('hidden');
                emptyState.classList.remove('hidden');
            }
        }

        // Detail View
        function goToDetail(id) {
            activeMovieId = id;
            const movie = db.movies.find(m => m.id === id);
            if (!movie) return;

            document.getElementById('detail-bg').style.backgroundImage = `url(${movie.thumb.replace('300/450', '1200/600')})`;
            document.getElementById('detail-title').innerText = movie.title;
            document.getElementById('detail-year-meta').innerText = movie.year;
            document.getElementById('detail-genre-meta').innerText = movie.genre;
            document.getElementById('detail-rating-meta').innerText = movie.rating;
            document.getElementById('detail-desc').innerText = movie.desc;

            // Set Youtube Video (fallback if none)
            const iframe = document.getElementById('detail-video');
            iframe.src = movie.video ? movie.video : "https://www.youtube.com/embed/dQw4w9WgXcQ";

            renderComments();
            switchView('view-detail');
        }

        // Komunitas Lokal (Comments)
        function renderComments() {
            const list = document.getElementById('comments-list');
            const comments = db.comments[activeMovieId] || [];

            if (comments.length === 0) {
                list.innerHTML = '<p style="color:var(--text-muted); font-style:italic;">Belum ada komentar. Jadilah yang pertama!</p>';
                return;
            }

            list.innerHTML = comments.map(c => `
                <div class="comment-item">
                    <div class="comment-header">
                        <div class="comment-avatar">${c.name.charAt(0).toUpperCase()}</div>
                        <strong style="color: var(--primary);">${c.name}</strong>
                        <span style="font-size:0.8rem; color:var(--text-muted); margin-left:10px;">${c.date}</span>
                    </div>
                    <p style="padding-left: 40px; color: #ddd;">${c.text}</p>
                </div>
            `).join('');
        }

        function addComment(e) {
            e.preventDefault();
            if (!db.currentUser) {
                alert("Harap login terlebih dahulu untuk berkomentar.");
                switchView('view-auth');
                return;
            }

            const input = document.getElementById('comment-input');
            const text = input.value.trim();
            if (!text) return;

            if (!db.comments[activeMovieId]) db.comments[activeMovieId] = [];

            db.comments[activeMovieId].push({
                name: db.currentUser.name,
                text: text,
                date: new Date().toLocaleDateString('id-ID')
            });

            saveDb();
            input.value = '';
            renderComments();
        }

        
        let isHeroMuted = true;
        function toggleMute() {
            const iframe = document.getElementById('hero-video').contentWindow;
            const btn = document.getElementById('btn-mute');
            if (isHeroMuted) {
                iframe.postMessage('{"event":"command","func":"unMute","args":""}', '*');
                btn.innerText = '🔊';
                isHeroMuted = false;
            } else {
                iframe.postMessage('{"event":"command","func":"mute","args":""}', '*');
                btn.innerText = '🔇';
                isHeroMuted = true;
            }
        }

        
        // Row Scrolling Logic
        function scrollRow(rowId, amount) {
            const row = document.getElementById(rowId);
            if(row) {
                row.scrollBy({ left: amount, behavior: 'smooth' });
                setTimeout(updateRowButtons, 400); // Check again after scroll
            }
        }

        function updateRowButtons() {
            document.querySelectorAll('.row-wrapper').forEach(wrapper => {
                const row = wrapper.querySelector('.movie-row');
                const leftBtn = wrapper.querySelector('.left-btn');
                const rightBtn = wrapper.querySelector('.right-btn');
                if(!row || !leftBtn || !rightBtn) return;
                
                if (row.scrollLeft <= 5) {
                    leftBtn.classList.add('hidden-btn');
                } else {
                    leftBtn.classList.remove('hidden-btn');
                }
                
                if (row.scrollLeft + row.clientWidth >= row.scrollWidth - 5) {
                    rightBtn.classList.add('hidden-btn');
                } else {
                    rightBtn.classList.remove('hidden-btn');
                }
            });
        }

        document.addEventListener('DOMContentLoaded', () => {
            document.querySelectorAll('.movie-row').forEach(row => {
                row.addEventListener('scroll', updateRowButtons);
            });
            window.addEventListener('resize', updateRowButtons);
            setInterval(updateRowButtons, 1000); // Polling for safety when dom changes
        });

        // Actions Features
        function downloadOffline() {
            if (!db.currentUser) return alert("Login untuk mengunduh film!");
            alert("Memulai simulasi download... Film akan tersedia di menu Offline Anda.");
        }

        function goToWatchParty() {
            switchView('view-watchparty');
        }

        function createRoom() {
            if (!db.currentUser) return alert("Login untuk membuat Watch Party!");
            const code = 'WP-' + Math.floor(1000 + Math.random() * 9000);
            alert(`Room berhasil dibuat! Bagikan kode ini ke temanmu: ${code}\n(Simulasi Watch Party Dimulai)`);
        }

        function joinRoom(e) {
            e.preventDefault();
            if (!db.currentUser) return alert("Login untuk bergabung Watch Party!");
            const code = document.getElementById('room-code-input').value;
            if (!code) return;
            alert(`Berhasil bergabung dengan room: ${code}\nMenyinkronkan pemutaran video...`);
        }

        function buyPackage(pkgName) {
            if (!db.currentUser) return alert("Silakan login untuk membeli paket.");
            alert(`Anda telah berhasil berlangganan paket ${pkgName}!\nTagihan akan dikirimkan ke email Anda.`);
        }

                // New & Popular Feature
        function renderPolling() {
            const movies = [...db.movies].sort((a, b) => b.rating - a.rating); // Sort by highest rating
            
            const grid = document.getElementById('grid-new-popular');
            if (grid) {
                // Top 3 gets TOP 10 badge, rest gets Recently Added badge
                grid.innerHTML = movies.map((m, i) => {
                    let badge = '';
                    if (i < 3) badge = `<div class="badge-top10">TOP 10</div>`;
                    else badge = `<div class="badge-new">Recently Added</div>`;
                    
                    return `
                        <div class="movie-card" style="width: 250px; height: 140px; margin-bottom: 20px;" onclick="goToDetail(${m.id})">
                            ${badge}
                            <img src="${m.thumb.replace('300/450', '400/225')}" alt="${m.title}" class="movie-thumb" loading="lazy">
                            <div class="movie-info">
                                ${m.title}
                            </div>
                        </div>
                    `;
                }).join('');
            }
        }


        // --- 4. AUTHENTICATION ---
        function updateNavState() {
            const userInfo = document.getElementById('nav-user-info');
            const btnLogin = document.getElementById('nav-btn-login');
            const btnLogout = document.getElementById('nav-btn-logout');
            const btnAdmin = document.getElementById('nav-btn-admin');

            if (db.currentUser) {
                userInfo.innerText = `Halo, ${db.currentUser.name}`;
                userInfo.classList.remove('hidden');
                btnLogout.classList.remove('hidden');
                btnLogin.classList.add('hidden');

                if (db.currentUser.role === 'admin') {
                    btnAdmin.classList.remove('hidden');
                } else {
                    btnAdmin.classList.add('hidden');
                }
            } else {
                userInfo.classList.add('hidden');
                btnLogout.classList.add('hidden');
                btnAdmin.classList.add('hidden');
                btnLogin.classList.remove('hidden');
            }
        }

        function toggleAuthMode() {
            document.getElementById('box-login').classList.toggle('hidden');
            document.getElementById('box-register').classList.toggle('hidden');
        }

        function handleLogin(e) {
            e.preventDefault();
            const email = document.getElementById('login-email').value;
            const pass = document.getElementById('login-password').value;

            const user = db.users.find(u => u.email === email && u.password === pass);
            if (user) {
                db.currentUser = user;
                saveDb();
                updateNavState();
                alert(`Selamat datang kembali, ${user.name}!`);
                switchView('view-home');
            } else {
                alert("Email atau password salah!");
            }
        }

        function handleRegister(e) {
            e.preventDefault();
            const name = document.getElementById('reg-name').value;
            const email = document.getElementById('reg-email').value;
            const pass = document.getElementById('reg-password').value;
            const genre = document.getElementById('reg-genre').value;

            if (db.users.find(u => u.email === email)) {
                return alert("Email sudah terdaftar!");
            }

            const newUser = { name, email, password: pass, role: 'user', genre };
            db.users.push(newUser);
            db.currentUser = newUser;
            saveDb();
            updateNavState();

            alert("Registrasi berhasil! Selamat menikmati StreamSync.");
            switchView('view-home');
        }

        function logout() {
            db.currentUser = null;
            saveDb();
            updateNavState();
            alert("Berhasil logout.");
            switchView('view-home');
        }

        // --- 5. ADMIN AREA ---
        function switchAdminTab(tabId) {
            document.querySelectorAll('.admin-content').forEach(el => el.classList.add('hidden'));
            document.getElementById(tabId).classList.remove('hidden');

            // Toggle active button style
            document.querySelectorAll('.admin-tab-btn').forEach(btn => {
                btn.classList.remove('btn-primary');
                btn.classList.add('btn-outline');
            });
            event.target.classList.remove('btn-outline');
            event.target.classList.add('btn-primary');
        }

        function renderAdmin() {
            if (!db.currentUser || db.currentUser.role !== 'admin') {
                alert("Akses Ditolak. Halaman ini hanya untuk admin.");
                switchView('view-home');
                return;
            }

            // Render Movies
            const mBody = document.getElementById('admin-movies-tbody');
            mBody.innerHTML = db.movies.map(m => `
                <tr>
                    <td>${m.id}</td>
                    <td><img src="${m.thumb}" width="50" style="border-radius:4px;"></td>
                    <td>${m.title}</td>
                    <td>${m.genre}</td>
                    <td>${m.rating}</td>
                    <td>
                        <button class="btn btn-danger" style="padding:5px 10px; font-size:12px;" onclick="deleteMovie(${m.id})">Hapus</button>
                    </td>
                </tr>
            `).join('');

            // Render Users
            const uBody = document.getElementById('admin-users-tbody');
            uBody.innerHTML = db.users.map(u => `
                <tr>
                    <td>${u.name}</td>
                    <td>${u.email}</td>
                    <td><span style="padding:3px 8px; border-radius:4px; font-size:12px; background:${u.role === 'admin' ? 'var(--primary)' : '#333'}; color:${u.role === 'admin' ? '#000' : '#fff'};">${u.role}</span></td>
                    <td>${u.genre}</td>
                </tr>
            `).join('');

            // Set AI config radio
            document.getElementById(db.aiMode === 'genre' ? 'ai-mode-genre' : 'ai-mode-rating').checked = true;
        }

        function deleteMovie(id) {
            if (confirm("Yakin ingin menghapus film ini?")) {
                db.movies = db.movies.filter(m => m.id !== id);
                saveDb();
                renderAdmin();
            }
        }

        function resetDummyMovies() {
            if (confirm("Yakin ingin mereset data film ke default?")) {
                db.movies = [...dummyMovies];
                saveDb();
                renderAdmin();
            }
        }

        function saveAIConfig() {
            const mode = document.querySelector('input[name="ai-mode"]:checked').value;
            db.aiMode = mode;
            saveDb();
            alert("Konfigurasi AI Rekomendasi berhasil disimpan.");
        }

        // --- INIT APP ---
        updateNavState();
        switchView('view-home');

        window.addEventListener('scroll', () => {
            const header = document.getElementById('main-header');
            if (header) {
                if (window.scrollY > 50) {
                    header.classList.add('scrolled');
                } else {
                    header.classList.remove('scrolled');
                }
            }
        });
