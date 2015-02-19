(ns hanoi.core
  (:require [clojure.core.match :refer [match]]))

(defn make-move [board from to]
  (let [from-tower (get board from)
        to-tower (get board to)
        make-new-board (fn [board from-disc]
                         (-> board
                             (update-in [from] (fn [v] (butlast v)))
                             (update-in [to] (fn [v] (conj v from-disc)))))]
    (match [(last from-tower) (last to-tower)]
      [nil _] [:err board]
      [from-disc nil] [:ok (make-new-board board from-disc)]
      [from-disc to-disc] (if (< from-disc to-disc)
                            [:ok make-new-board board from-disc]
                            [:err board]))))
