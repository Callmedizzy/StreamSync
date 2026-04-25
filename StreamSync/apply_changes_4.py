import re
import random
import string

movies_data = [
    ("Mad Max Fury Road", "Action", "In a post-apocalyptic wasteland, a woman rebels against a tyrannical ruler.", 2015, 8.1),
    ("Mission Impossible", "Action", "An American agent, under false suspicion of disloyalty, must discover and expose the real spy.", 1996, 7.1),
    ("Fast Furious", "Action", "Los Angeles police officer Brian O'Conner must decide where his loyalty really lies.", 2001, 6.8),
    ("John Wick 4", "Action", "John Wick uncovers a path to defeating The High Table.", 2023, 7.7),
    ("Black Panther", "Action", "T'Challa, heir to the hidden but advanced kingdom of Wakanda, must step forward to lead his people.", 2018, 7.3),
    ("Thor Ragnarok", "Action", "Imprisoned on the planet Sakaar, Thor must race against time to return to Asgard.", 2017, 7.9),
    ("Captain America", "Action", "Steve Rogers, a rejected military soldier, transforms into Captain America.", 2011, 6.9),
    ("Transformers", "Action", "An ancient struggle between two Cybertronian races comes to Earth.", 2007, 7.0),
    ("Die Hard", "Action", "An NYPD officer tries to save his wife and several others taken hostage by German terrorists.", 1988, 8.2),
    ("Gladiator", "Action", "A former Roman General sets out to exact vengeance against the corrupt emperor.", 2000, 8.5),
    ("The Raid", "Action", "A S.W.A.T. team becomes trapped in a tenement run by a ruthless mobster.", 2011, 7.6),
    ("Extraction", "Action", "Tyler Rake, a fearless black market mercenary, embarks on the most deadly extraction of his career.", 2020, 6.7),
    ("Nobody", "Action", "A bystander who intervenes to help a woman being harassed by a group of men becomes the target of a vengeful drug lord.", 2021, 7.4),
    ("Army of Darkness", "Action", "A man is accidentally transported to 1300 A.D., where he must battle an army of the dead.", 1992, 7.4),

    ("Arrival", "Sci-Fi", "A linguist works with the military to communicate with alien lifeforms.", 2016, 7.9),
    ("Ex Machina", "Sci-Fi", "A young programmer is selected to participate in a ground-breaking experiment in synthetic intelligence.", 2014, 7.7),
    ("Blade Runner 2049", "Sci-Fi", "Young Blade Runner K's discovery of a long-buried secret leads him to track down former Blade Runner Rick Deckard.", 2017, 8.0),
    ("Tenet", "Sci-Fi", "Armed with only one word, Tenet, and fighting for the survival of the entire world.", 2020, 7.3),
    ("Gravity", "Sci-Fi", "Two astronauts work together to survive after an accident leaves them stranded in space.", 2013, 7.7),
    ("The Martian", "Sci-Fi", "An astronaut becomes stranded on Mars after his team assume him dead.", 2015, 8.0),
    ("Ready Player One", "Sci-Fi", "When the creator of a virtual reality called the OASIS dies, he makes a posthumous challenge.", 2018, 7.4),
    ("Altered Carbon", "Sci-Fi", "Set in a future where consciousness is digitized and stored.", 2018, 7.9),
    ("Dark", "Sci-Fi", "A family saga with a supernatural twist, set in a German town.", 2017, 8.7),
    ("Severance", "Sci-Fi", "Mark leads a team of office workers whose memories have been surgically divided between their work and personal lives.", 2022, 8.7),

    ("Hereditary", "Horror", "A grieving family is haunted by tragic and disturbing occurrences.", 2018, 7.3),
    ("Midsommar", "Horror", "A couple travels to Sweden to visit a rural hometown's fabled mid-summer festival.", 2019, 7.1),
    ("A Quiet Place", "Horror", "A family struggles for survival in a world where most humans have been killed by blind but noise-sensitive creatures.", 2018, 7.5),
    ("Us", "Horror", "A family's serene beach vacation turns to chaos when their doppelgängers appear and begin to terrorize them.", 2019, 6.8),
    ("Nope", "Horror", "The residents of a lonely gulch in inland California bear witness to an uncanny and chilling discovery.", 2022, 6.8),
    ("The Haunting of Hill House", "Horror", "Flashing between past and present, a fractured family confronts haunting memories of their old home.", 2018, 8.6),
    ("Annihilation", "Horror", "A biologist signs up for a dangerous, secret expedition into a mysterious zone where the laws of nature don't apply.", 2018, 6.8),
    ("The Babadook", "Horror", "A single mother and her child fall into a deep well of paranoia when an eerie children's book manifests in their home.", 2014, 6.8),
    ("Sinister", "Horror", "Washed-up true crime writer Ellison Oswalt finds a box of super 8 home movies in his new home.", 2012, 6.8),
    ("Malignant", "Horror", "Madison is paralyzed by shocking visions of grisly murders, and her torment worsens as she discovers that these waking dreams are in fact terrifying realities.", 2021, 6.2),

    ("Succession", "Drama", "The Roy family is known for controlling the biggest media and entertainment company in the world.", 2018, 8.8),
    ("Euphoria", "Drama", "A look at life for a group of high school students as they grapple with issues of drugs, sex, and violence.", 2019, 8.3),
    ("The Crown", "Drama", "Follows the political rivalries and romance of Queen Elizabeth II's reign and the events that shaped the second half of the twentieth century.", 2016, 8.6),
    ("Ozark", "Drama", "A financial advisor drags his family from Chicago to the Missouri Ozarks, where he must launder money to appease a drug boss.", 2017, 8.5),
    ("Better Call Saul", "Drama", "The trials and tribulations of criminal lawyer Jimmy McGill in the time leading up to establishing his strip-mall law office in Albuquerque, New Mexico.", 2015, 8.9),
    ("The Last of Us", "Drama", "After a global pandemic destroys civilization, a hardened survivor takes charge of a 14-year-old girl who may be humanity's last hope.", 2023, 8.8),
    ("House of Cards", "Drama", "A Congressman works with his equally conniving wife to exact revenge on the people who betrayed him.", 2013, 8.7),
    ("Yellowstone", "Drama", "A ranching family in Montana faces off against others encroaching on their land.", 2018, 8.7),
    ("Dahmer", "Drama", "Story of the Milwaukee Monster told from the perspective of the victims and police incompetency.", 2022, 7.9),
    ("Narcos", "Drama", "A chronicled look at the criminal exploits of Colombian drug lord Pablo Escobar.", 2015, 8.8),

    ("House of Dragon", "Fantasy", "An internal succession war within House Targaryen at the height of its power.", 2022, 8.4),
    ("The Rings of Power", "Fantasy", "Epic drama set thousands of years before the events of The Lord of the Rings.", 2022, 6.9),
    ("Carnival Row", "Fantasy", "A human detective and a fairy rekindle a dangerous affair in a Victorian fantasy world.", 2019, 7.7),
    ("Shadow and Bone", "Fantasy", "Dark forces conspire against orphan mapmaker Alina Starkov when she unleashes an extraordinary power.", 2021, 7.5),
    ("The Sandman", "Fantasy", "Dream, the personification of dreams, sets about to reclaim his lost equipment.", 2022, 7.7),
    ("Willow", "Fantasy", "A group of mismatched heroes set off on a dangerous quest to places far beyond their home.", 2022, 5.6),
    ("Wheel of Time", "Fantasy", "A woman named Moiraine crosses paths with five young men and women in a magical world.", 2021, 7.1),

    ("Lupin", "Thriller", "Gentleman thief Assane Diop sets out to avenge his father for an injustice inflicted by a wealthy family.", 2021, 7.5),
    ("Dark Knight Rises", "Thriller", "Batman is forced from his exile to save Gotham City from the brutal guerrilla terrorist Bane.", 2012, 8.4),
    ("Se7en", "Thriller", "Two detectives hunt a serial killer who uses the seven deadly sins as his motives.", 1995, 8.6),
    ("Gone Girl", "Thriller", "A man sees the spotlight turned on him when it's suspected that he may not be innocent in his wife's disappearance.", 2014, 8.1),
    ("Knives Out", "Thriller", "A detective investigates the death of a patriarch of an eccentric, combative family.", 2019, 7.9),
    ("Glass Onion", "Thriller", "Famed Southern detective Benoit Blanc travels to Greece for his latest case.", 2022, 7.1),
    ("The Recruit", "Thriller", "A CIA lawyer becomes enmeshed in dangerous international power politics.", 2022, 7.4),
    ("Ripley", "Thriller", "A grifter named Ripley is hired to begin a complex life of deceit, fraud and murder.", 2024, 8.1)
]

def random_string(length):
    return ''.join(random.choices(string.ascii_letters + string.digits, k=length))

new_movies_js = ""
start_id = 33
for i, m in enumerate(movies_data):
    # generate short keyword for thumb
    kw = "".join([c.lower() for c in m[0] if c.isalpha()])[:6]
    vid = random_string(11)
    
    # escape single quotes in desc
    desc = m[2].replace("'", "\\'")
    title = m[0].replace("'", "\\'")
    
    new_movies_js += f"            {{ id: {start_id+i}, title: '{title}', genre: '{m[1]}', thumb: 'https://picsum.photos/seed/{kw}/300/450', desc: '{desc}', year: {m[3]}, rating: {m[4]}, video: 'https://www.youtube.com/embed/{vid}' }},\n"

# Remove trailing comma
new_movies_js = new_movies_js.rstrip(",\n")

# Read script.js
with open('d:/StreamSync/StreamSync/script.js', 'r', encoding='utf-8') as f:
    js = f.read()

# Append movies
js = re.sub(r'(id: 32.*?\}\n)', r'\1,\n' + new_movies_js + '\n', js, flags=re.DOTALL)

# Add setInterval logic
auto_rotate_js = '''
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
'''
if "let heroInterval;" not in js:
    js = js.replace('// Home View', auto_rotate_js + '\n        // Home View')

    # Also start interval inside renderHome()
    js = js.replace('''document.getElementById('hero-banner').style.backgroundImage = `url(${heroMovie.thumb.replace('300/450', '1200/600')})`;''', '''document.getElementById('hero-banner').style.backgroundImage = `url(${heroMovie.thumb.replace('300/450', '1200/600')})`;
            
            if (heroInterval) clearInterval(heroInterval);
            heroInterval = setInterval(rotateHero, 7000);''')


with open('d:/StreamSync/StreamSync/script.js', 'w', encoding='utf-8') as f:
    f.write(js)

# Fix style.css overflow and transitions
with open('d:/StreamSync/StreamSync/style.css', 'r', encoding='utf-8') as f:
    css = f.read()

# Add transition to hero-content and hero-video
if "transition: opacity 0.5s ease;" not in css:
    css = css.replace('.hero-content {', '.hero-content {\n            transition: opacity 0.5s ease;')
    css += '\n        #hero-video { transition: opacity 0.5s ease; }'

# Add padding to movie-row
css = css.replace('padding: 20px 0;', 'padding: 40px 0; overflow: visible;')
css = css.replace('z-index: 10;', 'z-index: 100;')

with open('d:/StreamSync/StreamSync/style.css', 'w', encoding='utf-8') as f:
    f.write(css)

print("Updates applied")
