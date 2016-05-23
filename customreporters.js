var dialogHTML = `<!-- This code is adapted from Pixie - https://github.com/nathan/pixie (which also uses an MIT license) -->
<div class="dialog" style="transform: translate(562px, 313px);">
  <style>
    .dialog {
        position: fixed;
        left: 0;
        top: 0;
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
  <div class="dialog-title">New Block</div>
  <div class="dialog-content">
    <div class="dialog-buttons">
      <button class="ui-button">OK</button>
      <button class="ui-button">Cancel</button>
    </div>
  </div>
</div>`
document.body.innerHTML += dialogHTML;
