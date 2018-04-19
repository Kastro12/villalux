<?php
/**
 * Created by PhpStorm.
 * User: Sale
 * Date: 4/19/2018
 * Time: 1:12 AM
 */

namespace App\Controller;


use App\Entity\Apartment;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Method;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;

class ApartmentController extends AbstractController
{
    /**
     * @Route("/admin/apartment/json")
     * @Method("GET")
     */
    public function readApartment()
    {
    $em = $this->getDoctrine()->getManager();
    $apartment=$em->getRepository('App:Apartment')
        ->findAll();

    $dat = [
        'apartment' =>$apartment
    ];

    return $this->json($dat);

    }

    /**
     * @Route("/admin/insert_apartment")
     * @Method("POST")
     */
    public function insertApartment(Request $request)
    {

        $d = $request->getContent();
        $data = json_decode($d,true);

        $apartment = new Apartment();

        foreach ($data as $row)
        {
            $apartment->setName($row['name']);
            $apartment->setPrice($row['price']);
            $apartment->setText($row['text']);
        }

        $em=$this->getDoctrine()->getManager();
        $em->persist($apartment);
        $em->flush();


        return new Response('Success create');

    }

    /**
     * @Route("/admin/delete_apartment")
     * @Method("POST")
     */
    public function deleteApartment(Request $request)
    {
        $del = $request->getContent();
        $data = json_decode($del,true);

        $em = $this->getDoctrine()->getManager();
        $apartment = $em->getRepository(Apartment::class)
            ->find($data);
        $em->remove($apartment);
        $em->flush();


        return new Response('delete success');
    }

}