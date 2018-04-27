'use strict';
/**
* kittys pikcer = github comment link picker
* @namespace Kittys
*/
window.Kittys = {
  addClipBtn : () => {
    const currentURL =  location.href.replace(location.hash, '');
    const $commentLink = document.querySelectorAll('.timeline-comment .timeline-comment-header .timestamp');
    Array.from($commentLink).forEach($elm => {
        const commentURL = $elm.getAttribute('href');
        const generateURL = document.createTextNode(currentURL + commentURL)
        let $btn = document.createElement('p')
        let $btnChild = document.createElement('textarea')
        $btn.setAttribute('class', 'kitty_btn')
        $btnChild.appendChild(generateURL)
        $btn.appendChild($btnChild)
        $btn.onclick = () => {
          Kittys.clipping($btn,generateURL)
        }
        $elm.parentNode.insertBefore($btn, $elm.nextSibling)
        
      }
    )
  },
  clipping: ($selfNode, clipTarget) => {
    let $target = $selfNode.childNodes[0]
    $target.style.display = 'inline-block';
    $target.select()
    let clip = document.execCommand('copy')
    $target.style.display = 'none';
    return Kittys.finishTip($selfNode)
  },
  finishTip: ($selfNode) => {
    const displayHtml = '<div id="anime_tip"class="finish_tip">Comment URL<br>Clipped!!</div>'
    $selfNode.insertAdjacentHTML('beforeend', displayHtml)
    const controlNode = document.getElementById("anime_tip")
    // displayHtml.style.display = 'block';
    setTimeout( () => {
      $selfNode.removeChild(controlNode)
    }, 1350)
  }
}

window.Kittys.addClipBtn();
