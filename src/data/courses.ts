export type CourseLevel = "zero-to-hero" | "professional"

export interface Module {
  title: string
  topics: string[]
  duration: string
}

export interface Course {
  slug: string
  title: string
  subtitle: string
  description: string
  level: CourseLevel
  category: "python" | "ai" | "robotica"
  duration: string
  schedule: string
  price: number
  priceNote?: string
  prerequisites: string[]
  technologies: string[]
  projects: string[]
  outcomes: string[]
  modules: Module[]
  badge: string
  color: "violet" | "teal" | "green"
}

export const courses: Course[] = [
  {
    slug: "python-zero-to-hero",
    title: "Python",
    subtitle: "Zero to Hero",
    description:
      "Parti da zero e arrivi a costruire applicazioni reali in Python. Impari la sintassi, la programmazione orientata agli oggetti, lo sviluppo web con FastAPI e l'analisi dati con Pandas.",
    level: "zero-to-hero",
    category: "python",
    duration: "12 settimane",
    schedule: "Weekend intensivi + 2 sere settimanali online",
    price: 1290,
    priceNote: "Rateale disponibile",
    prerequisites: ["Nessun prerequisito", "PC o Mac con connessione internet"],
    technologies: ["Python 3.12", "FastAPI", "Pandas", "SQLite", "Git", "Docker"],
    projects: [
      "Bot Telegram personale",
      "API REST con autenticazione",
      "Dashboard dati con visualizzazioni",
    ],
    outcomes: [
      "Sviluppatore Python junior",
      "Data analyst entry-level",
      "Freelancer Python",
    ],
    modules: [
      {
        title: "Fondamenta Python",
        topics: ["Variabili e tipi", "Controllo di flusso", "Funzioni", "OOP", "File I/O"],
        duration: "3 settimane",
      },
      {
        title: "Python Avanzato",
        topics: ["Decoratori", "Generatori", "Context manager", "Testing", "Packaging"],
        duration: "3 settimane",
      },
      {
        title: "Web con FastAPI",
        topics: ["REST API", "Auth JWT", "Database", "Async", "Deploy"],
        duration: "3 settimane",
      },
      {
        title: "Data & Automation",
        topics: ["Pandas", "NumPy", "Scraping", "Automazione", "Visualizzazioni"],
        duration: "3 settimane",
      },
    ],
    badge: "PY",
    color: "teal",
  },
  {
    slug: "python-professional",
    title: "Python",
    subtitle: "Professional",
    description:
      "Per chi conosce già Python. Deep-dive su architetture, performance, ML engineering, microservizi e produzione. Progetti complessi con code review reale da senior developer.",
    level: "professional",
    category: "python",
    duration: "8 settimane",
    schedule: "Weekend intensivi + mentorship 1:1 settimanale",
    price: 1690,
    prerequisites: [
      "Python intermedio (1+ anno di esperienza)",
      "Conoscenza basi OOP",
    ],
    technologies: ["Python 3.12", "FastAPI", "SQLAlchemy", "Redis", "Kafka", "AWS/GCP", "Docker", "Kubernetes"],
    projects: [
      "Microservizio in produzione su cloud",
      "Pipeline ML end-to-end",
      "Sistema distribuito ad alta disponibilità",
    ],
    outcomes: [
      "Python Senior Developer",
      "Backend Engineer",
      "ML Engineer",
    ],
    modules: [
      {
        title: "Architecture & Patterns",
        topics: ["Clean Architecture", "Domain-Driven Design", "CQRS", "Event Sourcing"],
        duration: "2 settimane",
      },
      {
        title: "Performance & Scalabilità",
        topics: ["Profiling", "Async avanzato", "Caching", "Message queues"],
        duration: "2 settimane",
      },
      {
        title: "ML Engineering",
        topics: ["Feature engineering", "Model serving", "MLflow", "Pipeline CI/CD"],
        duration: "2 settimane",
      },
      {
        title: "Cloud & DevOps",
        topics: ["AWS/GCP", "Kubernetes", "Monitoring", "Security"],
        duration: "2 settimane",
      },
    ],
    badge: "PY+",
    color: "violet",
  },
  {
    slug: "ai-zero-to-hero",
    title: "Intelligenza Artificiale",
    subtitle: "Zero to Hero",
    description:
      "Da zero all'AI. Impari le fondamenta del machine learning, le reti neurali, l'uso pratico di LLM e la costruzione di applicazioni AI reali. Nessuna matematica avanzata richiesta.",
    level: "zero-to-hero",
    category: "ai",
    duration: "14 settimane",
    schedule: "Weekend intensivi + 2 sere settimanali online",
    price: 1490,
    priceNote: "Rateale disponibile",
    prerequisites: [
      "Basi di Python (o corso Python Zero to Hero)",
      "Algebra lineare elementare",
    ],
    technologies: ["Python", "scikit-learn", "TensorFlow/Keras", "OpenAI API", "LangChain", "Hugging Face", "Streamlit"],
    projects: [
      "Classificatore immagini custom",
      "Chatbot RAG con documenti aziendali",
      "App AI completa con interfaccia utente",
    ],
    outcomes: [
      "AI Developer",
      "ML Engineer entry-level",
      "Prompt Engineer",
    ],
    modules: [
      {
        title: "Basi del Machine Learning",
        topics: ["Regressione", "Classificazione", "Clustering", "Valutazione modelli", "Feature engineering"],
        duration: "3 settimane",
      },
      {
        title: "Deep Learning",
        topics: ["Reti neurali", "CNN", "RNN", "Transfer learning", "Fine-tuning"],
        duration: "4 settimane",
      },
      {
        title: "LLM & Generative AI",
        topics: ["Prompt engineering", "RAG", "Agenti AI", "Function calling", "Vector DB"],
        duration: "4 settimane",
      },
      {
        title: "Deploy & Produzione",
        topics: ["Model serving", "API AI", "Monitoring", "Costi e ottimizzazione"],
        duration: "3 settimane",
      },
    ],
    badge: "AI",
    color: "violet",
  },
  {
    slug: "ai-professional",
    title: "Intelligenza Artificiale",
    subtitle: "Professional",
    description:
      "Per chi ha già basi ML/DL. Costruisci sistemi AI di livello enterprise: architetture multi-agente, fine-tuning di LLM, MLOps, AI safety e casi d'uso industriali reali.",
    level: "professional",
    category: "ai",
    duration: "10 settimane",
    schedule: "Weekend intensivi + mentorship 1:1 bisettimanale",
    price: 1990,
    prerequisites: [
      "Machine learning intermedio",
      "Python avanzato",
      "Esperienza con almeno un framework DL",
    ],
    technologies: ["PyTorch", "Transformers", "LangGraph", "MLflow", "Kubernetes", "AWS SageMaker", "vLLM"],
    projects: [
      "Sistema multi-agente aziendale",
      "Fine-tuning LLM su dataset proprietario",
      "Pipeline MLOps completa in produzione",
    ],
    outcomes: [
      "Senior ML Engineer",
      "AI Architect",
      "Lead AI Developer",
    ],
    modules: [
      {
        title: "Advanced Deep Learning",
        topics: ["Architetture Transformer", "Vision models", "Multimodal AI", "Reinforcement Learning"],
        duration: "3 settimane",
      },
      {
        title: "LLM Engineering",
        topics: ["Fine-tuning (LoRA/QLoRA)", "Alignment (RLHF)", "Model evaluation", "Safety"],
        duration: "3 settimane",
      },
      {
        title: "Sistemi Multi-Agente",
        topics: ["LangGraph", "AutoGen", "Tool use", "Orchestrazione", "Memoria"],
        duration: "2 settimane",
      },
      {
        title: "MLOps Enterprise",
        topics: ["CI/CD ML", "Model registry", "Monitoring drift", "Costi GPU", "Compliance"],
        duration: "2 settimane",
      },
    ],
    badge: "AI+",
    color: "violet",
  },
  {
    slug: "robotica-zero-to-hero",
    title: "Robotica",
    subtitle: "Zero to Hero",
    description:
      "Costruisci i tuoi primi robot. Da Arduino ai sistemi robotici intelligenti. Impari elettronica, programmazione embedded, sensori, attuatori e introduzione ai robot autonomi.",
    level: "zero-to-hero",
    category: "robotica",
    duration: "14 settimane",
    schedule: "Weekend intensivi in laboratorio fisico + sessioni online",
    price: 1590,
    priceNote: "Kit hardware incluso",
    prerequisites: [
      "Nessun prerequisito tecnico",
      "Curiosità per l'elettronica",
    ],
    technologies: ["Arduino", "Raspberry Pi", "Python", "ROS2", "C++", "OpenCV", "Sensori IoT"],
    projects: [
      "Robot segugi-linea autonomo",
      "Braccio robotico controllato via app",
      "Sistema di visione artificiale per riconoscimento oggetti",
    ],
    outcomes: [
      "Robotics Developer",
      "IoT Engineer",
      "Embedded Systems Developer",
    ],
    modules: [
      {
        title: "Elettronica & Arduino",
        topics: ["Componenti base", "Circuiti", "Programmazione C++", "Sensori", "Attuatori"],
        duration: "3 settimane",
      },
      {
        title: "Raspberry Pi & Linux",
        topics: ["Linux embedded", "Python su RPi", "GPIO", "Networking", "Camera"],
        duration: "3 settimane",
      },
      {
        title: "Visione Artificiale",
        topics: ["OpenCV", "Rilevamento oggetti", "Tracking", "SLAM intro", "Camera calibration"],
        duration: "4 settimane",
      },
      {
        title: "ROS2 & Sistemi Autonomi",
        topics: ["ROS2 intro", "Nodi e topics", "Nav stack", "Simulazione Gazebo", "Deploy su robot reale"],
        duration: "4 settimane",
      },
    ],
    badge: "RB",
    color: "teal",
  },
  {
    slug: "robotica-professional",
    title: "Robotica",
    subtitle: "Professional",
    description:
      "Per chi ha già basi robotiche o embedded. Deep-dive su ROS2 avanzato, AI su edge, sistemi di controllo, robot collaborativi e integrazione con sistemi industriali.",
    level: "professional",
    category: "robotica",
    duration: "10 settimane",
    schedule: "Weekend intensivi in laboratorio + mentorship 1:1",
    price: 1890,
    prerequisites: [
      "Esperienza con Arduino/RPi",
      "Basi di Python o C++",
      "Fondamenta di robotica",
    ],
    technologies: ["ROS2", "C++17", "PyTorch Edge", "CUDA", "URDF", "MoveIt2", "Isaac Sim"],
    projects: [
      "Sistema robotico collaborativo per automazione industriale",
      "Robot con AI edge per ispezione qualità",
      "Gemello digitale in simulazione Isaac Sim",
    ],
    outcomes: [
      "Robotics Engineer",
      "Automation Engineer",
      "Embedded AI Developer",
    ],
    modules: [
      {
        title: "ROS2 Avanzato",
        topics: ["Lifecycle nodes", "Action servers", "Composable nodes", "DDS tuning", "Real-time"],
        duration: "3 settimane",
      },
      {
        title: "Controllo & Cinematica",
        topics: ["Cinematica diretta/inversa", "Controllo PID avanzato", "MoveIt2", "Traiettorie"],
        duration: "2 settimane",
      },
      {
        title: "AI su Edge",
        topics: ["TensorRT", "ONNX", "Edge TPU", "Inferenza real-time", "Ottimizzazione modelli"],
        duration: "3 settimane",
      },
      {
        title: "Sistemi Industriali",
        topics: ["OPC-UA", "Fieldbus", "Safety robotica", "Digital twin", "Certificazioni"],
        duration: "2 settimane",
      },
    ],
    badge: "RB+",
    color: "green",
  },
]

export function getCourseBySlug(slug: string) {
  return courses.find((c) => c.slug === slug)
}

export function getCoursesByCategory(category: Course["category"]) {
  return courses.filter((c) => c.category === category)
}
