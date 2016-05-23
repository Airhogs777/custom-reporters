(function(ext) {

  function cancelDialog() {
    document.getElementById("customReportersDialog").querySelector(".dialog").style.display = "none";
  }

  function appendDialog() {
    if(!document.getElementById("customReportersDialog")) {
      var dialogHTML = `<!-- This code is adapted from Pixie - https://github.com/nathan/pixie (which also uses an MIT license) and Scratchblocks -https://github.com/tjvr/scratchblocks/ (which is in the public domain) -->
      <style>
        .dialog {
            position: fixed;
            width: 380px;
            left: calc( 50% - ( 380px / 2 ) );
            top: calc( 50% - 100px );
            z-index: 2;
            color: #5c5d5f;
            text-align: center;
            font-family: sans-serif;
            border-radius: 7px 7px 0 0;
            box-shadow: 3px 3px 8px rgba(51, 51, 51, .75);
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            -o-user-select: none;
            user-select: none;
        }
        .dialog-title {
            display: block;
            border: 1px solid #b0b0b0;
            border-radius: 7px 7px 0 0;
            background: linear-gradient(#e0e0e0, #d0d0d0);
            font-size: 14px;
            height: 30px;
            line-height: 30px;
            padding: 0 14px;
            cursor: default;
        }
        .dialog-content {
            background: #fff;
            padding: 14px;
            border: 1px solid #b0b0b0;
            border-top: 0;
            font-size: 14px;
        }
        .dialog-inputButtons {
          margin: 0 75px;
        }
        .dialog-inputButtons div {
          text-align: left;
          color: #555;
          position: relative;
          height: 32px;
          box-sizing: border-box;
          padding-top: 4px;
        }
        .dialog-inputButtons div .ui-button {
          position: absolute;
          right: 0;
          top: 0;
          padding: 0 0 1px !important;
          width: 52px;
        }
        .dialog-inputButtons div .ui-button svg {
          transform: scale(.8);
        }
        .dialog-buttons {
            margin-top: 14px;
        }
        .ui-button {
            margin: 0;
            border: 1px solid #d0d1d2;
            border-radius: 6px;
            padding: 0 7px 1px;
            height: 26px;
            background: linear-gradient(#ffffff, #e6e8e8);
            color: #5c5d5f;
            font: inherit;
            font-size: 12px;
            white-space: nowrap;
            text-align: center;
        }
        .dialog-buttons .ui-button {
            min-width: 51px;
            margin: 0 5px;
        }
        /* scratchblocks stuff */
        .sb-label{
            font-family:Lucida Grande,Verdana,Arial,DejaVu Sans,sans-serif;
            font-weight:700;
            fill:#fff;
            font-size:10px;
            word-spacing:+1px
        }
        .sb-custom{fill:#632d99}
        .sb-custom-arg{fill:#5947b1}
        .sb-extension{fill:#4b4a60}
        .sb-grey{fill:#969696}
        .sb-bevel{filter:url(#bevelFilter)}
        .sb-input{filter:url(#inputBevelFilter)}
        .sb-input-number,.sb-input-number-dropdown,.sb-input-string{fill:#fff}
        .sb-literal-number,.sb-literal-number-dropdown,.sb-literal-string{font-weight:400;
            font-size:9px;
            word-spacing:0}
        .sb-literal-number,.sb-literal-string{fill:#000}
      </style>
      <div class="dialog" style="display: none;">
        <div class="dialog-title">New Reporter</div>
        <div class="dialog-content">
          <div class="dialog-inputButtons">
            <div>
              Add number input:
              <button class="ui-button" id="foo">
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
              <button class="ui-button" id="foo">
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
              <button class="ui-button" id="foo">
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
      document.getElementById("customReportersCancel").addEventListener("click", cancelDialog);
      document.getElementById("customReportersOK").addEventListener("click", cancelDialog); //fix this later
    }
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
