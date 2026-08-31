"use strict";
(() => {
  // src/course-data.ts
  var storageKey = "tbc-course-library";
  var seedCourses = [
    { id: 1, name: "WSET Level 1 Award in Wines", code: "WSET-L1-WINE", category: "Wine", level: "Foundation", duration: "1 day", price: "$480", description: "A confident first step into the world of wine, from grape to glass.", image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3", published: true },
    { id: 2, name: "Sake Essentials: From Rice to Serve", code: "SAKE-ESS-01", category: "Sake", level: "Foundation", duration: "2 days", price: "$620", description: "Understand the craft, styles, and rituals behind Japan's iconic drink.", image: "https://images.unsplash.com/photo-1779249057669-bf3e576b647c", published: true },
    { id: 3, name: "The Art of Spirit Distillation", code: "SPIRITS-ART-02", category: "Spirits", level: "Intermediate", duration: "2 days", price: "$760", description: "Explore botanicals, barrels, and the decisions that shape a spirit.", image: "https://images.unsplash.com/photo-1527281400683-1aae777175f8", published: true },
    { id: 4, name: "Beer Styles & Sensory Skills", code: "BEER-SENS-01", category: "Beer", level: "Foundation", duration: "1 day", price: "$420", description: "Build a practical vocabulary for tasting and talking about beer.", image: "https://images.unsplash.com/photo-1636391945755-4e260dd880cb", published: true },
    { id: 5, name: "WSET Level 2 Award in Wines", code: "WSET-L2-WINE", category: "Wine", level: "Intermediate", duration: "3 days", price: "$980", description: "Go deeper into the world's key regions, grapes, and styles.", image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3", published: true },
    { id: 6, name: "Advanced Wine Service", code: "WINE-SVC-03", category: "Wine", level: "Advanced", duration: "2 days", price: "$840", description: "Refine service, pairing, and guest-facing confidence in every pour.", image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3", published: false },
    { id: 7, name: "Whisky: Cask, Climate & Character", code: "WHISKY-ADV-01", category: "Spirits", level: "Advanced", duration: "1 day", price: "$680", description: "Compare maturation, provenance, and the sensory signatures of whisky.", image: "https://images.unsplash.com/photo-1527281400683-1aae777175f8", published: false },
    { id: 8, name: "Tea Appreciation: Origin & Craft", code: "TEA-APP-01", category: "Tea", level: "Foundation", duration: "1 day", price: "$390", description: "An introductory tasting journey through tea, terroir, and technique.", image: "https://images.unsplash.com/photo-1571934811356-5cc061b6821f", published: false },
    { id: 9, name: "Bordeaux Blends Masterclass", code: "BORDEAUX-MC-01", category: "Wine", level: "Intermediate", duration: "1 day", price: "$550", description: "Dive into the noble blends and terroirs of Bordeaux's most prestigious regions.", image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3", published: true },
    { id: 10, name: "Champagne & Sparkling Wine Essentials", code: "CHAMP-ESS-02", category: "Wine", level: "Foundation", duration: "1 day", price: "$520", description: "Explore the methods, regions, and art of sparkling wine production.", image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3", published: true },
    { id: 11, name: "Craft Gin Distillation Workshop", code: "GIN-CRAFT-01", category: "Spirits", level: "Intermediate", duration: "2 days", price: "$680", description: "Master the botanicals and techniques behind premium gin production.", image: "https://images.unsplash.com/photo-1527281400683-1aae777175f8", published: true },
    { id: 12, name: "Rum: From Sugarcane to Spirit", code: "RUM-PROD-01", category: "Spirits", level: "Foundation", duration: "2 days", price: "$600", description: "Discover the diverse styles and rich history of rum production worldwide.", image: "https://images.unsplash.com/photo-1527281400683-1aae777175f8", published: true },
    { id: 13, name: "Tequila & Mezcal Mastery", code: "TEQUILA-MAS-01", category: "Spirits", level: "Intermediate", duration: "2 days", price: "$640", description: "Understand the heritage, production, and tasting profiles of agave spirits.", image: "https://images.unsplash.com/photo-1527281400683-1aae777175f8", published: true },
    { id: 14, name: "Cognac Connoisseur Course", code: "COGNAC-CONN-01", category: "Spirits", level: "Advanced", duration: "1 day", price: "$750", description: "Explore the elegance and complexity of premium cognac classification and tasting.", image: "https://images.unsplash.com/photo-1527281400683-1aae777175f8", published: true },
    { id: 15, name: "Beer Brewing Fundamentals", code: "BEER-BREW-01", category: "Beer", level: "Foundation", duration: "3 days", price: "$720", description: "Learn the science and art of brewing quality beer from grain to glass.", image: "https://images.unsplash.com/photo-1636391945755-4e260dd880cb", published: true },
    { id: 16, name: "IPA & Hop-Forward Beer Tasting", code: "IPA-HOPS-01", category: "Beer", level: "Intermediate", duration: "1 day", price: "$480", description: "Master the flavor profiles and brewing techniques of India Pale Ales.", image: "https://images.unsplash.com/photo-1636391945755-4e260dd880cb", published: true },
    { id: 17, name: "Stout & Porter: Dark Delights", code: "STOUT-PORT-01", category: "Beer", level: "Foundation", duration: "1 day", price: "$420", description: "Discover the rich history and complex flavors of dark beers.", image: "https://images.unsplash.com/photo-1636391945755-4e260dd880cb", published: true },
    { id: 18, name: "Sour Beer Appreciation", code: "SOUR-BEER-01", category: "Beer", level: "Intermediate", duration: "1 day", price: "$500", description: "Explore the tart, funky world of wild and sour fermentation techniques.", image: "https://images.unsplash.com/photo-1636391945755-4e260dd880cb", published: true },
    { id: 19, name: "Lager Mastery: Precision Brewing", code: "LAGER-MASTER-01", category: "Beer", level: "Advanced", duration: "2 days", price: "$680", description: "Master the science and subtlety of lager fermentation and flavor profiles.", image: "https://images.unsplash.com/photo-1636391945755-4e260dd880cb", published: false },
    { id: 20, name: "WSET Level 3 Award in Wines", code: "WSET-L3-WINE", category: "Wine", level: "Advanced", duration: "5 days", price: "$1,480", description: "The pinnacle of wine education, covering viticulture, production, and global regions.", image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3", published: false, tags: ["SkillsFuture Credit", "NTUC UTAP", "WSET", "Wines"] },
    { id: 21, name: "Burgundy: Pinot Noir & Chardonnay", code: "BURGUNDY-01", category: "Wine", level: "Intermediate", duration: "2 days", price: "$720", description: "Delve into the elegance and complexity of Burgundy's finest wines.", image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3", published: true },
    { id: 22, name: "Italian Wines: From North to South", code: "ITALIAN-WINE-01", category: "Wine", level: "Intermediate", duration: "2 days", price: "$680", description: "Journey through Italy's diverse wine regions and iconic producers.", image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3", published: true },
    { id: 23, name: "Spanish Wines & Rioja Traditions", code: "SPANISH-WINE-01", category: "Wine", level: "Intermediate", duration: "2 days", price: "$640", description: "Explore Spain's wine heritage, from Rioja to Priorat.", image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3", published: true },
    { id: 24, name: "New World Wines: Australia & NZ", code: "NEWWORLD-ANZ-01", category: "Wine", level: "Foundation", duration: "1 day", price: "$480", description: "Discover the bold, fruit-forward wines of the Southern Hemisphere.", image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3", published: true },
    { id: 25, name: "California Wines: Napa & Sonoma", code: "CALIFORNIA-01", category: "Wine", level: "Intermediate", duration: "2 days", price: "$700", description: "Explore America's premier wine regions and distinctive varietals.", image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3", published: true },
    { id: 26, name: "Wine & Food Pairing Masterclass", code: "WINE-FOOD-01", category: "Wine", level: "Intermediate", duration: "1 day", price: "$580", description: "Master the art of combining wine with cuisine for perfect harmony.", image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3", published: true },
    { id: 27, name: "Wine List Development for Restaurants", code: "WINE-LIST-01", category: "Wine", level: "Advanced", duration: "2 days", price: "$840", description: "Build and manage profitable, balanced wine lists for hospitality venues.", image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3", published: false },
    { id: 28, name: "Sake Brewing Techniques & Styles", code: "SAKE-BREW-01", category: "Sake", level: "Intermediate", duration: "3 days", price: "$840", description: "Understand the traditional and modern methods of sake production.", image: "https://images.unsplash.com/photo-1779249057669-bf3e576b647c", published: true },
    { id: 29, name: "Junmai vs Honjozo: Sake Classification", code: "SAKE-CLASS-01", category: "Sake", level: "Foundation", duration: "1 day", price: "$450", description: "Learn to distinguish and appreciate different sake classifications and grades.", image: "https://images.unsplash.com/photo-1779249057669-bf3e576b647c", published: true },
    { id: 30, name: "Sake Pairing & Service Excellence", code: "SAKE-PAIR-01", category: "Sake", level: "Intermediate", duration: "1 day", price: "$520", description: "Master the serving temperatures, vessels, and food pairings for sake.", image: "https://images.unsplash.com/photo-1779249057669-bf3e576b647c", published: true },
    { id: 31, name: "Premium Tea Tasting: Black, Green & Oolong", code: "TEA-PREM-01", category: "Tea", level: "Foundation", duration: "1 day", price: "$420", description: "Explore the flavor profiles and brewing methods of world-class teas.", image: "https://images.unsplash.com/photo-1571934811356-5cc061b6821f", published: true },
    { id: 32, name: "Oolong Tea Masterclass", code: "OOLONG-MASTER-01", category: "Tea", level: "Intermediate", duration: "2 days", price: "$640", description: "Dive deep into the oxidation levels and terroir of premium oolong teas.", image: "https://images.unsplash.com/photo-1571934811356-5cc061b6821f", published: true },
    { id: 33, name: "Puer Tea: Aging, Grades & History", code: "PUER-HIST-01", category: "Tea", level: "Intermediate", duration: "2 days", price: "$680", description: "Understand the complex aging process and investment value of puer tea.", image: "https://images.unsplash.com/photo-1571934811356-5cc061b6821f", published: false },
    { id: 34, name: "Matcha: Japanese Tea Ceremony & Preparation", code: "MATCHA-CEREMONY-01", category: "Tea", level: "Foundation", duration: "1 day", price: "$380", description: "Experience the ritual and art of authentic matcha tea ceremony.", image: "https://images.unsplash.com/photo-1571934811356-5cc061b6821f", published: true },
    { id: 35, name: "White Tea: Delicate Brews & Health Benefits", code: "WHITETEA-01", category: "Tea", level: "Foundation", duration: "1 day", price: "$400", description: "Discover the subtle flavors and wellness properties of premium white teas.", image: "https://images.unsplash.com/photo-1571934811356-5cc061b6821f", published: true },
    { id: 36, name: "Herbal Infusions & Wellness Blending", code: "HERBAL-BLEND-01", category: "Tea", level: "Foundation", duration: "1 day", price: "$420", description: "Learn to create balanced herbal blends for flavor and wellness.", image: "https://images.unsplash.com/photo-1571934811356-5cc061b6821f", published: true },
    { id: 37, name: "Craft Vodka & Eastern European Spirits", code: "VODKA-CRAFT-01", category: "Spirits", level: "Intermediate", duration: "1 day", price: "$550", description: "Explore artisanal vodka production and regional spirit traditions.", image: "https://images.unsplash.com/photo-1527281400683-1aae777175f8", published: true },
    { id: 38, name: "Brandy & Cognac Aging Processes", code: "BRANDY-AGE-01", category: "Spirits", level: "Advanced", duration: "2 days", price: "$820", description: "Master the barrel selection and aging techniques of premium brandies.", image: "https://images.unsplash.com/photo-1527281400683-1aae777175f8", published: false },
    { id: 39, name: "Pisco: Peruvian Spirit Essentials", code: "PISCO-ESS-01", category: "Spirits", level: "Foundation", duration: "1 day", price: "$480", description: "Learn the heritage and production of Peru's iconic grape brandy.", image: "https://images.unsplash.com/photo-1527281400683-1aae777175f8", published: true },
    { id: 40, name: "Absinthe: History, Botany & Ritual", code: "ABSINTHE-HIST-01", category: "Spirits", level: "Intermediate", duration: "1 day", price: "$520", description: "Explore the mythology, chemistry, and preparation of absinthe.", image: "https://images.unsplash.com/photo-1527281400683-1aae777175f8", published: true },
    { id: 41, name: "Amaro & Digestivo Tasting", code: "AMARO-TASTING-01", category: "Spirits", level: "Foundation", duration: "1 day", price: "$450", description: "Discover the herbal complexity of Italian and European digestivos.", image: "https://images.unsplash.com/photo-1527281400683-1aae777175f8", published: true },
    { id: 42, name: "Whisky Regions & Tasting Profiles", code: "WHISKY-REGIONS-01", category: "Spirits", level: "Intermediate", duration: "2 days", price: "$700", description: "Explore Scotch, Irish, and global whisky regions and their characteristics.", image: "https://images.unsplash.com/photo-1527281400683-1aae777175f8", published: true },
    { id: 43, name: "Bourbon & American Whiskey Mastery", code: "BOURBON-MASTER-01", category: "Spirits", level: "Intermediate", duration: "2 days", price: "$680", description: "Master the unique characteristics of bourbon and American whiskeys.", image: "https://images.unsplash.com/photo-1527281400683-1aae777175f8", published: true },
    { id: 44, name: "Japanese Whisky Excellence", code: "JAPANESE-WHISKY-01", category: "Spirits", level: "Intermediate", duration: "1 day", price: "$640", description: "Discover the precision and quality of Japanese whisky production.", image: "https://images.unsplash.com/photo-1527281400683-1aae777175f8", published: true },
    { id: 45, name: "Cocktail Fundamentals & Technique", code: "COCKTAIL-FUND-01", category: "Spirits", level: "Foundation", duration: "2 days", price: "$580", description: "Master the classics and learn professional bartending techniques.", image: "https://images.unsplash.com/photo-1527281400683-1aae777175f8", published: true },
    { id: 46, name: "Advanced Mixology & Flavor Chemistry", code: "MIXOLOGY-ADV-01", category: "Spirits", level: "Advanced", duration: "3 days", price: "$980", description: "Create innovative cocktails through flavor science and molecular techniques.", image: "https://images.unsplash.com/photo-1527281400683-1aae777175f8", published: false },
    { id: 47, name: "Beer Style Deep Dive: Belgian & Trappist", code: "BELGIAN-BEER-01", category: "Beer", level: "Intermediate", duration: "1 day", price: "$520", description: "Explore the unique styles and monastic traditions of Belgian brewing.", image: "https://images.unsplash.com/photo-1636391945755-4e260dd880cb", published: true },
    { id: 48, name: "Cider & Fruit Fermentation Mastery", code: "CIDER-FERMENT-01", category: "Beer", level: "Intermediate", duration: "2 days", price: "$640", description: "Learn traditional and modern cider making and fruit fermentation techniques.", image: "https://images.unsplash.com/photo-1636391945755-4e260dd880cb", published: true },
    { id: 49, name: "Mead & Honey Wine Production", code: "MEAD-PROD-01", category: "Beer", level: "Foundation", duration: "2 days", price: "$580", description: "Discover the ancient craft of mead making and honey fermentation.", image: "https://images.unsplash.com/photo-1636391945755-4e260dd880cb", published: true },
    { id: 50, name: "Hoppy Beer & Hop Selection", code: "HOPS-SELECT-01", category: "Beer", level: "Intermediate", duration: "1 day", price: "$500", description: "Master hop varieties, alpha acids, and their impact on beer flavor profiles.", image: "https://images.unsplash.com/photo-1636391945755-4e260dd880cb", published: true },
    { id: 51, name: "Riesling: German Wine Excellence", code: "RIESLING-GER-01", category: "Wine", level: "Intermediate", duration: "1 day", price: "$520", description: "Explore the versatility and terroir-driven characteristics of German rieslings.", image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3", published: true },
    { id: 52, name: "Alsatian Wines & Regional Traditions", code: "ALSATIAN-01", category: "Wine", level: "Foundation", duration: "1 day", price: "$480", description: "Discover the aromatic wines and diverse varieties of Alsace.", image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3", published: true },
    { id: 53, name: "Port & Fortified Wine Mastery", code: "PORT-MASTER-01", category: "Wine", level: "Advanced", duration: "2 days", price: "$760", description: "Master the aging, grading, and tasting of port wines and fortified spirits.", image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3", published: false },
    { id: 54, name: "Natural & Orange Wines Workshop", code: "NATURAL-WINE-01", category: "Wine", level: "Intermediate", duration: "1 day", price: "$540", description: "Explore minimal-intervention winemaking and unconventional fermentation methods.", image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3", published: true },
    { id: 55, name: "Biodynamic & Sustainable Viticulture", code: "BIODYNAMIC-01", category: "Wine", level: "Intermediate", duration: "2 days", price: "$660", description: "Learn sustainable and biodynamic farming practices in modern viticulture.", image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3", published: true },
    { id: 56, name: "Hyper-Local Tea Sourcing & Tasting", code: "TEA-LOCAL-01", category: "Tea", level: "Foundation", duration: "1 day", price: "$480", description: "Discover micro-batch teas and direct sourcing from tea-growing regions.", image: "https://images.unsplash.com/photo-1571934811356-5cc061b6821f", published: true },
    { id: 57, name: "Cold Brew & Modern Tea Preparation", code: "COLDBREW-TEA-01", category: "Tea", level: "Foundation", duration: "1 day", price: "$400", description: "Explore contemporary brewing methods and contemporary tea preparation.", image: "https://images.unsplash.com/photo-1571934811356-5cc061b6821f", published: true },
    { id: 58, name: "Liqueur Production & Infusions", code: "LIQUEUR-PROD-01", category: "Spirits", level: "Intermediate", duration: "2 days", price: "$640", description: "Create custom liqueurs and infusions using traditional and modern techniques.", image: "https://images.unsplash.com/photo-1527281400683-1aae777175f8", published: true },
    { id: 59, name: "Wine Service Standards & Etiquette", code: "WINE-SERVICE-01", category: "Wine", level: "Foundation", duration: "1 day", price: "$420", description: "Master professional wine service, opening, and tableside interaction skills.", image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3", published: true },
    { id: 60, name: "Sustainable Spirits & Ethical Sourcing", code: "SUSTAINABLE-SP-01", category: "Spirits", level: "Foundation", duration: "1 day", price: "$480", description: "Learn about eco-conscious distillation and ethical ingredient sourcing.", image: "https://images.unsplash.com/photo-1527281400683-1aae777175f8", published: true }
  ];
  function readStoredCourses() {
    const stored = localStorage.getItem(storageKey);
    return stored ? JSON.parse(stored) : null;
  }
  async function getCourses() {
    return readStoredCourses() || seedCourses;
  }
  async function saveCourses(courses2) {
    localStorage.setItem(storageKey, JSON.stringify(courses2));
  }
  async function getCategories() {
    const courses2 = await getCourses();
    const categories = Array.from(new Set(courses2.map((course) => course.category)));
    return categories.sort();
  }
  var courseRepository = { getCourses, saveCourses, getCategories, storageKey };

  // src/course-management.ts
  var courses = [];
  var list = document.querySelector("#course-list");
  var drawer = document.querySelector("#course-drawer");
  var form = document.querySelector("#course-form");
  async function saveCourses2() {
    await courseRepository.saveCourses(courses);
  }
  function updateStats() {
    document.querySelector("#total-count").textContent = String(courses.length).padStart(2, "0");
    document.querySelector("#published-count").textContent = String(courses.filter((course) => course.published).length).padStart(2, "0");
    document.querySelector("#draft-count").textContent = String(courses.filter((course) => !course.published).length).padStart(2, "0");
  }
  function renderCourses() {
    if (!list) return;
    const query = document.querySelector("#course-search").value.toLowerCase();
    const category = document.querySelector("#category-filter").value;
    const status = document.querySelector("#status-filter").value;
    const filtered = courses.filter((course) => (!query || `${course.name} ${course.code}`.toLowerCase().includes(query)) && (category === "all" || course.category === category) && (status === "all" || (status === "published" ? course.published : !course.published)));
    list.innerHTML = filtered.map((course) => `<tr><td><div class="course-name-cell"><img src="${course.image}" alt="" /><span><strong>${course.name}</strong><small>${course.code}</small></span></div></td><td>${course.category}</td><td>${course.level}</td><td>${course.duration}</td><td><button class="status-pill ${course.published ? "is-published" : "is-draft"}" data-action="toggle" data-id="${course.id}">${course.published ? "Published" : "Draft"}</button></td><td><div class="row-actions"><button type="button" data-action="edit" data-id="${course.id}">Edit</button><button type="button" data-action="delete" data-id="${course.id}">Delete</button></div></td></tr>`).join("");
    document.querySelector("#empty-state").hidden = filtered.length > 0;
    document.querySelector("#result-count").textContent = `Showing ${filtered.length} course${filtered.length === 1 ? "" : "s"}`;
    updateStats();
  }
  function openDrawer(course) {
    if (!form || !drawer) return;
    form.reset();
    document.querySelector("#drawer-title").textContent = course ? "Edit course" : "Add a course";
    document.querySelector("#course-id").value = String(course?.id || "");
    document.querySelector("#course-name").value = course?.name || "";
    document.querySelector("#course-code").value = course?.code || "";
    document.querySelector("#course-category").value = course?.category || "Wine";
    document.querySelector("#course-level").value = course?.level || "Foundation";
    ["duration", "price", "description", "image"].forEach((key) => {
      document.querySelector(`#course-${key}`).value = course?.[key] || "";
    });
    document.querySelector("#course-published").checked = course?.published || false;
    drawer.classList.add("is-open");
    drawer.setAttribute("aria-hidden", "false");
  }
  function closeDrawer() {
    drawer?.classList.remove("is-open");
    drawer?.setAttribute("aria-hidden", "true");
  }
  function escapeCsv(value) {
    return `"${String(value ?? "").replace(/"/g, '""')}"`;
  }
  function exportCourses() {
    const format = document.querySelector("#export-format").value;
    const headers = ["id", "name", "code", "category", "level", "duration", "price", "description", "image", "published"];
    const csv = [headers, ...courses.map((course) => headers.map((header) => course[header]))].map((row) => row.map(escapeCsv).join(",")).join("\r\n");
    const content = format === "csv" ? csv : JSON.stringify(courses, null, 2);
    const extension = format === "csv" ? "csv" : "json";
    const blob = new Blob([content], { type: format === "csv" ? "text/csv;charset=utf-8" : "application/json" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = `tbc-course-library.${extension}`;
    link.click();
    URL.revokeObjectURL(link.href);
  }
  function initManagement() {
    document.addEventListener("click", async (event) => {
      const target = event.target;
      const action = target.closest("[data-action]")?.dataset.action;
      const id = Number(target.closest("[data-id]")?.dataset.id);
      if (action === "new") openDrawer();
      if (action === "close") closeDrawer();
      if (action === "edit") openDrawer(courses.find((course) => course.id === id));
      if (action === "toggle") {
        const course = courses.find((item) => item.id === id);
        if (course) {
          course.published = !course.published;
          await saveCourses2();
          renderCourses();
        }
      }
      if (action === "delete" && window.confirm("Delete this course from the local library?")) {
        courses = courses.filter((course) => course.id !== id);
        await saveCourses2();
        renderCourses();
      }
      if (action === "export") exportCourses();
    });
    form?.addEventListener("submit", async (event) => {
      event.preventDefault();
      const data = Object.fromEntries(new FormData(form).entries());
      const record = { ...data, id: Number(document.querySelector("#course-id").value) || Date.now(), category: document.querySelector("#course-category").value, level: document.querySelector("#course-level").value, published: document.querySelector("#course-published").checked };
      const index = courses.findIndex((course) => course.id === record.id);
      if (index === -1) courses.unshift(record);
      else courses[index] = record;
      await saveCourses2();
      renderCourses();
      closeDrawer();
    });
    ["#course-search", "#category-filter", "#status-filter"].forEach((selector) => document.querySelector(selector)?.addEventListener("input", renderCourses));
    void courseRepository.getCourses().then((loadedCourses) => {
      courses = loadedCourses;
      renderCourses();
    });
  }

  // src/courses.ts
  var catalogList = document.querySelector("#catalog-list");
  var emptyMessage = document.querySelector("#catalog-empty");
  var categoryStrip = document.querySelector(".category-strip");
  var activeCategory = "all";
  var categoryImages = {
    Beer: "https://images.unsplash.com/photo-1636391945755-4e260dd880cb",
    Sake: "https://images.unsplash.com/photo-1779249057669-bf3e576b647c",
    Spirits: "https://images.unsplash.com/photo-1527281400683-1aae777175f8",
    Tea: "https://images.unsplash.com/photo-1571934811356-5cc061b6821f",
    Wine: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3"
  };
  var levelDescriptions = {
    Foundation: "Build essential knowledge and develop a strong understanding of core principles.",
    Intermediate: "Expand your skills with deeper insights and practical applications.",
    Advanced: "Sharpen your expertise with advanced tasting, service, and leadership skills.",
    Expert: "Lead with confidence through mastery, mentoring, and specialist knowledge."
  };
  function courseCard(course) {
    return `<article class="catalog-card"><img class="catalog-image" src="${course.image}" alt="${course.name}" /><div class="catalog-card-copy"><span class="catalog-category">${course.category} / ${course.code}</span><h3>${course.name}</h3><ul><li>${course.level}</li><li>${course.duration}</li><li>${course.price}</li></ul><p>${course.description}</p><a class="catalog-link" href="course.html">Explore course</a></div></article>`;
  }
  async function renderCatalog() {
    if (!catalogList || !emptyMessage) return;
    const courses2 = (await courseRepository.getCourses()).filter((course) => course.published && (activeCategory === "all" || course.category === activeCategory));
    const grouped = Object.keys(levelDescriptions).map((level) => ({ level, courses: courses2.filter((course) => course.level === level) })).filter((group) => group.courses.length);
    catalogList.innerHTML = grouped.map((group) => `<section class="catalog-level-group"><div class="catalog-level"><h2>${group.level}</h2><p>${levelDescriptions[group.level]}</p></div><div class="course-grid">${group.courses.map(courseCard).join("")}</div></section>`).join("");
    emptyMessage.hidden = courses2.length > 0;
  }
  async function initCategoryButtons() {
    if (!categoryStrip) return;
    const categories = await courseRepository.getCategories();
    const allButton = document.createElement("button");
    allButton.type = "button";
    allButton.className = "category-circle is-selected";
    allButton.dataset.category = "all";
    allButton.innerHTML = '<span class="category-all">All</span><span>All courses</span>';
    categoryStrip.innerHTML = "";
    categoryStrip.appendChild(allButton);
    categories.forEach((category) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "category-circle";
      button.dataset.category = category;
      const imageUrl = categoryImages[category] || "";
      const imageHtml = imageUrl ? `<img src="${imageUrl}" alt="${category}" />` : "";
      button.innerHTML = `${imageHtml}<span>${category}</span>`;
      categoryStrip.appendChild(button);
    });
    attachCategoryListeners();
  }
  function attachCategoryListeners() {
    document.querySelectorAll("[data-category]").forEach((button) => button.addEventListener("click", async () => {
      activeCategory = button.dataset.category || "all";
      document.querySelectorAll("[data-category]").forEach((item) => item.classList.toggle("is-selected", item === button));
      await renderCatalog();
    }));
  }
  async function initPublicCatalog() {
    await initCategoryButtons();
    window.addEventListener("storage", async (event) => {
      if (event.key === courseRepository.storageKey) {
        await initCategoryButtons();
        await renderCatalog();
      }
    });
    document.addEventListener("visibilitychange", async () => {
      if (!document.hidden) await renderCatalog();
    });
    window.addEventListener("focus", () => void renderCatalog());
    void renderCatalog();
  }

  // src/course.ts
  async function initCourseDetail() {
    const badgesEl = document.querySelector("#course-badges");
    if (!badgesEl) return;
    const code = badgesEl.dataset.courseCode;
    const courses2 = await courseRepository.getCourses();
    const course = courses2.find((item) => item.code === code);
    const tags = course?.tags || [];
    const tagsHtml = tags.map((tag) => `<span class="badge-tag">${tag}</span>`).join("");
    badgesEl.innerHTML = `<span class="badge-hashtag">#</span>${tagsHtml}`;
  }

  // src/app.ts
  if (document.querySelector("#course-form")) initManagement();
  if (document.querySelector("#catalog-list")) initPublicCatalog();
  if (document.querySelector("#course-badges")) void initCourseDetail();
})();
//# sourceMappingURL=app.js.map
