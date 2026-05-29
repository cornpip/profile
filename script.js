const translations = {
  en: {
    htmlLang: "en",
    pageTitle: "Profile | cornpip",
    metaDescription: "Profile",
    eyebrow: "AI SOFTWARE ENGINEER",
    heroTitle: "An engineer working across technology and business.",
    heroLead:
      "I am most motivated when building things that deliver clear value to users.",
    heroDescription: [
      "I work end to end across system and architecture design, covering data design, model development, inference pipelines, and application implementation.",
      "I also bring AI agent ideas into development, including workflow design, agent role composition, and skill usage.",
    ],
    heroHighlights: [
      "Ownership",
      "Culture contribution",
      "Fast execution",
      "Data-driven problem framing",
      "computer vision",
      "end-to-end",
      "product engineer",
      "ai native",
    ],
    heroProjectsLink: "View Projects",
    heroContactLink: "Contact",
    archiveIndexTitle: "Archive",
    aboutHeading: "About",
    profileName: "Seonhyo Choi",
    profileRole: "Software Engineer | Computer Vision, On device AI, Flutter",
    aboutDescription: "",
    aboutItems: [
      ["Strengths", "Camera and image processing, smartphone on-device AI, AI pipeline and model design"],
      ["Work Style", "Product ownership, data- and visualization-based discussion, modularizing repetitive work"],
    ],
    projectsHeading: "Projects",
    projectsIntro: "",
    personalProjectsHeading: "Side Projects",
    contactHeading: "Contact",
    contactDescription: "For collaboration or project inquiries, reach out through the channels below.",
    footerText: "Copyright © 2026 cornpip",
    lightboxClose: "Close",
    lightboxPrev: "Previous image",
    lightboxNext: "Next image",
    lightboxImageAlt: "Expanded project image",
    galleryImageAlt: "Project image {index}",
    galleryFallback: "Image {index}",
    galleryMissingLabel: "VISUAL UNAVAILABLE",
    galleryMissingMeta: "Internal asset pending",
    projects: [
      {
        year: "2026",
        sortOrder: 1,
        period: "2025 -",
        team: "HealthCloud",
        title: "Nailfold Capillary Analysis with On-Device AI",
        description:
          "Developed a nailfold capillary analysis app, implementing the full flow on smartphone on-device AI from optical device integration to image acquisition, preprocessing, and AI inference.",
        bullets: [
          "Handled optical device integration in the app with WebSocket-based device control and MJPEG preview/capture",
          "Connected preprocessing of captured images with a TFLite inference pipeline on-device",
          "Developed a separate FFI-based image and tensor processing package reusable across Flutter apps",
          "Converted YOLO and PyTorch-based models to TFLite and mitigated quality loss by adjusting the backbone, hyperparameters, and quantization level",
        ],
        media: ["assets/projects/Capillaries/1.png"],
      },
      {
        year: "2025",
        sortOrder: 2,
        period: "",
        team: "HealthCloud",
        title: "On-Device Skin Analysis for RF/EMS Beauty Devices",
        description:
          "Developed a skin analysis app connected to RF and EMS beauty devices, implementing on-device AI models for facial-region extraction and skin condition analysis.",
        bullets: [
          "Connected app and beauty-device usage flow through BLE integration",
          "Extracted forehead, eye, cheek, and lip regions from facial landmarks and built a per-area analysis pipeline",
          "Provided wrinkle and hydration analysis by combining per-area preprocessing with AI inference",
        ],
        media: ["assets/projects/POD/1.png", "assets/projects/POD/2.png"],
      },
      {
        year: "2026",
        sortOrder: 5,
        period: "2025 -",
        team: "HealthCloud",
        title: "AI Skin and Scalp Analysis App",
        description:
          "Developed a skin and scalp analysis app. I designed AI models for five skin analysis categories and trained them with strategies tailored to limited and imbalanced data.",
        bullets: [
          "Designed and trained ResNet classification models and UNet segmentation models for skin analysis",
          "Implemented hair-thickness analysis by detecting pores with YOLO and separating hair regions with a segmentation model",
          "Handled native feature control with MethodChannel and addressed network constraints with Wi-Fi and cellular switching logic",
          "Implemented customer management and analysis history features with SQLite",
        ],
        media: [
          "assets/projects/Bellus/1.png",
          "assets/projects/Bellus/2.png",
          "assets/projects/Bellus/3.png",
        ],
      },
      {
        year: "2024",
        period: "",
        team: "HealthCloud",
        title: "Face Recognition Attendance for Care Facilities",
        description:
          "Developed a smartphone-based face recognition attendance service.",
        bullets: [
          "Built a smartphone face-recognition pipeline with ML Kit-based face ROI detection",
          "Extracted MobileFaceNet embeddings, sent them to the server, and identified users by comparing them with vectors stored in the database",
          "Designed session authentication, role-based access control, and APIs for service operations",
        ],
        media: ["assets/projects/CNear Hello Check/1.png", "assets/projects/CNear Hello Check/2.png"],
      },
      {
        year: "2024",
        period: "",
        team: "HealthCloud",
        title: "Pothole Management Solution",
        description:
          "Processed pothole data collected by vehicles on the server and built a dashboard to visualize it by administrative area.",
        bullets: [
          "Developed a pothole data-processing server to support the flow from storage to visualization",
          "Improved operational visibility with a GIS-based dashboard that aggregated data by administrative area based on zoom level",
        ],
        media: ["assets/projects/포트홀 관리 솔루션/1.png", "assets/projects/포트홀 관리 솔루션/2.png"],
      },
      {
        year: "2024",
        period: "",
        team: "Keyworks",
        title: "Seaweed Foreign-Material Inspection",
        description:
          "Designed dataset composition and validation strategy for training a foreign-material detection model for seaweed inspection.",
        bullets: [
          "Designed datasets around defect distribution and lighting conditions",
          "Ran training, validation, and testing across preprocessing variants",
        ],
        media: ["assets/projects/김 이물 검사/1.png", "assets/projects/김 이물 검사/2.png"],
      },
      {
        year: "2023",
        period: "",
        team: "HealthCloud",
        title: "Pet Portrait Generation Service for Illustrators",
        description:
          "Built a pet image generation workflow and serving stack and delivered it as a service.",
        bullets: [
          "Relayed ComfyUI workflows through a Spring server and implemented multi-client handling and scheduling",
          "Reproduced artist-specific style through LoRA training",
        ],
        media: [
          "assets/projects/생성형 AI 솔루션/1.jpg",
          "assets/projects/생성형 AI 솔루션/2.jpg",
          "assets/projects/생성형 AI 솔루션/3.jpg",
        ],
      },
      {
        year: "2022",
        period: "",
        team: "NextLab",
        title: "Btv UI Navigation Algorithm Enhancement",
        description:
          "Improved the navigation algorithm with a classification model and visualized UI navigation paths to analyze false positives.",
        bullets: [
          "Trained a ResNet classification model and applied it to the UI navigation algorithm",
          "Defined node-to-node data in the navigation flow and visualized paths with React and D3.js to analyze false positives",
          "Used Class Activation Map (CAM) to inspect classification evidence, analyze misclassifications, and improve the model",
        ],
        media: ["assets/projects/Btv UI 탐색 경로 시각화/1.jpg", "assets/projects/Btv UI 탐색 경로 시각화/2.png"],
      },
      {
        year: "2021",
        period: "",
        team: "Competition Entry",
        title: "AR Driving Route Guide",
        description:
          "Released an Android app for AR-based driving route guidance.",
        bullets: [
          "Analyzed and integrated Mapbox Vision SDK for lane and traffic-light recognition R&D",
          "Received an encouragement award at the Regional XR Challenge",
        ],
        media: [
          "assets/projects/이 길 맞는교/1.jpg",
          "assets/projects/이 길 맞는교/2.jpg",
        ],
      },
    ],
    personalProjects: [
      {
        year: "2026",
        sortKey: "2026-01",
        sortOrder: 2,
        period: "",
        team: "Side Project",
        title: "Flutter Plugin for UVC Camera Access on Android",
        description:
          "Developed a Flutter FFI plugin that enables UVC camera access on Android via libuvc bindings, supporting live preview, frame capture, and camera control.",
        bullets: [
          "Bridged Android USB Host API, libusb, and libuvc across three layers to handle device discovery, USB communication, and UVC protocol",
          "Implemented texture-based live preview to stream frames to Flutter widgets without excessive data copying",
          "Exposed raw frame bytes to Dart for capture and image processing pipelines",
          "Supported camera parameter control including focus, pan, tilt, and exposure, with stream diagnostics for FPS and dropped frames",
          "Published on pub.dev with arm64-v8a, armeabi-v7a, and x86_64 ABI support",
        ],
        link: "https://pub.dev/packages/flutter_ffi_uvc",
        linkLabel: "View pub.dev",
        media: ["assets/projects/ffi_flutter_uvc/1.png"],
      },
      {
        year: "2026",
        sortKey: "2026-00",
        sortOrder: 3,
        period: "2025 -",
        team: "Side Project",
        title: "Flutter Package for On-Device Facial Landmark Extraction",
        description:
          "Developed a Flutter package for extracting facial landmarks with the MediaPipe Face Mesh model.",
        bullets: [
          "Designed the package as an FFI plugin and handled core computation in C++",
          "Built Android and iOS TFLite binaries directly, then selectively adapted the required C API headers and implementations to run model inference in the C++ layer",
          "Published on pub.dev with iOS and Android support",
        ],
        link: "https://pub.dev/packages/mediapipe_face_mesh",
        linkLabel: "View pub.dev",
        media: ["assets/projects/mediapipe_face_mesh/1.png"],
      },
      {
        year: "2025",
        sortKey: "2025-08",
        sortOrder: 4,
        period: "",
        team: "Side Project",
        title: "Mediapipe Landmark 3D Viewer",
        description:
          "Developed a 3D interactive visualization viewer for inspecting landmark points intuitively.",
        bullets: [
          "Made it possible to find positions by landmark ID and identify IDs by position",
          "Used it as a support tool for intuitively inspecting landmark structures when working with Face Mesh",
        ],
        link: "https://github.com/cornpip/mediapipe_landmark_viewer",
        linkLabel: "View GitHub",
        media: ["assets/projects/Mediapipe Landmark 3D Viewer/1.png", "assets/projects/Mediapipe Landmark 3D Viewer/2.png"],
      },
      {
        year: "2024",
        sortKey: "2024-12",
        period: "",
        team: "Side Project",
        title: "Self-Hosted OpenAI Chat with Token Tracking and AI Editing",
        description:
          "Implemented a Docker-based system that lets users work with the OpenAI API locally in a ChatGPT-like flow.",
        bullets: [
          "Stored conversation histories locally and exposed token usage for each history",
          "Crawled linked webpages and reflected BART-based summaries into chats",
          "Implemented an editing feature by integrating SAM2 mask generation with the OpenAI Inpainting API",
        ],
        link: "https://github.com/cornpip/TokenMeter",
        linkLabel: "View GitHub",
        media: [
          "assets/projects/TokenMeter/1.png",
          "assets/projects/TokenMeter/2.png",
        ],
      },
      {
        year: "2022",
        sortKey: "2022-03",
        period: "",
        team: "Capstone",
        title: "Driver Assault Detection",
        description:
          "Built a dataset for three in-vehicle scenarios, Normal, Assault, and Payment, and used MMAction2 to train and serve a PoseC3D model.",
        bullets: [
          "Implemented an inference pipeline in MMAction2 with Faster R-CNN, HRNet, and PoseC3D in sequence",
          "Received continuous frames from Raspberry Pi over sockets and managed a server-side image queue for fixed-window inference processing",
          "Received an encouragement award at the ICT Undergraduate Paper Competition",
        ],
        link: "https://github.com/cornpip/Action-Recognition",
        linkLabel: "View GitHub",
        media: [
          "assets/projects/운전자 폭행 감지/1.png",
          "assets/projects/운전자 폭행 감지/2.png",
        ],
      },
    ],
  },
};

const elements = {
  title: document.querySelector("title"),
  metaDescription: document.querySelector('meta[name="description"]'),
  eyebrow: document.getElementById("eyebrow"),
  heroTitle: document.getElementById("heroTitle"),
  heroLead: document.getElementById("heroLead"),
  heroDescription: document.getElementById("heroDescription"),
  heroHighlights: document.getElementById("heroHighlights"),
  heroProjectsLink: document.getElementById("heroProjectsLink"),
  heroContactLink: document.getElementById("heroContactLink"),
  aboutHeading: document.getElementById("aboutHeading"),
  profileName: document.getElementById("profileName"),
  profileRole: document.getElementById("profileRole"),
  aboutDescription: document.getElementById("aboutDescription"),
  aboutList: document.getElementById("aboutList"),
  profileImage: document.getElementById("profileImage"),
  projectsHeading: document.getElementById("projectsHeading"),
  projectsIntro: document.getElementById("projectsIntro"),
  projectsTimeline: document.getElementById("projectsTimeline"),
  archiveIndexTitle: document.getElementById("archiveIndexTitle"),
  archiveNav: document.getElementById("archiveNav"),
  contactHeading: document.getElementById("contactHeading"),
  contactDescription: document.getElementById("contactDescription"),
  footerText: document.getElementById("footerText"),
};

const year = new Date().getFullYear();
const projectCards = [];
const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightboxImage");
const lightboxIndicator = document.getElementById("lightboxIndicator");
const lightboxClose = document.getElementById("lightboxClose");
const lightboxPrev = document.getElementById("lightboxPrev");
const lightboxNext = document.getElementById("lightboxNext");
let activeImages = [];
let activeIndex = 0;
const currentLanguage = "en";
let detailsStateBeforePrint = [];
let archiveSections = [];

const renderLightbox = () => {
  if (!lightboxImage || !lightboxIndicator || activeImages.length === 0) {
    return;
  }
  const copy = translations[currentLanguage];
  lightboxImage.src = activeImages[activeIndex].src;
  lightboxImage.alt = activeImages[activeIndex].alt || copy.lightboxImageAlt;
  lightboxIndicator.textContent = `${activeIndex + 1} / ${activeImages.length}`;
};

const openLightbox = (images, index) => {
  if (!lightbox || !images.length) {
    return;
  }
  activeImages = images;
  activeIndex = index;
  renderLightbox();
  lightbox.classList.add("open");
  lightbox.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
};

const closeLightbox = () => {
  if (!lightbox) {
    return;
  }
  lightbox.classList.remove("open");
  lightbox.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
};

const showPrevImage = () => {
  if (activeImages.length === 0) {
    return;
  }
  activeIndex = (activeIndex - 1 + activeImages.length) % activeImages.length;
  renderLightbox();
};

const showNextImage = () => {
  if (activeImages.length === 0) {
    return;
  }
  activeIndex = (activeIndex + 1) % activeImages.length;
  renderLightbox();
};

const createMediaGallery = (project, copy) => {
  const mediaFiles = Array.isArray(project.media) ? project.media : [];

  if (mediaFiles.length === 0) {
    return null;
  }

  const gallery = document.createElement("div");
  gallery.className = "project-gallery";

  const imageExtensions = new Set(["jpg", "jpeg", "png", "webp", "gif"]);
  const videoExtensions = new Set(["mp4", "webm", "mov"]);

  mediaFiles.forEach((mediaPath, index) => {
    const slot = document.createElement("div");
    slot.className = "project-image-slot";
    slot.textContent = copy.galleryFallback.replace("{index}", String(index + 1));

    const extension = mediaPath.split(".").pop()?.toLowerCase() || "";

    if (imageExtensions.has(extension)) {
      const img = document.createElement("img");
      img.alt = copy.galleryImageAlt.replace("{index}", String(index + 1));
      img.loading = "lazy";
      img.src = mediaPath;
      img.addEventListener("error", () => {
        const ext = img.src.split(".").pop()?.toLowerCase();
        const fallback = ext === "png" ? "jpg" : ext === "jpg" ? "png" : null;
        if (fallback && !img.dataset.triedFallback) {
          img.dataset.triedFallback = "1";
          img.src = img.src.replace(/\.[^.]+$/, `.${fallback}`);
          return;
        }
        slot.classList.add("is-placeholder");
        slot.innerHTML = `<span class="project-image-placeholder-label">${copy.galleryMissingLabel}</span><span class="project-image-placeholder-meta">${copy.galleryMissingMeta}</span>`;
      });
      img.addEventListener("load", () => {
        const aspectRatio = img.naturalWidth / Math.max(img.naturalHeight, 1);
        if (aspectRatio >= 1.25) {
          slot.classList.add("is-landscape");
        } else {
          slot.classList.add("is-portrait");
        }
        slot.classList.add("has-image");
        slot.textContent = "";
        if (!slot.contains(img)) {
          slot.appendChild(img);
        }
      });
      slot.appendChild(img);
    } else if (videoExtensions.has(extension)) {
      const video = document.createElement("video");
      video.controls = true;
      video.preload = "metadata";
      video.playsInline = true;
      video.src = mediaPath;
      video.setAttribute("aria-label", `${project.title} video ${index + 1}`);
      video.addEventListener("loadeddata", () => {
        slot.classList.add("has-video");
        slot.textContent = "";
        if (!slot.contains(video)) {
          slot.appendChild(video);
        }
      });
      slot.appendChild(video);
    } else {
      slot.textContent = mediaPath.split("/").pop() || copy.galleryFallback.replace("{index}", String(index + 1));
    }

    gallery.appendChild(slot);
  });

  gallery.addEventListener("click", (event) => {
    const clickedImage = event.target.closest("img");
    if (!clickedImage) {
      return;
    }
    const images = Array.from(gallery.querySelectorAll(".project-image-slot img"));
    const index = images.indexOf(clickedImage);
    if (index >= 0) {
      openLightbox(images, index);
    }
  });

  return gallery;
};

const bindProfileLightbox = (copy) => {
  if (!elements.profileImage) {
    return;
  }

  const profileImage = elements.profileImage;
  profileImage.alt = "Profile photo of Seonhyo Choi";

  if (profileImage.dataset.lightboxBound === "true") {
    return;
  }

  const openProfileLightbox = () => {
    if (!profileImage.currentSrc && !profileImage.src) {
      return;
    }
    openLightbox([profileImage], 0);
  };

  profileImage.addEventListener("click", openProfileLightbox);
  profileImage.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      openProfileLightbox();
    }
  });
  profileImage.addEventListener("load", () => {
    profileImage.classList.add("is-zoomable");
    profileImage.tabIndex = 0;
    profileImage.setAttribute("role", "button");
  });

  if (profileImage.complete && profileImage.naturalWidth > 0) {
    profileImage.classList.add("is-zoomable");
    profileImage.tabIndex = 0;
    profileImage.setAttribute("role", "button");
  }

  profileImage.dataset.lightboxBound = "true";
};

const getProjectSortKey = (project) => {
  if (project.sortKey) {
    return project.sortKey;
  }

  if (project.year) {
    return `${project.year}-00`;
  }

  return "0000-00";
};

const getAllProjects = (copy) =>
  [...copy.projects, ...copy.personalProjects]
    .map((project, index) => ({ ...project, originalIndex: index }))
    .sort((a, b) => {
      if (a.year === b.year && Number.isFinite(a.sortOrder) && Number.isFinite(b.sortOrder)) {
        const orderCompare = a.sortOrder - b.sortOrder;
        if (orderCompare !== 0) {
          return orderCompare;
        }
      }

      const sortCompare = getProjectSortKey(b).localeCompare(getProjectSortKey(a));
      if (sortCompare !== 0) {
        return sortCompare;
      }
      return a.originalIndex - b.originalIndex;
    });

const renderProjectList = (projects, timelineElement, copy, options = {}) => {
  if (!timelineElement) {
    return;
  }

  timelineElement.textContent = "";
  projectCards.length = 0;

  const { groupedByYear = false, groupedByField = "", singleGroupLabel = "" } = options;
  const groups = groupedByYear
    ? Array.from(
        projects.reduce((map, project) => {
          const year = project.year || "Other";
          const items = map.get(year) || [];
          items.push(project);
          map.set(year, items);
          return map;
        }, new Map())
      ).sort((a, b) => Number(b[0]) - Number(a[0]))
    : singleGroupLabel
      ? [[singleGroupLabel, projects]]
    : groupedByField
      ? Array.from(
          projects.reduce((map, project) => {
            const label = project[groupedByField] || "Other";
            const items = map.get(label) || [];
            items.push(project);
            map.set(label, items);
            return map;
          }, new Map())
        )
    : [["all", projects]];

  groups.forEach(([groupLabel, groupProjects]) => {
    const isGroupedPanel = groupedByYear || Boolean(groupedByField) || Boolean(singleGroupLabel);
    const mount = groupedByYear || singleGroupLabel ? document.createElement("details") : isGroupedPanel ? document.createElement("section") : timelineElement;
    let target = timelineElement;

    if (isGroupedPanel) {
      mount.className = groupedByYear || singleGroupLabel ? "timeline-year" : "timeline-group";
      if (groupedByYear) {
        mount.id = `archive-${String(groupLabel).toLowerCase()}`;
      }
      const header = groupedByYear || singleGroupLabel ? document.createElement("summary") : document.createElement("div");
      header.className = groupedByYear || singleGroupLabel ? "timeline-year-summary" : "timeline-group-header";
      const labelClass = singleGroupLabel ? "timeline-label timeline-label-section" : "timeline-label";
      header.innerHTML = `<span class="timeline-heading"><span class="timeline-toggle" aria-hidden="true"></span><span class="${labelClass}">${groupLabel}</span><span class="timeline-count">(${groupProjects.length})</span></span>`;
      mount.appendChild(header);

      target = document.createElement("div");
      target.className = groupedByYear || singleGroupLabel ? "timeline-year-content" : "timeline-group-content";
      mount.appendChild(target);
      timelineElement.appendChild(mount);
    }

    groupProjects.forEach((project) => {
      const card = document.createElement("article");
      card.className = "project-card";

      const aside = document.createElement("div");
      aside.className = "project-aside";

      const team = document.createElement("p");
      team.className = "project-team";
      team.textContent = project.team;

      if (project.period) {
        const period = document.createElement("p");
        period.className = "project-period";
        period.textContent = project.period;
        aside.append(period, team);
      } else {
        aside.append(team);
      }

      if (project.link) {
        const link = document.createElement("a");
        link.className = "project-link";
        link.href = project.link;
        link.target = "_blank";
        link.rel = "noreferrer";
        link.textContent = project.linkLabel;
        aside.appendChild(link);
      }

      const body = document.createElement("div");
      body.className = "project-body";

      const title = document.createElement("h3");
      title.textContent = project.title;

      const description = document.createElement("p");
      description.className = "project-description";
      description.textContent = project.description;

      const list = document.createElement("ul");
      list.className = "project-points";
      project.bullets.forEach((bullet) => {
        const item = document.createElement("li");
        item.textContent = bullet;
        list.appendChild(item);
      });

      body.append(title, description, list);

      const gallery = createMediaGallery(project, copy);
      if (gallery) {
        body.appendChild(gallery);
      }

      card.append(aside, body);
      target.appendChild(card);
      projectCards.push(card);
    });
  });
};

const buildArchiveSections = (copy) => {
  const yearSections = Array.from(document.querySelectorAll("#projects .timeline-year")).map((section) => ({
    id: section.id,
    label: section.querySelector(".timeline-label")?.textContent?.trim() || "",
    element: section,
  }));

  return yearSections.filter((item) => item.element && item.label);
};

const setActiveArchiveSection = (id) => {
  if (!elements.archiveNav) {
    return;
  }

  elements.archiveNav.querySelectorAll(".archive-link").forEach((link) => {
    const isActive = link.dataset.target === id;
    link.classList.toggle("is-active", isActive);
    link.setAttribute("aria-current", isActive ? "location" : "false");
  });
};

const updateArchiveSpy = () => {
  if (!archiveSections.length) {
    return;
  }

  const threshold = window.innerHeight * 0.32;
  let currentSection = archiveSections[0];

  archiveSections.forEach((section) => {
    const rect = section.element.getBoundingClientRect();
    if (rect.top <= threshold) {
      currentSection = section;
    }
  });

  if (!currentSection && archiveSections.length) {
    currentSection = archiveSections[0];
  }

  if (currentSection) {
    setActiveArchiveSection(currentSection.id);
  }
};

const renderArchiveIndex = (copy) => {
  if (!elements.archiveNav || !elements.archiveIndexTitle) {
    return;
  }

  elements.archiveIndexTitle.textContent = copy.archiveIndexTitle;
  archiveSections = buildArchiveSections(copy);
  elements.archiveNav.textContent = "";

  archiveSections.forEach((section) => {
    const link = document.createElement("a");
    link.className = "archive-link";
    link.href = `#${section.id}`;
    link.dataset.target = section.id;
    link.textContent = section.label;
    link.addEventListener("click", (event) => {
      event.preventDefault();
      const target = document.getElementById(section.id);
      if (!target) {
        return;
      }

      const details = target.closest("details");
      if (details) {
        details.open = true;
      }

      target.scrollIntoView({ behavior: "smooth", block: "start" });
      setActiveArchiveSection(section.id);
    });
    elements.archiveNav.appendChild(link);
  });

  updateArchiveSpy();
};

const renderAboutList = (copy) => {
  if (!elements.aboutList) {
    return;
  }

  elements.aboutList.textContent = "";
  copy.aboutItems.forEach(([label, value]) => {
    const item = document.createElement("li");
    item.innerHTML = `<strong>${label}:</strong> ${value}`;
    elements.aboutList.appendChild(item);
  });
};

const renderHeroHighlights = (copy) => {
  if (!elements.heroHighlights) {
    return;
  }

  elements.heroHighlights.textContent = "";
  copy.heroHighlights.forEach((item) => {
    const chip = document.createElement("span");
    chip.className = "hero-highlight";
    chip.textContent = item;
    elements.heroHighlights.appendChild(chip);
  });
};

const getOpenTimelineSectionIds = () =>
  Array.from(document.querySelectorAll("#projects details.timeline-year[open]"))
    .map((section) => section.id)
    .filter(Boolean);

const restoreOpenTimelineSections = (openIds) => {
  openIds.forEach((id) => {
    const section = document.getElementById(id);
    if (section && section.tagName === "DETAILS") {
      section.open = true;
    }
  });
};

const setLanguage = (language) => {
  const copy = translations["en"];
  const openTimelineSectionIds = getOpenTimelineSectionIds();

  document.documentElement.lang = copy.htmlLang;
  if (elements.title) {
    elements.title.textContent = copy.pageTitle;
  }
  if (elements.metaDescription) {
    elements.metaDescription.setAttribute("content", copy.metaDescription);
  }

  elements.eyebrow.textContent = copy.eyebrow;
  elements.heroTitle.innerHTML = copy.heroTitle;
  elements.heroLead.textContent = copy.heroLead;
  elements.heroDescription.replaceChildren();
  const heroDescriptionParagraphs = Array.isArray(copy.heroDescription)
    ? copy.heroDescription
    : copy.heroDescription
      ? [copy.heroDescription]
      : [];
  heroDescriptionParagraphs.forEach((paragraph) => {
    const p = document.createElement("p");
    p.textContent = paragraph;
    elements.heroDescription.appendChild(p);
  });
  elements.heroDescription.hidden = heroDescriptionParagraphs.length === 0;
  elements.heroProjectsLink.textContent = copy.heroProjectsLink;
  elements.heroContactLink.textContent = copy.heroContactLink;
  if (elements.archiveIndexTitle) {
    elements.archiveIndexTitle.textContent = copy.archiveIndexTitle;
  }
  elements.aboutHeading.textContent = copy.aboutHeading;
  elements.profileName.textContent = copy.profileName;
  elements.profileRole.textContent = copy.profileRole;
  elements.aboutDescription.textContent = copy.aboutDescription;
  elements.aboutDescription.hidden = !copy.aboutDescription;
  elements.projectsHeading.textContent = copy.projectsHeading;
  elements.projectsIntro.textContent = copy.projectsIntro;
  elements.projectsIntro.hidden = !copy.projectsIntro;
  elements.contactHeading.textContent = copy.contactHeading;
  elements.contactDescription.textContent = copy.contactDescription;
  elements.footerText.textContent = copy.footerText.replace("{year}", String(year));

  if (lightboxClose) {
    lightboxClose.setAttribute("aria-label", copy.lightboxClose);
  }
  if (lightboxPrev) {
    lightboxPrev.setAttribute("aria-label", copy.lightboxPrev);
  }
  if (lightboxNext) {
    lightboxNext.setAttribute("aria-label", copy.lightboxNext);
  }
  if (lightboxImage) {
    lightboxImage.alt = copy.lightboxImageAlt;
  }

  renderHeroHighlights(copy);
  renderAboutList(copy);
  bindProfileLightbox(copy);
  renderProjectList(getAllProjects(copy), elements.projectsTimeline, copy, { groupedByYear: true });
  restoreOpenTimelineSections(openTimelineSectionIds);
  renderArchiveIndex(copy);
  renderLightbox();
};

const enterPrintMode = () => {
  document.body.classList.add("print-mode");
  document.querySelectorAll(".reveal").forEach((section) => {
    section.classList.add("show");
  });

  detailsStateBeforePrint = Array.from(document.querySelectorAll("details")).map((item) => ({
    element: item,
    open: item.open,
  }));

  detailsStateBeforePrint.forEach(({ element }) => {
    element.open = true;
  });
};

const exitPrintMode = () => {
  document.body.classList.remove("print-mode");
  detailsStateBeforePrint.forEach(({ element, open }) => {
    element.open = open;
  });
  detailsStateBeforePrint = [];
};

setLanguage("en");

const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.14 }
);

reveals.forEach((section) => observer.observe(section));

window.addEventListener("scroll", updateArchiveSpy, { passive: true });
window.addEventListener("resize", updateArchiveSpy);

if (window.matchMedia) {
  const printMediaQuery = window.matchMedia("print");
  if (typeof printMediaQuery.addEventListener === "function") {
    printMediaQuery.addEventListener("change", (event) => {
      if (event.matches) {
        enterPrintMode();
      } else {
        exitPrintMode();
      }
    });
  }
}

window.addEventListener("beforeprint", enterPrintMode);
window.addEventListener("afterprint", exitPrintMode);

if (lightboxClose) {
  lightboxClose.addEventListener("click", closeLightbox);
}
if (lightboxPrev) {
  lightboxPrev.addEventListener("click", showPrevImage);
}
if (lightboxNext) {
  lightboxNext.addEventListener("click", showNextImage);
}
if (lightbox) {
  lightbox.addEventListener("click", (event) => {
    if (event.target === lightbox) {
      closeLightbox();
    }
  });
}

document.addEventListener("keydown", (event) => {
  if (!lightbox || !lightbox.classList.contains("open")) {
    return;
  }
  if (event.key === "Escape") {
    closeLightbox();
  } else if (event.key === "ArrowLeft") {
    showPrevImage();
  } else if (event.key === "ArrowRight") {
    showNextImage();
  }
});
