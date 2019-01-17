import utils, {IJhipsterUtils} from "./axios";
import custome from "./custome";

export interface IJhipster {
  custome: () => Promise<void>;
  utils: IJhipsterUtils;
}

const jhipster: IJhipster = {
  custome,
  utils,
};

export default jhipster;
