/*

Copyright 2008-2015 Clipperz Srl

This file is part of Clipperz, the online password manager.
For further information about its features and functionalities please
refer to http://www.clipperz.com.

* Clipperz is free software: you can redistribute it and/or modify it
  under the terms of the GNU Affero General Public License as published
  by the Free Software Foundation, either version 3 of the License, or 
  (at your option) any later version.

* Clipperz is distributed in the hope that it will be useful, but 
  WITHOUT ANY WARRANTY; without even the implied warranty of 
  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
  See the GNU Affero General Public License for more details.

* You should have received a copy of the GNU Affero General Public
  License along with Clipperz. If not, see http://www.gnu.org/licenses/.

*/

Clipperz.Base.module('Clipperz.PM.UI.Components.Pages');

Clipperz.PM.UI.Components.Pages.CardDetailPageClass = React.createClass({
	propTypes: {
		'allTags':	React.PropTypes.array,
	},

/*
	viewComponentProps: function () {
		var	result;
		
		result = this.props['selectedCard'];
		if (result) {
			result['style'] = this.props['style'];
		}
		
		return result;
	},
	
	render: function () {
		var	result;
		if (this.props['mode'] == 'edit') {
			result = Clipperz.PM.UI.Components.Cards.Edit(this.viewComponentProps());
		} else {
			result = Clipperz.PM.UI.Components.Cards.View(this.viewComponentProps());
		}
		
		return result;
	},
*/
	render: function () {
		return Clipperz.PM.UI.Components.Cards.Detail(this.props);
	}
});

Clipperz.PM.UI.Components.Pages.CardDetailPage = React.createFactory(Clipperz.PM.UI.Components.Pages.CardDetailPageClass);