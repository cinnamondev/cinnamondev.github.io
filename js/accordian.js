let Accordian = {
    "open": (id, height) => {
        if (id === null) return false;
        let element = document.getElementById(id);
        if(element.parentElement.classList.contains("lastProject")) {
            element.parentElement.getElementsByTagName("a")[0].firstElementChild.style = "border-radius: 0 0 0 0 !important;";
        }
        element.style="max-height:" + height + ";"
        element.setAttribute("open", true)
    },
    "close": (id) => {
        if(id===null) return false;
        let element = document.getElementById(id);
        element.style="";
        element.setAttribute("open", false)
    },
    "toggle": (id, height) => {
        if (id === null) return false;
        let element = document.getElementById(id);
        if(element.parentElement.classList.contains("lastProject")) {
            element.parentElement.getElementsByTagName("a")[0].firstElementChild.style = "";
        }
        if (element.getAttribute("open") == "true") {
            Accordian.close(id);
        } else {
            Accordian.open(id,height);
        }
    }
}