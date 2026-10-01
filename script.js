// No scroll-reveal by request — everything visible on load.
// Only: mobile nav, active link, destination filter.
const toggle = document.querySelector(".menu-toggle");
const nav = document.getElementById("main-nav");
toggle.addEventListener("click", () => {
  const open = nav.classList.toggle("is-open");
  toggle.setAttribute("aria-expanded", open);
});
nav.querySelectorAll("a").forEach(a => a.addEventListener("click", () => {
  nav.classList.remove("is-open");
  toggle.setAttribute("aria-expanded", "false");
}));

const destinations = [
  { name: "Hunza Valley", tag: "FOR MOUNTAIN MORNINGS", cat: "mountain", price: "$320", img: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=900&q=80", blurb: "Apricot orchards and sunrise over Rakaposhi." },
  { name: "Santorini", tag: "FOR COAST & CALM", cat: "coast", price: "$540", img: "https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?auto=format&fit=crop&w=900&q=80", blurb: "Cliff paths and dinners at blue hour." },
  { name: "Kyoto", tag: "FOR CULTURE & CRAFT", cat: "city", price: "$610", img: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=900&q=80", blurb: "Tea houses and quiet shrine lanes." },
  { name: "Marrakech", tag: "FOR SOUKS & SPICE", cat: "city", price: "$380", img: "https://images.unsplash.com/photo-1539020140153-e479b8c22e70?auto=format&fit=crop&w=900&q=80", blurb: "Storytellers, rooftops and night markets." },
  { name: "Bali", tag: "FOR JUNGLE & SURF", cat: "coast", price: "$470", img: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=900&q=80", blurb: "Temple tides and surf with locals." },
  { name: "Swiss Alps", tag: "FOR PEAKS & RAIL", cat: "mountain", price: "$720", img: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?auto=format&fit=crop&w=900&q=80", blurb: "Ridge hikes and cheese huts on foot." },
];

const grid = document.getElementById("destGrid");
function render(filter = "all") {
  const list = destinations.filter(d => filter === "all" || d.cat === filter);
  grid.classList.toggle("two-rows", list.length > 3);
  grid.innerHTML = list.map(d => `
    <article class="showcase-card">
      <img src="${d.img}" alt="${d.name}" loading="lazy" />
      <span class="price">${d.price}</span>
      <div><span>${d.tag}</span><h3>${d.name}</h3><p>${d.blurb}</p></div>
    </article>`).join("");
}
render();
document.querySelectorAll(".chip").forEach(ch => ch.addEventListener("click", () => {
  document.querySelectorAll(".chip").forEach(c => c.classList.remove("active"));
  ch.classList.add("active");
  render(ch.dataset.filter);
}));

// Active nav highlighting without scroll animation
const links = document.querySelectorAll(".nav-link");
const sections = ["home", "destinations", "tours"].map(id => document.getElementById(id));
window.addEventListener("scroll", () => {
  let current = "home";
  sections.forEach(s => { if (s && window.scrollY >= s.offsetTop - 120) current = s.id; });
  links.forEach(l => l.classList.toggle("active", l.getAttribute("href") === "#" + current));
}, { passive: true });
