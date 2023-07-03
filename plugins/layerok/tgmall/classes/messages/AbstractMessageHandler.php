<?php namespace Layerok\TgMall\Classes\Messages;

use Layerok\TgMall\Classes\Constants;
use Layerok\TgMall\Classes\Traits\Lang;
use Layerok\TgMall\Models\State;
use OFFLINE\Mall\Models\Cart;
use OFFLINE\Mall\Models\Customer;
use Telegram\Bot\Api;
use Telegram\Bot\Objects\Update;

abstract class AbstractMessageHandler implements MessageHandlerInterface
{
    use Lang;

    protected Update $update;

    protected Api $telegram;

    /** @var State */
    protected $state;

    protected $chat;

    protected $text;

    /** @var Customer */
    protected $customer;

    /** @var Cart */
    protected $cart;

    public function validate(): bool {
        return true;
    }

    public function handleErrors(): void { }

    public function __construct(Api $telegram, Update $update, State $state) {
        $this->update = $update;
        $this->telegram = $telegram;
        $this->state = $state;

        $this->chat = $this->update->getChat();
        $this->text = $this->update->getMessage()->text;

        $this->cart = Cart::byUser($this->getCustomer()->user);
    }


    public function start()
    {
        $isValid = $this->validate();

        if (!$isValid) {
            $this->handleErrors();
            return;
        }

        $this->handle();

    }

    public function getChatId()
    {
        return $this->getTelegramUser()->chat_id;
    }

    public function getCustomer() {
        return $this->state->getCustomer();
    }

    public function getTelegramUser() {
        return $this->state->user;
    }

    public function getCart(): Cart
    {
        return $this->cart;
    }

    public function sendMessage($params) {
        try {
            $this->telegram->sendMessage(
                array_merge($params, ['chat_id' => $this->getChatId()])
            );
        } catch (\Exception $e) {
            \Log::warning("Caught Exception ('{$e->getMessage()}')\n{$e}\n");
        }

    }

    abstract public function handle();

}
