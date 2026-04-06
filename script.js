const translations = {
  ko: {
    htmlLang: "ko",
    pageTitle: "Profile | cornpip",
    metaDescription: "최선효의 소개와 프로젝트 이력을 담은 포트폴리오 페이지",
    eyebrow: "AI SOFTWARE ENGINEER",
    heroTitle: "기술과 비즈니스를<br />잇는 엔지니어입니다.",
    heroLead:
      "Computer Vision Engineer로 데이터 설계부터 모델 개발, 추론 파이프라인, 애플리케이션 구현까지 End-to-End로 수행해왔습니다.",
    heroDescription:
      "AI Agent에도 많은 관심을 두고, workflow 설계, 에이전트 역할 구성, 스킬 활용 등 다양한 실험을 개발에 적용하고 있습니다.",
    heroHighlights: [
      "오너십",
      "조직 문화에 적극적",
      "빠른 실행",
      "데이터 기반 문제 정의",
      "computer vision",
      "end-to-end",
      "product engineer",
      "ai native",
    ],
    heroProjectsLink: "프로젝트 보기",
    heroContactLink: "연락하기",
    archiveIndexTitle: "Archive",
    aboutHeading: "소개",
    profileName: "최선효",
    profileRole: "Computer Vision Engineer",
    aboutDescription: "",
    aboutItems: [
      ["주요 스킬", "Flutter, Android, C++, Camera"],
      ["강점", "카메라·영상 처리, 스마트폰 온디바이스AI, AI 파이프라인·모델 설계"],
      ["업무 방식", "제품 오너십, 데이터·시각화 기반 논의, 반복 작업 모듈화"],
    ],
    projectsHeading: "프로젝트",
    projectsIntro: "",
    personalProjectsHeading: "사이드 프로젝트",
    contactHeading: "연락하기",
    contactDescription: "협업 제안이나 프로젝트 문의는 아래 채널로 연락 주세요.",
    footerText: "Copyright © 2026 cornpip",
    lightboxClose: "닫기",
    lightboxPrev: "이전 이미지",
    lightboxNext: "다음 이미지",
    lightboxImageAlt: "프로젝트 이미지 크게 보기",
    galleryImageAlt: "프로젝트 이미지 {index}",
    galleryFallback: "이미지 {index}",
    galleryMissingLabel: "VISUAL UNAVAILABLE",
    galleryMissingMeta: "Internal asset pending",
    projects: [
      {
        year: "2025",
        sortOrder: 1,
        period: "2025.10 -",
        team: "헬스클라우드(주)",
        title: "Capillaries",
        description:
          "손톱 모세혈관 분석 앱을 개발했습니다. 광학 기기 연동부터 이미지 취득, 전처리, AI 추론까지 전 과정을 스마트폰 온디바이스 AI로 구현했습니다.",
        bullets: [
          "WebSocket 기반 기기 제어와 MJPEG 프리뷰·캡처로 광학 기기 연동 흐름을 앱에서 처리",
          "취득 이미지 전처리와 TFLite 추론 파이프라인을 연결해 분석 흐름을 온디바이스로 구성",
          "Flutter에서 공통으로 활용할 수 있는 FFI 기반 이미지·텐서 처리 패키지를 별도로 개발",
          "YOLO·PyTorch 기반 모델을 TFLite로 변환하고, 백본·하이퍼파라미터·양자화 수준 조정으로 성능 저하를 보완",
        ],
        media: [
          "assets/projects/Capillaries/1.png",
          "assets/projects/Capillaries/2.png",
        ],
      },
      {
        year: "2025",
        sortOrder: 2,
        period: "2025.07 - 2026.02",
        team: "헬스클라우드(주)",
        title: "POD",
        description:
          "RF·EMS 뷰티기기와 연동되는 피부 분석 앱을 개발했습니다. 온디바이스 AI 기반 얼굴 부위 추출과 피부 상태 분석 모델을 앱에 구현했습니다.",
        bullets: [
          "BLE 연동으로 앱과 뷰티기기 사용 흐름 연결",
          "얼굴 랜드마크 기반으로 이마·눈가·볼·입술 영역을 추출해 부위별 분석 파이프라인 구성",
          "부위별 전처리와 AI 추론을 적용해 주름·수분 상태 분석 기능 제공",
        ],
        media: ["assets/projects/POD/1.png", "assets/projects/POD/2.png"],
      },
      {
        year: "2025",
        sortOrder: 5,
        period: "2025.01 - 2025.11",
        team: "헬스클라우드(주)",
        title: "Bellus",
        description:
          "피부·두피 분석 앱을 개발했습니다. 5가지 피부 항목에 대한 AI 모델을 설계하고, 제한된 데이터와 불균형 분포를 고려한 학습 전략으로 모델을 학습했습니다.",
        bullets: [
          "ResNet 분류 모델과 UNet 분할 모델을 설계·학습해 피부 분석 모델 개발",
          "YOLO 모델로 모공을 검출하고 분할 모델로 모발 영역을 분리해 두께 분석 기능 구현",
          "MethodChannel 기반 네이티브 기능 제어와 Wi-Fi·셀룰러 전환 로직으로 네트워크 제약 대응",
          "SQLite 기반 고객 관리 및 분석 히스토리 기능 구현",
        ],
        media: [
          "assets/projects/Bellus/1.png",
          "assets/projects/Bellus/2.png",
          "assets/projects/Bellus/3.png",
        ],
      },
      {
        year: "2024",
        period: "2024.09 - 2025.02",
        team: "헬스클라우드(주)",
        title: "CNear Hello Check",
        description:
          "스마트폰 기반 얼굴 인식 등·하원 관리 서비스를 개발했습니다.",
        bullets: [
          "ML Kit 기반 얼굴 ROI 검출로 스마트폰 얼굴 인식 파이프라인 구성",
          "MobileFaceNet 임베딩 벡터를 추출해 서버로 전송하고, DB에 저장된 벡터값과 비교해 사용자 식별 처리",
          "세션 인증, 역할별 접근 제어, API 설계로 서비스 운영 구조 구성",
        ],
        media: ["assets/projects/CNear Hello Check/1.png", "assets/projects/CNear Hello Check/2.png"],
      },
      {
        year: "2024",
        period: "2024.09 - 2024.11",
        team: "헬스클라우드(주)",
        title: "포트홀 관리 솔루션",
        description:
          "차량에서 수집하는 포트홀 데이터를 서버에서 처리하고, 행정구역 단위로 시각화하는 대시보드를 개발했습니다.",
        bullets: [
          "포트홀 데이터 처리 서버를 개발해 저장부터 시각화까지 이어지는 데이터 흐름 구성",
          "GIS 시각화 기반 대시보드로 운영 가시성을 개선하고, 확대 수준에 따라 행정구역 단위로 데이터를 집계",
        ],
        media: ["assets/projects/포트홀 관리 솔루션/1.png", "assets/projects/포트홀 관리 솔루션/2.png"],
      },
      {
        year: "2024",
        period: "2024.04 - 2024.05",
        team: "(주)키웍스",
        title: "김 이물 검사",
        description:
          "이물 검출 모델 학습을 위한 데이터셋 구성과 검증 전략을 설계했습니다.",
        bullets: [
          "이물 유형 분포와 조명 조건을 고려한 데이터셋 설계",
          "전처리 조합별 학습·검증·테스트",
        ],
        media: ["assets/projects/김 이물 검사/1.png", "assets/projects/김 이물 검사/2.png"],
      },
      {
        year: "2023",
        period: "2023.10 - 2023.12",
        team: "헬스클라우드(주)",
        title: "생성형 AI 솔루션",
        description:
          "반려동물 이미지 생성 워크플로우와 서빙 서버를 구축해 서비스로 제공했습니다.",
        bullets: [
          "ComfyUI 워크플로우를 Spring 서버로 중계하고, 멀티 클라이언트 처리·스케줄링 기능을 구현해 서비스 흐름 구성",
          "LoRA 기반 스타일 학습으로 작가 고유 화풍 재현",
        ],
        media: [
          "assets/projects/생성형 AI 솔루션/1.jpg",
          "assets/projects/생성형 AI 솔루션/2.jpg",
          "assets/projects/생성형 AI 솔루션/3.jpg",
        ],
      },
      {
        year: "2022",
        period: "2022.09 - 2022.12",
        team: "(주)넥스트랩",
        title: "Btv UI 탐색 알고리즘 고도화",
        description:
          "분류 모델로 탐색 알고리즘을 고도화하고, UI 탐색 경로를 시각화해 오탐을 분석했습니다.",
        bullets: [
          "ResNet 분류 모델을 학습해 UI 탐색 알고리즘에 적용",
          "탐색 과정의 노드 간 데이터를 정의하고 React·D3.js로 경로를 시각화해 오탐 분석",
          "Class Activation Map(CAM)으로 화면 분류 근거를 확인하며 오분류 원인을 분석하고 모델 개선",
        ],
        media: ["assets/projects/Btv UI 탐색 경로 시각화/1.jpg", "assets/projects/Btv UI 탐색 경로 시각화/2.png"],
      },
      {
        year: "2021",
        period: "2021.08 - 2021.11",
        team: "공모전",
        title: "이 길 맞는교",
        description:
          "AR 기반 운전 경로 안내 안드로이드 앱을 출시했습니다.",
        bullets: [
          "Mapbox Vision SDK 분석·적용과 차선·신호등 인식 R&D",
          "지역XR챌린지 장려상 수상",
        ],
        media: [
          "assets/projects/이 길 맞는교/1.jpg",
          "assets/projects/이 길 맞는교/2.jpg",
        ],
      },
    ],
    personalProjects: [
      {
        year: "2025",
        sortKey: "2025-12",
        sortOrder: 3,
        period: "2025.12 - 2026.01",
        team: "사이드 프로젝트",
        title: "mediapipe_face_mesh",
        description:
          "MediaPipe Face Mesh 모델로 얼굴 랜드마크를 추출하는 Flutter 패키지를 개발했습니다.",
        bullets: [
          "FFI Plugin 구조로 패키지를 설계하고 주요 연산을 C++로 처리",
          "Android·iOS용 TFLite 바이너리를 직접 빌드하고, 필요한 C API 헤더·구현을 선별 반영해 모델 추론을 C++ 레이어에서 실행",
          "pub.dev 공개 및 iOS/Android 지원",
        ],
        link: "https://github.com/cornpip/mediapipe_face_mesh",
        linkLabel: "GitHub 보기",
        media: ["assets/projects/mediapipe_face_mesh/1.png", "assets/projects/mediapipe_face_mesh/2.png"],
      },
      {
        year: "2025",
        sortKey: "2025-08",
        sortOrder: 4,
        period: "2025.08",
        team: "사이드 프로젝트",
        title: "Mediapipe Landmark 3D Viewer",
        description:
          "랜드마크 포인트를 직관적으로 확인할 수 있는 3D 인터랙션 기반 시각화 뷰어를 개발했습니다.",
        bullets: [
          "랜드마크 번호로 위치를 찾거나 위치로 번호를 확인 가능",
          "Face Mesh 활용 시 포인트 구조를 직관적으로 확인하는 보조 도구로 활용",
        ],
        link: "https://github.com/cornpip/mediapipe_landmark_viewer",
        linkLabel: "GitHub 보기",
        media: ["assets/projects/Mediapipe Landmark 3D Viewer/1.png", "assets/projects/Mediapipe Landmark 3D Viewer/2.png"],
      },
      {
        year: "2024",
        sortKey: "2024-12",
        period: "2024.12 - 2025.07",
        team: "사이드 프로젝트",
        title: "TokenMeter",
        description:
          "OpenAI API를 활용해 로컬에서 ChatGPT처럼 사용할 수 있는 Docker 기반 시스템을 구현했습니다.",
        bullets: [
          "대화 내역을 로컬에 저장하고 히스토리별 토큰 사용량을 노출",
          "웹 링크 입력 시 페이지를 크롤링하고 BART 모델로 요약 반영",
          "SAM2 마스크 생성과 OpenAI Inpainting API를 연결한 편집 기능 구현",
        ],
        link: "https://github.com/cornpip/TokenMeter",
        linkLabel: "GitHub 보기",
        media: [
          "assets/projects/TokenMeter/1.png",
          "assets/projects/TokenMeter/2.png",
          "assets/projects/TokenMeter/3.png",
        ],
      },
      {
        year: "2022",
        sortKey: "2022-03",
        period: "2022.03 - 2022.06",
        team: "캡스톤",
        title: "운전자 폭행 감지",
        description:
          "차량 내부의 일반·폭행·결제 3가지 상황 데이터셋을 구축하고, MMAction2를 사용해 PoseC3D 모델을 학습·서빙했습니다.",
        bullets: [
          "MMAction2 프레임워크를 활용해 Faster R-CNN, HRNet, PoseC3D 순의 추론 파이프라인 구현",
          "라즈베리파이와 소켓 통신으로 연속 프레임을 수신하고, 서버에서 이미지 큐를 관리해 일정 프레임 단위 추론 처리",
          "ICT 대학생 논문경진대회 장려상 수상",
        ],
        link: "https://github.com/cornpip/Action-Recognition",
        linkLabel: "GitHub 보기",
        media: [
          "assets/projects/운전자 폭행 감지/1.png",
          "assets/projects/운전자 폭행 감지/2.png",
        ],
      },
    ],
  },
  en: {
    htmlLang: "en",
    pageTitle: "Profile | cornpip",
    metaDescription: "Portfolio page presenting Seonhyo Choi's background and projects",
    eyebrow: "AI SOFTWARE ENGINEER",
    heroTitle: "An engineer working across technology and business.",
    heroLead:
      "As a Computer Vision Engineer, I have worked end to end across data design, model development, inference pipelines, and application implementation.",
    heroDescription:
      "I am also highly interested in AI agents and continue experimenting with workflow design, sub-agent composition, and skill usage to apply them in development.",
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
    profileRole: "Computer Vision Engineer",
    aboutDescription: "",
    aboutItems: [
      ["Core Skills", "Flutter, Android, C++, Camera"],
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
        year: "2025",
        sortOrder: 1,
        period: "Oct 2025 -",
        team: "HealthCloud",
        title: "Capillaries",
        description:
          "Developed a nailfold capillary analysis app, implementing the full flow on smartphone on-device AI from optical device integration to image acquisition, preprocessing, and AI inference.",
        bullets: [
          "Handled optical device integration in the app with WebSocket-based device control and MJPEG preview/capture",
          "Connected preprocessing of captured images with a TFLite inference pipeline on-device",
          "Developed a separate FFI-based image and tensor processing package reusable across Flutter apps",
          "Converted YOLO and PyTorch-based models to TFLite and mitigated quality loss by adjusting the backbone, hyperparameters, and quantization level",
        ],
        media: [
          "assets/projects/Capillaries/1.png",
          "assets/projects/Capillaries/2.png",
        ],
      },
      {
        year: "2025",
        sortOrder: 2,
        period: "Jul 2025 - Feb 2026",
        team: "HealthCloud",
        title: "POD",
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
        year: "2025",
        sortOrder: 5,
        period: "Jan 2025 - Nov 2025",
        team: "HealthCloud",
        title: "Bellus",
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
        period: "Sep 2024 - Feb 2025",
        team: "HealthCloud",
        title: "CNear Hello Check",
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
        period: "Sep 2024 - Nov 2024",
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
        period: "Apr 2024 - May 2024",
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
        period: "Oct 2023 - Dec 2023",
        team: "HealthCloud",
        title: "Generative AI Solution",
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
        period: "Sep 2022 - Dec 2022",
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
        period: "Aug 2021 - Nov 2021",
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
        year: "2025",
        sortKey: "2025-12",
        sortOrder: 3,
        period: "Dec 2025 - Jan 2026",
        team: "Side Project",
        title: "mediapipe_face_mesh",
        description:
          "Developed a Flutter package for extracting facial landmarks with the MediaPipe Face Mesh model.",
        bullets: [
          "Designed the package as an FFI plugin and handled core computation in C++",
          "Built Android and iOS TFLite binaries directly, then selectively adapted the required C API headers and implementations to run model inference in the C++ layer",
          "Published on pub.dev with iOS and Android support",
        ],
        link: "https://github.com/cornpip/mediapipe_face_mesh",
        linkLabel: "View GitHub",
        media: ["assets/projects/mediapipe_face_mesh/1.png", "assets/projects/mediapipe_face_mesh/2.png"],
      },
      {
        year: "2025",
        sortKey: "2025-08",
        sortOrder: 4,
        period: "Aug 2025",
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
        period: "Dec 2024 - Jul 2025",
        team: "Side Project",
        title: "TokenMeter",
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
          "assets/projects/TokenMeter/3.png",
        ],
      },
      {
        year: "2022",
        sortKey: "2022-03",
        period: "Mar 2022 - Jun 2022",
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
  langToggle: document.getElementById("langToggle"),
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
let currentLanguage = localStorage.getItem("portfolio-language") || "en";
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
  profileImage.alt =
    currentLanguage === "ko" ? "최선효 프로필 사진" : "Profile photo of Seonhyo Choi";

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

const monthMap = {
  Jan: "01",
  Feb: "02",
  Mar: "03",
  Apr: "04",
  May: "05",
  Jun: "06",
  Jul: "07",
  Aug: "08",
  Sep: "09",
  Oct: "10",
  Nov: "11",
  Dec: "12",
};

const getProjectSortKey = (project) => {
  if (project.sortKey) {
    return project.sortKey;
  }

  const koreanMatch = project.period?.match(/(\d{4})\.(\d{2})/);
  if (koreanMatch) {
    return `${koreanMatch[1]}-${koreanMatch[2]}`;
  }

  const englishMatch = project.period?.match(
    /\b(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s+(\d{4})/
  );
  if (englishMatch) {
    return `${englishMatch[2]}-${monthMap[englishMatch[1]]}`;
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

      const period = document.createElement("p");
      period.className = "project-period";
      period.textContent = project.period;

      const team = document.createElement("p");
      team.className = "project-team";
      team.textContent = project.team;

      aside.append(period, team);

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
  const nextLanguage = translations[language] ? language : "en";
  const copy = translations[nextLanguage];
  const openTimelineSectionIds = getOpenTimelineSectionIds();
  currentLanguage = nextLanguage;
  localStorage.setItem("portfolio-language", nextLanguage);

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
  elements.heroDescription.textContent = copy.heroDescription;
  elements.heroDescription.hidden = !copy.heroDescription;
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

  if (elements.langToggle) {
    elements.langToggle.dataset.language = nextLanguage;
    elements.langToggle.setAttribute(
      "aria-label",
      nextLanguage === "ko" ? "Switch to English" : "한국어로 전환"
    );
  }
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

if (elements.langToggle) {
  elements.langToggle.addEventListener("click", () => {
    setLanguage(currentLanguage === "ko" ? "en" : "ko");
  });
}

setLanguage(currentLanguage);

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
