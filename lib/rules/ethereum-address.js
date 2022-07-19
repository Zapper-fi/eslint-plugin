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
    type: 'problem',
    docs: {
      description: 'Ethereum addresses must be lowercase',
      recommended: false,
    },
    fixable: 'code',
    schema: [],
    messages: {
      avoidEthereumAddressUppercase: 'Avoid using Ethereum addresses with uppercase characters',
    },
  },

  create(context) {
    return {
      Literal(node) {
        const nodeValue = node.raw.toString();

        if (isAddress(nodeValue) && nodeValue.toLowerCase() !== nodeValue) {
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
