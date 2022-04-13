function runSearch() {
  document.getElementById("genSearch").style.display = "block";
}

function contactFormOn() {
  document.getElementById("contact").style.display = "block";
}

function contactFormOff() {
  document.getElementById("contact").style.display = "none";
}

function submitContactForm() {
  document.getElementById("contact").submit();
  alert(
    "The form has been submitted! A WerRV representative will get in touch with you soon."
  );
}

function detailedViewOn() {
  document.getElementById("detail").style.display = "block";
}

function detailedViewOff() {
  document.getElementById("detail").style.display = "none";
}

function detailedViewContactForm() {
  document.getElementById("detail").submit();
  
}


function clearSearch() {
  document.getElementById("upc-barcode").value = "";
  document.getElementById("manu-brand").value = "";
  document.getElementById("manu-partnum").value = "";
  document.getElementById("prod-name").value = "";
  document.getElementById("prod-type").value = "";
}

function generalSearch() {
  let input = document.getElementById("gen-search").value;
  input = input.toLowerCase();
  let url = "http://www.google.com/search?q=" + input;
  window.open(url, "_blank");
}

function advancedSearch() {
  let UPCBarCodeInput = document.getElementById("upc-barcode").value;
  let ManuInput = document.getElementById("manu-brand").value;
  let ManuPartNumInput = document.getElementById("manu-partnum").value;
  let ProdNameInput = document.getElementById("prod-name").value;
  let ProdTypeInput = document.getElementById("prod-type").value;
  let input = (
    UPCBarCodeInput +
    ManuInput +
    ManuPartNumInput +
    ProdNameInput +
    ProdTypeInput
  ).toLowerCase();
  let url = "http://www.google.com/search?q=" + input;
  window.open(url, "_blank");
}
