<?php

$products = [
    [
        'id'           => 1,
        'product_name' => 'TBUZ',
        'retail_price' => '',
        'actual_price' => '0.00',
        'image'        => 'images/TBUZ.png',
        'description'  => '&lt;p&gt;Tom Busby brings you 40+ years of experience rolled up into one single service, dedicated to trading the odds and making money a simple process any trader can follow. You get a weekly planning session, weekly trade session, flash briefings during peak volatility, and trade signals sent directly to your text and email inbox.&lt;/p&gt;' 
    ],
    [
        'id'           => 2,
        'product_name' => 'TSPY',
        'retail_price' => '',
        'actual_price' => '0.00',
        'image'        => 'images/TSPY.png',
        'description'  => '&lt;p&gt;Simple. Effective. Profitable. Tom Busby&#39;s T-SPY Pro offers you a trade service dedicated solely to trading just the SPY S&P 500 ETF.&lt;/p&gt;' 
    ],
    [
        'id'           => 3,
        'product_name' => 'High Noon Swing Trade Alerts',
        'retail_price' => '',
        'actual_price' => '0.00',
        'image'        => 'images/HighNoon.png',
        'description'  => '&lt;p&gt;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus felis justo, volutpat ut nibh ac, laoreet egestas mauris. Etiam tempor lacinia neque. Maecenas euismod pharetra neque. Aliquam erat sapien, scelerisque et ullamcorper sit amet, convallis eu ante. In rhoncus aliquet est, vel sagittis sapien efficitur eget. Aliquam pharetra, sapien nec posuere venenatis, felis ipsum tristique ex, ut molestie odio erat eu dui. Suspendisse quis leo orci.&lt;/p&gt;' 
    ],
    [
        'id'           => 4,
        'product_name' => 'TCASH',
        'retail_price' => '',
        'actual_price' => '0.00',
        'image'        => 'images/TCASH.png',
        'description'  => '&lt;p&gt;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus felis justo, volutpat ut nibh ac, laoreet egestas mauris. Etiam tempor lacinia neque. Maecenas euismod pharetra neque. Aliquam erat sapien, scelerisque et ullamcorper sit amet, convallis eu ante. In rhoncus aliquet est, vel sagittis sapien efficitur eget. Aliquam pharetra, sapien nec posuere venenatis, felis ipsum tristique ex, ut molestie odio erat eu dui. Suspendisse quis leo orci.&lt;/p&gt;' 
    ],
    [
        'id'           => 5,
        'product_name' => '24-Hour Global TradeRoom',
        'retail_price' => '',
        'actual_price' => '0.00',
        'image'        => 'images/24HourGlobalTradeRoom.png',
        'description'  => '&lt;p&gt;The DTI Traderoom is a community unlike any other, open 24 / 5 and nothing but like-minding traders showing up to communicate, elaborate together and make money.&lt;/p&gt;' 
    ],
    [
        'id'           => 6,
        'product_name' => 'Trade of the Day with TGAS',
        'retail_price' => '',
        'actual_price' => '0.00',
        'image'        => 'images/TradeOfTheDay.png',
        'description'  => '&lt;p&gt;Tom Busby mentored DTI&#39;s Chief Instructor Geof Smith into the trader he is today. So it makes sense for Geof to run a trade service of his own. With a focus on swing trading stock options and special bonus trades on commodity futures (Geof&#39;s bread and butter trading!), you get actionable daily insights to set orders and create a watch list full of seasonally strong trade ideas.&lt;/p&gt;' 
    ]
];

echo json_encode($products, JSON_PRETTY_PRINT);