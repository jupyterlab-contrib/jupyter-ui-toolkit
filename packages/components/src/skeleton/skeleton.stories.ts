import { Meta, StoryFn, StoryObj } from "@storybook/html";
import { setTheme } from "../utilities/storybook";

export default {
    title: "Components/Skeleton",
    argTypes: {
        shimmer: {
            control: 'boolean'
        }
    },
    parameters: {
        controls: {expand: true },
        actions: {disabled: true}
    },
    decorators: [
        story => `<div style="display: block;">
          ${story()}
        </div>`
    ]
} as Meta;

const Template: StoryFn = (args, context): string => {
    const {
      globals: { backgrounds, accent },
      parameters
    } = context;
    setTheme(accent, parameters.backgrounds, backgrounds);

    const shimmer = args.shimmer ? 'shimmer' : '';

    // FIXME demonstrate pattern attribute
    // pattern="https://static.fast.design/assets/skeleton-test-pattern.svg"

    /* FIXME demonstrate svg as child
    <svg
        style="position: absolute; left: 0; top: 0;"
        id="pattern"
        width="100%"
        height="100%"
    >
    <defs>
        <mask id="mask" x="0" y="0" width="100%" height="100%">
            <rect x="0" y="0" width="100%" height="100%" fill="#ffffff" />
            <rect x="0" y="0" width="100%" height="45%" rx="4" />
            <rect x="25" y="55%" width="90%" height="15px" rx="4" />
            <rect x="25" y="65%" width="70%" height="15px" rx="4" />
            <rect x="25" y="80%" width="90px" height="30px" rx="4" />
        </mask>
    </defs>
    <rect x="0" y="0" width="100%" height="100%" mask="url(#mask)" fill="#ffffff" />
    </svg>
    */

    return `
<jp-skeleton
    style="border-radius: 4px; width: 50px; height: 50px;"
    shape="circle"
    ${shimmer}
></jp-skeleton>
<jp-skeleton
    style="border-radius: 4px; margin-top: 10px; height: 10px;"
    shape="rect"
    ${shimmer}
></jp-skeleton>
<jp-skeleton
    style="border-radius: 4px; margin-top: 10px; height: 10px;"
    shape="rect"
    ${shimmer}
></jp-skeleton>
<jp-skeleton
    style="border-radius: 4px; margin-top: 10px; height: 10px;"
    shape="rect"
    ${shimmer}
></jp-skeleton>
<jp-skeleton
    style="
        border-radius: 4px;
        width: 75px;
        height: 30px;
        margin-top: 20px;
        margin-bottom: 10px;
    "
    shape="rect"
    ${shimmer}
></jp-skeleton>`;
}

export const Default: StoryObj = {render: Template.bind({})};

Default.args = {
    shimmer: false
}