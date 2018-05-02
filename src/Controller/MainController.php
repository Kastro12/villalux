<?php
/**
 * Created by PhpStorm.
 * User: Sale
 * Date: 3/21/2018
 * Time: 4:20 PM
 */

namespace App\Controller;


use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class MainController extends AbstractController
{
    /**
     * @Route("/", name="homepage")
     */
    public function homepage()
    {
        return $this->render('base.html.twig');
    }

    /**
     * @Route("/admin", name="admin")
     */
    public function admin()
    {
        return $this->render('design/admin.html.twig');
    }

    /**
     * @Route("/gallery")
     */
    public function gallery()
    {
        return $this->render('server/gallery_db.html.twig');
    }

    /**
     * @Route("/book_it", name="book_it")
     */
    public function bookIt()
    {
        return $this->render('server/book_it.html.twig');
    }

    /**
     * @Route("/registration", name="registration")
     */
    public function registration()
    {
        return $this->render('server/registration.html.twig');
    }



}