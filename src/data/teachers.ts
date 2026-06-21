export interface Teacher {
  id: string
  name: string
  role: string
  bio: string
  specialties: string[]
  courses: string[]
  socials: {
    linkedin?: string
    github?: string
  }
}

export const teachers: Teacher[] = [
  {
    id: "marco-esposito",
    name: "Marco Esposito",
    role: "Lead Instructor — Python & Backend",
    bio: "8 anni di esperienza come Senior Backend Engineer in startup italiane e aziende europee. Ex-tech lead in una fintech milanese. Appassionato di sistemi distribuiti e open source.",
    specialties: ["Python", "FastAPI", "Architetture cloud", "DevOps"],
    courses: ["python-zero-to-hero", "python-professional"],
    socials: {
      linkedin: "#",
      github: "#",
    },
  },
  {
    id: "sara-romano",
    name: "Sara Romano",
    role: "Lead Instructor — AI & Machine Learning",
    bio: "Ricercatrice ML con dottorato all'Università Federico II di Napoli. Ha lavorato 5 anni in un laboratorio di AI applicata. Specializzata in NLP e sistemi multi-agente.",
    specialties: ["Machine Learning", "LLM", "NLP", "MLOps"],
    courses: ["ai-zero-to-hero", "ai-professional"],
    socials: {
      linkedin: "#",
      github: "#",
    },
  },
  {
    id: "luca-ferrara",
    name: "Luca Ferrara",
    role: "Lead Instructor — Robotica & Embedded",
    bio: "Ingegnere robotico con 10 anni di esperienza in automazione industriale. Ha progettato sistemi robotici per manifattura e logistica. Contributor attivo di ROS2.",
    specialties: ["ROS2", "Controllo robotico", "Embedded Linux", "Computer Vision"],
    courses: ["robotica-zero-to-hero", "robotica-professional"],
    socials: {
      linkedin: "#",
      github: "#",
    },
  },
  {
    id: "giulia-conti",
    name: "Giulia Conti",
    role: "Career Coach & Community Manager",
    bio: "Ex-recruiter tecnico in aziende Fortune 500. Aiuta gli studenti Mentor a posizionarsi nel mercato del lavoro tech con strategie concrete e networking mirato.",
    specialties: ["Career coaching", "LinkedIn optimization", "Tech recruitment", "Soft skills"],
    courses: [],
    socials: {
      linkedin: "#",
    },
  },
]
