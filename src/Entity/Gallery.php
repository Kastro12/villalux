<?php
/**
 * Created by PhpStorm.
 * User: Sale
 * Date: 3/28/2018
 * Time: 11:34 PM
 */

namespace App\Entity;


use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity
 * @ORM\Table(name="gallery")
 */
class Gallery
{

    /**
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="AUTO")
     * @ORM\Column(type="integer")
     */private $id;

    /**
     * @ORM\Column(type="string")
     */private $imgName;

    /**
     * @ORM\Column(type="string")
     */private $category;


    /**
     * @ORM\Column(type="string")
     */private $text;

    /**
     * @return mixed
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * @param mixed $id
     */
    public function setId($id): void
    {
        $this->id = $id;
    }

    /**
     * @return mixed
     */
    public function getImgName()
    {
        return $this->imgName;
    }

    /**
     * @param mixed $imgName
     */
    public function setImgName($imgName): void
    {
        $this->imgName = $imgName;
    }

    /**
     * @return mixed
     */
    public function getCategory()
    {
        return $this->category;
    }

    /**
     * @param mixed $category
     */
    public function setCategory($category): void
    {
        $this->category = $category;
    }


    /**
     * @return mixed
     */
    public function getText()
    {
        return $this->text;
    }

    /**
     * @param mixed $text
     */
    public function setText($text): void
    {
        $this->text = $text;
    }

}