import { StoryFn, StoryObj } from "@storybook/html";
import { setTheme } from "../utilities/storybook";

// const optionContentsTemplate: ViewTemplate = html`
//     <div class="div-blue">
//         ${x => x.value}
//     </div>
// `;

// const itemContentsTemplate: ViewTemplate = html`
//     <div class="div-purple">
//         ${x => x.value}
//     </div>
// `;

// addons.getChannel().addListener(STORY_RENDERED, (name: string) => {
//     if (name.toLowerCase().startsWith("picker")) {
//         const customTemplatePicker = document.getElementById(
//             "customtemplatepicker"
//         ) as Picker;
//         customTemplatePicker.menuOptionContentsTemplate = optionContentsTemplate;
//         customTemplatePicker.listItemContentsTemplate = itemContentsTemplate;
//     }
// });

export default {
    title: "Components/Picker",
    parameters: {
        constrols: {expanded:true}
    }
};

const Template: StoryFn = (args, context): string => {
  const {
    globals: { backgrounds, accent },
    parameters
  } = context;
  setTheme(accent, parameters.backgrounds, backgrounds);

  return PickerTemplate;
};

export const Default: StoryObj = { render: Template.bind({})};


const PickerTemplate = `<style>
.div-blue {
    background: blue;
}
.div-purple {
    background: purple;
}
@media (forced-colors: active) {
    .div-blue,
    .div-purple {
        background: transparent;
    }
}
</style>

<h1>Picker</h1>

<h2>Default</h2>
<fast-picker
default-selection=""
selection=""
options="apples,oranges,bananas,pears,pineapples,strawberries"
no-suggestions-text="No suggestions available"
suggestions-available-text="Suggestions available"
loading-text="Loading"
label="Select some things"
placeholder="Select some things"
></fast-picker>

<h2>Filter query and filter selection off</h2>
<fast-picker
default-selection=""
selection=""
options="apples,oranges,bananas,pears,pineapples,strawberries"
no-suggestions-text="No suggestions available"
suggestions-available-text="Suggestions available"
loading-text="Loading"
label="Select some things"
filter-selected="false"
filter-query="false"
></fast-picker>

<h2>Preselection</h2>
<fast-picker
selection="bananas,strawberries"
options="apples,oranges,bananas,pears,pineapples,strawberries"
no-suggestions-text="No suggestions available"
suggestions-available-text="Suggestions available"
loading-text="Loading"
label="Select some things"
></fast-picker>

<h2>Custom menu</h2>
<fast-picker
default-selection=""
selection=""
options="apples,oranges,bananas,pears,pineapples,strawberries"
label="Select some things"
>
<fast-picker-menu>
    <fast-picker-menu-option slot="header-region">
        pre-option
    </fast-picker-menu-option>
    <div>Group 1</div>
    <fast-picker-menu-option value="option 1"></fast-picker-menu-option>
    <fast-picker-menu-option value="option 2"></fast-picker-menu-option>
    <div>Group 2</div>
    <fast-picker-menu-option value="option 3"></fast-picker-menu-option>
    <fast-picker-menu-option value="option 4"></fast-picker-menu-option>
    <fast-picker-menu-option slot="footer-region">
        post-option
    </fast-picker-menu-option>
</fast-picker-menu>
</fast-picker>

<h2>Custom menu no options</h2>
<fast-picker default-selection="" selection="" label="Select some things">
<fast-picker-menu>
    <fast-picker-menu-option slot="header-region">
        pre-option
    </fast-picker-menu-option>
    <div>Group 1</div>
    <fast-picker-menu-option value="option 1"></fast-picker-menu-option>
    <fast-picker-menu-option value="option 2"></fast-picker-menu-option>
    <div>Group 2</div>
    <fast-picker-menu-option value="option 3"></fast-picker-menu-option>
    <fast-picker-menu-option value="option 4"></fast-picker-menu-option>
    <fast-picker-menu-option slot="footer-region">
        post-option
    </fast-picker-menu-option>
</fast-picker-menu>
</fast-picker>

<h2>Single item</h2>
<fast-picker
options="apples,oranges,bananas,pears,pineapples,strawberries"
max-selected="1"
no-suggestions-text="No suggestions available"
suggestions-available-text="Suggestions available"
loading-text="Loading"
label="Select people"
></fast-picker>

<h2>Multiple items, limit to 3</h2>
<fast-picker
options="apples,oranges,bananas,pears,pineapples,strawberries"
max-selected="3"
no-suggestions-text="No suggestions available"
suggestions-available-text="Suggestions available"
loading-text="Loading"
label="Select people"
></fast-picker>

<h2>Custom content templates</h2>
<fast-picker
id="customtemplatepicker"
default-selection=""
selection=""
options="apples,oranges,bananas,pears,pineapples,strawberries"
no-suggestions-text="No suggestions available"
suggestions-available-text="Suggestions available"
loading-text="Loading"
label="Select some things"
></fast-picker>

<h2>Menu above</h2>
<fast-picker
default-selection=""
selection=""
options="apples,oranges,bananas,pears,pineapples,strawberries"
no-suggestions-text="No suggestions available"
suggestions-available-text="Suggestions available"
loading-text="Loading"
label="Select some things"
menu-placement="top-fill"
></fast-picker>

<h2>Menu above or below</h2>
<fast-picker
default-selection=""
selection=""
options="apples,oranges,bananas,pears,pineapples,strawberries"
no-suggestions-text="No suggestions available"
suggestions-available-text="Suggestions available"
loading-text="Loading"
label="Select some things"
menu-placement="tallest-fill"
></fast-picker>

<h2>Menu above or below, not scaling</h2>
<fast-picker
default-selection=""
selection=""
options="apples,oranges,bananas,pears,pineapples,strawberries"
no-suggestions-text="No suggestions available"
suggestions-available-text="Suggestions available"
loading-text="Loading"
label="Select some things"
menu-placement="tallest"
></fast-picker>

<div style="height: 400px; opacity: 0;"></div>
`