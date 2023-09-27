import React, { useState, useEffect} from 'react'

const useThemeSwitcher = (): [string, React.Dispatch<React.SetStateAction<string>>] => {

    const preferDarkQuery = "(prefers-color-scheme: dark)"
    const [mode, setMode] = useState("")

     // Call from local Storage (RESOURCE: https://stackoverflow.com/a/74004647/19954514)
    
    // Original code (didn't work well)
    useEffect(() => {
        const mediaQuery = window.matchMedia(preferDarkQuery)
        const userPref = window.localStorage.getItem("theme");

        const handleChange = () => {
            if(userPref) {
                let check = userPref === "dark" ? "dark" : "light";
                setMode(check)
            }else{
                let check = mediaQuery.matches ? "dark" : "light";
                setMode(check)
            }
        }

        handleChange()
        mediaQuery.addEventListener("change", handleChange)
        return () => mediaQuery.removeEventListener("change", handleChange)
    }, [])

    useEffect(() => {
      if(mode==="dark"){
        window.localStorage.setItem("theme","dark")
        document.documentElement.classList.add("dark")
      }
      if (mode==="light"){
        window.localStorage.setItem("theme","light")
        document.documentElement.classList.remove("dark")
      }
    }, [mode])

  return [mode, setMode]
}

export default useThemeSwitcher