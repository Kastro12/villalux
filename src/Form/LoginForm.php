<?php
/**
 * Created by PhpStorm.
 * User: Sale
 * Date: 4/30/2018
 * Time: 11:47 PM
 */

namespace App\Form;


use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\PasswordType;
use Symfony\Component\Form\FormBuilderInterface;

class LoginForm extends AbstractType
{
        public function buildForm(FormBuilderInterface $builder, array $options)
        {
            $builder
                ->add('_username')
                ->add('_password', PasswordType::class);
        }
}