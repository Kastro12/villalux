<?php
/**
 * Created by PhpStorm.
 * User: Sale
 * Date: 4/20/2018
 * Time: 11:56 PM
 */

namespace App\Entity;


use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Security\Core\User\UserInterface;

/**
 * @ORM\Entity
 * @ORM\Table(name="user")
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
     * @ORM\Column(type="string",columnDefinition="VARCHAR(100) NOT NULL")
     */
    private $firstName;

    /**
     * @ORM\Column(type="string",columnDefinition="VARCHAR(100) NOT NULL")
     */
    private $lastName;

    /**
     * @ORM\Column(type="string",columnDefinition="VARCHAR(100) NOT NULL")
     */
    private $email;

    /**
     * @ORM\Column(type="string",columnDefinition="VARCHAR(100) NOT NULL")
     */
    private $phone;

    /**
     * @ORM\Column(type="string", columnDefinition="VARCHAR(100) NOT NULL")
     */
    private $password;

    /**
     * @param mixed $firstName
     */
    public function setFirstName($firstName): void
    {
        $this->firstName = $firstName;
    }

    /**
     * @param mixed $lastName
     */
    public function setLastName($lastName): void
    {
        $this->lastName = $lastName;
    }

    /**
     * @param mixed $email
     */
    public function setEmail($email): void
    {
        $this->email = $email;
    }

    /**
     * @param mixed $phone
     */
    public function setPhone($phone): void
    {
        $this->phone = $phone;
    }

    /**
     * @param mixed $password
     */
    public function setPassword($password): void
    {
        $this->password = $password;
    }

    public function getRoles()
    {
        return ['ROLE_USER'];
    }

    public function getPassword()
    {

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