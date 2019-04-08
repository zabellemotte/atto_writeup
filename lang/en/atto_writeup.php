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

$string['pluginname'] = 'WriteUp';
$string['settings'] = 'Inline text writeup settings';
$string['corrtypes1'] = 'WFO';
$string['corrtypes1_desc'] = 'Please enter one WFO correction type per line, in the form "abbreviation = description".<br><strong>Warning:</strong> each abbreviation must be unique!';
$string['corrtypes1_default'] = '
Cap = Capitalize
CompSup =  Comparative/Superlative
CouUnc= Countable/Uncountable
PrefSuff= Prefix/Suffix
SingPlu = Singular/Plural
Spl= Spelling
VForm = Verb Form
';
$string['corrtypes2'] = 'VOC';
$string['corrtypes2_desc'] = 'Please enter one VOC correction type per line, in the form "abbreviation = description".<br><strong>Warning:</strong> each abbreviation must be unique!';
$string['corrtypes2_default'] = '
Comp = Compound
Coll= Collocation
Idiom = Idiomatic 
MeanUncl = Meaning Is Unclear
Red = Redundant
';
$string['corrtypes3'] = 'GRAM';
$string['corrtypes3_desc'] = 'Please enter one GRAM correction type per line, in the form "abbreviation = description".<br><strong>Warning:</strong> each abbreviation must be unique!';
$string['corrtypes3_default'] = '
Compl= Complementation
Det= Determiner parallel structures
Poss= Possessive case
Prep= Preposition
ProAntAgr= Pronoun Antecedent Agreement
SVAgr = Subject/Verb Agreement
VTe = Verb Tense
VVoi = Verb Voice
';
$string['corrtypes4'] = 'SYNTH';
$string['corrtypes4_desc'] = 'Please enter one SYNT correction type per line, in the form "abbreviation = description".<br><strong>Warning:</strong> each abbreviation must be unique!';
$string['corrtypes4_default'] = '
AdjAdvPos = Adjective/Adverb Position
Incomp = Incomplete
IndSpeech = Indirect Speech
Quest = Question Structure
Link = Link Word 
';
$string['corrtypes5'] = 'PUNCT';
$string['corrtypes5_desc'] = 'Please enter one PUNCT correction type per line, in the form "abbreviation = description".<br><strong>Warning:</strong> each abbreviation must be unique!';
$string['corrtypes5_default'] = '
PuncMiss = Missing Punctuation 
PuncConf = Punctuation Confusion 
PuncRed = Redundant Punctuation
';
$string['corrtypes6'] = 'STY';
$string['corrtypes6_desc'] = 'Please enter one STY correction type per line, in the form "abbreviation = description".<br><strong>Warning:</strong> each abbreviation must be unique!';
$string['corrtypes6_default'] = '
Reg = Register 
Rep = Repetition
??? = Unclear phrase or sentence
Wordy = Wordiness 
';
$string['addcomment'] = 'Add';
$string['corrtype'] = 'Correction type';
$string['corrtext'] = 'Comment';
$string['focus'] = 'Focus mark';
$string['marking'] = 'Marking';
$string['serious'] = 'Serious error';
$string['normal'] = 'Normal error';
$string['positive'] = 'Well done';
$string['altext'] = 'Alternate text';
$string['dialogtitle1'] = 'Add/modify a "Word for other" mark';
$string['dialogtitle2'] = 'Add/modify a "Vocabulary" mark';
$string['dialogtitle3'] = 'Add/modify a "Grammar" mark';
$string['dialogtitle4'] = 'Add/modify a "Syntax" mark';
$string['dialogtitle5'] = 'Add/modify a "Punctuation" mark';
$string['dialogtitle6'] = 'Add/modify a "Style" mark';
$string['fulltexttitle'] = 'Text with all marks and comments';
$string['addmark1'] = 'Add a "Word for other" correction mark';
$string['addmark2'] = 'Add a "Vocabulary" correction mark';
$string['addmark3'] = 'Add a "Grammar" correction mark';
$string['addmark4'] = 'Add a "Syntax" correction mark';
$string['addmark5'] = 'Add a "Punctuation" correction mark';
$string['addmark6'] = 'Add a Style" correction mark';
$string['removemark'] = 'Remove this correction mark';
$string['displayfulltext'] = 'Display text with correction marks';
$string['privacy:metadata'] = 'The atto_writeup plugin does not store any personal data.';

