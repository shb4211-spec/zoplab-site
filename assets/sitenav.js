(function(){var n=document.querySelector('.zn');if(!n)return;var b=n.querySelector('.zn-btn');
b.addEventListener('click',function(){var o=n.classList.toggle('open');b.setAttribute('aria-expanded',o);b.setAttribute('aria-label',o?'메뉴 닫기':'메뉴 열기');b.textContent=o?'✕':'☰';});
n.querySelectorAll('.zn-has').forEach(function(li){var t=li.querySelector('.zn-dd');
 t.addEventListener('click',function(e){var o=li.classList.toggle('open');t.setAttribute('aria-expanded',o)});
 li.addEventListener('keydown',function(e){if(e.key==='Escape'){li.classList.remove('open');t.setAttribute('aria-expanded','false');t.focus()}
  if(e.key==='ArrowDown'){e.preventDefault();li.classList.add('open');t.setAttribute('aria-expanded','true');var a=li.querySelectorAll('.zn-sub a'),i=[].indexOf.call(a,document.activeElement);(a[i+1]||a[0]).focus()}
  if(e.key==='ArrowUp'){e.preventDefault();var a=li.querySelectorAll('.zn-sub a'),i=[].indexOf.call(a,document.activeElement);(a[i-1]||a[a.length-1]).focus()}});
 li.addEventListener('focusout',function(e){if(!li.contains(e.relatedTarget)){li.classList.remove('open');t.setAttribute('aria-expanded','false')}});});
document.addEventListener('click',function(e){n.querySelectorAll('.zn-has.open').forEach(function(li){if(!li.contains(e.target)){li.classList.remove('open');li.querySelector('.zn-dd').setAttribute('aria-expanded','false')}})});
n.querySelectorAll('.zn-sub a').forEach(function(a){a.addEventListener('click',function(){n.classList.remove('open');b.textContent='☰';b.setAttribute('aria-expanded','false')})});
var p=location.pathname;n.querySelectorAll('.zn-menu>li>a').forEach(function(a){var h=a.getAttribute('href');if(h!=='/'&&p.indexOf(h)===0)a.setAttribute('aria-current','page')});
if(p.indexOf('/about/')===0)n.querySelector('.zn-dd').setAttribute('aria-current','page');
function s(){n.classList.toggle('scrolled',scrollY>8)}addEventListener('scroll',s,{passive:true});s();
var r=document.querySelectorAll('.zs-reveal');if(!('IntersectionObserver'in window)||matchMedia('(prefers-reduced-motion: reduce)').matches){r.forEach(function(e){e.classList.add('in')});return}
var o=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');o.unobserve(e.target)}})},{threshold:.1});r.forEach(function(e){o.observe(e)});})();
