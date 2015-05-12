// All imports are moved to the top of the script. That means
// that marionette would be loaded before $ is assigned to
// Backbone and it would break everything. This is the
// simplest way to work around that issue.

import Backbone from 'backbone';
import $ from 'jquery';
Backbone.$ = $;
