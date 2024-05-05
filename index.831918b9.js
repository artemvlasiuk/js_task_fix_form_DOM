document.querySelectorAll("input").forEach(function(e){var l=document.createElement("label");l.className="field-label",l.htmlFor=e.id;var a=e.name.replace(/([A-Z])/g," $1"),t=a.charAt(0).toUpperCase()+a.slice(1);l.textContent=t,e.parentNode.appendChild(l),e.placeholder=t});
//# sourceMappingURL=index.831918b9.js.map
