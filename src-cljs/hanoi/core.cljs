(ns hanoi.core
  (:require-macros [hiccups.core :as hiccups :refer [html]]
                   [cljs.core.async.macros :refer [go go-loop]])
  (:require [cljs.core.match :refer-macros [match]]
            [hiccups.runtime :as hiccupsrt]
            [domina.css :as css]
            [domina :as dom]
            [domina.events :as event]
            [cljs.core.async :as async :refer [>! <! put! chan]]))

(enable-console-print!)

(def container (dom/by-id "container"))

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
                            [:ok (make-new-board board from-disc)]
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
                   1 [:li.small-disc {:draggable "true"}]
                   2 [:li.medium-disc {:draggable "true"}]
                   3 [:li.big-disc {:draggable "true"}]))
                 tower))))

(defn render-board [board err]
  (html [:div#board
         [:ul#tower1
          (render-discs (:t1 board))]
         [:ul#tower2
          (render-discs (:t2 board))]
         [:ul#tower3
          (render-discs (:t3 board))]
         [:p#error err]]))

(defn get-events [element ev-type]
  (let [out (chan)]
    (event/listen! element ev-type (fn [e] (put! out e)))
    out))

(defn validate-move [from to]
  (every? (fn [n] (contains? #{1 2 3} n)) [from to]))

(defn draw-board [rendered-board]
  (set! (.-innerHTML container) rendered-board))

(defn translate-move [move]
  (condp = move
    1 :t1
    2 :t2
    3 :t3))

(def board (atom (make-new-board)))

(defn draw-board-with-errors! [board error]
  (let [new-board (render-board board error)]
    (draw-board new-board))
  :ok)

(defn draw-board-without-errors! [new-board]
  (draw-board (render-board new-board ""))
  (reset! board new-board)
  :ok)

(defn game []
  (let [c (get-events (dom/by-id "move") :click)]
    (go (while true
      (let [_       (print (<! c))
            mv-from (.parseInt js/window (dom/value (dom/by-id "from")))
            mv-to   (.parseInt js/window (dom/value (dom/by-id "to")))]
        (if (not (validate-move mv-from mv-to))
          (draw-board-with-errors! @board "Movimento inválido, burro!")
          (match [(make-move @board (translate-move mv-from) (translate-move mv-to))]
            [[:ok moved-board]] (draw-board-without-errors! moved-board)
            [[:err _]]
             (draw-board-with-errors! @board "Burro, não faça isso")))))
    c)))

(defn ^:export init []
  (draw-board (render-board (make-new-board) ""))
  (game))
