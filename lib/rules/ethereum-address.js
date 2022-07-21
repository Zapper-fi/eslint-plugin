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
      Literal(node) {
        const nodeValue = node.raw.toString();
        const lowercasedValue = nodeValue.toLowerCase();

        if (isAddress(lowercasedValue) && lowercasedValue !== nodeValue) {
          context.report({
            node,
            messageId: 'avoidEthereumAddressUppercase',
            fix: function (fixer) {
              const sourceCode = context.getSourceCode();
              const addressIndexRange = sourceCode.ast.range;
              const lowercasedAddress = sourceCode.text.toLowerCase();

              return fixer.replaceTextRange(addressIndexRange, lowercasedAddress);
            },
          });
        }
      },
    };
  },
};
