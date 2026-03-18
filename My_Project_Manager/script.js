// LocalStorage key
const STORAGE_KEY = "bookmarks_v1";

// Elements
const form = document.getElementById("bookmarkForm");
const siteNameInput = document.getElementById("siteName");
const siteUrlInput = document.getElementById("siteUrl");
const bookmarksEl = document.getElementById("bookmarks");
const clearBtn = document.getElementById("clearBtn");
const searchInput = document.getElementById("search");
const saveBtn = document.getElementById("saveBtn");

// State
let bookmarks = [];
let editIndex = -1; // -1 => new bookmark mode

// Helpers
function loadBookmarks() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    bookmarks = raw ? JSON.parse(raw) : [];
  } catch (e) {
    bookmarks = [];
  }
}

function saveBookmarks() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(bookmarks));
}

function normalizeUrl(url) {
  url = url.trim();
  if (!/^https?:\/\//i.test(url)) url = "https://" + url;
  return url;
}

function validUrl(url) {
  try {
    new URL(url);
    return true;
  } catch (e) {
    return false;
  }
}

function faviconLetter(name) {
  return (name || "").trim().charAt(0).toUpperCase() || "?";
}

function renderBookmarks(filter = "") {
  bookmarksEl.innerHTML = "";
  const q = filter.trim().toLowerCase();
  const list = bookmarks.filter((b) => {
    if (!q) return true;
    return b.name.toLowerCase().includes(q) || b.url.toLowerCase().includes(q);
  });

  if (list.length === 0) {
    bookmarksEl.innerHTML =
      '<div class="muted" style="padding:12px">No bookmarks yet. Add one using the form above.</div>';
    return;
  }

  list.forEach((b, idx) => {
    const item = document.createElement("div");
    item.className = "bookmark";

    item.innerHTML = `
          <div class="left">
            <div class="favicon">${faviconLetter(b.name)}</div>
            <div class="meta">
              <a href="${escapeHtml(
                b.url
              )}" target="_blank" rel="noopener">${escapeHtml(b.name)}</a>
              <div class="url">${escapeHtml(b.url)}</div>
            </div>
          </div>
          <div class="actions">
            <button class="small secondary" data-edit="${idx}">Edit</button>
            <button class="small" data-open="${idx}">Open</button>
            <button class="small secondary" data-delete="${idx}">Delete</button>
          </div>
        `;

    bookmarksEl.appendChild(item);
  });
}

// Basic XSS escape for text content
function escapeHtml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

// Form submit
form.addEventListener("submit", (e) => {
  e.preventDefault();

  let name = siteNameInput.value.trim();
  let url = normalizeUrl(siteUrlInput.value);

  if (!name) {
    alert("Please provide a site name.");
    siteNameInput.focus();
    return;
  }
  if (!validUrl(url)) {
    alert("Please enter a valid URL.");
    siteUrlInput.focus();
    return;
  }

  const bookmark = { name, url };

  if (editIndex >= 0) {
    bookmarks[editIndex] = bookmark;
    editIndex = -1;
    saveBtn.textContent = "Save Bookmark";
  } else {
    bookmarks.unshift(bookmark); // newest first
  }

  saveBookmarks();
  renderBookmarks(searchInput.value);
  form.reset();
  siteNameInput.focus();
});

// Click actions (open, edit, delete)
bookmarksEl.addEventListener("click", (e) => {
  const target = e.target;
  const del = target.getAttribute("data-delete");
  const edt = target.getAttribute("data-edit");
  const opn = target.getAttribute("data-open");

  if (del !== null) {
    const idx = Number(del);
    if (confirm(`Delete "${bookmarks[idx].name}"?`)) {
      bookmarks.splice(idx, 1);
      saveBookmarks();
      renderBookmarks(searchInput.value);
    }
  }

  if (edt !== null) {
    const idx = Number(edt);
    editIndex = idx;
    siteNameInput.value = bookmarks[idx].name;
    siteUrlInput.value = bookmarks[idx].url;
    saveBtn.textContent = "Update Bookmark";
    siteNameInput.focus();
  }

  if (opn !== null) {
    const idx = Number(opn);
    window.open(bookmarks[idx].url, "_blank", "noopener");
  }
});

// Clear All
clearBtn.addEventListener("click", () => {
  if (bookmarks.length === 0) {
    alert("No bookmarks to clear.");
    return;
  }
  if (confirm("Clear all bookmarks?")) {
    bookmarks = [];
    saveBookmarks();
    renderBookmarks();
  }
});

// Search
searchInput.addEventListener("input", (e) => renderBookmarks(e.target.value));

// Initialise
loadBookmarks();
renderBookmarks();

// Accessibility: keyboard shortcut to focus name (N) and search (F)
document.addEventListener("keydown", (e) => {
  if (e.key.toLowerCase() === "n" && (e.ctrlKey || e.metaKey)) {
    e.preventDefault();
    siteNameInput.focus();
  }
  if (e.key.toLowerCase() === "f" && (e.ctrlKey || e.metaKey)) {
    e.preventDefault();
    searchInput.focus();
  }
});
