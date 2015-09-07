Author:
-------

Daniel Tomé Fernández <danieltomefer@gmail.com>


Introduction:
-------------

This plugin provide us a top/bottom bar with cookie policy and a button to accept it.


Configuration:
-------------

1- In your view/layout.phtml paste this code under javascript files call (inside of head tag).

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

2- You must copy the data files to public folder:

    data/cookieJs.js to public/js
    data/cookieStyle.css to public/css


3- In your layout.phtml define the javascript file and css file like the following:

```php
->prependStylesheet($this->basePath('css/cookieStyle.css'))

->prependFile($this->basePath('js/cookieJs.js'))
```

4- On the same layout.phtml paste this code inside.

```php
<?php echo $this->cookiePolicy(); ?>
```