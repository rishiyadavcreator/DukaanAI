
const form = document.getElementById("productForm");
const emptyState = document.getElementById("emptyState");
const results = document.getElementById("results");
const statusBadge = document.getElementById("statusBadge");
const toast = document.getElementById("toast");

const STORAGE_KEY = "dukaanai_saved_listings_v1";
let currentListing = null;
let toastTimer;

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");

  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    toast.classList.remove("show");
  }, 2300);
}

function makeListing(data) {
  const name = data.name.trim();
  const features = data.features.trim();
  const price = data.price.trim();

  let title;
  let description;
  let caption;

  if (data.language === "Hindi") {
    title = `${name} — आपके रोज़मर्रा के लिए खास`;

    description =
      `${name}${price ? ` (${price})` : ""} आपके लिए एक बेहतरीन विकल्प है। ` +
      `${features || "इसकी खासियत और उपयोगिता इसे खास बनाती है।"} ` +
      "आज ही इसे अपने पसंदीदा उत्पादों में शामिल करें।";

    caption =
      `✨ पेश है ${name}! ${features || "आपके लिए एक खास पसंद।"} ` +
      "अधिक जानकारी के लिए हमसे संपर्क करें।";
  } else if (data.language === "Hinglish") {
    title = `${name} — Aapki everyday choice`;

    description =
      `${name}${price ? ` (${price})` : ""} aapke liye ek thoughtful choice hai. ` +
      `${features || "Iski useful features ise khaas banate hain."} ` +
      "Apne liye ya gift ke liye consider karein.";

    caption =
      `✨ Meet ${name}! ${features || "A little something for your day."} ` +
      "Details ke liye message karein.";
  } else {
    let styleLine = "A thoughtful little upgrade for your everyday life.";

    if (data.tone === "Premium and elegant") {
      styleLine = "Thoughtfully made, beautifully presented, and designed to feel special.";
    } else if (data.tone === "Fun and playful") {
      styleLine = "A little pop of joy for your everyday routine!";
    } else if (data.tone === "Simple and trustworthy") {
      styleLine = "A practical, dependable choice for everyday use.";
    }

    title = `${name} — made for your kind of everyday`;

    description =
      `${name}${price ? ` (${price})` : ""} is ready to find a place in your routine. ` +
      `${features || "Designed with everyday needs in mind."} ${styleLine}`;

    caption =
      `Say hello to ${name} ✨ ` +
      `${features || "A lovely find for yourself or someone special."} ` +
      "Interested? Send us a message to know more. #ShopSmall #SmallBusiness";
  }

  return {
    id: Date.now(),
    name,
    category: data.category,
    price,
    language: data.language,
    title,
    description,
    caption,
    createdAt: new Date().toISOString()
  };
}

function renderListing(listing) {
  currentListing = listing;

  document.getElementById("resultTitle").textContent = listing.title;
  document.getElementById("resultDescription").textContent = listing.description;
  document.getElementById("resultCaption").textContent = listing.caption;

  emptyState.classList.add("hidden");
  results.classList.remove("hidden");

  statusBadge.textContent = "CONTENT READY";
  statusBadge.classList.add("ready");

  document.getElementById("saveMessage").textContent = "";
}

form.addEventListener("submit", function(event) {
  event.preventDefault();

  const data = {
    name: document.getElementById("productName").value,
    category: document.getElementById("category").value,
    price: document.getElementById("price").value,
    features: document.getElementById("features").value,
    tone: document.getElementById("tone").value,
    language: document.getElementById("language").value
  };

  if (!data.name.trim()) {
    document.getElementById("productName").focus();
    return;
  }

  renderListing(makeListing(data));
  showToast("Your sample listing is ready!");
});

// Copy an individual result
document.querySelectorAll(".copy-button").forEach(button => {
  button.addEventListener("click", async function() {
    const element = document.getElementById(button.dataset.copy);

    try {
      await navigator.clipboard.writeText(element.textContent);
      showToast("Copied to clipboard.");
    } catch {
      showToast("Clipboard unavailable. Select and copy the text.");
    }
  });
});

// Download the generated listing
document.getElementById("downloadBtn").addEventListener("click", function() {
  if (!currentListing) return;

  const content =
    `DUKAANAI PRODUCT LISTING\n\n` +
    `TITLE\n${currentListing.title}\n\n` +
    `DESCRIPTION\n${currentListing.description}\n\n` +
    `SOCIAL CAPTION\n${currentListing.caption}\n`;

  const blob = new Blob([content], {
    type: "text/plain;charset=utf-8"
  });

  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");

  link.href = url;
  link.download = "dukaanai-listing.txt";

  document.body.appendChild(link);
  link.click();
  link.remove();

  URL.revokeObjectURL(url);
});

// Read saved listings from this browser
function getSaved() {
  try {
    const saved = JSON.parse(
      localStorage.getItem(STORAGE_KEY) || "[]"
    );

    return Array.isArray(saved) ? saved : [];
  } catch {
    return [];
  }
}

function renderHistory() {
  const container = document.getElementById("historyList");
  const saved = getSaved();

  if (saved.length === 0) {
    container.innerHTML =
      '<p class="history-empty">Your saved listings will appear here.</p>';
    return;
  }

  container.innerHTML = "";

  saved.forEach(item => {
    const card = document.createElement("article");
    card.className = "history-card";

    const title = document.createElement("h3");
    title.textContent = item.name;

    const details = document.createElement("p");
    details.textContent = `${item.category} · ${item.language}`;

    const openButton = document.createElement("button");
    openButton.type = "button";
    openButton.textContent = "Open listing";

    openButton.addEventListener("click", () => {
      renderListing(item);
      document.getElementById("generator").scrollIntoView({
        behavior: "smooth"
      });
    });

    card.append(title, details, openButton);
    container.appendChild(card);
  });
}

// Save the current listing
document.getElementById("saveBtn").addEventListener("click", function() {
  if (!currentListing) return;

  const saved = getSaved();
  saved.unshift(currentListing);

  try {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(saved.slice(0, 30))
    );

    document.getElementById("saveMessage").textContent =
      "Saved in this browser.";

    renderHistory();
    showToast("Listing saved.");
  } catch {
    showToast("Unable to save listing in browser storage.");
  }
});

// Clear saved history
document.getElementById("clearHistory").addEventListener("click", function() {
  if (getSaved().length === 0) {
    showToast("No saved listings to clear.");
    return;
  }

  if (confirm("Clear all saved listings from this browser?")) {
    localStorage.removeItem(STORAGE_KEY);
    renderHistory();
    showToast("Saved listings cleared.");
  }
});

renderHistory();
