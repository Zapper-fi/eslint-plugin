/**
 * @fileoverview Ethereum addresses must be lowercase
 * @author Zapper
 */
'use strict';

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const rule = require('../../../lib/rules/ethereum-address');
const RuleTester = require('eslint').RuleTester;

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

const ruleTester = new RuleTester();
ruleTester.run('ethereum-address', rule, {
  valid: [
    '0xe27bff97ce92c3e1ff7aa9f86781fdd6d48f5ee9',
    'test(0xe27bff97ce92c3e1ff7aa9f86781fdd6d48f5ee9)',
    'test({ address: 0xe27bff97ce92c3e1ff7aa9f86781fdd6d48f5ee9 })',
  ],

  invalid: [
    {
      code: '0xE27BFF97CE92C3E1FF7AA9F86781FDD6D48F5EE9',
      errors: [
        {
          message: 'Avoid using Ethereum addresses with uppercase characters',
          type: 'Literal',
        },
      ],
      output: '0xe27bff97ce92c3e1ff7aa9f86781fdd6d48f5ee9',
    },
    {
      code: 'this.test(0xAAAAFF97CE92C3E1FF7AA9F86781FDD6D48F5EE9)',
      errors: [
        {
          message: 'Avoid using Ethereum addresses with uppercase characters',
          type: 'Literal',
        },
      ],
      output: 'this.test(0xaaaaff97ce92c3e1ff7aa9f86781fdd6d48f5ee9)',
    },
  ],
});
