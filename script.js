// here we are diplaying the emoji

function searchemoji(){
    let inputvalue = document.getElementById('search').value;

    displayResult(inputvalue);
}

function displayResult(searchQuery = "") {
  let filterData = emojiList.filter((e) => {

    if (e.description.indexOf(searchQuery) !== -1) {
      return true;
    }
    if (e.tags.some(elem => elem.startsWith(searchQuery))) {
      return true;
    }
    if (e.aliases.some(elem => elem.startsWith(searchQuery))) {
      return true;
    }
  });

  console.log(filterData);


  let parent = document.getElementById("result_container");

  parent.innerHTML = "";

  filterData.forEach((e) => {
    let new_row = document.createElement("tr");
    let new_emoji = document.createElement("td");
    let new_aliases = document.createElement("td");
    let new_desc = document.createElement("td");

    new_emoji.innerHTML = e.emoji;
    new_aliases.innerHTML = e.aliases;
    new_desc.innerHTML = e.description;

    new_row.appendChild(new_emoji);
    new_row.appendChild(new_aliases);
    new_row.appendChild(new_desc);

    parent.appendChild(new_row);
  });
}

document.getElementById('search').addEventListener("keyup",searchemoji);

window.onload = () => displayResult();
