import { library } from "@fortawesome/fontawesome-svg-core";
import {
  fab,
  faLinkedin,
  faGithub,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

import {
  fas,
  faEnvelope,
  faExternalLinkAlt,
  faCaretRight,
  faAt,
} from "@fortawesome/free-solid-svg-icons";

function initFontAwesome() {
  library.add(
    fab,
    fas,
    faLinkedin,
    faGithub,
    faTwitter,
    faEnvelope,
    faExternalLinkAlt,
    faCaretRight,
    faAt
  );
}
export default initFontAwesome;
