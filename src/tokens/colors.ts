export const colors = {
  bgApp: '#F7F1E8',
  bgCard: '#FFFDF8',
  borderCard: '#E7D9C8',
  borderInput: '#D9B36C',

  sidebarBg: '#1F2522',
  sidebarText: '#F7F1E8',
  sidebarActiveBg: '#FFF3E2',
  sidebarActiveText: '#2B2924',
  sidebarMuted: '#CFC1B2',
  sidebarDivider: '#554D43',

  textPrimary: '#2B2924',
  textSecondary: '#5C554B',
  textMuted: '#6E665C',
  textAccent: '#8A8074',

  green: '#677F5A',
  greenBg: '#EEF3E7',
  greenBorder: '#B9CDAE',

  amber: '#A77734',
  amberText: '#C97849',
  amberBg: '#F6E7CC',
  amberBorder: '#D9B36C',

  red: '#B85E4C',
  redBg: '#F6E5DF',
  redBorder: '#D7A496',

  accent: '#C95632',
  accentBadge: '#D89B35',

  stripeUpcoming: '#D89B35',
  stripeOverdue: '#B85E4C',
  stripeResolved: '#A89F91',
} as const;

export type ColorKey = keyof typeof colors;
