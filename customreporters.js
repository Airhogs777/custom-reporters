var customReporters = {
  inProgress: {},
};
(function(ext) {

  function setRepType(intype) {
    if(intype == "reporter") {
      document.getElementById("repTypeRep").classList.add("checked");
      document.getElementById("repTypeBool").classList.remove("checked");
      //also change block shape and stuff
    } else {
      document.getElementById("repTypeBool").classList.add("checked");
      document.getElementById("repTypeRep").classList.remove("checked");
      //also change block shape and stuff
    }

  }
  function addInput(intype) {

  }
  function closeDialog() {
    document.getElementById("customReportersDialog").querySelector(".dialog").style.display = "none";
  }

  function appendDialog() {
    if(!document.getElementById("customReportersDialog")) {
      var dialogHTML = `<!-- This code is adapted from Pixie - https://github.com/nathan/pixie (which also uses an MIT license) and Scratchblocks -https://github.com/tjvr/scratchblocks/ (which is in the public domain) -->
      <link href="customreporters.css" rel="stylesheet"/>
      <div class="dialog" style="display: none;">
        <div class="dialog-title">New Reporter</div>
        <div class="dialog-content">
          <div id="blockPreview">
            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="29" height="21">
              <defs>
                <filter id="bevelFilter" x0="-50%" y0="-50%" width="200%" height="200%">
                  <feGaussianBlur result="blur-1" in="SourceAlpha" stdDeviation="1 1"/>
                  <feFlood result="flood-2" in="undefined" flood-color="#fff" flood-opacity="0.15"/>
                  <feOffset result="offset-3" in="blur-1" dx="1" dy="1"/>
                  <feComposite result="comp-4" operator="arithmetic" in="SourceAlpha" in2="offset-3" k2="1" k3="-1"/>
                  <feComposite result="comp-5" operator="in" in="flood-2" in2="comp-4"/>
                  <feFlood result="flood-6" in="undefined" flood-color="#000" flood-opacity="0.7"/>
                  <feOffset result="offset-7" in="blur-1" dx="-1" dy="-1"/>
                  <feComposite result="comp-8" operator="arithmetic" in="SourceAlpha" in2="offset-7" k2="1" k3="-1"/>
                  <feComposite result="comp-9" operator="in" in="flood-6" in2="comp-8"/>
                  <feMerge result="merge-10">
                    <feMergeNode in="SourceGraphic"/>
                    <feMergeNode in="comp-5"/>
                    <feMergeNode in="comp-9"/>
                  </feMerge>
                </filter>
              </defs>
              <path d="M 10 0 L 18.46875 0 A 10 10 0 0 1 18.46875 20 L 10 20 A 10 10 0 0 1 10 0 Z" class="sb-extension sb-bevel"/>
            </svg>
          </div>
          <div class="dialog-typeChooser">
            <button class="ui-button checked" id="repTypeRep">
              <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="29" height="21">
                <defs>
                  <filter id="bevelFilter" x0="-50%" y0="-50%" width="200%" height="200%">
                    <feGaussianBlur result="blur-1" in="SourceAlpha" stdDeviation="1 1"/>
                    <feFlood result="flood-2" in="undefined" flood-color="#fff" flood-opacity="0.15"/>
                    <feOffset result="offset-3" in="blur-1" dx="1" dy="1"/>
                    <feComposite result="comp-4" operator="arithmetic" in="SourceAlpha" in2="offset-3" k2="1" k3="-1"/>
                    <feComposite result="comp-5" operator="in" in="flood-2" in2="comp-4"/>
                    <feFlood result="flood-6" in="undefined" flood-color="#000" flood-opacity="0.7"/>
                    <feOffset result="offset-7" in="blur-1" dx="-1" dy="-1"/>
                    <feComposite result="comp-8" operator="arithmetic" in="SourceAlpha" in2="offset-7" k2="1" k3="-1"/>
                    <feComposite result="comp-9" operator="in" in="flood-6" in2="comp-8"/>
                    <feMerge result="merge-10">
                      <feMergeNode in="SourceGraphic"/>
                      <feMergeNode in="comp-5"/>
                      <feMergeNode in="comp-9"/>
                    </feMerge>
                  </filter>
                </defs>
                <path d="M 10 0 L 18.46875 0 A 10 10 0 0 1 18.46875 20 L 10 20 A 10 10 0 0 1 10 0 Z" class="sb-grey sb-bevel"/>
              </svg>
            </button><button class="ui-button" id="repTypeBool">
              <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="35" height="21">
                <defs>
                  <filter id="bevelFilter" x0="-50%" y0="-50%" width="200%" height="200%">
                    <feGaussianBlur result="blur-1" in="SourceAlpha" stdDeviation="1 1"/>
                    <feFlood result="flood-2" in="undefined" flood-color="#fff" flood-opacity="0.15"/>
                    <feOffset result="offset-3" in="blur-1" dx="1" dy="1"/>
                    <feComposite result="comp-4" operator="arithmetic" in="SourceAlpha" in2="offset-3" k2="1" k3="-1"/>
                    <feComposite result="comp-5" operator="in" in="flood-2" in2="comp-4"/>
                    <feFlood result="flood-6" in="undefined" flood-color="#000" flood-opacity="0.7"/>
                    <feOffset result="offset-7" in="blur-1" dx="-1" dy="-1"/>
                    <feComposite result="comp-8" operator="arithmetic" in="SourceAlpha" in2="offset-7" k2="1" k3="-1"/>
                    <feComposite result="comp-9" operator="in" in="flood-6" in2="comp-8"/>
                    <feMerge result="merge-10">
                      <feMergeNode in="SourceGraphic"/>
                      <feMergeNode in="comp-5"/>
                      <feMergeNode in="comp-9"/>
                    </feMerge>
                  </filter>
                </defs>
                <path d="M 10.5 0 L 23.96875 0 34.46875 10.5 L 34.46875 10.5 23.96875 21 L 10.5 21 0 10.5 L 0 10.5 10.5 0 Z" class="sb-grey sb-bevel"/>
              </svg>
            </button>
          </div>
          <div class="dialog-inputButtons">
            <div>
              Add number input:
              <button class="ui-button" id="addNumberInput">
                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="29" height="21">
                  <defs>
                    <filter id="bevelFilter" x0="-50%" y0="-50%" width="200%" height="200%">
                      <feGaussianBlur result="blur-1" in="SourceAlpha" stdDeviation="1 1"/>
                      <feFlood result="flood-2" in="undefined" flood-color="#fff" flood-opacity="0.15"/>
                      <feOffset result="offset-3" in="blur-1" dx="1" dy="1"/>
                      <feComposite result="comp-4" operator="arithmetic" in="SourceAlpha" in2="offset-3" k2="1" k3="-1"/>
                      <feComposite result="comp-5" operator="in" in="flood-2" in2="comp-4"/>
                      <feFlood result="flood-6" in="undefined" flood-color="#000" flood-opacity="0.7"/>
                      <feOffset result="offset-7" in="blur-1" dx="-1" dy="-1"/>
                      <feComposite result="comp-8" operator="arithmetic" in="SourceAlpha" in2="offset-7" k2="1" k3="-1"/>
                      <feComposite result="comp-9" operator="in" in="flood-6" in2="comp-8"/>
                      <feMerge result="merge-10">
                        <feMergeNode in="SourceGraphic"/>
                        <feMergeNode in="comp-5"/>
                        <feMergeNode in="comp-9"/>
                      </feMerge>
                    </filter>
                  </defs>
                  <path d="M 10 0 L 18.46875 0 A 10 10 0 0 1 18.46875 20 L 10 20 A 10 10 0 0 1 10 0 Z" class="sb-grey sb-bevel"/>
                </svg>
              </button>
            </div>
            <div>
              Add string input:
              <button class="ui-button" id="addStringInput">
              <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="29" height="21">
                <defs>
                  <filter id="bevelFilter" x0="-50%" y0="-50%" width="200%" height="200%">
                    <feGaussianBlur result="blur-1" in="SourceAlpha" stdDeviation="1 1"/>
                    <feFlood result="flood-2" in="undefined" flood-color="#fff" flood-opacity="0.15"/>
                    <feOffset result="offset-3" in="blur-1" dx="1" dy="1"/>
                    <feComposite result="comp-4" operator="arithmetic" in="SourceAlpha" in2="offset-3" k2="1" k3="-1"/>
                    <feComposite result="comp-5" operator="in" in="flood-2" in2="comp-4"/>
                    <feFlood result="flood-6" in="undefined" flood-color="#000" flood-opacity="0.7"/>
                    <feOffset result="offset-7" in="blur-1" dx="-1" dy="-1"/>
                    <feComposite result="comp-8" operator="arithmetic" in="SourceAlpha" in2="offset-7" k2="1" k3="-1"/>
                    <feComposite result="comp-9" operator="in" in="flood-6" in2="comp-8"/>
                    <feMerge result="merge-10">
                      <feMergeNode in="SourceGraphic"/>
                      <feMergeNode in="comp-5"/>
                      <feMergeNode in="comp-9"/>
                    </feMerge>
                  </filter>
                </defs>
                <rect width="28.5" height="20" class="sb-grey sb-bevel"/>
              </svg>
              </button>
            </div>
            <div>
              Add boolean input:
              <button class="ui-button" id="addBoolInput">
                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="35" height="21">
                  <defs>
                    <filter id="bevelFilter" x0="-50%" y0="-50%" width="200%" height="200%">
                      <feGaussianBlur result="blur-1" in="SourceAlpha" stdDeviation="1 1"/>
                      <feFlood result="flood-2" in="undefined" flood-color="#fff" flood-opacity="0.15"/>
                      <feOffset result="offset-3" in="blur-1" dx="1" dy="1"/>
                      <feComposite result="comp-4" operator="arithmetic" in="SourceAlpha" in2="offset-3" k2="1" k3="-1"/>
                      <feComposite result="comp-5" operator="in" in="flood-2" in2="comp-4"/>
                      <feFlood result="flood-6" in="undefined" flood-color="#000" flood-opacity="0.7"/>
                      <feOffset result="offset-7" in="blur-1" dx="-1" dy="-1"/>
                      <feComposite result="comp-8" operator="arithmetic" in="SourceAlpha" in2="offset-7" k2="1" k3="-1"/>
                      <feComposite result="comp-9" operator="in" in="flood-6" in2="comp-8"/>
                      <feMerge result="merge-10">
                        <feMergeNode in="SourceGraphic"/>
                        <feMergeNode in="comp-5"/>
                        <feMergeNode in="comp-9"/>
                      </feMerge>
                    </filter>
                  </defs>
                  <path d="M 10.5 0 L 23.96875 0 34.46875 10.5 L 34.46875 10.5 23.96875 21 L 10.5 21 0 10.5 L 0 10.5 10.5 0 Z" class="sb-grey sb-bevel"/>
                </svg>
              </button>
            </div>
            <div>
              Add label text:
              <button class="ui-button" id="foo">text</button>
            </div>
            <input type="checkbox"> Run without screen refresh
          </div>
          <div class="dialog-buttons">
            <button class="ui-button" id="customReportersOK">OK</button>
            <button class="ui-button" id="customReportersCancel">Cancel</button>
          </div>
        </div>
      </div>`;
      var element = document.createElement("div");
      element.id = "customReportersDialog";
      element.innerHTML = dialogHTML;
      document.body.appendChild(element);
      document.getElementById("repTypeRep").addEventListener("click", function() {setRepType("reporter")});
      document.getElementById("repTypeBool").addEventListener("click", function() {setRepType("boolean")});
      document.getElementById("addStringInput").addEventListener("click", function() {addInput("string")});
      document.getElementById("addNumberInput").addEventListener("click", function() {addInput("number")});
      document.getElementById("addBoolInput").addEventListener("click", function() {addInput("boolean")});
      document.getElementById("customReportersCancel").addEventListener("click", closeDialog);
      document.getElementById("customReportersOK").addEventListener("click", closeDialog); //fix this later
    }
  }

  function rebuildSVG() {

  }

  // Cleanup function when the extension is unloaded
  ext._shutdown = function() {};

  // Status reporting code
  // Use this to report missing hardware, plugin or unsupported browser
  ext._getStatus = function() {
      appendDialog();
      return {status: 2, msg: 'Ready'};
  };

  ext.showDialog = function(base, exponent) {
    document.getElementById("customReportersDialog").querySelector(".dialog").style.display = "block";
    customReporters.inProgress = [["",""]];
    rebuildSVG();
    return 0;
  };

  // Block and block menu descriptions
  var descriptor = {
      blocks: [
        // Block type, block name, function name, param1 default value, param2 default value
        ['getParam', 'Make a Reporter', 'showDialog']
      ]
  };

  // Register the extension
  ScratchExtensions.register('Custom Reporters', descriptor, ext);
})({});
