const tabList = document.querySelector("[role='tablist']");
const tabs = document.querySelectorAll("[role='tab']");

let tabFocus = 0;

tabList.addEventListener("keydown", changeTabFocus);

tabs.forEach((tab) => {
     tab.addEventListener("click", changeTabPanel)
})


function changeTabFocus(e) {
     const keydownLeft = 37;
     const keydownRight = 39;
     
     if(e.keyCode == keydownLeft || e.keyCode == keydownRight) {
          tabs[tabFocus].setAttribute("tabindex", -1);
          
          if(e.keyCode == keydownRight) {
               tabFocus++;
          
               if(tabFocus >= tabs.length) {
               tabFocus = 0;
               }
          }else if(e.keyCode == keydownLeft) {
               tabFocus--;
          
               if(tabFocus < 0) {
               tabFocus = tabs.length - 1
               }
          }
          
          tabs[tabFocus].setAttribute("tabindex", 0);
          tabs[tabFocus].focus()
     }
     
}

function changeTabPanel(e) {
     const targetTab = e.target;
     const targetPanel = targetTab.getAttribute("aria-controls");

     const targetPic = targetTab.getAttribute("data-img")

     const targetContainer = targetTab.parentNode;
     const mainContainer = targetContainer.parentNode;

     targetContainer
          .querySelector("[aria-selected='true']")
          .setAttribute("aria-selected", "false")

     targetTab
          .setAttribute("aria-selected", "true")


     // mainContainer.querySelectorAll("[role='tabpanel']").forEach((tab) => {
     //      tab.setAttribute("hidden", "hidden")
     // });

     hideContent(mainContainer, "[role='tabpanel']")
     showContent(mainContainer, `#${targetPanel}`)


     // mainContainer.querySelectorAll("picture").forEach((pic) => {
     //      pic.setAttribute("hidden", "hidden")
     // });

     hideContent(mainContainer, "picture")
     showContent(mainContainer, `#${targetPic}`)
}

function hideContent(parent, content) {
     parent.querySelectorAll(content).forEach((item) => {
          item.setAttribute("hidden", "hidden")
     });
}

function showContent(parent, content) {
     parent.querySelector(content).removeAttribute("hidden");
}