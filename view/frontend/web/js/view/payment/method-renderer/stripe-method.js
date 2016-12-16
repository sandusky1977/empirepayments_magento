/**
 * Empire_Payments Magento JS component
 *
 * @category    Empire
 * @package     Empire_Payments
 * @author      Robert Sandusky
 * @copyright   CBDOilBuy (https://cbdoilbuy.com)
 * @license     http://opensource.org/licenses/osl-3.0.php  Open Software License (OSL 3.0)
 */
/*browser:true*/
/*global define*/
define(
    [
        'Magento_Payment/js/view/payment/cc-form',
        'jquery',
        'Magento_Payment/js/model/credit-card-validation/validator'
    ],
    function (Component, $) {
        'use strict';

        return Component.extend({
            defaults: {
                template: 'Empire_Payments/payment/payments-form'
            },

            getCode: function() {
                return 'empire_payments';
            },

            isActive: function() {
                return true;
            },

            validate: function() {
                var $form = $('#' + this.getCode() + '-form');
                return $form.validation() && $form.validation('isValid');
            }
        });
    }
);
