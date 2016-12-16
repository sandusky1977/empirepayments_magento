<?php
/**
 * Payment CC Types Source Model
 *
 * @category    Empire
 * @package     Empire_Payments
 * @author      Robert Sandusky
 * @copyright   CBDOilBuy.com (https://cbdoilbuy.com)
 * @license     http://opensource.org/licenses/osl-3.0.php  Open Software License (OSL 3.0)
 */

namespace Empire\Payments\Model\Source;

class Cctype extends \Magento\Payment\Model\Source\Cctype
{
    /**
     * @return array
     */
    public function getAllowedTypes()
    {
        return array('VI', 'MC', 'AE', 'DI', 'JCB', 'OT');
    }
}
