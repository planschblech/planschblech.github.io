const members = {
  vincent: {initial:'V',name:'Vincent Eckert',age:'18 Jahre',instrument:'Trompete',bio:'Spielt Trompete im Kreisorchester Bamberg und im Bezirksorchester Oberfranken des Nordbayerischen Musikbundes. Außerdem aktiv in der Stadtkapelle Bamberg, dem Jugendorchester Bamberg und dem Blasorchester Klangfusion.',tags:['Kreisorchester Bamberg','Bezirksorchester Oberfranken','Stadtkapelle Bamberg','Jugendorchester Bamberg','Klangfusion']},
  jonas: {initial:'J',name:'Jonas Hubert',age:'',instrument:'Trompete',bio:'Trompeter bei Planschblech – und Gastgeber des legendären Pools, in dem die Idee für das Ensemble entstanden ist.',tags:['Planschblech','Trompete','Forchheim']},
  julius: {initial:'J',name:'Julius Eckert',age:'',instrument:'Bariton',bio:'Sorgt mit dem Bariton für das warme Fundament und die tiefen Linien im Planschblech-Sound.',tags:['Planschblech','Bariton','Brass']},
  elias: {initial:'E',name:'Elias Froese',age:'',instrument:'Posaune',bio:'Posaunist bei Planschblech und zuständig für Druck, Groove und alles, was mit Zug noch besser klingt.',tags:['Planschblech','Posaune','Groove']},
  manuel: {initial:'M',name:'Manuel Ditze',age:'',instrument:'Posaune',bio:'Posaunist bei Planschblech. Zwischen sattem Brass-Sound, modernen Arrangements und jeder Menge Spaß auf der Bühne.',tags:['Planschblech','Posaune','Forchheim']}
};

const detail = document.getElementById('memberDetail');
function showMember(key){
  const m=members[key];
  detail.innerHTML=`<div class="member-main"><div class="avatar">${m.initial}</div><h3>${m.name}</h3>${m.age?`<p>${m.age}</p>`:''}<p>♫ &nbsp; ${m.instrument}</p></div><div class="member-bio"><p>${m.bio}</p><h4>ENSEMBLES & ORCHESTER</h4><div class="chips">${m.tags.map(t=>`<span>${t}</span>`).join('')}</div></div>`;
}
showMember('vincent');
document.querySelectorAll('.member-tab').forEach(btn=>btn.addEventListener('click',()=>{
  document.querySelectorAll('.member-tab').forEach(b=>b.classList.remove('active'));
  btn.classList.add('active');showMember(btn.dataset.member);
}));

const track=document.getElementById('galleryTrack');
document.getElementById('galleryNext').onclick=()=>track.scrollBy({left:420,behavior:'smooth'});
document.getElementById('galleryPrev').onclick=()=>track.scrollBy({left:-420,behavior:'smooth'});

const menu=document.querySelector('.menu-button');
menu.addEventListener('click',()=>{
  const h=document.querySelector('.site-header');
  h.classList.toggle('open');
  menu.setAttribute('aria-expanded',h.classList.contains('open'));
});
document.querySelectorAll('.desktop-nav a').forEach(a=>a.addEventListener('click',()=>document.querySelector('.site-header').classList.remove('open')));

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
  window.location.href=`mailto:planschblech.info@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
});

const observer=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target)}});
},{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
