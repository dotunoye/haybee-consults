/* Haybee Consults frontend interactions. Forms are client-side demo flows. */
(() => {
  const routes = [
    ["Home", "index.html", "index"],
    ["Properties", "catalog.html", "catalog"],
    ["Commercial Desk", "commercial.html", "commercial"],
    ["Joint Ventures", "joint-ventures.html", "joint-ventures"],
    ["Property Management", "property-management.html", "property-management"],
    ["About Us", "about.html", "about"],
    ["Contact", "contact.html", "contact"],
  ];
  const path = location.pathname.split("/").pop() || "index.html";
  const currentPage = path.replace(".html", "");

  const header = document.querySelector("[data-site-header]");
  if (header) {
    header.innerHTML = `<header class="site-header"><div class="wrap nav-row">
      <a class="brand" href="index.html" aria-label="Haybee Consults home"><span class="brand-mark">H</span><span class="brand-name">Haybee<small>Consults</small></span></a>
      <button class="menu-toggle" type="button" aria-label="Open menu" aria-expanded="false"><i class="fa-solid fa-bars"></i></button>
      <nav class="main-nav" aria-label="Main navigation">${routes.map(([label, href, key]) => `<a href="${href}"${(currentPage === key || (key === "index" && currentPage === "index")) ? ' class="current" aria-current="page"' : ""}>${label}</a>`).join("")}<a class="button button-dark nav-cta" href="catalog.html#listings">Book Inspection <i class="fa-solid fa-arrow-right"></i></a></nav>
    </div></header><div class="menu-backdrop"></div>`;
  }

  const footer = document.querySelector("[data-site-footer]");
  if (footer) {
    footer.innerHTML = `<footer class="footer"><div class="wrap"><div class="footer-grid">
      <div><a class="brand" href="index.html"><span class="brand-mark">H</span><span class="brand-name">Haybee<small>Consults</small></span></a><p style="max-width:250px;margin-top:20px">An independent Nigerian real estate firm connecting people, property and long-term value.</p><p><i class="fa-solid fa-location-dot"></i> Lekki Phase 1, Eti-Osa, Lagos, Nigeria</p></div>
      <div><h4>Explore</h4><div class="footer-links"><a href="catalog.html">Properties</a><a href="commercial.html">Commercial Desk</a><a href="joint-ventures.html">Joint Ventures</a><a href="property-management.html">Property Management</a></div></div>
      <div><h4>Departments</h4><div class="footer-links"><a href="mailto:sales@haybeeconsults.com">Sales · sales@haybeeconsults.com</a><a href="mailto:ventures@haybeeconsults.com">JVs · ventures@haybeeconsults.com</a><a href="mailto:management@haybeeconsults.com">Management · management@haybeeconsults.com</a></div></div>
      <div><h4>Get in touch</h4><div class="footer-links"><a href="contact.html">Contact our team</a><a href="tel:+2342013304100">+234 (0) 201 330 4100</a><a href="about.html">About Haybee</a><a class="admin-link" href="mailto:admin@haybeeconsults.com?subject=Staff%20portal%20access">Staff / Admin Portal</a></div></div>
      </div><div class="footer-bottom"><p>© ${new Date().getFullYear()} Haybee Consults. All rights reserved.</p><p>Property information is indicative and subject to verification. Nothing on this website constitutes investment, legal or tax advice.</p></div></div></footer>`;
  }

  const properties = [
    {
      name: "The Meridian Residence",
      location: "Old Ikoyi, Lagos",
      price: 780,
      priceLabel: "₦780,000,000",
      type: "Apartment",
      purpose: "Buy",
      beds: 3,
      baths: 4,
      area: 280,
      status: "Available",
      title: "Governor’s Consent",
      image: "photo-1600607687939-ce8a6c25118c",
      id: "meridian-residence",
      description: "A calm, light-filled home with generous entertaining space and considered finishes. Set in a quiet pocket of Old Ikoyi with quick access to the island’s business and cultural districts.",
      features: ["Private residents’ lounge", "24-hour security and concierge", "Backup power and water", "Secure basement parking"],
    },
    {
      name: "Palm Court Terraces",
      location: "Lekki Phase 1, Lagos",
      price: 420,
      priceLabel: "₦420,000,000",
      type: "Terrace",
      purpose: "Buy",
      beds: 4,
      baths: 5,
      area: 360,
      status: "Available",
      title: "Certificate of Occupancy",
      image: "photo-1600566753086-00f18fb6b3ea",
      id: "palm-court-terraces",
      description: "A contemporary family terrace designed around natural light, privacy and comfortable everyday living in the heart of Lekki Phase 1.",
      features: ["Private garden terrace", "Fitted contemporary kitchen", "Gated community", "Dedicated parking"],
    },
    {
      name: "Atlantic View Penthouse",
      location: "Victoria Island, Lagos",
      price: 18,
      priceLabel: "₦18,000,000 / year",
      type: "Apartment",
      purpose: "Rent",
      beds: 3,
      baths: 3,
      area: 220,
      status: "Under Offer",
      title: "Governor’s Consent",
      image: "photo-1600607687920-4e2a09cf159d",
      id: "atlantic-view-penthouse",
      description: "A refined apartment with open city views, generous living areas and an address close to Victoria Island’s offices, dining and waterfront.",
      features: ["Panoramic upper-floor views", "Residents’ gym and pool", "24-hour security", "Furnished option available"],
    },
    {
      name: "The Grove Estate",
      location: "Epe Expressway, Lagos",
      price: 85,
      priceLabel: "₦85,000,000",
      type: "Land",
      purpose: "Buy",
      beds: 0,
      baths: 0,
      area: 650,
      status: "Available",
      title: "Governor’s Consent",
      image: "photo-1600585154340-be6161a56a0c",
      id: "grove-estate",
      description: "A well-positioned residential land opportunity along the Epe growth corridor, suited to a considered low-density development.",
      features: ["650 m² parcel", "Residential zoning", "Road access nearby", "Title documentation available for review"],
    },
    {
      name: "Aso Gardens Residence",
      location: "Guzape, Abuja",
      price: 560,
      priceLabel: "₦560,000,000",
      type: "Detached house",
      purpose: "Buy",
      beds: 5,
      baths: 6,
      area: 510,
      status: "Available",
      title: "Certificate of Occupancy",
      image: "photo-1600607687939-ce8a6c25118c",
      id: "aso-gardens-residence",
      description: "A spacious detached home in Guzape, planned for family life with multiple en-suite bedrooms, generous common areas and private outdoor space.",
      features: ["Five en-suite bedrooms", "Private garden and terrace", "Staff quarters", "Gated neighbourhood"],
    },
    {
      name: "Cedar Court Apartment",
      location: "Ikoyi, Lagos",
      price: 14,
      priceLabel: "₦14,000,000 / year",
      type: "Apartment",
      purpose: "Rent",
      beds: 2,
      baths: 2,
      area: 165,
      status: "Sold",
      title: "Governor’s Consent",
      image: "photo-1600210492486-724fe5c67fb0",
      id: "cedar-court-apartment",
      description: "A bright two-bedroom apartment in Ikoyi with a practical layout and easy access to the city’s leading schools, offices and services.",
      features: ["Two en-suite bedrooms", "Fitted kitchen", "Secure parking", "Managed residential building"],
    },
    {
      name: "Harbour House Offices",
      location: "Victoria Island, Lagos",
      price: 260,
      priceLabel: "₦260,000,000",
      type: "Office",
      purpose: "Buy",
      beds: 0,
      baths: 2,
      area: 420,
      status: "Available",
      title: "Governor’s Consent",
      image: "photo-1497366754035-f200968a6e72",
      id: "harbour-house-offices",
      description: "A flexible office suite in Victoria Island for an owner-occupier or commercial investor seeking a central Lagos business address.",
      features: ["420 m² adaptable floor plate", "Dedicated parking", "Backup power provision", "Business district location"],
    },
  ];

  const makeCard = (
    item,
  ) => `<article class="property-card" tabindex="0" role="link" aria-label="View details for ${item.name}" data-property-detail="${item.id}" data-purpose="${item.purpose}" data-category="${item.type}" data-price="${item.price}" data-beds="${item.beds}" data-status="${item.status}">
    <div class="property-image" style="background-image:url('https://images.unsplash.com/${item.image}?auto=format&fit=crop&w=900&q=80')"><span class="property-badge">${item.status === "Available" ? "Verified · " : ""}${item.status}</span></div>
    <div class="property-body"><h3 class="property-title">${item.name}</h3><p class="property-location"><i class="fa-solid fa-location-dot"></i> ${item.location}</p><p class="property-price">${item.priceLabel}</p><div class="property-specs"><span><i class="fa-solid fa-bed"></i> ${item.beds ? `${item.beds} beds` : item.type}</span><span><i class="fa-solid fa-bath"></i> ${item.baths ? `${item.baths} baths` : `${item.area} m²`}</span>${item.beds ? `<span><i class="fa-solid fa-ruler-combined"></i> ${item.area} m²</span>` : ""}</div><p style="font-size:8px;color:#827b74;margin:9px 0 0"><i class="fa-solid fa-circle-check" style="color:#6a8a61"></i> ${item.title}</p><div class="property-actions"><button class="button button-dark" type="button" data-inspect="${item.name}">Schedule inspection</button><a class="button button-outline" target="_blank" rel="noopener" href="https://wa.me/?text=${encodeURIComponent(`Hello, I’m interested in ${item.name} in ${item.location}.`)}">WhatsApp agent</a></div></div></article>`;

  document.querySelectorAll("[data-property-grid]").forEach((grid) => {
    const set =
      grid.dataset.propertyGrid === "featured"
        ? properties.slice(0, 3)
        : properties;
    grid.innerHTML = set.map(makeCard).join("");
  });

  const propertyDetail = document.querySelector("[data-property-detail-view]");
  if (propertyDetail) {
    const selected = properties.find((item) => item.id === new URLSearchParams(location.search).get("id")) || properties[0];
    propertyDetail.innerHTML = `<div class="detail-image" style="background-image:url('https://images.unsplash.com/${selected.image}?auto=format&fit=crop&w=1800&q=90')"><span class="property-badge">${selected.status} · ${selected.title}</span></div><div class="detail-layout wrap"><div class="detail-main"><p class="eyebrow">${selected.location} · ${selected.type}</p><h1>${selected.name}</h1><p class="detail-price">${selected.priceLabel}</p><p class="detail-description">${selected.description}</p><h2>Property details</h2><div class="detail-facts"><span>${selected.beds || "—"}<small>Bedrooms</small></span><span>${selected.baths || "—"}<small>Bathrooms</small></span><span>${selected.area} m²<small>Floor / plot area</small></span></div><h2>At a glance</h2><ul class="detail-features">${selected.features.map((feature) => `<li>${feature}</li>`).join("")}</ul><p class="detail-disclaimer">Listing details are indicative and subject to inspection, title review and confirmation by Haybee Consults.</p></div><aside class="detail-contact"><p class="eyebrow">TAKE THE NEXT STEP</p><h2>Arrange a viewing</h2><p>Speak with our brokerage team about this property and the next steps.</p><button type="button" class="button button-dark" data-inspect="${selected.name}">Schedule inspection <i class="fa-solid fa-arrow-right"></i></button><a class="text-link" href="https://wa.me/?text=${encodeURIComponent(`Hello, I’m interested in ${selected.name} in ${selected.location}.`)}" target="_blank" rel="noopener">WhatsApp the agent <i class="fa-brands fa-whatsapp"></i></a></aside></div>`;
    document.title = `${selected.name} | Haybee Consults`;
  }

  document.addEventListener("click", (event) => {
    const card = event.target.closest("[data-property-detail]");
    if (card && !event.target.closest("button,a")) location.href = `property-detail.html?id=${encodeURIComponent(card.dataset.propertyDetail)}`;
  });
  document.addEventListener("keydown", (event) => {
    if ((event.key === "Enter" || event.key === " ") && event.target.matches("[data-property-detail]")) {
      event.preventDefault(); location.href = `property-detail.html?id=${encodeURIComponent(event.target.dataset.propertyDetail)}`;
    }
  });

  // Mobile navigation opens as a drawer and closes on route selection or escape.
  const menuButton = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".main-nav");
  const backdrop = document.querySelector(".menu-backdrop");
  const closeMenu = () => {
    nav?.classList.remove("open");
    backdrop?.classList.remove("open");
    menuButton?.setAttribute("aria-expanded", "false");
    if (menuButton) menuButton.innerHTML = '<i class="fa-solid fa-bars"></i>';
    document.body.style.overflow = "";
  };
  menuButton?.addEventListener("click", () => {
    const open = !nav.classList.contains("open");
    nav.classList.toggle("open", open);
    backdrop?.classList.toggle("open", open);
    menuButton.setAttribute("aria-expanded", String(open));
    menuButton.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    menuButton.innerHTML = `<i class="fa-solid fa-${open ? "xmark" : "bars"}"></i>`;
    document.body.style.overflow = open ? "hidden" : "";
  });
  backdrop?.addEventListener("click", closeMenu);
  nav
    ?.querySelectorAll("a")
    .forEach((link) => link.addEventListener("click", closeMenu));
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeMenu();
      closeInspection();
    }
  });

  // Inspection modal keeps the selected property in context and traps no navigation.
  const modal = document.querySelector("#inspection-modal");
  const closeInspection = () => {
    modal?.classList.remove("open");
    modal?.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  };
  document.addEventListener("click", (event) => {
    const trigger = event.target.closest("[data-inspect]");
    if (trigger && modal) {
      modal.classList.add("open");
      modal.setAttribute("aria-hidden", "false");
      modal.querySelector("[data-modal-property]").textContent =
        trigger.dataset.inspect;
      modal.querySelector('input[name="date"]').min = new Date()
        .toISOString()
        .slice(0, 10);
      modal.querySelector('input[name="form-name"]').value =
        `Inspection request: ${trigger.dataset.inspect}`;
      modal.querySelector('input[name="name"]').focus();
      document.body.style.overflow = "hidden";
    }
    if (event.target === modal || event.target.closest(".modal-close"))
      closeInspection();
  });

  // Search on the home page sends selected criteria to the catalog page.
  document.querySelectorAll(".search-tab").forEach((tab) =>
    tab.addEventListener("click", () => {
      document
        .querySelectorAll(".search-tab")
        .forEach((button) => button.classList.toggle("active", button === tab));
      const purpose = document.querySelector('input[name="purpose"]');
      if (purpose) purpose.value = tab.dataset.purpose;
    }),
  );
  document
    .querySelector("#property-search")
    ?.addEventListener("submit", (event) => {
      event.preventDefault();
      const params = new URLSearchParams(new FormData(event.currentTarget));
      location.href = `catalog.html?${params.toString()}#listings`;
    });

  // Catalog filters update the cards in place; URL search criteria are applied once on load.
  const listingGrid = document.querySelector('[data-property-grid="catalog"]');
  if (listingGrid) listingGrid.id = "listings";
  const categoryFilter = document.querySelector("#filter-category");
  if (categoryFilter) {
    [...new Set(properties.map((item) => item.type))].forEach((type) => {
      if (![...categoryFilter.options].some((option) => option.value === type)) {
        categoryFilter.add(new Option(type, type));
      }
    });
  }
  const filterPanel = document.querySelector(".filter-panel");
  if (filterPanel) {
    const locationFilter = document.createElement("div");
    locationFilter.className = "filter-group";
    locationFilter.innerHTML =
      '<strong>Location</strong><select id="filter-location"><option value="all">Any location</option><option>Lekki</option><option>Ikoyi</option><option>Victoria Island</option><option>Abuja</option><option>Epe</option></select>';
    filterPanel.querySelector("h3")?.after(locationFilter);
  }
  const filters = {
    purpose: () =>
      document.querySelector('input[name="filter-purpose"]:checked')?.value ||
      "all",
    location: () => document.querySelector("#filter-location")?.value || "all",
    category: () => document.querySelector("#filter-category")?.value || "all",
    budget: () =>
      Number(document.querySelector("#filter-budget")?.value || 2000),
    beds: () => Number(document.querySelector("#filter-beds")?.value || 0),
    status: () => document.querySelector("#filter-status")?.value || "all",
  };
  const updateListings = () => {
    if (!listingGrid) return;
    let visible = 0;
    listingGrid.querySelectorAll(".property-card").forEach((card) => {
      const show =
        (filters.purpose() === "all" ||
          card.dataset.purpose === filters.purpose()) &&
        (filters.location() === "all" ||
          card
            .querySelector(".property-location")
            ?.textContent.toLowerCase()
            .includes(filters.location().toLowerCase())) &&
        (filters.category() === "all" ||
          card.dataset.category === filters.category()) &&
        Number(card.dataset.price) <= filters.budget() &&
        Number(card.dataset.beds) >= filters.beds() &&
        (filters.status() === "all" ||
          card.dataset.status === filters.status());
      card.hidden = !show;
      if (show) visible++;
    });
    const count = document.querySelector("[data-result-count]");
    if (count)
      count.textContent = `${visible} ${visible === 1 ? "property" : "properties"}`;
    const budgetValue = document.querySelector("#budget-value");
    if (budgetValue)
      budgetValue.textContent = `${Number(filters.budget()).toLocaleString()}m`;
  };
  document
    .querySelectorAll(
      '#filter-location,#filter-category,#filter-budget,#filter-beds,#filter-status,input[name="filter-purpose"]',
    )
    .forEach((control) => control.addEventListener("input", updateListings));
  document.querySelector("#clear-filters")?.addEventListener("click", () => {
    document.querySelector(
      'input[name="filter-purpose"][value="all"]',
    ).checked = true;
    if (document.querySelector("#filter-location"))
      document.querySelector("#filter-location").value = "all";
    document.querySelector("#filter-category").value = "all";
    document.querySelector("#filter-budget").value = 2000;
    document.querySelector("#filter-beds").value = "0";
    document.querySelector("#filter-status").value = "all";
    updateListings();
  });
  if (listingGrid) {
    const params = new URLSearchParams(location.search);
    if (["Buy", "Rent"].includes(params.get("purpose")))
      document.querySelector(
        `input[name="filter-purpose"][value="${params.get("purpose")}"]`,
      ).checked = true;
    if (
      [...document.querySelector("#filter-category").options].some(
        (option) => option.value === params.get("type"),
      )
    )
      document.querySelector("#filter-category").value = params.get("type");
    if (
      params.get("location") &&
      [...document.querySelector("#filter-location").options].some(
        (option) => option.value === params.get("location"),
      )
    )
      document.querySelector("#filter-location").value = params.get("location");
    const budgetCeilings = {
      "Under ₦100m": 100,
      "₦100m – ₦500m": 500,
      "₦500m – ₦1bn": 1000,
      "₦1bn+": 2000,
    };
    if (budgetCeilings[params.get("budget")])
      document.querySelector("#filter-budget").value =
        budgetCeilings[params.get("budget")];
    updateListings();
    if (location.hash === "#listings")
      requestAnimationFrame(() => listingGrid.scrollIntoView());
  }

  // All forms validate in the browser and give an immediate, accessible acknowledgement.
  // Connect a mail or CRM endpoint before launch to deliver these submissions.
  document.querySelectorAll("[data-feedback-form]").forEach((form) =>
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      if (!form.reportValidity()) return;
      const status = form.querySelector(".form-status");
      if (status)
        status.textContent =
          "Thank you. Your details are ready for the Haybee team. Please contact the relevant department directly if you need immediate assistance.";
      form.reset();
    }),
  );

  // Reveal editorial sections and count track-record figures only when they enter view.
  const revealItems = document.querySelectorAll("[data-reveal]");
  if ("IntersectionObserver" in window) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.12 });
    revealItems.forEach((item) => revealObserver.observe(item));

    const countObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const counter = entry.target;
        const target = Number(counter.dataset.count);
        const duration = 1500;
        const start = performance.now();
        const tick = (now) => {
          const progress = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          counter.textContent = `${Math.round(target * eased).toLocaleString()}+`;
          if (progress < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
        observer.unobserve(counter);
      });
    }, { threshold: 0.5 });
    document.querySelectorAll("[data-count]").forEach((counter) => countObserver.observe(counter));
  } else {
    revealItems.forEach((item) => item.classList.add("is-visible"));
    document.querySelectorAll("[data-count]").forEach((counter) => counter.textContent = `${Number(counter.dataset.count).toLocaleString()}+`);
  }
})();
