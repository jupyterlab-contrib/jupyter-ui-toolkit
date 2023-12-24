import { StoryFn, StoryObj } from "@storybook/html";
import { setTheme } from "../utilities/storybook/index.js";

export default {
    title: "Components/Disclosure",
};

const Template: StoryFn = (args, context): string => {
  const {
    globals: { backgrounds, accent },
    parameters
  } = context;
  setTheme(accent, parameters.backgrounds, backgrounds);

  return DisclosureTemplate;
};

export const Default: StoryObj = { render: Template.bind({})};

const DisclosureTemplate = `<style>
fast-disclosure {
    margin-top: 12px;
}
fast-disclosure div {
    color: var(--neutral-foreground-rest);
}
</style>
<h1>Disclosure</h1>
<p>
The Flash (or simply Flash) is the name of several superheroes appearing in American
comic books published by DC Comics.
</p>
<fast-disclosure title="More about Flash">
<span slot="end">⚡️</span>
<div>
    Created by writer Gardner Fox and artist Harry Lampert, the original Flash first
    appeared in Flash Comics #1 (cover date January 1940/release month November 1939).
    Nicknamed the "Scarlet Speedster", all incarnations of the Flash possess "super
    speed", which includes the ability to run, move, and think extremely fast, use
    superhuman reflexes, and seemingly violate certain laws of physics.
</div>
</fast-disclosure>
<br />
<br />
<fast-divider role="presentation"></fast-divider>
<h2>Default expanded</h2>
<fast-disclosure expanded title="More about Green Arrow">
<div>
    Green Arrow is a fictional superhero who appears in comic books published by DC
    Comics. Created by Mort Weisinger and designed by George Papp, he first appeared
    in More Fun Comics #73 in November 1941. His real name is Oliver Jonas Queen, a
    wealthy businessman and owner of Queen Industries who is also a well-known
    celebrity in Star City.
</div>
</fast-disclosure>
<br />
<br />
<fast-divider role="presentation"></fast-divider>
<h2>Helper methods (toggle(), show(), hide())</h2>

<fast-disclosure id="supergirl" title="Read about Supergirl">
<div>
    Supergirl is an American superhero television series developed by Ali Adler, Greg
    Berlanti and Andrew Kreisberg that originally aired on CBS and premiered on
    October 26, 2015. It is based on the DC Comics character Supergirl, created by
    Otto Binder and Al Plastino, and stars Melissa Benoist in the title role.
</div>
</fast-disclosure>
<br />
<br />
<br />
<fast-button onclick="getElementById('supergirl').toggle()" appearance="outline">
Toggle
</fast-button>
&nbsp;
<fast-button onclick="getElementById('supergirl').show()" appearance="outline">
Show
</fast-button>
&nbsp;
<fast-button onclick="getElementById('supergirl').hide()" appearance="outline">
Hide
</fast-button>
<br />
<br />
<fast-divider role="presentation"></fast-divider>
<h2>With lightweight (also extra slots)</h2>
<fast-disclosure appearance="lightweight">
<span slot="start">👩🏻‍🦳</span>
<strong slot="title">Read about White Canary</strong>
<div>
    Sara Lance, also known by her alter-ego White Canary, is a fictional character in
    The CW's Arrowverse franchise, first introduced in the 2012 pilot episode of the
    television series Arrow, and later starring in Legends of Tomorrow. The character
    is an original character to the television series, created by Greg Berlanti, Marc
    Guggenheim and Andrew Kreisberg, but incorporates character and plot elements of
    the DC Comics character Black Canary. Sara Lance was originally portrayed by
    Jacqueline MacInnes Wood in the pilot episode, and has since been continually
    portrayed by Caity Lotz. Sara initially goes by the moniker of The Canary, a
    translation of her Arabic League of Assassins name الطائر الصافر (Ta-er
    al-Sahfer), which translates to "Whistling Bird". She later adopts the code name
    of White Canary before joining the Legends of Tomorrow.
</div>
</fast-disclosure>
`