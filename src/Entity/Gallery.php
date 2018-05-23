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
     */
    private $id;

    /**
     * @ORM\Column(type="string")
     */
    private $imgName;

    /**
     * @ORM\Column(type="string")
     */
    private $category;


    /**
     * @ORM\Column(type="string")
     */
    private $imgInfo;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Apartment")
     */
     private $ap;

    public function getAp()
    {
        return $this->ap;
    }

    public function setAp(Apartment $ap): void
    {
        $this->ap = $ap;
    }




    public function getId()
    {
        return $this->id;
    }

    public function setId($id): void
    {
        $this->id = $id;
    }

    public function getImgName()
    {
        return $this->imgName;
    }

    public function setImgName($imgName): void
    {
        $this->imgName = $imgName;
    }

    public function getCategory()
    {
        return $this->category;
    }

    public function setCategory($category): void
    {
        $this->category = $category;
    }

    public function getImgInfo()
    {
        return $this->imgInfo;
    }

    public function setImgInfo($imgInfo): void
    {
        $this->imgInfo = $imgInfo;
    }

}