const t={startBtn:document.querySelector("[data-start]"),stopBtn:document.querySelector("[data-stop]"),bodyElem:document.querySelector("body")};t.startBtn.addEventListener("click",(function(){t.startBtn.setAttribute("disabled",!0),t.stopBtn.removeAttribute("disabled"),timerID=setInterval((()=>{t.bodyElem.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`,console.log("меняем цвет фона")}),1e3)})),t.stopBtn.addEventListener("click",(function(){clearInterval(timerID),t.stopBtn.setAttribute("disabled",!0),t.startBtn.removeAttribute("disabled"),console.log(t.startBtn),console.log("останавливаем таймер")}));
//# sourceMappingURL=01-color-switcher.22087440.js.map
