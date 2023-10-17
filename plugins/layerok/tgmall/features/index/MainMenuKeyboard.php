<?php namespace Layerok\TgMall\Features\Index;

use Layerok\TgMall\Classes\Keyboards\InlineKeyboard;
use Layerok\TgMall\Classes\Traits\CallbackData;
use Layerok\TgMall\Classes\Traits\Lang;
use Event;

class MainMenuKeyboard extends InlineKeyboard
{
    use Lang;
    use CallbackData;

    public function build(): void
    {
        Event::fire('tgmall.keyboard.main.beforeBuild', [$this]);
        $this->listen('afterAppend', function($event, $params) {
            $ci = $this->getColumnIndex();
            $ri = $this->getRowIndex();
            if($ri == 1 && $ci == 1) {
                $this->nextRow()
                    ->append([
                        'text' => self::lang('spots.change'),
                        'callback_data' => self::prepareCallbackData(
                            'list_spots'
                        )
                    ]);

            };


        });
        $this->append([
                'text' => self::lang('buttons.categories'),
                'callback_data' => self::prepareCallbackData('category_items', [])
            ])
            ->append([
                'text' => self::lang('buttons.cart'),
                'callback_data' => self::prepareCallbackData(
                    'cart',
                    ['type' => 'list']
                )
            ])
            ->nextRow()
            ->append([
                'text' => '🌐 Вебсайт',
                'callback_data' => self::prepareCallbackData(
                    'website'
                )
            ]);
    }

}
