export interface Testimonial {
  id: string
  name: string
  role: string
  company: string
  course: string
  text: string
  outcome: string
  location: string
}

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Antonio Vitale",
    role: "Backend Developer",
    company: "Startup fintech — Napoli",
    course: "Python Zero to Hero",
    text: "Prima di Mentor non avevo mai scritto una riga di codice. Sei mesi dopo stavo già lavorando. Il metodo è reale: si costruisce, non si guardano slide. I mentori rispondono davvero, anche fuori dagli orari.",
    outcome: "Assunto a 3 mesi dal completamento del corso",
    location: "Salerno, CA",
  },
  {
    id: "2",
    name: "Chiara De Luca",
    role: "ML Engineer",
    company: "Scale-up AI — Milano (remote)",
    course: "AI Professional",
    text: "Avevo già basi di ML ma non riuscivo a passare da notebook a produzione. Il corso Professional mi ha dato esattamente quello che mancava: architetture reali, MLOps, e revisione del codice da qualcuno che sa davvero cosa fa.",
    outcome: "Promossa da junior a mid-level in 4 mesi",
    location: "Bari, BA",
  },
  {
    id: "3",
    name: "Davide Russo",
    role: "Robotics Developer",
    company: "Azienda automazione — Taranto",
    course: "Robotica Zero to Hero",
    text: "Il laboratorio fisico fa tutta la differenza. Non è teoria su un PC — stai smontando e rimontando hardware reale, integrando sensori, vedendo i robot muoversi. Ho trovato lavoro a Taranto, senza trasferirmi al Nord.",
    outcome: "Primo lavoro tech nel Sud Italia",
    location: "Taranto, TA",
  },
  {
    id: "4",
    name: "Federica Marino",
    role: "Python Developer Freelance",
    company: "Clienti in tutta Europa",
    course: "Python Zero to Hero",
    text: "Avevo 34 anni quando ho iniziato, venivo da un percorso completamente diverso. Mentor mi ha dato gli strumenti tecnici e la fiducia per fare il salto. Oggi faturo più di prima lavorando da casa.",
    outcome: "Riqualificazione professionale completa in 8 mesi",
    location: "Reggio Calabria, RC",
  },
  {
    id: "5",
    name: "Simone Esposito",
    role: "AI Developer",
    company: "Agenzia AI — Roma (remote)",
    course: "AI Zero to Hero",
    text: "Il modulo sugli agenti AI e RAG è stata una svolta. In 3 settimane ho imparato più che in 6 mesi di tutorial YouTube. La differenza è il progetto reale con feedback umano, non autocomplete.",
    outcome: "Primo contratto AI a distanza",
    location: "Caserta, CE",
  },
  {
    id: "6",
    name: "Valentina Ciro",
    role: "Team Lead Robotica",
    company: "PMI manifatturiera — Bari",
    course: "Robotica Professional",
    text: "Il corso Professional mi ha permesso di portare competenze ROS2 reali in azienda. Abbiamo automatizzato una linea di produzione intera. Il ROI per l'azienda è stato immediato.",
    outcome: "Guidato progetto da 200K€ di automazione",
    location: "Bari, BA",
  },
]
