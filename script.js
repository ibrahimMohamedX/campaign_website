/* =========================================================
   CAMPAIGNFLOW
   Vanilla JavaScript
   ========================================================= */

/* =========================================================
   STATE
   ========================================================= */

const DEFAULT_COLORS = ["#4F9CF9", "#45C486", "#F5A65B"];

const state = {
  language: localStorage.getItem("cf-language") || "en",

  theme: localStorage.getItem("cf-theme") || "light",

  campaigns: [],

  schedule: [],

  settings: {
    story1Time: "09:00",

    postTime: "11:00",

    story2Time: "13:00",

    followup1Time: "15:00",

    followup2Time: "17:00",
  },
};

/* =========================================================
   TRANSLATIONS
   ========================================================= */

const translations = {
  en: {
    scheduler: "Scheduler",

    settings: "Settings",

    darkMode: "Dark Mode",

    workspace: "WORKSPACE",

    campaignScheduler: "Campaign Scheduler",

    newSchedule: "New Schedule",

    smartPlanning: "SMART CONTENT PLANNING",

    heroTitle: "Plan your campaigns.<br><span>Publish with purpose.</span>",

    heroDescription:
      "Build a complete content schedule with posts and stories automatically distributed across your campaigns.",

    configuration: "CONFIGURATION",

    buildSchedule: "Build your schedule",

    configurationDescription:
      "Define your campaigns and publishing preferences.",

    campaigns: "Campaigns",

    addCampaign: "Add Campaign",

    scheduleSettings: "Schedule Settings",

    story1Time: "Story 1 Time",

    postTime: "Post Time",

    story2Time: "Story 2 Time",

    followup1Time: "Follow-up 1",

    followup2Time: "Follow-up 2",

    story1Hint: "Before the post",

    postHint: "Main publishing time",

    story2Hint: "After the post",

    followupHint: "Older story",

    automaticStrategy: "Automatic Strategy",

    strategyDescription:
      "Posts rotate between campaigns while each post follows the S1 → Post → S2 → S3 → S4 sequence.",

    generateSchedule: "Generate Schedule",

    yourSchedule: "YOUR SCHEDULE",

    editSchedule: "Edit",

    print: "Print",

    date: "Date",

    day: "Day",

    clickCell: "Click any cell to view details",

    backToSetup: "Back to setup",

    applicationSettings: "Application Settings",

    applicationSettingsDescription: "Customize your CampaignFlow experience.",

    appearance: "Appearance",

    appearanceDescription: "Switch between light and dark themes.",

    language: "Language",

    languageDescription: "Choose the interface language.",

    clearData: "Clear Saved Data",

    clearDataDescription:
      "Remove the saved schedule and reset the application.",

    clear: "Clear",

    campaign: "Campaign",

    contentType: "Content Type",

    sequence: "Sequence",

    publishTime: "Publish Time",

    post: "Post",

    story: "Story",

    story1: "Story 1",

    story2: "Story 2",

    story3: "Story 3",

    story4: "Story 4",

    content: "CONTENT",

    prePost: "Pre-post story",

    mainPost: "Main campaign post",

    afterPost: "Post follow-up",

    nextDay: "Next-day follow-up",

    finalFollowup: "Final follow-up",

    name: "Campaign Name",

    posts: "Number of Posts",

    startDate: "Start Date",

    color: "Color",

    scheduleGenerated: "Schedule generated successfully.",

    campaignRequired: "Please complete all campaign fields.",

    maxCampaigns: "You can add up to 3 campaigns.",

    minCampaigns: "At least one campaign is required.",

    dataCleared: "Saved data has been cleared.",

    confirmClear: "Are you sure you want to clear all saved data?",

    noSchedule: "No schedule generated yet.",

    schedule: "Schedule",

    campaignCalendar: "Campaign Calendar",

    totalPosts: "posts",

    totalDays: "days",

    selectCampaign: "Campaign",
  },

  ar: {
    scheduler: "الجدول",

    settings: "الإعدادات",

    darkMode: "الوضع الداكن",

    workspace: "مساحة العمل",

    campaignScheduler: "جدول الحملات",

    newSchedule: "جدول جديد",

    smartPlanning: "تخطيط محتوى ذكي",

    heroTitle: "خطط حملاتك.<br><span>وانشر بذكاء.</span>",

    heroDescription:
      "أنشئ جدول محتوى كامل مع توزيع المنشورات والستوريهات تلقائيًا بين الحملات.",

    configuration: "الإعدادات",

    buildSchedule: "أنشئ جدولك",

    configurationDescription: "حدد الحملات ومواعيد النشر الخاصة بك.",

    campaigns: "الحملات",

    addCampaign: "إضافة حملة",

    scheduleSettings: "مواعيد النشر",

    story1Time: "موعد Story 1",

    postTime: "موعد البوست",

    story2Time: "موعد Story 2",

    followup1Time: "المتابعة 1",

    followup2Time: "المتابعة 2",

    story1Hint: "قبل البوست",

    postHint: "موعد البوست الرئيسي",

    story2Hint: "بعد البوست",

    followupHint: "ستوري قديمة",

    automaticStrategy: "الاستراتيجية التلقائية",

    strategyDescription:
      "يتم تدوير البوستات بين الحملات مع الحفاظ على التسلسل S1 → Post → S2 → S3 → S4.",

    generateSchedule: "إنشاء الجدول",

    yourSchedule: "جدولك",

    editSchedule: "تعديل",

    print: "طباعة",

    date: "التاريخ",

    day: "اليوم",

    clickCell: "اضغط على أي خانة لعرض التفاصيل",

    backToSetup: "العودة للإعدادات",

    applicationSettings: "إعدادات التطبيق",

    applicationSettingsDescription: "خصص تجربة استخدام CampaignFlow.",

    appearance: "المظهر",

    appearanceDescription: "التبديل بين الوضع الفاتح والداكن.",

    language: "اللغة",

    languageDescription: "اختر لغة واجهة التطبيق.",

    clearData: "مسح البيانات المحفوظة",

    clearDataDescription: "حذف الجدول المحفوظ وإعادة ضبط التطبيق.",

    clear: "مسح",

    campaign: "الحملة",

    contentType: "نوع المحتوى",

    sequence: "التسلسل",

    publishTime: "موعد النشر",

    post: "بوست",

    story: "ستوري",

    story1: "Story 1",

    story2: "Story 2",

    story3: "Story 3",

    story4: "Story 4",

    content: "المحتوى",

    prePost: "ستوري قبل البوست",

    mainPost: "البوست الرئيسي للحملة",

    afterPost: "ستوري بعد البوست",

    nextDay: "متابعة في اليوم التالي",

    finalFollowup: "المتابعة الأخيرة",

    name: "اسم الحملة",

    posts: "عدد البوستات",

    startDate: "تاريخ البداية",

    color: "اللون",

    scheduleGenerated: "تم إنشاء الجدول بنجاح.",

    campaignRequired: "من فضلك أكمل بيانات الحملات.",

    maxCampaigns: "يمكنك إضافة 3 حملات كحد أقصى.",

    minCampaigns: "يجب أن توجد حملة واحدة على الأقل.",

    dataCleared: "تم مسح البيانات المحفوظة.",

    confirmClear: "هل أنت متأكد من مسح كل البيانات المحفوظة؟",

    noSchedule: "لم يتم إنشاء جدول بعد.",

    schedule: "الجدول",

    campaignCalendar: "تقويم الحملات",

    totalPosts: "بوست",

    totalDays: "يوم",

    selectCampaign: "الحملة",
  },
};

/* =========================================================
   DOM
   ========================================================= */

const $ = (selector) => document.querySelector(selector);

const $$ = (selector) => document.querySelectorAll(selector);

const campaignsContainer = $("#campaignsContainer");

const campaignCount = $("#campaignCount");

const generateBtn = $("#generateBtn");

const resultSection = $("#resultSection");

const calendarBody = $("#calendarBody");

const campaignLegend = $("#campaignLegend");

const detailsModal = $("#detailsModal");

const toast = $("#toast");

/* =========================================================
   INIT
   ========================================================= */

document.addEventListener("DOMContentLoaded", init);

function init() {
  loadSavedData();

  applyTheme();

  applyLanguage();

  bindEvents();

  if (state.campaigns.length === 0) {
    addCampaign({
      name: "",
      posts: 5,
      startDate: getTodayISO(),
      color: DEFAULT_COLORS[0],
    });
  } else {
    renderCampaigns();
  }

  syncSettingsInputs();

  if (state.schedule.length > 0) {
    renderSchedule();
  }
}

/* =========================================================
   EVENTS
   ========================================================= */

function bindEvents() {
  $("#addCampaignBtn").addEventListener("click", () => addCampaign());

  generateBtn.addEventListener("click", generateSchedule);

  $("#languageToggle").addEventListener("click", toggleLanguage);

  $("#settingsLanguageToggle").addEventListener("click", toggleLanguage);

  $("#themeToggle").addEventListener("click", toggleTheme);

  $("#settingsThemeToggle").addEventListener("click", toggleTheme);

  $("#clearDataBtn").addEventListener("click", clearData);

  $("#newScheduleBtn").addEventListener("click", newSchedule);

  $("#editScheduleBtn").addEventListener("click", () => {
    $("#setupCard").scrollIntoView({
      behavior: "smooth",
    });
  });

  $("#backToTop").addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });

  $("#printBtn").addEventListener("click", () => window.print());

  $("#printScheduleBtn").addEventListener("click", () => window.print());

  $("#modalClose").addEventListener("click", closeModal);

  detailsModal.addEventListener("click", (event) => {
    if (event.target === detailsModal) {
      closeModal();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeModal();
    }
  });

  $("#mobileMenu").addEventListener("click", () => {
    $("#sidebar").classList.toggle("open");
  });

  $$(".nav-item").forEach((button) => {
    button.addEventListener("click", () => {
      const section = button.dataset.section;

      $$(".nav-item").forEach((item) => item.classList.remove("active"));

      button.classList.add("active");

      $$(".page-section").forEach((item) =>
        item.classList.remove("active-section"),
      );

      if (section === "scheduler") {
        $("#schedulerSection").classList.add("active-section");
      } else {
        $("#settingsSection").classList.add("active-section");
      }

      $("#sidebar").classList.remove("open");
    });
  });

  [
    "story1Time",
    "postTime",
    "story2Time",
    "followup1Time",
    "followup2Time",
  ].forEach((id) => {
    $("#" + id).addEventListener("change", saveSettingsFromInputs);
  });
}

/* =========================================================
   CAMPAIGN MANAGEMENT
   ========================================================= */

function addCampaign(data = null) {
  if (state.campaigns.length >= 3) {
    showToast(translations[state.language].maxCampaigns);

    return;
  }

  const index = state.campaigns.length;

  state.campaigns.push(
    data || {
      name: "",

      posts: 5,

      startDate: index === 0 ? getTodayISO() : getTodayISO(),

      color: DEFAULT_COLORS[index] || DEFAULT_COLORS[0],
    },
  );

  renderCampaigns();

  saveState();
}

function removeCampaign(index) {
  if (state.campaigns.length <= 1) {
    showToast(translations[state.language].minCampaigns);

    return;
  }

  state.campaigns.splice(index, 1);

  renderCampaigns();

  saveState();
}

function renderCampaigns() {
  campaignsContainer.innerHTML = "";

  state.campaigns.forEach((campaign, index) => {
    const row = document.createElement("div");

    row.className = "campaign-row";

    row.innerHTML = `

                <div class="campaign-number">
                    ${index + 1}
                </div>


                <div class="field">

                    <label>
                        ${escapeHtml(translations[state.language].name)}
                    </label>

                    <input
                        type="text"
                        class="campaign-name"
                        data-index="${index}"
                        value="${escapeAttribute(campaign.name)}"
                        placeholder="${
                          state.language === "ar" ? "مثال: NFC" : "e.g. NFC"
                        }"
                    >

                </div>


                <div class="field">

                    <label>
                        ${escapeHtml(translations[state.language].posts)}
                    </label>

                    <input
                        type="number"
                        class="campaign-posts"
                        data-index="${index}"
                        value="${campaign.posts}"
                        min="1"
                        max="100"
                    >

                </div>


                <div class="field">

                    <label>
                        ${escapeHtml(translations[state.language].startDate)}
                    </label>

                    <input
                        type="date"
                        class="campaign-date"
                        data-index="${index}"
                        value="${campaign.startDate}"
                    >

                </div>


                <div class="color-field">

                    <label>
                        ${escapeHtml(translations[state.language].color)}
                    </label>

                    <div
                        class="color-control"
                        data-color-picker="${index}"
                    >

                        <input
                            type="color"
                            class="campaign-color"
                            data-index="${index}"
                            value="${campaign.color}"
                            title="${
                              state.language === "ar"
                                ? "اختار لون الحملة"
                                : "Choose campaign color"
                            }"
                        >

                        <span class="color-preview"
                              style="
                                background:${campaign.color};
                              ">
                        </span>

                        <span class="color-value">
                            ${campaign.color.toUpperCase()}
                        </span>

                    </div>

                </div>


                <button
                    class="remove-campaign ${
                      state.campaigns.length === 1 ? "disabled" : ""
                    }"
                    data-index="${index}"
                    title="Remove"
                >
                    ×
                </button>

            `;

    campaignsContainer.appendChild(row);
  });

  bindCampaignInputs();

  campaignCount.textContent = state.campaigns.length;
}

function bindCampaignInputs() {
  /* =========================
       Campaign Name
       ========================= */

  $$(".campaign-name").forEach((input) => {
    input.addEventListener("input", (event) => {
      const index = Number(event.target.dataset.index);

      state.campaigns[index].name = event.target.value;

      saveState();
    });
  });

  /* =========================
       Number of Posts
       ========================= */

  $$(".campaign-posts").forEach((input) => {
    input.addEventListener("input", (event) => {
      const index = Number(event.target.dataset.index);

      state.campaigns[index].posts = Math.max(
        1,
        Number(event.target.value) || 1,
      );

      saveState();
    });
  });

  /* =========================
       Start Date
       ========================= */

  $$(".campaign-date").forEach((input) => {
    input.addEventListener("change", (event) => {
      const index = Number(event.target.dataset.index);

      state.campaigns[index].startDate = event.target.value;

      saveState();
    });
  });

  /* =========================
   COLOR PICKER
   ========================= */

  $$(".campaign-color").forEach((input) => {
    input.addEventListener("input", (event) => {
      const index = Number(event.target.dataset.index);

      const newColor = event.target.value;

      state.campaigns[index].color = newColor;

      const control = event.target.closest(".color-control");

      if (!control) {
        return;
      }

      const preview = control.querySelector(".color-preview");

      const value = control.querySelector(".color-value");

      if (preview) {
        preview.style.background = newColor;
      }

      if (value) {
        value.textContent = newColor.toUpperCase();
      }

      saveState();
    });

    /*
    Clicking the visible control
    opens the native color picker.
  */

    const control = input.closest(".color-control");

    if (control) {
      control.addEventListener("click", (event) => {
        if (event.target === input) {
          return;
        }

        if (typeof input.showPicker === "function") {
          try {
            input.showPicker();
          } catch (error) {
            input.click();
          }
        } else {
          input.click();
        }
      });
    }
  });

  /* =========================
       Remove Campaign
       ========================= */

  $$(".remove-campaign").forEach((button) => {
    button.addEventListener("click", () => {
      if (state.campaigns.length <= 1) {
        return;
      }

      removeCampaign(Number(button.dataset.index));
    });
  });
}

/* =========================================================
   SCHEDULE GENERATION
   ========================================================= */

function generateSchedule() {
  if (!validateCampaigns()) {
    return;
  }

  saveSettingsFromInputs();

  const campaigns = state.campaigns.map((campaign) => ({
    ...campaign,
    posts: Number(campaign.posts),
  }));

  /*
        Strategy:

        Campaigns are interleaved by day.

        Example:

        Campaign A P1
        Campaign B P1
        Campaign C P1
        Campaign A P2
        Campaign B P2
        Campaign C P2

        Every post gets:

        Day 0:
            S1
            POST
            S2

        Day +1:
            S3

        Day +2:
            S4

        The post date itself is determined
        by the campaign's starting date.

        The global posting sequence uses the
        earliest next available date.
    */

  const postQueue = buildPostQueue(campaigns);

  if (!postQueue.length) {
    return;
  }

  const scheduleMap = new Map();

  postQueue.forEach((post) => {
    const postDay = parseDate(post.date);

    const postDayKey = toISODate(postDay);

    /*
            S1
        */

    addScheduleItem(scheduleMap, postDayKey, {
      ...post,
      type: "story",
      sequence: "S1",
      time: state.settings.story1Time,
      label: translations[state.language].story1,
      description: translations[state.language].prePost,
    });

    /*
            POST
        */

    addScheduleItem(scheduleMap, postDayKey, {
      ...post,
      type: "post",
      sequence: "POST",
      time: state.settings.postTime,
      label: translations[state.language].post,
      description: translations[state.language].mainPost,
    });

    /*
            S2
        */

    addScheduleItem(scheduleMap, postDayKey, {
      ...post,
      type: "story",
      sequence: "S2",
      time: state.settings.story2Time,
      label: translations[state.language].story2,
      description: translations[state.language].afterPost,
    });

    /*
            S3 — next day
        */

    const s3Date = addDays(postDay, 1);

    addScheduleItem(scheduleMap, toISODate(s3Date), {
      ...post,
      date: toISODate(s3Date),
      type: "story",
      sequence: "S3",
      time: state.settings.followup1Time,
      label: translations[state.language].story3,
      description: translations[state.language].nextDay,
    });

    /*
            S4 — two days later
        */

    const s4Date = addDays(postDay, 2);

    addScheduleItem(scheduleMap, toISODate(s4Date), {
      ...post,
      date: toISODate(s4Date),
      type: "story",
      sequence: "S4",
      time: state.settings.followup2Time,
      label: translations[state.language].story4,
      description: translations[state.language].finalFollowup,
    });
  });

  /*
        Convert map to sorted array.
    */

  const days = [...scheduleMap.entries()]
    .sort((a, b) => a[0].localeCompare(b[0]))
    .map(([date, items]) => ({
      date,

      items: items.sort(
        (a, b) => timeToMinutes(a.time) - timeToMinutes(b.time),
      ),
    }));

  state.schedule = days;

  saveState();

  renderSchedule();

  showToast(translations[state.language].scheduleGenerated);

  resultSection.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
}

/* =========================================================
   BUILD POST QUEUE
   ========================================================= */

function buildPostQueue(campaigns) {
  const queue = [];

  const maxPosts = Math.max(
    ...campaigns.map((campaign) => Number(campaign.posts)),
  );

  /*
    Strategy:

    Round 1:
    Campaign A P1
    Campaign B P1
    Campaign C P1

    Round 2:
    Campaign A P2
    Campaign B P2
    Campaign C P2

    The first campaign starts from its configured date.
    Every next post is placed on the next available
    calendar day, while respecting the campaign's
    own start date.
  */

  let nextAvailableDate = null;

  for (let postNumber = 1; postNumber <= maxPosts; postNumber++) {
    campaigns.forEach((campaign, campaignIndex) => {
      const totalPosts = Number(campaign.posts);

      if (postNumber > totalPosts) {
        return;
      }

      const campaignStart = parseDate(campaign.startDate);

      /*
        The campaign cannot publish before its own
        configured starting date.
      */

      let postDate = new Date(campaignStart);

      /*
        If another post was already scheduled,
        this post must be at least one day after it.
      */

      if (nextAvailableDate) {
        const minimumNextDate = addDays(nextAvailableDate, 1);

        if (minimumNextDate > postDate) {
          postDate = minimumNextDate;
        }
      }

      queue.push({
        id: `${campaignIndex}-${postNumber}`,

        campaignIndex,

        campaignId: campaignIndex,

        campaignName: campaign.name,

        color: campaign.color,

        postNumber,

        date: toISODate(postDate),
      });

      nextAvailableDate = postDate;
    });
  }

  return queue;
}

/* =========================================================
   ADD ITEM TO DAY
   ========================================================= */

function addScheduleItem(scheduleMap, date, item) {
  if (!scheduleMap.has(date)) {
    scheduleMap.set(date, []);
  }

  scheduleMap.get(date).push(item);
}

/* =========================================================
   RENDER SCHEDULE
   ========================================================= */

function renderSchedule() {
  if (!state.schedule.length) {
    resultSection.classList.add("hidden");

    return;
  }

  resultSection.classList.remove("hidden");

  renderLegend();

  const firstDate = state.schedule[0].date;

  const lastDate = state.schedule[state.schedule.length - 1].date;

  const totalPosts = state.campaigns.reduce(
    (sum, campaign) => sum + Number(campaign.posts),
    0,
  );

  $("#scheduleTitle").textContent =
    translations[state.language].campaignCalendar;

  $("#scheduleSummary").textContent = `${totalPosts} ${
    translations[state.language].totalPosts
  } • ${state.schedule.length} ${
    translations[state.language].totalDays
  } • ${formatDate(firstDate)} — ${formatDate(lastDate)}`;

  updateTimeHeaders();

  calendarBody.innerHTML = "";

  state.schedule.forEach((day) => {
    const tr = document.createElement("tr");

    /*
                DATE
            */

    const dateTd = document.createElement("td");

    dateTd.className = "date-cell";

    const date = parseDate(day.date);

    dateTd.innerHTML = `

                <span class="date-number">
                    ${date.getDate()}
                </span>

                <span class="month">
                    ${formatMonth(date)}
                </span>

            `;

    tr.appendChild(dateTd);

    /*
                DAY
            */

    const dayTd = document.createElement("td");

    dayTd.className = "day-cell";

    dayTd.textContent = formatDay(date);

    tr.appendChild(dayTd);

    /*
                TIME COLUMNS
            */

    const times = [
      state.settings.story1Time,

      state.settings.postTime,

      state.settings.story2Time,

      state.settings.followup1Time,

      state.settings.followup2Time,
    ];

    times.forEach((time) => {
      const td = document.createElement("td");

      const item = day.items.find((scheduleItem) => scheduleItem.time === time);

      if (item) {
        td.className = "content-cell";

        td.appendChild(createContentCard(item));

        td.addEventListener("click", () => openDetailsModal(item));
      } else {
        td.className = "empty-cell";

        td.innerHTML = `<span>—</span>`;
      }

      tr.appendChild(td);
    });

    calendarBody.appendChild(tr);
  });
}

/* =========================================================
   CONTENT CARD
   ========================================================= */

function createContentCard(item) {
  const card = document.createElement("div");

  card.className = "content-card";

  card.style.setProperty("--campaign-color", item.color);

  const typeLabel =
    item.type === "post"
      ? translations[state.language].post
      : translations[state.language].story;

  card.innerHTML = `

        <span
            class="content-dot"
            style="background:${item.color}"
        ></span>


        <div class="content-details">

            <div class="content-campaign">
                ${escapeHtml(item.campaignName)}
            </div>

            <span class="content-label">
                ${escapeHtml(item.label)}
            </span>

            <span class="content-sequence">
                ${escapeHtml(item.sequence)}
                ·
                ${escapeHtml(formatTime(item.time))}
            </span>

        </div>

    `;

  return card;
}

/* =========================================================
   LEGEND
   ========================================================= */

function renderLegend() {
  campaignLegend.innerHTML = "";

  state.campaigns.forEach((campaign) => {
    const item = document.createElement("div");

    item.className = "legend-item";

    item.innerHTML = `

                <span
                    class="legend-dot"
                    style="background:${campaign.color}"
                ></span>

                <span>
                    ${escapeHtml(campaign.name)}
                </span>

            `;

    campaignLegend.appendChild(item);
  });
}

/* =========================================================
   MODAL
   ========================================================= */

function openDetailsModal(item) {
  detailsModal.classList.add("show");

  document.body.style.overflow = "hidden";

  const color = item.color || "#111111";

  detailsModal.style.setProperty("--modal-color", color);

  $("#modalColorBar").style.background = color;

  $("#modalTitle").textContent = item.campaignName;

  $("#modalCampaign").textContent = item.campaignName;

  $("#modalContentType").textContent =
    item.type === "post"
      ? translations[state.language].post
      : translations[state.language].story;

  $("#modalSequence").textContent = item.sequence;

  $("#modalDate").textContent = formatDate(item.date);

  $("#modalDay").textContent = formatDay(parseDate(item.date));

  $("#modalTime").textContent = formatTime(item.time);

  $("#modalKicker").textContent =
    item.type === "post"
      ? translations[state.language].post
      : translations[state.language].content;

  $("#modalDescription").textContent = item.description;
}

function closeModal() {
  detailsModal.classList.remove("show");

  document.body.style.overflow = "";
}

/* =========================================================
   TIME HEADERS
   ========================================================= */

function updateTimeHeaders() {
  const headers = [
    ["headStory1", state.settings.story1Time],

    ["headPost", state.settings.postTime],

    ["headStory2", state.settings.story2Time],

    ["headFollow1", state.settings.followup1Time],

    ["headFollow2", state.settings.followup2Time],
  ];

  headers.forEach(([id, time]) => {
    const element = $("#" + id);

    element.textContent = formatPeriod(time);
  });

  const ths = document.querySelectorAll(".calendar-table thead th");

  if (ths.length >= 7) {
    const timeLabels = [
      state.settings.story1Time,

      state.settings.postTime,

      state.settings.story2Time,

      state.settings.followup1Time,

      state.settings.followup2Time,
    ];

    timeLabels.forEach((time, index) => {
      const th = ths[index + 2];

      const span = th.querySelector(".time-head");

      if (span) {
        span.textContent = formatTime(time);
      }
    });
  }
}

/* =========================================================
   SETTINGS
   ========================================================= */

function syncSettingsInputs() {
  Object.entries(state.settings).forEach(([key, value]) => {
    const input = $("#" + key);

    if (input) {
      input.value = value;
    }
  });
}

function saveSettingsFromInputs() {
  state.settings = {
    story1Time: $("#story1Time").value,

    postTime: $("#postTime").value,

    story2Time: $("#story2Time").value,

    followup1Time: $("#followup1Time").value,

    followup2Time: $("#followup2Time").value,
  };

  saveState();
}

/* =========================================================
   LANGUAGE
   ========================================================= */

function toggleLanguage() {
  state.language = state.language === "en" ? "ar" : "en";

  localStorage.setItem("cf-language", state.language);

  applyLanguage();

  renderCampaigns();

  syncSettingsInputs();

  if (state.schedule.length) {
    /*
            Regenerate so labels and descriptions
            use the new language.
        */

    generateSchedule();
  }
}

function applyLanguage() {
  const html = document.documentElement;

  html.lang = state.language;

  html.dir = state.language === "ar" ? "rtl" : "ltr";

  $$("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;

    if (translations[state.language][key]) {
      element.innerHTML = translations[state.language][key];
    }
  });

  $("#languageLabel").textContent =
    state.language === "en" ? "العربية" : "English";

  $("#brandSubtitle").textContent =
    state.language === "en" ? "Content Scheduler" : "جدولة المحتوى";

  document.title =
    state.language === "en"
      ? "CampaignFlow — Content Scheduler"
      : "CampaignFlow — جدولة المحتوى";
}

/* =========================================================
   THEME
   ========================================================= */

function toggleTheme() {
  state.theme = state.theme === "light" ? "dark" : "light";

  localStorage.setItem("cf-theme", state.theme);

  applyTheme();
}

function applyTheme() {
  document.documentElement.dataset.theme = state.theme;

  $("#themeIcon").textContent = state.theme === "dark" ? "☀" : "☾";
}

/* =========================================================
   VALIDATION
   ========================================================= */

function validateCampaigns() {
  for (const campaign of state.campaigns) {
    if (!campaign.name.trim() || !campaign.posts || !campaign.startDate) {
      showToast(translations[state.language].campaignRequired);

      return false;
    }
  }

  return true;
}

/* =========================================================
   LOCAL STORAGE
   ========================================================= */

function saveState() {
  localStorage.setItem(
    "cf-state",
    JSON.stringify({
      language: state.language,

      theme: state.theme,

      campaigns: state.campaigns,

      schedule: state.schedule,

      settings: state.settings,
    }),
  );
}

function loadSavedData() {
  try {
    const saved = localStorage.getItem("cf-state");

    if (!saved) {
      return;
    }

    const data = JSON.parse(saved);

    if (Array.isArray(data.campaigns)) {
      state.campaigns = data.campaigns;
    }

    if (Array.isArray(data.schedule)) {
      state.schedule = data.schedule;
    }

    if (data.settings) {
      state.settings = {
        ...state.settings,
        ...data.settings,
      };
    }

    if (data.language) {
      state.language = data.language;
    }

    if (data.theme) {
      state.theme = data.theme;
    }
  } catch (error) {
    console.error("Failed to load saved state:", error);
  }
}

/* =========================================================
   NEW SCHEDULE
   ========================================================= */

function newSchedule() {
  resultSection.classList.add("hidden");

  state.schedule = [];

  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });

  showToast(translations[state.language].noSchedule);
}

/* =========================================================
   CLEAR DATA
   ========================================================= */

function clearData() {
  const confirmed = window.confirm(translations[state.language].confirmClear);

  if (!confirmed) {
    return;
  }

  localStorage.removeItem("cf-state");

  state.campaigns = [];

  state.schedule = [];

  state.settings = {
    story1Time: "09:00",

    postTime: "11:00",

    story2Time: "13:00",

    followup1Time: "15:00",

    followup2Time: "17:00",
  };

  addCampaign({
    name: "",

    posts: 5,

    startDate: getTodayISO(),

    color: DEFAULT_COLORS[0],
  });

  syncSettingsInputs();

  resultSection.classList.add("hidden");

  showToast(translations[state.language].dataCleared);
}

/* =========================================================
   DATE HELPERS
   ========================================================= */

function getTodayISO() {
  const date = new Date();

  return toISODate(date);
}

function parseDate(value) {
  const [year, month, day] = value.split("-").map(Number);

  return new Date(year, month - 1, day);
}

function toISODate(date) {
  const year = date.getFullYear();

  const month = String(date.getMonth() + 1).padStart(2, "0");

  const day = String(date.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}

function addDays(date, days) {
  const result = new Date(date);

  result.setDate(result.getDate() + days);

  return result;
}

/* =========================================================
   DATE FORMATTING
   ========================================================= */

function formatDate(value) {
  const date = typeof value === "string" ? parseDate(value) : value;

  if (state.language === "ar") {
    return new Intl.DateTimeFormat("ar-EG", {
      day: "numeric",
      month: "long",
      year: "numeric",
    }).format(date);
  }

  return new Intl.DateTimeFormat("en-US", {
    day: "numeric",
    month: "short",
    year: "numeric",
  }).format(date);
}

function formatDay(date) {
  if (state.language === "ar") {
    return new Intl.DateTimeFormat("ar-EG", {
      weekday: "long",
    }).format(date);
  }

  return new Intl.DateTimeFormat("en-US", {
    weekday: "long",
  }).format(date);
}

function formatMonth(date) {
  if (state.language === "ar") {
    return new Intl.DateTimeFormat("ar-EG", {
      month: "short",
    }).format(date);
  }

  return new Intl.DateTimeFormat("en-US", {
    month: "short",
  }).format(date);
}

/* =========================================================
   TIME FORMATTING
   ========================================================= */

function formatTime(time) {
  const [hours, minutes] = time.split(":").map(Number);

  const date = new Date();

  date.setHours(hours, minutes, 0, 0);

  if (state.language === "ar") {
    return new Intl.DateTimeFormat("ar-EG", {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    }).format(date);
  }

  return new Intl.DateTimeFormat("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  }).format(date);
}

function formatPeriod(time) {
  const [hours] = time.split(":").map(Number);

  return hours >= 12
    ? state.language === "ar"
      ? "م"
      : "PM"
    : state.language === "ar"
      ? "ص"
      : "AM";
}

function timeToMinutes(time) {
  const [hours, minutes] = time.split(":").map(Number);

  return hours * 60 + minutes;
}

/* =========================================================
   TOAST
   ========================================================= */

let toastTimer = null;

function showToast(message) {
  $("#toastMessage").textContent = message;

  toast.classList.add("show");

  clearTimeout(toastTimer);

  toastTimer = setTimeout(() => {
    toast.classList.remove("show");
  }, 2800);
}

/* =========================================================
   ESCAPE HELPERS
   ========================================================= */

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function escapeAttribute(value) {
  return escapeHtml(value);
}
