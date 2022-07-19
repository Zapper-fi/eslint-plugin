/**
 * @fileoverview Ethereum addresses must be lowercased
 * @author Zapper
 */
'use strict';

const { rule, name } = require('../lib/rules/ethereum-address');

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

//------------------------------------------------------------------------------
// Plugin Definition
//------------------------------------------------------------------------------

const config = {
  rule: { [name]: rule },
};

module.exports = config;
