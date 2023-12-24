import { StoryFn, StoryObj } from "@storybook/html";
import { setTheme } from "../utilities/storybook";

export default {
    title: "Components/Skeleton",
    parameters: {
        controls: {expand: true },
        actions: {disabled: true}
    }
};

const Template: StoryFn = (args, context): string => {
    const {
      globals: { backgrounds, accent },
      parameters
    } = context;
    setTheme(accent, parameters.backgrounds, backgrounds);

    const shimmer = args.shimmer ? 'shimmer' : '';
    return `<fast-skeleton
    style="border-radius: 4px; width: 50px; height: 50px;"
    shape="circle"
    ${shimmer}
></fast-skeleton>
<fast-skeleton
    style="border-radius: 4px; margin-top: 10px; height: 10px;"
    shape="rect"
    ${shimmer}
></fast-skeleton>
<fast-skeleton
    style="border-radius: 4px; margin-top: 10px; height: 10px;"
    shape="rect"
    ${shimmer}
></fast-skeleton>
<fast-skeleton
    style="border-radius: 4px; margin-top: 10px; height: 10px;"
    shape="rect"
    ${shimmer}
></fast-skeleton>
<fast-skeleton
    style="
        border-radius: 4px;
        width: 75px;
        height: 30px;
        margin-top: 20px;
        margin-bottom: 10px;
    "
    shape="rect"
    ${shimmer}
></fast-skeleton>`

    return `
    <style>
        .card-placeholder {
            background-color: #fff;
            padding: 20px;
            width: 500px;
            border-radius: 4px;
        }
    
        .card-pattern {
            border-radius: 4px;
            width: 500px;
            height: 250px;
        }
    
        @media (forced-colors: active) {
            .card-placeholder {
                background-color: ButtonText;
            }
    
            .card-pattern {
                background-color: #000;
            }
        }
    </style>
    
    <h1>Skeleton</h1>
    
    <h2>Used as element blocks</h2>
    <div class="card-placeholder">
        <fast-skeleton
            style="border-radius: 4px; width: 50px; height: 50px;"
            shape="circle"
        ></fast-skeleton>
        <fast-skeleton
            style="border-radius: 4px; margin-top: 10px; height: 10px;"
            shape="rect"
        ></fast-skeleton>
        <fast-skeleton
            style="border-radius: 4px; margin-top: 10px; height: 10px;"
            shape="rect"
        ></fast-skeleton>
        <fast-skeleton
            style="border-radius: 4px; margin-top: 10px; height: 10px;"
            shape="rect"
        ></fast-skeleton>
        <fast-skeleton
            style="
                border-radius: 4px;
                width: 75px;
                height: 30px;
                margin-top: 20px;
                margin-bottom: 10px;
            "
            shape="rect"
        ></fast-skeleton>
    </div>
    
    <h2>Used as element blocks with shimmer effect element</h2>
    <div class="card-placeholder">
        <fast-skeleton
            style="border-radius: 4px; width: 50px; height: 50px;"
            shape="circle"
            shimmer
        ></fast-skeleton>
        <fast-skeleton
            style="border-radius: 4px; margin-top: 10px; height: 10px;"
            shape="rect"
            shimmer
        ></fast-skeleton>
        <fast-skeleton
            style="border-radius: 4px; margin-top: 10px; height: 10px;"
            shape="rect"
            shimmer
        ></fast-skeleton>
        <fast-skeleton
            style="border-radius: 4px; margin-top: 10px; height: 10px;"
            shape="rect"
            shimmer
        ></fast-skeleton>
        <fast-skeleton
            style="
                border-radius: 4px;
                width: 75px;
                height: 30px;
                margin-top: 20px;
                margin-bottom: 10px;
            "
            shape="rect"
            shimmer
        ></fast-skeleton>
    </div>
    
    <h2>Using SVG via Pattern attribute</h2>
    <fast-skeleton
        class="card-pattern"
        shape="rect"
        pattern="https://static.fast.design/assets/skeleton-test-pattern.svg"
        shimmer
    ></fast-skeleton>
    
    <h2>Using inline SVG</h2>
    <fast-skeleton class="card-pattern" shape="rect" shimmer>
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
    </fast-skeleton>
    `;
}

export const Default: StoryObj = {render: Template.bind({})};

