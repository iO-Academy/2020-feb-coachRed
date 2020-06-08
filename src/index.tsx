import * as React from "react"
import * as ReactDOM from "react-dom"

import { Label } from "./components/Label"

ReactDOM.render(
    <Label content="Hello World!" for=""/>,
    document.getElementById("root")
)