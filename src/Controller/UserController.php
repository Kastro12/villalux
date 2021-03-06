<?php
/**
 * Created by PhpStorm.
 * User: Sale
 * Date: 4/20/2018
 * Time: 5:50 PM
 */

namespace App\Controller;


use App\Entity\User;
use Doctrine\ORM\Mapping as ORM;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Method;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;

/**
 * @ORM\Entity()
 * @ORM\Table(name="user_controller")
 */
class UserController extends AbstractController
{

    /**
     * @Route("/registration/user")
     * @Method("POST")
     */
    public function userRegistration(Request $request, UserPasswordEncoderInterface $encoder)
    {

        $show = "";

        $jsonData = $request->getContent();
        $data = json_decode($jsonData,true);

        $entityManager = $this->getDoctrine()->getManager();
        $u = $entityManager->getRepository(User::class)
            ->findAll();

        $userArray =[];

        foreach ($u as $allUser)
        {
            array_push($userArray,$allUser->getEmail());
        }



        $user = new User();
       foreach($data as $row)
       {

        if(in_array($row['email'],$userArray))
        {
            $show = "Postojeci email";
            return $this->json($show);
        }

           $encoded = $encoder->encodePassword($user, $row['password']);

        $user->setFirstName($row['first_name']);
        $user->setLastName($row['last_name']);
        $user->setEmail($row['email']);
        $user->setPhone($row['phone']);
        $user->setPassword($encoded);
       }

       $em = $this->getDoctrine()->getManager();
       $em->persist($user);
       $em->flush();

       $show = $row['first_name'];

       return $this->json($show);
    }


}