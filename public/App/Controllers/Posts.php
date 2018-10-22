<?php

namespace App\Controllers;

use \Core\View;
use App\Models\Post;

class Posts extends \Core\Controller {
    /**
     * Show the index page
     *
     * @return void
     */
    public function indexAction() {
        $posts = Post::getAll();

        View::renderTemplate('Posts/index.html', [
            'posts' => $posts
        ]);
    }
}