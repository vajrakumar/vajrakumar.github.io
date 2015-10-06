Ext.data.JsonP.ContactApp_ux_Search({"tagname":"class","name":"ContactApp.ux.Search","autodetected":{"aliases":true,"alternateClassNames":true,"extends":true,"mixins":true,"requires":true,"uses":true,"members":true,"code_type":true},"files":[{"filename":"Search.js","href":"Search.html#ContactApp-ux-Search"}],"aliases":{"widget":["search-field"]},"alternateClassNames":[],"extends":"Ext.form.field.Text","mixins":[],"requires":[],"uses":[],"members":[{"name":"clear","tagname":"property","owner":"ContactApp.ux.Search","id":"property-clear","meta":{}},{"name":"enableKeyEvents","tagname":"property","owner":"ContactApp.ux.Search","id":"property-enableKeyEvents","meta":{"private":true}},{"name":"listeners","tagname":"property","owner":"ContactApp.ux.Search","id":"property-listeners","meta":{"private":true}},{"name":"search","tagname":"property","owner":"ContactApp.ux.Search","id":"property-search","meta":{}},{"name":"triggers","tagname":"property","owner":"ContactApp.ux.Search","id":"property-triggers","meta":{}},{"name":"validateOnBlur","tagname":"property","owner":"ContactApp.ux.Search","id":"property-validateOnBlur","meta":{"private":true}},{"name":"validationEvent","tagname":"property","owner":"ContactApp.ux.Search","id":"property-validationEvent","meta":{"private":true}},{"name":"search","tagname":"event","owner":"ContactApp.ux.Search","id":"event-search","meta":{}}],"code_type":"ext_define","id":"class-ContactApp.ux.Search","component":false,"superclasses":["Ext.form.field.Text"],"subclasses":[],"mixedInto":[],"parentMixins":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'>Ext.form.field.Text<div class='subclass '><strong>ContactApp.ux.Search</strong></div></div><h4>Files</h4><div class='dependency'><a href='source/Search.html#ContactApp-ux-Search' target='_blank'>Search.js</a></div></pre><div class='doc-contents'><p>This ux component is used for perform local search on every key press it fires an event 'search'.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-clear' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='ContactApp.ux.Search'>ContactApp.ux.Search</span><br/><a href='source/Search.html#ContactApp-ux-Search-property-clear' target='_blank' class='view-source'>view source</a></div><a href='#!/api/ContactApp.ux.Search-property-clear' class='name expandable'>clear</a> : Object<span class=\"signature\"></span></div><div class='description'><div class='short'><p>Trigger used to clear search.</p>\n</div><div class='long'><p>Trigger used to clear search.</p>\n</div></div></div><div id='property-enableKeyEvents' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='ContactApp.ux.Search'>ContactApp.ux.Search</span><br/><a href='source/Search.html#ContactApp-ux-Search-property-enableKeyEvents' target='_blank' class='view-source'>view source</a></div><a href='#!/api/ContactApp.ux.Search-property-enableKeyEvents' class='name expandable'>enableKeyEvents</a> : Boolean<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>true</code></p></div></div></div><div id='property-listeners' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='ContactApp.ux.Search'>ContactApp.ux.Search</span><br/><a href='source/Search.html#ContactApp-ux-Search-property-listeners' target='_blank' class='view-source'>view source</a></div><a href='#!/api/ContactApp.ux.Search-property-listeners' class='name expandable'>listeners</a> : Object<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>\n</div><div class='long'>\n</div></div></div><div id='property-search' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='ContactApp.ux.Search'>ContactApp.ux.Search</span><br/><a href='source/Search.html#ContactApp-ux-Search-property-search' target='_blank' class='view-source'>view source</a></div><a href='#!/api/ContactApp.ux.Search-property-search' class='name expandable'>search</a> : Object<span class=\"signature\"></span></div><div class='description'><div class='short'><p>Trigger to perform search.</p>\n</div><div class='long'><p>Trigger to perform search.</p>\n</div></div></div><div id='property-triggers' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='ContactApp.ux.Search'>ContactApp.ux.Search</span><br/><a href='source/Search.html#ContactApp-ux-Search-property-triggers' target='_blank' class='view-source'>view source</a></div><a href='#!/api/ContactApp.ux.Search-property-triggers' class='name expandable'>triggers</a> : Object<span class=\"signature\"></span></div><div class='description'><div class='short'><p>Triggers to perform search operation and clear search text.</p>\n</div><div class='long'><p>Triggers to perform search operation and clear search text.</p>\n</div></div></div><div id='property-validateOnBlur' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='ContactApp.ux.Search'>ContactApp.ux.Search</span><br/><a href='source/Search.html#ContactApp-ux-Search-property-validateOnBlur' target='_blank' class='view-source'>view source</a></div><a href='#!/api/ContactApp.ux.Search-property-validateOnBlur' class='name expandable'>validateOnBlur</a> : Boolean<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>false</code></p></div></div></div><div id='property-validationEvent' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='ContactApp.ux.Search'>ContactApp.ux.Search</span><br/><a href='source/Search.html#ContactApp-ux-Search-property-validationEvent' target='_blank' class='view-source'>view source</a></div><a href='#!/api/ContactApp.ux.Search-property-validationEvent' class='name expandable'>validationEvent</a> : Boolean<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>false</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-event'>Events</h3><div class='subsection'><div id='event-search' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='ContactApp.ux.Search'>ContactApp.ux.Search</span><br/><a href='source/Search.html#ContactApp-ux-Search-event-search' target='_blank' class='view-source'>view source</a></div><a href='#!/api/ContactApp.ux.Search-event-search' class='name expandable'>search</a>( <span class='pre'>comp, eve, eOpts</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Fires when user start entering text. ...</div><div class='long'><p>Fires when user start entering text.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>comp</span> : Ext.form.field.Text<div class='sub-desc'><p>Textfield where text is entered.</p>\n</div></li><li><span class='pre'>eve</span> : Object<div class='sub-desc'><p>{Ext.Event} event Event Object.</p>\n</div></li><li><span class='pre'>eOpts</span> : Object<div class='sub-desc'><p>The options object passed to Ext.util.Observable.addListener.</p>\n</div></li></ul></div></div></div></div></div></div></div>","meta":{}});