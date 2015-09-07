<?php
/**
 * Cookie policy module: Open plugin to show jquery message about cookies
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 *
 */
/**
 * @author Daniel Tomé <danieltomefer@gmail.com>
 */
namespace CookiePolicy\View\Helper;

use Zend\ServiceManager\ServiceLocatorInterface;
use Zend\ServiceManager\ServiceLocatorAwareInterface;
use Zend\View\Helper\AbstractHelper;

class CookiePolicyHelper extends AbstractHelper implements ServiceLocatorAwareInterface
{

    public function __invoke()
    {
        return '<div id="cookiebar-container-cookie"></div>';
    }

    public function setServiceLocator(ServiceLocatorInterface $serviceLocator)
    {
        $this->serviceLocator = $serviceLocator;
        return $this;
    }
    public function getServiceLocator()
    {
        return $this->serviceLocator;
    }
}
