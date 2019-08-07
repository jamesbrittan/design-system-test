^^ click "PROPS & METHODS" to expand (maybe this could be open by default)

```jsx
import { ThemeProvider } from "styled-components";
import theme from "../theme/variables";

<ThemeProvider theme={theme}>
  <Button bg="red" onClick={() => prompt("click!")}>
    Click me
  </Button>
</ThemeProvider>;
```

^^ click "VIEW CODE" to expand

This is an example of the `<Button />` component.
The prop types listed above are automatically imported, the descriptions are set by adding jsdoc annotations alongside the proptypes object.

The code example below is set in the `Readme.md` file within the component's folder. The code which is displayed when you click "VIEW CODE" can be edited in place to see the results of different props.

As the Readme is markdown it's easily editable and (I think) readable by GitHub which is pretty cool.

The main negative point at the moment is having to include `<ThemeProvider />` from Styled Components in each example. There may be a way around this.
