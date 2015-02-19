(ns hanoi.core-test
  (:require [midje.sweet :refer :all]
            [hanoi.core :refer :all]))

(def starting-board {:t1 [3 2 1]
                     :t2 []
                     :t3 []})

(def developed-board {:t1 [3]
                      :t2 [2]
                      :t3 [1]})

(facts "valid moves"
  (make-move starting-board :t1 :t2) => [:ok {:t1 [3 2]
                                              :t2 [1]
                                              :t3 []}])

(facts "invalid moves"
  (make-move developed-board :t1 :t2) => [:err developed-board]
  (make-move developed-board :t2 :t3) => [:err developed-board]
  (make-move starting-board  :t3 :t1) => [:err starting-board])


