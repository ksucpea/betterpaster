chrome.runtime.onInstalled.addListener(function () {
    chrome.storage.local.get(["fresh", "saved"], storage => {
        if (storage["fresh"] === null || storage["fresh"] !== false) {
            chrome.runtime.openOptionsPage();
            chrome.storage.local.set({
                "fresh": false,
                "current_group": "Custom",
                "open": false,
                "saved": {
                    "Custom": [],
                    "Emojis": ["😀", "😃", "😄", "😁", "😆", "😅", "😂", "🤣", "😊", "😇", "🙂", "🙃", "😉", "😌", "😍", "🥰", "😘", "😗", "😙", "😚", "😋", "😛", "😝", "😜", "🤪", "🤨", "🧐", "🤓", "😎", "🤩", "🥳", "😏", "😒", "😞", "😔", "😟", "😕", "🙁", "☹️", "😣", "😖", "😫", "😩", "🥺", "😢", "😭", "😮", "😤", "😠", "😡", "🤬", "🤯", "😳", "🥵", "🥶", "😱", "😨", "😰", "😥", "😓", "🤗", "🤔", "🤭", "🤫", "🤥", "😶", "😐", "😑", "😬", "🙄", "😯", "😦", "😧", "😮", "😲", "🥱", "😴", "🤤", "😪", "😵", "🤐", "🥴", "🤢", "🤮", "🤧", "😷", "🤒", "🤕", "🤑", "🤠", "😈", "👿", "👹", "👺", "🤡", "💩", "👻", "💀", "☠️", "👽", "👾", "🤖", "🎃", "😺", "😸", "😹", "😻", "😼", "😽", "🙀", "😿", "😾"
                    ],
                    "Math": ["≠", "∞", "π", "Σ", "√", "∫", "∀", "∃", "∄", "∅", "∆", "∇", "∈", "∉", "∏", "∣", "∤", "∥", "∦", "∧", "∨", "∩", "∪", "∴"]
                }
            })
        }
    })
});

chrome.action.onClicked.addListener(tab => {
    chrome.storage.local.get("open", storage => {
        chrome.storage.local.set({ "open": !storage["open"] });
        console.log(!storage["open"])
    });
});

chrome.runtime.setUninstallURL("https://diditupe.dev/betterpaster/goodbye");
