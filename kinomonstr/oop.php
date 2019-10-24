<?php

//     class Human {
        
//         private $words;

//         public function setWords($words) {
//             $this->words = $words;
//         }

//         public function getWords() {
//             return $this->words;
//         }

//         public function sayIt() {
//             return $this->getWords();
//         }
//     }

// $human = new Human();
// $human->setWords("hi");
// echo $human->sayIt();

    // class Human {

    //     private $name;

    //     public function __construct($name) {
    //         $this->name = $name;
    //     }

    //     public function say() {
    //         echo "My name is ".$this->name." and ";
    //     }

    // }

    // class Man extends Human {

    //     public function beard() {
    //         echo "i have a beard";
    //     }

    // }

    // class Woman extends Human {
    //     public function bornChildren() {
    //         echo "i am pregnant";
    //     }
    // }

    // $man = new Man("andrey");
    // $man->say();
    // $man->beard();

    // echo "<br>";

    // $woman = new Woman("Valeria");
    // $woman->say();
    // $woman->bornChildren();

    // poly

    interface Say {

        public function say();

    }

    abstract class Human implements Say {

        private $name;

        public function __construct($name) {
            $this->name = $name;
        }

        public function getName() {
            return $this->name;
        }

    }

    class Man extends Human {

        public function __construct($name) {
            parent::__construct($name);
        }

        public function beard() {
            echo "i have a beard";
        }

        public function say() {
            echo "i have male voice, my name is ".$this->getName()." and ";
        }

    }

    class Woman extends Human {

        public function __construct($name) {
            parent::__construct($name);
        }

        public function bornChildren() {
            echo "i am pregnant";
        }

        public function say() {
            echo "i have female voice, my name is  ".$this->getName()." and ";
        }

    }

    $man = new Man("andrey");
    $man->say();
    $man->beard();

    echo "<br>";

    $woman = new Woman("Valeria");
    $woman->say();
    $woman->bornChildren();

    // interface Say2 {

    //     public function say2();

    // }

    // class Human implements Say, Say2 {

    //     public function say() {
    //         echo "something";
    //     }

    //     public function say2() {
    //         echo "something";
    //     }
    // }

    // $human = new Human();

?>