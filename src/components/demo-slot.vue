<template>
  <h1>slot</h1>
  <hello-world>hi there</hello-world>
  <h2>Default slot</h2>
  <default-slot>hello slot</default-slot>
  <default-slot>
    <strong>any</strong> <span>content</span>
  </default-slot>
  <h2>Default content</h2>
  <default-content></default-content>
  <h2>Named slot</h2>
  <named-slot>
    <template
        v-slot:header>
      <span>page header</span>
    </template>
    <template
        v-slot:default>
      <span>page body</span>
    </template>
    <template
        v-slot:footer>
      <span>page footer</span>
    </template>
  </named-slot>
  <named-slot>
    <span>abc</span>
    <template
        v-slot:footer>
      <span>page footer</span>
    </template>
    <span>123</span>
  </named-slot>
  <h2>Slot props</h2>
  <slot-props>
    <template
        #default="slotProps">
      <span>name: {{ slotProps.data.name }}, </span>
      <span>value: {{ slotProps.data.value }}</span>
    </template>
  </slot-props>
</template>

<script>
import HelloWorld from './hello-world.vue';
import DefaultSlot from './default-slot.vue';
import NamedSlot from './named-slot.vue';
import DefaultContent from './default-content.vue';
import SlotProps from './slot-props.vue';

export default {
  name: 'DemoSlot',
  components: {
    HelloWorld,
    DefaultSlot,
    NamedSlot,
    DefaultContent,
    SlotProps,
  },
};
</script>
