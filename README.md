The interface might look like this.

<Image
  src="img/hw-02/feedback/step-1.png"
  alt="component preview"
  maxWidth={960}
/>

### Step 2.

Expand the app's functionality so that the interface displays more statistics
about the collected feedback. Add a display of the total number of collected
reviews from all categories and the percentage of positive reviews. To do this,
create helper methods `countTotalFeedback()` and
`countPositiveFeedbackPercentage()` methods that calculate these values based on
state data (computable data).

<Image
  src="img/hw-02/feedback/step-2.png"
  alt="component preview"
  maxWidth={960}
/>

### Step 3.

Perform a refactoring of the application. The state of the application must
remain in the `<App>` root component.

- Put the statistics display in a separate component `<Statistics good={}
  neutral={} bad={} total={} positivePercentage={}
- Put the button box into a component `<FeedbackOptions options={}
  onLeaveFeedback={}
- Create a component `<Section title="">` that renders a section with title and
  (children). Wrap each of the `<Statistics>` and `<FeedbackOptions>` in the
  created section component.

### Step 4.

Extend the functionality of the application so that the statistics block is
rendered only after after at least one feedback has been collected. The message
about absence of statistics put in the component
`<Notification message="There is no feedback">`.

<Image
  src="img/hw-02/feedback/preview.gif"
  alt="component preview"
  maxWidth={960}
/> The state held in the parent component <App> must necessarily be The
following form, you can not add new properties.

``bash state = { contacts: [], name: '' }
