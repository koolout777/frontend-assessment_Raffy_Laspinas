<template>
  <div class="tabs-container l-site__width hidden md:block lg:block">
    <div class="tabs">
      <button
        class="tab-button"
        v-for="(tab, index) in tabs"
        :key="index"
        :class="{'is-active': index === activeTab}"
        @click="activeTab = index"
      >
        {{ tab.title }}
      </button>
    </div>
    <transition name="fade" @before-enter="beforeEnter" @enter="enter" @leave="leave">
      <div class="tab-content" v-html="tabs[activeTab].content" key="tab-content">
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'Tab',
  data() {
    return {
      activeTab: 0,
      tabs: [
        {
          title: 'Section 1',
          content: `<p>Maecenas nec semper ante, pellentesque posuere lorem. Nullam ipsum massa, consequat eget urna ut, pulvinar dignissim lorem. Nulla facilisi. Nam mattis eleifend metus. Fusce at commodo lorem. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Phasellus pellentesque elit sem, vel blandit posuere.</p>`
        },
        {
          title: 'Section 2',
          content: `<p>Mauris a orci sodales, scelerisque velit vitae, gravida nisl. Ut non laoreet eros, vel laoreet nisi. Praesent sed dolor dui. Proin non fringilla quam. Aliquam erat volutpat. Vestibulum vel arcu semper, lobortis turpis ac, ultricies nisi. Praesent id.</p>`
        },
        {
          title: 'Section 3',
          content: `<p>Sed elementum sapien ut sapien imperdiet, eu venenatis enim rhoncus. Praesent euismod tincidunt rhoncus. Duis cras amet:</p><ul><li>List item one</li><li>List item two</li><li>List item three</li></ul>`
        },
        {
          title: 'Section 4',
          content: `<p>Cras dictum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aenean lacinia mauris vel est.</p><p>Suspendisse eu nisl. Nullam ut libero. Integer dignissim consequat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>`
        }
      ]
    };
  },
  methods: {
    beforeEnter(el) {
      el.style.opacity = 0;
    },
    enter(el, done) {
      el.offsetHeight;
      el.style.transition = 'opacity 0.5s ease';
      el.style.opacity = 1;
      done();
    },
    leave(el, done) {
      el.style.transition = 'opacity 0.5s ease';
      el.style.opacity = 0;
      done();
    }
  }
};
</script>
