Components.utils.import("resource:///modules/CustomizableUI.jsm");
var {Services} = Components.utils.import("resource://gre/modules/Services.jsm", {});
var sss = Components.classes["@mozilla.org/content/style-sheet-service;1"].getService(Components.interfaces.nsIStyleSheetService);

var at_label = "Download Status";

var ActivityThrobber = {
 init: function() {
	  
  try {

	document.addEventListener("TabAttrModified", _ActivityThrobber, false);
	document.addEventListener('TabSelect', _ActivityThrobber, false);
	document.addEventListener('TabOpen', _ActivityThrobber, false);
	document.addEventListener('TabClose', _ActivityThrobber, false);
	document.addEventListener('load', _ActivityThrobber, false);

	// add or remove 'busy' tab from activity item
	function _ActivityThrobber() {
	
	  if(gBrowser.selectedTab.hasAttribute('busy')) {
		document.querySelector('#download_status').setAttribute('busy','true');
	  } else document.querySelector('#download_status').removeAttribute('busy');
	
	}

	// create a default toolbar button
	CustomizableUI.createWidget({
		id: "download_status", // button id
		defaultArea: CustomizableUI.AREA_MENUBAR,
		removable: false,
		label: at_label, // button title
		onCreated: function(button) {
		  return button;
		}
				
	});
  } catch (e) { Components.utils.reportError(e); }

 }

};

document.addEventListener("DOMContentLoaded", ActivityThrobber.init(), false);