import ShadowStrike from '../assets/shadow-strike.jpg'
import LostHorizons from '../assets/lost-horizons.jpg'
import GoalLegends from '../assets/goal-legends.jpg'
import EmpireTactics from '../assets/empire-tactics.jpg'

export const categories = [
  { id: 1, nombre: 'Acción', icono: '⚔️' },
  { id: 2, nombre: 'Aventura', icono: '🗺️' },
  { id: 3, nombre: 'Deportes', icono: '⚽' },
  { id: 4, nombre: 'Estrategia', icono: '♟️' },
]

export const games = [
  {
    id: 1,
    nombre: 'Shadow Strike',
    genero: 'Acción',
    descripcion: 'Combates rápidos en una ciudad futurista llena de peligros.',
    imagen: ShadowStrike,
  },
  {
    id: 2,
    nombre: 'Lost Horizons',
    genero: 'Aventura',
    descripcion: 'Explora islas misteriosas y resuelve antiguos acertijos.',
    imagen: LostHorizons,
  },
  {
    id: 3,
    nombre: 'Goal Legends',
    genero: 'Deportes',
    descripcion: 'Arma tu equipo y compite en torneos internacionales.',
    imagen: GoalLegends,
  },
  {
    id: 4,
    nombre: 'Empire Tactics',
    genero: 'Estrategia',
    descripcion: 'Construye tu imperio y vence con inteligencia.',
    imagen: EmpireTactics,
  },
]

export const news = [
  { id: 1, tipo: 'Lanzamiento', titulo: 'Shadow Strike 2 llega en diciembre', texto: 'Nuevos mapas, modo cooperativo y gráficos mejorados.' },
  { id: 2, tipo: 'Noticia', titulo: 'Gran torneo de estrategia online', texto: 'Inscríbete y compite por premios exclusivos.' },
  { id: 3, tipo: 'Recomendación', titulo: 'Top 5 aventuras para este mes', texto: 'Selección del equipo de PixelNova para no perderte.' },
]