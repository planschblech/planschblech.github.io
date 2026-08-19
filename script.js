const data = window.PLANSCHBLECH;

// Startseite / Kontakt automatisch aus inhalte.js befüllen
const heroEyebrow = document.querySelector('.hero .eyebrow');
if (heroEyebrow) heroEyebrow.innerHTML = `<span></span>${data.start.untertitel}`;
const heroCopy = document.querySelector('.hero-copy');
if (heroCopy) heroCopy.textContent = data.start.beschreibung;
const heroStats = document.querySelectorAll('.hero-meta > div');
[data.start.musiker, data.start.stuecke, data.start.gegruendet].forEach((v,i)=>{ if(heroStats[i]) heroStats[i].querySelector('b').textContent=v; });

// Mitglieder
const members = Object.fromEntries(data.mitglieder.map(m => [m.id, m]));
const tabs = document.getElementById('memberTabs');
tabs.innerHTML = data.mitglieder.map((m,i)=>`<button class="member-tab ${i===0?'active':''}" data-member="${m.id}"><span>${m.initial}</span><b>${m.name}</b><small>${m.instrument}</small></button>`).join('');

const detail = document.getElementById('memberDetail');
function showMember(key){
  const m=members[key];
  detail.innerHTML=`<div class="member-main"><div class="avatar">${m.initial}</div><h3>${m.name}</h3>${m.alter?`<p>${m.alter}</p>`:''}<p>♫ &nbsp; ${m.instrument}</p></div><div class="member-bio"><p>${m.bio}</p><h4>ENSEMBLES & ORCHESTER</h4><div class="chips">${m.tags.map(t=>`<span>${t}</span>`).join('')}</div></div>`;
}
showMember(data.mitglieder[0].id);
document.querySelectorAll('.member-tab').forEach(btn=>btn.addEventListener('click',()=>{
  document.querySelectorAll('.member-tab').forEach(b=>b.classList.remove('active'));
  btn.classList.add('active'); showMember(btn.dataset.member);
}));

// Galerie
const track=document.getElementById('galleryTrack');
track.innerHTML = data.galerie.map(g=>`<figure class="gallery-card ${g.klasse||'medium'}"><img src="${g.bild}" alt="${g.titel}"><figcaption><b>${g.titel}</b><small>${g.text}</small></figcaption></figure>`).join('');
document.getElementById('galleryNext').onclick=()=>track.scrollBy({left:420,behavior:'smooth'});
document.getElementById('galleryPrev').onclick=()=>track.scrollBy({left:-420,behavior:'smooth'});

// Repertoire
const acc = document.getElementById('repertoireAccordion');
acc.innerHTML = data.repertoire.map((r,i)=>`<details ${r.offen?'open':''}><summary><span class="icon ${i%2===0?'yellow-bg':''}">${r.icon}</span><b>${r.kategorie}</b><span class="plus">+</span></summary><div class="accordion-body song-list">${r.stuecke.map(([titel,nr])=>`<span><b>${titel}</b>${nr?`<em>Nr. ${nr}</em>`:''}</span>`).join('')}</div></details>`).join('');

// Kontakt
const footerLinks = document.querySelectorAll('.footer-grid > div:nth-child(2) a');
if (footerLinks[0]) { footerLinks[0].href=`mailto:${data.kontakt.email}`; footerLinks[0].innerHTML=`✉ &nbsp; ${data.kontakt.email}`; }
if (footerLinks[1]) { footerLinks[1].href=data.kontakt.instagramLink; footerLinks[1].innerHTML=`◎ &nbsp; ${data.kontakt.instagram}`; }

// Mobile Menü
const menu=document.querySelector('.menu-button');
menu.addEventListener('click',()=>{
  const h=document.querySelector('.site-header');
  h.classList.toggle('open');
  menu.setAttribute('aria-expanded',h.classList.contains('open'));
});
document.querySelectorAll('.desktop-nav a').forEach(a=>a.addEventListener('click',()=>document.querySelector('.site-header').classList.remove('open')));

// Buchungsanfrage per Mail
 document.getElementById('bookingForm').addEventListener('submit',e=>{
  e.preventDefault();
  const type=document.getElementById('eventType').value;
  const date=document.getElementById('eventDate').value;
  const city=document.getElementById('eventCity').value;
  const name=document.getElementById('name').value;
  const email=document.getElementById('email').value;
  const message=document.getElementById('message').value;
  const subject=`Buchungsanfrage Planschblech – ${type}`;
  const body=`Hallo Planschblech,\r\n\r\nich möchte euch gerne für folgende Veranstaltung anfragen:\r\n\r\nArt: ${type}\r\nDatum: ${date||'noch offen'}\r\nOrt: ${city||'noch offen'}\r\nName: ${name}\r\nE-Mail: ${email}\r\n\r\nWeitere Infos:\r\n${message||'-'}\r\n\r\nViele Grüße\r\n${name}`;
  window.location.href=`mailto:${data.kontakt.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
});

// Einblend-Animationen
const observer=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target)}});
},{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
