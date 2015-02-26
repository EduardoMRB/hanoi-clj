(ns hanoi.core
  (:require-macros [hiccups.core :as hiccups :refer [html]])
  (:require [cljs.core.match :refer-macros [match]]
            [hiccups.runtime :as hiccupsrt]))

(enable-console-print!)

(def container (.getElementById js/document "container"))

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

(defn make-new-board []
  {:t1 [3 2 1]
   :t2 []
   :t3 []})

(defn render-discs [tower]
  (if (coll? tower)
    (sort > 
          (map (fn [disc]
                 (condp = disc
                   1 [:li.small-disc]
                   2 [:li.medium-disc]
                   3 [:li.big-disc]))
                 tower))))

(defn render-board [board]
  (html [:div#board
         [:ul#tower1
          (render-discs (:t1 board))]
         [:ul#tower2
          (render-discs (:t2 board))]
         [:ul#tower3
          (render-discs (:t3 board))]]))

(set! (.-innerHTML container) (render-board (make-new-board)))
