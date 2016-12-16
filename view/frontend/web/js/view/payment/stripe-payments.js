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
        'uiComponent',
        'Magento_Checkout/js/model/payment/renderer-list'
    ],
    function (
        Component,
        rendererList
    ) {
        'use strict';
        rendererList.push(
            {
                type: 'empire_payments',
                component: 'Empire_Payments/js/view/payment/method-renderer/payments-method'
            }
        );
        /** Add view logic here if needed */
        return Component.extend({});
    }
);