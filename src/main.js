import { createApp } from "vue";
import App from "./App.vue";
import "./assets/tailwind.css";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons";

library.add(faPen, faTrash);

createApp(App).component("font-awesome-icon", FontAwesomeIcon).mount("#app");
