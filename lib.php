<?php
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
 * @copyright  2014 Université de Lausanne
 * @author     Nicolas Dunand <nicolas.dunand@unil.ch>
 * @license    http://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */

/**
 * Initialise the js strings required for this plugin
 */
function atto_writeup_strings_for_js() {
    global $PAGE;

    $PAGE->requires->strings_for_js(array(
                                        'addcomment',
                                        'dialogtitle1',
                                        'dialogtitle2',
                                        'dialogtitle3',  
                                        'dialogtitle4',
                                        'dialogtitle5',
                                        'dialogtitle6',                                     
                                        'corrtype',
                                        'corrtext',
                                        'altext',
                                        'marking',
                                        'focus',
                                        'serious',
                                        'normal',
                                        'positive',
                                        'fulltexttitle',
                                        'addmark1',
                                        'addmark2',
                                        'addmark3',
                                        'addmark4',
                                        'addmark5',
                                        'addmark6',                                        
                                        'removemark',
                                        'displayfulltext'
                                    ),
                                    'atto_writeup');
}


/**
 * Set params for this plugin
 * @param string $elementid
 */
function atto_writeup_params_for_js($elementid, $options, $fpoptions) {
    // Pass the number of visible groups as a param.
    $corrtypes1 = get_config('atto_writeup', 'corrtypes1');
    $list1 = explode("\n", (str_replace("\r", '', $corrtypes1)));
    $types1 = array();
    $keys1 = array();
    $matches1 = null;
    foreach($list1 as $item) {
        if (preg_match('/^([^=]+)\s?=\s?(.*)$/', $item, $matches1)) {
            $types1[] = array('abbr' => trim($matches1[1]), 'descr' => trim($matches1[2]));
            $keys1[] = trim($matches1[1]);
        }
    }
    $corrtypes2 = get_config('atto_writeup', 'corrtypes2');
    $list2 = explode("\n", (str_replace("\r", '', $corrtypes2)));
    $types2 = array();
    $keys2 = array();
    $matches2 = null;
    foreach($list2 as $item) {
        if (preg_match('/^([^=]+)\s?=\s?(.*)$/', $item, $matches2)) {
            $types2[] = array('abbr' => trim($matches2[1]), 'descr' => trim($matches2[2]));
            $keys2[] = trim($matches2[1]);
        }
    }
    $corrtypes3 = get_config('atto_writeup', 'corrtypes3');
    $list3 = explode("\n", (str_replace("\r", '', $corrtypes3)));
    $types3 = array();
    $keys3 = array();
    $matches3 = null;
    foreach($list3 as $item) {
        if (preg_match('/^([^=]+)\s?=\s?(.*)$/', $item, $matches3)) {
            $types3[] = array('abbr' => trim($matches3[1]), 'descr' => trim($matches3[2]));
            $keys3[] = trim($matches3[1]);
        }
    }
    $corrtypes4 = get_config('atto_writeup', 'corrtypes4');
    $list4 = explode("\n", (str_replace("\r", '', $corrtypes4)));
    $types4 = array();
    $keys4 = array();
    $matches4 = null;
    foreach($list4 as $item) {
        if (preg_match('/^([^=]+)\s?=\s?(.*)$/', $item, $matches4)) {
            $types4[] = array('abbr' => trim($matches4[1]), 'descr' => trim($matches4[2]));
            $keys4[] = trim($matches4[1]);
        }
    }
    $corrtypes5 = get_config('atto_writeup', 'corrtypes5');
    $list5 = explode("\n", (str_replace("\r", '', $corrtypes5)));
    $types5 = array();
    $keys5 = array();
    $matches5 = null;
    foreach($list5 as $item) {
        if (preg_match('/^([^=]+)\s?=\s?(.*)$/', $item, $matches5)) {
            $types5[] = array('abbr' => trim($matches5[1]), 'descr' => trim($matches5[2]));
            $keys5[] = trim($matches5[1]);
        }
    }
    $corrtypes6 = get_config('atto_writeup', 'corrtypes6');
    $list6 = explode("\n", (str_replace("\r", '', $corrtypes6)));
    $types6 = array();
    $keys6 = array();
    $matches6 = null;
    foreach($list6 as $item) {
        if (preg_match('/^([^=]+)\s?=\s?(.*)$/', $item, $matches6)) {
            $types6[] = array('abbr' => trim($matches6[1]), 'descr' => trim($matches6[2]));
            $keys6[] = trim($matches6[1]);
        }
    }


    return array('corrtypes1' => $types1,'corrtypes2' => $types2,'corrtypes3' => $types3,'corrtypes4' => $types4,'corrtypes5' => $types5,'corrtypes6' => $types6, 'corrtypekeys1' => $keys1, 'corrtypekeys2' => $keys2,'corrtypekeys3' => $keys3, 'corrtypekeys4' => $keys4, 'corrtypekeys5' => $keys5, 'corrtypekeys6' => $keys6);
}
