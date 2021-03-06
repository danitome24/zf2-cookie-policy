Author:
-------

Daniel Tomé Fernández <danieltomefer@gmail.com>


Introduction:
-------------

This plugin provide us a top/bottom bar with cookie policy and a button to accept it.

Image:
------
![promisechains](https://cloud.githubusercontent.com/assets/7501990/9856217/a91cf01c-5b13-11e5-8046-8961bf9dac9d.PNG)

Instalation:
------------
To install this module you must follow this steps:

1- In your composer.json you must write:

```php
"require": {
        "dtome/cookie-policy": "dev-master",
    },
```

and

```php
"autoload": {
      "psr-4":{
        "cookiepolicy\\" : "vendor/dtome/cookie-policy"
      }
    }
```

2- Then you must run the following command line `composer update`



Configuration:
-------------
1-Enable the module on your `application.config.php`.

```php
'modules' => array(
        'cookiepolicy',
    ),
```

2- In your view/layout.phtml paste this code under javascript files call (inside of head tag).

```javascript
<script>
    $(document).ready(function () {
        var cookieName = 'cookiePolicyMyWeb';
        var message = 'Example of message. ';
        var messageButton = 'Accept';
        var days = 10;
        var moreInfoRoute = 'https://www.google.es';
        var moreInfoText = 'More info..';
        //bottom or top
        var cookieBarStyle = 'bottom';

        $.fn.cookieBar(cookieName, message, messageButton, moreInfoRoute, moreInfoText, cookieBarStyle);

        $("#cookiebar-button").click(function () {
             $.fn.createCookie(days);
        });
    });
</script>
```

3- You must copy the data files to public folder:

    data/cookieJs.js to public/js
    data/cookieStyle.css to public/css


4- In your layout.phtml define the javascript file and css file like the following:

```php
->prependStylesheet($this->basePath('css/cookieStyle.css'))

->prependFile($this->basePath('js/cookieJs.js'))
```

Usage:
------

On your `layout.phtml` you must add :

```php
<?php echo $this->cookiePolicy(); ?>
```
