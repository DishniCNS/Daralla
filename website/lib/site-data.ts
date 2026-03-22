export const services = [
  {
    tag: "01",
    title: "Веб-разработка",
    description:
      "Кастомные сайты и digital-платформы на Next.js с высокой скоростью, гибкой структурой контента и логикой, заточенной под запуск и рост.",
    points: [
      "Сайты брендов и лендинги",
      "Headless-решения для маркетинга",
      "Быстрая и адаптивная реализация",
    ],
  },
  {
    tag: "02",
    title: "3D-визуализация",
    description:
      "Пространственный сторителлинг, продуктовые рендеры и атмосферные визуалы, которые делают сложные идеи понятными и премиальными.",
    points: [
      "Визуализация продуктов",
      "Архитектурные и концепт-сцены",
      "3D-ассеты для кампаний и launch-видео",
    ],
  },
  {
    tag: "03",
    title: "Motion design",
    description:
      "Motion-системы и фирменная анимация, которые делают подачу продукта выразительнее и добавляют цифровому опыту кинематографичность.",
    points: [
      "Трейлеры для запуска и анимация логотипа",
      "Motion-направление для интерфейсов",
      "Системы контента для соцсетей и кампаний",
    ],
  },
  {
    tag: "04",
    title: "Разработка игр",
    description:
      "Интерактивные среды, веб-игры и real-time experiences, созданные для вовлечения и сильной подачи идеи.",
    points: [
      "Интерактивные веб-опыты",
      "Играбельные прототипы для кампаний",
      "Разработка концептов для immersive-миров",
    ],
  },
] as const;

export const portfolioItems = [
  {
    slug: "nova-grid",
    name: "Nova Grid",
    category: "Веб-разработка",
    year: "2025",
    summary:
      "Сайт для запуска продукта AI-инфраструктурной компании с глубоким scroll-сторителлингом и анимированной подачей данных.",
    description:
      "Nova Grid превращает сложный технический продукт в кинематографичный пользовательский опыт. Сайт сочетает модульную editorial-структуру, анимированные метрики и глубокие scroll-переходы, чтобы инфраструктура ощущалась осязаемой и премиальной.",
    clientScenario:
      "Стартап в сфере AI-инфраструктуры нуждался в launch-ready сайте перед крупным анонсом инвестиций и серией продуктовых демонстраций.",
    visualConcept:
      "Атмосферная интерфейсная система на основе data grid, светящихся акцентов и motion-секций, создающих ощущение цифрового командного центра.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Motion design"],
    deliverables: ["Стратегия", "Дизайн", "Next.js"],
    images: [
      {
        src: "/portfolio/nova-grid-01.svg",
        alt: "Общий вид интерфейса Nova Grid",
      },
      {
        src: "/portfolio/nova-grid-02.svg",
        alt: "Композиция editorial-страницы Nova Grid",
      },
    ],
  },
  {
    slug: "vanta-habitat",
    name: "Vanta Habitat",
    category: "3D-визуализация",
    year: "2025",
    summary:
      "Контрастные пространственные рендеры для бренда жилой концепции будущего, сочетающие технический реализм и editorial-композицию.",
    description:
      "Vanta Habitat — серия world-building визуализаций для концепции жилой среды будущего. Проект сочетает реалистичные материалы и кинематографичную композицию, формируя премиальный образ будущего лайфстайла.",
    clientScenario:
      "Команде девелоперской концепции были нужны investor-grade визуализации до этапа физического прототипирования и согласований.",
    visualConcept:
      "Темные архитектурные силуэты, отражающие поверхности и световые колодцы, создающие одновременно ощущение роскоши и загадочности.",
    technologies: ["Blender", "Octane Render", "Look development", "Compositing"],
    deliverables: ["3D", "Lookdev", "Кампания"],
    images: [
      {
        src: "/portfolio/vanta-habitat-01.svg",
        alt: "Главный архитектурный рендер Vanta Habitat",
      },
      {
        src: "/portfolio/vanta-habitat-02.svg",
        alt: "Доска пространственной композиции Vanta Habitat",
      },
    ],
  },
  {
    slug: "pulse-zero",
    name: "Pulse Zero",
    category: "Motion design",
    year: "2024",
    summary:
      "Система фирменной айдентики и motion-подачи для запуска fintech-продукта: teaser-loop, интерфейсные переходы и ключевые визуалы.",
    description:
      "Pulse Zero задает motion-язык для launch-видео, keynote-визуалов и social-роликов. Система делает все движущиеся материалы визуально связанными и готовыми к кампании.",
    clientScenario:
      "Fintech-стартап готовил набор материалов к запуску: keynote, платная реклама, onboarding и контент для соцсетей.",
    visualConcept:
      "Линии-сигналы, кинетические полосы и сдержанный неоновый свет, которые передают скорость, уверенность и финансовую точность.",
    technologies: ["After Effects", "Cinema 4D", "Figma", "Brand motion"],
    deliverables: ["Motion", "Айдентика", "Запуск"],
    images: [
      {
        src: "/portfolio/pulse-zero-01.svg",
        alt: "Ключевой кадр motion-айдентики Pulse Zero",
      },
      {
        src: "/portfolio/pulse-zero-02.svg",
        alt: "Ритмика анимации кампании Pulse Zero",
      },
    ],
  },
  {
    slug: "echo-sector",
    name: "Echo Sector",
    category: "Разработка игр",
    year: "2024",
    summary:
      "Браузерный sci-fi micro experience, который превратил вселенную кампании в играбельный teaser-мир.",
    description:
      "Echo Sector — играбельный тизерный мир, созданный для того, чтобы расширить кампанию за пределы статического контента. Проект объединяет исследование, world-building и интерактив в web-first запуске.",
    clientScenario:
      "Медиа-бренду нужен был интерактивный reveal-ассет, который удержит интерес между анонсом и полноценным релизом.",
    visualConcept:
      "Заброшенные станции, HUD-слои и атмосферные сканирующие эффекты, собранные в компактный и выразительный micro-experience.",
    technologies: ["Three.js", "WebGL", "Gameplay prototyping", "UI design"],
    deliverables: ["Геймплей", "UI", "WebGL"],
    images: [
      {
        src: "/portfolio/nova-grid-02.svg",
        alt: "Кадр исследования интерфейса Echo Sector",
      },
      {
        src: "/portfolio/pulse-zero-01.svg",
        alt: "Атмосферный тизерный кадр мира Echo Sector",
      },
    ],
  },
  {
    slug: "astra-frame",
    name: "Astra Frame",
    category: "Веб-разработка",
    year: "2024",
    summary:
      "Модульная портфолио-система для студии hardware-дизайна с immersive-переходами и editorial-блоками контента.",
    description:
      "Astra Frame дает продуктовой студии модульный способ публиковать запуски, истории и визуальный процесс. Система задумывалась как immersive-опыт без потери editorial-ясности.",
    clientScenario:
      "Hardware-студии был нужен гибкий сайт, который одной системой поддерживает запуски, кейсы и командный storytelling.",
    visualConcept:
      "Крупная типографика, кинематографичная дистанция между блоками и модульные рамки контента, создающие ощущение галерейной навигации.",
    technologies: ["Next.js", "Headless CMS", "Tailwind CSS", "Responsive systems"],
    deliverables: ["CMS", "UX", "Frontend"],
    images: [
      {
        src: "/portfolio/nova-grid-01.svg",
        alt: "Композиция главной страницы Astra Frame",
      },
      {
        src: "/portfolio/vanta-habitat-02.svg",
        alt: "Макеты контентной системы Astra Frame",
      },
    ],
  },
  {
    slug: "luma-core",
    name: "Luma Core",
    category: "3D-визуализация",
    year: "2023",
    summary:
      "Hero-визуалы продукта и cutaway-сцены, созданные для кампании раскрытия нового потребительского устройства.",
    description:
      "Luma Core превращает технический продукт в премиальный визуальный язык кампании через hero-кадры, exploded view и световые close-up рендеры для launch-маркетинга.",
    clientScenario:
      "Команде потребительского устройства были нужны сильные визуалы до того, как стала возможна реальная предметная съемка.",
    visualConcept:
      "Точно выставленный свет, парящие cutaway-компоненты и чистые контрастные фоны, подчеркивающие инженерную детализацию.",
    technologies: ["Cinema 4D", "Redshift", "Photoshop", "3D compositing"],
    deliverables: ["CGI", "Рендеринг", "Композитинг"],
    images: [
      {
        src: "/portfolio/vanta-habitat-01.svg",
        alt: "Композиция главного рендера Luma Core",
      },
      {
        src: "/portfolio/pulse-zero-02.svg",
        alt: "Cutaway-визуальная система Luma Core",
      },
    ],
  },
] as const;
