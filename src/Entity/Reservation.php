<?php
/**
 * Created by PhpStorm.
 * User: Sale
 * Date: 5/3/2018
 * Time: 1:07 PM
 */

namespace App\Entity;


use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity
 * @ORM\Table(name="reservation")
 */
class Reservation
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="AUTO")
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="date")
     */
    private $dateIn;

    /**
     * @ORM\Column(type="date")
     */
    private $dateOut;

    /**
     * @ORM\Column(type="date")
     */
    private $reservationDay;

    /**
     *
     * @ORM\ManyToOne(targetEntity="App\Entity\User", inversedBy="email")
     * @ORM\JoinColumn(nullable=false)
     */
    private $user;

    /**
     * @ORM\Column(type="string")
     * @ORM\ManyToOne(targetEntity="App\Entity\Apartment", inversedBy="name")
     * @ORM\JoinColumn(nullable=false)
     */
    private $apartment;

    /**
     * @ORM\Column(type="integer")
     */
    private $reservationPrice;

    /**
     * @ORM\Column(type="integer", options={"default" : 0})
     */
    private $paid;

    /**
     * @ORM\Column(type="integer", options={"default" : 0})
     */
    private $status;


    public function getId()
    {
        return $this->id;
    }


    public function setId($id): void
    {
        $this->id = $id;
    }


    public function getPaid()
    {
        return $this->paid;
    }


    public function setPaid($paid): void
    {
        $this->paid = $paid;
    }


    public function getApartment()
    {
        return $this->apartment;
    }

    public function setApartment($apartment)
    {
        $this->apartment = $apartment;
    }


    public function getUser()
    {
        return $this->user;
    }


    public function setUser(User $user)
    {
        $this->user = $user;
    }


    public function getDateIn()
    {
        return $this->dateIn;
    }


    public function setDateIn($dateIn): void
    {
        $this->dateIn = $dateIn;
    }


    public function getDateOut()
    {
        return $this->dateOut;
    }


    public function setDateOut($dateOut): void
    {
        $this->dateOut = $dateOut;
    }


    public function getReservationDay()
    {
        return $this->reservationDay;
    }


    public function setReservationDay($reservationDay): void
    {
        $this->reservationDay = $reservationDay;
    }



    public function getReservationPrice()
    {
        return $this->reservationPrice;
    }


    public function setReservationPrice($reservationPrice): void
    {
        $this->reservationPrice = $reservationPrice;
    }


    public function getStatus()
    {
        return $this->status;
    }


    public function setStatus($status): void
    {
        $this->status = $status;
    }


}