// printInteractions

(function() {
  'use strict';
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
}());
