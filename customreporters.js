(function(ext) {

  function cancelDialog() {
    document.getElementById("customReportersDialog").querySelector(".dialog").style.display = "none";
  }

  function appendDialog() {
    if(!document.getElementById("customReportersDialog")) {
      var dialogHTML = `<!-- This code is adapted from Pixie - https://github.com/nathan/pixie (which also uses an MIT license) -->
      <style>
        .dialog {
            position: fixed;
            left: calc( 50% - 100px );
            top: calc( 50% - 100px );
            z-index: 2;
            color: #5c5d5f;
            text-align: center;
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
        }
        .dialog .ui-button {
            min-width: 51px;
            margin: 0 5px;
        }
      </style>
      <div class="dialog" style="display: none;">
        <div class="dialog-title">New Block</div>
        <div class="dialog-content">
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
      element.getElementById("customReportersCancel").addEventListener("click", cancelDialog);
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
  ScratchExtensions.register('Sample extension', descriptor, ext);
})({});
