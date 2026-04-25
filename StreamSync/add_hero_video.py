import re

# 1. Update index.html
with open('d:/StreamSync/StreamSync/index.html', 'r', encoding='utf-8') as f:
    html = f.read()

hero_video_html = '''            <div id="hero-banner" class="hero" style="overflow: hidden;">
                <iframe id="hero-video" class="hero-video" src="" frameborder="0" allow="autoplay; encrypted-media" style="position: absolute; top: 50%; left: 50%; width: 100vw; height: 56.25vw; min-height: 100vh; min-width: 177.77vh; transform: translate(-50%, -50%); z-index: 0; pointer-events: none;"></iframe>
                
                <div class="hero-content" style="z-index: 2;">'''

if 'id="hero-video"' not in html:
    html = html.replace('''            <div id="hero-banner" class="hero">
                <div class="hero-content">''', hero_video_html)

mute_btn_old = '''<button style="background:transparent; border:1px solid white; color:white; border-radius:50%; width:40px; height:40px; cursor:pointer; display:flex; align-items:center; justify-content:center;">🔊</button>'''
mute_btn_new = '''<button id="btn-mute" onclick="toggleMute()" style="background:transparent; border:1px solid white; color:white; border-radius:50%; width:40px; height:40px; cursor:pointer; display:flex; align-items:center; justify-content:center; z-index: 5;">🔇</button>'''

if 'id="btn-mute"' not in html:
    html = html.replace(mute_btn_old, mute_btn_new)

with open('d:/StreamSync/StreamSync/index.html', 'w', encoding='utf-8') as f:
    f.write(html)

# 2. Update style.css
with open('d:/StreamSync/StreamSync/style.css', 'r', encoding='utf-8') as f:
    css = f.read()

if 'z-index: 1;' not in css.split('.hero::before')[1][:100]:
    css = re.sub(r'\.hero::before \{', '.hero::before {\n            z-index: 1;', css)
    css = re.sub(r'\.hero::after \{', '.hero::after {\n            z-index: 1;', css)

with open('d:/StreamSync/StreamSync/style.css', 'w', encoding='utf-8') as f:
    f.write(css)

# 3. Update script.js
with open('d:/StreamSync/StreamSync/script.js', 'r', encoding='utf-8') as f:
    js = f.read()

render_home_update = '''            // Random Hero Movie
            const heroMovie = movies[Math.floor(Math.random() * movies.length)];
            
            // Set Hero Video
            if (heroMovie.video) {
                const videoId = heroMovie.video.split('/').pop();
                const iframeSrc = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&start=30&loop=1&playlist=${videoId}&controls=0&enablejsapi=1&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1`;
                document.getElementById('hero-video').src = iframeSrc;
            }
            
            document.getElementById('hero-banner').style.backgroundImage = `url(${heroMovie.thumb.replace('300/450', '1200/600')})`;'''

if 'document.getElementById(\'hero-video\').src' not in js:
    js = re.sub(r'// Random Hero Movie.*?document\.getElementById\(\'hero-banner\'\)\.style\.backgroundImage = `url\(\$\{heroMovie\.thumb\.replace\(\'300/450\', \'1200/600\'\)\}\)`;', render_home_update, js, flags=re.DOTALL)

toggle_mute_js = '''
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
'''

if "function toggleMute" not in js:
    js = js.replace('// Actions Features', toggle_mute_js + '\n        // Actions Features')

with open('d:/StreamSync/StreamSync/script.js', 'w', encoding='utf-8') as f:
    f.write(js)

print("Success")
