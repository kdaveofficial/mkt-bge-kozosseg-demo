const events = [
  { id: "quiz", workbookId: "EVT009", title: "Kvíz Est", type: "KÖZÖSSÉGI PROGRAM", date: "2026-10-19", day: "19", month: "OKT", weekday: "Hétfő", time: "18:00", endTime: "20:00", place: "BGE, Markó utca", description: "Egy este, ahol a jó hangulat, a csapatmunka és a meglepő kérdések találkoznak.", tone: "blue", registered: false, registrationCount: 3, isQuiz: true, published: true, sourceStatus: "Folyamatban", sourceType: "Egyéb", responsible: "Minta tag 003", division: "Szervezés és Fejlesztés", hours: 4, baseCoverImage: "mkt-bge-kvizest-banner.svg" },
  { id: "minddiak", workbookId: "EVT010", title: "MindDiák workshop", type: "WORKSHOP", date: "2026-10-26", day: "26", month: "OKT", weekday: "Hétfő", time: "17:00", endTime: "19:00", place: "BGE, Markó utca", description: "Gyakorlati workshop és beszélgetés a munka világáról, közvetlenül a MindDiák csapatával.", tone: "green", registered: false, registrationCount: 0, published: true, sourceStatus: "Tervezett", sourceType: "Workshop", responsible: "Minta tag 004", division: "Vállalati Kapcsolatok", hours: 4 },
  { id: "halloween", workbookId: "EVT011", title: "Halloweeni est", type: "KÖZÖSSÉGI PROGRAM", date: "2026-11-02", day: "02", month: "NOV", weekday: "Hétfő", time: "19:00", endTime: "22:00", place: "Helyszín hamarosan", description: "Készülj egy közös estére, jelmezre és néhány kellemesen hátborzongató meglepetésre.", tone: "gold", registered: false, registrationCount: 0, published: true, sourceStatus: "Tervezett", sourceType: "Egyéb", responsible: "Minta tag 011", division: "Szervezés és Fejlesztés", hours: 6 },
  { id: "erste", workbookId: "EVT012", title: "Erste Bank előadás", type: "ELŐADÁS", date: "2026-11-16", day: "16", month: "NOV", weekday: "Hétfő", time: "16:30", endTime: "18:00", place: "BGE, Markó utca", description: "Ismerd meg közelebbről a pénzügyi szektor lehetőségeit és az Erste szakembereinek tapasztalatait.", tone: "blue", registered: false, registrationCount: 0, published: true, sourceStatus: "Tervezett", sourceType: "Előadás", responsible: "Minta tag 004", division: "Vállalati Kapcsolatok", hours: 2 },
  { id: "community", workbookId: "EVT013", title: "3. közösségi program", type: "KÖZÖSSÉGI PROGRAM", date: "2026-12-04", day: "04", month: "DEC", weekday: "Péntek", time: "18:00", endTime: "21:00", place: "Helyszín hamarosan", description: "Évzáró találkozó és közös program az MKT BGE tagjainak.", tone: "pink", registered: false, registrationCount: 0, published: true, sourceStatus: "Tervezett", sourceType: "Egyéb", responsible: "Minta tag 011", division: "Szervezés és Fejlesztés", hours: 4 }
];

// Completed events and aggregates transcribed from ESEMÉNYEK / AKTIVITÁS.
const pastEvents = [
  { id: "EVT007", title: "FIKOT", date: "2026-10-10", type: "Konferencia", responsible: "Minta tag 072", division: "Tagság", hours: 12, attended: 6, noShow: 0, notRegistered: 0, points: 24, records: 6, audience: "Opcionális" },
  { id: "EVT006", title: "Beavató – újonnan felvettek", date: "2026-10-08", type: "Workshop", responsible: "Minta tag 011", division: "Tagság", hours: 4, attended: 20, noShow: 1, notRegistered: 0, points: 105, records: 21, audience: "Mindenki" },
  { id: "EVT005", title: "Tagfelvételi időszak (2 hét)", date: "2026-09-22", type: "Meeting", responsible: "Minta tag 011", division: "Elnökség", hours: 10, attended: 6, noShow: 0, notRegistered: 0, points: 43, records: 6, audience: "Teljes elnökség" },
  { id: "EVT004", title: "Marketing Summit", date: "2026-09-17", type: "Konferencia", responsible: "Minta tag 011", division: "Szervezés és Fejlesztés", hours: 8, attended: 7, noShow: 1, notRegistered: 1, points: 41, records: 9, audience: "Opcionális" },
  { id: "EVT003", title: "Diákszervezeti Börze", date: "2026-09-16", type: "Toborzás", responsible: "Minta tag 017", division: "Kommunikáció és Marketing", hours: 5, attended: 4, noShow: 0, notRegistered: 0, points: 37, records: 4, audience: "Opcionális", note: "Csak néhány tag vett részt; nem volt kötelező." },
  { id: "EVT015", title: "Kötelező meeting – marketing", date: "2026-09-10", type: "Meeting", responsible: "Minta tag 017 / Minta tag 016", division: "Kommunikáció és Marketing", hours: 4, attended: 6, noShow: 1, notRegistered: 0, points: 28, records: 7, audience: "Kommunikáció és Marketing" },
  { id: "EVT002", title: "AI Summit", date: "2026-09-07", type: "Konferencia", responsible: "Minta tag 011", division: "Szervezés és Fejlesztés", hours: 8, attended: 7, noShow: 6, notRegistered: 0, points: 38, records: 13, audience: "Opcionális" },
  { id: "EVT001", title: "Gólyatali", date: "2026-08-06", type: "Toborzás", responsible: "Minta tag 001", division: "Elnökség", hours: 8, attended: 13, noShow: 0, notRegistered: 0, points: 123, records: 13, audience: "Opcionális" }
];

const COVER_STORAGE_KEY = "mkt-bge-event-covers-v1";
const EVENT_STORAGE_KEY = "mkt-bge-events-v1";
const EVENT_WORKBOOK_SYNC_KEY = "mkt-bge-event-workbook-sync-v1";
const EVENT_WORKBOOK_REVISION = "2026-10-16-v2";
const QUIZ_HISTORY_KEY = "mkt-bge-quiz-history-v1";
let selectedAdminEventId = "quiz";
let deletedEventIds = [];
let pendingCoverImage = "";
let pendingCoverPosition = null;
let eventWorkbookRefreshPending = false;
try {
  const savedEvents = JSON.parse(localStorage.getItem(EVENT_STORAGE_KEY) || "{}");
  eventWorkbookRefreshPending = localStorage.getItem(EVENT_WORKBOOK_SYNC_KEY) !== EVENT_WORKBOOK_REVISION;
  deletedEventIds = Array.isArray(savedEvents.__deletedEventIds) ? savedEvents.__deletedEventIds : [];
  events.forEach(item => { if (savedEvents[item.id]) Object.assign(item, savedEvents[item.id]); });
  // Remove old local-only drafts during the workbook refresh; they are not source events.
  if (Array.isArray(savedEvents.__newEvents) && !eventWorkbookRefreshPending) events.push(...savedEvents.__newEvents);
  events.forEach(item => { if (item.published === undefined) item.published = true; });
  for (let index = events.length - 1; index >= 0; index--) if (deletedEventIds.includes(events[index].id)) events.splice(index, 1);
} catch (error) { console.warn("Az eseményadatok nem tölthetők be.", error); }
if (eventWorkbookRefreshPending) {
  const workbookEvents = {
    EVT009: { title: "Kvíz Est", date: "2026-10-19" },
    EVT010: { title: "MindDiák workshop", date: "2026-10-26" },
    EVT011: { title: "Halloweeni est", date: "2026-11-02" },
    EVT012: { title: "Erste Bank előadás", date: "2026-11-16" },
    EVT013: { title: "3. közösségi program", date: "2026-12-04" }
  };
  events.forEach(item => {
    const source = workbookEvents[item.workbookId];
    if (!source) return;
    Object.assign(item, source);
    const date = new Date(`${item.date}T12:00:00`);
    item.day = item.date.slice(-2);
    item.month = new Intl.DateTimeFormat("hu-HU", { month: "short" }).format(date).replace(/\.$/, "").toLocaleUpperCase("hu");
    item.weekday = new Intl.DateTimeFormat("hu-HU", { weekday: "long" }).format(date).replace(/^./, character => character.toLocaleUpperCase("hu"));
  });
}
try {
  const savedCovers = JSON.parse(localStorage.getItem(COVER_STORAGE_KEY) || "{}");
  events.forEach(item => {
    const saved = savedCovers[item.id];
    if (typeof saved === "string" && saved.startsWith("data:image/")) {
      item.coverImage = saved;
    } else if (saved && typeof saved === "object") {
      if (typeof saved.image === "string" && saved.image.startsWith("data:image/")) item.coverImage = saved.image;
      if (Number.isFinite(saved.x)) item.coverPositionX = Math.max(0, Math.min(100, saved.x));
      if (Number.isFinite(saved.y)) item.coverPositionY = Math.max(0, Math.min(100, saved.y));
      if (Number.isFinite(saved.zoom)) item.coverZoom = Math.max(100, Math.min(180, saved.zoom));
    }
  });
} catch (error) {
  console.warn("Az elmentett eseményháttér-képek nem tölthetők be.", error);
}
let quizHistory = { one: { registered: "", attended: "" }, two: { registered: "", attended: "" } };
try { quizHistory = { ...quizHistory, ...JSON.parse(localStorage.getItem(QUIZ_HISTORY_KEY) || "{}") }; } catch (error) { console.warn("A korábbi kvízadatok nem tölthetők be.", error); }

const demoMembers = [
  { id: "DEMO024", initials: "MK", name: "Minta tag 01", division: "Kommunikáció és Marketing", checked: true },
  { id: "DEMO028", initials: "MK", name: "Minta tag 02", division: "Tagság", checked: false },
  { id: "DEMO031", initials: "MK", name: "Minta tag 03", division: "Szervezés és Fejlesztés", checked: false }
];
const leadershipMembers = [
  { id: "DEMO001", name: "Minta tag 001", division: "Elnökség" },
  { id: "DEMO002", name: "Minta tag 002", division: "Elnökség" },
  { id: "DEMO003", name: "Minta tag 003", division: "Elnökség" },
  { id: "DEMO004", name: "Minta tag 004", division: "Vállalati Kapcsolatok" },
  { id: "DEMO011", name: "Minta tag 011", division: "Szervezés és Fejlesztés" },
  { id: "DEMO016", name: "Minta tag 016", division: "Kommunikáció és Marketing" },
  { id: "DEMO017", name: "Minta tag 017", division: "Kommunikáció és Marketing" }
];
const CURRENT_PROFILE_STORAGE_KEY = "mkt-bge-current-profile-v1";
const currentProfileDefaults = { ...((window.mktMemberProfileData?.members || []).find(member => member.id === "DEMO003") || { id: "DEMO003", name: "Minta tag 003", major: "GIF", division: "Elnökség", position: "Elnökségi koordinátor", executive: true, active: true }), neptun: "DEMO01", email: "demo@example.invalid", activityId: "DEMO003" };
let currentProfileData = { ...currentProfileDefaults };
try { currentProfileData = { ...currentProfileDefaults, ...JSON.parse(localStorage.getItem(CURRENT_PROFILE_STORAGE_KEY) || "{}"), activityId: currentProfileDefaults.activityId }; } catch (error) { console.warn("A profiladatok nem tölthetők be.", error); }
let currentMember = { id: currentProfileData.id, name: currentProfileData.name, division: currentProfileData.division, executive: Boolean(currentProfileData.executive) };
events.forEach(item => {
  if (!Array.isArray(item.registeredMemberIds)) item.registeredMemberIds = [];
  if (item.registered && !item.registeredMemberIds.includes(currentProfileData.activityId || currentProfileData.id)) item.registeredMemberIds.push(currentProfileData.activityId || currentProfileData.id);
  if (item.registeredMemberIds.includes(currentProfileData.activityId || currentProfileData.id)) item.registered = true;
});

const audienceDivisions = ["Elnökség", "Vállalati Kapcsolatok", "Szervezés és Fejlesztés", "Kommunikáció és Marketing", "Tagság"];
function normalizeAudience(item) {
  if (item.audienceType === "optional" || item.audienceType === "open" || item.audienceType === "executive" || item.audienceType === "division") return;
  const legacy = item.audience || "Opcionális";
  if (legacy === "Teljes elnökség") item.audienceType = "executive";
  else if (legacy === "Mindenki" || legacy === "Opcionális") item.audienceType = "optional";
  else if (audienceDivisions.includes(legacy)) { item.audienceType = "division"; item.targetDivision ||= legacy; }
  else item.audienceType = "optional";
}
function audienceLabel(item) {
  normalizeAudience(item);
  if (item.audienceType === "open") return "Nyílt";
  if (item.audienceType === "executive") return "Teljes elnökség";
  if (item.audienceType === "division") return `Divízió · ${item.targetDivision || "nincs kiválasztva"}`;
  return item.mandatory ? "Kötelező minden tag" : "Minden tag";
}
function isEventVisibleToMember(item, member = currentMember) {
  normalizeAudience(item);
  if (item.audienceType === "executive") return Boolean(member.executive || member.division === "Elnökség");
  if (item.audienceType === "division") return item.targetDivision === member.division;
  return true;
}

const viewTitles = { home: "Áttekintés", events: "Események", projects: "Projektek", "project-detail": "Projekt részletei", activity: "Aktivitásom", card: "Tagkártyám", profile: "Profilom", "public-profile": "Tagi profil", admin: "Szervezői eseménykezelés", "admin-event": "Esemény kezelése", "admin-home": "Adminisztráció", "admin-member-profile": "Tag profil", "admin-members": "Tag kezelése", "event-detail": "Esemény részletei" };
const toast = document.getElementById("toast");
let toastTimer;
function showToast(message) { toast.textContent = message; toast.classList.add("show"); clearTimeout(toastTimer); toastTimer = setTimeout(() => toast.classList.remove("show"), 2500); }

function showView(name) {
  const role = currentAppRole();
  const adminOnlyViews = ["admin-home", "admin-member-profile", "admin-members"];
  if ((adminOnlyViews.includes(name) && role !== "admin") || (["admin", "admin-event"].includes(name) && role === "member")) {
    showToast(role === "member" ? "Ehhez a funkcióhoz kezelői vagy admin szerepkör szükséges." : "Ehhez a funkcióhoz admin szerepkör szükséges.");
    name = role === "manager" ? "events" : "home";
  }
  if (["projects", "project-detail"].includes(name) && !canAccessProjects()) {
    showToast("A Projektek oldal nem érhető el a Tagság divízió számára.");
    name = "events";
  }
  const target = document.getElementById(`view-${name}`);
  if (!target) return;
  if (name === "projects") renderProjects();
  document.querySelectorAll(".view").forEach(view => view.classList.toggle("active", view === target));
  const navView = name === "public-profile" ? "events" : name === "event-detail" ? detailReturnView : name === "project-detail" ? projectDetailReturnView : name;
  const activeNav = navView === "admin" || navView === "admin-event" ? "events" : navView;
  document.querySelectorAll(".primary-nav [data-view], .mobile-nav [data-view]").forEach(button => button.classList.toggle("active", button.dataset.view === activeNav));
  document.getElementById("crumb-title").textContent = viewTitles[name] || "Áttekintés";
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function setTopUserMenu(open) {
  const menu = document.getElementById("top-user-dropdown");
  const trigger = document.getElementById("top-user-button");
  menu.hidden = !open;
  trigger.setAttribute("aria-expanded", String(open));
}

function eventMarkup(event, compact = false) {
  if (compact) return `<article class="upcoming-event" data-event-detail="${event.id}" role="button" tabindex="0" aria-label="${event.title} részletei"><div class="date-block"><small>${event.month}</small><b>${event.day}</b></div><div class="event-info"><b>${event.title}</b><small>${event.time}<span>·</span>${event.place}</small></div><span class="event-tag">${event.type === "WORKSHOP" ? "Workshop" : event.type === "ELŐADÁS" ? "Előadás" : "Közösségi"}</span></article>`;
  const image = event.coverImage || event.baseCoverImage;
  const positionX = event.coverPositionX ?? 50;
  const positionY = event.coverPositionY ?? 50;
  const zoom = event.coverZoom ?? 100;
  const coverImage = image ? `<img class="event-cover-image" src="${image}" alt="" style="object-position:${positionX}% ${positionY}%;transform:scale(${zoom / 100})" />` : "";
  const expected = event.registrationCount > 0 ? `${event.registrationCount} jelentkező${event.isQuiz && getQuizPrediction(event.registrationCount) != null ? ` · kb. ${getQuizPrediction(event.registrationCount)} megjelenő` : ""}` : "Még nincs jelentkező";
  const staff = eventStaffSummary(event);
  return `<article class="event-card" data-event-detail="${event.id}" role="button" tabindex="0" aria-label="${event.title} részletei"><div class="event-card-cover ${event.tone} ${image ? "has-image" : ""}">${coverImage}<span class="event-cover-label">${event.type}</span>${event.mandatory ? `<span class="event-cover-required">KÖTELEZŐ</span>` : ""}<span class="event-cover-date"><small>${event.month}</small><b>${event.day}</b></span></div><div class="event-card-body"><h3>${event.title}</h3><div class="event-details"><span>◷ ${event.weekday}, ${formatDate(event.date)} · ${event.time}</span><span>⌖ ${event.place}</span></div><p class="event-description">${event.description}</p>${staff ? `<p class="event-staff-summary">${staff}</p>` : ""}<div class="event-card-actions"><span class="event-capacity">${expected}</span><button class="register-button ${event.registered ? "registered" : ""}" data-register="${event.id}">${event.registered ? "✓ Jelentkeztél" : "＋ Regisztrálok"}</button></div></div></article>`;
}

const staffRoles = { organizer: "Szervező", eventResponsible: "Esemény felelős", projectLead: "Projektvezető", other: "Egyéb közreműködő" };
const staffRolePoints = { organizer: 3, eventResponsible: 5, projectLead: 5, other: 0, lead: 5 };
function assignedInRole(entry, role) { return entry.role === role || (role === "eventResponsible" && entry.role === "lead"); }
const activeNonLeadershipMembers = window.mktActiveNonLeadershipMembers || [];
function eventStaffSummary(item) {
  return Object.entries(staffRoles).map(([role, label]) => {
    const names = (item.assignments || []).filter(entry => assignedInRole(entry, role)).map(entry => entry.name || memberById(entry.memberId)?.name).filter(Boolean);
    return names.length ? `${label}: ${names.join(", ")}` : "";
  }).filter(Boolean).join(" · ");
}

function getQuizPrediction(registrations) {
  const rates = [quizHistory.one, quizHistory.two].filter(row => row?.registered !== "" && row?.attended !== "" && Number(row.registered) > 0 && Number(row.attended) >= 0 && Number(row.attended) <= Number(row.registered)).map(row => Number(row.attended) / Number(row.registered));
  return rates.length ? Math.round(registrations * rates.reduce((sum, rate) => sum + rate, 0) / rates.length) : null;
}

function persistEvents() {
  try {
    const saved = Object.fromEntries(events.filter(item => !item.id.startsWith("new-")).map(item => [item.id, {
      title: item.title, date: item.date, time: item.time, endTime: item.endTime, place: item.place, day: item.day, month: item.month,
      weekday: item.weekday, isQuiz: Boolean(item.isQuiz), registrationCount: item.registrationCount ?? 0, registeredMemberIds: item.registeredMemberIds || [], assignments: item.assignments || [],
      audienceType: item.audienceType || "optional", targetDivision: item.targetDivision || "", published: Boolean(item.published), mandatory: Boolean(item.mandatory)
    }]));
    saved.__newEvents = events.filter(item => item.id.startsWith("new-"));
    saved.__deletedEventIds = deletedEventIds;
    localStorage.setItem(EVENT_STORAGE_KEY, JSON.stringify(saved));
    return true;
  } catch (error) { showToast("Az eseményadatokat nem sikerült menteni a böngészőbe."); return false; }
}

if (eventWorkbookRefreshPending && persistEvents()) {
  try { localStorage.setItem(EVENT_WORKBOOK_SYNC_KEY, EVENT_WORKBOOK_REVISION); }
  catch (error) { console.warn("Az Excel-eseménylista frissítési állapota nem menthető.", error); }
}

let heroSlides = [];
let heroSlideIndex = 0;
let heroTransitionTimer = null;

function renderHeroNextEvent() {
  const now = new Date();
  const today = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}-${String(now.getDate()).padStart(2, "0")}`;
  const nextEvent = events
    .filter(event => event.published && event.date >= today && isEventVisibleToMember(event))
    .sort((a, b) => a.date.localeCompare(b.date) || (a.time || "").localeCompare(b.time || ""))[0];
  const nextProject = visibleProjects()
    .filter(project => project.date && project.date >= today && String(project.status || "").trim().toLocaleLowerCase("hu") !== "lezajlott")
    .sort((a, b) => a.date.localeCompare(b.date))[0];
  heroSlides = [
    nextEvent
      ? { ...nextEvent, slideId: "event", slideType: "event", slideLabel: "KÖVETKEZŐ KÖZÖS ÉLMÉNY" }
      : { slideId: "event", slideType: "empty-event", slideLabel: "KÖVETKEZŐ KÖZÖS ÉLMÉNY" },
    nextProject
      ? { ...nextProject, slideId: "project", slideType: "project", slideLabel: "PROJEKT" }
      : { slideId: "project", slideType: "empty-project", slideLabel: "PROJEKT" }
  ];
  heroSlideIndex = heroSlideIndex === 1 ? 1 : 0;

  const month = document.getElementById("hero-event-month");
  const day = document.getElementById("hero-event-day");
  const weekday = document.getElementById("hero-event-weekday");
  const title = document.getElementById("hero-next-event-name");
  const headline = document.getElementById("hero-slide-title");
  const kind = document.getElementById("hero-slide-kind");
  const description = document.getElementById("hero-slide-description");
  const action = document.getElementById("hero-slide-action");
  const controls = document.getElementById("hero-carousel-controls");
  const count = document.getElementById("hero-slide-count");
  const calendar = document.getElementById("hero-slide-calendar");
  const projectMark = document.getElementById("hero-project-mark");
  const slide = heroSlides[heroSlideIndex];

  calendar.hidden = slide.slideType === "empty-project";
  projectMark.hidden = slide.slideType !== "empty-project";
  const hasDate = Boolean(slide.date);
  const date = hasDate ? new Date(`${slide.date}T12:00:00`) : null;
  month.textContent = date ? new Intl.DateTimeFormat("hu-HU", { month: "short" }).format(date).replace(/\.$/, "").toLocaleUpperCase("hu") : "—";
  day.textContent = date ? String(date.getDate()).padStart(2, "0") : "–";
  weekday.textContent = date ? new Intl.DateTimeFormat("hu-HU", { weekday: "long" }).format(date).toLocaleUpperCase("hu") : "";
  kind.textContent = slide.slideLabel;
  if (slide.slideType === "event") {
    headline.textContent = "Vár a következő közös élmény.";
    title.textContent = slide.title;
    description.textContent = [slide.time, slide.place].filter(Boolean).join(" · ") || slide.description || "Nyisd meg a program részleteit.";
    action.hidden = false;
    action.textContent = "Esemény részletei →";
  } else if (slide.slideType === "project") {
    headline.textContent = "Elvégzendő feladataim";
    title.textContent = slide.title;
    description.textContent = [slide.responsible, slide.description || slide.note].filter(Boolean).join(" · ") || "Nyisd meg a projekt részleteit.";
    action.hidden = false;
    action.textContent = "Projekt részletei →";
  } else if (slide.slideType === "empty-project") {
    headline.textContent = "Elvégzendő feladataim";
    title.textContent = "Jelenleg nincs hozzád rendelt projekt";
    description.textContent = "Ha új projekted van, itt fog megjelenni.";
    action.hidden = !canAccessProjects();
    action.textContent = "Projektek megtekintése →";
  } else {
    headline.textContent = "Vár a következő közös élmény.";
    title.textContent = "Vár a következő közös élmény.";
    description.textContent = "Hamarosan új programokkal jelentkezünk. Nézd meg az eseménynaptárt!";
    action.hidden = false;
    action.textContent = "Események megtekintése →";
  }
  action.dataset.heroAction = slide.slideType;
  count.textContent = `${heroSlideIndex + 1} / 2`;
  controls.hidden = false;
}

function moveHeroSlide(direction) {
  if (heroSlides.length < 2) return;
  const card = document.getElementById("home-hero");
  if (heroTransitionTimer) window.clearTimeout(heroTransitionTimer);
  card.classList.add("is-changing");
  heroTransitionTimer = window.setTimeout(() => {
    heroSlideIndex = (heroSlideIndex + direction + heroSlides.length) % heroSlides.length;
    renderHeroNextEvent();
    window.requestAnimationFrame(() => card.classList.remove("is-changing"));
    heroTransitionTimer = null;
  }, 170);
}

document.getElementById("hero-slide-prev").addEventListener("click", () => moveHeroSlide(-1));
document.getElementById("hero-slide-next").addEventListener("click", () => moveHeroSlide(1));
document.getElementById("hero-slide-action").addEventListener("click", event => {
  const slide = heroSlides[heroSlideIndex];
  if (slide.slideType === "project") openProjectDetail(slide.id, "home");
  else if (slide.slideType === "empty-project") showView("projects");
  else if (slide.slideType === "event") openEventDetail(slide.id, "home");
  else showView("events");
});
document.getElementById("home-hero").addEventListener("keydown", event => {
  if (event.key === "ArrowLeft") { event.preventDefault(); moveHeroSlide(-1); }
  if (event.key === "ArrowRight") { event.preventDefault(); moveHeroSlide(1); }
});
let heroTouchStartX = null;
document.getElementById("home-hero").addEventListener("touchstart", event => {
  if (event.target.closest("button")) { heroTouchStartX = null; return; }
  heroTouchStartX = event.changedTouches[0]?.clientX ?? null;
}, { passive: true });
document.getElementById("home-hero").addEventListener("touchend", event => {
  if (heroTouchStartX == null) return;
  const delta = event.changedTouches[0].clientX - heroTouchStartX;
  heroTouchStartX = null;
  if (Math.abs(delta) > 45) moveHeroSlide(delta < 0 ? 1 : -1);
}, { passive: true });
window.setInterval(() => {
  if (!document.hidden && document.getElementById("view-home").classList.contains("active")) moveHeroSlide(1);
}, 10000);

function renderEvents() {
  renderHeroNextEvent();
  const memberEvents = events.filter(event => event.published && isEventVisibleToMember(event));
  document.getElementById("upcoming-events").innerHTML = memberEvents.slice(0, 3).map(event => eventMarkup(event, true)).join("");
  const filter = document.querySelector(".filter-tab.selected")?.dataset.filter || "all";
  const visible = filter === "registered" ? memberEvents.filter(event => event.registered) : memberEvents;
  document.getElementById("all-events").innerHTML = visible.map(event => eventMarkup(event)).join("");
  const registeredCount = memberEvents.filter(event => event.registered).length;
  document.querySelector('[data-filter="all"] span').textContent = memberEvents.length;
  document.querySelector('[data-filter="registered"] span').textContent = registeredCount;
}

function memberById(id) {
  if (id === currentProfileData.id || id === currentProfileData.activityId) return { ...currentProfileData, id: currentProfileData.id };
  return [...memberProfiles, ...leadershipMembers, ...activeNonLeadershipMembers, ...demoMembers].find(member => member.id === id);
}

function memberPhotoSource(member) {
  if (member?.id === currentProfileData.id || member?.id === currentProfileData.activityId) return currentProfileData.photo || member.photo || "";
  return member?.photo || "";
}

function registeredMembersForEvent(item) {
  return [...new Set(item.registeredMemberIds || [])].map(memberById).filter(member => member && member.active !== false);
}

function registeredMembersMarkup(item) {
  const members = registeredMembersForEvent(item);
  const total = Number(item.registrationCount || members.length);
  const unmatched = Math.max(0, total - members.length);
  const list = members.map(member => {
    const photo = memberPhotoSource(member);
    const initials = String(member.name || "MKT").trim().split(/\s+/).slice(0, 2).map(part => part[0]).join("").toLocaleUpperCase("hu");
    const avatar = photo
      ? `<span class="registered-member-avatar"><img src="${escapeHtml(photo)}" alt="" /></span>`
      : `<span class="registered-member-avatar">${escapeHtml(initials)}</span>`;
    const removeButton = currentAppRole() === "admin"
      ? `<button type="button" class="registered-member-remove" data-registration-remove="${escapeHtml(item.id)}" data-registration-member="${escapeHtml(member.id)}" aria-label="${escapeHtml(member.name)} regisztrációjának törlése">×</button>`
      : "";
    return `<div class="registered-member-row"><button type="button" class="registered-member" data-registered-member="${escapeHtml(member.id)}" aria-label="${escapeHtml(member.name)} profiljának megnyitása">${avatar}<span>${escapeHtml(member.name)}</span></button>${removeButton}</div>`;
  }).join("");
  const note = unmatched
    ? `<p class="registered-members-note">${members.length ? `${unmatched} korábbi regisztrációhoz` : `${unmatched} regisztrációhoz`} még nem tartozik megjeleníthető tagprofil.</p>`
    : !members.length ? `<p class="registered-members-note">Még senki sem regisztrált.</p>` : "";
  return `<section class="panel registered-members-panel"><div class="panel-heading"><div><div class="eyebrow">KÖZÖSSÉG</div><h2>Regisztrált tagok <span class="muted-count">${total} fő</span></h2></div></div><div class="registered-members-list">${list || ""}</div>${note}</section>`;
}

function toggleCurrentMemberRegistration(item) {
  if (!item) return;
  const memberId = currentProfileData.activityId || currentProfileData.id;
  item.registeredMemberIds ||= [];
  item.registered = !item.registered;
  if (item.registered) {
    if (!item.registeredMemberIds.includes(memberId)) item.registeredMemberIds.push(memberId);
    item.registrationCount = (item.registrationCount || 0) + 1;
  } else {
    item.registeredMemberIds = item.registeredMemberIds.filter(id => id !== memberId);
    item.registrationCount = Math.max(0, (item.registrationCount || 0) - 1);
  }
}

function removeRegisteredMember(eventId, memberId) {
  if (currentAppRole() !== "admin") {
    showToast("Más tag regisztrációját csak admin kezelheti.");
    return;
  }
  const item = events.find(entry => entry.id === eventId);
  if (!item || !Array.isArray(item.registeredMemberIds) || !item.registeredMemberIds.includes(memberId)) return;

  const previousIds = [...item.registeredMemberIds];
  const previousCount = Number(item.registrationCount || 0);
  const previousRegistered = item.registered;
  item.registeredMemberIds = item.registeredMemberIds.filter(id => id !== memberId);
  item.registrationCount = Math.max(0, previousCount - 1);
  if (memberId === (currentProfileData.activityId || currentProfileData.id)) item.registered = false;

  if (!persistEvents()) {
    item.registeredMemberIds = previousIds;
    item.registrationCount = previousCount;
    item.registered = previousRegistered;
    return;
  }

  renderEvents();
  renderAdminEvents();
  renderCheckins();
  if (document.getElementById("view-event-detail").classList.contains("active")) {
    openEventDetail(item.id, detailReturnView);
  }
  showToast("A tag eseményregisztrációját töröltük.");
}

let publicProfileReturnView = "event-detail";
function openPublicMemberProfile(memberId) {
  const member = memberById(memberId);
  if (!member) { showToast("A tag profilja nem található."); return; }
  publicProfileReturnView = document.querySelector(".view.active")?.id.replace("view-", "") || "event-detail";
  const name = String(member.name || "MKT BGE tag").trim();
  const initials = name.split(/\s+/).slice(0, 2).map(part => part[0]).join("").toLocaleUpperCase("hu");
  const photo = memberPhotoSource(member);
  const avatar = photo
    ? `<button type="button" class="public-member-avatar has-photo" data-profile-photo="${escapeHtml(photo)}" data-profile-name="${escapeHtml(name)}" aria-label="${escapeHtml(name)} profilképének nagyítása"><img src="${escapeHtml(photo)}" alt="${escapeHtml(name)} profilképe" /></button>`
    : `<span class="public-member-avatar">${escapeHtml(initials)}</span>`;
  document.getElementById("public-member-profile-card").innerHTML = `<section class="panel public-member-profile-card">${avatar}<div><div class="eyebrow">TAGI PROFIL</div><h2>${escapeHtml(name)}</h2><p>${escapeHtml(member.position || "Aktív tag")}</p></div></section>`;
  showView("public-profile");
}

function renderCheckins() {
  const query = document.getElementById("member-search").value.trim().toLocaleLowerCase("hu");
  const eventItem = selectedAdminEvent();
  const shown = demoMembers.filter(member => `${member.name} ${member.id} ${member.division}`.toLocaleLowerCase("hu").includes(query));
  document.getElementById("checkin-list").innerHTML = shown.map(member => `<div class="checkin-row"><span class="avatar">${member.initials}</span><div class="checkin-name"><b>${member.name}</b><small>${member.id} · ${member.division}</small></div><button class="checkin-toggle ${member.checked ? "checked" : ""}" data-checkin="${member.id}">${member.checked ? "✓ Megérkezett" : "＋ Jelenlét"}</button></div>`).join("") || `<div class="table-note">Nincs találat a tagok között.</div>`;
  const count = demoMembers.filter(member => member.checked).length;
  document.getElementById("checkin-count").textContent = `${count} / ${demoMembers.length} megérkezett`;
  document.getElementById("checkin-total").textContent = `${eventItem.registrationCount || 0} jelentkező`;
  document.getElementById("admin-event-time").textContent = `Kezdés · ${eventItem.time || "—"} · vége ${eventItem.endTime || "—"}`;
}

function renderAdminEvents() {
  const markup = events.map(item => `<div class="admin-event-row"><div class="date-block"><small>${item.month}</small><b>${item.day}</b></div><div class="event-info"><b>${item.title}</b><small>${item.time}<span>·</span>${item.place || "Helyszín nincs megadva"}</small><small class="admin-event-staff">Célcsoport: ${audienceLabel(item)}</small>${eventStaffSummary(item) ? `<small class="admin-event-staff">${eventStaffSummary(item)}</small>` : ""}</div><span class="status-pill ${item.published ? "success" : "neutral"}">${item.published ? (item.registrationCount ? `Regisztrációk: ${item.registrationCount}` : "Publikálva") : "Vázlat"}</span><button class="button button-outline admin-manage" data-manage="${item.id}">Kezelés</button></div>`).join("");
  document.getElementById("admin-event-list").innerHTML = markup;
  document.getElementById("organizer-event-list").innerHTML = markup;
  document.getElementById("admin-member-count").textContent = leadershipMembers.length + activeNonLeadershipMembers.length;
  document.getElementById("admin-event-count").textContent = events.length + pastEvents.length;
  document.getElementById("admin-activity-count").textContent = Object.values(window.historicalActivity || {}).reduce((count, rows) => count + rows.length, 0);
}

const adminListDefinitions = {
  members: { title: "Aktív tagok", subtitle: "Aktív tagság · név és divízió", render: () => {
    const members = [...leadershipMembers, ...activeNonLeadershipMembers].sort((a, b) => a.name.trim().localeCompare(b.name.trim(), "hu"));
    return `<div class="admin-list-table-wrap"><table class="admin-list-table"><thead><tr><th>NÉV</th><th>AZONOSÍTÓ</th><th>DIVÍZIÓ</th></tr></thead><tbody>${members.map(member => `<tr data-list-row data-search="${escapeHtml(`${member.name} ${member.id} ${member.division}`.toLocaleLowerCase("hu"))}"><td><b>${escapeHtml(member.name.trim())}</b></td><td>${escapeHtml(member.id)}</td><td>${escapeHtml(member.division)}</td></tr>`).join("")}</tbody></table></div><p class="admin-list-count">${members.length} aktív tag</p>`;
  } },
  events: { title: "Események", subtitle: "Közelgő, vázlat és lezajlott események", render: () => {
    const list = [...events.map(item => ({ ...item, archived: false })), ...pastEvents.map(item => ({ ...item, archived: true }))].sort((a, b) => b.date.localeCompare(a.date));
    return `<div class="admin-list-table-wrap"><table class="admin-list-table"><thead><tr><th>ESEMÉNY</th><th>DÁTUM</th><th>ÁLLAPOT</th><th></th></tr></thead><tbody>${list.map(item => `<tr data-list-row data-search="${escapeHtml(`${item.title} ${item.date} ${item.archived ? item.type : item.place || ""}`.toLocaleLowerCase("hu"))}"><td><b>${escapeHtml(item.title)}</b><small>${escapeHtml(item.archived ? item.type : item.place || "Helyszín nincs megadva")}</small></td><td>${escapeHtml(formatDate(item.date))}</td><td><span class="status-pill ${item.archived ? "neutral" : item.published ? "success" : "neutral"}">${item.archived ? "Lezajlott" : item.published ? "Publikálva" : "Vázlat"}</span></td><td>${item.archived ? `<button class="button button-outline small-button" data-modal-past="${escapeHtml(item.id)}">Részletek</button>` : `<button class="button button-outline small-button" data-modal-manage="${escapeHtml(item.id)}">Kezelés</button>`}</td></tr>`).join("")}</tbody></table></div><p class="admin-list-count">${list.length} esemény</p>`;
  } },
  activity: { title: "Aktivitási rekordok", subtitle: "Az aktivitási rendszer eseményenként rögzített tagi sorai", render: () => {
    const eventById = new Map(pastEvents.map(item => [item.id, item]));
    const records = Object.entries(window.historicalActivity || {}).flatMap(([eventId, rows]) => rows.map(row => ({ ...row, eventId, eventTitle: eventById.get(eventId)?.title || eventId, date: eventById.get(eventId)?.date || "" }))).sort((a, b) => b.date.localeCompare(a.date) || a.name.localeCompare(b.name, "hu"));
    return `<div class="admin-list-table-wrap"><table class="admin-list-table"><thead><tr><th>TAG</th><th>ESEMÉNY</th><th>RÉSZVÉTEL</th><th>PONT</th><th>REKORD</th></tr></thead><tbody>${records.map(row => `<tr data-list-row data-search="${escapeHtml(`${row.name} ${row.memberId} ${row.division} ${row.eventTitle} ${row.attendance} ${row.recordId}`.toLocaleLowerCase("hu"))}"><td><b>${escapeHtml(row.name)}</b><small>${escapeHtml(row.memberId)} · ${escapeHtml(row.division)}</small></td><td>${escapeHtml(row.eventTitle)}<small>${row.date ? escapeHtml(formatDate(row.date)) : ""}</small></td><td>${escapeHtml(row.attendance)}</td><td class="admin-list-points ${Number(row.points) < 0 ? "negative" : ""}">${Number(row.points) > 0 ? "+" : ""}${escapeHtml(row.points)}</td><td>${escapeHtml(row.recordId)}</td></tr>`).join("")}</tbody></table></div><p class="admin-list-count">${records.length} aktivitási rekord az Excelből betöltött adatok alapján</p>`;
  } }
};

function openAdminList(type) {
  const definition = adminListDefinitions[type];
  if (!definition) return;
  document.getElementById("admin-list-title").textContent = definition.title;
  document.getElementById("admin-list-subtitle").textContent = definition.subtitle;
  document.getElementById("admin-list-content").innerHTML = definition.render();
  document.getElementById("admin-list-search-input").value = "";
  document.getElementById("admin-list-modal").hidden = false;
  document.body.classList.add("admin-list-open");
  document.getElementById("admin-list-search-input").focus();
}

function closeAdminList() {
  document.getElementById("admin-list-modal").hidden = true;
  document.body.classList.remove("admin-list-open");
}

const memberProfileData = window.mktMemberProfileData || { members: [], completedEvents: [] };
const memberProfiles = memberProfileData.members || [];
function memberUsername(member) {
  const nameParts = String(member?.name || "").trim().split(/\s+/).filter(Boolean).slice(0, 2);
  const nameCode = nameParts.map(part => part.slice(0, 2).normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[łŁ]/g, "l").replace(/[øØ]/g, "o").replace(/[æÆ]/g, "ae").toLocaleLowerCase("hu")).join("");
  const idDigits = String(member?.id || "").replace(/\D/g, "");
  return `${nameCode}${idDigits.slice(-2).padStart(2, "0")}`;
}
memberProfiles.forEach(member => { member.username = memberUsername(member); });
const completedProfileEvents = memberProfileData.completedEvents || [];
const PROJECT_STORAGE_KEY = "mkt-bge-projects-v1";
const PROJECT_OVERRIDES_STORAGE_KEY = "mkt-bge-project-overrides-v1";
const PROJECT_COMMENTS_STORAGE_KEY = "mkt-bge-project-comments-v1";
let localProjects = [];
let projectOverrides = {};
let projectComments = {};
let editingProjectCommentId = "";
let pendingProjectParticipantIds = [];
try {
  const savedProjects = JSON.parse(localStorage.getItem(PROJECT_STORAGE_KEY) || "[]");
  if (Array.isArray(savedProjects)) localProjects = savedProjects.filter(item => item && item.type === "Projekt" && item.id && item.title && item.division);
} catch (error) { console.warn("A létrehozott projektek nem tölthetők be.", error); }
try {
  const savedOverrides = JSON.parse(localStorage.getItem(PROJECT_OVERRIDES_STORAGE_KEY) || "{}");
  if (savedOverrides && typeof savedOverrides === "object" && !Array.isArray(savedOverrides)) projectOverrides = savedOverrides;
} catch (error) { console.warn("A projektek módosításai nem tölthetők be.", error); }
try {
  const savedComments = JSON.parse(localStorage.getItem(PROJECT_COMMENTS_STORAGE_KEY) || "{}");
  if (savedComments && typeof savedComments === "object" && !Array.isArray(savedComments)) projectComments = savedComments;
} catch (error) { console.warn("A projekt-hozzászólások nem tölthetők be.", error); }
function isLeadershipMember() {
  const memberId = currentProfileData.activityId || currentProfileData.id;
  const member = memberProfiles.find(item => item.id === memberId || item.id === currentProfileData.id);
  return Boolean(member?.executive || (memberProfileData.leadershipIds || []).includes(memberId));
}
function allProjects() {
  const completedProjects = completedProfileEvents.map(item => projectOverrides[item.id] ? { ...item, ...projectOverrides[item.id] } : item);
  return [...completedProjects, ...localProjects].filter(item => String(item.type || "").toLocaleLowerCase("hu") === "projekt");
}
function canEditProjects() { return currentAppRole() === "admin" || isLeadershipMember(); }
function canCommentOnProject(project) {
  return currentAppRole() === "admin" || isLeadershipMember() || (Boolean(currentProfileData.active) && project.division === currentProfileData.division);
}
function currentCommentAuthorId() { return currentProfileData.activityId || currentProfileData.id; }
function canEditProjectComment(comment) { return comment.authorId === currentCommentAuthorId(); }
function canDeleteProjectComment(comment) { return canEditProjectComment(comment) || currentAppRole() === "admin" || isLeadershipMember(); }
function persistProjectComments(nextComments) {
  try { localStorage.setItem(PROJECT_COMMENTS_STORAGE_KEY, JSON.stringify(nextComments)); }
  catch (error) { showToast("A hozzászólást nem sikerült elmenteni ebben a böngészőben."); return false; }
  projectComments = nextComments;
  return true;
}
function renderProjectComment(comment, projectId) {
  const commentId = escapeHtml(comment.id || "");
  const isEditing = editingProjectCommentId === comment.id && canEditProjectComment(comment);
  const timestamp = comment.createdAt ? new Date(comment.createdAt) : null;
  const dateLabel = timestamp && !Number.isNaN(timestamp.getTime()) ? new Intl.DateTimeFormat("hu-HU", { dateStyle: "medium", timeStyle: "short" }).format(timestamp) : "";
  const actions = `${canEditProjectComment(comment) ? `<button class="project-comment-action" type="button" data-comment-edit="${commentId}">Szerkesztés</button>` : ""}${canDeleteProjectComment(comment) ? `<button class="project-comment-action danger" type="button" data-comment-delete="${commentId}">Törlés</button>` : ""}`;
  const body = isEditing
    ? `<form class="project-comment-edit-form" data-comment-edit-form="${commentId}" data-project-id="${escapeHtml(projectId)}"><textarea name="text" rows="3" maxlength="2000" required aria-label="Hozzászólás szerkesztése">${escapeHtml(comment.text || "")}</textarea><div class="project-comment-form-actions"><button class="button button-outline" type="button" data-comment-cancel>Elvetés</button><button class="button button-primary" type="submit">Módosítás mentése</button></div></form>`
    : `<p>${escapeHtml(comment.text || "").replace(/\n/g, "<br>")}</p>`;
  return `<article class="project-comment"><div class="project-comment-header"><div><b>${escapeHtml(comment.authorName || "MKT BGE tag")}</b><time>${escapeHtml(dateLabel)}</time></div><div class="project-comment-actions">${actions}</div></div>${body}</article>`;
}
function visibleProjects() {
  const projects = allProjects();
  return currentAppRole() === "admin" || isLeadershipMember() ? projects : projects.filter(item => item.division === currentProfileData.division);
}
function canAccessProjects() {
  return currentAppRole() === "admin" || isLeadershipMember() || String(currentProfileData.division || "").trim() !== "Tagság";
}
function renderProjects() {
  const projects = visibleProjects().sort((a, b) => b.date.localeCompare(a.date));
  const isAdmin = currentAppRole() === "admin";
  document.querySelectorAll('[data-view="projects"]').forEach(button => {
    button.hidden = !canAccessProjects();
    const count = button.querySelector("#project-nav-count");
    if (count) count.textContent = String(projects.length);
  });
  document.getElementById("project-create-open").hidden = !canEditProjects();
  document.getElementById("projects-subhead").textContent = isAdmin
    ? "Az Excelben rögzített összes projekt, hozzárendelt divízió szerint."
    : `Az Excelben rögzített projektek a(z) ${currentProfileData.division || "saját"} divíziód számára.`;
  document.getElementById("project-grid").innerHTML = projects.map(item => {
    const participants = (item.participantIds || []).map(id => memberProfiles.find(member => member.id === id)?.name).filter(Boolean);
    return `<article class="panel project-card"><button class="project-card-open" type="button" data-project-open="${escapeHtml(item.id)}" aria-label="${escapeHtml(item.title)} részletei"><div class="project-card-top"><span class="project-type">PROJEKT</span><span class="status-pill ${item.status === "Lezajlott" ? "success" : "neutral"}">${escapeHtml(item.status || "Rögzítve")}</span></div><h2>${escapeHtml(item.title)}</h2><div class="project-card-facts"><span><small>Határidő / dátum</small><b>${escapeHtml(formatDate(item.date))}</b></span><span><small>Hozzárendelt divízió</small><b>${escapeHtml(item.division || "—")}</b></span><span><small>Felelős</small><b>${escapeHtml(item.responsible || "—")}</b></span><span><small>Rögzített óraszám</small><b>${escapeHtml(item.hours ?? "—")} óra</b></span></div>${participants.length ? `<div class="project-card-participants"><small>Projektben részt vevők</small><b>${participants.map(escapeHtml).join(", ")}</b></div>` : ""}<small class="project-card-id">${escapeHtml(item.id)} · ${item.id.startsWith("PRJ-") ? "Új projekt" : "Excel-projektrekord"}</small><span class="project-card-open-hint">Részletek megnyitása →</span></button>${canEditProjects() ? `<button class="button button-outline project-card-edit" type="button" data-project-edit="${escapeHtml(item.id)}">Projekt szerkesztése</button>` : ""}</article>`;
  }).join("") || `<section class="panel project-empty"><span>◇</span><h2>Jelenleg nincs hozzád rendelt projekt</h2><p>A projektlistában azok a feladatok jelennek meg, amelyek az Excelben a saját divíziódhoz vannak rendelve.</p></section>`;
  renderMyProjectProfile();
  renderHeroNextEvent();
}
function projectParticipantOptions() {
  const division = document.getElementById("project-create-division").value;
  const select = document.getElementById("project-participant-select");
  const addButton = document.getElementById("project-participant-add");
  if (!division) {
    select.innerHTML = `<option value="">Előbb válassz felelős divíziót</option>`;
    select.disabled = true;
    addButton.disabled = true;
    return;
  }
  const available = memberProfiles.filter(member => member.active && member.division === division && !pendingProjectParticipantIds.includes(member.id)).sort((a, b) => a.name.trim().localeCompare(b.name.trim(), "hu"));
  select.innerHTML = `<option value="">${available.length ? "Válassz tagot" : "Nincs több hozzáadható aktív tag"}</option>${available.map(member => `<option value="${escapeHtml(member.id)}">${escapeHtml(member.name.trim())} · ${escapeHtml(member.id)}</option>`).join("")}`;
  select.disabled = available.length === 0;
  addButton.disabled = available.length === 0;
}
function renderPendingProjectParticipants() {
  const container = document.getElementById("project-participants-list");
  container.innerHTML = pendingProjectParticipantIds.map(id => {
    const member = memberProfiles.find(person => person.id === id);
    if (!member) return "";
    return `<span class="project-participant-chip">${escapeHtml(member.name.trim())}<button type="button" data-remove-project-participant="${escapeHtml(id)}" aria-label="${escapeHtml(member.name)} eltávolítása">×</button></span>`;
  }).join("");
  projectParticipantOptions();
}
function renderMyProjectProfile() {
  const view = document.getElementById("view-profile");
  const tabs = view?.querySelector(".profile-tabs");
  const membershipPanel = document.getElementById("profile-panel-membership");
  if (!tabs || !membershipPanel) return;
  let tab = document.getElementById("profile-tab-projects");
  let panel = document.getElementById("profile-panel-projects");
  if (!tab) {
    tab = document.createElement("button");
    tab.type = "button";
    tab.className = "profile-tab";
    tab.id = "profile-tab-projects";
    tab.setAttribute("role", "tab");
    tab.setAttribute("aria-selected", "false");
    tab.setAttribute("aria-controls", "profile-panel-projects");
    tab.dataset.profileTab = "projects";
    tab.textContent = "Projektjeim";
    tabs.append(tab);
  }
  if (!panel) {
    panel = document.createElement("section");
    panel.className = "panel profile-information-panel profile-projects-panel";
    panel.id = "profile-panel-projects";
    panel.setAttribute("role", "tabpanel");
    panel.setAttribute("aria-labelledby", "profile-tab-projects");
    panel.dataset.profilePanel = "projects";
    panel.hidden = true;
    membershipPanel.after(panel);
  }
  const projects = allProjects().filter(project => (project.participantIds || []).includes(currentProfileData.activityId || currentProfileData.id));
  panel.innerHTML = `<div class="panel-heading"><div><div class="eyebrow">FELADATAID</div><h2>Projektjeim <span class="muted-count">${projects.length}</span></h2></div></div>${projects.length ? `<div class="member-project-list">${projects.map(project => `<article><b>${escapeHtml(project.title)}</b><span>${escapeHtml(project.division)} · ${escapeHtml(formatDate(project.date))}</span><small>Projektfelelős: ${escapeHtml(project.responsible || "—")} · ${escapeHtml(project.status || "Tervezett")}</small></article>`).join("")}</div>` : `<p class="project-profile-empty">Jelenleg nincs hozzád rendelt projekt.</p>`}`;
}
document.getElementById("project-create-division").addEventListener("change", () => {
  const division = document.getElementById("project-create-division").value;
  pendingProjectParticipantIds = pendingProjectParticipantIds.filter(id => memberProfiles.find(member => member.id === id)?.division === division);
  renderPendingProjectParticipants();
});
document.getElementById("project-participant-add").addEventListener("click", () => {
  const memberId = document.getElementById("project-participant-select").value;
  if (!memberId || pendingProjectParticipantIds.includes(memberId)) return;
  pendingProjectParticipantIds.push(memberId);
  renderPendingProjectParticipants();
});
document.getElementById("project-participants-list").addEventListener("click", event => {
  const remove = event.target.closest("[data-remove-project-participant]");
  if (!remove) return;
  pendingProjectParticipantIds = pendingProjectParticipantIds.filter(id => id !== remove.dataset.removeProjectParticipant);
  renderPendingProjectParticipants();
});
document.getElementById("project-create-open").addEventListener("click", () => {
  if (!canEditProjects()) { showToast("Projektet csak szerkesztési jogosultsággal rendelkező tag hozhat létre."); return; }
  editingProjectId = "";
  pendingProjectParticipantIds = [];
  document.getElementById("project-create-form").reset();
  setProjectFormMode(false);
  renderPendingProjectParticipants();
  const panel = document.getElementById("project-create-panel");
  panel.hidden = false;
  panel.scrollIntoView({ behavior: "smooth", block: "nearest" });
});
document.getElementById("project-create-cancel").addEventListener("click", () => {
  document.getElementById("project-create-panel").hidden = true;
  document.getElementById("project-create-form").reset();
  editingProjectId = "";
  setProjectFormMode(false);
  pendingProjectParticipantIds = [];
  renderPendingProjectParticipants();
});
let editingProjectId = "";
function setProjectFormMode(isEditing) {
  document.getElementById("project-form-heading").textContent = isEditing ? "Projekt szerkesztése" : "Projekt létrehozása";
  document.getElementById("project-form-kicker").textContent = isEditing ? "PROJEKT ADATAI" : "ÚJ FELADAT";
  document.getElementById("project-form-submit").textContent = isEditing ? "Módosítások mentése" : "Projekt mentése";
}
function openProjectEditor(projectId) {
  if (!canEditProjects()) { showToast("A projektek szerkesztéséhez nincs jogosultságod."); return; }
  const project = allProjects().find(item => item.id === projectId);
  if (!project) return;
  editingProjectId = project.id;
  const form = document.getElementById("project-create-form");
  form.elements.namedItem("title").value = project.title || "";
  form.elements.namedItem("date").value = project.date || "";
  form.elements.namedItem("division").value = project.division || "";
  form.elements.namedItem("responsible").value = project.responsible || "";
  form.elements.namedItem("hours").value = project.hours ?? "";
  form.elements.namedItem("description").value = project.description ?? project.note ?? "";
  pendingProjectParticipantIds = [...(project.participantIds || [])];
  setProjectFormMode(true);
  renderPendingProjectParticipants();
  document.getElementById("project-create-panel").hidden = false;
  showView("projects");
  document.getElementById("project-create-panel").scrollIntoView({ behavior: "smooth", block: "start" });
}
function openProjectDetail(projectId, returnView = "projects") {
  const project = allProjects().find(item => item.id === projectId);
  if (!project || (currentAppRole() !== "admin" && !isLeadershipMember() && project.division !== currentProfileData.division)) return;
  projectDetailReturnView = returnView;
  const participants = (project.participantIds || []).map(id => memberProfiles.find(member => member.id === id)?.name).filter(Boolean);
  const description = project.description || project.note || "Ehhez a projekthez még nincs leírás.";
  const comments = Array.isArray(projectComments[project.id]) ? projectComments[project.id] : [];
  const commentList = comments.length ? comments.map(comment => renderProjectComment(comment, project.id)).join("") : `<p class="project-comments-empty">Még nincs hozzászólás ehhez a projekthez.</p>`;
  document.getElementById("project-detail-heading").textContent = project.title;
  document.getElementById("project-detail-subhead").textContent = `${project.id} · ${project.division} · ${formatDate(project.date)}`;
  document.getElementById("project-detail-content").innerHTML = `<div class="event-detail-summary project-detail-summary"><section class="panel event-detail-about"><div class="eyebrow">PROJEKT LEÍRÁSA</div><h2>${escapeHtml(project.title)}</h2><p class="project-detail-description">${escapeHtml(description).replace(/\n/g, "<br>")}</p><dl class="event-detail-facts"><div><dt>Határidő / dátum</dt><dd>${escapeHtml(formatDate(project.date))}</dd></div><div><dt>Felelős divízió</dt><dd>${escapeHtml(project.division || "—")}</dd></div><div><dt>Projektfelelős</dt><dd>${escapeHtml(project.responsible || "—")}</dd></div><div><dt>Rögzített óraszám</dt><dd>${escapeHtml(project.hours ?? "—")} óra</dd></div><div><dt>Állapot</dt><dd>${escapeHtml(project.status || "Rögzítve")}</dd></div></dl>${participants.length ? `<div class="project-card-participants"><small>Projektben részt vevők</small><b>${participants.map(escapeHtml).join(", ")}</b></div>` : ""}</section><section class="panel project-detail-actions"><div class="eyebrow">PROJEKTKEZELÉS</div><p>A projekt adatai, leírása és résztvevői egy helyen szerkeszthetők.</p>${canEditProjects() ? `<button class="button button-primary" type="button" data-project-edit="${escapeHtml(project.id)}">Projekt szerkesztése</button>` : `<span class="status-pill neutral">Megtekintés</span>`}</section></div><section class="panel project-comments-panel" data-project-comments="${escapeHtml(project.id)}"><div class="panel-heading"><div><div class="eyebrow">KÖZÖS EGYEZTETÉS</div><h2>Hozzászólások <span class="muted-count">${comments.length}</span></h2></div></div><div class="project-comments-list">${commentList}</div>${canCommentOnProject(project) ? `<form class="project-comment-form" id="project-comment-form" data-project-comment="${escapeHtml(project.id)}"><label for="project-comment-input">Írj hozzászólást</label><textarea id="project-comment-input" name="text" rows="3" maxlength="2000" required placeholder="Oszd meg a gondolataidat a projektről…"></textarea><div class="project-comment-form-actions"><small>${isLeadershipMember() ? "Elnökségi tagként minden projekthez hozzászólhatsz." : "A projekt hozzárendelt divíziójának tagjaként írhatsz."}</small><button class="button button-primary" type="submit">Hozzászólás küldése</button></div></form>` : `<p class="project-comment-permission">Hozzászólást a projekt divíziójának tagjai és az elnökség írhat.</p>`}</section>`;
  showView("project-detail");
}
document.getElementById("project-grid").addEventListener("click", event => {
  const editButton = event.target.closest("[data-project-edit]");
  if (editButton) { openProjectEditor(editButton.dataset.projectEdit); return; }
  const projectButton = event.target.closest("[data-project-open]");
  if (projectButton) openProjectDetail(projectButton.dataset.projectOpen);
});
document.getElementById("project-detail-content").addEventListener("click", event => {
  const editButton = event.target.closest("[data-project-edit]");
  if (editButton) openProjectEditor(editButton.dataset.projectEdit);
  const commentEdit = event.target.closest("[data-comment-edit]");
  const commentCancel = event.target.closest("[data-comment-cancel]");
  if (commentCancel) { editingProjectCommentId = ""; openProjectDetail(commentCancel.closest("[data-project-comments]")?.dataset.projectComments); return; }
  if (commentEdit) {
    const projectId = commentEdit.closest("[data-project-comments]")?.dataset.projectComments;
    const comment = (projectComments[projectId] || []).find(item => item.id === commentEdit.dataset.commentEdit);
    if (!comment || !canEditProjectComment(comment)) { showToast("Csak a hozzászólás szerzője szerkesztheti azt."); return; }
    editingProjectCommentId = comment.id;
    openProjectDetail(projectId);
    return;
  }
  const commentDelete = event.target.closest("[data-comment-delete]");
  if (commentDelete) {
    const projectId = commentDelete.closest("[data-project-comments]")?.dataset.projectComments;
    const rows = Array.isArray(projectComments[projectId]) ? projectComments[projectId] : [];
    const comment = rows.find(item => item.id === commentDelete.dataset.commentDelete);
    if (!comment || !canDeleteProjectComment(comment)) { showToast("Nincs jogosultságod ennek a hozzászólásnak a törléséhez."); return; }
    if (!window.confirm("Biztosan törlöd ezt a hozzászólást?")) return;
    const nextComments = { ...projectComments, [projectId]: rows.filter(item => item.id !== comment.id) };
    if (!persistProjectComments(nextComments)) return;
    if (editingProjectCommentId === comment.id) editingProjectCommentId = "";
    openProjectDetail(projectId);
    showToast("A hozzászólás törölve.");
    return;
  }
});
document.getElementById("project-detail-content").addEventListener("submit", event => {
  const editForm = event.target.closest("[data-comment-edit-form]");
  if (editForm) {
    event.preventDefault();
    const projectId = editForm.dataset.projectId;
    const commentId = editForm.dataset.commentEditForm;
    const rows = Array.isArray(projectComments[projectId]) ? projectComments[projectId] : [];
    const comment = rows.find(item => item.id === commentId);
    if (!comment || !canEditProjectComment(comment)) { showToast("Csak a hozzászólás szerzője szerkesztheti azt."); return; }
    const text = String(new FormData(editForm).get("text") || "").trim();
    if (!text) return;
    const nextComments = { ...projectComments, [projectId]: rows.map(item => item.id === commentId ? { ...item, text, updatedAt: new Date().toISOString() } : item) };
    if (!persistProjectComments(nextComments)) return;
    editingProjectCommentId = "";
    openProjectDetail(projectId);
    showToast("A hozzászólás módosítva.");
    return;
  }
  const form = event.target.closest("#project-comment-form");
  if (!form) return;
  event.preventDefault();
  const project = allProjects().find(item => item.id === form.dataset.projectComment);
  if (!project || !canCommentOnProject(project)) { showToast("Ehhez a projekthez csak a hozzárendelt divízió tagjai és az elnökség szólhat hozzá."); return; }
  const text = String(new FormData(form).get("text") || "").trim();
  if (!text) return;
  const key = currentCommentAuthorId();
  const nextComments = { ...projectComments, [project.id]: [...(Array.isArray(projectComments[project.id]) ? projectComments[project.id] : []), { id: `CMT-${Date.now()}`, authorId: key, authorName: currentProfileData.name, createdAt: new Date().toISOString(), text }] };
  if (!persistProjectComments(nextComments)) return;
  openProjectDetail(project.id);
  showToast("A hozzászólás mentve.");
});
document.getElementById("project-create-form").addEventListener("submit", event => {
  event.preventDefault();
  if (!canEditProjects()) { showToast("A projektek mentéséhez nincs jogosultságod."); return; }
  const formData = new FormData(event.currentTarget);
  const formValues = {
    title: String(formData.get("title") || "").trim(),
    date: String(formData.get("date") || ""),
    division: String(formData.get("division") || ""),
    responsible: String(formData.get("responsible") || "").trim(),
    hours: formData.get("hours") ? Number(formData.get("hours")) : null,
    description: String(formData.get("description") || "").trim(),
    participantIds: [...pendingProjectParticipantIds]
  };
  if (editingProjectId) {
    const localIndex = localProjects.findIndex(item => item.id === editingProjectId);
    if (localIndex >= 0) {
      const nextProjects = localProjects.map(item => item.id === editingProjectId ? { ...item, ...formValues } : item);
      try { localStorage.setItem(PROJECT_STORAGE_KEY, JSON.stringify(nextProjects)); }
      catch (error) { showToast("A projekt módosításait nem sikerült elmenteni ebben a böngészőben."); return; }
      localProjects = nextProjects;
    } else {
      const nextOverrides = { ...projectOverrides, [editingProjectId]: formValues };
      try { localStorage.setItem(PROJECT_OVERRIDES_STORAGE_KEY, JSON.stringify(nextOverrides)); }
      catch (error) { showToast("A projekt módosításait nem sikerült elmenteni ebben a böngészőben."); return; }
      projectOverrides = nextOverrides;
    }
  } else {
    const project = { id: `PRJ-${Date.now()}`, ...formValues, type: "Projekt", status: "Tervezett", audience: formValues.division };
    const nextProjects = [project, ...localProjects];
    try { localStorage.setItem(PROJECT_STORAGE_KEY, JSON.stringify(nextProjects)); }
    catch (error) { showToast("A projektet nem sikerült elmenteni ebben a böngészőben."); return; }
    localProjects = nextProjects;
  }
  pendingProjectParticipantIds = [];
  editingProjectId = "";
  event.currentTarget.reset();
  setProjectFormMode(false);
  renderPendingProjectParticipants();
  document.getElementById("project-create-panel").hidden = true;
  renderProjects();
  if (selectedProfileMemberId) renderMemberProfile(selectedProfileMemberId);
  showToast("Projektmódosítások mentve.");
});
let selectedProfileMemberId = "";
const MEMBER_ROLE_STORAGE_KEY = "mkt-bge-member-roles-v1";
let memberRoles = {};
try {
  const savedRoles = JSON.parse(localStorage.getItem(MEMBER_ROLE_STORAGE_KEY) || "{}");
  if (savedRoles && typeof savedRoles === "object" && !Array.isArray(savedRoles)) memberRoles = savedRoles;
} catch (error) { console.warn("A tagok szerepkörei nem tölthetők be.", error); }

function memberRoleKey(member) {
  return member.id === currentProfileData.id || member.id === currentProfileData.activityId ? currentProfileData.activityId : member.id;
}
function memberRole(member) {
  const saved = memberRoles[memberRoleKey(member)];
  return ["admin", "manager", "member"].includes(saved) ? saved : (member.id === currentProfileData.id || member.id === currentProfileData.activityId ? "admin" : "member");
}
function currentAppRole() {
  const key = currentProfileData.activityId || currentProfileData.id;
  const saved = memberRoles[key] || memberRoles[currentProfileData.id];
  return ["admin", "manager", "member"].includes(saved) ? saved : "admin";
}
function canManageEvents() { return ["admin", "manager"].includes(currentAppRole()); }
function applyRolePermissions() {
  const role = currentAppRole();
  document.querySelectorAll("[data-admin-only]").forEach(element => { element.hidden = role !== "admin"; });
  const organizerToggle = document.getElementById("organizer-toggle");
  if (organizerToggle) organizerToggle.hidden = role === "member";
  const activeView = document.querySelector(".view.active")?.id.replace("view-", "");
  renderProjects();
  if ((["admin-home", "admin-member-profile", "admin-members"].includes(activeView) && role !== "admin") || (["admin", "admin-event"].includes(activeView) && role === "member") || (activeView === "projects" && !canAccessProjects())) {
    showView(role === "manager" ? "events" : "home");
  }
}
function renderMemberRoleRows(query = "") {
  const normalizedQuery = query.trim().toLocaleLowerCase("hu");
  const members = [...memberProfiles].sort((a, b) => a.name.trim().localeCompare(b.name.trim(), "hu"));
  const filtered = members.filter(member => `${member.name} ${member.id} ${member.division} ${member.position || ""}`.toLocaleLowerCase("hu").includes(normalizedQuery));
  document.getElementById("member-role-rows").innerHTML = filtered.map(member => {
    const role = memberRole(member);
    const key = memberRoleKey(member);
    const isCurrentMember = member.id === currentProfileData.id || member.id === currentProfileData.activityId;
    const username = isCurrentMember ? memberUsername(currentProfileData) : member.username;
    return `<tr data-role-row data-search="${escapeHtml(`${member.name} ${username} ${member.id} ${member.division} ${member.position || ""}`.toLocaleLowerCase("hu"))}"><td><b>${escapeHtml(member.name.trim())}</b><small>${member.active ? "Aktív tag" : "Inaktív tag"}${isCurrentMember ? " · jelenlegi fiók" : ""}</small></td><td>${escapeHtml(member.id)}</td><td><code class="member-username">${escapeHtml(username)}</code></td><td>${escapeHtml(member.division || "—")}</td><td>${escapeHtml(member.position || "—")}</td><td><select class="member-role-select" data-member-role="${escapeHtml(key)}" aria-label="${escapeHtml(member.name)} szerepköre" ${isCurrentMember ? "disabled title=\"A jelenlegi adminfiók szerepköre a pilotban rögzített.\"" : ""}><option value="admin" ${role === "admin" ? "selected" : ""}>Admin</option><option value="manager" ${role === "manager" ? "selected" : ""}>Kezelő</option><option value="member" ${role === "member" ? "selected" : ""}>Normál</option></select></td></tr>`;
  }).join("") || `<tr><td colspan="6" class="role-management-empty">Nincs ilyen tag.</td></tr>`;
  document.getElementById("role-member-count").textContent = normalizedQuery ? `${filtered.length} / ${members.length} tag` : `${members.length} tag`;
}

function activityRowsForMember(memberId) {
  return Object.entries(window.historicalActivity || {}).flatMap(([eventId, rows]) => rows.filter(row => row.memberId === memberId).map(row => ({ ...row, eventId })));
}

function renderCurrentMemberData() {
  const nameParts = currentProfileData.name.trim().split(/\s+/);
  const initials = nameParts.slice(0, 2).map(part => part[0]).join("").toLocaleUpperCase("hu");
  document.querySelectorAll("[data-current-name]").forEach(element => { element.textContent = currentProfileData.name; });
  document.querySelectorAll("[data-current-initials]").forEach(element => { element.textContent = initials; });
  document.querySelectorAll("[data-current-avatar]").forEach(element => {
    if (currentProfileData.photo) {
      element.innerHTML = `<img src="${currentProfileData.photo}" alt="${escapeHtml(currentProfileData.name)} profilképe" />`;
      element.classList.add("has-profile-photo");
      element.setAttribute("tabindex", "0");
      element.setAttribute("role", "button");
      element.setAttribute("aria-label", `${currentProfileData.name} profilképének nagyítása`);
    } else {
      element.textContent = initials;
      element.classList.remove("has-profile-photo");
      element.removeAttribute("tabindex");
      element.removeAttribute("role");
      element.removeAttribute("aria-label");
    }
  });
  document.querySelectorAll("[data-current-role]").forEach(element => { element.textContent = currentProfileData.position || "Aktív tag"; });
  document.querySelectorAll("[data-current-division]").forEach(element => { element.textContent = currentProfileData.division || "—"; });
  document.querySelectorAll("[data-current-major]").forEach(element => { element.textContent = currentProfileData.major || "—"; });
  document.querySelectorAll("[data-current-member-id]").forEach(element => { element.textContent = currentProfileData.id; });
  document.querySelectorAll("[data-current-username]").forEach(element => { element.textContent = memberUsername(currentProfileData); });
  document.querySelectorAll("[data-current-neptun]").forEach(element => { element.textContent = currentProfileData.neptun || "—"; });
  document.querySelectorAll("[data-current-email]").forEach(element => { element.textContent = currentProfileData.email || "—"; });
  document.querySelectorAll("[data-current-status]").forEach(element => {
    element.textContent = currentProfileData.active ? "Aktív" : "Inaktív";
    element.classList.toggle("success", Boolean(currentProfileData.active));
    element.classList.toggle("neutral", !currentProfileData.active);
  });
  const membershipNote = document.querySelector(".profile-membership-status p");
  if (membershipNote) membershipNote.textContent = currentProfileData.active ? "A tag a nyilvántartás szerint aktív." : "A tag a nyilvántartás szerint inaktív.";
  document.querySelectorAll("[data-current-card-id]").forEach(element => { element.textContent = `· ${currentProfileData.id}`; });
  document.getElementById("current-first-name").textContent = nameParts[1] || nameParts[0];

  const records = activityRowsForMember(currentProfileData.activityId || currentProfileData.id);
  const relevantEvents = completedProfileEvents.filter(item => isProfileEventRelevant(item, currentProfileData));
  const appearances = records.filter(row => row.attendance === "Megjelent").length;
  const points = records.reduce((sum, row) => sum + Number(row.points || 0), 0);
  const rate = relevantEvents.length ? appearances / relevantEvents.length : 0;
  document.getElementById("current-points-home").textContent = points;
  document.getElementById("current-attendance-home").textContent = appearances;
  document.getElementById("current-rate-home").textContent = Math.round(rate * 100);
  document.getElementById("current-rate-progress").style.width = `${Math.min(100, rate * 100)}%`;
  document.getElementById("current-points-activity").textContent = points;
  document.getElementById("current-member-id-activity").textContent = currentProfileData.id;
  document.getElementById("current-activity-count").textContent = `${records.length} aktivitási rekord`;

  const eventMap = new Map(completedProfileEvents.map(item => [item.id, item]));
  const rows = records.map(row => {
    const eventItem = eventMap.get(row.eventId);
    return { ...row, title: eventItem?.title || row.eventId, type: eventItem?.type || "Aktivitás", date: eventItem?.date || "" };
  }).sort((a, b) => b.date.localeCompare(a.date));
  document.getElementById("current-activity-rows").innerHTML = rows.map(row => `<tr><td><span class="table-event">✦</span><b>${escapeHtml(row.title)}</b><small>${escapeHtml(row.type)}</small></td><td>${row.date ? escapeHtml(formatDate(row.date)) : "—"}</td><td><span class="status-pill ${row.attendance === "Megjelent" ? "success" : "neutral"}">${escapeHtml(row.attendance)}</span></td><td class="points-positive">${Number(row.points) > 0 ? "+" : ""}${escapeHtml(row.points)}</td></tr>`).join("") || `<tr><td colspan="4">Nincs rögzített aktivitási rekord.</td></tr>`;
}

function isProfileEventRelevant(eventItem, member) {
  const audience = String(eventItem.audience || "").trim();
  if (audience === "Mindenki") return true;
  if (audience === "Opcionális") return (window.historicalActivity?.[eventItem.id] || []).some(row => row.memberId === (member.activityId || member.id));
  if (audience === "Teljes elnökség") return Boolean(member.executive);
  return audience === member.division;
}

function renderMemberProfile(memberId) {
  const member = memberProfiles.find(person => person.id === memberId);
  if (!member) return;
  selectedProfileMemberId = member.id;
  const records = activityRowsForMember(member.id);
  const relevantEvents = completedProfileEvents.filter(eventItem => isProfileEventRelevant(eventItem, member)).sort((a, b) => b.date.localeCompare(a.date));
  const appearances = records.filter(row => row.attendance === "Megjelent").length;
  const noShows = records.filter(row => row.attendance === "Nem jelent meg");
  const organizerOccasions = records.filter(row => [row.organizer, row.eventResponsible, row.projectLead].some(value => value === "Igen")).length;
  const totalPoints = records.reduce((sum, row) => sum + Number(row.points || 0), 0);
  const attendanceRate = relevantEvents.length ? appearances / relevantEvents.length : 0;
  const eventsById = new Map(completedProfileEvents.map(eventItem => [eventItem.id, eventItem]));
  const eventRows = relevantEvents.map(eventItem => {
    const record = records.find(row => row.eventId === eventItem.id);
    const roles = record ? [record.organizer === "Igen" ? "Szervező" : "", record.eventResponsible === "Igen" ? "Eseményfelelős" : "", record.projectLead === "Igen" ? "Projektvezető" : ""].filter(Boolean).join(", ") : "—";
    return `<tr><td><b>${escapeHtml(eventItem.title)}</b><small>${escapeHtml(eventItem.id)} · ${escapeHtml(eventItem.type)}</small></td><td>${escapeHtml(formatDate(eventItem.date))}</td><td>${escapeHtml(eventItem.audience)}</td><td><span class="profile-status ${record?.attendance === "Megjelent" ? "attended" : record?.attendance === "Nem jelent meg" ? "no-show" : "other"}">${escapeHtml(record?.attendance || "Nincs aktivitási sor")}</span></td><td>${record ? `${escapeHtml(record.taskAccepted)} / ${escapeHtml(record.taskCompleted)}` : "—"}</td><td>${escapeHtml(roles)}</td><td class="profile-points">${record ? `${Number(record.points) > 0 ? "+" : ""}${escapeHtml(record.points)}` : "—"}</td></tr>`;
  }).join("");
  const noShowNames = noShows.map(row => eventsById.get(row.eventId)?.title || row.eventId);
  document.getElementById("member-profile-result").innerHTML = `<section class="member-profile-summary"><article class="panel member-profile-identity"><div class="member-profile-avatar">${escapeHtml(member.name.split(/\s+/).map(part => part[0]).slice(0, 2).join("").toLocaleUpperCase("hu"))}</div><div class="member-profile-identity-copy"><div class="eyebrow">TAGI ADATLAP</div><h2>${escapeHtml(member.name)}</h2><span class="member-profile-id">${escapeHtml(member.id)}</span></div><div class="member-profile-facts"><div><small>Divízió</small><b>${escapeHtml(member.division || "—")}</b></div><div><small>Pozíció</small><b>${escapeHtml(member.position || "—")}</b></div><div><small>Szak</small><b>${escapeHtml(member.major || "—")}</b></div></div></article><div class="member-profile-metrics"><article class="panel profile-metric"><small>Releváns lezajlott esemény</small><b>${relevantEvents.length}</b><span>Esemény a célcsoport alapján</span></article><article class="panel profile-metric"><small>Megjelenések</small><b>${appearances}</b><span>${noShows.length} no-show · ${noShowNames.length ? escapeHtml(noShowNames.join(", ")) : "Nincs no-show esemény"}</span></article><article class="panel profile-metric"><small>Részvételi arány</small><b>${new Intl.NumberFormat("hu-HU", { style: "percent", maximumFractionDigits: 1 }).format(attendanceRate)}</b><span>${appearances} megjelenés / ${relevantEvents.length} releváns esemény</span></article><article class="panel profile-metric"><small>Szervezői alkalmak</small><b>${organizerOccasions}</b><span>Szervező, eseményfelelős vagy projektvezető</span></article><article class="panel profile-metric profile-total-points"><small>Összes pont</small><b>${totalPoints}</b><span>Minden aktivitási rekord összege</span></article></div></section><section class="panel member-profile-events"><div class="panel-heading"><div><div class="eyebrow">CÉLCSOPORT SZERINTI ESEMÉNYEK</div><h2>Releváns lezajlott események <span class="muted-count">${relevantEvents.length}</span></h2></div><span class="member-profile-source">Excel aktivitási adatok</span></div><div class="table-wrap"><table class="member-profile-table"><thead><tr><th>ESEMÉNY</th><th>DÁTUM</th><th>CÉLCSOPORT</th><th>RÉSZVÉTEL</th><th>FELADATVÁLLALÁS / TELJESÍTÉS</th><th>SZERVEZŐI SZEREP</th><th>PONT</th></tr></thead><tbody>${eventRows || `<tr><td colspan="7" class="profile-no-events">Ehhez a taghoz nem található releváns lezajlott esemény.</td></tr>`}</tbody></table></div></section>`;
  const memberProjects = allProjects().filter(project => (project.participantIds || []).includes(member.id));
  const memberProjectPanel = document.createElement("section");
  memberProjectPanel.className = "panel member-profile-projects";
  memberProjectPanel.innerHTML = `<div class="panel-heading"><div><div class="eyebrow">PROJEKTFELADATOK</div><h2>Projektjei <span class="muted-count">${memberProjects.length}</span></h2></div></div>${memberProjects.length ? `<div class="member-project-list">${memberProjects.map(project => `<article><b>${escapeHtml(project.title)}</b><span>${escapeHtml(project.division)} · ${escapeHtml(formatDate(project.date))}</span><small>Projektfelelős: ${escapeHtml(project.responsible || "—")} · ${escapeHtml(project.status || "Tervezett")}</small></article>`).join("")}</div>` : `<p class="project-profile-empty">Jelenleg nincs a taghoz rendelt projekt.</p>`}`;
  document.getElementById("member-profile-result").querySelector(".member-profile-summary").after(memberProjectPanel);
}

function renderMemberProfileSuggestions() {
  const input = document.getElementById("member-profile-search");
  const suggestions = document.getElementById("member-profile-suggestions");
  const query = input.value.trim().toLocaleLowerCase("hu");
  if (!query) { suggestions.hidden = true; suggestions.innerHTML = ""; return; }
  const matches = memberProfiles.filter(member => `${member.name} ${member.id} ${member.division} ${member.position}`.toLocaleLowerCase("hu").includes(query)).sort((a, b) => a.name.localeCompare(b.name, "hu")).slice(0, 12);
  suggestions.innerHTML = matches.length ? matches.map(member => `<button type="button" class="member-profile-suggestion" role="option" data-member-select="${escapeHtml(member.id)}"><span class="member-profile-suggestion-avatar">${escapeHtml(member.name.split(/\s+/).map(part => part[0]).slice(0, 2).join("").toLocaleUpperCase("hu"))}</span><span><b>${escapeHtml(member.name)}</b><small>${escapeHtml(member.id)} · ${escapeHtml(member.division)}</small></span><span class="member-profile-suggestion-arrow">→</span></button>`).join("") : `<p class="member-profile-no-match">Nincs ilyen aktív tag.</p>`;
  suggestions.hidden = false;
}

function renderPastEvents() {
  document.querySelector(".past-event-count").textContent = `${pastEvents.length} esemény`;
  document.getElementById("past-events-grid").innerHTML = pastEvents.map(item => {
    const weekday = new Intl.DateTimeFormat("hu-HU", { weekday: "long" }).format(new Date(`${item.date}T12:00:00`));
    return `<a href="#event-detail" class="past-event-card" data-past-event="${item.id}" aria-label="${item.title} részletei"><div class="past-event-top"><span class="past-event-type">${item.type}</span><span class="past-event-id">${item.id}</span></div><h3>${item.title}</h3><p class="past-event-date">◷ ${weekday}, ${formatDate(item.date)}</p><div class="past-event-info"><span><small>Felelős</small><b>${item.responsible}</b></span><span><small>Divízió</small><b>${item.division}</b></span><span><small>Célcsoport</small><b>${item.audience}</b></span></div><div class="past-event-stats"><span><b>${item.attended}</b><small>Megjelent</small></span><span><b>${item.noShow}</b><small>No-show</small></span><span><b>${item.points}</b><small>Aktivitási pont</small></span></div><p class="past-event-foot">${item.records} aktivitási rekord · ${item.hours} rögzített óra${item.notRegistered ? ` · ${item.notRegistered} nem jelentkezett` : ""}${item.note ? ` · ${item.note}` : ""}</p></a>`;
  }).join("");
}

let detailReturnView = "events";
let projectDetailReturnView = "projects";
function escapeHtml(value) {
  return String(value ?? "").replace(/[&<>"']/g, char => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "\"": "&quot;", "'": "&#39;" })[char]);
}

function openEventDetail(id, returnView) {
  const live = events.find(item => item.id === id);
  const archived = pastEvents.find(item => item.id === id);
  if (!live && !archived) return;
  const currentView = document.querySelector(".view.active")?.id?.replace("view-", "");
  if (live && !live.published && currentView !== "admin" && currentView !== "admin-event") {
    showToast("Ez az esemény még nincs publikálva.");
    return;
  }
  if (live && currentView !== "admin" && currentView !== "admin-event" && !isEventVisibleToMember(live)) {
    showToast("Ez az esemény nem a te célcsoportodnak szól.");
    return;
  }
  detailReturnView = returnView || (archived ? "admin" : currentView === "event-detail" ? "events" : currentView || "events");
  const heading = live?.title || archived.title;
  document.getElementById("event-detail-heading").textContent = heading;
  document.getElementById("event-detail-kicker").textContent = archived ? "LEZAJLOTT ESEMÉNY · ADMIN NÉZET" : "ESEMÉNYRÉSZLETEK";
  document.getElementById("event-detail-subhead").textContent = archived ? `${archived.id} · ${formatDate(archived.date)}` : `${live.type} · ${formatDate(live.date)}`;

  if (archived) {
    const activity = window.historicalActivity?.[archived.id] || [];
    const description = archived.note || "A munkafüzet ehhez az eseményhez nem tartalmazott külön szöveges leírást. Az alábbi részletek az esemény- és aktivitáslap rögzített adataiból származnak.";
    const rows = activity.map(person => `<tr><td><b>${escapeHtml(person.name)}</b><small>${escapeHtml(person.memberId)}</small></td><td>${escapeHtml(person.division)}</td><td><span class="activity-status">${escapeHtml(person.attendance)}</span></td><td>${escapeHtml(person.taskAccepted)}</td><td>${escapeHtml(person.taskCompleted)}</td><td>${escapeHtml(person.organizer)}</td><td>${escapeHtml(person.eventResponsible)}</td><td>${escapeHtml(person.projectLead)}</td><td class="detail-points">${escapeHtml(person.points)}</td></tr>`).join("");
    document.getElementById("event-detail-content").innerHTML = `<div class="event-detail-cover archive-detail-cover"><div class="event-detail-cover-copy"><span class="past-event-type">${escapeHtml(archived.type)}</span><h2>${escapeHtml(archived.title)}</h2><p>${escapeHtml(formatDate(archived.date))} · ${escapeHtml(archived.division)}</p></div><img src="mkt-bge-mark.png" alt="MKT BGE" /></div><div class="event-detail-summary"><section class="panel event-detail-about"><div class="eyebrow">ESEMÉNY ADATAI</div><h2>Részletek</h2><p>${escapeHtml(description)}</p><dl class="event-detail-facts"><div><dt>Felelős</dt><dd>${escapeHtml(archived.responsible)}</dd></div><div><dt>Célcsoport</dt><dd>${escapeHtml(archived.audience)}</dd></div><div><dt>Rögzített óraszám</dt><dd>${escapeHtml(archived.hours)} óra</dd></div><div><dt>Állapot</dt><dd>Lezajlott</dd></div></dl></section><section class="panel event-detail-stats-panel"><div class="eyebrow">AKTIVITÁSI ÖSSZESÍTÉS</div><h2>Részvétel és pontok</h2><div class="event-detail-stats"><span><b>${archived.attended}</b><small>Megjelent</small></span><span><b>${archived.noShow}</b><small>No-show</small></span><span><b>${archived.records}</b><small>Aktivitási rekord</small></span><span><b>${archived.points}</b><small>Összpont</small></span></div>${archived.notRegistered ? `<p>${archived.notRegistered} tagnál „Nem jelentkezett” státusz szerepel.</p>` : ""}</section></div><section class="panel historical-activity-panel"><div class="panel-heading"><div><div class="eyebrow">AKTIVITÁSI LAP</div><h2>Tagonkénti adatok <span class="muted-count">${activity.length} rekord</span></h2></div></div><div class="table-wrap"><table class="historical-activity-table"><thead><tr><th>TAG</th><th>DIVÍZIÓ</th><th>RÉSZVÉTEL</th><th>FELADATVÁLLALÁS</th><th>FELADAT TELJESÍTÉSE</th><th>SZERVEZŐI KÖZREMŰKÖDÉS</th><th>ESEMÉNYFELELŐS</th><th>PROJEKTVEZETŐ</th><th>PONT</th></tr></thead><tbody>${rows || `<tr><td colspan="9">Ehhez az eseményhez nem található aktivitási rekord.</td></tr>`}</tbody></table></div></section>`;
  } else {
    const image = live.coverImage || live.baseCoverImage;
    const positionX = live.coverPositionX ?? 50;
    const positionY = live.coverPositionY ?? 50;
    const zoom = live.coverZoom ?? 100;
    const imageMarkup = image ? `<img src="${image}" alt="" style="object-position:${positionX}% ${positionY}%;transform:scale(${zoom / 100})" />` : `<img class="detail-brand-mark" src="mkt-bge-mark.png" alt="MKT BGE" />`;
    const predicted = live.isQuiz ? getQuizPrediction(live.registrationCount || 0) : null;
    document.getElementById("event-detail-content").innerHTML = `<div class="event-detail-cover ${image ? "has-image" : ""}">${imageMarkup}<span class="event-cover-label">${escapeHtml(live.type)}</span>${live.mandatory ? `<span class="event-cover-required">KÖTELEZŐ</span>` : ""}<span class="event-cover-date"><small>${escapeHtml(live.month)}</small><b>${escapeHtml(live.day)}</b></span></div><section class="panel event-detail-live"><div class="event-detail-live-head"><div><div class="eyebrow">${escapeHtml(live.weekday)}, ${escapeHtml(formatDate(live.date))}</div><h2>${escapeHtml(live.title)}</h2></div><button class="register-button ${live.registered ? "registered" : ""}" data-detail-register="${live.id}">${live.registered ? "✓ Jelentkeztél" : "＋ Regisztrálok"}</button></div><p class="event-description">${escapeHtml(live.description)}</p><div class="event-detail-facts live-facts"><div><dt>Helyszín</dt><dd>${escapeHtml(live.place || "Helyszín nincs megadva")}</dd></div><div><dt>Időpont</dt><dd>${escapeHtml(live.time)}${live.endTime ? `–${escapeHtml(live.endTime)}` : ""}</dd></div><div><dt>Jelentkezők</dt><dd>${live.registrationCount || 0} fő</dd></div><div><dt>Célcsoport</dt><dd>${escapeHtml(audienceLabel(live))}</dd></div>${predicted != null ? `<div><dt>Becsült megjelenés</dt><dd>kb. ${predicted} fő</dd></div>` : ""}</div>${eventStaffSummary(live) ? `<p class="event-staff-summary">${escapeHtml(eventStaffSummary(live))}</p>` : ""}</section>`;
  }
  if (live) {
    const registrants = document.createElement("div");
    registrants.innerHTML = registeredMembersMarkup(live);
    document.getElementById("event-detail-content").append(registrants.firstElementChild);
  }
  showView("event-detail");
}

function selectedAdminEvent() { return events.find(item => item.id === selectedAdminEventId) || events[0]; }

function updateAudienceControls() {
  const audience = document.getElementById("event-audience-input").value;
  const mandatory = document.getElementById("event-required-input").checked;
  const everyoneOption = document.querySelector('#event-audience-input option[value="optional"]');
  const divisionWrap = document.getElementById("event-target-division-wrap");
  const divisionSelect = document.getElementById("event-target-division-input");
  const help = document.getElementById("event-audience-help");
  everyoneOption.textContent = mandatory ? "Kötelező minden tag" : "Minden tag";
  divisionWrap.hidden = audience !== "division";
  divisionSelect.required = audience === "division";
  help.textContent = audience === "executive"
    ? "Csak az Excelben az Elnökség divízióhoz tartozó tagok látják."
    : audience === "division"
      ? "Csak a kiválasztott divízió tagjai látják."
      : audience === "open"
        ? "Nyílt esemény, minden érdeklődő számára."
        : mandatory ? "Minden tag számára kötelező." : "Az esemény minden tagnak látható.";
}

function updatePublishControls() {
  const item = selectedAdminEvent();
  if (!item) return;
  const button = document.getElementById("publish-event");
  const help = document.getElementById("event-publication-help");
  button.textContent = "Publikálás";
  help.textContent = item.published
    ? "A gomb menti a módosításokat, és frissíti a tagoknak látható eseményt."
    : "Vázlatként csak az adminfelületen látható. Publikáld, ha készen áll a tagoknak.";
}

function openEventManagement(id) {
  if (!canManageEvents()) { showToast("Az események szerkesztéséhez kezelői vagy admin szerepkör szükséges."); return; }
  selectedAdminEventId = id;
  pendingCoverImage = "";
  pendingCoverPosition = null;
  document.getElementById("event-cover-upload").value = "";
  const item = selectedAdminEvent();
  document.getElementById("event-title-input").value = item.title;
  document.getElementById("event-place-input").value = item.place || "";
  document.getElementById("event-date-input").value = item.date || "";
  document.getElementById("event-start-input").value = item.time || "";
  document.getElementById("event-end-input").value = item.endTime || "";
  normalizeAudience(item);
  document.getElementById("event-audience-input").value = item.audienceType;
  document.getElementById("event-target-division-input").value = item.targetDivision || "";
  document.getElementById("event-required-input").checked = Boolean(item.mandatory);
  updateAudienceControls();
  const sortMembersByName = members => [...members].sort((a, b) => a.name.localeCompare(b.name, "hu"));
  document.getElementById("event-staff-person").innerHTML = `<option value="">Válassz tagot</option>${sortMembersByName(leadershipMembers).map(member => `<option value="${member.id}">${member.name} · ${member.division}</option>`).join("")}<option value="member-list">Egyéb</option>`;
  document.getElementById("event-staff-other-person").innerHTML = `<option value="">Válassz aktív tagot</option>${sortMembersByName(activeNonLeadershipMembers).map(member => `<option value="${member.id}">${member.name} · ${member.division}</option>`).join("")}`;
  document.getElementById("event-staff-role").value = "organizer";
  document.getElementById("event-staff-freeform-name").value = "";
  updateStaffEntryControls();
  renderEventStaff();
  document.getElementById("admin-event-title").textContent = item.title;
  document.getElementById("admin-event-subhead").textContent = `${formatDate(item.date)} · ${item.place || "Helyszín nincs megadva"} · szervezői nézet`;
  const selector = document.getElementById("artwork-event-select");
  selector.value = item.id;
  updateQuizPrediction();
  renderArtworkPreview();
  renderCheckins();
  updatePublishControls();
  showView("admin-event");
}

function renderEventStaff() {
  const item = selectedAdminEvent();
  const list = document.getElementById("event-staff-assignments");
  list.innerHTML = Object.entries(staffRoles).map(([role, label]) => {
    const assigned = (item.assignments || []).filter(entry => assignedInRole(entry, role));
    if (!assigned.length) return "";
    const roleMeta = role === "other" ? "" : ` · +${staffRolePoints[role]} pont`;
    return `<section class="staff-role-group"><h4>${label}${roleMeta}</h4><div>${assigned.map(entry => {
      const name = entry.name || memberById(entry.memberId)?.name;
      const removeAttribute = entry.name ? `data-remove-staff-name="${escapeHtml(entry.name)}"` : `data-remove-staff="${entry.memberId}"`;
      return name ? `<span class="staff-chip">${escapeHtml(name)}<button type="button" ${removeAttribute} data-role="${role}" aria-label="${escapeHtml(name)} eltávolítása">×</button></span>` : "";
    }).join("")}</div></section>`;
  }).join("") || `<p class="staff-empty">Még nincs felelős vagy közreműködő hozzárendelve.</p>`;
}

function updateStaffEntryControls() {
  const role = document.getElementById("event-staff-role").value;
  const personSelect = document.getElementById("event-staff-person");
  const isFreeform = role === "other";
  const isMemberList = personSelect.value === "member-list";
  document.getElementById("event-staff-person-wrap").hidden = isFreeform;
  personSelect.required = !isFreeform;
  const memberListWrap = document.getElementById("event-staff-other-wrap");
  const memberListSelect = document.getElementById("event-staff-other-person");
  memberListWrap.hidden = isFreeform || !isMemberList;
  memberListSelect.required = !isFreeform && isMemberList;
  if (isFreeform || !isMemberList) memberListSelect.value = "";
  const freeformWrap = document.getElementById("event-staff-freeform-wrap");
  const freeformInput = document.getElementById("event-staff-freeform-name");
  freeformWrap.hidden = !isFreeform;
  freeformInput.required = isFreeform;
  if (!isFreeform) freeformInput.value = "";
}

function formatDate(date) {
  if (!date) return "Dátum nincs megadva";
  return new Intl.DateTimeFormat("hu-HU", { year: "numeric", month: "long", day: "numeric" }).format(new Date(`${date}T12:00:00`));
}

function updateQuizPrediction() {
  const item = selectedAdminEvent();
  const panel = document.getElementById("quiz-prediction-panel");
  panel.hidden = !item.isQuiz;
  document.getElementById("quiz-current-count").textContent = `${item.registrationCount || 0} fő`;
  const prediction = getQuizPrediction(item.registrationCount || 0);
  document.getElementById("quiz-prediction-result").textContent = prediction == null
    ? "Add meg a két korábbi kvíz jelentkező- és megjelentlétszámát a becsléshez."
    : `Becsült megjelenés: ${prediction} fő · a korábbi kvízek átlagos megjelenési aránya alapján.`;
  document.getElementById("quiz-one-registered").value = quizHistory.one?.registered ?? "";
  document.getElementById("quiz-one-attended").value = quizHistory.one?.attended ?? "";
  document.getElementById("quiz-two-registered").value = quizHistory.two?.registered ?? "";
  document.getElementById("quiz-two-attended").value = quizHistory.two?.attended ?? "";
}

function syncEventDate(item, date) {
  item.date = date;
  const parsed = new Date(`${date}T12:00:00`);
  item.day = String(parsed.getDate()).padStart(2, "0");
  item.month = new Intl.DateTimeFormat("hu-HU", { month: "short" }).format(parsed).replace(".", "").toLocaleUpperCase("hu");
  item.weekday = new Intl.DateTimeFormat("hu-HU", { weekday: "long" }).format(parsed);
}

function selectedArtworkEvent() {
  return events.find(item => item.id === document.getElementById("artwork-event-select").value) || events[0];
}

function renderArtworkPreview() {
  const item = selectedArtworkEvent();
  const preview = document.getElementById("event-cover-preview");
  const image = pendingCoverImage || item.coverImage || item.baseCoverImage;
  const position = pendingCoverPosition || { x: item.coverPositionX ?? 50, y: item.coverPositionY ?? 50, zoom: item.coverZoom ?? 100 };
  document.getElementById("event-cover-preview-type").textContent = item.type;
  document.getElementById("event-cover-preview-required").hidden = !item.mandatory;
  document.getElementById("event-cover-preview-month").textContent = item.month;
  document.getElementById("event-cover-preview-day").textContent = item.day;
  const previewImage = document.getElementById("event-cover-preview-image");
  if (image && previewImage.getAttribute("src") !== image) previewImage.setAttribute("src", image);
  if (!image) previewImage.removeAttribute("src");
  previewImage.style.objectPosition = `${position.x}% ${position.y}%`;
  previewImage.style.transform = `scale(${position.zoom / 100})`;
  preview.classList.toggle("draggable", Boolean(image));
  const zoomSlider = document.getElementById("event-cover-zoom");
  zoomSlider.value = position.zoom;
  document.getElementById("event-cover-zoom-value").textContent = `${position.zoom}%`;
  document.getElementById("save-event-cover").disabled = !pendingCoverImage && !pendingCoverPosition;
  document.getElementById("remove-event-cover").disabled = !item.coverImage && item.coverPositionX == null && item.coverPositionY == null;
}

function initArtworkEditor() {
  const selector = document.getElementById("artwork-event-select");
  selector.innerHTML = events.map(item => `<option value="${item.id}">${item.title}</option>`).join("");
  selector.addEventListener("change", () => {
    pendingCoverImage = "";
    pendingCoverPosition = null;
    document.getElementById("event-cover-upload").value = "";
    openEventManagement(selector.value);
  });

  const preview = document.getElementById("event-cover-preview");
  let dragState = null;
  preview.addEventListener("pointerdown", event => {
    const item = selectedArtworkEvent();
    if (!(pendingCoverImage || item.coverImage || item.baseCoverImage)) return;
    dragState = { pointerId: event.pointerId, startX: event.clientX, startY: event.clientY, position: pendingCoverPosition || { x: item.coverPositionX ?? 50, y: item.coverPositionY ?? 50, zoom: item.coverZoom ?? 100 } };
    preview.setPointerCapture(event.pointerId);
    preview.classList.add("dragging");
    event.preventDefault();
  });
  preview.addEventListener("pointermove", event => {
    if (!dragState || dragState.pointerId !== event.pointerId) return;
    const rect = preview.getBoundingClientRect();
    const imageElement = document.getElementById("event-cover-preview-image");
    const scale = Math.max(rect.width / imageElement.naturalWidth, rect.height / imageElement.naturalHeight) * ((pendingCoverPosition?.zoom ?? selectedArtworkEvent().coverZoom ?? 100) / 100);
    const overflowX = Math.max(0, imageElement.naturalWidth * scale - rect.width);
    const overflowY = Math.max(0, imageElement.naturalHeight * scale - rect.height);
    if (overflowX < 1 && overflowY < 1) return;
    pendingCoverPosition = {
      x: overflowX < 1 ? dragState.position.x : Math.max(0, Math.min(100, dragState.position.x - ((event.clientX - dragState.startX) / overflowX) * 100)),
      y: overflowY < 1 ? dragState.position.y : Math.max(0, Math.min(100, dragState.position.y - ((event.clientY - dragState.startY) / overflowY) * 100)),
      zoom: pendingCoverPosition?.zoom ?? selectedArtworkEvent().coverZoom ?? 100
    };
    renderArtworkPreview();
  });
  const stopDragging = () => { dragState = null; preview.classList.remove("dragging"); };
  preview.addEventListener("pointerup", stopDragging);
  preview.addEventListener("pointercancel", stopDragging);

  document.getElementById("event-cover-zoom").addEventListener("input", event => {
    const item = selectedArtworkEvent();
    const current = pendingCoverPosition || { x: item.coverPositionX ?? 50, y: item.coverPositionY ?? 50 };
    pendingCoverPosition = { ...current, zoom: Number(event.target.value) };
    renderArtworkPreview();
  });

  document.getElementById("event-cover-upload").addEventListener("change", async event => {
    const file = event.target.files?.[0];
    if (!file) return;
    if (!file.type.startsWith("image/")) {
      showToast("Kérlek, képfájlt válassz.");
      event.target.value = "";
      return;
    }
    if (file.size > 15 * 1024 * 1024) {
      showToast("A feltöltendő kép legfeljebb 15 MB lehet.");
      event.target.value = "";
      return;
    }
    try {
      pendingCoverImage = await compressCoverImage(file);
    pendingCoverPosition = { x: 50, y: 50, zoom: 100 };
      renderArtworkPreview();
      showToast("Előnézet elkészült. Mentsd el a háttérképet.");
    } catch (error) {
      showToast("Ezt a képet nem sikerült megnyitni.");
    }
  });

  document.getElementById("save-event-cover").addEventListener("click", () => {
    if (!canManageEvents()) { showToast("Az események szerkesztéséhez kezelői vagy admin szerepkör szükséges."); return; }
    if (!pendingCoverImage && !pendingCoverPosition) return;
    const item = selectedArtworkEvent();
    if (pendingCoverImage) item.coverImage = pendingCoverImage;
    if (pendingCoverPosition) {
      item.coverPositionX = pendingCoverPosition.x;
      item.coverPositionY = pendingCoverPosition.y;
      item.coverZoom = pendingCoverPosition.zoom;
    }
    if (!persistCoverImages()) return;
    pendingCoverImage = "";
    pendingCoverPosition = null;
    document.getElementById("event-cover-upload").value = "";
    renderArtworkPreview();
    renderEvents();
    showToast("Az esemény háttérképe elmentve.");
  });

  document.getElementById("remove-event-cover").addEventListener("click", () => {
    const item = selectedArtworkEvent();
    delete item.coverImage;
    delete item.coverPositionX;
    delete item.coverPositionY;
    delete item.coverZoom;
    pendingCoverImage = "";
    pendingCoverPosition = null;
    document.getElementById("event-cover-upload").value = "";
    if (!persistCoverImages()) return;
    renderArtworkPreview();
    renderEvents();
    showToast("Az esemény egyéni háttere eltávolítva.");
  });

  renderArtworkPreview();
}

async function compressCoverImage(file) {
  let source;
  if (window.createImageBitmap) {
    source = await createImageBitmap(file);
  } else {
    source = await new Promise((resolve, reject) => {
      const image = new Image();
      const url = URL.createObjectURL(file);
      image.onload = () => { URL.revokeObjectURL(url); resolve(image); };
      image.onerror = () => { URL.revokeObjectURL(url); reject(new Error("Invalid image")); };
      image.src = url;
    });
  }
  const scale = Math.min(1, 1600 / source.width, 1000 / source.height);
  const canvas = document.createElement("canvas");
  canvas.width = Math.max(1, Math.round(source.width * scale));
  canvas.height = Math.max(1, Math.round(source.height * scale));
  canvas.getContext("2d").drawImage(source, 0, 0, canvas.width, canvas.height);
  source.close?.();
  return canvas.toDataURL("image/jpeg", 0.84);
}

function persistCoverImages() {
  const covers = Object.fromEntries(events
    .filter(item => item.coverImage || item.coverPositionX != null || item.coverPositionY != null || item.coverZoom != null)
    .map(item => [item.id, { image: item.coverImage || "", x: item.coverPositionX ?? 50, y: item.coverPositionY ?? 50, zoom: item.coverZoom ?? 100 }]));
  try {
    localStorage.setItem(COVER_STORAGE_KEY, JSON.stringify(covers));
    return true;
  } catch (error) {
    showToast("Nem sikerült menteni a böngésző tárhelyére. Próbálj kisebb képet.");
    return false;
  }
}

const profilePhotoLightbox = document.getElementById("profile-photo-lightbox");
let profilePhotoReturnFocus = null;
function openProfilePhoto(source) {
  const photo = source?.querySelector("img")?.src || source?.dataset.profilePhoto;
  if (!photo) return;
  profilePhotoReturnFocus = source;
  const image = document.getElementById("profile-photo-lightbox-image");
  const name = source?.dataset.profileName || source?.querySelector("img")?.alt || currentProfileData.name;
  image.src = photo;
  image.alt = `${name} profilképe`;
  document.getElementById("profile-photo-lightbox-caption").textContent = name;
  profilePhotoLightbox.hidden = false;
  document.body.classList.add("profile-photo-open");
  document.getElementById("profile-photo-lightbox-close").focus();
}
function closeProfilePhoto() {
  if (profilePhotoLightbox.hidden) return;
  profilePhotoLightbox.hidden = true;
  document.body.classList.remove("profile-photo-open");
  document.getElementById("profile-photo-lightbox-image").removeAttribute("src");
  profilePhotoReturnFocus?.focus();
  profilePhotoReturnFocus = null;
}
document.getElementById("profile-photo-lightbox-close").addEventListener("click", closeProfilePhoto);
profilePhotoLightbox.addEventListener("click", event => { if (event.target === profilePhotoLightbox) closeProfilePhoto(); });
document.addEventListener("keydown", event => {
  if (event.key === "Escape") {
    closeProfilePhoto();
    if (!document.getElementById("top-user-dropdown").hidden) {
      setTopUserMenu(false);
      document.getElementById("top-user-button").focus();
    }
  }
  const avatar = event.target.closest?.("[data-current-avatar], [data-profile-photo], .profile-avatar.has-profile-photo");
  if (avatar && !avatar.closest("#top-profile-menu") && (event.key === "Enter" || event.key === " ") && (avatar.querySelector("img") || avatar.dataset.profilePhoto)) {
    event.preventDefault();
    event.stopPropagation();
    openProfilePhoto(avatar);
  }
});

document.addEventListener("click", event => {
  const profileMenuTrigger = event.target.closest("#top-user-button");
  if (profileMenuTrigger) {
    setTopUserMenu(document.getElementById("top-user-dropdown").hidden);
    return;
  }
  const profileMenuAction = event.target.closest("[data-profile-menu-action]");
  if (profileMenuAction) {
    const action = profileMenuAction.dataset.profileMenuAction;
    setTopUserMenu(false);
    if (action === "profile") showView("profile");
    else showToast("A pilotban még nincs aktív bejelentkezési munkamenet.");
    return;
  }
  if (!event.target.closest("#top-profile-menu")) setTopUserMenu(false);
  const photoAvatar = event.target.closest("[data-current-avatar], [data-profile-photo], .profile-avatar.has-profile-photo");
  if (photoAvatar && !photoAvatar.closest("#top-profile-menu") && (photoAvatar.querySelector("img") || photoAvatar.dataset.profilePhoto)) {
    event.preventDefault();
    event.stopPropagation();
    openProfilePhoto(photoAvatar);
    return;
  }
  if (event.target.closest("#profile-photo-lightbox-close") || event.target === profilePhotoLightbox) { closeProfilePhoto(); return; }
  const removeRegistration = event.target.closest("[data-registration-remove]");
  if (removeRegistration) {
    removeRegisteredMember(removeRegistration.dataset.registrationRemove, removeRegistration.dataset.registrationMember);
    return;
  }
  const registeredMember = event.target.closest("[data-registered-member]");
  if (registeredMember) { openPublicMemberProfile(registeredMember.dataset.registeredMember); return; }
  const profileTab = event.target.closest("[data-profile-tab]");
  if (profileTab) {
    const selectedTab = profileTab.dataset.profileTab;
    document.querySelectorAll("[data-profile-tab]").forEach(tab => {
      const selected = tab === profileTab;
      tab.classList.toggle("active", selected);
      tab.setAttribute("aria-selected", String(selected));
    });
    document.querySelectorAll("[data-profile-panel]").forEach(panel => { panel.hidden = panel.dataset.profilePanel !== selectedTab; });
    return;
  }
  const memberSelect = event.target.closest("[data-member-select]");
  if (memberSelect) {
    const member = memberProfiles.find(person => person.id === memberSelect.dataset.memberSelect);
    if (member) {
      document.getElementById("member-profile-search").value = member.name;
      document.getElementById("member-profile-suggestions").hidden = true;
      renderMemberProfile(member.id);
    }
    return;
  }
  if (!event.target.closest(".member-profile-search-wrap")) document.getElementById("member-profile-suggestions").hidden = true;
  const adminListTrigger = event.target.closest("[data-admin-list]");
  if (adminListTrigger) { openAdminList(adminListTrigger.dataset.adminList); return; }
  if (event.target.closest("#admin-list-close") || event.target.id === "admin-list-modal") { closeAdminList(); return; }
  const modalPast = event.target.closest("[data-modal-past]");
  if (modalPast) { const id = modalPast.dataset.modalPast; closeAdminList(); openEventDetail(id, "admin-home"); return; }
  const modalManage = event.target.closest("[data-modal-manage]");
  if (modalManage) { const id = modalManage.dataset.modalManage; closeAdminList(); openEventManagement(id); showToast("Az esemény kezelőfelülete megnyitva."); return; }
  const pastEventLink = event.target.closest("[data-past-event]");
  if (pastEventLink) { event.preventDefault(); openEventDetail(pastEventLink.dataset.pastEvent, "admin"); return; }
  const nav = event.target.closest("[data-view]");
  if (nav) {
    if (nav.tagName === "A") event.preventDefault();
    showView(nav.dataset.view);
  }
  const detailRegistration = event.target.closest("[data-detail-register]");
  if (detailRegistration) {
    const item = events.find(entry => entry.id === detailRegistration.dataset.detailRegister);
    if (!item) return;
    const previousIds = [...(item.registeredMemberIds || [])];
    const previousCount = Number(item.registrationCount || 0);
    const previousRegistered = item.registered;
    toggleCurrentMemberRegistration(item);
    if (!persistEvents()) {
      item.registeredMemberIds = previousIds;
      item.registrationCount = previousCount;
      item.registered = previousRegistered;
      return;
    }
    renderEvents();
    renderAdminEvents();
    renderCheckins();
    openEventDetail(item.id, detailReturnView);
    showToast(item.registered ? "Sikeresen jelentkeztél az eseményre." : "Leiratkoztál az eseményről.");
    return;
  }
  const registration = event.target.closest("[data-register]");
  if (registration) {
    const item = events.find(entry => entry.id === registration.dataset.register);
    if (!item) return;
    const previousIds = [...(item.registeredMemberIds || [])];
    const previousCount = Number(item.registrationCount || 0);
    const previousRegistered = item.registered;
    toggleCurrentMemberRegistration(item);
    if (!persistEvents()) {
      item.registeredMemberIds = previousIds;
      item.registrationCount = previousCount;
      item.registered = previousRegistered;
      return;
    }
    renderEvents();
    if (selectedAdminEventId === item.id) updateQuizPrediction();
    renderAdminEvents();
    showToast(item.registered ? "Sikeresen jelentkeztél az eseményre." : "Leiratkoztál az eseményről.");
    return;
  }
  const eventCard = event.target.closest("[data-event-detail]");
  if (eventCard) { openEventDetail(eventCard.dataset.eventDetail); return; }
  const filter = event.target.closest("[data-filter]");
  if (filter) { document.querySelectorAll(".filter-tab").forEach(tab => tab.classList.toggle("selected", tab === filter)); renderEvents(); }
  const checkin = event.target.closest("[data-checkin]");
  if (checkin) {
    if (!canManageEvents()) { showToast("A jelenlétkezeléshez kezelői vagy admin szerepkör szükséges."); return; }
    const person = demoMembers.find(member => member.id === checkin.dataset.checkin);
    if (person) { person.checked = !person.checked; renderCheckins(); }
  }
  const manage = event.target.closest("[data-manage]");
  if (manage) { openEventManagement(manage.dataset.manage); showToast("Az esemény kezelőfelülete megnyitva."); }
});

document.addEventListener("keydown", event => {
  if (event.key === "Escape" && !document.getElementById("admin-list-modal").hidden) { closeAdminList(); return; }
  if (event.key === "Enter" && event.target.id === "member-profile-search") {
    const firstSuggestion = document.querySelector("#member-profile-suggestions [data-member-select]");
    if (firstSuggestion) { event.preventDefault(); firstSuggestion.click(); }
  }
  const card = event.target.closest("[data-event-detail]");
  if (card && (event.key === "Enter" || event.key === " ") && !event.target.closest("[data-register]")) {
    event.preventDefault();
    openEventDetail(card.dataset.eventDetail);
  }
});

document.getElementById("admin-list-search-input").addEventListener("input", event => {
  const query = event.target.value.trim().toLocaleLowerCase("hu");
  document.querySelectorAll("#admin-list-content [data-list-row]").forEach(row => { row.hidden = !row.dataset.search.includes(query); });
});
document.getElementById("member-profile-search").addEventListener("input", renderMemberProfileSuggestions);
document.getElementById("member-profile-search").addEventListener("focus", renderMemberProfileSuggestions);

document.getElementById("event-detail-back").addEventListener("click", () => showView(detailReturnView));
document.getElementById("project-detail-back").addEventListener("click", () => showView(projectDetailReturnView));
document.getElementById("public-profile-back").addEventListener("click", () => showView(publicProfileReturnView));

document.getElementById("organizer-toggle").addEventListener("click", () => { renderAdminEvents(); showView("admin"); });
document.getElementById("event-audience-input").addEventListener("change", updateAudienceControls);
document.getElementById("event-staff-person").addEventListener("change", event => {
  updateStaffEntryControls();
});
document.getElementById("event-staff-role").addEventListener("change", updateStaffEntryControls);
document.getElementById("event-required-input").addEventListener("change", event => {
  document.getElementById("event-cover-preview-required").hidden = !event.target.checked;
  updateAudienceControls();
});
document.getElementById("member-search").addEventListener("input", renderCheckins);
document.getElementById("scan-button").addEventListener("click", () => canManageEvents() ? showToast("A QR-beolvasás a működő appban lesz elérhető.") : showToast("A jelenlétkezeléshez kezelői vagy admin szerepkör szükséges."));
document.getElementById("save-checkins").addEventListener("click", () => canManageEvents() ? showToast("A minta jelenléti adatok mentve.") : showToast("A jelenlétkezeléshez kezelői vagy admin szerepkör szükséges."));
function readEventFields(item) {
  item.title = document.getElementById("event-title-input").value.trim();
  item.place = document.getElementById("event-place-input").value.trim();
  syncEventDate(item, document.getElementById("event-date-input").value);
  item.time = document.getElementById("event-start-input").value;
  item.endTime = document.getElementById("event-end-input").value;
  item.audienceType = document.getElementById("event-audience-input").value;
  item.targetDivision = item.audienceType === "division" ? document.getElementById("event-target-division-input").value : "";
  item.mandatory = document.getElementById("event-required-input").checked;
  if (item.audienceType === "division" && !item.targetDivision) { showToast("Válaszd ki, melyik divíziónak szól az esemény."); return false; }
  item.isQuiz = /kvíz/i.test(item.title);
  if (item.time >= item.endTime) { showToast("A befejezés időpontja legyen a kezdés után."); return false; }
  return true;
}

document.getElementById("event-details-form").addEventListener("submit", event => {
  event.preventDefault();
  if (!canManageEvents()) { showToast("Az események szerkesztéséhez kezelői vagy admin szerepkör szükséges."); return; }
  const item = selectedAdminEvent();
  if (!readEventFields(item)) return;
  if (!persistEvents()) return;
  const eventOption = document.querySelector(`#artwork-event-select option[value="${item.id}"]`);
  if (eventOption) eventOption.textContent = item.title;
  document.getElementById("admin-event-title").textContent = item.title;
  document.getElementById("admin-event-subhead").textContent = `${formatDate(item.date)} · ${item.place} · ${item.time}–${item.endTime} · szervezői nézet`;
  document.getElementById("event-cover-preview-month").textContent = item.month;
  document.getElementById("event-cover-preview-day").textContent = item.day;
  document.getElementById("event-cover-preview-type").textContent = item.type;
  updateQuizPrediction();
  renderArtworkPreview();
  renderEvents();
  renderAdminEvents();
  updatePublishControls();
  showToast("Az esemény adatai elmentve.");
});

document.getElementById("publish-event").addEventListener("click", () => {
  if (!canManageEvents()) { showToast("Esemény publikálásához kezelői vagy admin szerepkör szükséges."); return; }
  const item = selectedAdminEvent();
  if (!item) return;
  const form = document.getElementById("event-details-form");
  if (!form.reportValidity() || !readEventFields(item)) return;
  const wasPublished = item.published;
  item.published = true;
  if (!persistEvents()) return;
  const eventOption = document.querySelector(`#artwork-event-select option[value="${item.id}"]`);
  if (eventOption) eventOption.textContent = item.title;
  document.getElementById("admin-event-title").textContent = item.title;
  document.getElementById("admin-event-subhead").textContent = `${formatDate(item.date)} · ${item.place} · ${item.time}–${item.endTime} · szervezői nézet`;
  document.getElementById("event-cover-preview-month").textContent = item.month;
  document.getElementById("event-cover-preview-day").textContent = item.day;
  document.getElementById("event-cover-preview-type").textContent = item.type;
  updateQuizPrediction();
  renderArtworkPreview();
  renderEvents();
  renderAdminEvents();
  updatePublishControls();
  showToast(wasPublished ? "A módosítások elmentve, a publikált esemény frissítve." : "Az esemény publikálva, mostantól látható a tagoknak.");
});

document.getElementById("delete-event").addEventListener("click", () => {
  if (currentAppRole() !== "admin") { showToast("Eseményt csak admin törölhet."); return; }
  const index = events.findIndex(item => item.id === selectedAdminEventId);
  if (index < 0) return;
  const item = events[index];
  if (!window.confirm(`Biztosan törlöd a(z) „${item.title}” eseményt? A művelet nem vonható vissza.`)) return;
  events.splice(index, 1);
  if (!item.id.startsWith("new-") && !deletedEventIds.includes(item.id)) deletedEventIds.push(item.id);
  if (!persistEvents()) {
    events.splice(index, 0, item);
    deletedEventIds = deletedEventIds.filter(id => id !== item.id);
    return;
  }
  try {
    const covers = JSON.parse(localStorage.getItem(COVER_STORAGE_KEY) || "{}");
    delete covers[item.id];
    localStorage.setItem(COVER_STORAGE_KEY, JSON.stringify(covers));
  } catch (error) { console.warn("Az esemény hátterét nem sikerült eltávolítani.", error); }
  selectedAdminEventId = events[0]?.id || "";
  document.getElementById("artwork-event-select").innerHTML = events.map(entry => `<option value="${entry.id}">${entry.title}</option>`).join("");
  renderEvents();
  renderAdminEvents();
  showView("admin");
  showToast("Az esemény törölve.");
});

document.getElementById("save-quiz-history").addEventListener("click", () => {
  const readRow = (registeredId, attendedId) => ({
    registered: document.getElementById(registeredId).value,
    attended: document.getElementById(attendedId).value
  });
  quizHistory = { one: readRow("quiz-one-registered", "quiz-one-attended"), two: readRow("quiz-two-registered", "quiz-two-attended") };
  const invalid = [quizHistory.one, quizHistory.two].some(row => (row.registered === "") !== (row.attended === "") || (row.registered !== "" && (Number(row.attended) > Number(row.registered) || Number(row.registered) < 1)));
  if (invalid) { showToast("Mindkét korábbi kvíznél add meg a jelentkező- és megjelentlétszámot; a megjelentek száma nem lehet nagyobb."); return; }
  localStorage.setItem(QUIZ_HISTORY_KEY, JSON.stringify(quizHistory));
  updateQuizPrediction();
  renderEvents();
  showToast("A korábbi kvízek adatai elmentve.");
});

document.getElementById("add-event-staff").addEventListener("click", () => {
  if (!canManageEvents()) { showToast("Eseménykezeléshez kezelői vagy admin szerepkör szükséges."); return; }
  const role = document.getElementById("event-staff-role").value;
  const selectedPerson = document.getElementById("event-staff-person").value;
  const item = selectedAdminEvent();
  item.assignments ||= [];
  let assignment;
  if (role === "other") {
    const name = document.getElementById("event-staff-freeform-name").value.trim();
    if (!name) { showToast("Add meg az egyéb közreműködő nevét."); return; }
    if (item.assignments.some(entry => entry.role === "other" && entry.name?.toLocaleLowerCase("hu") === name.toLocaleLowerCase("hu"))) { showToast("Ez a közreműködő már hozzá van rendelve ehhez az eseményhez."); return; }
    assignment = { name, role, points: staffRolePoints.other };
  } else {
    const memberId = selectedPerson === "member-list" ? document.getElementById("event-staff-other-person").value : selectedPerson;
    if (!memberId) { showToast("Válassz ki egy tagot."); return; }
    if (item.assignments.some(entry => entry.memberId === memberId && assignedInRole(entry, role))) { showToast("Ez a tag már hozzá van rendelve ehhez a szerephez."); return; }
    assignment = { memberId, role, points: staffRolePoints[role] };
  }
  item.assignments.push(assignment);
  if (!persistEvents()) return;
  renderEventStaff();
  renderAdminEvents();
  renderEvents();
  document.getElementById("event-staff-person").value = "";
  document.getElementById("event-staff-other-person").value = "";
  document.getElementById("event-staff-freeform-name").value = "";
  updateStaffEntryControls();
  showToast("A felelős hozzáadva az eseményhez.");
});

document.getElementById("event-staff-assignments").addEventListener("click", event => {
  const remove = event.target.closest("[data-remove-staff], [data-remove-staff-name]");
  if (!remove) return;
  const item = selectedAdminEvent();
  item.assignments = (item.assignments || []).filter(entry => remove.dataset.removeStaffName
    ? !(entry.role === "other" && entry.name === remove.dataset.removeStaffName)
    : !(entry.memberId === remove.dataset.removeStaff && assignedInRole(entry, remove.dataset.role)));
  if (!persistEvents()) return;
  renderEventStaff();
  renderAdminEvents();
  renderEvents();
});

function createNewEvent() {
  if (!canManageEvents()) { showToast("Esemény létrehozásához kezelői vagy admin szerepkör szükséges."); return; }
  const id = `new-${Date.now()}`;
  const today = new Date();
  const date = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, "0")}-${String(today.getDate()).padStart(2, "0")}`;
  const item = { id, title: "Új esemény", type: "KÖZÖSSÉGI PROGRAM", date, day: String(today.getDate()).padStart(2, "0"), month: new Intl.DateTimeFormat("hu-HU", { month: "short" }).format(today).replace(".", "").toLocaleUpperCase("hu"), weekday: "", time: "18:00", endTime: "20:00", place: "", description: "", tone: "blue", registered: false, registrationCount: 0, isQuiz: false, audienceType: "optional", targetDivision: "", published: false };
  item.weekday = new Intl.DateTimeFormat("hu-HU", { weekday: "long" }).format(today);
  events.push(item);
  persistEvents();
  renderAdminEvents();
  renderEvents();
  document.getElementById("artwork-event-select").innerHTML = events.map(entry => `<option value="${entry.id}">${entry.title}</option>`).join("");
  openEventManagement(id);
  showToast("Az új esemény szerkeszthető. Add meg az alapadatait, majd mentsd el.");
}
document.getElementById("new-event").addEventListener("click", createNewEvent);
document.getElementById("organizer-new-event").addEventListener("click", createNewEvent);

function initOrganizerActionLayout() {
  const container = document.getElementById("organizer-actions");
  const key = "mkt-bge-organizer-action-order-v1";
  let savedOrder = [];
  try { savedOrder = JSON.parse(localStorage.getItem(key) || "[]"); } catch (error) { savedOrder = []; }
  savedOrder.forEach(id => { const action = container.querySelector(`[data-action-id="${id}"]`); if (action) container.append(action); });
  const toggle = document.getElementById("organizer-layout-toggle");
  let arranging = false;
  let dragged = null;
  toggle.addEventListener("click", () => {
    arranging = !arranging;
    container.classList.toggle("arranging", arranging);
    container.querySelectorAll("[data-action-id]").forEach(action => { action.draggable = arranging; });
    toggle.textContent = arranging ? "Sorrend mentése" : "Gombok sorrendje";
    if (!arranging) localStorage.setItem(key, JSON.stringify([...container.querySelectorAll("[data-action-id]")].map(action => action.dataset.actionId)));
  });
  container.addEventListener("dragstart", event => {
    const action = event.target.closest("[data-action-id]");
    if (!arranging || !action) { event.preventDefault(); return; }
    dragged = action;
    action.classList.add("is-dragging");
    event.dataTransfer.effectAllowed = "move";
  });
  container.addEventListener("dragend", () => { dragged?.classList.remove("is-dragging"); dragged = null; });
  container.addEventListener("dragover", event => {
    if (!arranging || !dragged) return;
    event.preventDefault();
    const target = event.target.closest("[data-action-id]");
    if (target && target !== dragged) {
      const box = target.getBoundingClientRect();
      const after = event.clientX > box.left + box.width / 2;
      container.insertBefore(dragged, after ? target.nextSibling : target);
    }
  });
  container.addEventListener("click", event => { if (arranging) event.preventDefault(); });
}

const profileEditPanel = document.getElementById("profile-edit-panel");
const profileEditForm = document.getElementById("profile-edit-form");
let pendingProfilePhoto = null;
function fillProfileEditForm() {
  for (const key of ["name", "id", "neptun", "email", "division", "position", "major"]) profileEditForm.elements.namedItem(key).value = currentProfileData[key] || "";
  profileEditForm.elements.namedItem("active").value = String(Boolean(currentProfileData.active));
  pendingProfilePhoto = currentProfileData.photo || "";
  const preview = document.getElementById("profile-photo-preview");
  const initials = currentProfileData.name.trim().split(/\s+/).slice(0, 2).map(part => part[0]).join("").toLocaleUpperCase("hu");
  preview.innerHTML = pendingProfilePhoto ? `<img src="${pendingProfilePhoto}" alt="Profilkép előnézete" />` : initials;
  preview.classList.toggle("has-profile-photo", Boolean(pendingProfilePhoto));
  document.getElementById("profile-photo-upload").value = "";
}
function updateProfileRoster(previousId) {
  const sourceId = currentProfileData.activityId || previousId;
  for (const person of memberProfiles) {
    if (person.id === previousId || person.id === sourceId) Object.assign(person, { id: currentProfileData.id, name: currentProfileData.name, division: currentProfileData.division, position: currentProfileData.position, major: currentProfileData.major, neptun: currentProfileData.neptun, email: currentProfileData.email, active: currentProfileData.active, executive: Boolean(currentProfileData.executive || currentProfileData.division === "Elnökség") });
  }
  for (const person of [...leadershipMembers, ...activeNonLeadershipMembers]) {
    if (person.id === previousId || person.id === sourceId) Object.assign(person, { id: currentProfileData.id, name: currentProfileData.name, division: currentProfileData.division });
  }
}
document.getElementById("profile-edit-open").addEventListener("click", () => {
  fillProfileEditForm();
  profileEditPanel.hidden = false;
  profileEditPanel.scrollIntoView({ behavior: "smooth", block: "nearest" });
});
document.getElementById("profile-edit-cancel").addEventListener("click", () => { profileEditPanel.hidden = true; pendingProfilePhoto = null; });
document.getElementById("profile-photo-upload").addEventListener("change", async event => {
  const file = event.target.files?.[0];
  if (!file) return;
  if (!file.type.startsWith("image/")) { showToast("Kérlek, képfájlt válassz."); return; }
  if (file.size > 15 * 1024 * 1024) { showToast("A profilkép legfeljebb 15 MB lehet."); event.target.value = ""; return; }
  try {
    pendingProfilePhoto = await compressCoverImage(file);
    const preview = document.getElementById("profile-photo-preview");
    preview.innerHTML = `<img src="${pendingProfilePhoto}" alt="Profilkép előnézete" />`;
    preview.classList.add("has-profile-photo");
  } catch (error) { showToast("A képet nem sikerült betölteni."); }
});
document.getElementById("profile-photo-remove").addEventListener("click", () => {
  pendingProfilePhoto = "";
  const preview = document.getElementById("profile-photo-preview");
  const name = profileEditForm.elements.namedItem("name").value.trim();
  preview.textContent = name.split(/\s+/).slice(0, 2).map(part => part[0]).join("").toLocaleUpperCase("hu") || "MKT";
  preview.classList.remove("has-profile-photo");
  document.getElementById("profile-photo-upload").value = "";
});
profileEditForm.addEventListener("submit", event => {
  event.preventDefault();
  const formData = new FormData(profileEditForm);
  const previousId = currentProfileData.id;
  currentProfileData = {
    ...currentProfileData,
    name: String(formData.get("name")).trim(), id: String(formData.get("id")).trim(),
    neptun: String(formData.get("neptun")).trim(), email: String(formData.get("email")).trim(),
    division: String(formData.get("division")).trim(), position: String(formData.get("position")).trim(),
    major: String(formData.get("major")).trim(), active: formData.get("active") === "true", photo: pendingProfilePhoto || ""
  };
  currentMember = { ...currentMember, id: currentProfileData.id, name: currentProfileData.name, division: currentProfileData.division, executive: Boolean(currentProfileData.executive || currentProfileData.division === "Elnökség") };
  updateProfileRoster(previousId);
  try {
    localStorage.setItem(CURRENT_PROFILE_STORAGE_KEY, JSON.stringify(currentProfileData));
  } catch (error) {
    showToast("Nem sikerült menteni. Válassz kisebb profilképet.");
    return;
  }
  renderCurrentMemberData();
  renderProjects();
  profileEditPanel.hidden = true;
  showToast("A profil mentve.");
});
document.getElementById("member-role-search").addEventListener("input", event => renderMemberRoleRows(event.target.value));
document.getElementById("member-role-rows").addEventListener("change", event => {
  const select = event.target.closest("[data-member-role]");
  if (!select || !["admin", "manager", "member"].includes(select.value)) return;
  const memberId = select.dataset.memberRole;
  const previousRole = memberRoles[memberId];
  memberRoles[memberId] = select.value;
  try {
    localStorage.setItem(MEMBER_ROLE_STORAGE_KEY, JSON.stringify(memberRoles));
    showToast("A szerepkör mentve.");
    if (memberId === (currentProfileData.activityId || currentProfileData.id) || memberId === currentProfileData.id) applyRolePermissions();
  } catch (error) {
    if (previousRole === undefined) delete memberRoles[memberId];
    else memberRoles[memberId] = previousRole;
    select.value = memberRole(memberProfiles.find(member => memberRoleKey(member) === memberId) || { id: memberId });
    showToast("A szerepkört nem sikerült elmenteni.");
  }
});

renderCurrentMemberData();
renderMemberRoleRows();
applyRolePermissions();
renderEvents();
renderCheckins();
renderAdminEvents();
renderPastEvents();
initArtworkEditor();
updateQuizPrediction();
initOrganizerActionLayout();


