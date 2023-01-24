module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [
      {
        light: {

          "primary": "#176F6B",

          "secondary": "#fca5a5",

          "accent": "#fecaca",

          "neutral": "#3D4451",

          "base-100": "#FFFFFF",

          "info": "#3ABFF8",

          "success": "#36D399",

          "warning": "#FBBD23",

          "error": "#F87272",
        },
      },
      {
        dark: {

          "primary": "#570DF8",
          
          "secondary": "#F000B8",
                   
          "accent": "#f472b6",
                   
          "neutral": "#3D4451",
                   
          "base-100": "#1F2937",
                   
          "info": "#3ABFF8",
                   
          "success": "#36D399",
                   
          "warning": "#FBBD23",
                   
          "error": "#F87272",
         
        },
      },
     { 
      extend:{
        fontFamily:{
          adelia :["ADELIA","cursive"],
          lobster:["Lobster","cursive"],
        },
      },
    },
      
    ],
    // extend:{
    //   fontFamily:{
    //     adelia :["ADELIA","cursive"],
    //     lobster:["Lobster","cursive"],
    //   },
    // },
  },
  plugins: [require("daisyui")],
}
