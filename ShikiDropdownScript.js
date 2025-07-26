// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      2025-07-22
// @description  try to take over the world!
// @author       You
// @match        https://shikimori.one/aomame336/list/anime?mylist=completed&order=rate_score
// @icon         https://www.google.com/s2/favicons?sz=64&domain=shikimori.one
// @grant        none
// ==/UserScript==


function createSelectElement() {
    let options = [ ' ', '10', '9', '8', '7', '6', '5', '4', '3', '2', '1' ]
    const mainElement = document.createElement("select")


    for(let i = 0; i<options.length; i++) {
        let optionsElement = document.createElement("option")
        let currentOption = options[i]
        optionsElement.append(currentOption)
        mainElement.appendChild(optionsElement)
    }

    return mainElement
}

function setExistingRating(currentTitle) {
    let titleElement =document.querySelector(currentTitle)
    let titleRating = document.querySelector(currentTitle + "> span").innerHTML


    titleElement.replaceWith(createSelectElement())
    let newSelectElement = document.querySelector(currentTitle + " > select")
    let currentDropdownRating = newSelectElement.value

    console.log('first' + titleRating + currentDropdownRating)

    if (titleRating != ' ')
    {
        newSelectElement.value = titleRating
    }

     console.log('second' + titleRating + currentDropdownRating)
}

function repeatToEverything() {
    let allTitles = document.querySelectorAll("tbody.entries > tr.user_rate.selectable.editable")
    for(let i = 0; i<allTitles.length; i++) {
        let call = setExistingRating(allTitles[i])
        console.log(call)
    }

    // now i need to find a way to get a precise selector so i can iterate through each title

}


function main() {
    console.log('initialized')
    repeatToEverything()
}

main()
