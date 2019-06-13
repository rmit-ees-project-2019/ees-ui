# TODO
- [ ] Include Cypress installation instructions
- [ ] Ensure `ees-server` is running on the server
- [ ] Update deployment instructions to include `ees-server` instructions
- [ ] Update `README.md` file
- [x] [Include tests to `.travis.yml` config file](https://docs.cypress.io/guides/guides/continuous-integration.html#Travis)
  - [ ] Test the above implementation that it works
  - work out local target versus VM location

## Cypress Tests to implement
- [ ] On Load: the following elements render on the screen:
  - [ ] Side menu
    - [ ] Map Style elements
      - [ ] Heading: Map Style
      - [ ] Dropdown: Basic, Bright, Dark, Light, Satellite, Streets

  - [ ] Region elements
    - [ ] Heading: Region
    - [ ] Dropdown: Mount Alexander Shire, Surf Coast Shire

  - [ ] Population elements
    - [ ] Heading: Population
    - [ ] Dropdown: default
    - [ ] Checkboxes: Home, Work, Beach, Shop, Other

  - [ ] Emergency Incident elements
    - [ ] Heading: Emergency Incident
    - [ ] Info icon and supporting text
    - [ ] Checkbox: Smoke
    - [ ] Fire Opacity and Smoke opacity

  - [ ] Traffic Behaviour Setup elements
    - [ ] Heading: 'Traffic Behaviour Setup'
    - [ ] Description: 'Maximum speed on roads (as % of speed limits)'
    - [ Info icon and supporting text]

  - [ ] Gear icon / button
  - [ ]

- Home link: _When I click the 'Home' text, it should ..._

- About link: _When I click the 'About' text, it should navigate me to .../about_

- Map Styles:

- [ ] Toggle Menu: _When I click the gear icon, the side menu is no longer visible_

- [ ] Smoke toggle: _When I check the smoke checkbox, the smoke appears on my map_

- [ ] Fire Opacity: _When I select an emergency incident, I am able to configure the fire opacity_

- [ ] Smoke Opacity: _When I select an emergency incident, I am able to configure the smoke opacity_

- [ ] Traffic Behaviour

- [ ] Save

- [ ] Create


- [ ] Disruptions

# Adjustments required

## Population
- [ ] Connect the population dropdown to other population files
- [ ] Smoother toggling of population based off activities (what it's currently doing: uncheck a toggle to hide a particular population activity, then recheck it to display again - rechecking the box currently crashes the session)
- [ ] Linking the `Create` button action to the final leaflet page
- [ ] Link the tiles network to local server ()

- [ ] Creating disruptions should store values into the disruptions.json file
  - it's currently storing this in a demo file in the correct format, it just needs to be mapped to the correct file (@Luke)
- [ ] Pass the max speed to the `config.json` file

- [ ] Output / file management
- [ ] Clicking the create button should present the user with a progress wheel (feedback)
- [ ] Saving and Creating - need to manage the saving of the outputs (dealing with name conflicts...)
- [ ] After creating a simulation, the page should navigate to the Leaflet page and produce the saved output
  - [ ] To provide Dhirendra with the directory the leaflet page is talking to

- [ ] Leaflet moving agents - speed controller (https://noncomputable.github.io/AgentMaps/demos/basic_contagion/basic_contagion.html)

- [ ] Cluster the population markers (https://github.com/mapbox/mapbox-gl-leaflet/blob/master/examples/cluster.html)
  - https://rawgit.com/mapbox/mapbox-gl-leaflet/master/examples/cluster.html
