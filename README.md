magento2-Empire_Payments
======================

Empire payment gateway Magento2 extension

Install
=======

1. Go to Magento2 root folder

2. Enter following commands to install module:

    ```bash
    composer config repositories.empirepayments_magento git https://github.com/sandusky1977/empirepayments_magento.git
    composer require empire/payments:dev-master
    ```
   Wait while dependencies are updated.

3. Enter following commands to enable module:

    ```bash
    php bin/magento module:enable Empire_Payments --clear-static-content
    php bin/magento setup:upgrade
    ```
4. Enable and configure Empire in Magento Admin under Stores/Configuration/Payment Methods/Empire Payments

