/**
 * Camp Programs Data
 *
 * Single source of truth for all camp program content.
 * Used by CampGrid (home preview) and Programs page (full detail).
 * Do not duplicate this data in component files.
 */

export interface CampProgram {
  id: string
  name: string
  slug: string
  ages: string
  badgeLabel: string
  badgeColor: string    // bg color for badge
  badgeTextColor: string
  shortDescription: string   // 2 lines, used in home grid
  fullDescription: string    // 3–4 sentences, used in Programs page
  activities: string[]
  icon: string               // emoji used as placeholder icon
}

export const CAMP_PROGRAMS: CampProgram[] = [
  {
    id: 'creative-arts',
    name: 'Creative Arts Camp',
    slug: 'creative-arts',
    ages: 'Ages 6–15',
    badgeLabel: 'Arts',
    badgeColor: '#D97B4A',
    badgeTextColor: '#FFFFFF',
    shortDescription: 'Drawing, painting, sculpture, photography, and digital art — with a mini gallery show every week.',
    fullDescription: 'Campers express themselves through a rotating mix of drawing, painting, sculpture, photography, and digital design. Each week centers on a creative theme and ends with a mini gallery showcase. No prior experience needed — just curiosity and a willingness to make something.',
    activities: ['Drawing & watercolor painting', 'Sculpture & 3D art', 'Photography basics', 'Digital art & design', 'Tie-dye & textile art', 'Friendship bracelet making'],
    icon: '🎨',
  },
  {
    id: 'cooking',
    name: 'Cooking Camp',
    slug: 'cooking',
    ages: 'Ages 6–15',
    badgeLabel: 'Cooking',
    badgeColor: '#E8A87C',
    badgeTextColor: '#3D2B1F',
    shortDescription: 'Real kitchen skills, healthy recipes, and world cuisines — in a safe, encouraging kitchen environment.',
    fullDescription: 'Kids learn to cook healthy, delicious meals from scratch in a fully equipped, age-appropriate kitchen setting. Each week explores a different culinary theme — from world cuisines to baking science. Campers develop real knife skills, nutrition awareness, and the confidence to cook independently.',
    activities: ['Age-appropriate knife skills', 'Baking & pastry', 'World cuisine exploration', 'Smoothies & healthy snacks', 'Kitchen chemistry & food science', 'Nutrition basics'],
    icon: '👨‍🍳',
  },
  {
    id: 'stem',
    name: 'STEM Camp',
    slug: 'stem',
    ages: 'Ages 7–15',
    badgeLabel: 'STEM',
    badgeColor: '#4CAF76',
    badgeTextColor: '#FFFFFF',
    shortDescription: 'Hands-on robotics, coding, chemistry, and engineering challenges that make kids forget it\'s learning.',
    fullDescription: 'Our STEM camp combines science, technology, engineering, art, and math into hands-on projects that feel more like play than class. Campers build robots, write code, run chemistry experiments, and design structures — developing real problem-solving skills along the way.',
    activities: ['Robotics & mechanical engineering', 'Beginner coding & programming', 'Chemistry experiments', '3D design & CAD basics', 'Bridge & tower building challenges', 'Science fair project development'],
    icon: '🔬',
  },
  {
    id: 'sports',
    name: 'Sports Camp',
    slug: 'sports',
    ages: 'Ages 5–15',
    badgeLabel: 'Sports',
    badgeColor: '#F5A623',
    badgeTextColor: '#3D2B1F',
    shortDescription: 'Mix and match sports every week — baseball, soccer, basketball, tennis, and more. No single-sport commitment.',
    fullDescription: 'For kids who love to move and compete. Sports Camp lets campers try different sports each week rather than locking in one discipline — perfect for the well-rounded athlete or the kid who just wants to run around with friends. Coaching is instruction-forward but always fun.',
    activities: ['Baseball & softball', 'Soccer', 'Basketball', 'Flag football', 'Tennis', 'Team relay games & swimming'],
    icon: '⚾',
  },
  {
    id: 'nacventures',
    name: 'NACventures Camp',
    slug: 'nacventures',
    ages: 'Ages 8–15',
    badgeLabel: 'Adventure',
    badgeColor: '#1B3A2D',
    badgeTextColor: '#FFFFFF',
    shortDescription: 'Weekly day trips to local parks, farms, and nature reserves. Real outdoor adventure, not just playground time.',
    fullDescription: 'NACventures is for explorers. Every Thursday, NACventures groups leave campus for a curated day trip — local parks, working farms, nature reserves, or challenge courses. Back at camp, the week is filled with outdoor skills, team challenges, and environmental education.',
    activities: ['Guided nature hikes', 'Local farm & park day trips', 'Nature identification & ecology', 'Team orienteering challenges', 'Environmental education', 'Outdoor cooking & fire safety'],
    icon: '🏕️',
  },
  {
    id: 'camp-nacer',
    name: 'Camp NACer (Variety)',
    slug: 'camp-nacer',
    ages: 'Ages 6–15',
    badgeLabel: 'Variety',
    badgeColor: '#7C6AF7',
    badgeTextColor: '#FFFFFF',
    shortDescription: 'Can\'t pick just one? Camp NACer rotates through all program areas weekly — the full Camp NAC experience.',
    fullDescription: 'Camp NACer is the variety option — the best choice for kids who want to try everything. Each week, campers rotate through arts, cooking, STEM, sports, and outdoor activities on a counselor-curated schedule. The social center of camp, NACer groups tend to be tight-knit and high-energy.',
    activities: ['Weekly rotation through all program areas', 'Arts & creative projects', 'Kitchen sessions', 'STEM and science activities', 'Sports & athletics', 'Outdoor exploration'],
    icon: '🌟',
  },
  {
    id: 'teen-camps',
    name: 'Teen Camps',
    slug: 'teen-camps',
    ages: 'Ages 13–15',
    badgeLabel: 'Teen',
    badgeColor: '#5B4FD4',
    badgeTextColor: '#FFFFFF',
    shortDescription: 'Programming that respects their age. Teens choose their own path each week, with leadership tracks built in.',
    fullDescription: 'Teen Camps are designed for campers who are ready for more independence and responsibility. Rather than a fixed schedule, teens select from a curated weekly menu of activities and projects. Leadership workshops, community service, and CIT (Counselor in Training) tracks are woven throughout.',
    activities: ['Self-selected weekly activity menu', 'Leadership workshops', 'Community service projects', 'Creative & entrepreneurship projects', 'Counselor In Training (CIT) track', 'Social events & team challenges'],
    icon: '🎯',
  },
  {
    id: 'early-learners',
    name: 'NAC Early Learners',
    slug: 'early-learners',
    ages: 'Ages 3–5',
    badgeLabel: 'Early Learners',
    badgeColor: '#F2A7C3',
    badgeTextColor: '#3D2B1F',
    shortDescription: 'A nurturing full-day or half-day program for the youngest campers, focused on play, creativity, and social skills.',
    fullDescription: 'NAC Early Learners offers a safe, structured, and joyful first camp experience for children ages 3–5. The program blends sensory play, creative exploration, music, and outdoor time in a low-ratio environment with experienced early childhood counselors. Both full-day and half-day options are available.',
    activities: ['Sensory & tactile play stations', 'Storytime & language development', 'Arts & crafts (age appropriate)', 'Outdoor playground & nature walks', 'Music & movement sessions', 'Swimming readiness (splash pad)'],
    icon: '🌈',
  },
]

// For home page — show first 6 programs
export const HOME_PREVIEW_PROGRAMS = CAMP_PROGRAMS.slice(0, 6)

// Preferred start weeks for form dropdown — Summer 2026 (Mon–Fri sessions).
// `start` is the week's Monday; the enroll form hides weeks already ended.
export interface StartWeek {
  label: string
  start: string // ISO date of the week's Monday
}

export const START_WEEKS: StartWeek[] = [
  { label: 'Week 1 — June 22 to June 26', start: '2026-06-22' },
  { label: 'Week 2 — June 29 to July 3', start: '2026-06-29' },
  { label: 'Week 3 — July 6 to July 10', start: '2026-07-06' },
  { label: 'Week 4 — July 13 to July 17', start: '2026-07-13' },
  { label: 'Week 5 — July 20 to July 24', start: '2026-07-20' },
  { label: 'Week 6 — July 27 to July 31', start: '2026-07-27' },
  { label: 'Week 7 — August 3 to August 7', start: '2026-08-03' },
  { label: 'Week 8 — August 10 to August 14', start: '2026-08-10' },
  { label: 'Week 9 — August 17 to August 21', start: '2026-08-17' },
]

// Heard about us options for form dropdown
export const HEARD_ABOUT_OPTIONS = [
  'Facebook or Instagram Ad',
  'Google Search',
  'Friend or Family Referral',
  'Returning Family',
  'School or Teacher',
  'Local Community Board',
  'Other',
]

// Testimonials
export const TESTIMONIALS = [
  {
    id: 1,
    quote: "We've sent our daughter to Camp NAC for three summers in a row. She counts down the days from January. The flexibility to pick your own weeks is a lifesaver for working parents.",
    name: 'Sarah M.',
    meta: 'Mom of Lily, age 9',
    initials: 'SM',
  },
  {
    id: 2,
    quote: "My son is not an easy kid to engage, but the STEM camp had him building robots on day one. He came home talking nonstop. That is a win.",
    name: 'David K.',
    meta: 'Dad of Noah, age 11',
    initials: 'DK',
  },
  {
    id: 3,
    quote: "The Early Learners program gave my shy 4-year-old her first real social environment outside of daycare. The counselors are incredible. She cried when camp ended.",
    name: 'Priya T.',
    meta: 'Mom of Anya, age 4',
    initials: 'PT',
  },
]
