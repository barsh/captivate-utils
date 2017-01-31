// enable playbar slider

document.getElementsByClassName('playbarSliderThumb')[0].style.display=''
if (cp.playbar.mainMovie._jumpToFrame) {
  cp.playbar.mainMovie.jumpToFrame = cp.playbar.mainMovie._jumpToFrame
  delete cp.playbar.mainMovie._jumpToFrame
}
