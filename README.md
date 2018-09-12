# Test-Last

**Testing Last** (or, better yet, **Near**) should offer the least level of weirdness and mindset shifting to newcomers to testing.

With the Katas proposed, you'll have the chance to put into practice the patterns, heuristics and techniques showcased to you in the [presentation](http://vertica-as.github.io/testing-TDD "slides").

## Dynamics
You are going to be given **1.5 hours** to complete as many Katas as you can.
<br/>A Kata is a small exercise which completion is not obvious (testing never is), so you are left with the task to know (or ask or agree) when you are done and are ready to move onto the next. These Katas are independent from each other and can be done in whichever order one fancies, but they are increasing in complexity.

You can work on your own or you can work in pairs. Lone wolfs are successful but pairs are le-gen-da-ry.

You are very welcome to ask me as many questions as you want, ask for help, cry like a baby or swear like a Geordie Shore cast member.

### Setup
The test subjects are included in as an _ES6_ library. Familiarity with Node.js development toolset is expected.

Despite being hosted in _GitHub_ you are not expected to be profficient in _Git_, but it will help you during the setup process.

These are the general instructions, you can follow them using your command line awesomeness, the training wheels of [GitHub for Windows](https://windows.github.com/) or the stick-in-the-wheels of [Visual Studio Git Integration](https://msdn.microsoft.com/en-us/library/hh850437.aspx):
 
1. **[Clone]** (https://help.github.com/articles/which-remote-url-should-i-use/) the repository.
1. **Checkout** the _test-last-js_ branch.
1. Open the folder in VSCode or whichever javascript editor makes you happy and productive and proud.
1. Add a container for your tests to the library (a folder named _tests_ would do)
1. Install an automated testing library to the test project. I recommend [Mocha](https://mochajs.org/).
<br/>But you are welcome to use whichever framework you are used to/want to experiment with.
1. For running tests, you can use whichever runner you feel comfortable with. I recommend going barebones with a _npm test_ command.
1. For commodity, I encourage you to run some continous runner, like adding a watcher to _mocha_ (`mocha {spec_glob} --w`).
1. For some Katas you are likely to be using Interaction-Based Testing, so installing a mocking/substitutes/fakes framework is not out of the question. I recommend [Sinon](https://sinonjs.org/) although a lot can be accomplished by using the dynamic feature of Javascript a little bit of elbow grease. 

## Kata #1. compareMajorMinor

Unit test the function <code>compareMajorMinor</code>.

You'll leverage your analytics skills and the use of lists to plan your testing. 

## Kata #2. Left() and LeftFromFirst()
Unit test the utility functions <code>left()</code> and <code>leftFromFirst()</code>.

This Kata is the perfect opportunity to sharpen the data testing capabilities (parametrized tests) of your testing framework of choice.

## Kata #3. AlphabeticalAggregator
Unit thest the <code>AlphabeticalAggregator</code> class (extra bonus points for testing the other support classes in the kata).

This Kata will let you show off your Interaction-Testing skills. Remember: a unit is a fuzzy term and overdoing hurts.

### Hints
<blockquote> 
Use a more manageable alphabet provider for tests (twenty something is no fun).
</blockquote>

<blockquote >
Interesting scenarios to test:
<ul>
<li> there are *alphabet_length* buckets plust an overflow</li>
<li>all buckets have an initial corresponding to an alphabet letter except the overflow that has none</li>
<li>aggregables that start with a letter outside the alphabet go to the overflow</li>
<li>aggregables end up sorted in the buckets</li>
</blockquote>
