<?php
/**
 * Created by PhpStorm.
 * User: Sale
 * Date: 5/4/2018
 * Time: 12:11 AM
 */

namespace App\Controller;


use App\Entity\Reservation;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Method;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;



class ReservationController extends AbstractController
{

    /**
     * @Route("/reserve")
     * @Method("POST")
     */
    public function createReservation(Request $request)
    {
            // PODACI IZ FORME
        $d = $request->getContent();
        $data = json_decode($d,true);
        $apartment = $data[0]['apartment'];

                //pravljenje niza unesenih datuma
                $arrF = [];
                $din = new \DateTime($data[0]['date_in']);
                $out = new \DateTime($data[0]['date_out']);
                $interval = \DateInterval::createFromDateString('1 day');
                $period = new \DatePeriod($din,$interval,$out);
                foreach ($period as $dpOne)
                {
                    array_push($arrF,$dpOne->format('Y-m-d'));
                }


            //DATUMI IZ BAZE
        $entityManager = $this->getDoctrine()->getManager();
        $reserve = $entityManager->getRepository(Reservation::class)
            ->findBy(array('apartment'=>$apartment,'status'=>1));
        $dateFromBase = [];
        foreach ($reserve as $r)
        {
            $fd = $r->getDateIn();
            $sd = $r->getDateOut();

            $interval = \DateInterval::createFromDateString('1 day');
            $period = new \DatePeriod($fd,$interval,$sd);

            foreach ($period as $oneDay)
            {
                array_push($dateFromBase,$oneDay->format('Y-m-d'));
            }
        }
            //UPOREDjIVANJE DATUMA IZ BAZE I UNOSA

        $comparison = array_intersect($arrF,$dateFromBase);
        if(!empty($comparison))
        {
            return $this->json($comparison);
        }


            // RACUNANJE UKUPNE CENE
        $time_in = strtotime($data[0]['date_in']);
        $newtime_in = date('Y-m-d',$time_in);
        $time_out = strtotime($data[0]['date_out']);
        $newtime_out = date('Y-m-d',$time_out);
        $numOfDday = round(($time_out - $time_in)/(60*60*24));
        $fullPrice = $numOfDday * $data[0]['reservation_price'];


        // KREIRANJE REZERVACIJE
        $reservation = new Reservation();
            $reservation->setUser($data[0]['user']);
            $reservation->setApartment($data[0]['apartment']);
            $reservation->setDateIn( new \DateTime($newtime_in));
            $reservation->setDateOut( new\DateTime($newtime_out));
            $reservation->setReservationDay(new \DateTime($data[0]['reservation_day']));
            $reservation->setReservationPrice($fullPrice);
            $reservation->setStatus(0);
        $em = $this->getDoctrine()->getManager();
        $em->persist($reservation);
        $em->flush();

        return new Response('Success!');

    }

    /**
     * @Route("/dates")
     * @Method("POST")
     */
    public function takeDates(Request $request)
    {
        $d = $request->getContent();
        $data = json_decode($d,true);

        $em = $this->getDoctrine()->getManager();
        $dates = $em->getRepository(Reservation::class)
            ->findBy(array(
                'apartment'=> $data,
                'status'=>1
            ));

        $arrDate = [];
        $dt = '';
    foreach ($dates as $row)
    {
       $firstDay = $row->getDateIn();
       $lastDay = $row->getDateOut();

       $interval = \DateInterval::createFromDateString('1 day');
       $period = new \DatePeriod($firstDay, $interval, $lastDay);

        foreach($period as $dt)
        {

             array_push($arrDate,$dt->format('Y-m-d'));
        }
        array_push($arrDate,$lastDay->format('Y-m-d'));

    }



     return $this->json($arrDate);
    }

}