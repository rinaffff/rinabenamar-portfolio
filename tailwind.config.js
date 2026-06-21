/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html",
  ],
  theme: {
    extend: {
      colors: {
        cream:      '#FAF6F0', // off-white / cream base
        creamdeep:  '#F2EBE1', // section background contrast
        sakura:     '#F3DCE2', // pale pink
        sakuradeep: '#C98A9C', // deeper rose accent
        matcha:     '#8B9B6E', // matcha green
        matchadeep: '#4F5A3C', // deep matcha for dark sections / text
        gold:       '#C6A664', // luxury gold accent
        ink:        '#2A2823', // primary text colour
        inksoft:    '#6B6760', // secondary / muted text
      },
      fontFamily: {
        // "Whimsy meets Classy" — elegant serif for headings/body
        display: ['Playfair Display', 'Georgia', 'serif'],
        body:    ['Lora', 'Georgia', 'serif'],
        // clean sans for secondary info, labels, data
        sans:    ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
