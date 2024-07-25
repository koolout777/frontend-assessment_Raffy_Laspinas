<template>
  <div>
    <HeroBanner
      bannerImage="https://unsplash.com/photos/white-garlic-C0rKB-dB-_o"
      bannerText="Exercise Two!"
    />
    <Tab />
    <Accordion />
    <section class="bonus-banana l-site__width">
      <h2 class="bonus-banana__title">Why the result of <span>('b' + 'a' + + 'a' + 'a').toLowerCase()</span> is banana?</h2>
      <div class="bonus-banana__content">
        <p class="bonus-banana__trivia bonus-banana__trivia--answer">The expression <span>('b' + 'a' + + 'a' + 'a').toLowerCase()</span> results in <span>'banana'</span> due to a combination of string concatenation and type coercion in JavaScript.</p>
        <p class="bonus-banana__trivia bonus-banana__trivia--answer">First, let's break down the expression step-by-step. The expression starts with the string <span>'b'</span>, and we concatenate it with the string <span>'a'</span>. This results in the string <span>'ba'</span>. Next, the expression includes <span>+ 'a'</span>, where the unary plus operator <span>(+)</span> attempts to convert its operand, <span>'a'</span>, into a number. Since <span>'a'</span> cannot be converted to a number, this results in <span>NaN (Not-a-Number)</span>.</p>
        <p class="bonus-banana__trivia bonus-banana__trivia--answer">When <span>NaN</span> is concatenated with the string <span>'ba'</span>, it produces <span>'baNaN'</span> because <span>NaN</span> is coerced into its string representation, <span>'NaN'</span>. Finally, the expression adds another <span>'a'</span> to <span>'baNaN'</span>, resulting in <span>'baNaNa'</span>.</p>
        <p class="bonus-banana__trivia bonus-banana__trivia--answer">After this, the <span>.toLowerCase() method</span> is applied to <span>'baNaNa'</span>, converting all characters to lowercase. As a result, <span>'baNaNa'</span> becomes <span>'banana'</span>.</p>
        <p class="bonus-banana__trivia bonus-banana__trivia--answer">Thus, the expression <span>('b' + 'a' + + 'a' + 'a').toLowerCase()</span> evaluates to <span>'banana'</span> due to the way string concatenation and type coercion interact in JavaScript.</p>
      </div>
    </section>
  </div>
</template>

<script>
import Tab from '../components/Tab.vue';
import HeroBanner from '../components/HeroBanner.vue';
import Accordion from '../components/Accordion.vue';

export default {
  name: 'Exercise',
  components: {
    HeroBanner,
    Tab,
    Accordion,
  },
};
</script>