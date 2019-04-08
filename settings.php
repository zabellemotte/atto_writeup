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

defined('MOODLE_INTERNAL') || die();


$ADMIN->add('editoratto', new admin_category('atto_writeup', new lang_string('pluginname', 'atto_writeup')));

$settings = new admin_settingpage('atto_writeup_settings', new lang_string('settings', 'atto_writeup'));
if ($ADMIN->fulltree) {
    $name = new lang_string('corrtypes1', 'atto_writeup');
    $desc = new lang_string('corrtypes1_desc', 'atto_writeup');
    $default = new lang_string('corrtypes1_default', 'atto_writeup');
    $setting1 = new admin_setting_configtextarea('atto_writeup/corrtypes1', $name, $desc, $default);
    $settings->add($setting1);
    $name = new lang_string('corrtypes2', 'atto_writeup');
    $desc = new lang_string('corrtypes2_desc', 'atto_writeup');
    $default = new lang_string('corrtypes2_default', 'atto_writeup');
    $setting2 = new admin_setting_configtextarea('atto_writeup/corrtypes2', $name, $desc, $default);
    $settings->add($setting2);
    $name = new lang_string('corrtypes3', 'atto_writeup');
    $desc = new lang_string('corrtypes3_desc', 'atto_writeup');
    $default = new lang_string('corrtypes3_default', 'atto_writeup');
    $setting3 = new admin_setting_configtextarea('atto_writeup/corrtypes3', $name, $desc, $default);
    $settings->add($setting3);
    $name = new lang_string('corrtypes4', 'atto_writeup');
    $desc = new lang_string('corrtypes4_desc', 'atto_writeup');
    $default = new lang_string('corrtypes4_default', 'atto_writeup');
    $setting4 = new admin_setting_configtextarea('atto_writeup/corrtypes4', $name, $desc, $default);
    $settings->add($setting4);
    $name = new lang_string('corrtypes5', 'atto_writeup');
    $desc = new lang_string('corrtypes5_desc', 'atto_writeup');
    $default = new lang_string('corrtypes5_default', 'atto_writeup');
    $setting5 = new admin_setting_configtextarea('atto_writeup/corrtypes5', $name, $desc, $default);
    $settings->add($setting5);
    $name = new lang_string('corrtypes6', 'atto_writeup');
    $desc = new lang_string('corrtypes6_desc', 'atto_writeup');
    $default = new lang_string('corrtypes6_default', 'atto_writeup');
    $setting6 = new admin_setting_configtextarea('atto_writeup/corrtypes6', $name, $desc, $default);
    $settings->add($setting6);
}
