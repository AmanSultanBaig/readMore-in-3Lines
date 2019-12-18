    
    function readmoreText(text, lines) {
            var div = document.createElement("div");
            div.innerHTML = text;
            const content = div.textContent || div.innerText || "";
            if (lines >= 3) {
                return content.substring(0, 170);
            } else return content.substring(0, 100);
        }
