// hide the slider thumbnail
var thumbEl=document.getElementsByClassName('playbarSliderThumb')[0]
thumbEl.style.display='none'

// disable drag and click slider navigation
if (!cp.PB.mainMovie._jumpToFrame) {
  cp.PB.mainMovie._jumpToFrame =     cp.PB.mainMovie.jumpToFrame
  cp.PB.mainMovie.jumpToFrame = function(a) {
    var stack = new Error().stack
    var callerIsNotPlaybar =
      stack.indexOf('HTMLCanvasElement.moveSlider') == -1
      && stack.indexOf('PlayBarSlider.moveSlider') == -1
    if (callerIsNotPlaybar)
      cp.PB.mainMovie._jumpToFrame.call(cp.PB.mainMovie, a)
// avoid the "pause" when the user clicks on the playbar
cp.PB.mainMovie.play(cp.ReasonForPlay.PLAYBAR_ACTION)

  }
}
