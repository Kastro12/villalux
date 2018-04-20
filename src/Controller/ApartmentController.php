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

    $data = [
        'apartment' =>$apartment
    ];

    return $this->json($data);
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

    /**
     * @Route("/admin/apartment/{id}")
     * @Method("GET")
     */
    public function readOneAp($id)
    {
        $data = json_decode($id);

        $em = $this->getDoctrine()->getManager();
        $apId = $em->getRepository(Apartment::class)
            ->findOneBy(array(
                'id' => $data
            ));
        return $this->json($apId);
    }

    /**
     * @Route("/admin/apartment/{id}")
     * @Method("POST")
     */
    public function updateAp(Request $request, $id)
    {
        $idData = json_decode($id);
        $ap = $request->getContent();
        $data = json_decode($ap,true);

       $em = $this->getDoctrine()->getManager();
       $updateAp = $em->getRepository(Apartment::class)
           ->find($idData);

       if (!$updateAp)
       {
            throw $this->createNotFoundException('No product found for id '.$idData);
       }

       foreach ($data as $row)
       {
           $updateAp->setName($row['name']);
           $updateAp->setPrice($row['price']);
           $updateAp->setText($row['text']);
       }
        $em->flush();


        return $this->json($row);
    }

}