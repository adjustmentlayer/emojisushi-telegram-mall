<?php

namespace Layerok\TgMall\Features\Checkout\Handlers;

use Layerok\TgMall\Classes\Callbacks\Handler;
use Layerok\TgMall\Classes\Traits\Lang;
use Layerok\TgMall\Features\Checkout\Messages\OrderPhoneMessageHandler;

class EnterPhoneHandler extends Handler
{
    use Lang;
    protected string $name = "enter_phone";

    public function run()
    {
        $this->sendMessage([
            'text' => self::lang('texts.type_your_phone'),
        ]);

        $this->getState()->setMessageHandler(OrderPhoneMessageHandler::class);
    }
}
