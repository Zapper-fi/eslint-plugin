/**
 * @fileoverview Ethereum addresses must be lowercase
 * @author Zapper
 */
'use strict';

const { isAddress } = require('@ethersproject/address');

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

/** @type {import('eslint').Rule.RuleModule} */
module.exports = {
  name: 'ethereum-address',
  meta: {
    type: 'problem', // `problem`, `suggestion`, or `layout`
    docs: {
      description: 'Ethereum addresses must be lowercase',
      recommended: false,
      url: null, // URL to the documentation page for this rule
    },
    fixable: 'code', // Or `code` or `whitespace`
    schema: [], // Add a schema if the rule has options
    messages: {
      avoidEthereumAddressUppercase: 'Avoid using Ethereum addresses with uppercase characters',
    },
  },

  create(context) {
    return {
      TemplateLiteral(node) {
        const nodeValue = node.quasis[0].value.raw;
        const lowercasedValue = nodeValue.toLowerCase();

        if (isAddress(lowercasedValue) && lowercasedValue !== nodeValue) {
          context.report({
            node,
            messageId: 'avoidEthereumAddressUppercase',
            fix: function (fixer) {
              return fixer.replaceText(node, '`' + lowercasedValue + '`');
            },
          });
        }
      },
      Literal(node) {
        const nodeValue = node.value;
        if (typeof node.value !== 'string') return;
        const lowercasedValue = nodeValue.toLowerCase();

        if (isAddress(lowercasedValue) && lowercasedValue !== nodeValue) {
          context.report({
            node,
            messageId: 'avoidEthereumAddressUppercase',
            fix: function (fixer) {
              return fixer.replaceText(node, `'${lowercasedValue}'`);
            },
          });
        }
      },
    };
  },
};
