import { createApp } from "vue";
import App from "./App.vue";
import "./assets/tailwind.css";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faPen,
  faTrash,
  faAngleLeft,
  faAngleRight,
  faCog,
  faUser,
  faPaperPlane,
  faRedo,
  faPlus,
  faFolderOpen,
  faEnvelopeOpen,
  faRegistered,
  faEllipsis,
  faMagnifyingGlass,
  faPenToSquare,
  faBars,
  faChevronRight,
  faBoxArchive,
  faShare,
  faGlobe,
  faArrowUp
} from "@fortawesome/free-solid-svg-icons";

// Add new icons
library.add(
  faPen,
  faTrash,
  faAngleLeft,
  faAngleRight,
  faCog,
  faUser,
  faPaperPlane,
  faRedo,
  faPlus,
  faFolderOpen,
  faEnvelopeOpen,
  faRegistered,
  faEllipsis,
  faMagnifyingGlass,
  faPenToSquare,
  faBars,
  faChevronRight,
  faBoxArchive,
  faShare,
  faGlobe,
  faArrowUp
);

createApp(App).component("font-awesome-icon", FontAwesomeIcon).mount("#app");
