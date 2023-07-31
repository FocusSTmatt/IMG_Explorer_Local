const themeDark = localStorage.getItem("theme", "dark")
const themeLight = localStorage.getItem("theme", "dark")
const getTheme = () => {
    const bodyEl = document.getElementById("body")
    const htmlEl = document.getElementById("html")
   
    if(themeLight){
        // document.getElementById("body").classList.remove("dark")
        // document.getElementById("body").classList.remove("dark")
        document.getElementById("body").classList.add("light")
        // document.getElementById("html").classList.remove("dark")
        // document.getElementById("html").classList.add("light")
      } else if(themeDark) {
        // document.getElementById("body").classList.remove("light")
        // document.getElementById("body").classList.remove("light")
        document.getElementById("body").classList.add("dark")
        // document.getElementById("html").classList.remove("light")
        // document.getElementById("html").classList.add("dark")
      }
    }

getTheme()