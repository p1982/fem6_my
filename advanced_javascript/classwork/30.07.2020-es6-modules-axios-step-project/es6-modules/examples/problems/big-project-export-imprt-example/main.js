import {createElement, createList, createTab} from "./scripts/functions/index.js";
import {User, Slider} from "./scripts/classes/index.js";

import {Login, HeaderSlider, ProductList} from "./sripts/module/index.js";

const pageContainer = document.getElementById("root");
pageContainer.append(Login.render(), HeaderSlider.render(), ProductList.render());