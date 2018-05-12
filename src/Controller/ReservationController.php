<?php
/**
 * Created by PhpStorm.
 * User: Sale
 * Date: 5/4/2018
 * Time: 12:11 AM
 */

namespace App\Controller;


use App\Entity\Reservation;
use App\Entity\User;
use Doctrine\ORM\Mapping as ORM;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Method;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;


/**
 * @ORM\Entity()
 * @ORM\Table(name="reservation_controller")
 */
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



        // UZIMANJE ID USER PREKO EMAIL-A

        $e = $this->getDoctrine()->getManager();
     $userInfo = $e->getRepository(User::class)
            ->findBy(array('email'=>$data[0]['user']));

        $userId=$userInfo[0];

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
        $fullPrice =$numOfDday * $data[0]['reservation_price'];


        // KREIRANJE REZERVACIJE
        $reservation = new Reservation();
            $reservation->setUser($userId);
            $reservation->setApartment($data[0]['apartment']);
            $reservation->setDateIn( new \DateTime($newtime_in));
            $reservation->setDateOut( new\DateTime($newtime_out));
            $reservation->setReservationDay(new \DateTime($data[0]['reservation_day']));
            $reservation->setReservationPrice($fullPrice);
            $reservation->setStatus(0);
            $reservation->setPaid(0);
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

    array_shift($arrDate);


     return $this->json($arrDate);
    }

    /**
     * @Route("/admin/no_confirmed_res")
     * @Method("POST")
     */
    public function NoConfirmedRes()
    {
        $em = $this->getDoctrine()->getManager();
        $data = $em->getRepository(Reservation::class)
            ->findBy(array('status'=>0));


        return $this->json($data);
    }

    /**
     * @Route("/admin/confirmed_res")
     */
    public function confirmedRes()
    {
        $em = $this->getDoctrine()->getManager();
        $data = $em->getRepository(Reservation::class)
            ->findBy(array('status'=>1));

        return $this->json($data);
    }

    /**
     * @Route("/admin/deleteRes")
     */
    public function deleteRes(Request $request)
    {
      $d = $request->getContent();
        $data = json_decode($d,true);

        $em = $this->getDoctrine()->getManager();
        $res = $em->getRepository(Reservation::class)
            ->find($data);
        $em->remove($res);
        $em->flush();

        return new Response($data);
    }


    /**
     * @Route("admin/no_confirm_res_find_by_id")
     * @Method("POST")
     */
    public function noConfirmResFindById(Request $request)
    {
        $d = $request->getContent();
        $data = json_decode($d,true);

        $em = $this->getDoctrine()->getManager();
        $res = $em->getRepository(Reservation::class)
            ->findBy(array('id'=>$data));

        return $this->json($res);
    }

    /**
     * @Route("admin/create_confirm")
     * @Method("POST")
     */
    public function createConfirm(Request $request)
    {
        $d = $request->getContent();
        $data = json_decode($d, true);
     //   dump($data[0]['paid']);die;

        $em = $this->getDoctrine()->getManager();
        $confirm = $em->getRepository(Reservation::class)
            ->find($data[0]['id']);

        if(!$confirm)
        {
            throw $this->createNotFoundException('No reservation find for id '.$data[0]['id']);
        }

        $confirm->setPaid($data[0]['paid']);
        $confirm->setStatus(1);

        $em->flush();

        return new Response('confirmed');

    }

    /**
     *@Route("admin/new_payment")
     */
    public function paymentAction(Request $request)
    {
        $d = $request->getContent();
        $data = json_decode($d,true);

  //  dump($data[0]['id']);die;
    $em = $this->getDoctrine()->getManager();
    $updateP = $em->getRepository(Reservation::class)
        ->find($data[0]['id']);

    $updateP->setPaid($data[0]['paid']);
    $em->flush();

        return new Response('d');
    }

    /**
     * @Route("admin/user_no_res")
     * @Method("POST")
     */
    public function noReservationUser()
    {

        $em = $this->getDoctrine()->getManager();
        $users = $em->getRepository(User::class)
            ->findAll();
        $usersR = $em->getRepository(Reservation::class)
            ->findAll();

        $justUserId=[];
        foreach ($usersR as  $userR)
        {
            foreach ($users as $key => $user)
            {

            if($userR->getUser()->getId() !== $user->getId() )
                {
                  array_push($justUserId,$user->getId());

                }
            }
            array_shift($justUserId);
        }

        $justUser = $em->getRepository(User::class)
            ->findBy(array('id'=>$justUserId));


       return $this->json($justUser);
    }


}