function submitData(e){
  e.preventDefault();

  let name = document.getElementById("name").value;
  let roll = document.getElementById("roll").value;
  let section = document.getElementById("section").value;

  alert(
    "Data Recorded!\n\nName: " + name +
    "\nRoll No: " + roll +
    "\nSection: " + section
  );
}

// drag setup
document.querySelectorAll(".chemical").forEach(item=>{
  item.ondragstart = e=>{
    e.dataTransfer.setData("text", item.id);
  };
});

function allowDrop(e){
  e.preventDefault();
}

function drop(e){
  e.preventDefault();

  let id = e.dataTransfer.getData("text");
  let name = document.getElementById(id).innerText;
  let box = e.currentTarget.querySelector(".result");

  box.innerHTML += name + "<br>";

  let content = box.innerText;

  if(content.includes("HCl") && content.includes("NaOH"))
    box.innerHTML += "➡ Neutralization Reaction<br>";

  if(content.includes("H₂O₂") && content.includes("EtOH"))
    box.innerHTML += "➡ Oxidation Reaction<br>";

  if(content.includes("NaCl") && content.includes("H₂O"))
    box.innerHTML += "➡ Salt Dissolved<br>";
}

function resetExperiment(){
  document.querySelectorAll(".result").forEach(b=>b.innerHTML="");
  alert("Experiment Reset Successfully!");
}
