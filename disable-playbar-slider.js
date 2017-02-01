// disable playbar slider

document.getElementsByClassName('playbarSliderThumb')[0].style.display='none'
if (!cp.playbar.mainMovie._jumpToFrame) {
  cp.playbar.mainMovie._jumpToFrame = cp.playbar.mainMovie.jumpToFrame
  cp.playbar.mainMovie.jumpToFrame = function(a) {
    var stack = new Error().stack || ''
    var callerIsNotPlaybar =
      stack.indexOf('HTMLCanvasElement.moveSlider') == -1
      && stack.indexOf('PlayBarSlider.moveSlider') == -1
    if (callerIsNotPlaybar) cp.playbar.mainMovie._jumpToFrame.call(cp.playbar.mainMovie, a)
  }
}
