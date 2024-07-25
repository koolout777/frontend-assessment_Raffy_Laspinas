<template>
  <div class="accordion-container l-site__width mt-10 black md:hidden lg:hidden">
    <div 
      v-for="(item, index) in data" 
      :key="index" 
      class="accordion-item"
    >
      <div 
        class="accordion-header" 
        @click="toggle(index)"
      >
        <span class="accordion-title">{{ item.title }}</span>
        <span class="accordion-icon">
          {{ openIndex === index ? '-' : '+' }}
        </span>
      </div>
      <transition name="fade">
        <div 
          :class="['accordion-content', { 'open': openIndex === index }]"
          v-html="item.content"
        ></div>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Accordion',
  data() {
    return {
      openIndex: 0, // Always open the first accordion by default
      data: [
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
    toggle(index) {
      this.openIndex = this.openIndex === index ? null : index;
    }
  }
};
</script>

