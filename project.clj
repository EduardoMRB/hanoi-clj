(defproject hanoi "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :dependencies [[org.clojure/clojure "1.6.0"]
                 [org.clojure/clojurescript "0.0-2850"]
                 [org.clojure/core.match "0.3.0-alpha4"]
                 [org.clojure/core.async "0.1.346.0-17112a-alpha"]
                 [figwheel "0.2.3-SNAPSHOT"]
                 [midje "1.6.3"]
                 [hiccups "0.3.0"]
                 [domina "1.0.3"]]
  :plugins [[lein-cljsbuild "1.0.6-SNAPSHOT"]
            [lein-figwheel "0.2.1-SNAPSHOT"]]
  :cljsbuild
  {:builds
   [{:id "dev"
     :source-paths ["src-cljs"]
     :compiler {:optimizations :none
                :output-to "resources/public/app.js"
                :output-dir "resources/public/out"
                :source-map true}}
    {:id "adv"
     :source-paths ["src-cljs"]
     :compiler {:optimizations :advanced
                :pretty-print false
                :static-fns true
                :output-dir "out-adv"
                :output-to "resources/public/js/app.js"}}]})
