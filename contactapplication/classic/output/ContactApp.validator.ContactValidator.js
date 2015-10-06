Ext.data.JsonP.ContactApp_validator_ContactValidator({"tagname":"class","name":"ContactApp.validator.ContactValidator","autodetected":{"aliases":true,"alternateClassNames":true,"extends":true,"mixins":true,"requires":true,"uses":true,"members":true,"code_type":true},"files":[{"filename":"ContactValidator.js","href":"ContactValidator.html#ContactApp-validator-ContactValidator"}],"aliases":{"data":["validator.contact"]},"alternateClassNames":[],"extends":"Ext.data.validator.Validator","mixins":[],"requires":["ContactApp.validator.Url","Ext.data.validator.Email","Ext.data.validator.Length"],"uses":[],"members":[{"name":"Empty","tagname":"cfg","owner":"ContactApp.validator.ContactValidator","id":"cfg-Empty","meta":{}},{"name":"Invalid","tagname":"cfg","owner":"ContactApp.validator.ContactValidator","id":"cfg-Invalid","meta":{}},{"name":"message","tagname":"property","owner":"ContactApp.validator.ContactValidator","id":"property-message","meta":{"private":true}},{"name":"validate","tagname":"method","owner":"ContactApp.validator.ContactValidator","id":"method-validate","meta":{}}],"code_type":"ext_define","id":"class-ContactApp.validator.ContactValidator","component":false,"superclasses":["Ext.data.validator.Validator"],"subclasses":[],"mixedInto":[],"parentMixins":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'>Ext.data.validator.Validator<div class='subclass '><strong>ContactApp.validator.ContactValidator</strong></div></div><h4>Requires</h4><div class='dependency'><a href='#!/api/ContactApp.validator.Url' rel='ContactApp.validator.Url' class='docClass'>ContactApp.validator.Url</a></div><div class='dependency'>Ext.data.validator.Email</div><div class='dependency'>Ext.data.validator.Length</div><h4>Files</h4><div class='dependency'><a href='source/ContactValidator.html#ContactApp-validator-ContactValidator' target='_blank'>ContactValidator.js</a></div></pre><div class='doc-contents'><p>This class is used to validate cotnacts fields</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-cfg'>Config options</h3><div class='subsection'><div id='cfg-Empty' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='ContactApp.validator.ContactValidator'>ContactApp.validator.ContactValidator</span><br/><a href='source/ContactValidator.html#ContactApp-validator-ContactValidator-cfg-Empty' target='_blank' class='view-source'>view source</a></div><a href='#!/api/ContactApp.validator.ContactValidator-cfg-Empty' class='name expandable'>Empty</a> : string<span class=\"signature\"></span></div><div class='description'><div class='short'><p>field Message</p>\n</div><div class='long'><p>field Message</p>\n</div></div></div><div id='cfg-Invalid' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='ContactApp.validator.ContactValidator'>ContactApp.validator.ContactValidator</span><br/><a href='source/ContactValidator.html#ContactApp-validator-ContactValidator-cfg-Invalid' target='_blank' class='view-source'>view source</a></div><a href='#!/api/ContactApp.validator.ContactValidator-cfg-Invalid' class='name expandable'>Invalid</a> : string<span class=\"signature\"></span></div><div class='description'><div class='short'><p>phone number message</p>\n</div><div class='long'><p>phone number message</p>\n</div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-message' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='ContactApp.validator.ContactValidator'>ContactApp.validator.ContactValidator</span><br/><a href='source/ContactValidator.html#ContactApp-validator-ContactValidator-property-message' target='_blank' class='view-source'>view source</a></div><a href='#!/api/ContactApp.validator.ContactValidator-property-message' class='name expandable'>message</a> : String<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>&#39;This is not a valid contact field&#39;</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-validate' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='ContactApp.validator.ContactValidator'>ContactApp.validator.ContactValidator</span><br/><a href='source/ContactValidator.html#ContactApp-validator-ContactValidator-method-validate' target='_blank' class='view-source'>view source</a></div><a href='#!/api/ContactApp.validator.ContactValidator-method-validate' class='name expandable'>validate</a>( <span class='pre'>value, record</span> ) : String/Boolean<span class=\"signature\"></span></div><div class='description'><div class='short'>This method is used to validate fields based on the viewType field ...</div><div class='long'><p>This method is used to validate fields based on the viewType field</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>value</span> : String<div class='sub-desc'><p>field value</p>\n</div></li><li><span class='pre'>record</span> : Ext.data.model<div class='sub-desc'><p>Data model</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>String/Boolean</span><div class='sub-desc'><p>Returns error message or true</p>\n</div></li></ul></div></div></div></div></div></div></div>","meta":{}});