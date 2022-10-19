window.addEventListener("load",(tab)=>{
    const getTitle=document.querySelector("#title");
    getcurrenttab().then((data)=>(getTitle.innerHTML=data));

    });
    
    async function getcurrenttab(){
        let queryOptions={active:true, lastFocusedWindow:true};
        let [tab]=await chrome.tabs.query(queryOptions);
        return tab.title;
    }
