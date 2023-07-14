import { mount } from '@vue/test-utils';
import Dashboard from '@/views/Dashboard.vue';
import { describe, expect, test } from 'vitest';

describe('Dashboard.vue', () => {
  test('renders Dashboard on Dashboard page', () => {
    const wrapper = mount(Dashboard);
    expect(wrapper.text()).toMatch('Dashboard');
  });
});
