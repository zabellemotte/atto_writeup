YUI.add('moodle-atto_writeup-button', function (Y, NAME) {

// This file is part of Moodle - http://moodle.org/
//
// Moodle is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// Moodle is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with Moodle.  If not, see <http://www.gnu.org/licenses/>.

/**
 * Atto text editor integration version file.
 *
 * @package    atto_writeup
 * @forked from atto_corrections
 * @copyright  2014 Université de Lausanne
 * @author     Nicolas Dunand <nicolas.dunand@unil.ch>
 * @modified by Zabelle Motte <isabelle.motte@uclouvain.be>
 * @license    http://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */

/**
 * @module moodle-atto_writeup-button
 */

/**
 * Atto writeup tool.
 *
 * @namespace M.atto_writeup
 * @class Button
 * @extends M.editor_atto.EditorPlugin
 */

var COMPONENTNAME = 'atto_writeup',
    CSS = {
        FORM : 'atto_formwriteup',
        SPAN : 'atto_writeup',
        CHECKBOX:'atto_writeup_focus',
        SPAN1 : 'atto_writeup1',
        SPAN2 : 'atto_writeup2',
        ERRSPAN : 'atto_writeup_error',
        CORRSPAN : 'atto_writeup_correction',
        CORRTEXT : 'atto_writeup_comment',
        MARKING : 'atto_writeup_marking',
        ALTEXT : 'atto_writeup_altext',
        BASECLASS : 'atto_writeup_',
        SELECT : 'atto_writeup_select',
        TEXTAREA1 : 'atto_writeup_textarea1',
        TEXTAREA2 : 'atto_writeup_textarea2',
        FULLTEXT : 'atto_writeup_fulltext',
        FOCUS : 'atto_writeup_focus_cor',
        STRIKE : 'atto_writeup_strike'
    },
    SELECTORS = {
        SPAN: '.' + CSS.SPAN,
        SPAN1: '.' + CSS.SPAN1,
        SPAN1: '.' + CSS.SPAN1,
        ERRSPAN:'.'+ CSS.ERRSPAN,
        SELECT: '.' + CSS.SELECT,
        MARKING: '.'+ CSS.MARKING, 
        TEXTAREA1: '.' + CSS.TEXTAREA1,
        TEXTAREA2: '.' + CSS.TEXTAREA2,
        CHECKBOX: '.' + CSS.CHECKBOX
    },
    TEMPLATES = {
        DIALOGUE1 : '' +
            '<form class="atto_form {{CSS.FORM}}">' +
                '<label for="{{elementid}}_atto_writeup_corrtype">{{get_string "corrtype" component}}</label>' +
                '<select id="{{elementid}}_atto_writeup_corrtype" class="{{CSS.SELECT}}">' +
                    '{{#each corrtypes1}}' +
                    '<option value="{{{abbr}}}">{{{descr}}}</option>' +
                    '{{/each}}' +
                '</select>' +
                '<input type="checkbox" id="{{elementid}}_atto_writeup_focus" name="{{elementid}}_atto_writeup_focus" value="yes" class="{{CSS.CHECKBOX}}"> '+
                '<label for="{{elementid}}_atto_writeup_focus">{{get_string "focus" component}}  </label> ' +
                '<label for="{{elementid}}_atto_writeup_marking">{{get_string "marking" component}}  </label> ' +
                '<select id="{{elementid}}_atto_writeup_marking" class="{{CSS.MARKING}}">' +                
                '<option value="serious">{{get_string "serious" component}}</option>' +
                '<option value="normal" selected="selected">{{get_string "normal" component}}</option>' +
                '<option value="minor">{{get_string "minor" component}}</option>' +
                '<option value="positive">{{get_string "positive" component}}</option>' +
                '</select>' +
                '<label for="{{elementid}}_atto_writeup_corrtext">{{get_string "corrtext" component}}</label>' +
                '<textarea class="fullwidth {{CSS.TEXTAREA1}}" type="text" id="{{elementid}}_atto_writeup_corrtext">' +
                '</textarea>' +
                '<label for="{{elementid}}_atto_writeup_altext">{{get_string "altext" component}}</label>' +
                '<input class="fullwidth {{CSS.TEXTAREA2}}" type="text" id="{{elementid}}_atto_writeup_altext">' +
                '</input>' +
                '<div class="mdl-align">' +
                    '<br/>' +
                    '<button class="submit" type="submit">{{get_string "addcomment" component}}</button>' +
                '</div>' +
            '</form>',
                    DIALOGUE2 : '' +
            '<form class="atto_form {{CSS.FORM}}">' +
                '<label for="{{elementid}}_atto_writeup_corrtype">{{get_string "corrtype" component}}</label>' +
                '<select id="{{elementid}}_atto_writeup_corrtype" class="{{CSS.SELECT}}">' +
                    '{{#each corrtypes2}}' +
                    '<option value="{{{abbr}}}">{{{descr}}}</option>' +
                    '{{/each}}' +
                '</select>' +
                '<input type="checkbox" id="{{elementid}}_atto_writeup_focus" name="{{elementid}}_atto_writeup_focus" value="yes" class="{{CSS.CHECKBOX}}"> '+
                '<label for="{{elementid}}_atto_writeup_focus">{{get_string "focus" component}}  </label> ' +
                '<label for="{{elementid}}_atto_writeup_marking">{{get_string "marking" component}}  </label> ' +
                '<select id="{{elementid}}_atto_writeup_marking" class="{{CSS.MARKING}}">' +
                '<option value="serious">{{get_string "serious" component}}</option>' +
                '<option value="normal" selected="selected">{{get_string "normal" component}}</option>' +
                '<option value="minor">{{get_string "minor" component}}</option>' +
                '<option value="positive">{{get_string "positive" component}}</option>' +
                '</select>' +
                '<label for="{{elementid}}_atto_writeup_corrtext">{{get_string "corrtext" component}}</label>' +
                '<textarea class="fullwidth {{CSS.TEXTAREA1}}" type="text" id="{{elementid}}_atto_writeup_corrtext">' +
                '</textarea>' +
                '<label for="{{elementid}}_atto_writeup_altext">{{get_string "altext" component}}</label>' +
                '<input class="fullwidth {{CSS.TEXTAREA2}}" type="text" id="{{elementid}}_atto_writeup_altext">' +
                '</input>' +
                '<div class="mdl-align">' +
                    '<br/>' +
                    '<button class="submit" type="submit">{{get_string "addcomment" component}}</button>' +
                '</div>' +
            '</form>',
             DIALOGUE3 : '' +
            '<form class="atto_form {{CSS.FORM}}">' +
                '<label for="{{elementid}}_atto_writeup_corrtype">{{get_string "corrtype" component}}</label>' +
                '<select id="{{elementid}}_atto_writeup_corrtype" class="{{CSS.SELECT}}">' +
                    '{{#each corrtypes3}}' +
                    '<option value="{{{abbr}}}">{{{descr}}}</option>' +
                    '{{/each}}' +
                '</select>' +
                '<input type="checkbox" id="{{elementid}}_atto_writeup_focus" name="{{elementid}}_atto_writeup_focus" value="yes" class="{{CSS.CHECKBOX}}"> '+
                '<label for="{{elementid}}_atto_writeup_focus">{{get_string "focus" component}}  </label> ' +
                '<label for="{{elementid}}_atto_writeup_marking">{{get_string "marking" component}}  </label> ' +
                '<select id="{{elementid}}_atto_writeup_marking" class="{{CSS.MARKING}}">' +
                '<option value="serious">{{get_string "serious" component}}</option>' +
                '<option value="normal" selected="selected">{{get_string "normal" component}}</option>' +
                '<option value="minor">{{get_string "minor" component}}</option>' +
                '<option value="positive">{{get_string "positive" component}}</option>' +
                '</select>' +
                '<label for="{{elementid}}_atto_writeup_corrtext">{{get_string "corrtext" component}}</label>' +
                '<textarea class="fullwidth {{CSS.TEXTAREA1}}" type="text" id="{{elementid}}_atto_writeup_corrtext">' +
                '</textarea>' +
                '<label for="{{elementid}}_atto_writeup_altext">{{get_string "altext" component}}</label>' +
                '<input class="fullwidth {{CSS.TEXTAREA2}}" type="text" id="{{elementid}}_atto_writeup_altext">' +
                '</input>' +
                '<div class="mdl-align">' +
                    '<br/>' +
                    '<button class="submit" type="submit">{{get_string "addcomment" component}}</button>' +
                '</div>' +
            '</form>',
             DIALOGUE4 : '' +
            '<form class="atto_form {{CSS.FORM}}">' +
                '<label for="{{elementid}}_atto_writeup_corrtype">{{get_string "corrtype" component}}</label>' +
                '<select id="{{elementid}}_atto_writeup_corrtype" class="{{CSS.SELECT}}">' +
                    '{{#each corrtypes4}}' +
                    '<option value="{{{abbr}}}">{{{descr}}}</option>' +
                    '{{/each}}' +
                '</select>' +
                '<input type="checkbox" id="{{elementid}}_atto_writeup_focus" name="{{elementid}}_atto_writeup_focus" value="yes" class="{{CSS.CHECKBOX}}"> '+
                '<label for="{{elementid}}_atto_writeup_focus">{{get_string "focus" component}}  </label> ' +
                '<label for="{{elementid}}_atto_writeup_marking">{{get_string "marking" component}}  </label> ' +
                '<select id="{{elementid}}_atto_writeup_marking" class="{{CSS.MARKING}}">' +
                '<option value="serious">{{get_string "serious" component}}</option>' +
                '<option value="normal" selected="selected">{{get_string "normal" component}}</option>' +
                '<option value="minor">{{get_string "minor" component}}</option>' +
                '<option value="positive">{{get_string "positive" component}}</option>' +
                '</select>' +
                '<label for="{{elementid}}_atto_writeup_corrtext">{{get_string "corrtext" component}}</label>' +
                '<textarea class="fullwidth {{CSS.TEXTAREA1}}" type="text" id="{{elementid}}_atto_writeup_corrtext">' +
                '</textarea>' +
                '<label for="{{elementid}}_atto_writeup_altext">{{get_string "altext" component}}</label>' +
                '<input class="fullwidth {{CSS.TEXTAREA2}}" type="text" id="{{elementid}}_atto_writeup_altext">' +
                '</input>' +
                '<div class="mdl-align">' +
                    '<br/>' +
                    '<button class="submit" type="submit">{{get_string "addcomment" component}}</button>' +
                '</div>' +
            '</form>',
             DIALOGUE5 : '' +
            '<form class="atto_form {{CSS.FORM}}">' +
                '<label for="{{elementid}}_atto_writeup_corrtype">{{get_string "corrtype" component}}</label>' +
                '<select id="{{elementid}}_atto_writeup_corrtype" class="{{CSS.SELECT}}">' +
                    '{{#each corrtypes5}}' +
                    '<option value="{{{abbr}}}">{{{descr}}}</option>' +
                    '{{/each}}' +
                '</select>' +
                '<input type="checkbox" id="{{elementid}}_atto_writeup_focus" name="{{elementid}}_atto_writeup_focus" value="yes" class="{{CSS.CHECKBOX}}"> '+
                '<label for="{{elementid}}_atto_writeup_focus">{{get_string "focus" component}}  </label> ' +
                '<label for="{{elementid}}_atto_writeup_marking">{{get_string "marking" component}}  </label> ' +
                '<select id="{{elementid}}_atto_writeup_marking" class="{{CSS.MARKING}}">' +
                '<option value="serious">{{get_string "serious" component}}</option>' +
                '<option value="normal" selected="selected">{{get_string "normal" component}}</option>' +
                '<option value="minor">{{get_string "minor" component}}</option>' +
                '<option value="positive">{{get_string "positive" component}}</option>' +
                '</select>' +
                '<label for="{{elementid}}_atto_writeup_corrtext">{{get_string "corrtext" component}}</label>' +
                '<textarea class="fullwidth {{CSS.TEXTAREA1}}" type="text" id="{{elementid}}_atto_writeup_corrtext">' +
                '</textarea>' +
                '<label for="{{elementid}}_atto_writeup_altext">{{get_string "altext" component}}</label>' +
                '<input class="fullwidth {{CSS.TEXTAREA2}}" type="text" id="{{elementid}}_atto_writeup_altext">' +
                '</input>' +
                '<div class="mdl-align">' +
                    '<br/>' +
                    '<button class="submit" type="submit">{{get_string "addcomment" component}}</button>' +
                '</div>' +
            '</form>',
             DIALOGUE6 : '' +
            '<form class="atto_form {{CSS.FORM}}">' +
                '<label for="{{elementid}}_atto_writeup_corrtype">{{get_string "corrtype" component}}</label>' +
                '<select id="{{elementid}}_atto_writeup_corrtype" class="{{CSS.SELECT}}">' +
                    '{{#each corrtypes6}}' +
                    '<option value="{{{abbr}}}">{{{descr}}}</option>' +
                    '{{/each}}' +
                '</select>' +
                '<input type="checkbox" id="{{elementid}}_atto_writeup_focus" name="{{elementid}}_atto_writeup_focus" value="yes" class="{{CSS.CHECKBOX}}"> '+
                '<label for="{{elementid}}_atto_writeup_focus">{{get_string "focus" component}}  </label> ' +
                '<label for="{{elementid}}_atto_writeup_marking">{{get_string "marking" component}}  </label> ' +
                '<select id="{{elementid}}_atto_writeup_marking" class="{{CSS.MARKING}}">' +
                '<option value="serious">{{get_string "serious" component}}</option>' +
                '<option value="normal" selected="selected">{{get_string "normal" component}}</option>' +
                '<option value="minor">{{get_string "minor" component}}</option>' +
                '<option value="positive">{{get_string "positive" component}}</option>' +
                '</select>' +
                '<label for="{{elementid}}_atto_writeup_corrtext">{{get_string "corrtext" component}}</label>' +
                '<textarea class="fullwidth {{CSS.TEXTAREA1}}" type="text" id="{{elementid}}_atto_writeup_corrtext">' +
                '</textarea>' +
                '<label for="{{elementid}}_atto_writeup_altext">{{get_string "altext" component}}</label>' +
                '<input class="fullwidth {{CSS.TEXTAREA2}}" type="text" id="{{elementid}}_atto_writeup_altext">' +
                '</input>' +
                '<div class="mdl-align">' +
                    '<br/>' +
                    '<button class="submit" type="submit">{{get_string "addcomment" component}}</button>' +
                '</div>' +
            '</form>',
        FULLTEXT : '' +
            '<div class="{{CSS.FULLTEXT}}">{{fulltext}}</div>'
    };

Y.namespace('M.atto_writeup').Button = Y.Base.create('button', Y.M.editor_atto.EditorPlugin, [], {

    /**
     * A reference to the current selection at the time that the dialogue
     * was opened.
     *
     * @property _currentSelection
     * @type Range
     * @private
     */
    _currentSelection: null,

    /**
     * A reference to the dialogue content.
     *
     * @property _content
     * @type Node
     * @private
     */
    _content: null,

    /**
     * A reference to the isoncorr property.
     *
     * @property _isoncorr
     * @type bool
     * @private
     */
    _isoncorr: null,

    initializer: function() {





tttt = this; // TODO : remove





        // add correction mark
        var items1 = [],
            itemid1 = 0;
        Y.Array.each(this.get('corrtypes1'), function(corrtype) {
            items1.push({
                text: corrtype.descr,
                callbackArgs: new Array(itemid1, corrtype.descr)
            });
            itemid1++;
        });
        
       var items2 = [],
            itemid2 = 0;
        Y.Array.each(this.get('corrtypes2'), function(corrtype) {
            items2.push({
                text: corrtype.descr,
                callbackArgs: new Array(itemid2, corrtype.descr)
            });
            itemid2++;
        });  
        
         var items3 = [],
            itemid3 = 0;
        Y.Array.each(this.get('corrtypes3'), function(corrtype) {
            items3.push({
                text: corrtype.descr,
                callbackArgs: new Array(itemid3, corrtype.descr)
            });
            itemid3++;
        });          
        
			var items4 = [],
            itemid4 = 0;
        Y.Array.each(this.get('corrtypes4'), function(corrtype) {
            items4.push({
                text: corrtype.descr,
                callbackArgs: new Array(itemid4, corrtype.descr)
            });
            itemid4++;
        });           
        
        var items5 = [],
            itemid5 = 0;
        Y.Array.each(this.get('corrtypes5'), function(corrtype) {
            items5.push({
                text: corrtype.descr,
                callbackArgs: new Array(itemid5, corrtype.descr)
            });
            itemid5++;
        });  
        
         var items6 = [],
            itemid6 = 0;
        Y.Array.each(this.get('corrtypes6'), function(corrtype) {
            items6.push({
                text: corrtype.descr,
                callbackArgs: new Array(itemid6, corrtype.descr)
            });
            itemid6++;
        });  
        
        this.addToolbarMenu({
            icon: M.util.image_url('icon11', COMPONENTNAME),
            globalItemConfig: {
                callback: this._addCorrection1
            },
            items: items1,
            buttonName: 'writeup11',
            title: 'addmark1'
        });

			this.addToolbarMenu({
            icon: M.util.image_url('icon12', COMPONENTNAME),
            globalItemConfig: {
                callback: this._addCorrection2
            },
            items: items2,
            buttonName: 'writeup12',
            title: 'addmark2'
        }); 
        this.addToolbarMenu({
            icon: M.util.image_url('icon13', COMPONENTNAME),
            globalItemConfig: {
                callback: this._addCorrection3
            },
            items: items3,
            buttonName: 'writeup13',
            title: 'addmark3'
        }); 
          this.addToolbarMenu({
            icon: M.util.image_url('icon14', COMPONENTNAME),
            globalItemConfig: {
                callback: this._addCorrection4
            },
            items: items4,
            buttonName: 'writeup14',
            title: 'addmark4'
        }); 
            this.addToolbarMenu({
            icon: M.util.image_url('icon15', COMPONENTNAME),
            globalItemConfig: {
                callback: this._addCorrection5
            },
            items: items5,
            buttonName: 'writeup15',
            title: 'addmark5'
        }); 
        this.addToolbarMenu({
            icon: M.util.image_url('icon16', COMPONENTNAME),
            globalItemConfig: {
                callback: this._addCorrection6
            },
            items: items6,
            buttonName: 'writeup16',
            title: 'addmark6'
        }); 

        // remove correction mark
        this.addButton({
            icon: M.util.image_url('icon2', COMPONENTNAME),
            callback: this._removeCorrection,
            tags: SELECTORS.SPAN,
            buttonName: 'writeup2',
            title: 'removemark'
        });

        // display full text with marks
        this.addButton({
            icon: M.util.image_url('icon3', COMPONENTNAME),
            callback: this._displayFulltext,
            buttonName: 'writeup3',
            title: 'displayfulltext'
        });

        // Enable the event listener once everything has loaded.
        this.get('host').on('pluginsloaded', function() {
            this.get('host').on('atto:selectionchanged', this._updateButtonsStates, this);
        }, this);

        this._updateButtonsStates();

    },
    
    

    /**
     * Add a correction on the current selection
     *
     * @method _addCorrection
     * @param {EventFacade} e
     * @private
     */
    _addCorrection1: function(e, args) {
        // Store the current selection.
        this._currentSelection = this.get('host').getSelection();
        if (this._currentSelection === false || this._currentSelection.collapsed) {
            return;
        }
        var selectednode = this.get('host').getSelectionParentNode();
        // Note this is a document fragment and YUI doesn't like them.
        if (!selectednode) {
            return;
        }
        this._displayDialogue1(args, selectednode);
//        console.log(args);
    },

    _addCorrection2: function(e, args) {
        // Store the current selection.
        this._currentSelection = this.get('host').getSelection();
        if (this._currentSelection === false || this._currentSelection.collapsed) {
            return;
        }
        var selectednode = this.get('host').getSelectionParentNode();
        // Note this is a document fragment and YUI doesn't like them.
        if (!selectednode) {
            return;
        }
        this._displayDialogue2(args, selectednode);
//        console.log(args);
    },


      _addCorrection3: function(e, args) {
        // Store the current selection.
        this._currentSelection = this.get('host').getSelection();
        if (this._currentSelection === false || this._currentSelection.collapsed) {
            return;
        }
        var selectednode = this.get('host').getSelectionParentNode();
        // Note this is a document fragment and YUI doesn't like them.
        if (!selectednode) {
            return;
        }
        this._displayDialogue3(args, selectednode);
//        console.log(args);
    },


    _addCorrection4: function(e, args) {
        // Store the current selection.
        this._currentSelection = this.get('host').getSelection();
        if (this._currentSelection === false || this._currentSelection.collapsed) {
            return;
        }
        var selectednode = this.get('host').getSelectionParentNode();
        // Note this is a document fragment and YUI doesn't like them.
        if (!selectednode) {
            return;
        }
        this._displayDialogue4(args, selectednode);
//        console.log(args);
    },

    _addCorrection5: function(e, args) {
        // Store the current selection.
        this._currentSelection = this.get('host').getSelection();
        if (this._currentSelection === false || this._currentSelection.collapsed) {
            return;
        }
        var selectednode = this.get('host').getSelectionParentNode();
        // Note this is a document fragment and YUI doesn't like them.
        if (!selectednode) {
            return;
        }
        this._displayDialogue5(args, selectednode);
//        console.log(args);
    },

    _addCorrection6: function(e, args) {
        // Store the current selection.
        this._currentSelection = this.get('host').getSelection();
        if (this._currentSelection === false || this._currentSelection.collapsed) {
            return;
        }
        var selectednode = this.get('host').getSelectionParentNode();
        // Note this is a document fragment and YUI doesn't like them.
        if (!selectednode) {
            return;
        }
        this._displayDialogue6(args, selectednode);
//        console.log(args);
    },


    /**
     * Remove a correction around the cursor
     *
     * @method _removeCorrection
     * @param {EventFacade} e
     * @private
     */
    _removeCorrection: function(e) {
        e.preventDefault();
        // get the selection grandparent (because the parent is only the text node)
         var el = this.get('host').getSelectionParentNode().parentNode;
         if (el.nodeName.toLowerCase() === 'span' && el.className.indexOf(CSS.SPAN) !== -1) {      
         Y.Node(el.parentNode).one('.' + CSS.CORRSPAN).remove();
         el.parentNode.parentNode.replaceChild(document.createTextNode(el.innerHTML), el.parentNode);
        }
    },

    /**
     * Display the full text with writeup
     *
     * @method _displayFulltext
     * @private
     */
    _displayFulltext: function() {
        var dialogue = this.getDialogue({
            headerContent: M.util.get_string('fulltexttitle', COMPONENTNAME),
            focusAfterHide: true,
            width: 600
        });

        var template = Y.Handlebars.compile(TEMPLATES.FULLTEXT);

        var content = Y.Node.create(template({
            component: COMPONENTNAME,
            CSS: CSS,
            fulltext : new Y.Handlebars.SafeString(this.get('host').editor.getHTML())
        }));

        dialogue.set('bodyContent', content)
                .show();
    },

    /**
     * Display the writeup dialog
     *
     * @method _displayDialogue
     * @private
     */


      _displayDialogue1: function(args, selectednode) {

nnnn = selectednode;
        var ctype = false,
            ctext = false;
            atext = false;

        if (this._isoncorr) {
            ctype = selectednode.parentNode.className.replace(CSS.SPAN + ' '+ CSS.SPAN1 + ' ' + CSS.BASECLASS, '').replace(' ', '');
            ctext = Y.Node(selectednode.parentNode).one('.atto_writeup_comment').getDOMNode().innerHTML;
            atext = Y.Node(selectednode.parentNode).one('.atto_writeup_altext').getDOMNode().innerHTML;
            mark = Y.Node(selectednode.parentNode).one('.atto_writeup_marking').getDOMNode().innerHTML;
            if (Y.Node(selectednode.parentNode).one('.atto_writeup_focus').checked) {isfocus = "yes";}
            else isfocus = "no";
        }

        var dialogue = this.getDialogue({
            headerContent: M.util.get_string('dialogtitle1', COMPONENTNAME),
            focusAfterHide: true,
            focusOnShowSelector: SELECTORS.TEXTAREA1 // TODO : doesn't work!!!
        });

        // Set the dialogue content, and then show the dialogue.
        dialogue.set('bodyContent', this._getDialogueContent1())
                .show();
        if (!this._isoncorr) {
           Y.one('.atto_form.' + CSS.FORM + ' select').set('selectedIndex', args[0]); // TODO correct DOM selector!
        }
        else {
           Y.one('.atto_form.' + CSS.FORM + ' select').set('selectedIndex', this.get('corrtypekeys1').indexOf(ctype));
           Y.one('.atto_form.' + CSS.FORM + ' textarea1').set('value', ctext);
           Y.one('.atto_form.' + CSS.FORM + ' textarea2').set('value', atext);
           Y.one('.atto_form.' + CSS.FORM + ' mark').set('value', mark);
           if (isfocus=="yes") { Y.one('.atto_form.' + CSS.FORM + ' checkbox').set('value', "yes");}
        }
    },

    _displayDialogue2: function(args, selectednode) {

nnnn = selectednode;
        var ctype = false,
            ctext = false;
            atext = false;

        if (this._isoncorr) {
            ctype = selectednode.parentNode.className.replace(CSS.SPAN + ' '+ CSS.SPAN1 + ' ' + CSS.BASECLASS, '').replace(' ', '');
            ctext = Y.Node(selectednode.parentNode).one('.atto_writeup_comment').getDOMNode().innerHTML;
            atext = Y.Node(selectednode.parentNode).one('.atto_writeup_altext').getDOMNode().innerHTML;
            mark = Y.Node(selectednode.parentNode).one('.atto_writeup_marking').getDOMNode().innerHTML;
            if (Y.Node(selectednode.parentNode).one('.atto_writeup_focus').checked) {isfocus = "yes";}
            else isfocus = "no";
        }

        var dialogue = this.getDialogue({
            headerContent: M.util.get_string('dialogtitle2', COMPONENTNAME),
            focusAfterHide: true,
            focusOnShowSelector: SELECTORS.TEXTAREA1 // TODO : doesn't work!!!
        });

        // Set the dialogue content, and then show the dialogue.
        dialogue.set('bodyContent', this._getDialogueContent2())
                .show();
        if (!this._isoncorr) {
           Y.one('.atto_form.' + CSS.FORM + ' select').set('selectedIndex', args[0]); // TODO correct DOM selector!
        }
        else {
           Y.one('.atto_form.' + CSS.FORM + ' select').set('selectedIndex', this.get('corrtypekeys2').indexOf(ctype));
           Y.one('.atto_form.' + CSS.FORM + ' textarea1').set('value', ctext);
           Y.one('.atto_form.' + CSS.FORM + ' textarea2').set('value', atext);
           Y.one('.atto_form.' + CSS.FORM + ' mark').set('value', mark);
           if (isfocus=="yes") { Y.one('.atto_form.' + CSS.FORM + ' checkbox').set('value', "yes");}
        }
    },
    
        _displayDialogue3: function(args, selectednode) {

nnnn = selectednode;
        var ctype = false,
            ctext = false;
            atext = false;

        if (this._isoncorr) {
            ctype = selectednode.parentNode.className.replace(CSS.SPAN + ' '+ CSS.SPAN1 + ' ' + CSS.BASECLASS, '').replace(' ', '');
            ctext = Y.Node(selectednode.parentNode).one('.atto_writeup_comment').getDOMNode().innerHTML;
            atext = Y.Node(selectednode.parentNode).one('.atto_writeup_altext').getDOMNode().innerHTML;
            mark = Y.Node(selectednode.parentNode).one('.atto_writeup_marking').getDOMNode().innerHTML;
            if (Y.Node(selectednode.parentNode).one('.atto_writeup_focus').checked) {isfocus = "yes";}
            else isfocus = "no";
        }

        var dialogue = this.getDialogue({
            headerContent: M.util.get_string('dialogtitle3', COMPONENTNAME),
            focusAfterHide: true,
            focusOnShowSelector: SELECTORS.TEXTAREA1 // TODO : doesn't work!!!
        });

        // Set the dialogue content, and then show the dialogue.
        dialogue.set('bodyContent', this._getDialogueContent3())
                .show();
        if (!this._isoncorr) {
           Y.one('.atto_form.' + CSS.FORM + ' select').set('selectedIndex', args[0]); // TODO correct DOM selector!
        }
        else {
           Y.one('.atto_form.' + CSS.FORM + ' select').set('selectedIndex', this.get('corrtypekeys3').indexOf(ctype));
           Y.one('.atto_form.' + CSS.FORM + ' textarea1').set('value', ctext);
           Y.one('.atto_form.' + CSS.FORM + ' textarea2').set('value', atext);
           Y.one('.atto_form.' + CSS.FORM + ' mark').set('value', mark);
           if (isfocus=="yes") { Y.one('.atto_form.' + CSS.FORM + ' checkbox').set('value', "yes");}
        }
    },
    
        _displayDialogue4: function(args, selectednode) {

nnnn = selectednode;
        var ctype = false,
            ctext = false;
            atext = false;

        if (this._isoncorr) {
            ctype = selectednode.parentNode.className.replace(CSS.SPAN + ' '+ CSS.SPAN1 + ' ' + CSS.BASECLASS, '').replace(' ', '');
            ctext = Y.Node(selectednode.parentNode).one('.atto_writeup_comment').getDOMNode().innerHTML;
            atext = Y.Node(selectednode.parentNode).one('.atto_writeup_altext').getDOMNode().innerHTML;
            mark = Y.Node(selectednode.parentNode).one('.atto_writeup_marking').getDOMNode().innerHTML;
            if (Y.Node(selectednode.parentNode).one('.atto_writeup_focus').checked) {isfocus = "yes";}
            else isfocus = "no";
        }

        var dialogue = this.getDialogue({
            headerContent: M.util.get_string('dialogtitle4', COMPONENTNAME),
            focusAfterHide: true,
            focusOnShowSelector: SELECTORS.TEXTAREA1 // TODO : doesn't work!!!
        });

        // Set the dialogue content, and then show the dialogue.
        dialogue.set('bodyContent', this._getDialogueContent4())
                .show();
        if (!this._isoncorr) {
           Y.one('.atto_form.' + CSS.FORM + ' select').set('selectedIndex', args[0]); // TODO correct DOM selector!
        }
        else {
           Y.one('.atto_form.' + CSS.FORM + ' select').set('selectedIndex', this.get('corrtypekeys4').indexOf(ctype));
           Y.one('.atto_form.' + CSS.FORM + ' textarea1').set('value', ctext);
           Y.one('.atto_form.' + CSS.FORM + ' textarea2').set('value', atext);
           Y.one('.atto_form.' + CSS.FORM + ' mark').set('value', mark);
           if (isfocus=="yes") { Y.one('.atto_form.' + CSS.FORM + ' checkbox').set('value', "yes");}
        }
    },
    
        _displayDialogue5: function(args, selectednode) {

nnnn = selectednode;
        var ctype = false,
            ctext = false;
            atext = false;

        if (this._isoncorr) {
            ctype = selectednode.parentNode.className.replace(CSS.SPAN + ' '+ CSS.SPAN1 + ' ' + CSS.BASECLASS, '').replace(' ', '');
            ctext = Y.Node(selectednode.parentNode).one('.atto_writeup_comment').getDOMNode().innerHTML;
            atext = Y.Node(selectednode.parentNode).one('.atto_writeup_altext').getDOMNode().innerHTML;
            mark = Y.Node(selectednode.parentNode).one('.atto_writeup_marking').getDOMNode().innerHTML;
            if (Y.Node(selectednode.parentNode).one('.atto_writeup_focus').checked) {isfocus = "yes";}
            else isfocus = "no";
        }

        var dialogue = this.getDialogue({
            headerContent: M.util.get_string('dialogtitle5', COMPONENTNAME),
            focusAfterHide: true,
            focusOnShowSelector: SELECTORS.TEXTAREA1 // TODO : doesn't work!!!
        });

        // Set the dialogue content, and then show the dialogue.
        dialogue.set('bodyContent', this._getDialogueContent5())
                .show();
        if (!this._isoncorr) {
           Y.one('.atto_form.' + CSS.FORM + ' select').set('selectedIndex', args[0]); // TODO correct DOM selector!
        }
        else {
           Y.one('.atto_form.' + CSS.FORM + ' select').set('selectedIndex', this.get('corrtypekeys5').indexOf(ctype));
           Y.one('.atto_form.' + CSS.FORM + ' textarea1').set('value', ctext);
           Y.one('.atto_form.' + CSS.FORM + ' textarea2').set('value', atext);
           Y.one('.atto_form.' + CSS.FORM + ' mark').set('value', mark);
           if (isfocus=="yes") { Y.one('.atto_form.' + CSS.FORM + ' checkbox').set('value', "yes");}
        }
    },

    _displayDialogue6: function(args, selectednode) {

nnnn = selectednode;
        var ctype = false,
            ctext = false;
            atext = false;

        if (this._isoncorr) {
            ctype = selectednode.parentNode.className.replace(CSS.SPAN + ' '+ CSS.SPAN1 + ' ' + CSS.BASECLASS, '').replace(' ', '');
            ctext = Y.Node(selectednode.parentNode).one('.atto_writeup_comment').getDOMNode().innerHTML;
            atext = Y.Node(selectednode.parentNode).one('.atto_writeup_altext').getDOMNode().innerHTML;
            mark = Y.Node(selectednode.parentNode).one('.atto_writeup_marking').getDOMNode().innerHTML;
            if (Y.Node(selectednode.parentNode).one('.atto_writeup_focus').checked) {isfocus = "yes";}
            else isfocus = "no";
        }

        var dialogue = this.getDialogue({
            headerContent: M.util.get_string('dialogtitle6', COMPONENTNAME),
            focusAfterHide: true,
            focusOnShowSelector: SELECTORS.TEXTAREA1 // TODO : doesn't work!!!
        });

        // Set the dialogue content, and then show the dialogue.
        dialogue.set('bodyContent', this._getDialogueContent6())
                .show();
        if (!this._isoncorr) {
           Y.one('.atto_form.' + CSS.FORM + ' select').set('selectedIndex', args[0]); // TODO correct DOM selector!
        }
        else {
           Y.one('.atto_form.' + CSS.FORM + ' select').set('selectedIndex', this.get('corrtypekeys6').indexOf(ctype));
           Y.one('.atto_form.' + CSS.FORM + ' textarea1').set('value', ctext);
           Y.one('.atto_form.' + CSS.FORM + ' textarea2').set('value', atext);
           Y.one('.atto_form.' + CSS.FORM + ' mark').set('value', mark);
           if (isfocus=="yes") { Y.one('.atto_form.' + CSS.FORM + ' checkbox').set('value', "yes");}
        }
    },

    /**
     * Return the dialogue content for the tool, attaching any required
     * events.
     *
     * @method _getDialogueContent
     * @return {Node} The content to place in the dialogue.
     * @private
     */
    _getDialogueContent1: function() {
        var template = Y.Handlebars.compile(TEMPLATES.DIALOGUE1);

        this._content = Y.Node.create(template({
            component: COMPONENTNAME,
            elementid: this.get('host').get('elementid'),
            CSS: CSS,
            corrtypes1: this.get('corrtypes1')
        }));

        this._content.one('.submit').on('click', this._setCorrection1, this);

        return this._content;
    },

    _getDialogueContent2: function() {
        var template = Y.Handlebars.compile(TEMPLATES.DIALOGUE2);

        this._content = Y.Node.create(template({
            component: COMPONENTNAME,
            elementid: this.get('host').get('elementid'),
            CSS: CSS,
            corrtypes2: this.get('corrtypes2')
        }));

        this._content.one('.submit').on('click', this._setCorrection2, this);

        return this._content;
    },
    
      _getDialogueContent3: function() {
        var template = Y.Handlebars.compile(TEMPLATES.DIALOGUE3);

        this._content = Y.Node.create(template({
            component: COMPONENTNAME,
            elementid: this.get('host').get('elementid'),
            CSS: CSS,
            corrtypes3: this.get('corrtypes3')
        }));

        this._content.one('.submit').on('click', this._setCorrection3, this);

        return this._content;
    },
    
      _getDialogueContent4: function() {
        var template = Y.Handlebars.compile(TEMPLATES.DIALOGUE4);

        this._content = Y.Node.create(template({
            component: COMPONENTNAME,
            elementid: this.get('host').get('elementid'),
            CSS: CSS,
            corrtypes4: this.get('corrtypes4')
        }));

        this._content.one('.submit').on('click', this._setCorrection4, this);

        return this._content;
    },

   _getDialogueContent5: function() {
        var template = Y.Handlebars.compile(TEMPLATES.DIALOGUE5);

        this._content = Y.Node.create(template({
            component: COMPONENTNAME,
            elementid: this.get('host').get('elementid'),
            CSS: CSS,
            corrtypes5: this.get('corrtypes5')
        }));

        this._content.one('.submit').on('click', this._setCorrection5, this);

        return this._content;
    },

  _getDialogueContent6: function() {
        var template = Y.Handlebars.compile(TEMPLATES.DIALOGUE6);

        this._content = Y.Node.create(template({
            component: COMPONENTNAME,
            elementid: this.get('host').get('elementid'),
            CSS: CSS,
            corrtypes6: this.get('corrtypes6')
        }));

        this._content.one('.submit').on('click', this._setCorrection6, this);

        return this._content;
    },

    /**
     * Add or update a correction.
     *
     * @method setCorrection
     * @param {EventFacade} e
     * @private
     */
    _setCorrection1: function(e) {
        e.preventDefault();
        this.getDialogue({
            focusAfterHide: this._currentSelection
        }).hide();

//        this._removeCorrection();


        var form = e.currentTarget.ancestor('.atto_form'),
            ctype = form.one(SELECTORS.SELECT).get('value'),
            indc=this.get('corrtypekeys1').indexOf(ctype), 
            ctypefull= this.get('corrtypes1')[indc].descr,
            ctext = form.one(SELECTORS.TEXTAREA1).get('value'),
            regex = /(https?:\/\/([-\w\.]+)+(:\d+)?(\/([\w\/_\.]*(\?\S+)?)?)?)/ig,
            ctext = ctext.replace(regex, "<a href='$1' target='_blank'>$1</a>"),
            atext = form.one(SELECTORS.TEXTAREA2).get('value'),
            mark = form.one(SELECTORS.MARKING).get('value'),
            isfocus="no",
            host = this.get('host');


        if  (form.one(SELECTORS.CHECKBOX).get('checked')) {isfocus="yes";}      
        if (atext.trim()!="") {strike="yes";} else {strike="no";} 
            
ffff = form;
        if (ctype !== '') {
            // restore original selection, in order to be able to work on it
//            return;
            host.setSelection(this._currentSelection);
            if (this._isoncorr) {
                // replace existing correction mark:
                //  - get the orignal node
                var ynode = Y.Node(host.getSelectionParentNode().parentNode);
                //  - insert the new comment
                if (ctext!="")
                    ynode.one('.' + CSS.CORRTEXT).getDOMNode().innerHTML = '<b>'+ ctypefull + '</b> : ' + ctext;
                else ynode.one('.' + CSS.CORRTEXT).getDOMNode().innerHTML ='<b>'+ ctypefull + '</b>';
                ynode.one('.' + CSS.ALTEXT).getDOMNode().innerHTML = atext;
                if (isfocus) {ynode.one('.' + CSS.FOCUS).set('checked', 'checked');}
                //ynode.one('.' + CSS.FOCUS).getDOMNode().innerHTML = isfocus;
                //  - add correct class
                var newclass = CSS.SPAN + ' ' +CSS.SPAN1 + ' ' + CSS.BASECLASS + ctype;
                ynode.one('.' + CSS.CORRTEXT).getDOMNode().parentNode.parentNode.className = newclass;
                //  - add the correct <sup> mark
                ynode.one('sup').getDOMNode().innerHTML = ctype;
            }
            else {
                // new correction mark
                var uniqueclass = 'ts' + new Date().getTime();
                host.toggleInlineSelectionClass([CSS.SPAN]);
                host.toggleInlineSelectionClass([CSS.SPAN1]);
                if (isfocus=="yes") {  host.toggleInlineSelectionClass([CSS.FOCUS]);}
                host.toggleInlineSelectionClass([CSS.BASECLASS + ctype]);
                if ((mark=="serious")&&(strike=="yes")) host.toggleInlineSelectionClass([CSS.STRIKE]);
                host.toggleInlineSelectionClass([CSS.BASECLASS + mark]);
                host.toggleInlineSelectionClass([uniqueclass]);
                if (ctext!="")
                    node1 = Y.Node.create('<span class="' + CSS.CORRTEXT + '"> <b> ' + ctypefull + ' </b> : '+ ctext + '</span>');
                else node1 = Y.Node.create('<span class="' + CSS.CORRTEXT + '"> <b> ' + ctypefull + ' </b> '+ '</span>');
                var node0 = Y.Node.create('<span class="' + CSS.CORRSPAN + '"/>'),
                    node2 = Y.Node.create('<span class="' + CSS.ALTEXT + ' ' + CSS.ALTEXT + '_'+ mark +'">' + atext + '</span>'),
                    node3 = Y.Node.create('<sup title="' + ctext + '">' + ctype + '</sup>');
                Y.one('.' + uniqueclass).appendChild(node0);
                Y.one('.' + uniqueclass).removeClass(uniqueclass);
                node0.appendChild(node3.getDOMNode());
                node0.appendChild(node2.getDOMNode());
                node0.appendChild(node1.getDOMNode());
                host.toggleInlineSelectionClass([CSS.ERRSPAN]);     
            }
            this.markUpdated();
        }
    },

    _setCorrection2: function(e) {
        e.preventDefault();
        this.getDialogue({
            focusAfterHide: this._currentSelection
        }).hide();

//        this._removeCorrection();


        var form = e.currentTarget.ancestor('.atto_form'),
            ctype = form.one(SELECTORS.SELECT).get('value'),
            indc=this.get('corrtypekeys2').indexOf(ctype), 
            ctypefull= this.get('corrtypes2')[indc].descr,
            ctext = form.one(SELECTORS.TEXTAREA1).get('value'),
            regex = /(https?:\/\/([-\w\.]+)+(:\d+)?(\/([\w\/_\.]*(\?\S+)?)?)?)/ig,
            ctext = ctext.replace(regex, "<a href='$1' target='_blank'>$1</a>"),
            atext = form.one(SELECTORS.TEXTAREA2).get('value'),
            mark = form.one(SELECTORS.MARKING).get('value'),
            isfocus="no",
            host = this.get('host');


        if  (form.one(SELECTORS.CHECKBOX).get('checked')) {isfocus="yes";}      
        if (atext.trim()!="") {strike="yes";} else {strike="no";} 
            
ffff = form;
        if (ctype !== '') {
            // restore original selection, in order to be able to work on it
//            return;
            host.setSelection(this._currentSelection);
            if (this._isoncorr) {
                // replace existing correction mark:
                //  - get the orignal node
                var ynode = Y.Node(host.getSelectionParentNode().parentNode);
                //  - insert the new comment
                if (ctext!="")
                    ynode.one('.' + CSS.CORRTEXT).getDOMNode().innerHTML = '<b>'+ ctypefull + '</b> : ' + ctext;
                else ynode.one('.' + CSS.CORRTEXT).getDOMNode().innerHTML ='<b>'+ ctypefull + '</b>';
                ynode.one('.' + CSS.ALTEXT).getDOMNode().innerHTML = atext;
                if (isfocus) {ynode.one('.' + CSS.FOCUS).set('checked', 'checked');}
                //ynode.one('.' + CSS.FOCUS).getDOMNode().innerHTML = isfocus;
                //  - add correct class
                var newclass = CSS.SPAN + ' ' +CSS.SPAN1 + ' ' + CSS.BASECLASS + ctype;
                ynode.one('.' + CSS.CORRTEXT).getDOMNode().parentNode.parentNode.className = newclass;
                //  - add the correct <sup> mark
                ynode.one('sup').getDOMNode().innerHTML = ctype;
            }
            else {
                // new correction mark
                var uniqueclass = 'ts' + new Date().getTime();
                host.toggleInlineSelectionClass([CSS.SPAN]);
                host.toggleInlineSelectionClass([CSS.SPAN1]);
                if (isfocus=="yes") {  host.toggleInlineSelectionClass([CSS.FOCUS]);}
                host.toggleInlineSelectionClass([CSS.BASECLASS + ctype]);
                if ((mark=="serious")&&(strike=="yes")) host.toggleInlineSelectionClass([CSS.STRIKE]);
                host.toggleInlineSelectionClass([CSS.BASECLASS + mark]);
                host.toggleInlineSelectionClass([uniqueclass]);
                if (ctext!="")
                    node1 = Y.Node.create('<span class="' + CSS.CORRTEXT + '"> <b> ' + ctypefull + ' </b> : '+ ctext + '</span>');
                else node1 = Y.Node.create('<span class="' + CSS.CORRTEXT + '"> <b> ' + ctypefull + ' </b> '+ '</span>');
                var node0 = Y.Node.create('<span class="' + CSS.CORRSPAN + '"/>'),
                    node2 = Y.Node.create('<span class="' + CSS.ALTEXT + ' ' + CSS.ALTEXT + '_'+ mark +'">' + atext + '</span>'),
                    node3 = Y.Node.create('<sup title="' + ctext + '">' + ctype + '</sup>');
                Y.one('.' + uniqueclass).appendChild(node0);
                Y.one('.' + uniqueclass).removeClass(uniqueclass);
                node0.appendChild(node3.getDOMNode());
                node0.appendChild(node2.getDOMNode());
                node0.appendChild(node1.getDOMNode());
                host.toggleInlineSelectionClass([CSS.ERRSPAN]);     
            }
            this.markUpdated();
        }
    },

 _setCorrection3: function(e) {
        e.preventDefault();
        this.getDialogue({
            focusAfterHide: this._currentSelection
        }).hide();

//        this._removeCorrection();


        var form = e.currentTarget.ancestor('.atto_form'),
            ctype = form.one(SELECTORS.SELECT).get('value'),
            indc=this.get('corrtypekeys3').indexOf(ctype), 
            ctypefull= this.get('corrtypes3')[indc].descr,
            ctext = form.one(SELECTORS.TEXTAREA1).get('value'),
            regex = /(https?:\/\/([-\w\.]+)+(:\d+)?(\/([\w\/_\.]*(\?\S+)?)?)?)/ig,
            ctext = ctext.replace(regex, "<a href='$1' target='_blank'>$1</a>"),
            atext = form.one(SELECTORS.TEXTAREA2).get('value'),
            mark = form.one(SELECTORS.MARKING).get('value'),
            isfocus="no",
            host = this.get('host');


        if  (form.one(SELECTORS.CHECKBOX).get('checked')) {isfocus="yes";}      
        if (atext.trim()!="") {strike="yes";} else {strike="no";} 
            
ffff = form;
        if (ctype !== '') {
            // restore original selection, in order to be able to work on it
//            return;
            host.setSelection(this._currentSelection);
            if (this._isoncorr) {
                // replace existing correction mark:
                //  - get the orignal node
                var ynode = Y.Node(host.getSelectionParentNode().parentNode);
                //  - insert the new comment
                 if (ctext!="")
                    ynode.one('.' + CSS.CORRTEXT).getDOMNode().innerHTML = '<b>'+ ctypefull + '</b> : ' + ctext;
                else ynode.one('.' + CSS.CORRTEXT).getDOMNode().innerHTML ='<b>'+ ctypefull + '</b>';
                ynode.one('.' + CSS.ALTEXT).getDOMNode().innerHTML = atext;
                if (isfocus) {ynode.one('.' + CSS.FOCUS).set('checked', 'checked');}
                //ynode.one('.' + CSS.FOCUS).getDOMNode().innerHTML = isfocus;
                //  - add correct class
                var newclass = CSS.SPAN + ' ' +CSS.SPAN1 + ' ' + CSS.BASECLASS + ctype;
                ynode.one('.' + CSS.CORRTEXT).getDOMNode().parentNode.parentNode.className = newclass;
                //  - add the correct <sup> mark
                ynode.one('sup').getDOMNode().innerHTML = ctype;
            }
            else {
                // new correction mark
                var uniqueclass = 'ts' + new Date().getTime();
                host.toggleInlineSelectionClass([CSS.SPAN]);
                host.toggleInlineSelectionClass([CSS.SPAN1]);
                if (isfocus=="yes") {  host.toggleInlineSelectionClass([CSS.FOCUS]);}
                host.toggleInlineSelectionClass([CSS.BASECLASS + ctype]);
                if ((mark=="serious")&&(strike=="yes")) host.toggleInlineSelectionClass([CSS.STRIKE]);
                host.toggleInlineSelectionClass([CSS.BASECLASS + mark]);
                host.toggleInlineSelectionClass([uniqueclass]);
                if (ctext!="")
                    node1 = Y.Node.create('<span class="' + CSS.CORRTEXT + '"> <b> ' + ctypefull + ' </b> : '+ ctext + '</span>');
                else node1 = Y.Node.create('<span class="' + CSS.CORRTEXT + '"> <b> ' + ctypefull + ' </b> '+ '</span>');
                var node0 = Y.Node.create('<span class="' + CSS.CORRSPAN + '"/>'),
                    node2 = Y.Node.create('<span class="' + CSS.ALTEXT + ' ' + CSS.ALTEXT + '_'+ mark +'">' + atext + '</span>'),
                    node3 = Y.Node.create('<sup title="' + ctext + '">' + ctype + '</sup>');
                Y.one('.' + uniqueclass).appendChild(node0);
                Y.one('.' + uniqueclass).removeClass(uniqueclass);
                node0.appendChild(node3.getDOMNode());
                node0.appendChild(node2.getDOMNode());
                node0.appendChild(node1.getDOMNode());
                host.toggleInlineSelectionClass([CSS.ERRSPAN]);     
            }
            this.markUpdated();
        }
    },
 _setCorrection4: function(e) {
        e.preventDefault();
        this.getDialogue({
            focusAfterHide: this._currentSelection
        }).hide();

//        this._removeCorrection();


        var form = e.currentTarget.ancestor('.atto_form'),
            ctype = form.one(SELECTORS.SELECT).get('value'),
            indc=this.get('corrtypekeys4').indexOf(ctype), 
            ctypefull= this.get('corrtypes4')[indc].descr,
            ctext = form.one(SELECTORS.TEXTAREA1).get('value'),
            regex = /(https?:\/\/([-\w\.]+)+(:\d+)?(\/([\w\/_\.]*(\?\S+)?)?)?)/ig,
            ctext = ctext.replace(regex, "<a href='$1' target='_blank'>$1</a>"),
            atext = form.one(SELECTORS.TEXTAREA2).get('value'),
            mark = form.one(SELECTORS.MARKING).get('value'),
            isfocus="no",
            host = this.get('host');


        if  (form.one(SELECTORS.CHECKBOX).get('checked')) {isfocus="yes";}      
        if (atext.trim()!="") {strike="yes";} else {strike="no";} 
            
ffff = form;
        if (ctype !== '') {
            // restore original selection, in order to be able to work on it
//            return;
            host.setSelection(this._currentSelection);
            if (this._isoncorr) {
                // replace existing correction mark:
                //  - get the orignal node
                var ynode = Y.Node(host.getSelectionParentNode().parentNode);
                //  - insert the new comment
                 if (ctext!="")
                    ynode.one('.' + CSS.CORRTEXT).getDOMNode().innerHTML = '<b>'+ ctypefull + '</b> : ' + ctext;
                else ynode.one('.' + CSS.CORRTEXT).getDOMNode().innerHTML ='<b>'+ ctypefull + '</b>';
                ynode.one('.' + CSS.ALTEXT).getDOMNode().innerHTML = atext;
                if (isfocus) {ynode.one('.' + CSS.FOCUS).set('checked', 'checked');}
                //ynode.one('.' + CSS.FOCUS).getDOMNode().innerHTML = isfocus;
                //  - add correct class
                var newclass = CSS.SPAN + ' ' +CSS.SPAN1 + ' ' + CSS.BASECLASS + ctype;
                ynode.one('.' + CSS.CORRTEXT).getDOMNode().parentNode.parentNode.className = newclass;
                //  - add the correct <sup> mark
                ynode.one('sup').getDOMNode().innerHTML = ctype;
            }
            else {
                // new correction mark
                var uniqueclass = 'ts' + new Date().getTime();
                host.toggleInlineSelectionClass([CSS.SPAN]);
                host.toggleInlineSelectionClass([CSS.SPAN1]);
                if (isfocus=="yes") {  host.toggleInlineSelectionClass([CSS.FOCUS]);}
                host.toggleInlineSelectionClass([CSS.BASECLASS + ctype]);
                if ((mark=="serious")&&(strike=="yes")) host.toggleInlineSelectionClass([CSS.STRIKE]);
                host.toggleInlineSelectionClass([CSS.BASECLASS + mark]);
                host.toggleInlineSelectionClass([uniqueclass]);
                if (ctext!="")
                    node1 = Y.Node.create('<span class="' + CSS.CORRTEXT + '"> <b> ' + ctypefull + ' </b> : '+ ctext + '</span>');
                else node1 = Y.Node.create('<span class="' + CSS.CORRTEXT + '"> <b> ' + ctypefull + ' </b> '+ '</span>');
                var node0 = Y.Node.create('<span class="' + CSS.CORRSPAN + '"/>'),
                    node2 = Y.Node.create('<span class="' + CSS.ALTEXT + ' ' + CSS.ALTEXT + '_'+ mark +'">' + atext + '</span>'),
                    node3 = Y.Node.create('<sup title="' + ctext + '">' + ctype + '</sup>');
                Y.one('.' + uniqueclass).appendChild(node0);
                Y.one('.' + uniqueclass).removeClass(uniqueclass);
                node0.appendChild(node3.getDOMNode());
                node0.appendChild(node2.getDOMNode());
                node0.appendChild(node1.getDOMNode());
                host.toggleInlineSelectionClass([CSS.ERRSPAN]);     
            }
            this.markUpdated();
        }
    },

 _setCorrection5: function(e) {
        e.preventDefault();
        this.getDialogue({
            focusAfterHide: this._currentSelection
        }).hide();

//        this._removeCorrection();


        var form = e.currentTarget.ancestor('.atto_form'),
            ctype = form.one(SELECTORS.SELECT).get('value'),
            indc=this.get('corrtypekeys5').indexOf(ctype), 
            ctypefull= this.get('corrtypes5')[indc].descr,
            ctext = form.one(SELECTORS.TEXTAREA1).get('value'),
            regex = /(https?:\/\/([-\w\.]+)+(:\d+)?(\/([\w\/_\.]*(\?\S+)?)?)?)/ig,
            ctext = ctext.replace(regex, "<a href='$1' target='_blank'>$1</a>"),
            atext = form.one(SELECTORS.TEXTAREA2).get('value'),
            mark = form.one(SELECTORS.MARKING).get('value'),
            isfocus="no",
            host = this.get('host');


        if  (form.one(SELECTORS.CHECKBOX).get('checked')) {isfocus="yes";}      
        if (atext.trim()!="") {strike="yes";} else {strike="no";} 
            
ffff = form;
        if (ctype !== '') {
            // restore original selection, in order to be able to work on it
//            return;
            host.setSelection(this._currentSelection);
            if (this._isoncorr) {
                // replace existing correction mark:
                //  - get the orignal node
                var ynode = Y.Node(host.getSelectionParentNode().parentNode);
                //  - insert the new comment
                 if (ctext!="")
                    ynode.one('.' + CSS.CORRTEXT).getDOMNode().innerHTML = '<b>'+ ctypefull + '</b> : ' + ctext;
                else ynode.one('.' + CSS.CORRTEXT).getDOMNode().innerHTML ='<b>'+ ctypefull + '</b>';
                ynode.one('.' + CSS.ALTEXT).getDOMNode().innerHTML = atext;
                if (isfocus) {ynode.one('.' + CSS.FOCUS).set('checked', 'checked');}
                //ynode.one('.' + CSS.FOCUS).getDOMNode().innerHTML = isfocus;
                //  - add correct class
                var newclass = CSS.SPAN + ' ' +CSS.SPAN1 + ' ' + CSS.BASECLASS + ctype;
                ynode.one('.' + CSS.CORRTEXT).getDOMNode().parentNode.parentNode.className = newclass;
                //  - add the correct <sup> mark
                ynode.one('sup').getDOMNode().innerHTML = ctype;
            }
            else {
                // new correction mark
                var uniqueclass = 'ts' + new Date().getTime();
                host.toggleInlineSelectionClass([CSS.SPAN]);
                host.toggleInlineSelectionClass([CSS.SPAN1]);
                if (isfocus=="yes") {  host.toggleInlineSelectionClass([CSS.FOCUS]);}
                host.toggleInlineSelectionClass([CSS.BASECLASS + ctype]);
                if ((mark=="serious")&&(strike=="yes")) host.toggleInlineSelectionClass([CSS.STRIKE]);
                host.toggleInlineSelectionClass([CSS.BASECLASS + mark]);
                host.toggleInlineSelectionClass([uniqueclass]);
                if (ctext!="")
                    node1 = Y.Node.create('<span class="' + CSS.CORRTEXT + '"> <b> ' + ctypefull + ' </b> : '+ ctext + '</span>');
                else node1 = Y.Node.create('<span class="' + CSS.CORRTEXT + '"> <b> ' + ctypefull + ' </b> '+ '</span>');
                var node0 = Y.Node.create('<span class="' + CSS.CORRSPAN + '"/>'),
                    node2 = Y.Node.create('<span class="' + CSS.ALTEXT + ' ' + CSS.ALTEXT + '_'+ mark +'">' + atext + '</span>'),
                    node3 = Y.Node.create('<sup title="' + ctext + '">' + ctype + '</sup>');
                Y.one('.' + uniqueclass).appendChild(node0);
                Y.one('.' + uniqueclass).removeClass(uniqueclass);
                node0.appendChild(node3.getDOMNode());
                node0.appendChild(node2.getDOMNode());
                node0.appendChild(node1.getDOMNode());
                host.toggleInlineSelectionClass([CSS.ERRSPAN]);     
            }
            this.markUpdated();
        }
    },

 _setCorrection6: function(e) {
        e.preventDefault();
        this.getDialogue({
            focusAfterHide: this._currentSelection
        }).hide();

//        this._removeCorrection();


        var form = e.currentTarget.ancestor('.atto_form'),
            ctype = form.one(SELECTORS.SELECT).get('value'),
            indc=this.get('corrtypekeys6').indexOf(ctype), 
            ctypefull= this.get('corrtypes6')[indc].descr,
            ctext = form.one(SELECTORS.TEXTAREA1).get('value'),
            regex = /(https?:\/\/([-\w\.]+)+(:\d+)?(\/([\w\/_\.]*(\?\S+)?)?)?)/ig,
            ctext = ctext.replace(regex, "<a href='$1' target='_blank'>$1</a>"),
            atext = form.one(SELECTORS.TEXTAREA2).get('value'),
            mark = form.one(SELECTORS.MARKING).get('value'),
            isfocus="no",
            host = this.get('host');


        if  (form.one(SELECTORS.CHECKBOX).get('checked')) {isfocus="yes";}      
        if (atext.trim()!="") {strike="yes";} else {strike="no";} 
            
ffff = form;
        if (ctype !== '') {
            // restore original selection, in order to be able to work on it
//            return;
            host.setSelection(this._currentSelection);
            if (this._isoncorr) {
                // replace existing correction mark:
                //  - get the orignal node
                var ynode = Y.Node(host.getSelectionParentNode().parentNode);
                //  - insert the new comment
                if (ctext!="")
                    ynode.one('.' + CSS.CORRTEXT).getDOMNode().innerHTML = '<b>'+ ctypefull + '</b> : ' + ctext;
                else ynode.one('.' + CSS.CORRTEXT).getDOMNode().innerHTML ='<b>'+ ctypefull + '</b>';
                ynode.one('.' + CSS.ALTEXT).getDOMNode().innerHTML = atext;
                if (isfocus) {ynode.one('.' + CSS.FOCUS).set('checked', 'checked');}
                //ynode.one('.' + CSS.FOCUS).getDOMNode().innerHTML = isfocus;
                //  - add correct class
                var newclass = CSS.SPAN + ' ' +CSS.SPAN1 + ' ' + CSS.BASECLASS + ctype;
                ynode.one('.' + CSS.CORRTEXT).getDOMNode().parentNode.parentNode.className = newclass;
                //  - add the correct <sup> mark
                ynode.one('sup').getDOMNode().innerHTML = ctype;
            }
            else {
                // new correction mark
                var uniqueclass = 'ts' + new Date().getTime();
                host.toggleInlineSelectionClass([CSS.SPAN]);
                host.toggleInlineSelectionClass([CSS.SPAN1]);
                if (isfocus=="yes") {  host.toggleInlineSelectionClass([CSS.FOCUS]);}
                host.toggleInlineSelectionClass([CSS.BASECLASS + ctype]);
                if ((mark=="serious")&&(strike=="yes")) host.toggleInlineSelectionClass([CSS.STRIKE]);
                host.toggleInlineSelectionClass([CSS.BASECLASS + mark]);
                host.toggleInlineSelectionClass([uniqueclass]);
                if (ctext!="")
                    node1 = Y.Node.create('<span class="' + CSS.CORRTEXT + '"> <b> ' + ctypefull + ' </b> : '+ ctext + '</span>');
                else node1 = Y.Node.create('<span class="' + CSS.CORRTEXT + '"> <b> ' + ctypefull + ' </b> '+ '</span>');
                var node0 = Y.Node.create('<span class="' + CSS.CORRSPAN + '"/>'),
                    node2 = Y.Node.create('<span class="' + CSS.ALTEXT + ' ' + CSS.ALTEXT + '_'+ mark +'">' + atext + '</span>'),
                    node3 = Y.Node.create('<sup title="' + ctext + '">' + ctype + '</sup>');
                Y.one('.' + uniqueclass).appendChild(node0);
                Y.one('.' + uniqueclass).removeClass(uniqueclass);
                node0.appendChild(node3.getDOMNode());
                node0.appendChild(node2.getDOMNode());
                node0.appendChild(node1.getDOMNode());
                host.toggleInlineSelectionClass([CSS.ERRSPAN]);     
            }
            this.markUpdated();
        }
    },


    /**
     * Update the states of the buttons.
     *
     * @method _updateButtonsStates
     * @private
     */
    _updateButtonsStates: function() {
        var el = this.get('host').getSelectionParentNode().parentNode,
            sel = rangy.getSelection();

        if (!sel.rangeCount) {
            this.disableButtons('writeup11');
            this.disableButtons('writeup12');
            this.disableButtons('writeup13');
            this.disableButtons('writeup14');
            this.disableButtons('writeup15');
            this.disableButtons('writeup16');
            this.disableButtons('writeup2');
            return;
        }

        var cs = sel.getRangeAt(0);

        this._isoncorr = el.nodeName.toLowerCase() === 'span' && el.className.indexOf(CSS.SPAN) !== -1;

        if (this._isoncorr) {
            this.enableButtons('writeup2');
        }
        else {
            this.disableButtons('writeup2');
        }
        if ((cs.collapsed && !this._isoncorr) || (!cs.collapsed && this._isoncorr)) {
            this.disableButtons('writeup11');
            this.disableButtons('writeup12');
            this.disableButtons('writeup13');
            this.disableButtons('writeup14');
            this.disableButtons('writeup15');
            this.disableButtons('writeup16');
        }
        else {
            this.enableButtons('writeup11');
            this.enableButtons('writeup12');
            this.enableButtons('writeup13');
            this.enableButtons('writeup14');
            this.enableButtons('writeup15');
            this.enableButtons('writeup16');
        }
    }


}, {
    ATTRS: {
        /**
         * The list of correction types to display.
         *
         * @attribute corrtypes
         * @type array
         * @default {}
         */
        corrtypes1: {
            value: {}
        },
        corrtypes2: {
            value: {}
        },
         corrtypes3: {
            value: {}
        },
        corrtypes4: {
            value: {}
        },
        corrtypes5: {
            value: {}
        },
        corrtypes6: {
            value: {}
        },

        /**
         * The list of correction types abbreviations to display.
         *
         * @attribute corrtypekeys
         * @type array
         * @default {}
         */
        corrtypekeys1: {
            value: {}
        },
        corrtypekeys2: {
            value: {}
        },
        corrtypekeys3: {
            value: {}
        },
        corrtypekeys4: {
            value: {}
        },
        corrtypekeys5: {
            value: {}
        },
        corrtypekeys6: {
            value: {}
        }
    }
});




}, '@VERSION@', {"requires": ["moodle-editor_atto-plugin"]});
