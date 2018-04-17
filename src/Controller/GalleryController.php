<?php
/**
 * Created by PhpStorm.
 * User: Sale
 * Date: 3/29/2018
 * Time: 12:12 AM
 */

namespace App\Controller;




use App\Entity\Gallery;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Method;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request as Request;
use Symfony\Component\HttpFoundation\Response;


class GalleryController extends AbstractController
{

    public function insertImage()
    {

    }

    /**
     * @Route("/images/json")
     * @Method("GET")
     */
    public function readImage()
    {
        $em = $this->getDoctrine()->getManager();
        $images=$em->getRepository('App:Gallery')
            ->findAll();

        $data = [
            'images' =>$images
       ];

        return $this->json($data);

    }

    /**
     * @Route("/admin/insert_img")
     * @Method("POST")
     */
    public function createImg(Request $request)
    {

       $d = $request->getContent();
        $data = json_decode($d,true);

        $gallery = new Gallery();
        //zato sto mi je niz u nizu. bez foreach bilo bi $data[0]['img_name]
        foreach ($data as $row) {
            $gallery->setImgName($row['img_name']);
            $gallery->setCategory($row['category']);
            $gallery->setText($row['text']);
        }
        $em=$this->getDoctrine()->getManager();
        $em->persist($gallery);
        $em->flush();


        return new Response('Ovo ce raditi');

    }



}