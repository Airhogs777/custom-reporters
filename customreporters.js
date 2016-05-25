/*
 * Custom Reporters
 * a reskin of themonsterfromthedeep's custom reporter extension
 * to match the regular custom-block interface
 * some of this code is adapted from Pixie - https://github.com/nathan/pixie
 * and Scratchblocks - https://github.com/tjvr/scratchblocks/
 * and of course themonsterfromthedeep's custom reporter extension - https://github.com/TheMonsterFromTheDeep/scratch-extensions/tree/gh-pages/custom-reporters
*/

var customReporters = {
  inProgressShape: "reporter",
  inProgress: [],
  svg: [`<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="30">
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
      <filter id="inputBevelFilter" x0="-50%" y0="-50%" width="200%" height="200%">
        <feGaussianBlur result="blur-1" in="SourceAlpha" stdDeviation="1 1" />
        <feFlood result="flood-2" in="undefined" flood-color="#fff" flood-opacity="0.15" />
        <feOffset result="offset-3" in="blur-1" dx="-1" dy="-1" />
        <feComposite result="comp-4" operator="arithmetic" in="SourceAlpha" in2="offset-3" k2="1" k3="-1" />
        <feComposite result="comp-5" operator="in" in="flood-2" in2="comp-4" />
        <feFlood result="flood-6" in="undefined" flood-color="#000" flood-opacity="0.7" />
        <feOffset result="offset-7" in="blur-1" dx="1" dy="1" />
        <feComposite result="comp-8" operator="arithmetic" in="SourceAlpha" in2="offset-7" k2="1" k3="-1" />
        <feComposite result="comp-9" operator="in" in="flood-6" in2="comp-8" />
        <feMerge result="merge-10">
          <feMergeNode in="SourceGraphic" />
          <feMergeNode in="comp-5" />
          <feMergeNode in="comp-9" />
        </feMerge>
      </filter>
    </defs>
    <g id="blockPreviewPath">`,`</g>
  </svg>`],
  reporters: {},
};
(function(ext) {

  function setRepType(intype) {
    customReporters.inProgressShape = intype;
    if(intype == "reporter") {
      document.getElementById("repTypeRep").classList.add("checked");
      document.getElementById("repTypeBool").classList.remove("checked");
    } else {
      document.getElementById("repTypeBool").classList.add("checked");
      document.getElementById("repTypeRep").classList.remove("checked");
    }
    rebuildSVG();
  }

  function addInput(intype) {
    var varnum = customReporters.inProgress.filter(function(x) {
      return x[1].match(new RegExp(intype + "\\d+"));
    });
    varnum = varnum.length + 1;
    customReporters.inProgress.push([intype, intype + varnum]);
    rebuildSVG();
  }

  function closeDialog() {
    document.getElementById("customReportersDialog").querySelector(".dialog").style.display = "none";
  }

  function appendDialog() {
    if(!document.getElementById("customReportersDialog")) {
      var dialogHTML = `
      <link href="http://airhogs777.github.io/custom-reporters/customreporters.css" rel="stylesheet"/>
      <div id="widthTest"></div>
      <div class="dialog" style="display: none;">
        <div class="dialog-title">New Reporter</div>
        <div class="dialog-content">
          <div id="blockPreview" contenteditable="true">

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
              <button class="ui-button" id="addLabel">text</button>
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
      document.getElementById("addLabel").addEventListener("click", function() {addInput("label")});
      document.getElementById("addBoolInput").addEventListener("click", function() {addInput("boolean")});
      document.getElementById("customReportersCancel").addEventListener("click", closeDialog);
      document.getElementById("customReportersOK").addEventListener("click", createReporter);
      document.getElementById("blockPreview").addEventListener("input", function(e) {inputsEdited(e)});
    }
  }

  function rebuildSVG() {
    var g = document.getElementById("blockPreview"),
      childpaths = "",
      path,
      runningTotalX = 0;

    function arc(p1x, p1y, p2x, p2y, rx, ry) {
      var r = p2y - p1y;
      return ["L", p1x, p1y, "A", rx, ry, 0, 0, 1, p2x, p2y].join(" ");
    }

    function pointedPath(w, h) {
      var r = h / 2;
      return [
        "M", r, 0,
        "L", w - r, 0, w, r,
        "L", w, r, w - r, h,
        "L", r, h, 0, r,
        "L", 0, r, r, 0,
        "Z",
      ].join(" ");
    }
    function roundedPath(w, h) {
      var r = h / 2;
      return [
        "M", r, 0,
        arc(w - r, 0, w - r, h, r, r),
        arc(r, h, r, 0, r, r),
        "Z"
      ].join(" ");
    }

    function getTextWidth(text, intype) {
      var textpath,
        g = document.getElementById("widthTest");
      if(intype == "label") {
        textpath = `<text x="0" y="10" class="sb-label">` + text + `</text>`;
      } else {
        textpath = `<text x="0" y="10" class="sb-label sb-literal-number">` + text + `</text>`;
      }
      g.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="30">` + textpath + `</svg`;
      if(g.firstElementChild.firstElementChild.getBBox().width < 10) {
        return 10
      } else {
        return g.firstElementChild.firstElementChild.getBBox().width;
      }
    }

    function generateInput(intype, text) {
      var innerpath,
      textPadding,
      totalWidth,
      width = getTextWidth(text, intype); // calc text width here
      if(intype == "label") {
        textPadding = 4;
        totalWidth = width + (2*textPadding);
        innerpath = `<rect x="0" y="0" width="` + totalWidth + `" height="14" class="sb-label-input" />`;

        runningTotalX += totalWidth;
        return`<g transform="translate(` + (runningTotalX - totalWidth) +` 3)">`+ innerpath + `<text x="0" y="10" class="sb-label" transform="translate(` + textPadding + ` 0)">` + text + `</text></g>`;
      } else {
        if(intype == "number") {
          textPadding = 5;
          totalWidth = width + (2*textPadding);
          innerpath = `<path d="` + roundedPath(totalWidth, 14) + `" class="sb-input sb-input-number" />`;
        } else if(intype == "string") {
          textPadding = 4;
          totalWidth = width + (2*textPadding);
          innerpath = `<rect x="0" y="0" width="` + totalWidth + `" height="14" class="sb-input sb-input-string" />`;
        } else if(intype == "boolean") {
          textPadding = 7;
          totalWidth = width + (2*textPadding);
          innerpath = `<path d="` + pointedPath(totalWidth, 14) + `" class="sb-input sb-input-number" />`
        }
        runningTotalX += totalWidth;
        return`<g transform="translate(` + (runningTotalX - totalWidth) +` 3)">`+ innerpath + `<text x="0" y="10" class="sb-label sb-literal-number" transform="translate(` + textPadding + ` 0)">` + text + `</text></g>`;
      }
    }
    if(customReporters.inProgressShape == "reporter") {
      runningTotalX += 8;
    } else {
      runningTotalX += 11;
    }
    if(customReporters.inProgress.length) {
      for(i in customReporters.inProgress) {
        childpaths += generateInput(customReporters.inProgress[i][0], customReporters.inProgress[i][1]);
        if(i < customReporters.inProgress.length - 1) {
          runningTotalX += 4;
        }
      }
    } else {
      runningTotalX = 20;
    }
    if(customReporters.inProgressShape == "reporter") {
      runningTotalX += 8;
      path = `<path d="` + roundedPath(runningTotalX, 20) + `" class="sb-extension sb-bevel"/>`;
    } else {
      runningTotalX += 11;
      path = path = `<path d="` + pointedPath(runningTotalX, 21) + `" class="sb-extension sb-bevel"/>`;
    }
    g.innerHTML = customReporters.svg[0] + path + childpaths + customReporters.svg[1];
  }

  function inputsEdited(e) {
    var caret = window.getSelection().getRangeAt(0),
      offset = caret.startOffset,
      g = document.getElementById("blockPreview").querySelectorAll("text"),
      targetElem;
    for(i = 0; i < g.length; i++) {
      if(g[i] == caret.startContainer.parentNode) {
        targetElem = i;
      }
      customReporters.inProgress[i][1] = g[i].textContent;
    }
    rebuildSVG();
    h = document.getElementById("blockPreview").querySelectorAll("text")[targetElem],
    sel = window.getSelection();
    h.focus();
    var range = document.createRange();
    range.setStart(h.firstChild, offset)
    sel.removeAllRanges();
    sel.addRange(range);
    //h.setSelectionRange(caret.startOffset, caret.startOffset);
  }

  // Cleanup function when the extension is unloaded
  ext._shutdown = function() {
    document.body.removeChild(document.getElementById("customReportersDialog"));
  };

  // Status reporting code
  // Use this to report missing hardware, plugin or unsupported browser
  ext._getStatus = function() {
      appendDialog();
      return {status: 2, msg: 'Ready'};
  };

  function refreshExt() {
    ScratchExtensions.unregister('Custom Reporters');
    ScratchExtensions.register('Custom Reporters', descriptor, ext);
  }

  function addBlock(data){
      descriptor.blocks.push(data);
  }

  function createReporter() {
    closeDialog();
    var use_name = ''; //Stores the name used in things
    var title = ''; //Stores base name for use in return block
    var norm_name = ''; //Stores the name used in all but the reporter block
    var func_name = ''; //Stores the name used in the reporter - includes inputs

    var param_count = 0;
    var _params = [];
    for(var i = 0; i < customReporters.inProgress.length; i++)
    {
        if(customReporters.inProgress[i][0] == 'label') {
          norm_name += customReporters.inProgress[i][1];
          func_name += customReporters.inProgress[i][1];
          title += customReporters.inProgress[i][1]; }
        else
        {
            if(customReporters.inProgress[i][0]== 'string') { func_name += '%s'; title += ' [' + customReporters.inProgress[i][1]+ '] '; }
            if(customReporters.inProgress[i][0] == 'number') { func_name += '%n'; title += ' (' + customReporters.inProgress[i][1] + ') '; }
            if(customReporters.inProgress[i][0] == 'boolean') { func_name += '%b'; title += ' <' + customReporters.inProgress[i][1]+ '> '; }
            param_count++;
            _params[_params.length] = customReporters.inProgress[i];
        }
    }
    use_name = title.match(/[a-zA-Z0-9]+/).join("_");
    for(var i = 0; i < _params.length; i++)
    {
        _params[i] = createParam(norm_name, use_name, _params[i].text, _params[i].type);
    }

    var reporter = {
        name: norm_name,
        blockString: func_name,
        paramCount: param_count,
        params: _params,
        ready: function() {},
        callback: function() {},
        value: '',
        status: false,
        def: function()
        {
            if(this.status === true)
            {
                this.status = false;
                return true;
            }
            return false;
        },
        call: function(args)
        {
            for(var i = 0; i < this.paramCount; i++)
            {
                this.params[i].write(args[i]);
            }
            this.callback = args[this.paramCount];
            this.ready = function()
            {
                this.callback(this.value);
                this.ready = function() {};
            }
            this.status = true;
        },
        ret: function(val)
        {
            this.value = val;
            this.ready();
        },
    };
    customReporters.reporters[use_name] = reporter;

    addBlock(['h','define ' + title,'defr_' + use_name]);
    addBlock(['R',func_name,'callr_' + use_name]);
    addBlock([' ',norm_name + ': return %s','retr_' + use_name]);
    ext['defr_' + use_name] = function() { return reporter.def(); };
    ext['callr_' + use_name] = function() { reporter.call(arguments); };
    ext['retr_' + use_name] = function(val) { reporter.ret(val); };

    refreshExt();
}

  ext.showDialog = function(base, exponent) {
    document.getElementById("customReportersDialog").querySelector(".dialog").style.display = "block";
    customReporters.inProgress = [];
    customReporters.inProgressShape = "reporter";
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
