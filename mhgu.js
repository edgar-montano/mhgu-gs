var tables = document.getElementsByTagName("tr");

const getMinMax = (element) => {
    return element.split('～ ');
}

const getSlotCount = (element) => {
    return element.split("◯").length-1;
}

const getBodyType = (element) => {
    if(element.includes("Helm") || element.includes("Cap") || element.includes("Headpiece") || element.includes("Hat") || element.includes("Wig"))
        return "Head";
    else if(element.includes("Mail") || element.includes("Vest") || element.includes("Coat") || element.includes("Plate") || element.includes("Suit"))
        return "Torso";
    else if(element.includes("Braces") || element.includes("Vambraces") || element.includes("Gauntlets") || element.includes("Gloves"))
        return "Arms"
    else if(element.includes("Faulds") || element.includes("Tassets") || element.includes("Coil") || element.includes("Shinguards") || element.includes("Leggings"))
        return "Waist";
    else if(element.includes("Greaves") || element.includes("Boots"))
        return "Legs"
    else{
        return "";
    }
}

const getRes = (element) => {
    return element ? element : '';
}

const getSkills = (elements) => {
    let newSkillList = [];
    let tempValue;
    let tempSkill;
    let tempString;
    for(let i =0; i< elements.length; i++){
        //console.log(elements)
        tempString = elements[i].trim().split(":");
        tempSkill = String(tempString[0]);
        tempValue = tempString[1];
        if(tempSkill)
         newSkillList.push([
            tempSkill , tempValue
         ])
    }
    return newSkillList;
}


for(let i = 0; i < tables.length; i++){
        if(tables[i].children[2].innerText !== ""){
            armor.push(
            {
                "name": tables[i].children[2].innerText,
                "body": getBodyType(tables[i].children[2].innerText),
                "defense": tables[i].children[3].innerText,
                "defense_min": getMinMax(tables[i].children[3].innerText)[0],
                "defense_max": getMinMax(tables[i].children[3].innerText)[1],
                "fire_res": tables[i].children[4].innerText,
                "water_res": tables[i].children[5].innerText,
                "thunder_res": tables[i].children[6].innerText,
                "ice_res": tables[i].children[7].innerText,
                "dragon_res": tables[i].children[8].innerText,
                "slots": getSlotCount(tables[i].children[9].innerText),
                //"skills": tables[i].children[10].innerText //make to array of objects
                "skills": getSkills(tables[i].children[10].children[0].textContent.split("\n"))
            })
        }
}



console.log(armor);
