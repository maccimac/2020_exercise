console.log("this is index");

import { getFullName } from "./common.js";
import { getToDo } from "./fetch.js";
import { tryFetch, mediaDev } from "./promise.js"

console.log(getFullName("John", "Doe"))
getToDo();


tryFetch();
mediaDev();
