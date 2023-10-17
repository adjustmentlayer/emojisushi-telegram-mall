<?php

namespace Layerok\TgMall\Features\Checkout\Handlers;

use Layerok\TgMall\Classes\Callbacks\CallbackQueryBus;
use Layerok\TgMall\Classes\Callbacks\Handler;
use Layerok\TgMall\Classes\Traits\Lang;
use Layerok\TgMall\Facades\EmojisushiApi;
use Layerok\TgMall\Features\Checkout\Keyboards\PreparePaymentChangeKeyboard;

class ChosePaymentMethodHandler extends Handler
{
    use Lang;

    protected string $name = "chose_payment_method";

    public function run()
    {
        $id = $this->arguments['id'];
        $this->getState()->setOrderInfoPaymentMethodId($id);

        $method = EmojisushiApi::getPaymentMethod(['id' => $id]);

        if ($method['code'] == 'cash') {
            // наличными
            $k = new PreparePaymentChangeKeyboard();
            $this->sendMessage([
                'text' => self::lang('texts.prepare_change_question'),
                'reply_markup' => $k->getKeyboard()
            ]);
            $this->getState()->setMessageHandler(null);
            return;
        }

        CallbackQueryBus::instance()->make('list_delivery_methods', []);

    }
}
