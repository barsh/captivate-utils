# captivate-utils
A few JavaScript snippets for Adobe Captivate HTML5 projects.

## Disabling the Playbar's Slider
Captivate makes it easy enough to hide the slider, but sometimes you just want
to disable it.  A snippet is included to disable the playbar slider.  Since
users can pickup from where they dropped out, it's best to add the snippet to
every slide in your project.

## Marking all slides as viewed
If your movie has logic that jumps one or more slides based on some condition and the completion criteria is '100% of slides viewed', you could be asking for trouble, because users who skip slides won't be able to meet the completion criteria.  So here's a one-liner for marking all slides as viewed (you could add this as an 'on-enter' action for the last slide).

## Reporting all interactions to browser console
The name assigned to interactions matter if your creating an assessment and you care to view and understand your users strengths and weaknesses. Here's a simple way to generate a report of all the interactions in your project.

Preview your project in HTML5 browser, press F12 to open your browser's dev tools, switch to the console tab and paste the snippet.  Note the snippet uses a console table which is only available in Chrome.


## Tutorial

#### Disabling the Playbar's Slider

1. Open your project in Captivate, choose `Project` / `Advanced Actions`
1. For the Action Name, `DisablePlaybarSlider`
1. To add a new action, type `Ctrl-n`
2. From the dropdown, choose `Execute Javascript`
1. Click the `Script Window` button and paste the contents of [disable-playbar-slider.js](disable-playbar-slider.js)
1. Click the `Select Window` and choose `Current`
1. To add a new action, type `Ctrl-n`
1. From the dropdown, choose `Continue`
1. Select every slide in your project and set the 'On Enter' action to 'Execute Advanced Actions', then choose `DisablePlaybarSlider`.

#### Mark All Slides as Viewed

After completing the initial setup as described in the prior tutorial, you can set the last slide in your project to mark all slides as viewed:

1. Open your project in Captivate, choose `Project` / `Advanced Actions`
1. For the Action Name, type `MarkAllSlidesAsViewed`
1. To add a new action, type `Ctrl-n`
2. From the dropdown, choose `Execute Javascript`
1. Click the `Script Window` button and paste the contents of [mark-all-slides-as-viewed.js](mark-all-slides-as-viewed.js)
1. Click the `Select Window` and choose `Current`
1. To add a new action, type `Ctrl-n`
1. From the dropdown, choose `Continue`
1. On the last slide of your project, set the 'On Enter' action to 'Execute Advanced Actions', then choose `MarkAllSlidesAsViewed`.

## Requirements
- Captivate v8 or v9
- Your project will need to be published for HTML5 playback not Flash.
