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
