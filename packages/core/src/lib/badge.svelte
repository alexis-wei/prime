<!--
  @component
  
  The badge is often used to display status information.

  ```svelte
  <Badge
    variant='green'
    label='Active'
  />
  ```
-->
<svelte:options immutable />

<script lang="ts">
import cx from 'classnames';

/** The badge text. */
export let label = '';

/** The color theme of the badge. */
export let variant: 'green' | 'orange' | 'red' | 'gray' | 'blue' = 'gray';

/** Additional CSS classes to pass to the badge. */
let extraClasses: cx.Argument = '';
export { extraClasses as cx };
</script>

<small
  class={cx(
    'inline-block rounded-full border px-2.5 py-0.5 text-xs',
    {
      'border-success-medium bg-success-light text-success-dark':
        variant === 'green',
      'border-warning-medium bg-warning-light text-warning-dark':
        variant === 'orange',
      'border-danger-medium bg-danger-light text-danger-dark':
        variant === 'red',
      'border-medium bg-disabled-light text-default': variant === 'gray',
      'border-info-medium bg-info-light text-info-dark': variant === 'blue',
    },
    extraClasses
  )}
>
  {label}
</small>
