AUTOMATIC NODETITLE
====================

This is a lightweight module that allows the node title to be generated
automatically. The node title field can be hidden on the node form, or automatic
generation can be set occur only when the title field is left empty.

Tokens can be used as replacement patterns in the auto-generated title. For
example, the token [current-user:name] would be replaced with the currently
logged in user's name.


Requirements
-------------

- This module requires Backdrop 1.1 or higher.


Installation
------------

- Install this module using the official Backdrop CMS instructions at
  https://backdropcms.org/guide/modules

- Edit a content type to configure automatic title generation. Content types are
  configured individually at Administration > Structure > Content
  types (admin/structure/types)


License
-------

This project is GPL v2 software. See the LICENSE.txt file in this directory for
complete text.


Current Maintainers
-------------------

- Andy Martha (https://github.com/biolithic)
- Seeking co-maintainers


Credits
-------

* Special thanks go to Wolfgang Ziegler <https://www.drupal.org/u/fago>.

* This module is based on the Auto NodeTitle module for Drupal which was written
  and maintained by a large number of contributors.

* Ported to Backdrop by biolithic <https://github.com/biolithic>.
