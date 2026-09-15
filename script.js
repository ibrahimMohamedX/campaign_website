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
  // New persistent state for Saved Schedules
  savedSchedules: [],
  currentScheduleId: null,
  currentScheduleName: null,
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
      "Remove the saved schedules and reset the application.",
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
    // New translations
    saveSchedule: "Save Schedule",
    saveChanges: "Save Changes",
    savedSchedules: "Saved Schedules",
    noSavedSchedules: "No saved schedules yet.",
    saveScheduleTitle: "Save Schedule",
    scheduleName: "Schedule Name",
    scheduleNameDescription: "Enter a name for this schedule to save it.",
    save: "Save",
    cancel: "Cancel",
    delete: "Delete",
    confirmDeleteSchedule:
      "Are you sure you want to delete this saved schedule?",
    scheduleNameRequired: "Schedule name is required.",
    scheduleSaved: "Schedule saved successfully.",
    scheduleUpdated: "Schedule updated successfully.",
    done: "Done",
    completed: "Completed",
    markDone: "Mark Done",
    markIncomplete: "Mark Incomplete",
    duplicateTimes: "Each schedule time must be unique.",
    currentSchedule: "Current Schedule",
    deleteSavedSchedule: "Delete saved schedule",
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
    clearDataDescription: "حذف الجداول المحفوظة وإعادة ضبط التطبيق.",
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
    // New translations
    saveSchedule: "حفظ الجدول",
    saveChanges: "حفظ التعديلات",
    savedSchedules: "الجداول المحفوظة",
    noSavedSchedules: "لا توجد جداول محفوظة.",
    saveScheduleTitle: "حفظ الجدول",
    scheduleName: "اسم الجدول",
    scheduleNameDescription: "أدخل اسماً لحفظ هذا الجدول.",
    save: "حفظ",
    cancel: "إلغاء",
    delete: "حذف",
    confirmDeleteSchedule: "هل أنت متأكد من حذف هذا الجدول المحفوظ؟",
    scheduleNameRequired: "اسم الجدول مطلوب.",
    scheduleSaved: "تم حفظ الجدول بنجاح.",
    scheduleUpdated: "تم تحديث الجدول بنجاح.",
    done: "تم الإنجاز",
    completed: "مكتمل",
    markDone: "تحديد كمكتمل",
    markIncomplete: "تحديد كغير مكتمل",
    duplicateTimes: "يجب أن تكون جميع مواعيد النشر مختلفة.",
    currentSchedule: "الجدول الحالي",
    deleteSavedSchedule: "حذف الجدول المحفوظ",
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
const saveScheduleModal = $("#saveScheduleModal");
const toast = $("#toast");

let expirationInterval = null;
let currentModalItem = null;

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
  renderSavedSchedules();

  if (state.schedule.length > 0) {
    renderSchedule();
  }

  // Check expirations periodically every 30 seconds
  expirationInterval = setInterval(updateExpirations, 30000);
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
    $("#setupCard").scrollIntoView({ behavior: "smooth" });
  });

  $("#backToTop").addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  $("#printBtn").addEventListener("click", () => window.print());
  $("#printScheduleBtn").addEventListener("click", () => window.print());

  // Modals
  $("#modalClose").addEventListener("click", closeModal);
  detailsModal.addEventListener("click", (event) => {
    if (event.target === detailsModal) closeModal();
  });

  $("#cancelSaveBtn").addEventListener("click", closeSaveModal);
  saveScheduleModal.addEventListener("click", (event) => {
    if (event.target === saveScheduleModal) closeSaveModal();
  });

  $("#saveScheduleBtn").addEventListener("click", handleSaveScheduleBtn);
  $("#confirmSaveBtn").addEventListener("click", confirmSaveSchedule);

  $("#saveScheduleNameInput").addEventListener("keydown", (e) => {
    if (e.key === "Enter") confirmSaveSchedule();
  });

  $("#modalDoneBtn").addEventListener("click", toggleModalItemCompleted);

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeModal();
      closeSaveModal();
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
            <div class="campaign-number">${index + 1}</div>
            <div class="field">
                <label>${escapeHtml(translations[state.language].name)}</label>
                <input type="text" class="campaign-name" data-index="${index}" value="${escapeAttribute(campaign.name)}" placeholder="${state.language === "ar" ? "مثال: NFC" : "e.g. NFC"}">
            </div>
            <div class="field">
                <label>${escapeHtml(translations[state.language].posts)}</label>
                <input type="number" class="campaign-posts" data-index="${index}" value="${campaign.posts}" min="1" max="100">
            </div>
            <div class="field">
                <label>${escapeHtml(translations[state.language].startDate)}</label>
                <input type="date" class="campaign-date" data-index="${index}" value="${campaign.startDate}">
            </div>
            <div class="color-field">
                <label>${escapeHtml(translations[state.language].color)}</label>
                <div class="color-control" data-color-picker="${index}">
                    <input type="color" class="campaign-color" data-index="${index}" value="${campaign.color}" title="${state.language === "ar" ? "اختار لون الحملة" : "Choose campaign color"}">
                    
                </div>
            </div>
            <button class="remove-campaign ${state.campaigns.length === 1 ? "disabled" : ""}" data-index="${index}" title="Remove">×</button>
        `;
    campaignsContainer.appendChild(row);
  });

  bindCampaignInputs();
  campaignCount.textContent = state.campaigns.length;
}

function bindCampaignInputs() {
  $$(".campaign-name").forEach((input) => {
    input.addEventListener("input", (event) => {
      state.campaigns[Number(event.target.dataset.index)].name =
        event.target.value;
      saveState();
    });
  });

  $$(".campaign-posts").forEach((input) => {
    input.addEventListener("input", (event) => {
      state.campaigns[Number(event.target.dataset.index)].posts = Math.max(
        1,
        Number(event.target.value) || 1,
      );
      saveState();
    });
  });

  $$(".campaign-date").forEach((input) => {
    input.addEventListener("change", (event) => {
      state.campaigns[Number(event.target.dataset.index)].startDate =
        event.target.value;
      saveState();
    });
  });

  $$(".campaign-color").forEach((input) => {
    input.addEventListener("input", (event) => {
      const index = Number(event.target.dataset.index);
      const newColor = event.target.value;
      state.campaigns[index].color = newColor;

      const control = event.target.closest(".color-control");
      if (control) {
        const preview = control.querySelector(".color-preview");
        const value = control.querySelector(".color-value");
        if (preview) preview.style.background = newColor;
        if (value) value.textContent = newColor.toUpperCase();
      }
      saveState();
    });

    const control = input.closest(".color-control");
    if (control) {
      control.addEventListener("click", (event) => {
        if (event.target === input) return;
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

  $$(".remove-campaign").forEach((button) => {
    button.addEventListener("click", () => {
      if (state.campaigns.length <= 1) return;
      removeCampaign(Number(button.dataset.index));
    });
  });
}

/* =========================================================
   SCHEDULE GENERATION
   ========================================================= */

function generateSchedule() {
  if (!validateCampaigns()) return;

  // Validate Unique Times
  saveSettingsFromInputs();
  const timesArray = [
    state.settings.story1Time,
    state.settings.postTime,
    state.settings.story2Time,
    state.settings.followup1Time,
    state.settings.followup2Time,
  ];
  if (new Set(timesArray).size !== 5) {
    showToast(translations[state.language].duplicateTimes);
    return;
  }

  const campaigns = state.campaigns.map((campaign) => ({
    ...campaign,
    posts: Number(campaign.posts),
  }));

  const postQueue = buildPostQueue(campaigns);
  if (!postQueue.length) return;

  const scheduleMap = new Map();

  postQueue.forEach((post) => {
    const postDay = parseDate(post.date);
    const postDayKey = toISODate(postDay);

    addScheduleItem(scheduleMap, postDayKey, {
      ...post,
      type: "story",
      sequence: "S1",
      time: state.settings.story1Time,
      label: translations[state.language].story1,
      description: translations[state.language].prePost,
    });

    addScheduleItem(scheduleMap, postDayKey, {
      ...post,
      type: "post",
      sequence: "POST",
      time: state.settings.postTime,
      label: translations[state.language].post,
      description: translations[state.language].mainPost,
    });

    addScheduleItem(scheduleMap, postDayKey, {
      ...post,
      type: "story",
      sequence: "S2",
      time: state.settings.story2Time,
      label: translations[state.language].story2,
      description: translations[state.language].afterPost,
    });

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

  const days = [...scheduleMap.entries()]
    .sort((a, b) => a[0].localeCompare(b[0]))
    .map(([date, items]) => ({
      date,
      items: items.sort(
        (a, b) => timeToMinutes(a.time) - timeToMinutes(b.time),
      ),
    }));

  // Reset current saving state on new generation
  state.currentScheduleId = null;
  state.currentScheduleName = null;
  state.schedule = days;

  saveState();
  updateSaveButtonState();
  renderSchedule();

  showToast(translations[state.language].scheduleGenerated);
  resultSection.scrollIntoView({ behavior: "smooth", block: "start" });
}

/* =========================================================
   BUILD POST QUEUE
   ========================================================= */

function buildPostQueue(campaigns) {
  const queue = [];
  const maxPosts = Math.max(
    ...campaigns.map((campaign) => Number(campaign.posts)),
  );

  let lastGlobalPostDate = null;

  for (let postNumber = 1; postNumber <= maxPosts; postNumber++) {
    campaigns.forEach((campaign, campaignIndex) => {
      const totalPosts = Number(campaign.posts);
      if (postNumber > totalPosts) return;

      const campaignStart = parseDate(campaign.startDate);
      let candidateDate = new Date(campaignStart);

      // Robust interleaving based on start date logic
      if (lastGlobalPostDate) {
        const minimumNextDate = addDays(lastGlobalPostDate, 1);
        if (minimumNextDate > candidateDate) {
          candidateDate = minimumNextDate;
        }
      }

      queue.push({
        id: `${campaignIndex}-${postNumber}`,
        campaignIndex,
        campaignId: campaignIndex,
        campaignName: campaign.name,
        color: campaign.color,
        postNumber,
        date: toISODate(candidateDate),
      });

      lastGlobalPostDate = candidateDate;
    });
  }
  return queue;
}

function addScheduleItem(scheduleMap, date, item) {
  if (!scheduleMap.has(date)) scheduleMap.set(date, []);

  // Assign stable identifiers and completion statuses
  item.slotId =
    "slot-" +
    Date.now().toString(36) +
    "-" +
    Math.random().toString(36).substr(2, 5);
  item.completed = false;

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
    state.currentScheduleName || translations[state.language].campaignCalendar;
  $("#scheduleSummary").textContent =
    `${totalPosts} ${translations[state.language].totalPosts} • ${state.schedule.length} ${translations[state.language].totalDays} • ${formatDate(firstDate)} — ${formatDate(lastDate)}`;

  updateTimeHeaders();
  calendarBody.innerHTML = "";

  state.schedule.forEach((day) => {
    const tr = document.createElement("tr");

    // DATE
    const dateTd = document.createElement("td");
    dateTd.className = "date-cell";
    const date = parseDate(day.date);

    // Render english digits
    const formattedDateObj = new Intl.DateTimeFormat("en-US", {
      day: "numeric",
    }).format(date);
    dateTd.innerHTML = `
            <span class="date-number">${formattedDateObj}</span>
            <span class="month">${formatMonth(date)}</span>
        `;
    tr.appendChild(dateTd);

    // DAY
    const dayTd = document.createElement("td");
    dayTd.className = "day-cell";
    dayTd.textContent = formatDay(date);
    tr.appendChild(dayTd);

    // TIMES
    const times = [
      state.settings.story1Time,
      state.settings.postTime,
      state.settings.story2Time,
      state.settings.followup1Time,
      state.settings.followup2Time,
    ];

    times.forEach((time) => {
      const td = document.createElement("td");
      // Match exactly by stable time to retain columns LTR placement
      const item = day.items.find((scheduleItem) => scheduleItem.time === time);

      if (item) {
        td.className = "content-cell";
        const card = createContentCard(item);
        td.appendChild(card);

        // Allow modal open via td click (except on done button)
        td.addEventListener("click", (e) => {
          if (e.target.closest(".done-btn")) return;
          openDetailsModal(item);
        });
      } else {
        td.className = "empty-cell";
        td.innerHTML = `<span>—</span>`;
      }
      tr.appendChild(td);
    });

    calendarBody.appendChild(tr);
  });

  updateExpirations();
}

function createContentCard(item) {
  const card = document.createElement("div");
  card.className = `content-card ${item.completed ? "completed" : ""}`;
  card.style.setProperty("--campaign-color", item.color);
  card.dataset.slotId = item.slotId;

  const isDone = item.completed;
  const postNumLabel = getFormattedPostNumber(item, "en");

  card.innerHTML = `
        <button class="done-btn" aria-label="${translations[state.language].markDone}" title="${translations[state.language].markDone}">✓</button>
        <span class="content-dot" style="background:${item.color}"></span>
        <div class="content-details">
            <div class="content-campaign">${escapeHtml(item.campaignName)}</div>
            <div class="content-post-number">${postNumLabel}</div>
            <span class="content-label">${escapeHtml(item.label)}</span>
            <span class="content-sequence">${escapeHtml(item.sequence)} · ${escapeHtml(formatTime(item.time))}</span>
        </div>
    `;

  const btn = card.querySelector(".done-btn");
  btn.addEventListener("click", (e) => {
    e.stopPropagation();
    toggleItemCompleted(item.slotId);
  });

  return card;
}

/* =========================================================
   DONE & EXPIRATION LOGIC
   ========================================================= */

function findScheduleItem(slotId) {
  for (const day of state.schedule) {
    const item = day.items.find((i) => i.slotId === slotId);
    if (item) return item;
  }
  return null;
}

function toggleItemCompleted(slotId) {
  const item = findScheduleItem(slotId);
  if (!item) return;

  item.completed = !item.completed;

  // Auto-sync active snapshot if loaded
  if (state.currentScheduleId) {
    updateActiveSavedSchedule(false);
  }
  saveState();
  renderSchedule();

  // If modal is open for this item, update its UI
  if (currentModalItem && currentModalItem.slotId === slotId) {
    updateModalDoneBtn();
  }
}

function isItemExpired(item) {
  if (!item.date || !item.time) return false;
  const [year, month, day] = item.date.split("-").map(Number);
  const [hours, minutes] = item.time.split(":").map(Number);

  const itemDateTime = new Date(year, month - 1, day, hours, minutes);
  return new Date() > itemDateTime;
}

function updateExpirations() {
  $$(".content-card").forEach((card) => {
    const item = findScheduleItem(card.dataset.slotId);
    if (item && isItemExpired(item)) {
      card.classList.add("expired");
    } else {
      card.classList.remove("expired");
    }
  });
}

/* =========================================================
   SAVE SCHEDULES ARCHITECTURE
   ========================================================= */

function handleSaveScheduleBtn() {
  if (state.currentScheduleId) {
    updateActiveSavedSchedule(true);
  } else {
    openSaveModal();
  }
}

function openSaveModal() {
  $("#saveScheduleNameInput").value = "";
  saveScheduleModal.classList.add("show");
  setTimeout(() => $("#saveScheduleNameInput").focus(), 100);
}

function closeSaveModal() {
  saveScheduleModal.classList.remove("show");
}

function confirmSaveSchedule() {
  const name = $("#saveScheduleNameInput").value.trim();
  if (!name) {
    showToast(translations[state.language].scheduleNameRequired);
    $("#saveScheduleNameInput").focus();
    return;
  }

  const snapshot = {
    id: "sched-" + Date.now() + Math.random().toString(36).substr(2, 5),
    name: name,
    campaigns: JSON.parse(JSON.stringify(state.campaigns)),
    schedule: JSON.parse(JSON.stringify(state.schedule)),
    settings: JSON.parse(JSON.stringify(state.settings)),
  };

  state.savedSchedules.push(snapshot);
  state.currentScheduleId = snapshot.id;
  state.currentScheduleName = name;

  saveState();
  renderSavedSchedules();
  updateSaveButtonState();
  $("#scheduleTitle").textContent = name;

  closeSaveModal();
  showToast(translations[state.language].scheduleSaved);
}

function updateActiveSavedSchedule(showNotify = false) {
  const activeIndex = state.savedSchedules.findIndex(
    (s) => s.id === state.currentScheduleId,
  );
  if (activeIndex === -1) return;

  state.savedSchedules[activeIndex] = {
    id: state.currentScheduleId,
    name: state.currentScheduleName,
    campaigns: JSON.parse(JSON.stringify(state.campaigns)),
    schedule: JSON.parse(JSON.stringify(state.schedule)),
    settings: JSON.parse(JSON.stringify(state.settings)),
  };

  saveState();
  if (showNotify) showToast(translations[state.language].scheduleUpdated);
}

function loadSavedSchedule(id) {
  const snapshot = state.savedSchedules.find((s) => s.id === id);
  if (!snapshot) return;

  state.campaigns = JSON.parse(JSON.stringify(snapshot.campaigns));
  state.schedule = JSON.parse(JSON.stringify(snapshot.schedule));
  state.settings = JSON.parse(JSON.stringify(snapshot.settings));

  state.currentScheduleId = snapshot.id;
  state.currentScheduleName = snapshot.name;

  // Normalize in case older format is loaded
  normalizeScheduleData();

  saveState();
  renderCampaigns();
  syncSettingsInputs();
  updateSaveButtonState();
  renderSavedSchedules();
  renderSchedule();

  $("#schedulerSection").classList.add("active-section");
  $("#settingsSection").classList.remove("active-section");
  $$(".nav-item").forEach((i) => i.classList.remove("active"));
  $$(".nav-item[data-section='scheduler']")[0].classList.add("active");

  // Ensure mobile closes
  $("#sidebar").classList.remove("open");
}

function deleteSavedSchedule(id, e) {
  e.stopPropagation();
  if (!window.confirm(translations[state.language].confirmDeleteSchedule))
    return;

  state.savedSchedules = state.savedSchedules.filter((s) => s.id !== id);

  // If deleted the currently active schedule, detach it but don't clear UI
  if (state.currentScheduleId === id) {
    state.currentScheduleId = null;
    state.currentScheduleName = null;
    updateSaveButtonState();
    $("#scheduleTitle").textContent =
      translations[state.language].campaignCalendar;
  }

  saveState();
  renderSavedSchedules();
}

function renderSavedSchedules() {
  const container = $("#savedSchedulesContainer");
  const emptyMsg = $("#savedSchedulesEmpty");

  container.innerHTML = "";

  if (state.savedSchedules.length === 0) {
    container.style.display = "none";
    emptyMsg.style.display = "block";
    return;
  }

  container.style.display = "flex";
  emptyMsg.style.display = "none";

  state.savedSchedules.forEach((schedule) => {
    const item = document.createElement("div");
    item.className = `saved-schedule-item ${schedule.id === state.currentScheduleId ? "active" : ""}`;

    item.innerHTML = `
            <span class="schedule-name-text">${escapeHtml(schedule.name)}</span>
            <button class="delete-schedule-btn" aria-label="${translations[state.language].deleteSavedSchedule}" title="${translations[state.language].delete}">×</button>
        `;

    item.addEventListener("click", () => loadSavedSchedule(schedule.id));
    item
      .querySelector(".delete-schedule-btn")
      .addEventListener("click", (e) => deleteSavedSchedule(schedule.id, e));

    container.appendChild(item);
  });
}

function updateSaveButtonState() {
  const btnText = $("#saveBtnText");
  if (state.currentScheduleId) {
    btnText.textContent = translations[state.language].saveChanges;
  } else {
    btnText.textContent = translations[state.language].saveSchedule;
  }
}

/* =========================================================
   LEGEND & MODALS
   ========================================================= */

function renderLegend() {
  campaignLegend.innerHTML = "";
  state.campaigns.forEach((campaign) => {
    const item = document.createElement("div");
    item.className = "legend-item";
    item.innerHTML = `
            <span class="legend-dot" style="background:${campaign.color}"></span>
            <span>${escapeHtml(campaign.name)}</span>
        `;
    campaignLegend.appendChild(item);
  });
}

function openDetailsModal(item) {
  currentModalItem = item;
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
  // Inside your openDetailsDialog(item) function
  const dialogTypeEl = document.getElementById("dialog-content-type");
  const dialogPostNumEl = document.getElementById("dialog-post-number"); // Ensure this element exists in your HTML

  if (dialogTypeEl) {
    dialogTypeEl.textContent = item.contentType;
  }
  if (dialogPostNumEl) {
    // Use innerHTML because getFormattedPostNumber includes a <span> for Latin digit enforcement
    dialogPostNumEl.innerHTML = getFormattedPostNumber(item, "en");
  }

  // ... continue populating date, time, and completion state ...

  updateModalDoneBtn();
}

function updateModalDoneBtn() {
  if (!currentModalItem) return;
  const btn = $("#modalDoneBtn");
  const text = $("#modalDoneText");

  if (currentModalItem.completed) {
    btn.style.background = "#22c55e";
    btn.style.borderColor = "#22c55e";
    btn.style.color = "#fff";
    text.textContent = translations[state.language].completed;
  } else {
    btn.style.background = "";
    btn.style.borderColor = "";
    btn.style.color = "";
    text.textContent = translations[state.language].markDone;
  }
}

function toggleModalItemCompleted() {
  if (!currentModalItem) return;
  toggleItemCompleted(currentModalItem.slotId);
}

function closeModal() {
  detailsModal.classList.remove("show");
  document.body.style.overflow = "";
  currentModalItem = null;
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
    $("#" + id).textContent = formatPeriod(time);
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
      const span = ths[index + 2].querySelector(".time-head");
      if (span) span.textContent = formatTime(time);
    });
  }
}

/* =========================================================
   SETTINGS & LANGUAGE
   ========================================================= */

function syncSettingsInputs() {
  Object.entries(state.settings).forEach(([key, value]) => {
    const input = $("#" + key);
    if (input) input.value = value;
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

function toggleLanguage() {
  state.language = state.language === "en" ? "ar" : "en";
  localStorage.setItem("cf-language", state.language);

  applyLanguage();
  renderCampaigns();
  syncSettingsInputs();
  updateSaveButtonState();

  if (state.schedule.length) {
    // Soft refresh for schedule headers instead of full re-generation, keeps snapshot pristine
    renderSchedule();
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
   VALIDATION & LOCAL STORAGE
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

function saveState() {
  localStorage.setItem(
    "cf-state",
    JSON.stringify({
      language: state.language,
      theme: state.theme,
      campaigns: state.campaigns,
      schedule: state.schedule,
      settings: state.settings,
      savedSchedules: state.savedSchedules,
      currentScheduleId: state.currentScheduleId,
      currentScheduleName: state.currentScheduleName,
    }),
  );
}

function loadSavedData() {
  try {
    const saved = localStorage.getItem("cf-state");
    if (!saved) return;
    const data = JSON.parse(saved);

    if (Array.isArray(data.campaigns)) state.campaigns = data.campaigns;
    if (Array.isArray(data.schedule)) state.schedule = data.schedule;
    if (data.settings) state.settings = { ...state.settings, ...data.settings };
    if (data.language) state.language = data.language;
    if (data.theme) state.theme = data.theme;

    if (Array.isArray(data.savedSchedules))
      state.savedSchedules = data.savedSchedules;
    if (data.currentScheduleId)
      state.currentScheduleId = data.currentScheduleId;
    if (data.currentScheduleName)
      state.currentScheduleName = data.currentScheduleName;

    normalizeScheduleData();
  } catch (error) {
    console.error("Failed to load saved state:", error);
  }
}

function normalizeScheduleData() {
  // Ensures old data safely adopts new completion state/ids backward compatibly
  state.schedule.forEach((day) => {
    day.items.forEach((item) => {
      if (typeof item.completed !== "boolean") item.completed = false;
      if (!item.slotId)
        item.slotId =
          "slot-" +
          Date.now().toString(36) +
          "-" +
          Math.random().toString(36).substr(2, 5);
    });
  });
}

function newSchedule() {
  resultSection.classList.add("hidden");
  state.schedule = [];
  state.currentScheduleId = null;
  state.currentScheduleName = null;

  updateSaveButtonState();
  renderSavedSchedules();
  saveState();

  window.scrollTo({ top: 0, behavior: "smooth" });
  showToast(translations[state.language].noSchedule);
}

function clearData() {
  if (!window.confirm(translations[state.language].confirmClear)) return;

  localStorage.removeItem("cf-state");
  state.campaigns = [];
  state.schedule = [];
  state.savedSchedules = [];
  state.currentScheduleId = null;
  state.currentScheduleName = null;

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
  renderSavedSchedules();
  updateSaveButtonState();

  resultSection.classList.add("hidden");
  showToast(translations[state.language].dataCleared);
}

/* =========================================================
   DATE / TIME FORMATTERS (Strictly English/Latin digits mapped for Calendar Layout)
   ========================================================= */

function getTodayISO() {
  return toISODate(new Date());
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

function formatDate(value) {
  const date = typeof value === "string" ? parseDate(value) : value;
  // Always returns 0123456789 format for LTR calendar stability regardless of language
  return new Intl.DateTimeFormat("en-US", {
    day: "numeric",
    month: "short",
    year: "numeric",
  }).format(date);
}

function formatDay(date) {
  const locale = state.language === "ar" ? "ar-EG" : "en-US";
  return new Intl.DateTimeFormat(locale, { weekday: "long" }).format(date);
}

function formatMonth(date) {
  const locale = state.language === "ar" ? "ar-EG" : "en-US";
  return new Intl.DateTimeFormat(locale, { month: "short" }).format(date);
}

function formatTime(time) {
  const [hours, minutes] = time.split(":").map(Number);
  const date = new Date();
  date.setHours(hours, minutes, 0, 0);
  // Forced en-US for strictly latin numerals inside table
  return new Intl.DateTimeFormat("en-US", {
    hour: "2-digit",
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
   TOAST / HELPERS
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
/**
 * Safely retrieves and formats the parent post number.
 * Ensures digits remain Latin (1, 2, 3) across all languages.
 */
function getFormattedPostNumber(item, currentLang) {
  // 1. Primary: Use the explicit postNumber from generated schedule
  let rawNum = item.postNumber;

  // 2. Fallback for legacy saved schedules that might lack postNumber
  if (rawNum === undefined || rawNum === null) {
    if (typeof item.postIndex === "number") {
      rawNum = item.postIndex + 1; // Assuming 0-indexed fallback
    } else if (item.parentPostNumber) {
      rawNum = item.parentPostNumber;
    } else if (item.id && item.id.match(/post-(\d+)/i)) {
      // Only extract from ID if the exact pattern exists
      rawNum = parseInt(item.id.match(/post-(\d+)/i)[1], 10);
    } else {
      // Absolute fallback to prevent rendering "Post #?" or breaking UI
      rawNum = 1;
    }
  }

  // Force standard Latin digits by formatting in en-US
  const latinDigit = Number(rawNum).toLocaleString("en-US", {
    useGrouping: false,
  });

  // Apply translation template
  const template = currentLang === "ar" ? "منشور #{number}" : "Post #{number}";
  return template.replace(
    "{number}",
    `<strong dir="ltr">${latinDigit}</strong>`,
  );
}
