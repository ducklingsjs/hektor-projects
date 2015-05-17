'use strict';

import Handlebars from 'handlebars/runtime';

Handlebars.registerHelper('now', () => new Date());
