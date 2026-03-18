// --- Data ---------------------------------------------------------------
const INR = new Intl.NumberFormat("en-IN", {
  style: "currency",
  currency: "INR",
  maximumFractionDigits: 0,
});
const events = [
  {
    id: "e1",
    title: "Sunburn Arena",
    category: "Music",
    city: "Mumbai",
    date: "2025-10-05",
    time: "19:30",
    venue: "Jio World Garden",
    price: 1999,
    // image same file (base64 OR local file path like "./e1.webp")
    image: "./img1.webp",
  },
  {
    id: "e2",
    title: "JSConf India",
    category: "Tech",
    city: "Bengaluru",
    date: "2025-11-15",
    time: "09:00",
    venue: "BIEC",
    price: 4999,
    image: "./img2.webp",
  },
  {
    id: "e3",
    title: "Modern Art Expo",
    category: "Art",
    city: "Delhi",
    date: "2025-09-18",
    time: "10:00",
    venue: "Pragati Maidan",
    price: 799,
    image: "./img3.jpeg",
  },
  {
    id: "e4",
    title: "ISL: Mumbai vs Goa",
    category: "Sports",
    city: "Mumbai",
    date: "2025-12-02",
    time: "18:00",
    venue: "Mumbai Football Arena",
    price: 1200,
    image: "./img4.webp",
  },
  {
    id: "e5",
    title: "AI Summit",
    category: "Tech",
    city: "Pune",
    date: "2025-10-20",
    time: "10:00",
    venue: "ICC Towers",
    price: 3499,
    image: "./img5.jpg",
  },
  {
    id: "e6",
    title: "Indie Nights",
    category: "Music",
    city: "Bengaluru",
    date: "2025-09-28",
    time: "20:00",
    venue: "Indiranagar Club",
    price: 899,
    image: "./img6.webp",
  },
];

// --- State --------------------------------------------------------------
const state = {
  q: "",
  category: "",
  city: "",
  sort: "date",
  cart: load("cart", []),
};

// --- Helpers ------------------------------------------------------------
function save(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}
function load(key, fallback) {
  try {
    return JSON.parse(localStorage.getItem(key)) ?? fallback;
  } catch {
    return fallback;
  }
}
const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => Array.from(document.querySelectorAll(sel));

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// --- Render events ------------------------------------------------------
function render() {
  const grid = $("#eventGrid");
  grid.innerHTML = "";
  let list = events.filter(
    (e) =>
      (!state.q || (e.title + e.venue).toLowerCase().includes(state.q)) &&
      (!state.category || e.category === state.category) &&
      (!state.city || e.city === state.city)
  );
  const sorters = {
    date: (a, b) => a.date.localeCompare(b.date),
    price: (a, b) => a.price - b.price,
    name: (a, b) => a.title.localeCompare(b.title),
  };
  list.sort(sorters[state.sort]);

  const now = new Date();
  const soon = new Date(now.getTime() + 7 * 24 * 60 * 60 * 1000);

  for (const e of list) {
    const card = document.createElement("article");
    card.className = "card";
    if (new Date(e.date) <= soon) {
      card.classList.add("highlight");
    }
    card.innerHTML = `
      <div class="media" aria-hidden="true">
        <img src="${e.image}" alt="${
      e.title
    } poster" width="100%" height="100%" style="border-radius:10px;object-fit:cover; ">
      </div>
      <div class="card-body">
        <h3 class="title">${e.title}</h3>
        <div class="meta">
          <span>📍 ${e.city}</span>
          <span>🗓️ ${new Date(e.date).toLocaleDateString("en-IN", {
            day: "2-digit",
            month: "short",
            year: "numeric",
          })} ${e.time}</span>
          <span class="price">${INR.format(e.price)}</span>
        </div>
        <p class="tiny">${e.venue} • ${e.category}</p>
      </div>
      <div class="card-foot">
        <span class="tiny">Free cancellation within 24h</span>
        <button class="btn primary" data-book="${e.id}">Book</button>
      </div>`;
    grid.appendChild(card);
  }
}

// --- Tickets render -----------------------------------------------------
function renderTickets() {
  const list = $("#ticketList");
  list.innerHTML = "";
  if (state.cart.length === 0) {
    list.innerHTML =
      '<p class="tiny">No tickets yet. Book an event to see it here.</p>';
    return;
  }
  let totalAll = 0,
    i = 0;
  for (const t of state.cart) {
    const e = events.find((x) => x.id === t.eventId);
    totalAll += t.total;
    const li = document.createElement("div");
    li.className = "ticket-item";
    li.innerHTML = `
      <div>
        <div><strong>${
          e.title
        }</strong> <span class="tiny">• ${t.seat.toUpperCase()} x${
      t.qty
    }</span></div>
        <div class="tiny">${e.city} — ${new Date(e.date).toLocaleDateString(
      "en-IN"
    )} @ ${e.time}</div>
      </div>
      <div style="display:flex; align-items:center; gap:.6rem">
        <strong>${INR.format(t.total)}</strong>
        <button class="remove" data-remove="${i}">Remove</button>
      </div>`;
    list.appendChild(li);
    i++;
  }
  const totalDiv = document.createElement("div");
  totalDiv.className = "ticket-total";
  totalDiv.innerHTML = `<strong>Total: ${INR.format(totalAll)}</strong>`;
  list.appendChild(totalDiv);
}

// --- Modal logic --------------------------------------------------------
const modal = $("#modal");
const form = $("#bookingForm");
const qtyInput = $("#qty");

function openModal(eventId) {
  const e = events.find((x) => x.id === eventId);
  $("#eventId").value = eventId;
  $("#eventSummary").textContent = `${e.title} • ${e.city} • ${new Date(
    e.date
  ).toLocaleDateString("en-IN")} ${e.time}`;
  form.dataset.basePrice = e.price;
  qtyInput.value = "1";
  $("#seat").value = "standard";
  updateTotal();
  modal.setAttribute("open", "");
  modal.removeAttribute("aria-hidden");
  $("#customerName").focus();
}
function closeModal() {
  modal.removeAttribute("open");
  modal.setAttribute("aria-hidden", "true");
}

function updateTotal() {
  const base = Number(form.dataset.basePrice || 0);
  const qty = Math.max(1, parseInt(qtyInput.value || "1", 10));
  const mul = Number($("#seat").selectedOptions[0].dataset.mul);
  const total = Math.round(base * mul * qty);
  $("#total").textContent = INR.format(total);
  form.dataset.total = total;
  qtyInput.value = String(qty);
}

// --- Events -------------------------------------------------------------
document.addEventListener("click", (ev) => {
  const bookId = ev.target.closest("[data-book]")?.dataset.book;
  if (bookId) {
    openModal(bookId);
  }
  const rm = ev.target.closest("[data-remove]")?.dataset.remove;
  if (rm != null) {
    state.cart.splice(Number(rm), 1);
    save("cart", state.cart);
    renderTickets();
  }
});

$("#closeModal").addEventListener("click", closeModal);
$("#cancel").addEventListener("click", closeModal);

$("#plus").addEventListener("click", () => {
  qtyInput.value = String(Number(qtyInput.value || 1) + 1);
  updateTotal();
});
$("#minus").addEventListener("click", () => {
  qtyInput.value = String(Math.max(1, Number(qtyInput.value || 1) - 1));
  updateTotal();
});
$("#seat").addEventListener("change", updateTotal);
qtyInput.addEventListener("input", updateTotal);

// Save booking
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const booking = {
    eventId: $("#eventId").value,
    name: $("#customerName").value.trim(),
    email: $("#customerEmail").value.trim(),
    seat: $("#seat").value,
    qty: Math.max(1, parseInt($("#qty").value || "1", 10)),
    total: Number(form.dataset.total || 0),
  };
  if (!booking.name || !booking.email) {
    alert("Please enter name and email.");
    return;
  }
  if (!isValidEmail(booking.email)) {
    alert("Enter a valid email address.");
    return;
  }

  const existing = state.cart.find(
    (t) => t.eventId === booking.eventId && t.seat === booking.seat
  );
  if (existing) {
    existing.qty += booking.qty;
    existing.total += booking.total;
  } else {
    state.cart.push(booking);
  }

  save("cart", state.cart);
  closeModal();
  renderTickets();
});

// Filters
$("#q").addEventListener("input", (e) => {
  state.q = e.target.value.toLowerCase();
  render();
});
$("#category").addEventListener("change", (e) => {
  state.category = e.target.value;
  render();
});
$("#city").addEventListener("change", (e) => {
  state.city = e.target.value;
  render();
});
$("#sort").addEventListener("change", (e) => {
  state.sort = e.target.value;
  render();
});

// Keyboard close for modal
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && modal.hasAttribute("open")) closeModal();
});
modal.addEventListener("click", (e) => {
  if (e.target === modal) closeModal();
});

// Initial render
render();
renderTickets();
