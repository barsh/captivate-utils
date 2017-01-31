// mark all slides as viewed

cp.movie.playbackController.m_slideNames.forEach(
  function (slideName) {
    cp.model.data[slideName].v = true
  }
)
