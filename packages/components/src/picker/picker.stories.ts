import { Meta, StoryFn, StoryObj } from "@storybook/html";
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
        controls: {expanded:true}
    },
    argsType: {
        defaultSelection: { control: 'text' },
        selection: {control: 'text'},
        options: { control: 'text' },
        noSuggestionsText: {control: 'text'},
        suggestionsAvailableText: {control: 'text'},
        label: {control: 'text'},
        placeholder: {control: 'text'},
        maxSelected: {control: 'range', min: 0, max: 20, step: 1},
        // menuPlacement: {control: 'select', options: ['tallest', 'tallest-fill', 'top-fill']}
        // loadingText: {control: 'text'}
    }
} as Meta;

const Template: StoryFn = (args, context): string => {
  const {
    globals: { backgrounds, accent },
    parameters
  } = context;
  setTheme(accent, parameters.backgrounds, backgrounds);

  const max = args.maxSelected ? `max-selected="${args.maxSelected}"` : '';

  return `
<jp-picker
  default-selection="${args.defaultSelection}"
  selection="${args.selection}"
  options="${args.options}"
  no-suggestions-text="${args.noSuggestionsText}"
  suggestions-available-text="${args.suggestionsAvailableText}"
  loading-text="${args.loadingText ?? 'Loading'}"
  label="${args.label}"
  placeholder="${args.placeholder}"
  ${max}
></jp-picker>
  `;
};

export const Default: StoryObj = { render: Template.bind({})};

Default.args = {
    defaultSelection: '',
    selection: '',
    options: "apples,oranges,bananas,pears,pineapples,strawberries",
    noSuggestionsText: '',
    suggestionsAvailableText: '',
    label: '',
    placeholder: '',
    maxSelected: 0
}
