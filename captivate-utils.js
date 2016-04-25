cp.utils = {
	printInteractions: function() {
		var interactions = []
		Object.keys(cp.model.data).forEach(
			function (key) { 
				var element = cp.model.data[key]; 
				if (element.iid) {
					interactions.push({slideName: element.sn, elementId: element.gn, interactionId: element.iid})
				} 
			}
		)
		console.table(interactions)
	}, 
	markAllSlidesAsViewed: function() {
		cp.movie.playbackController.m_slideNames.forEach(
			function (slideName) {
				cp.model.data[slideName].v = true
			}
		)		
	},
	disablePlaybarSlider: function() {
		document.getElementsByClassName('playbarSliderThumb')[0].style.display='none'
		if (!cp.utils._jumpToFrame) cp.utils._jumpToFrame = cp.playbar.mainMovie.jumpToFrame
		cp.playbar.mainMovie.jumpToFrame = function(a) {
			var callerIsNotPlaybar = new Error().stack.indexOf('PlayBarSlider.moveSlider') == -1
			if (callerIsNotPlaybar) cp.utils._jumpToFrame.call(cp.playbar.mainMovie, a)
		}
	},
	enablePlaybarSlider: function() {
		document.getElementsByClassName('playbarSliderThumb')[0].style.display=''
		if (cp.utils._jumpToFrame) cp.playbar.mainMovie.jumpToFrame = cp.utils._jumpToFrame
	},
  _jumpToFrame: null
}
