(ns hanoi.connect
  (:require [figwheel.client :as fw]))

(enable-console-print!)

(fw/start {:on-jsload (fn [] (print "reloaded"))})
