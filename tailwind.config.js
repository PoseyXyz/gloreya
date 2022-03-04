module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        "brand-yellow":"#FBBE36",
        "brand-red":"#E7272D",
        "brand-light-yellow":"#FCCB5E",
        "brand-black":"#0F0F0F",
        "brand-pink":"#FFF4E2",
        "brand-gray":"#FAFAFA",
        "footer-black":"#1B1B1B",
        "news-card-gray":"#f9f9f9",
        "footer-text":"#aaa",
        "light-text":"#7a7a7a"
      },
      inset:{
        '1/30':'3.333333%'
      },
      width:{
        '216':"53.5rem",
        '192':'50rem',
        '180':'45rem',
        '128':'32rem',
        '106':'27rem',
        '80':'20rem'
      },
      fontSize:{
        '2xs':'.5rem',
        '3xl':'1.7rem'
      },
    },
    container:{
      center:true,
      padding:'1rem',
      screens:{
        lg:"1124px",
        xl:"1124px",
        "2xl":"1124px"
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
