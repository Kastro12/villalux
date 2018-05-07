<?php
/**
 * Created by PhpStorm.
 * User: Sale
 * Date: 4/20/2018
 * Time: 11:56 PM
 */

namespace App\Entity;


use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Security\Core\User\UserInterface;



/**
 * @ORM\Entity()
 * @ORM\Table(name="ap_user")
 */
class User implements UserInterface
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="AUTO")
     * @ORM\Column(type="integer")

     */
    private $id;

    /**
     * @ORM\Column(type="string", length=100)
     */
    private $firstName;

    /**
     * @ORM\Column(type="string", length=100)
     */
    private $lastName;

    /**
     * @ORM\Column(type="string", length=100, unique=true)
     * @ORM\OneToMany(targetEntity="App\Entity\Reservation", mappedBy="user")
     */
    private $email;

    /**
     * @ORM\Column(type="string", length=100)
     */
    private $phone;

    /**
     * @ORM\Column(type="string", length=100)
     */
    private $password;




    public function setId($id): void
    {
        $this->id = $id;
    }


    public function setFirstName($firstName): void
    {
        $this->firstName = $firstName;
    }


    public function setLastName($lastName): void
    {
        $this->lastName = $lastName;
    }


    public function setEmail($email): void
    {
        $this->email = $email;
    }


    public function setPhone($phone): void
    {
        $this->phone = $phone;
    }


    public function setPassword($password): void
    {
        $this->password = $password;
    }


    public function getId()
    {
        return $this->id;
    }


    public function getFirstName()
    {
        return $this->firstName;
    }


    public function getLastName()
    {
        return $this->lastName;
    }


    public function getEmail()
    {
        return $this->email;
    }


    public function getPhone()
    {
        return $this->phone;
    }




    public function getRoles()
    {
        return ['ROLE_USER'];
    }

    public function getPassword()
    {
        return $this->password;
    }

    public function getSalt()
    {

    }

    public function getUsername()
    {
        return $this->email;
    }

    public function eraseCredentials()
    {

    }


}